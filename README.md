# Top Level Garage Doors - website

Vite + React + React Router. Every route is **prerendered to static HTML** at build time, so search engines and social scrapers get fully-formed pages with real titles, meta tags and JSON-LD instead of an empty `<div id="root">`. React hydrates on top.

---

## Quick start

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # builds + prerenders 29 pages into dist/
npm run preview  # serve the production build locally
```

---

## Before you go live - 3 things

### 1. Set the real domain

`SITE_URL` drives canonicals, Open Graph URLs, `sitemap.xml` and `robots.txt`. It is set to `https://toplevelgaragedoorssc.com`. If the domain ever changes, update it in **both** places:

- `src/data/site.js` → `export const SITE_URL`
- Netlify → Site configuration → Environment variables → `SITE_URL`

### 2. Point the Hostinger domain at Netlify

In hPanel → DNS Zone Editor:

| Type | Name | Value |
|---|---|---|
| A | `@` | `75.2.60.5` |
| CNAME | `www` | `your-site.netlify.app` |

Then Netlify → Domain management → Add custom domain. SSL provisions automatically.

### 3. Turn on form notifications

Netlify → Forms → Settings → Form notifications → **Email notification** → `topleveldoorsandgatessc@gmail.com`.

Two forms are registered: `free-estimate` and `contact`.

> **Do not delete `public/__forms.html`.** Netlify detects forms by parsing static HTML at build time. A React SPA renders its forms in JavaScript, which the build-time crawler never sees - without that file, every submission silently disappears. Field names in it must stay in sync with `src/components/LeadForm.jsx`.

---

## Editing content

Almost everything lives in **`src/data/site.js`** - one file, no hunting through components:

- `biz` - name, phone, address, email, license, hours. **Opening hours live in `biz.hoursList` and are mirrored in `src/lib/schema.js`.** Google cross-checks the schema against the Google Business Profile, so if the hours change, both must be updated together or the listing can be flagged. Changing the phone number here updates it in the header, footer, every CTA, all schema markup and the mobile call bar at once.
- `services` - the 8 service pages. Add an object, and a new page, sitemap entry, nav link and schema block are generated automatically.
- `areas` - the 13 city pages. Same deal.
- `homeFaqs`, `trustPoints`, `processSteps` - homepage content blocks.

Adding a service or city requires no other edits. The route, prerendered HTML, internal links, breadcrumbs and sitemap entry all follow from the data.

---

## SEO implementation

| Checklist item | Where |
|---|---|
| Clean keyword+location URLs | `/services/garage-door-spring-repair`, `/service-areas/mount-pleasant` |
| Unique title + meta description per page | `metaTitle` / `metaDescription` in `site.js` |
| H1 distinct from SEO title | `h1` field, separate from `metaTitle` |
| H2 / H3 hierarchy | One H1 per page, H2 for major sections, H3 for supporting content |
| Organization + LocalBusiness schema | `src/lib/schema.js`, homepage |
| Service schema | Every `/services/*` page |
| LocalBusiness + GeoCircle schema | Every `/service-areas/*` page |
| FAQPage schema | Homepage, service pages, city pages |
| BreadcrumbList schema | All interior pages |
| Canonical tags | Every page, absolute URLs |
| Open Graph + Twitter cards | Every page |
| Internal linking | Services ↔ areas cross-linked both directions, plus footer |
| NAP consistency | Single source in `biz` - identical everywhere |
| sitemap.xml + robots.txt | Generated at build; legal pages excluded and `noindex` |
| Image optimization | WebP at 3 widths with `srcset`/`sizes`, explicit width/height, lazy below fold |
| Mobile / tablet / desktop | Breakpoints at 560, 620, 900, 1000, 1040px |

**Still to do by hand:** Google Business Profile, and swapping in real project photos.

---

## Accessibility & performance notes

- Skip link, visible focus rings, full keyboard nav, focus trap in the modal
- `prefers-reduced-motion` respected - the door opens instantly, reveals don't animate
- Scroll reveals render **visible** server-side, so content is never hidden from crawlers or no-JS users
- Fonts load non-blocking with `preconnect` + `media="print"` swap
- ~87 KB gzipped JS total; no icon library, no animation library, no Tailwind runtime

---

## Structure

```
public/
  __forms.html     Netlify form detection - required
  _redirects       404 fallback
  _headers         security + cache headers
  img/             optimized WebP assets, favicons, OG image
src/
  data/site.js     ← all business content
  lib/schema.js    JSON-LD builders
  components/      Header, Footer, GarageDoor, LeadForm, EstimateModal, Seo…
  pages/           Home, Services, Areas, About/Contact/Legal/404
  styles/          base.css (tokens) + blocks.css (sections)
scripts/
  prerender.mjs    static HTML + sitemap generation
```

---

## Design notes

Brand colors are sampled from the client's own assets, not invented: `#0028A0` from the logo roof, `#000C47` from the wordmark, `#0052FE` from the LED glow in the door photograph, and `#F7B96E` from the warm wall sconces in that same shot - used only for urgency signals (the 24/7 badge).

The hero door is **CSS 3D, not three.js**: four hinged sections that roll up and stack on the ceiling track. Deliberate trade-off - it weighs nothing, renders instantly on mobile, and keeps Lighthouse intact, where a WebGL scene would cost hundreds of kilobytes and a lot of battery on the phones most of this traffic will arrive on.

Typography: Archivo (display, uppercase, expanded) / Public Sans (body) / IBM Plex Mono (labels, specs, phone numbers - the technician's-work-order register).
