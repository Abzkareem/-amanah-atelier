import Link from "next/link";
import Frame from "./Frame";
import type { Product } from "@/data/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/product/${product.slug}`} className="block group">
      <Frame
        caption={product.caption}
        className="aspect-[4/5] mb-4 transition-transform duration-500 group-hover:-translate-y-0.5"
      />
      <h3 className="font-sans text-[0.98rem] font-medium">{product.name}</h3>
      <div className="flex justify-between mt-1.5 text-sm text-ink/60">
        <span>${product.price}</span>
      </div>
      {product.stock === "low" && (
        <span className="block mt-1 text-xs text-tan">Only a few left</span>
      )}
      {product.stock === "out" && (
        <span className="block mt-1 text-xs text-ink/40">Out of stock</span>
      )}
    </Link>
  );
}
