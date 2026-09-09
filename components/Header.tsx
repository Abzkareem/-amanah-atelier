"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useCart } from "./CartContext";

const NAV_LINKS = [
  { label: "Shop", href: "/shop" },
  { label: "Collections", href: "/#collections" },
  { label: "Journal", href: "/#journal" },
  { label: "About", href: "/#about" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { count } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-50 bg-warm-white/90 backdrop-blur-sm transition-shadow ${
          scrolled ? "border-b border-line" : "border-b border-transparent"
        }`}
      >
        <div className="max-w-site mx-auto px-5 md:px-16 flex items-center justify-between py-5">
          <Link href="/" className="font-serif text-2xl">
            Amanah Atelier
          </Link>

          <ul className="hidden md:flex gap-9 list-none m-0 p-0">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-sm relative pb-1 group"
                >
                  {link.label}
                  <span className="absolute left-0 right-full bottom-0 h-px bg-walnut transition-all duration-300 group-hover:right-0" />
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center gap-6 text-sm">
            <button aria-label="Search">Search</button>
            <button aria-label="Account">Account</button>
            <Link href="/cart" aria-label="Cart">Cart ({count})</Link>
          </div>

          <button
            className="md:hidden flex flex-col gap-1.5"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
          >
            <span className="block w-5 h-px bg-ink" />
            <span className="block w-5 h-px bg-ink" />
          </button>
        </div>
      </header>

      <nav
        className={`fixed inset-0 z-[60] bg-warm-white px-5 py-6 transition-transform duration-400 md:hidden ${
          menuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex justify-end">
          <button aria-label="Close menu" onClick={() => setMenuOpen(false)} className="text-sm">
            Close
          </button>
        </div>
        <ul className="list-none p-0 mt-14">
          {NAV_LINKS.map((link) => (
            <li key={link.label} className="border-b border-line">
              <Link
                href={link.href}
                className="block py-5 font-serif text-2xl"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
