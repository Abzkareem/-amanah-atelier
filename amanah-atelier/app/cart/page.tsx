"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Frame from "@/components/Frame";
import { PRODUCTS } from "@/data/products";

type CartLine = { slug: string; qty: number };

// Mock starting cart — in a real build this would come from cart context / localStorage / backend.
const INITIAL_CART: CartLine[] = [
  { slug: "the-linen-wrap", qty: 1 },
  { slug: "field-notebook", qty: 2 },
];

export default function CartPage() {
  const [cart, setCart] = useState<CartLine[]>(INITIAL_CART);
  const [promo, setPromo] = useState("");

  const lines = useMemo(
    () =>
      cart
        .map((line) => {
          const product = PRODUCTS.find((p) => p.slug === line.slug);
          if (!product) return null;
          return { ...line, product };
        })
        .filter(Boolean) as { slug: string; qty: number; product: (typeof PRODUCTS)[number] }[],
    [cart]
  );

  const subtotal = lines.reduce((sum, line) => sum + line.product.price * line.qty, 0);

  function updateQty(slug: string, qty: number) {
    setCart((c) => c.map((line) => (line.slug === slug ? { ...line, qty: Math.max(1, qty) } : line)));
  }

  function remove(slug: string) {
    setCart((c) => c.filter((line) => line.slug !== slug));
  }

  return (
    <main>
      <div className="px-5 md:px-16 pt-16 pb-10">
        <span className="text-[0.72rem] tracking-label text-walnut font-medium block mb-3.5">
          CART
        </span>
        <h1 className="font-serif font-light text-[clamp(2rem,4vw,3rem)]">Your cart</h1>
      </div>

      {lines.length === 0 ? (
        <div className="px-5 md:px-16 pb-32 text-center max-w-[420px] mx-auto pt-10">
          <p className="text-ink/65 mb-8">Your cart is empty.</p>
          <Link href="/shop" className="text-sm border-b border-ink pb-1.5">
            Continue shopping
          </Link>
        </div>
      ) : (
        <div className="grid md:grid-cols-[1.6fr_1fr] gap-14 px-5 md:px-16 pb-32">
          <div className="border-t border-line">
            {lines.map(({ product, qty }) => (
              <div key={product.slug} className="flex gap-5 py-6 border-b border-line">
                <Frame caption={product.caption} className="w-24 h-28 shrink-0" />
                <div className="flex-1 flex flex-col justify-between">
                  <div className="flex justify-between gap-4">
                    <div>
                      <h3 className="font-sans font-medium">{product.name}</h3>
                      <p className="text-sm text-ink/55 mt-1">${product.price} each</p>
                    </div>
                    <p className="font-medium">${product.price * qty}</p>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center border border-line">
                      <button
                        aria-label={`Decrease quantity of ${product.name}`}
                        className="w-8 h-8 text-base"
                        onClick={() => updateQty(product.slug, qty - 1)}
                      >
                        –
                      </button>
                      <span className="w-8 text-center text-sm">{qty}</span>
                      <button
                        aria-label={`Increase quantity of ${product.name}`}
                        className="w-8 h-8 text-base"
                        onClick={() => updateQty(product.slug, qty + 1)}
                      >
                        +
                      </button>
                    </div>
                    <button
                      className="text-sm text-ink/50 hover:text-walnut underline underline-offset-2"
                      onClick={() => remove(product.slug)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
            <Link href="/shop" className="inline-block mt-8 text-sm border-b border-ink pb-1.5">
              Continue shopping
            </Link>
          </div>

          <div className="bg-ivory p-8 h-fit">
            <h2 className="font-serif text-xl mb-6">Order summary</h2>
            <div className="flex justify-between text-sm mb-3">
              <span className="text-ink/65">Subtotal</span>
              <span>${subtotal}</span>
            </div>
            <div className="flex justify-between text-sm mb-6 text-ink/55">
              <span>Shipping</span>
              <span>Calculated at checkout</span>
            </div>
            <div className="flex gap-2 mb-6">
              <input
                type="text"
                placeholder="Promo code"
                value={promo}
                onChange={(e) => setPromo(e.target.value)}
                className="flex-1 border border-line bg-transparent px-3 py-2 text-sm outline-none focus-visible:border-walnut"
              />
              <button className="text-sm border border-ink px-4">Apply</button>
            </div>
            <div className="flex justify-between font-medium border-t border-line pt-4 mb-6">
              <span>Total</span>
              <span>${subtotal}</span>
            </div>
            <Link
              href="/checkout"
              className="block text-center bg-ink text-warm-white text-sm py-3.5 hover:bg-walnut-deep transition-colors"
            >
              Checkout
            </Link>
          </div>
        </div>
      )}
    </main>
  );
}
