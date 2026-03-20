import { useEffect, useMemo, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import gsap from 'gsap';

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
  '.footer-main',
  '.footer-bottom',
  '.footer-brand',
  '.footer-links',
  '.footer-services',
  '.footer-contact',
].join(',');

function getTargets(container) {
  if (!container) return [];
  const nodes = Array.from(container.querySelectorAll(REVEAL_SELECTORS));
  return Array.from(new Set(nodes));
}

function animateSection(root, targets, { isFeatureSection, initialDelay, prefersReducedMotion }) {
  if (!targets.length) return;

  const heading = targets.find((el) => el.matches('.section-title, .page-hero h1, .hero-title'));
  const intro = targets.find((el) => el.matches('.section-intro, .page-hero-sub, .hero-subtitle, .deliver-intro, .cta-strip-text'));
  const cards = targets.filter((el) =>
    el.matches(
      '.service-card, .value-item, .deliver-list li, .deliver-types-list li, .value-card, .mission-vision-card, .medical-trust-item, .footer-links, .footer-services, .footer-contact, .footer-brand'
    )
  );
  const rest = targets.filter((el) => el !== heading && el !== intro && !cards.includes(el));

  const tl = gsap.timeline({ defaults: { ease: 'power4.out' }, delay: initialDelay });

  if (heading) {
    tl.fromTo(
      heading,
      { opacity: 0, y: 48, filter: 'blur(10px)' },
      { opacity: 1, y: 0, filter: 'blur(0px)', duration: prefersReducedMotion ? 0.9 : 1.15 },
      0
    );
  }

  if (intro) {
    tl.fromTo(
      intro,
      { opacity: 0, y: 34, filter: 'blur(8px)' },
      { opacity: 1, y: 0, filter: 'blur(0px)', duration: prefersReducedMotion ? 0.8 : 1.05 },
      heading ? '-=0.78' : 0
    );
  }

  if (cards.length) {
    tl.fromTo(
      cards,
      {
        opacity: 0,
        y: 64,
        scale: 0.9,
        rotateX: 10,
        transformPerspective: 900,
        transformOrigin: '50% 100%',
        filter: 'blur(6px)',
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        rotateX: 0,
        filter: 'blur(0px)',
        duration: isFeatureSection ? 1.45 : 1.2,
        stagger: isFeatureSection ? 0.14 : 0.08,
      },
      heading || intro ? '-=0.65' : 0
    );

    // Add subtle living motion after reveal for premium feel.
    if (!prefersReducedMotion) {
      gsap.to(cards, {
        y: '+=4',
        duration: 2.6,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: { each: 0.12, from: 'random' },
      });
    }
  }

  if (rest.length) {
    tl.fromTo(
      rest,
      { opacity: 0, y: 30, filter: 'blur(6px)' },
      {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        duration: 1,
        stagger: 0.06,
      },
      '-=0.55'
    );
  }

  // Light section punch for stronger visual payoff.
  if (!prefersReducedMotion) {
    gsap.fromTo(
      root,
      { filter: 'brightness(0.95)' },
      { filter: 'brightness(1)', duration: 1.1, ease: 'power2.out', delay: initialDelay }
    );
  }
}

export default function SmoothScrollRootIO({ children }) {
  const containerRef = useRef(null);
  const location = useLocation();

  const selectors = useMemo(() => REVEAL_SELECTORS, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    container.classList.toggle('is-reduced-motion', prefersReducedMotion);
    container.classList.remove('is-smooth');

    // Locomotive can interfere with native scrolling on mobile. Use native scroll there.
    const isMobile =
      window.matchMedia('(max-width: 768px)').matches ||
      window.matchMedia('(hover: none) and (pointer: coarse)').matches;
    const shouldUseLoco = !prefersReducedMotion && !isMobile;
    container.classList.toggle('is-smooth', shouldUseLoco);

    let loco = null;
    let observer = null;

    const init = () => {
      const targets = getTargets(container);
      if (!targets.length) {
        // Nothing to animate; keep native scroll working.
        container.classList.remove('is-smooth');
        return;
      }

      // Baseline hidden state; each section timeline reveals with richer motion.
      gsap.set(targets, { opacity: 0, y: prefersReducedMotion ? 16 : 28, filter: 'blur(4px)' });

      // Locomotive smooth scroll (optional).
      if (shouldUseLoco) {
        try {
          const content = container.querySelector('[data-scroll-section]') || container;
          loco = new LocomotiveScroll({
            lenisOptions: {
              wrapper: container,
              content,
              smoothWheel: true,
              lerp: 0.08,
            },
            autoStart: true,
          });
        } catch (e) {
          console.error('SmoothScrollRootIO: Locomotive init failed', e);
          loco = null;
          container.classList.remove('is-smooth');
        }
      }

      const targetsSet = new Set(targets);

      // Much slower so reveals are noticeable while scrolling.
      // Trigger animations per *section*, not per individual card/item.
      const revealDuration = prefersReducedMotion ? 1.25 : 1.5;
      const groupStagger = prefersReducedMotion ? 0.025 : 0.03;

      const groupRoots = Array.from(
        container.querySelectorAll('.hero, .page-hero, .section, .site-footer')
      );
      const uniqueGroupRoots = Array.from(new Set(groupRoots));

      const groupToTargets = new Map();
      uniqueGroupRoots.forEach((root) => {
        const els = Array.from(root.querySelectorAll(REVEAL_SELECTORS)).filter((el) => targetsSet.has(el));
        if (els.length) groupToTargets.set(root, els);
      });

      if ('IntersectionObserver' in window) {
        const revealedRoots = new Set();
        observer = new IntersectionObserver(
          (entries, obs) => {
            entries.forEach((entry) => {
              if (!entry.isIntersecting) return;
              const root = entry.target;
              if (!groupToTargets.has(root)) return;
              if (revealedRoots.has(root)) return;

              revealedRoots.add(root);
              const els = groupToTargets.get(root) ?? [];
              const isFeatureSection =
                root.classList.contains('reveal-services-section') ||
                root.classList.contains('reveal-why-choose-section') ||
                root.classList.contains('reveal-deliver-section') ||
                root.classList.contains('reveal-footer-section');
              animateSection(root, els, {
                isFeatureSection,
                initialDelay: isFeatureSection ? 0.22 : 0.04,
                prefersReducedMotion,
              });

              obs.unobserve(root);
            });
          },
          { threshold: 0.08, rootMargin: '0px 0px -35% 0px' }
        );

        uniqueGroupRoots.forEach((root) => {
          if (groupToTargets.has(root)) observer.observe(root);
        });

      // If the first section(s) are visible on initial load, animate with a small delay.
      // This gives the hero text a premium entrance instead of appearing instantly.
      const initialLoadDelay = 0.45;
        uniqueGroupRoots.forEach((root) => {
          if (!groupToTargets.has(root)) return;
          const rect = root.getBoundingClientRect();
          const inView = rect.top < window.innerHeight * 0.85 && rect.bottom > window.innerHeight * 0.2;
          if (!inView) return;

          revealedRoots.add(root);
          const els = groupToTargets.get(root) ?? [];
          const isFeatureSection =
            root.classList.contains('reveal-services-section') ||
            root.classList.contains('reveal-why-choose-section') ||
            root.classList.contains('reveal-deliver-section') ||
            root.classList.contains('reveal-footer-section');
          animateSection(root, els, {
            isFeatureSection,
            initialDelay: isFeatureSection ? 0.2 : initialLoadDelay,
            prefersReducedMotion,
          });

          observer.unobserve(root);
        });
      }

      // Native hash fallback (and smooth loco scroll if available).
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
              offset: -(Number.isFinite(headerHeight) ? headerHeight : 140),
              duration: 0.8,
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

      // Safety: if IO never fires for any reason, unhide after a moment.
      window.setTimeout(() => {
        const stillHidden = targets.some((el) => parseFloat(getComputedStyle(el).opacity) < 0.5);
        if (!stillHidden) return;
        gsap.set(targets, { opacity: 1, y: 0 });
      }, 2600);
    };

    const t = window.setTimeout(init, 0);
    return () => {
      window.clearTimeout(t);
      observer?.disconnect();
      if (loco) loco.destroy();
      loco = null;
    };
  }, [location.pathname, location.search, location.hash, selectors]);

  return (
    <div ref={containerRef} className="smooth-wrapper" data-scroll-container>
      <div className="smooth-section" data-scroll-section>
        {children}
      </div>
    </div>
  );
}

