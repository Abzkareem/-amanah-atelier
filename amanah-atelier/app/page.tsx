import Link from "next/link";
import Frame from "@/components/Frame";
import ProductCard from "@/components/ProductCard";
import { PRODUCTS } from "@/data/products";

export default function HomePage() {
  const featured = PRODUCTS.slice(0, 4);

  return (
    <main>
      {/* HERO */}
      <section className="grid md:grid-cols-[1.1fr_0.9fr] min-h-[88vh]">
        <Frame caption="Linen, in use — Amanah Atelier" className="min-h-[420px] order-2 md:order-1" />
        <div className="flex flex-col justify-center px-5 md:px-16 py-16 order-1 md:order-2">
          <h1 className="font-serif font-normal text-[clamp(2.6rem,5.4vw,4.6rem)] leading-[1.02] max-w-[11ch]">
            Made with intention.
          </h1>
          <p className="mt-6 max-w-[40ch] text-[1.05rem] text-ink/70">
            Amanah Atelier makes a small number of considered things — linen,
            leather, paper, wood — for a life lived on purpose. Rooted in
            faith. Built to last.
          </p>
          <Link
            href="/shop"
            className="mt-9 inline-flex w-fit text-sm border-b border-ink pb-1.5"
          >
            Explore the collection
          </Link>
        </div>
      </section>

      {/* BRAND INTRO */}
      <section id="about" className="grid md:grid-cols-[0.4fr_1fr] gap-10 px-5 md:px-16 py-24 md:py-36">
        <span className="text-[0.72rem] tracking-label text-walnut font-medium pt-2">
          ABOUT THE ATELIER
        </span>
        <div>
          <h2 className="font-serif font-light text-[clamp(1.9rem,3.4vw,2.9rem)] leading-[1.28] max-w-[22ch]">
            We believe the objects around you should ask nothing of your
            attention — and reward it anyway.
          </h2>
          <p className="mt-8 max-w-[48ch] text-ink/65">
            Amanah Atelier began with a simple question: what does it look
            like to live modestly and beautifully at once? Every piece we
            make starts there — chosen materials, unhurried construction,
            nothing added that doesn&apos;t need to be.
          </p>
        </div>
      </section>

      {/* COLLECTIONS */}
      <section id="collections" className="py-20">
        <div className="flex items-end justify-between px-5 md:px-16 mb-11 gap-6 flex-wrap">
          <h2 className="font-serif text-[clamp(1.8rem,3vw,2.5rem)]">Where to begin</h2>
          <Link href="/shop" className="text-sm border-b border-ink pb-0.5">
            View all collections
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-line">
          {[
            { name: "Everyday", tag: "Pieces for the ordinary hours", href: "/shop?category=everyday" },
            { name: "Home", tag: "Objects that furnish a life", href: "/shop?category=home" },
            { name: "Modest Living", tag: "Considered dress, quietly made", href: "/shop?category=modest" },
          ].map((c) => (
            <Link key={c.name} href={c.href} className="relative aspect-[3/4] overflow-hidden group block">
              <Frame caption={c.name} className="absolute inset-0 transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute left-6 bottom-6 z-10">
                <h3 className="text-warm-white text-2xl font-serif font-normal">{c.name}</h3>
                <span className="block mt-1.5 text-warm-white/70 text-sm">{c.tag}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* EDITORIAL SPREAD */}
      <section className="grid md:grid-cols-[0.9fr_1.1fr] my-20 md:my-36">
        <div className="flex flex-col justify-center px-5 md:px-16 py-16 bg-ivory">
          <span className="text-[0.72rem] tracking-label text-walnut font-medium mb-5">
            CRAFTSMANSHIP
          </span>
          <h2 className="font-serif font-light text-[clamp(2rem,3.6vw,3rem)] leading-tight max-w-[14ch]">
            Every seam is a decision, not a default.
          </h2>
          <p className="mt-6 max-w-[38ch] text-ink/65">
            Our workshop works in small batches, by hand where it matters —
            because speed is rarely the same thing as care.
          </p>
          <Link href="/about" className="mt-9 w-fit text-sm border-b border-walnut text-walnut pb-1.5">
            Read our story
          </Link>
        </div>
        <Frame caption="In the workshop" className="min-h-[340px] md:min-h-[420px] order-first md:order-last" />
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="py-20 md:py-28">
        <div className="flex items-end justify-between px-5 md:px-16 mb-11 gap-6 flex-wrap">
          <h2 className="font-serif text-[clamp(1.8rem,3vw,2.5rem)]">Recently made</h2>
          <Link href="/shop" className="text-sm border-b border-ink pb-0.5">
            Shop all
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-x-8 gap-y-12 px-5 md:px-16">
          {featured.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="bg-ink text-warm-white px-5 md:px-16 py-24 md:py-36">
        <div className="max-w-site mx-auto">
          <span className="text-[0.72rem] tracking-label text-tan font-medium">
            WHAT WE BELIEVE
          </span>
          <h2 className="font-serif font-light text-[clamp(2.2rem,4.6vw,3.6rem)] leading-tight max-w-[20ch] mt-5">
            Faith gives us a reason to slow down. Craft gives that reason a
            shape.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mt-20 border-t border-warm-white/15 pt-10">
            {[
              ["Faith", "The quiet center that everything else is built around."],
              ["Modesty", "Restraint as a form of respect — for the wearer and the maker."],
              ["Craft", "Made by hand, in small runs, without shortcuts."],
              ["Intention", "Nothing enters the collection without a reason to exist."],
              ["Beauty", "Simple things, made with enough care to feel quietly extraordinary."],
            ].map(([title, copy]) => (
              <div key={title}>
                <h4 className="font-serif text-xl mb-2.5">{title}</h4>
                <p className="text-sm text-warm-white/60 leading-relaxed">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JOURNAL */}
      <section id="journal" className="py-24">
        <div className="flex items-end justify-between px-5 md:px-16 mb-9 gap-6 flex-wrap">
          <h2 className="font-serif text-[clamp(1.8rem,3vw,2.5rem)]">Letters from Amanah</h2>
          <Link href="/journal" className="text-sm border-b border-ink pb-0.5">
            Read the journal
          </Link>
        </div>
        <div className="grid md:grid-cols-[1.3fr_1fr_1fr] gap-8 px-5 md:px-16">
          <article>
            <Frame caption="Faith & Home" className="aspect-[16/11] mb-5" />
            <span className="text-[0.72rem] tracking-label text-walnut font-medium block mb-3">FAITH</span>
            <h3 className="font-serif text-2xl font-normal max-w-[18ch]">
              What it means to keep a modest home
            </h3>
          </article>
          <article>
            <Frame caption="Craft" className="aspect-[4/3] mb-4" />
            <span className="text-[0.72rem] tracking-label text-walnut font-medium block mb-3">CRAFT</span>
            <h3 className="font-serif text-lg font-normal">Notes from the workshop</h3>
          </article>
          <article>
            <Frame caption="Style" className="aspect-[4/3] mb-4" />
            <span className="text-[0.72rem] tracking-label text-walnut font-medium block mb-3">STYLE</span>
            <h3 className="font-serif text-lg font-normal">Dressing for the life you actually live</h3>
          </article>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="bg-ivory px-5 md:px-16 py-24 text-center">
        <h2 className="font-serif font-light text-[clamp(2rem,4vw,3.2rem)]">
          Letters from Amanah
        </h2>
        <p className="mt-4 text-ink/65">
          Thoughts on faith, home, beauty, and intentional living —
          occasionally, in your inbox.
        </p>
        <form
          className="flex justify-center max-w-[440px] mx-auto mt-10 border-b border-ink"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            required
            placeholder="Your email"
            aria-label="Email address"
            className="flex-1 bg-transparent border-none py-3 px-1.5 outline-none placeholder:text-ink/40"
          />
          <button type="submit" className="text-sm text-walnut py-3 px-1.5 whitespace-nowrap">
            Subscribe
          </button>
        </form>
      </section>
    </main>
  );
}
