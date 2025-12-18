"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, ShoppingCart, Sparkles, Leaf } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { getFeaturedProducts } from "@/lib/products"
import { useCart } from "@/lib/cart-context"
import { motion } from "framer-motion"

export function FeaturedProducts() {
  const featuredProducts = getFeaturedProducts()
  const { actions } = useCart()

  const handleAddToCart = (product: any) => {
    actions.addToCart(product, 1)
  }

  return (
    <section className="py-24 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Customer Favorites
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-balance mb-6">
            Featured Products
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Discover our most popular natural cosmetics, loved by thousands of customers worldwide
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.08, duration: 0.4 }}
              style={{ willChange: 'transform, opacity' }}
            >
              <Card className="group overflow-hidden border border-border/50 bg-card/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative will-change-transform">
                {/* Unique shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 -z-0"></div>
                
                <div className="aspect-[3/2] overflow-hidden relative bg-gradient-to-br from-primary/5 to-secondary/5">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={600}
                    height={450}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 will-change-transform"
                    style={{ transform: 'translateZ(0)' }}
                    quality={95}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    <Badge className="bg-primary text-primary-foreground shadow-lg backdrop-blur-sm">
                      <Sparkles className="w-3 h-3 mr-1" />
                      Featured
                    </Badge>
                    {product.originalPrice && (
                      <Badge variant="destructive" className="shadow-lg">
                        Save {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                      </Badge>
                    )}
                  </div>
                  
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm shadow-lg">
                      {product.category}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-6 bg-card">
                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 ${i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "fill-muted text-muted-foreground"}`} 
                        />
                      ))}
                    </div>
                    <span className="text-sm font-medium text-foreground">({product.rating})</span>
                    <span className="text-xs text-muted-foreground">• 127 reviews</span>
                  </div>

                  <h3 className="font-serif text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed text-sm line-clamp-2">
                    {product.description}
                  </p>

                  {/* Price */}
                  <div className="flex items-baseline gap-3 mb-5">
                    <span className="text-3xl font-bold text-primary">${product.price.toFixed(2)}</span>
                    {product.originalPrice && (
                      <>
                        <span className="text-lg text-muted-foreground line-through">${product.originalPrice.toFixed(2)}</span>
                      </>
                    )}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3">
                    <Button 
                      asChild 
                      className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <Link href={`/products/${product.slug}`}>
                        View Details
                      </Link>
                    </Button>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        size="lg"
                        className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 px-4"
                        onClick={() => handleAddToCart(product)}
                        disabled={!product.inStock}
                        title="Add to cart"
                      >
                        <ShoppingCart className="w-5 h-5" />
                      </Button>
                    </motion.div>
                  </div>
                  
                  {/* In stock indicator */}
                  {product.inStock && (
                    <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span>In Stock - Ready to Ship</span>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mt-16"
        >
          <Button 
            size="lg" 
            variant="outline" 
            asChild
            className="border-2 border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 px-8 py-6 text-base"
          >
            <Link href="/products">
              View All Products
              <Leaf className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
