import type { Metadata } from "next"
import { getProductBySlug } from "@/lib/products"
import { getProductSchema, getBreadcrumbSchema } from "@/lib/structured-data"

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://emmafab.shop"

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const product = getProductBySlug(params.slug)

  if (!product) {
    return {
      title: "Product Not Found | EmmaFab.shop",
    }
  }

  const productUrl = `${baseUrl}/products/${product.slug}`
  const imageUrl = product.image?.startsWith("/") ? `${baseUrl}${product.image}` : product.image || `${baseUrl}/placeholder.svg`

  return {
    title: `${product.name} | EmmaFab.shop`,
    description: product.longDescription || product.description,
    keywords: [
      product.name,
      product.category,
      ...product.ingredients,
      "natural cosmetics",
      "organic skincare",
      "cruelty-free",
    ],
    openGraph: {
      type: "product",
      title: product.name,
      description: product.longDescription || product.description,
      url: productUrl,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: product.name,
        },
        ...(product.images || []).map((img) => ({
          url: img.startsWith("/") ? `${baseUrl}${img}` : img,
          width: 1200,
          height: 630,
          alt: product.name,
        })),
      ],
      siteName: "EmmaFab.shop",
    },
    twitter: {
      card: "summary_large_image",
      title: product.name,
      description: product.description,
      images: [imageUrl],
    },
    alternates: {
      canonical: productUrl,
    },
    other: {
      "product:price:amount": product.price.toString(),
      "product:price:currency": "USD",
      "product:availability": product.inStock ? "in stock" : "out of stock",
      "product:condition": "new",
      "product:retailer": "EmmaFab.shop",
    },
  }
}

export default function ProductLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { slug: string }
}) {
  const product = getProductBySlug(params.slug)

  if (!product) {
    return <>{children}</>
  }

  const productUrl = `${baseUrl}/products/${product.slug}`
  const breadcrumbItems = [
    { name: "Home", url: baseUrl },
    { name: "Products", url: `${baseUrl}/products` },
    { name: product.name, url: productUrl },
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getProductSchema(product)),
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

