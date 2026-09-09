import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Checkout" };

export default function CheckoutPage() {
  return (
    <main className="px-5 md:px-16 py-24 text-center max-w-[480px] mx-auto">
      <span className="text-[0.72rem] tracking-label text-walnut font-medium block mb-4">
        CHECKOUT
      </span>
      <h1 className="font-serif font-light text-[clamp(1.9rem,3.6vw,2.6rem)] mb-5">
        Checkout is coming soon.
      </h1>
      <p className="text-ink/65 mb-10">
        This is a placeholder for real checkout — payment processing will
        connect here (e.g. Stripe or Shopify Checkout) once the store is
        ready to take orders.
      </p>
      <Link href="/cart" className="text-sm border-b border-ink pb-1.5">
        Back to cart
      </Link>
    </main>
  );
}
