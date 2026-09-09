import type { Metadata } from "next";
import Link from "next/link";
import Frame from "@/components/Frame";
import { COLLECTIONS } from "@/data/collections";

export const metadata: Metadata = {
  title: "Collections",
  description: "Browse Amanah Atelier's curated collections.",
};

export default function CollectionsIndexPage() {
  return (
    <main>
      <div className="px-5 md:px-16 pt-16 pb-10 max-w-[640px]">
        <span className="text-[0.72rem] tracking-label text-walnut font-medium block mb-3.5">
          COLLECTIONS
        </span>
        <h1 className="font-serif font-light text-[clamp(2.2rem,4.2vw,3.2rem)]">
          Where to begin
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-line">
        {COLLECTIONS.map((c) => (
          <Link key={c.slug} href={`/collections/${c.slug}`} className="relative aspect-[16/10] overflow-hidden group block">
            <Frame caption={c.caption} className="absolute inset-0 transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute left-7 bottom-7 z-10">
              <h2 className="text-warm-white text-3xl font-serif font-normal">{c.name}</h2>
              <span className="block mt-2 text-warm-white/70 text-sm">{c.tagline}</span>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
