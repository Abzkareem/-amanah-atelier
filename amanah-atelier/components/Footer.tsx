import Link from "next/link";

const COLUMNS = [
  {
    title: "SHOP",
    links: [
      { label: "Everyday", href: "/shop?category=everyday" },
      { label: "Home", href: "/shop?category=home" },
      { label: "Modest Living", href: "/shop?category=modest" },
      { label: "Gifts", href: "/shop?category=gifts" },
    ],
  },
  {
    title: "ATELIER",
    links: [
      { label: "About", href: "/#about" },
      { label: "Journal", href: "/#journal" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "SUPPORT",
    links: [
      { label: "FAQ", href: "/faq" },
      { label: "Shipping", href: "/shipping" },
      { label: "Returns", href: "/shipping#returns" },
    ],
  },
  {
    title: "LEGAL",
    links: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="px-5 md:px-16 pt-20 pb-10 border-t border-line">
      <div className="max-w-site mx-auto grid grid-cols-2 md:grid-cols-[1.4fr_1fr_1fr_1fr_1fr] gap-8 pb-16">
        <div className="col-span-2 md:col-span-1">
          <Link href="/" className="font-serif text-xl">
            Amanah Atelier
          </Link>
          <p className="mt-4 max-w-[30ch] text-ink/60 text-sm">
            Considered pieces for everyday living — rooted in faith, made for
            the long run.
          </p>
        </div>
        {COLUMNS.map((col) => (
          <div key={col.title}>
            <h5 className="text-[0.75rem] tracking-label text-ink/50 mb-4 font-medium">
              {col.title}
            </h5>
            <ul className="list-none p-0 m-0">
              {col.links.map((link) => (
                <li key={link.label} className="mb-3 text-sm">
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="max-w-site mx-auto flex flex-wrap justify-between items-center gap-3 border-t border-line pt-6 text-[0.8rem] text-ink/50">
        <span>© {new Date().getFullYear()} Amanah Atelier. All rights reserved.</span>
        <span>Instagram · Pinterest</span>
      </div>
    </footer>
  );
}
