import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { CartProvider } from "@/lib/cart-context"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider"
import { getOrganizationSchema, getWebSiteSchema } from "@/lib/structured-data"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://emmafab.shop"),
  title: {
    default: "EmmaFab.shop - Natural Beauty Products | Premium Cosmetics",
    template: "%s | EmmaFab.shop",
  },
  description:
    "Discover premium natural cosmetics including black soap, shea butter, stretch mark cream, moringa slim tea, and hair care products. 100% natural, cruelty-free beauty products.",
  keywords: [
    "EmmaFab",
    "EmmaFab.shop",
    "natural cosmetics",
    "black soap",
    "African black soap",
    "shea butter",
    "pure shea butter",
    "stretch mark cream",
    "moringa tea",
    "moringa slim tea",
    "hair cream",
    "natural hair care",
    "organic skincare",
    "cruelty-free cosmetics",
    "natural beauty products",
    "skincare",
    "haircare",
    "wellness products",
  ],
  authors: [{ name: "EmmaFab.shop" }],
  creator: "EmmaFab.shop",
  publisher: "EmmaFab.shop",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico?v=1", sizes: "any" },
      { url: "/favicon.ico?v=1", sizes: "16x16", type: "image/x-icon" },
      { url: "/favicon.ico?v=1", sizes: "32x32", type: "image/x-icon" },
    ],
    shortcut: "/favicon.ico?v=1",
    apple: "/favicon.ico?v=1",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "EmmaFab.shop",
    title: "EmmaFab.shop - Natural Beauty Products | Premium Cosmetics",
    description:
      "Shop EmmaFab.shop's natural beauty products: black soap, shea butter, stretch mark cream, moringa slim tea, and more. 100% natural, cruelty-free beauty products.",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://emmafab.shop",
    images: [
      {
        url: "/images/emmafab-logo-hd.png",
        width: 1200,
        height: 630,
        alt: "EmmaFab.shop - Natural Beauty Products",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EmmaFab.shop - Natural Beauty Products",
    description:
      "Shop EmmaFab.shop's natural beauty products: black soap, shea butter, stretch mark cream, moringa slim tea, and more.",
    images: ["/images/emmafab-logo-hd.png"],
    creator: "@emmafab",
    site: "@emmafab",
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
    yandex: process.env.YANDEX_VERIFICATION,
    yahoo: process.env.YAHOO_VERIFICATION,
  },
  category: "Beauty & Cosmetics",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico?v=1" sizes="any" />
        <link rel="icon" href="/favicon.ico?v=1" type="image/x-icon" />
        <link rel="shortcut icon" href="/favicon.ico?v=1" />
        <link rel="apple-touch-icon" href="/favicon.ico?v=1" />
        <meta name="msapplication-TileImage" content="/favicon.ico?v=1" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#059669" />
        <meta name="format-detection" content="telephone=no" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getOrganizationSchema()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getWebSiteSchema()),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <SmoothScrollProvider>
          <CartProvider>
            <Header />
            <Suspense fallback={null}>{children}</Suspense>
            <Footer />
          </CartProvider>
          <Analytics />
        </SmoothScrollProvider>
      </body>
    </html>
  )
}
