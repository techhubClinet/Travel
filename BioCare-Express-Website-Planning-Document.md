# BioCare Express — Website Planning Document  
**Milestone 1: Planning, Structure & Layout**  
*No development or code — planning only*

**Client:** BioCare Express  
**Document version:** 1.0  
**Reference style:** Street Fleet (streetfleet.com) — modern corporate courier  
**Design direction:** Modern, corporate, clean, professional, courier/logistics

---

## 1. Website Sitemap

### Primary navigation (4–6 pages)

```
BioCare Express
├── Home
├── About
├── Services
├── Medical Delivery     [optional standalone page]
├── Contact
└── Request Delivery    [optional — can be CTA/form rather than full page]
```

**Recommended structure (5 pages):**

| # | Page             | URL pattern        | Purpose                                      |
|---|------------------|--------------------|----------------------------------------------|
| 1 | Home             | `/`                | Entry, value prop, service teasers, CTAs     |
| 2 | About            | `/about`           | Company story, mission, vision, values      |
| 3 | Services         | `/services`        | All service tiers and route options          |
| 4 | Medical Delivery | `/services/medical`| Dedicated medical delivery offering         |
| 5 | Contact          | `/contact`         | Phone, form, hours, CTA to request delivery |

**Request Delivery** can be:
- A prominent CTA (button/link) that goes to **Contact** with a pre-selected “Request delivery” intent, or  
- A dedicated `/request-delivery` page with a short form (pickup, delivery, service level, contact info).

**Sitemap diagram (wireframe):**

```
                    [HOME]
                       |
    +------------------+------------------+
    |                  |                  |
[ABOUT]           [SERVICES]          [CONTACT]
    |                  |
    |            [Medical Delivery]
    |                  |
    +-------- [Request Delivery] --------+
              (CTA or sub-page)
```

---

## 2. Navigation Menu Structure

### Desktop (horizontal)

- **Logo** (left): BioCare Express + optional small icon  
- **Nav items** (center or right): Home | About | Services | Medical Delivery | Contact  
- **Primary CTA** (right): “Request Delivery” or “Get a Quote” — button style  

### Mobile (hamburger)

- Same items in a vertical or slide-out menu  
- “Request Delivery” as a full-width button at top or bottom of menu  
- Tap outside or “Close” to dismiss  

### Footer nav

- Repeat key pages: About, Services, Medical Delivery, Contact  
- Optional: Request Delivery, Privacy Policy (when added later)  

**Mega-menu (optional):** On “Services” hover, show a dropdown with: Same-Day On-Demand | Scheduled Routes | Medical Deliveries — each linking to the Services page with anchor (e.g. `#same-day`, `#scheduled`, `#medical`).

---

## 3. Page-by-Page Structure & Section Wireframes

---

### PAGE 1: HOME

**Goal:** Communicate who BioCare Express is, what they offer, and drive actions (request delivery, call, or go to Services).

#### Section 1 — Hero

**Layout (wireframe):**

```
+------------------------------------------------------------------+
|  [Logo]                    Home  About  Services  Medical  Contact  [Request Delivery]  |
+------------------------------------------------------------------+
|                                                                  |
|     Moving What Matters—Safely, Quickly, and Reliably.           |
|                                                                  |
|     [Supporting line: Minnesota courier — same-day, scheduled,   |
|      and distribution delivery for businesses and healthcare.]   |
|                                                                  |
|     [Request Delivery]    [Call 612-205-1459]                    |
|                                                                  |
|     [Hero image: delivery driver / van / medical supply box]     |
+------------------------------------------------------------------+
```

**Content:**
- **Headline:** Tagline — “Moving What Matters—Safely, Quickly, and Reliably.”
- **Subhead:** One sentence: Minnesota-based courier; same-day, scheduled, and distribution services for businesses and healthcare.
- **CTAs:** Primary: “Request Delivery” | Secondary: “Call 612-205-1459” (click-to-call on mobile).

**UI direction:** Full-width hero; headline large and bold; CTAs as button + text/phone link; background image or subtle pattern; optional overlay for readability.

**Image/icon suggestion:** Hero image — professional courier van, driver with tablet, or medical supply delivery. If no photo: abstract logistics graphic (route map, package icon, Minnesota outline).

---

#### Section 2 — Service Cards (3 columns)

**Layout:**

```
+-------------------+-------------------+-------------------+
|  [Icon]           |  [Icon]           |  [Icon]           |
|  Same-Day         |  Scheduled Route  |  Medical          |
|  On-Demand        |  Delivery         |  Deliveries       |
|  Short blurb      |  Short blurb      |  Short blurb      |
|  [Learn more →]   |  [Learn more →]   |  [Learn more →]   |
+-------------------+-------------------+-------------------+
```

**Content:**
- **Card 1:** Same-Day On-Demand — 90 min to same-day before 5 PM. For urgent documents, supplies, parts.
- **Card 2:** Scheduled Route Delivery — Daily routes, inter-office mail, bank deposits, supply runs.
- **Card 3:** Medical Deliveries — Supplies, equipment, lab materials, pharmaceuticals, records.

**CTAs:** Each card links to Services (with anchor) or to Medical Delivery page for card 3.

**Icons:** Van/clock, calendar/route, medical cross or pill/box. Use one style (line or solid) site-wide.

---

#### Section 3 — Why BioCare Express (value / trust)

**Layout:**

```
+------------------------------------------------------------------+
|  Why Businesses and Healthcare Providers Choose BioCare Express   |
+------------------------------------------------------------------+
|  [Icon] Reliable    [Icon] Professional   [Icon] On Time         |
|  [Icon] Care        [Icon] Efficient       [Icon] Dedicated       |
|  (Core values as short labels; optional one-line each)           |
+------------------------------------------------------------------+
```

**Content:** Use the six core values as trust points: Reliability, Professionalism, Customer Commitment, Care and Responsibility, Efficiency and Timeliness, Dedication and Teamwork.

**UI:** Icon + label; 2×3 or 3×2 grid; consistent spacing.

---

#### Section 4 — What We Deliver (content block)

**Layout:**

```
+------------------------------------------------------------------+
|  What We Deliver                                                  |
|  Documents • Medical supplies & equipment • Office supplies •    |
|  Parts • Mortgage documents • Bank deposits • Mail • And more     |
+------------------------------------------------------------------+
```

**Content:** Bullet or tag list from About: important documents, medical supplies and equipment, office supplies, parts, mortgage documents, bank deposits, mail, and other critical items.

**Optional:** Simple icons per category or a single “delivery types” illustration.

---

#### Section 5 — CTA strip

**Layout:**

```
+------------------------------------------------------------------+
|  Need a delivery? Get a quote or call us: 612-205-1459           |
|  [Request Delivery]                                               |
+------------------------------------------------------------------+
```

**Content:** One line + primary button. Background can be brand color or subtle contrast.

---

#### Section 6 — Footer (see Footer structure below)

---

### PAGE 2: ABOUT

**Goal:** Build trust through company story, mission, vision, and values.

#### Section 1 — Page hero / breadcrumb

**Layout:**

```
+------------------------------------------------------------------+
|  [Logo]    Home  About  Services  Medical  Contact  [Request Delivery]  |
+------------------------------------------------------------------+
|  Home / About                                                     |
|  About BioCare Express                                            |
|  [Optional subline: Minnesota courier you can count on]           |
+------------------------------------------------------------------+
```

**Content:** Page title “About BioCare Express”; optional short subline.

---

#### Section 2 — Who we are (main copy)

**Layout:**

```
+------------------------------------------------------------------+
|  [Image: team / van / Minnesota]  |  BioCare Express is a         |
|                                   |  Minnesota-based courier       |
|                                   |  company committed to          |
|                                   |  reliable, timely, professional|
|                                   |  delivery... [full ABOUT text] |
+------------------------------------------------------------------+
```

**Content:** Full About paragraph (reliable, timely, professional; on-demand, scheduled, distribution; documents, medical supplies, office supplies, parts, mortgage, bank, mail, etc.).

**Image suggestion:** Team photo, branded vehicle, or Minnesota skyline/office.

---

#### Section 3 — Mission & vision (2 columns or stacked)

**Layout:**

```
+---------------------------+---------------------------+
|  Our Mission              |  Our Vision               |
|  [Icon]                   |  [Icon]                   |
|  Dependable, secure,      |  Become one of Minnesota’s|
|  timely courier solutions |  most trusted courier      |
|  that keep businesses,    |  providers by setting the |
|  healthcare, and          |  standard for reliability, |
|  communities connected.   |  innovation, excellence.  |
+---------------------------+---------------------------+
```

**Content:** Use Mission and Vision text exactly as provided.

---

#### Section 4 — Core values (grid)

**Layout:**

```
+------------------------------------------------------------------+
|  Our Core Values                                                  |
|  [Icon] Reliability    [Icon] Professionalism  [Icon] Customer   |
|         Commitment                                                |
|  [Icon] Care &         [Icon] Efficiency &      [Icon] Dedication |
|         Responsibility   Timeliness             & Teamwork        |
+------------------------------------------------------------------+
```

**Content:** All six values with optional one-line description each.

---

#### Section 5 — CTA

**Layout:**

```
+------------------------------------------------------------------+
|  Ready to work with us?  [Request Delivery]  or  [Contact Us]     |
+------------------------------------------------------------------+
```

---

#### Section 6 — Footer

---

### PAGE 3: SERVICES

**Goal:** Clearly present all service options and timeframes; drive “Request Delivery” or “Contact.”

#### Section 1 — Page hero

**Layout:** Same pattern as About — breadcrumb, title “Our Services,” optional subline.

---

#### Section 2 — Same-day on-demand (accordion or cards)

**Layout:**

```
+------------------------------------------------------------------+
|  Same-Day On-Demand Delivery                                      |
|  Multiple service levels for any urgency.                         |
+------------------------------------------------------------------+
|  [•] Direct Service          [•] 90 min    [•] 2 hour             |
|  [•] 3 hour                  [•] 4 hour    [•] Same-day by 5 PM   |
+------------------------------------------------------------------+
```

**Content:** List all options: Direct Service, 90 min, 2 hour, 3 hour, 4 hour, Same-day before 5 PM. Short line above: “Multiple service levels to suit your urgency.”

**UI:** Cards or a simple list with icons; optional accordion if adding descriptions later.

---

#### Section 3 — Scheduled route delivery

**Layout:**

```
+------------------------------------------------------------------+
|  Scheduled Route Delivery                                         |
|  Daily and recurring routes for predictable needs.               |
+------------------------------------------------------------------+
|  • Daily document transfers    • Inter-office mail               |
|  • Routine supply transport    • Bank deposits                   |
|  • Medical facility supply routes                                 |
+------------------------------------------------------------------+
```

**Content:** Use the Scheduled Route list as provided.

---

#### Section 4 — Medical deliveries (teaser + link)

**Layout:**

```
+------------------------------------------------------------------+
|  Medical Deliveries                                               |
|  Medical supplies & equipment • Lab materials • Pharmaceuticals   |
|  • Medical records                                               |
|  [Learn more about Medical Delivery →]                            |
+------------------------------------------------------------------+
```

**Content:** Bullet list; CTA to “Medical Delivery” page or `#medical` on same page.

---

#### Section 5 — What we carry (optional)

**Layout:** Short line or small grid: “We deliver documents, medical supplies, office supplies, parts, mortgage documents, bank deposits, mail, and more.” Optional icons.

---

#### Section 6 — CTA

**Layout:** “Get a quote or request delivery” + [Request Delivery] + phone 612-205-1459.

---

#### Section 7 — Footer

---

### PAGE 4: MEDICAL DELIVERY (optional standalone)

**Goal:** Position BioCare Express as the go-to for medical/logistics in Minnesota.

#### Section 1 — Page hero

**Content:** Title “Medical Deliveries”; subline: “Safe, compliant delivery of medical supplies, lab materials, and pharmaceuticals across Minnesota.”

---

#### Section 2 — Service list + short copy

**Layout:**

```
+------------------------------------------------------------------+
|  [Image: medical supply / lab / van]  |  We deliver:              |
|                                        |  • Medical supplies &     |
|                                        |    equipment              |
|                                        |  • Laboratory materials   |
|                                        |  • Pharmaceuticals        |
|                                        |  • Medical records        |
+------------------------------------------------------------------+
```

**Content:** Full Medical Deliveries list; 1–2 sentences on reliability and care for healthcare clients.

**Image suggestion:** Medical supply box, lab materials (generic), or van with healthcare branding (stock or placeholder).

---

#### Section 3 — Why choose us (optional)

**Layout:** 2–3 short points: reliability, timeliness, care with sensitive materials. Reuse core values if needed.

---

#### Section 4 — CTA

**Layout:** “Request a medical delivery” → [Request Delivery] or Contact with “Medical delivery” subject.

---

#### Section 5 — Footer

---

### PAGE 5: CONTACT

**Goal:** Make it easy to call or send a message; support “Request Delivery” flow.

#### Section 1 — Page hero

**Content:** Title “Contact Us”; subline: “Get in touch for a quote or to schedule a delivery.”

---

#### Section 2 — Contact methods + form (2 columns on desktop)

**Layout:**

```
+-----------------------------------+-----------------------------------+
|  Get in touch                     |  Send a message                   |
|                                   |                                   |
|  [Phone icon] 612-205-1459        |  Name *                           |
|  (Click-to-call on mobile)        |  Email *                          |
|                                   |  Company (optional)               |
|  [Optional: service hours]        |  Service type: [dropdown]          |
|                                   |  Message *                        |
|  [Request Delivery] button       |  [Submit]                         |
+-----------------------------------+-----------------------------------+
```

**Content:**
- Left: Phone 612-205-1459 (prominent); optional “Request Delivery” button; optional hours or “We’ll respond within one business day.”
- Right: Form — Name, Email, Company (optional), Service type (e.g. Same-day / Scheduled / Medical / General), Message.

**Form behavior:** Submit to backend (later milestone); optional “Request type” = “Request Delivery” to pre-fill or route to delivery workflow.

---

#### Section 3 — Optional map or area served

**Layout:** “Serving Minnesota and the Twin Cities” with a simple map or list of areas. No need for interactive map in Milestone 1.

---

#### Section 4 — Footer

---

### PAGE 6 (OPTIONAL): REQUEST DELIVERY

If implemented as a separate page:

- **Hero:** “Request a delivery” + short line.
- **Form:** Pickup address, Delivery address, Service level (Same-day 90 min / 2 hr / etc., Scheduled, Medical), Contact info, Message.
- **Sidebar or below:** Phone 612-205-1459 and “Or contact us for a custom quote.”
- **Footer:** Same as site.

---

## 4. Hero Section UI Layout Suggestions

- **Style:** Full-width; image or gradient background; overlay if needed for contrast.
- **Typography:** One clear headline (tagline on Home); one subline; max two CTAs.
- **CTAs:** Primary = solid button “Request Delivery”; Secondary = outline or text “Call 612-205-1459.”
- **Height:** ~60–70vh desktop; taller on mobile so headline and one CTA are above the fold.
- **Reference:** Street Fleet–style hero with clear headline + 2–3 action buttons; avoid clutter.

---

## 5. Call-to-Action Recommendations

| Location              | CTA type            | Label / action                    |
|-----------------------|---------------------|-----------------------------------|
| Global (header)       | Primary button      | “Request Delivery” or “Get a Quote” |
| Home hero             | Primary + secondary| “Request Delivery” + “Call 612-205-1459” |
| Home service cards    | Text link           | “Learn more” → Services (+ anchor) |
| Home / About / bottom | Strip               | “Request Delivery”                |
| Services (each block) | Text or button      | “Get a quote” or “Request delivery” |
| Medical Delivery      | Button              | “Request a medical delivery”      |
| Contact               | In content + form   | “Request Delivery” + “Submit”     |
| Footer                | Button or link      | “Request Delivery” or “Contact”   |

**Principles:** One primary action per screen (“Request Delivery” or “Get a Quote”); phone number visible on mobile (click-to-call); no more than two CTAs in hero.

---

## 6. Footer Structure

**Layout (wireframe):**

```
+------------------------------------------------------------------+
|  [Logo] BioCare Express                                          |
|  Moving What Matters—Safely, Quickly, and Reliably.               |
+------------------------------------------------------------------+
|  Quick links     |  Services        |  Contact                    |
|  Home            |  Same-day        |  Phone: 612-205-1459         |
|  About           |  Scheduled       |  [Request Delivery]          |
|  Services        |  Medical         |                             |
|  Medical Delivery|  Contact         |                             |
|  Contact         |                  |                             |
+------------------------------------------------------------------+
|  © [Year] BioCare Express. All rights reserved.                  |
+------------------------------------------------------------------+
```

**Content:**
- Logo + tagline.
- Column 1: Quick links (Home, About, Services, Medical Delivery, Contact).
- Column 2: Services (same-day, scheduled, medical) — link to Services or anchors.
- Column 3: Phone; “Request Delivery” button or link.
- Bottom bar: Copyright.

**Mobile:** Stack columns; keep phone and “Request Delivery” prominent.

---

## 7. Icons & Image Suggestions (where none provided)

| Use case           | Suggestion |
|--------------------|------------|
| Favicon / logo mark| Stylized “B” or box/arrow; medical + speed hint optional. |
| Hero (Home)        | Courier van, driver with device, or medical supply delivery; Minnesota or urban background. |
| About              | Team photo, office, or branded vehicle. |
| Same-day service   | Clock, van, or lightning bolt. |
| Scheduled routes   | Calendar, map/route, or recurring arrows. |
| Medical            | Medical cross, box/package with cross, or lab vial (generic). |
| Values             | Checkmark (reliability), briefcase (professional), handshake (commitment), heart/shield (care), clock (efficiency), people (teamwork). |
| Documents / items  | Document, box, medical kit, envelope — small icons for “what we deliver.” |

**Style:** Single family (e.g. line icons or solid); one stroke weight; corporate blue/green/gray palette to align with “care” and “express.”

---

## 8. Mobile-Friendly Layout Considerations

- **Navigation:** Hamburger menu; “Request Delivery” as first or last item and/or sticky bar.
- **Hero:** Larger tap targets; one primary CTA above fold; reduce text length.
- **Service cards:** Stack vertically; full-width cards or list; icons above text.
- **Values / lists:** Single column or 2 columns max; comfortable spacing.
- **Contact:** Form full-width; phone as prominent tap-to-call link.
- **Footer:** Single column or 2 columns; phone and CTA repeated.
- **Touch:** Buttons min 44px height; spacing between links.
- **Performance:** Optimize hero image (e.g. WebP, responsive srcset) in later milestone.

---

## 9. Content Placement Summary

| Content block        | Page(s)        | Section / placement        |
|----------------------|----------------|----------------------------|
| Tagline              | Home hero, footer | Headline; footer tagline   |
| About (company)      | About          | “Who we are”               |
| Mission              | About          | Mission & vision block     |
| Vision               | About          | Mission & vision block     |
| Core values          | Home (trust), About (full) | Value strips / grids       |
| Same-day options     | Home (teaser), Services (full) | Service cards; Services list |
| Scheduled routes     | Home (teaser), Services (full) | Service cards; Services list |
| Medical list         | Home (teaser), Services, Medical Delivery | Cards; list; dedicated page |
| Contact phone        | Header (optional), Home CTA, Contact, Footer | All CTAs and contact section |
| “What we deliver”    | Home, optionally Services | Content block / list       |

---

## 10. Next Steps (post–Milestone 1)

- Finalize sitemap (confirm 5 vs 6 pages and Request Delivery as page vs CTA).
- Source or create hero image, service icons, and value icons.
- Define brand colors and typography (corporate, clean).
- Implement wireframes in design tool (Figma/Sketch) or move to Milestone 2 (development) with this document as the blueprint.

---

*End of planning document. No code or development in this milestone.*
