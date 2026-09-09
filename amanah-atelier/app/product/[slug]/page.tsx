import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Frame from "@/components/Frame";
import ProductCard from "@/components/ProductCard";
import { PRODUCTS, getProductBySlug } from "@/data/products";
import ProductPurchasePanel from "@/components/ProductPurchasePanel";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const product = getProductBySlug(params.slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.description,
  };
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);
  if (!product) notFound();

  const related = PRODUCTS.filter((p) => p.slug !== product.slug).slice(0, 4);

  return (
    <main>
      <nav aria-label="Breadcrumb" className="px-5 md:px-16 pt-6 text-sm text-ink/55">
        <Link href="/">Home</Link> / <Link href="/shop">Shop</Link> / <span>{product.name}</span>
      </nav>

      <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-10 md:gap-14 px-5 md:px-16 py-8 pb-20">
        <div>
          <Frame caption={`${product.caption} — front`} className="aspect-[4/5] mb-3.5" />
          <div className="grid grid-cols-4 gap-2.5">
            {["Front", "Detail", "In use", "Texture"].map((label) => (
              <Frame key={label} caption={label} className="aspect-square" />
            ))}
          </div>
        </div>

        <ProductPurchasePanel product={product} />
      </div>

      <section className="pb-24 md:pb-32">
        <div className="flex items-end justify-between px-5 md:px-16 mb-9">
          <h2 className="font-serif text-[clamp(1.6rem,2.6vw,2.1rem)]">You may also like</h2>
          <Link href="/shop" className="text-sm border-b border-ink pb-0.5">
            Shop all
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-5 md:px-16">
          {related.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>
    </main>
  );
}
