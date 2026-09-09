import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Frame from "@/components/Frame";
import ProductCard from "@/components/ProductCard";
import { COLLECTIONS, getCollectionBySlug } from "@/data/collections";
import { PRODUCTS } from "@/data/products";

export function generateStaticParams() {
  return COLLECTIONS.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const collection = getCollectionBySlug(params.slug);
  if (!collection) return {};
  return { title: collection.name, description: collection.description };
}

export default function CollectionPage({ params }: { params: { slug: string } }) {
  const collection = getCollectionBySlug(params.slug);
  if (!collection) notFound();

  const products = PRODUCTS.filter((p) => p.category === collection.category);

  return (
    <main>
      <nav aria-label="Breadcrumb" className="px-5 md:px-16 pt-6 text-sm text-ink/55">
        <Link href="/">Home</Link> / <Link href="/collections">Collections</Link> / <span>{collection.name}</span>
      </nav>

      <Frame caption={collection.caption} className="aspect-[21/9] mx-5 md:mx-16 mt-6" />

      <section className="px-5 md:px-16 py-14 max-w-[640px]">
        <span className="text-[0.72rem] tracking-label text-walnut font-medium block mb-4">
          COLLECTION
        </span>
        <h1 className="font-serif font-light text-[clamp(2.2rem,4.2vw,3.2rem)] mb-5">
          {collection.name}
        </h1>
        <p className="text-ink/70 leading-relaxed">{collection.description}</p>
      </section>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-x-8 gap-y-12 px-5 md:px-16 pb-24">
        {products.length > 0 ? (
          products.map((p) => <ProductCard key={p.slug} product={p} />)
        ) : (
          <p className="col-span-full text-ink/55">
            New pieces for this collection are on their way — check back soon.
          </p>
        )}
      </div>
    </main>
  );
}
