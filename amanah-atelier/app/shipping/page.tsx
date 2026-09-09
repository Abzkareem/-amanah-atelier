import type { Metadata } from "next";

export const metadata: Metadata = { title: "Shipping & Returns" };

export default function ShippingPage() {
  return (
    <main className="px-5 md:px-16 py-20 max-w-[720px] mx-auto">
      <span className="text-[0.72rem] tracking-label text-walnut font-medium block mb-4">
        SHIPPING & RETURNS
      </span>
      <h1 className="font-serif font-light text-[clamp(2rem,4vw,2.8rem)] mb-12">
        Shipping & Returns
      </h1>

      <section className="mb-12">
        <h2 className="font-serif text-xl mb-4">Shipping</h2>
        <p className="text-ink/70 leading-relaxed max-w-[62ch]">
          Most pieces ship within 2–4 business days. Domestic orders
          typically arrive within 5–7 business days; international orders
          vary by destination. Shipping cost is calculated at checkout based
          on weight and destination.
        </p>
      </section>

      <section id="returns" className="mb-12">
        <h2 className="font-serif text-xl mb-4">Returns</h2>
        <p className="text-ink/70 leading-relaxed max-w-[62ch]">
          We want you to be glad you brought a piece into your home. Unworn,
          unused items may be returned within 30 days of delivery for a full
          refund. Made-to-order pieces are final sale unless damaged in
          transit.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-xl mb-4">Exchanges</h2>
        <p className="text-ink/70 leading-relaxed max-w-[62ch]">
          To exchange a piece for a different size or color, start a return
          and place a new order — this is currently the fastest way for us
          to get the right piece to you.
        </p>
      </section>
    </main>
  );
}
