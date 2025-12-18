"use client"

import { products } from "@/lib/products"
import Script from "next/script"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, ShoppingCart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useCart } from "@/lib/cart-context"

export default function ProductsPage() {
  const categories = [...new Set(products.map((product) => product.category))]
  const { actions } = useCart()

  const handleAddToCart = (product: typeof products[0]) => {
    actions.addToCart(product, 1)
  }

  return (
    <div className="min-h-screen bg-background">

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto pt-20">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-balance mb-6">
              Our Natural Products
            </h1>
            <p className="text-lg text-muted-foreground text-pretty mb-8">
              Discover our complete collection of premium natural cosmetics, carefully crafted with the finest
              ingredients for your beauty and wellness journey.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <Badge key={category} variant="secondary" className="px-4 py-2 text-sm">
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card
                key={product.id}
                className="group hover:shadow-xl transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm overflow-hidden"
              >
                <CardContent className="p-0">
                  <Link href={`/products/${product.slug}`}>
                    <div className="aspect-[3/2] overflow-hidden">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        width={600}
                  height={450}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        quality={95}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-primary text-primary-foreground">{product.category}</Badge>
                      </div>
                      {product.originalPrice && (
                        <div className="absolute top-4 right-4">
                          <Badge variant="destructive">Sale</Badge>
                        </div>
                      )}
                      {!product.inStock && (
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                          <Badge variant="secondary" className="text-lg px-4 py-2">
                            Out of Stock
                          </Badge>
                        </div>
                      )}
                    </div>
                  </Link>

                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${i < Math.floor(product.rating) ? "fill-primary text-primary" : "text-muted-foreground"}`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground">({product.rating})</span>
                    </div>

                    <Link href={`/products/${product.slug}`}>
                      <h3 className="font-serif text-xl font-medium mb-2 hover:text-primary transition-colors">
                        {product.name}
                      </h3>
                    </Link>
                    <p className="text-muted-foreground mb-4 text-sm line-clamp-2">{product.description}</p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-primary">${product.price.toFixed(2)}</span>
                        {product.originalPrice && (
                          <span className="text-sm text-muted-foreground line-through">${product.originalPrice.toFixed(2)}</span>
                        )}
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" asChild>
                          <Link href={`/products/${product.slug}`}>View Details</Link>
                        </Button>
                        <Button 
                          size="sm" 
                          className="bg-primary hover:bg-primary/90" 
                          disabled={!product.inStock}
                          onClick={() => handleAddToCart(product)}
                        >
                          <ShoppingCart className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
