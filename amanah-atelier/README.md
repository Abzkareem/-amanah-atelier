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
- Product detail (`/product/[slug]`) — gallery, variant/quantity selectors, add to cart, accordion, related products
- About (`/about`)
- Journal index (`/journal`) and article pages (`/journal/[slug]`) — content lives in `data/journal.ts`
- Cart (`/cart`) — quantity controls, remove, subtotal, promo code field (mock state, not yet wired to real product-add actions from other pages)
- Checkout (`/checkout`) — placeholder, ready for Stripe/Shopify Checkout integration
- Contact (`/contact`), FAQ (`/faq`), Shipping & Returns (`/shipping`), Privacy (`/privacy`), Terms (`/terms`)

## Known gaps / next steps

- Cart state is local to the cart page (mock starting items) — there's no shared cart context yet, so "Add to cart" on the product page and the cart page don't talk to each other. Next step: a `CartContext` (React context + localStorage, or a state library) that both read from and write to.
- Customer accounts aren't built (mentioned in the brief as "later").
- No real photography — every image is the `.frame` placeholder component; swap `src` into `<Frame />` as real photography becomes available.
- No real backend — `data/products.ts` and `data/journal.ts` are the seams where a real CMS/Shopify/Medusa integration would plug in.
