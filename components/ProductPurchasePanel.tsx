"use client";

import { useState } from "react";
import type { Product } from "@/data/products";
import { useCart } from "./CartContext";

const ACCORDION_ITEMS = (product: Product) => [
  { title: "Materials & care", body: product.materials },
  { title: "Dimensions", body: product.dimensions },
  { title: "Shipping", body: "Ships within 2–4 business days. Rates calculated at checkout based on destination." },
  { title: "Returns", body: "Unworn pieces may be returned within 30 days. See our returns page for details." },
];

export default function ProductPurchasePanel({ product }: { product: Product }) {
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { addToCart } = useCart();

  const outOfStock = product.stock === "out";

  return (
    <div className="pt-2">
      <span className="text-[0.72rem] tracking-label text-walnut font-medium block mb-3.5">
        {product.category.toUpperCase()}
      </span>
      <h1 className="font-serif font-normal text-[clamp(1.9rem,3.4vw,2.6rem)] max-w-[16ch]">
        {product.name}
      </h1>
      <p className="mt-3.5 text-lg text-walnut">${product.price}</p>
      <p className="mt-6 max-w-[44ch] text-ink/70">{product.description}</p>

      <div className="flex gap-4 mt-9 items-stretch">
        <div className="flex items-center border border-line">
          <button
            aria-label="Decrease quantity"
            className="w-10 text-lg"
            onClick={() => setQty((q) => Math.max(1, q - 1))}
          >
            –
          </button>
          <span className="w-8 text-center text-sm">{qty}</span>
          <button aria-label="Increase quantity" className="w-10 text-lg" onClick={() => setQty((q) => q + 1)}>
            +
          </button>
        </div>
        <button
          disabled={outOfStock}
          onClick={() => {
            addToCart(product.slug, qty);
            setAdded(true);
            setTimeout(() => setAdded(false), 1400);
          }}
          className="flex-1 bg-ink text-warm-white text-sm tracking-wide px-6 transition-colors hover:bg-walnut-deep disabled:bg-ink/25 disabled:cursor-not-allowed"
        >
          {outOfStock ? "Out of stock" : added ? "Added to cart" : `Add to cart — $${product.price * qty}`}
        </button>
      </div>
      <p className={`mt-3.5 text-sm ${outOfStock ? "text-ink/45" : "text-tan"}`}>
        {outOfStock ? "Currently unavailable" : "In stock — ships in 2–4 days"}
      </p>

      <div className="mt-12 border-t border-line">
        {ACCORDION_ITEMS(product).map((item, i) => (
          <div key={item.title} className="border-b border-line">
            <button
              className="w-full flex justify-between items-center py-4.5 text-sm text-left"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              {item.title}
              <span className={`text-walnut transition-transform ${openIndex === i ? "rotate-45" : ""}`}>+</span>
            </button>
            {openIndex === i && (
              <p className="pb-4.5 text-sm text-ink/65 leading-relaxed">{item.body}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
