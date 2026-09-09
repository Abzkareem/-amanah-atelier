import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Frame from "@/components/Frame";
import { JOURNAL_POSTS, getJournalPostBySlug } from "@/data/journal";

export function generateStaticParams() {
  return JOURNAL_POSTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getJournalPostBySlug(params.slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default function JournalArticlePage({ params }: { params: { slug: string } }) {
  const post = getJournalPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <main>
      <nav aria-label="Breadcrumb" className="px-5 md:px-16 pt-6 text-sm text-ink/55">
        <Link href="/">Home</Link> / <Link href="/journal">Journal</Link> / <span>{post.title}</span>
      </nav>

      <article className="px-5 md:px-16 pt-8 pb-24 max-w-[720px] mx-auto">
        <span className="text-[0.72rem] tracking-label text-walnut font-medium block mb-4">
          {post.category.toUpperCase()}
        </span>
        <h1 className="font-serif font-light text-[clamp(2rem,4vw,3rem)] leading-tight">
          {post.title}
        </h1>

        <Frame caption={post.caption} className="aspect-[16/9] my-10" />

        <div className="space-y-6 text-ink/75 leading-relaxed text-[1.05rem]">
          {post.body.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </article>
    </main>
  );
}
