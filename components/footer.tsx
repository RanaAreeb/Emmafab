import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Image
              src="/images/emmafab-logo-hd.png"
              alt="EmmaFab Cosmetics"
              width={150}
              height={75}
              className="h-16 w-auto mb-6 brightness-0 invert"
            />
            <p className="text-background/80 mb-6 max-w-md leading-relaxed">
              EmmaFab Cosmetics is dedicated to creating premium natural beauty products that enhance your skin's
              natural radiance with carefully crafted formulations.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com/emmafab"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-background/20 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com/emmafab"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-background/20 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com/emmafab"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-background/20 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://youtube.com/emmafab"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-background/20 transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-serif text-lg font-medium mb-6">Products</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/products/black-soap" className="text-background/80 hover:text-background transition-colors">
                  Black Soap
                </Link>
              </li>
              <li>
                <Link href="/products/shea-butter" className="text-background/80 hover:text-background transition-colors">
                  Shea Butter
                </Link>
              </li>
              <li>
                <Link href="/products/stretch-marks-cream" className="text-background/80 hover:text-background transition-colors">
                  Stretch Marks Cream
                </Link>
              </li>
              <li>
                <Link href="/products/moringa-slim-tea" className="text-background/80 hover:text-background transition-colors">
                  Moringa Slim Tea
                </Link>
              </li>
              <li>
                <Link href="/products/natural-hair-cream" className="text-background/80 hover:text-background transition-colors">
                  Hair Cream
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-serif text-lg font-medium mb-6">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-background/80 hover:text-background transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/our-story" className="text-background/80 hover:text-background transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/ingredients" className="text-background/80 hover:text-background transition-colors">
                  Ingredients
                </Link>
              </li>
              <li>
                <Link href="/sustainability" className="text-background/80 hover:text-background transition-colors">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-background/80 hover:text-background transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-background/60 text-sm mb-4 md:mb-0">© 2025 EmmaFab Cosmetics. All rights reserved.</p>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy-policy" className="text-background/60 hover:text-background transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-background/60 hover:text-background transition-colors">
                Terms of Service
              </Link>
              <Link href="/shipping-info" className="text-background/60 hover:text-background transition-colors">
                Shipping Info
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
