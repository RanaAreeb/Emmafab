import type { Metadata } from "next"
import { products } from "@/lib/products"
import { getItemListSchema, getBreadcrumbSchema } from "@/lib/structured-data"

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://emmafab.shop"

export const metadata: Metadata = {
  title: "Products - Natural Beauty Products | EmmaFab.shop",
  description:
    "Browse our complete collection of premium natural cosmetics including black soap, shea butter, stretch mark cream, moringa slim tea, and hair care products. 100% natural, cruelty-free beauty products.",
  keywords: [
    "natural cosmetics",
    "organic skincare",
    "black soap",
    "shea butter",
    "stretch mark cream",
    "moringa tea",
    "hair cream",
    "natural beauty products",
    "cruelty-free cosmetics",
    "skincare products",
    "haircare products",
  ],
  openGraph: {
    type: "website",
    title: "Products - Natural Beauty Products | EmmaFab.shop",
    description:
      "Browse our complete collection of premium natural cosmetics. 100% natural, cruelty-free beauty products.",
    url: `${baseUrl}/products`,
    siteName: "EmmaFab.shop",
  },
  alternates: {
    canonical: `${baseUrl}/products`,
  },
}

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  const breadcrumbItems = [
    { name: "Home", url: baseUrl },
    { name: "Products", url: `${baseUrl}/products` },
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getItemListSchema(products)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getBreadcrumbSchema(breadcrumbItems)),
        }}
      />
      {children}
    </>
  )
}

