"use client";

import { createContext, useContext, useEffect, useState, useMemo } from "react";
import { PRODUCTS, type Product } from "@/data/products";

type CartLine = { slug: string; qty: number };
type CartLineWithProduct = CartLine & { product: Product };

type CartContextValue = {
  lines: CartLineWithProduct[];
  count: number;
  subtotal: number;
  addToCart: (slug: string, qty?: number) => void;
  updateQty: (slug: string, qty: number) => void;
  remove: (slug: string) => void;
};

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = "amanah-cart";

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartLine[]>([]);
  const [hydrated, setHydrated] = useState(false);

  // Load from localStorage once, client-side only.
  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored) setCart(JSON.parse(stored));
    } catch {
      // ignore malformed storage
    }
    setHydrated(true);
  }, []);

  // Persist on every change, after initial load.
  useEffect(() => {
    if (!hydrated) return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
  }, [cart, hydrated]);

  function addToCart(slug: string, qty = 1) {
    setCart((c) => {
      const existing = c.find((line) => line.slug === slug);
      if (existing) {
        return c.map((line) => (line.slug === slug ? { ...line, qty: line.qty + qty } : line));
      }
      return [...c, { slug, qty }];
    });
  }

  function updateQty(slug: string, qty: number) {
    setCart((c) => c.map((line) => (line.slug === slug ? { ...line, qty: Math.max(1, qty) } : line)));
  }

  function remove(slug: string) {
    setCart((c) => c.filter((line) => line.slug !== slug));
  }

  const lines = useMemo(
    () =>
      cart
        .map((line) => {
          const product = PRODUCTS.find((p) => p.slug === line.slug);
          return product ? { ...line, product } : null;
        })
        .filter(Boolean) as CartLineWithProduct[],
    [cart]
  );

  const count = lines.reduce((sum, line) => sum + line.qty, 0);
  const subtotal = lines.reduce((sum, line) => sum + line.product.price * line.qty, 0);

  return (
    <CartContext.Provider value={{ lines, count, subtotal, addToCart, updateQty, remove }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a CartProvider");
  return ctx;
}
