import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { CartProvider } from "@/lib/cart-context"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://emmafab.com"),
  title: {
    default: "EmmaFab Cosmetics - Natural Beauty Products",
    template: "%s | EmmaFab Cosmetics",
  },
  description:
    "Discover premium natural cosmetics including black soap, shea butter, stretch mark cream, moringa slim tea, and hair care products.",
  keywords: [
    "EmmaFab",
    "EmmaFab Cosmetics",
    "natural cosmetics",
    "black soap",
    "shea butter",
    "stretch mark cream",
    "moringa tea",
    "hair cream",
  ],
  authors: [{ name: "EmmaFab Cosmetics" }],
  creator: "EmmaFab Cosmetics",
  publisher: "EmmaFab Cosmetics",
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
    siteName: "EmmaFab Cosmetics",
    title: "EmmaFab Cosmetics - Natural Beauty Products",
    description:
      "Shop EmmaFab's natural beauty products: black soap, shea butter, stretch mark cream, moringa slim tea, and more.",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://emmafab.com",
    images: [
      { url: "/images/emmafab-logo-hd.webp", width: 1200, height: 630, alt: "EmmaFab Cosmetics" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EmmaFab Cosmetics - Natural Beauty Products",
    description:
      "Shop EmmaFab's natural beauty products: black soap, shea butter, stretch mark cream, moringa slim tea, and more.",
    images: ["/images/emmafab-logo-hd.webp"],
    creator: "@emmafab",
  },
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
      </head>
      <body className="font-sans antialiased">
        <CartProvider>
          <Header />
          <Suspense fallback={null}>{children}</Suspense>
          <Footer />
        </CartProvider>
        <Analytics />
      </body>
    </html>
  )
}
