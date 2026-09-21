# Mohammed & Doaa — Wedding Invitation

Single-page React/Vite wedding invitation built for Vercel.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Vercel

Import the project folder/repository into Vercel. Vercel will detect Vite automatically.

## Structure

- `src/components/HeroSection.jsx` — names, invitation copy, date and venue intro
- `src/components/CalendarSection.jsx` — September 2026 calendar + countdown to 29 Sep 2026 at 12:00 PM (Egypt time)
- `src/components/LocationSection.jsx` — venue visual + Google Maps button
- `src/components/Decorations.jsx` — fixed floral PNG corners
- `src/styles.css` — the only CSS file in the project

## Venue photo

Section 3 currently uses an elegant built-in mosque illustration so the project is complete without another image asset. If you later send the real venue/wedding photo, replace the `venue-image-card` content in `LocationSection.jsx` with an `<img>` and keep the existing card styling.

## Latest layout refinements
- Mobile corner ornaments are kept in the corners with more safe space so the copy does not sit over them.
- The wedding year is explicitly positioned below the day with clear spacing.
- The venue illustration uses its native 3:2 ratio and `object-fit: contain` so the mosque stays fully inside its frame.
