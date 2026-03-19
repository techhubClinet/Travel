import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import gsap from 'gsap';
import 'gsap/ScrollTrigger';

const REVEAL_SELECTORS = [
  '.hero-title',
  '.hero-subtitle',
  '.hero-cta',
  '.page-hero h1',
  '.page-hero-sub',
  '.breadcrumb',
  '.section-title',
  '.section-intro',
  '.service-card',
  '.value-item',
  '.deliver-list li',
  '.mission-vision-card',
  '.value-card',
  '.about-intro-content',
  '.about-intro-img',
  '.service-option-card',
  '.services-block-content',
  '.services-block-icon',
  '.deliver-types-list li',
  '.medical-intro-img',
  '.medical-copy',
  '.medical-trust-item',
  '.cta-strip-inner',
  '.contact-info',
  '.contact-form-wrap',
  '.contact-area-wrap',
  '.form-message',
  '.cta-strip-text',
].join(',');

function getTargetsInContainer(container) {
  const nodes = Array.from(container.querySelectorAll(REVEAL_SELECTORS));
  // De-dupe in case selectors overlap
  return Array.from(new Set(nodes));
}

export default function SmoothScrollRoot({ children }) {
  const containerRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Toggle a class so CSS can keep native scrolling working when needed.
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    container.classList.toggle('is-reduced-motion', prefersReducedMotion);

    // Kill old triggers when navigating between routes.
    ScrollTrigger.getAll().forEach((t) => t.kill());

    let loco = null;

    const handleRefresh = () => {
      if (loco) loco.update();
    };

    const init = () => {
      const targets = getTargetsInContainer(container);
      // If a page is empty (or selectors change), do nothing.
      if (!targets.length) return;

      const useLoco = !prefersReducedMotion;

      let scroller;

      // Premium reveal baseline (works for locomotive + native scrolling).
      gsap.set(targets, { opacity: 0, y: useLoco ? 24 : 14 });

      if (useLoco) {
        try {
          loco = new LocomotiveScroll({
            el: container,
            smooth: true,
            lerp: 0.08,
            multiplier: 1,
            reloadOnContext: true,
            smartphone: { smooth: false },
            tablet: { smooth: false },
          });

          ScrollTrigger.scrollerProxy(container, {
            scrollTop(value) {
              if (arguments.length) {
                loco.scrollTo(value, { duration: 0, disableLerp: true });
              }
              return (
                loco?.scroll?.instance?.scroll?.y ??
                loco?.scroll?.instance?.y ??
                0
              );
            },
            getBoundingClientRect() {
              return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight,
              };
            },
            pinType: container.style.transform ? 'transform' : 'fixed',
          });

          loco.on('scroll', ScrollTrigger.update);
          ScrollTrigger.addEventListener('refresh', handleRefresh);
          scroller = container;
        } catch (e) {
          // If locomotive/proxy fails, fall back to native scrolling reveals.
          console.error('SmoothScrollRoot: Locomotive/ScrollTrigger proxy failed', e);
          loco = null;
          scroller = undefined;
        }
      }

      targets.forEach((el, i) => {
        const scrollTriggerConfig = {
          trigger: el,
          start: 'top 85%',
          end: 'bottom 40%',
          toggleActions: 'play none none reverse',
        };
        if (scroller) scrollTriggerConfig.scroller = scroller;

        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power3.out',
          delay: Math.min(i * 0.01, 0.2),
          scrollTrigger: scrollTriggerConfig,
        });
      });

      // Premium hero overlay motion (subtle parallax/glow feel).
      const hero = container.querySelector('.hero');
      const overlay = container.querySelector('.hero-overlay');
      if (hero && overlay) {
        const heroOverlayTrigger = {
          trigger: hero,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        };
        if (scroller) heroOverlayTrigger.scroller = scroller;

        gsap.to(overlay, {
          y: 24,
          scale: 1.02,
          ease: 'none',
          scrollTrigger: heroOverlayTrigger,
        });
      }

      ScrollTrigger.refresh(true);
      loco?.update?.();

      // Handle hash navigation (e.g. /services#same-day) with Locomotive.
      const hash = location.hash?.startsWith('#') ? location.hash.slice(1) : '';
      if (hash) {
        const target = container.querySelector(`#${CSS.escape(hash)}`);
        if (target) {
          const headerHeight = Number(
            getComputedStyle(document.documentElement)
              .getPropertyValue('--header-height')
              .replace('px', '')
          );

          if (loco) {
            loco.scrollTo(target, {
              duration: 800,
              offset: -(Number.isFinite(headerHeight) ? headerHeight : 140),
            });
          } else {
            const y =
              window.scrollY +
              target.getBoundingClientRect().top -
              (Number.isFinite(headerHeight) ? headerHeight : 140);
            window.scrollTo({ top: Math.max(0, y), behavior: 'auto' });
          }
        }
      }

      // Fallback: if ScrollTrigger didn't reveal everything, reveal via IO.
      // This prevents the "nothing happened" case when a scroll proxy fails.
      window.setTimeout(() => {
        const anyStillHidden = targets.some((el) => parseFloat(getComputedStyle(el).opacity) < 0.5);
        if (!anyStillHidden) return;

        if (!('IntersectionObserver' in window)) {
          gsap.set(targets, { opacity: 1, y: 0 });
          return;
        }

        const observer = new IntersectionObserver(
          (entries, obs) => {
            entries.forEach((entry) => {
              if (!entry.isIntersecting) return;
              gsap.to(entry.target, {
                opacity: 1,
                y: 0,
                duration: 0.65,
                ease: 'power2.out',
              });
              obs.unobserve(entry.target);
            });
          },
          { threshold: 0.15 }
        );

        targets.forEach((el) => {
          if (parseFloat(getComputedStyle(el).opacity) < 0.5) observer.observe(el);
        });

        window.setTimeout(() => observer.disconnect(), 5000);
      }, 900);
    };

    // Let React paint the new route before measuring.
    const t = window.setTimeout(init, 0);

    return () => {
      window.clearTimeout(t);
      ScrollTrigger.getAll().forEach((tr) => tr.kill());
      ScrollTrigger.removeEventListener('refresh', handleRefresh);
      if (loco) loco.destroy();
      loco = null;
    };
  }, [location.pathname, location.search, location.hash]);

  return (
    <div ref={containerRef} className="smooth-wrapper" data-scroll-container>
      <div className="smooth-section" data-scroll-section>
        {children}
      </div>
    </div>
  );
}

