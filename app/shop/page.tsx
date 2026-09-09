"use client";

import { useMemo, useState } from "react";
import ProductCard from "@/components/ProductCard";
import { PRODUCTS, type Product } from "@/data/products";

const CATEGORIES: { label: string; value: Product["category"] | "all" }[] = [
  { label: "All", value: "all" },
  { label: "Everyday", value: "everyday" },
  { label: "Home", value: "home" },
  { label: "Modest Living", value: "modest" },
  { label: "Gifts", value: "gifts" },
];

const SORTS = ["Newest", "Price, low to high", "Price, high to low", "Alphabetical"] as const;

export default function ShopPage() {
  const [category, setCategory] = useState<(typeof CATEGORIES)[number]["value"]>("all");
  const [sort, setSort] = useState<(typeof SORTS)[number]>("Newest");

  const products = useMemo(() => {
    let items = category === "all" ? [...PRODUCTS] : PRODUCTS.filter((p) => p.category === category);
    if (sort === "Price, low to high") items.sort((a, b) => a.price - b.price);
    if (sort === "Price, high to low") items.sort((a, b) => b.price - a.price);
    if (sort === "Alphabetical") items.sort((a, b) => a.name.localeCompare(b.name));
    return items;
  }, [category, sort]);

  return (
    <main>
      <div className="px-5 md:px-16 pt-16 pb-10 max-w-[640px]">
        <span className="text-[0.72rem] tracking-label text-walnut font-medium block mb-3.5">
          SHOP
        </span>
        <h1 className="font-serif font-light text-[clamp(2.2rem,4.2vw,3.2rem)]">All pieces</h1>
        <p className="mt-4 text-ink/65">
          A small, growing collection — made in limited runs, never rushed.
        </p>
      </div>

      <div className="flex items-center justify-between flex-wrap gap-4 px-5 md:px-16 py-5 border-y border-line">
        <div className="flex gap-2.5 flex-wrap" role="group" aria-label="Filter by category">
          {CATEGORIES.map((c) => (
            <button
              key={c.value}
              onClick={() => setCategory(c.value)}
              className={`text-sm px-4 py-2 border rounded-full transition-colors ${
                category === c.value ? "border-walnut text-walnut" : "border-line text-ink hover:border-walnut"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2.5 text-sm text-ink/70">
          <label htmlFor="sort">Sort</label>
          <select
            id="sort"
            value={sort}
            onChange={(e) => setSort(e.target.value as (typeof SORTS)[number])}
            className="bg-transparent border-b border-ink text-sm py-1"
          >
            {SORTS.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </div>
      </div>

      <p className="text-sm text-ink/50 px-5 md:px-16 mt-4">
        {products.length} piece{products.length === 1 ? "" : "s"}
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-x-8 gap-y-12 px-5 md:px-16 py-9 pb-24">
        {products.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>
    </main>
  );
}
