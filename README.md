# IHAM — Institute of Housing Administration & Management

Public website and admin panel for the institute's property, land-investment and
training operations.

## Structure

```
Kamso/
├── shared/                    One theme for BOTH sites
│   ├── theme.css              Brand tokens + light/dark + Bootstrap bridge
│   └── theme.js               The theme switch (persists to localStorage)
│
├── public/                    Public-facing website
│   ├── index.html             Home: hero carousel, about, stats, listings,
│   │                          trust, team, testimonials, training, map
│   ├── properties.html        Property listings (houses / commercial)
│   ├── land-investment.html   Land listings — deliberately a separate track
│   ├── property-details.html  Full listing + Book Inspection → WhatsApp
│   ├── training.html          Programmes + application form
│   ├── about.html             Story, mission, team
│   ├── contact.html           Details, enquiry form, Google map
│   └── assets/
│       ├── css/site.css       Public site design layer
│       ├── js/data.js         Listings + programmes (one source of truth)
│       ├── js/site.js         Nav, counters, filters, gallery, booking
│       └── img/               Photography and logo
│
├── admin/                     Admin panel
│   ├── login.html             Sign in
│   ├── forgot-password.html   Request + enter a 6-digit reset code
│   ├── reset-password.html    Set a new password
│   ├── index.html             Dashboard — 8 KPIs, revenue, activity,
│   │                          commitments, top realtors, inspections
│   ├── insights.html          Management view: revenue, demand by state,
│   │                          demand by occupation, channels, realtor share
│   ├── properties.html        Portfolio DataTable
│   ├── property-upload.html   Upload form (property vs land fieldsets)
│   ├── clients.html           Commitments, part-payments, realtor credit
│   ├── payments.html          Transactions + income charts
│   ├── realtors.html          Roster, volume closed, commission owed
│   ├── inspections.html       Bookings taken on the website
│   ├── trainees.html          Enrolled and certified
│   ├── training-applications.html  Applications awaiting review
│   ├── enquiries.html         Contact-form messages
│   ├── messaging.html         Bulk email / SMS / WhatsApp
│   ├── settings.html          Profile, security, company, appearance,
│   │                          notifications, team access
│   └── assets/{css,js}
│
└── dashboardadmin-main/       The original admin build (superseded by
                               admin/ — safe to delete once you are happy)
```

## Running it

No build step. Any static server works:

```bash
python -m http.server 8777
# public site:  http://127.0.0.1:8777/public/
# admin panel:  http://127.0.0.1:8777/admin/login.html
```

Opening files directly with `file://` also works, except the Google Maps
embed, which some browsers block on that protocol.

**Admin sign-in (design stage):** any email plus any password of 6+ characters.

## Things to set before going live

| What | Where |
|---|---|
| WhatsApp number | `public/assets/js/site.js` → `WHATSAPP_NUMBER` (currently 2348062115796) |
| Office address on the map | the `maps.google.com` iframe `src` in `index.html` and `contact.html` |
| Phone, email, address | footer + contact blocks on every public page |
| Real listings | `public/assets/js/data.js` |
| Admin records | `admin/assets/js/admin-data.js` |
| Training application email | `initTrainingForm()` in `site.js` |
| Real authentication | `admin/login.html` inline script — replace with a server session |

## Notes

- **Light/dark** is one switch in `shared/theme.css`, shared by both sites.
  Every colour is a token. Each page carries a small inline script in `<head>`
  that applies the stored theme before first paint, so dark-mode visitors never
  see a white flash. Admin charts re-theme themselves on the
  `ihamthemechange` event.
- **Property and land are separate tracks** (`track: "property" | "land"`).
  Cards, spec tiles, detail pages and the upload form all change shape
  accordingly. Rent has been removed throughout.
- **The inspection form collects state and occupation on purpose.** Those two
  fields are what the Insights page reports on — where demand comes from and
  who it comes from. The optional realtor field is what credits a sale.
- **Backgrounds are `<img>` elements, not CSS backgrounds.** A `url()` inside a
  custom property resolves against the stylesheet's folder rather than the
  page's, which silently breaks every path. Do not convert `.slide-bg`,
  `.banner-bg` or `.auth-aside-bg` back to `background-image`.
- **`.auth-aside > *:not(.auth-aside-bg)`** — the `:not()` matters. Without it
  the backdrop is lifted into normal flow and the login panel collapses.
- **No horizontal scroll** is enforced at source: `.brand` must stay
  `flex: 1 1 auto; min-width: 0`, and `.row.g-5`/`g-4` gutters are tightened
  under 768px so Bootstrap's negative row margins cannot exceed the shell
  padding. `overflow-x: clip` on `html`/`body` is only a backstop.
- **Table cells are `nowrap`.** Rows therefore keep a uniform height and wide
  tables scroll inside their own `.dt-scroll` box, which `admin.js` wraps
  around every table. The first column is `position: sticky` so the identity
  stays visible, and the edge fade/shadow classes (`can-right`, `is-scrolled`)
  are toggled from JS. A cell that genuinely holds prose can opt out with
  `td.td-wrap`, or clip to one line with `.cell-clip`.
- **Pagination is styled through Bootstrap's `--bs-pagination-*` variables.**
  DataTables' Bootstrap 5 integration puts `.paginate_button` on the `<li>`
  and renders the visible control as `<a class="page-link">` — styling
  `.paginate_button` directly hits nothing, which is how the default blue
  active state and light-grey arrows survived into the dark theme. Do not
  revert to targeting `.paginate_button`.

## Verified

Checked in headless Chrome, not by eye alone:

- Public: 8 pages × 8 viewport widths (320–768px) — **no horizontal overflow**;
  32 interaction assertions pass (carousel, filters, View Details, counters,
  theme persistence, inspection → WhatsApp payload, training form, map,
  mobile nav).
- Admin: 16 pages × 3 widths — **0 console errors, 0 failed requests, 0 broken
  images, 0 overflow**; 66 interaction assertions pass (login, password reveal,
  DataTable search/sort/filter, part-payment bars, insights charts, image
  staging, bulk-message recipient maths, settings, mobile sidebar, sign out).
- Tables: 8 data tables checked for nowrap, uniform row height, scroller
  presence, pagination colour/radius/size/alignment in both themes, real
  paging behaviour, sticky-column hold and the edge-fade states — 0 failures.
