import type { Metadata } from "next"
import { HeroSection } from "@/components/hero-section"
import { FeaturedProducts } from "@/components/featured-products"
import { ProductsSection } from "@/components/products-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { getBreadcrumbSchema } from "@/lib/structured-data"

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://emmafab.shop"

export const metadata: Metadata = {
  title: "EmmaFab.shop - Natural Beauty Products | Premium Cosmetics",
  description:
    "Discover premium natural cosmetics including black soap, shea butter, stretch mark cream, moringa slim tea, and hair care products. 100% natural, cruelty-free beauty products for radiant, healthy skin.",
  alternates: {
    canonical: baseUrl,
  },
}

export default function Home() {
  const breadcrumbItems = [{ name: "Home", url: baseUrl }]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getBreadcrumbSchema(breadcrumbItems)),
        }}
      />
      <main className="min-h-screen">
        <HeroSection />
        <FeaturedProducts />
        <ProductsSection />
        <AboutSection />
        <ContactSection />
      </main>
    </>
  )
}
