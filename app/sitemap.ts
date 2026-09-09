import type { MetadataRoute } from "next";
import { PRODUCTS } from "@/data/products";
import { JOURNAL_POSTS } from "@/data/journal";
import { COLLECTIONS } from "@/data/collections";

// Replace with your real production domain before launch.
const BASE_URL = "https://amanahatelier.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/shop",
    "/collections",
    "/about",
    "/journal",
    "/cart",
    "/contact",
    "/faq",
    "/shipping",
    "/privacy",
    "/terms",
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
  }));

  const productRoutes = PRODUCTS.map((p) => ({
    url: `${BASE_URL}/product/${p.slug}`,
    lastModified: new Date(),
  }));

  const collectionRoutes = COLLECTIONS.map((c) => ({
    url: `${BASE_URL}/collections/${c.slug}`,
    lastModified: new Date(),
  }));

  const journalRoutes = JOURNAL_POSTS.map((j) => ({
    url: `${BASE_URL}/journal/${j.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...productRoutes, ...collectionRoutes, ...journalRoutes];
}
