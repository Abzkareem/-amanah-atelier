# Amanah Atelier

Next.js + Tailwind build of the Amanah Atelier site.

## Getting started in VS Code

1. Unzip this folder and open it in VS Code.
2. Install dependencies:
   ```
   npm install
   ```
3. Run the dev server:
   ```
   npm run dev
   ```
4. Open http://localhost:3000

## Project structure

- `app/` — pages, using Next.js App Router (file-based routing).
  - `app/page.tsx` → `/` (home)
  - `app/shop/page.tsx` → `/shop`
  - `app/product/[slug]/page.tsx` → `/product/the-linen-wrap`, etc. — one template for every product
- `components/` — shared, reusable pieces (Header, Footer, ProductCard, Frame, ProductPurchasePanel).
- `data/products.ts` — all product data, separated from UI. This is the file to eventually replace with a real Shopify/Stripe/Medusa data fetch.
- `tailwind.config.ts` — the design system: colors, fonts, spacing tokens. Change a value here and it updates everywhere.
- `app/globals.css` — base styles and the `.frame` placeholder-photography style. Swap `<Frame caption="..." />` for `<Frame caption="..." src="/real-photo.jpg" />` once real photography is ready — no other changes needed.

## What's built so far

- Home (`/`) — hero, brand intro, collections, editorial spread, featured products, philosophy, journal preview, newsletter
- Shop (`/shop`) — filter by category, sort, product grid
- Collections index (`/collections`) and individual collection pages (`/collections/[slug]`) — editorial intro + filtered product grid per collection
- Product detail (`/product/[slug]`) — gallery, variant/quantity selectors, add to cart, accordion, related products
- About (`/about`)
- Journal index (`/journal`) and article pages (`/journal/[slug]`) — content lives in `data/journal.ts`
- Cart (`/cart`) — quantity controls, remove, subtotal, promo code field (mock state, not yet wired to real product-add actions from other pages)
- Checkout (`/checkout`) — placeholder, ready for Stripe/Shopify Checkout integration
- Contact (`/contact`), FAQ (`/faq`), Shipping & Returns (`/shipping`), Privacy (`/privacy`), Terms (`/terms`)

## Known gaps / next steps

- Cart is now shared across the whole site via `components/CartContext.tsx` (React context + localStorage) — "Add to cart" on a product page updates the same cart shown at `/cart`.
- Contact and newsletter forms submit to real API routes (`app/api/contact`, `app/api/newsletter`) — right now those routes just log the submission to the server console. Each has a `TODO` comment showing where to plug in a real service (Resend for contact email, Mailchimp/Klaviyo for the newsletter) and an API key.
- Customer accounts aren't built (mentioned in the brief as "later").
- No real photography — every image is the `.frame` placeholder component; swap `src` into `<Frame />` as real photography becomes available.
- No real backend for products — `data/products.ts` and `data/journal.ts` are the seams where a real CMS/Shopify/Medusa integration would plug in.
- No real checkout/payment yet — `/checkout` is a placeholder page.
- SEO basics are in place: `app/sitemap.ts`, `app/robots.ts`, and Open Graph/Twitter card metadata in `app/layout.tsx` — **update the `BASE_URL`/`metadataBase` placeholder (`https://amanahatelier.com`) once you have your real domain**, and add a real `opengraph-image` once photography exists (Next.js picks up an `opengraph-image.jpg` dropped into `app/` automatically).
