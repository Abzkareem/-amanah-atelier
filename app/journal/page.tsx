import type { Metadata } from "next";
import Link from "next/link";
import Frame from "@/components/Frame";
import { JOURNAL_POSTS } from "@/data/journal";

export const metadata: Metadata = {
  title: "Journal",
  description: "Thoughts on faith, home, beauty, and intentional living from Amanah Atelier.",
};

export default function JournalIndexPage() {
  const [feature, ...rest] = JOURNAL_POSTS;

  return (
    <main>
      <div className="px-5 md:px-16 pt-16 pb-10 max-w-[640px]">
        <span className="text-[0.72rem] tracking-label text-walnut font-medium block mb-3.5">
          JOURNAL
        </span>
        <h1 className="font-serif font-light text-[clamp(2.2rem,4.2vw,3.2rem)]">
          Letters from Amanah
        </h1>
        <p className="mt-4 text-ink/65">
          Thoughts on faith, home, beauty, and intentional living.
        </p>
      </div>

      <div className="px-5 md:px-16 pb-24">
        <Link href={`/journal/${feature.slug}`} className="block mb-16 group">
          <Frame caption={feature.caption} className="aspect-[16/9] mb-6 transition-transform duration-500 group-hover:scale-[1.01]" />
          <span className="text-[0.72rem] tracking-label text-walnut font-medium block mb-3">
            {feature.category.toUpperCase()}
          </span>
          <h2 className="font-serif text-3xl max-w-[24ch]">{feature.title}</h2>
          <p className="mt-3 max-w-[52ch] text-ink/60">{feature.excerpt}</p>
        </Link>

        <div className="grid md:grid-cols-3 gap-10">
          {rest.map((post) => (
            <Link key={post.slug} href={`/journal/${post.slug}`} className="block group">
              <Frame caption={post.caption} className="aspect-[4/3] mb-4 transition-transform duration-500 group-hover:scale-[1.02]" />
              <span className="text-[0.72rem] tracking-label text-walnut font-medium block mb-2.5">
                {post.category.toUpperCase()}
              </span>
              <h3 className="font-serif text-xl">{post.title}</h3>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
