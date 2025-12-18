import type { Product } from "./products"

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://emmafab.shop"

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "EmmaFab.shop",
    url: baseUrl,
    logo: `${baseUrl}/images/emmafab-logo-hd.png`,
    description: "Premium natural beauty products including black soap, shea butter, stretch mark cream, moringa slim tea, and hair care products.",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-800-EMMAFAB",
      contactType: "Customer Service",
      email: "emmafabcosmetics@gmail.com",
      availableLanguage: "English",
    },
    sameAs: [
      "https://facebook.com/emmafab",
      "https://instagram.com/emmafab",
      "https://twitter.com/emmafab",
      "https://youtube.com/emmafab",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Beauty Lane",
      addressLocality: "Natural City",
      addressRegion: "NC",
      postalCode: "12345",
      addressCountry: "US",
    },
  }
}

export function getProductSchema(product: Product) {
  const productUrl = `${baseUrl}/products/${product.slug}`
  const imageUrl = product.image?.startsWith("/") ? `${baseUrl}${product.image}` : product.image || `${baseUrl}/placeholder.svg`

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.longDescription || product.description,
    image: product.images?.map(img => img.startsWith("/") ? `${baseUrl}${img}` : img) || [imageUrl],
    sku: `EF-${product.id}`,
    mpn: `EF-${product.id}`,
    brand: {
      "@type": "Brand",
      name: "EmmaFab.shop",
    },
    offers: {
      "@type": "Offer",
      url: productUrl,
      priceCurrency: "USD",
      price: product.price.toString(),
      priceValidUntil: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString().split("T")[0],
      availability: product.inStock
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock",
      itemCondition: "https://schema.org/NewCondition",
      seller: {
        "@type": "Organization",
        name: "EmmaFab.shop",
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: product.rating.toString(),
      reviewCount: "127",
      bestRating: "5",
      worstRating: "1",
    },
    category: product.category,
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Ingredients",
        value: product.ingredients.join(", "),
      },
    ],
  }
}

export function getBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "EmmaFab.shop",
    url: baseUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${baseUrl}/products?search={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  }
}

export function getFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }
}

export function getItemListSchema(products: Product[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: products.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Product",
        name: product.name,
        url: `${baseUrl}/products/${product.slug}`,
        image: product.image?.startsWith("/") ? `${baseUrl}${product.image}` : product.image,
      },
    })),
  }
}

