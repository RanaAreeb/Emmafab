import type { MetadataRoute } from "next"
import { products } from "@/lib/products"

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://emmafab.shop"
  const now = new Date()

  const productUrls: MetadataRoute.Sitemap = products.map((p) => ({
    url: `${base}/products/${p.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }))

  return [
    { url: `${base}/`, lastModified: now, changeFrequency: "daily" as const, priority: 1 },
    { url: `${base}/products`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${base}/our-story`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${base}/ingredients`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${base}/sustainability`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${base}/shipping-info`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${base}/privacy-policy`, lastModified: now, changeFrequency: "yearly" as const, priority: 0.3 },
    { url: `${base}/terms-of-service`, lastModified: now, changeFrequency: "yearly" as const, priority: 0.3 },
    ...productUrls,
  ]
}


