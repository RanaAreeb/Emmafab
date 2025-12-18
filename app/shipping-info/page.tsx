import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Truck, Clock, Shield, MapPin, Package, CheckCircle } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Shipping Information - EmmaFab.shop",
  description: "Learn about EmmaFab.shop's shipping options, delivery times, and shipping policies.",
}

const shippingOptions = [
  {
    name: "Standard Shipping",
    price: "$9.99",
    freeThreshold: "Free on orders over $50",
    deliveryTime: "3-5 business days",
    description: "Our standard shipping option for domestic orders",
    icon: <Truck className="h-6 w-6" />
  },
  {
    name: "Express Shipping",
    price: "$19.99",
    freeThreshold: "Free on orders over $100",
    deliveryTime: "1-2 business days",
    description: "Fast delivery for urgent orders",
    icon: <Clock className="h-6 w-6" />
  },
  {
    name: "Overnight Shipping",
    price: "$29.99",
    freeThreshold: "Not available for free shipping",
    deliveryTime: "Next business day",
    description: "Overnight delivery for the fastest service",
    icon: <Shield className="h-6 w-6" />
  }
]

const shippingZones = [
  {
    zone: "Continental US",
    deliveryTime: "3-5 business days",
    freeShipping: "Orders over $50",
    icon: <MapPin className="h-5 w-5" />
  },
  {
    zone: "Alaska & Hawaii",
    deliveryTime: "5-7 business days",
    freeShipping: "Orders over $75",
    icon: <MapPin className="h-5 w-5" />
  },
  {
    zone: "Canada",
    deliveryTime: "7-10 business days",
    freeShipping: "Orders over $100",
    icon: <MapPin className="h-5 w-5" />
  }
]

export default function ShippingInfoPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-primary/5 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center pt-20">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
              Shipping Information
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Fast, reliable shipping to get your EmmaFab.shop products to you quickly and safely.
            </p>
          </div>
        </div>
      </section>

      {/* Shipping Options */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-center text-foreground mb-12">Shipping Options</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {shippingOptions.map((option, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                          {option.icon}
                        </div>
                        <CardTitle className="text-xl">{option.name}</CardTitle>
                      </div>
                      <Badge variant="secondary">{option.price}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{option.description}</p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-primary" />
                        <span className="text-sm font-medium">Delivery: {option.deliveryTime}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm text-muted-foreground">{option.freeThreshold}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Shipping Zones */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-center text-foreground mb-12">Shipping Zones</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {shippingZones.map((zone, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        {zone.icon}
                      </div>
                      <h3 className="text-lg font-semibold text-foreground">{zone.zone}</h3>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-primary" />
                        <span className="text-sm">{zone.deliveryTime}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm text-muted-foreground">{zone.freeShipping}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Order Processing */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-center text-foreground mb-12">Order Processing</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Package className="h-6 w-6 text-primary" />
                    Processing Times
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Orders placed before 2 PM EST ship the same day</li>
                    <li>Orders placed after 2 PM EST ship the next business day</li>
                    <li>Weekend orders ship on Monday</li>
                    <li>Holiday orders may experience delays</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Shield className="h-6 w-6 text-primary" />
                    Packaging
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Products are carefully packaged to prevent damage</li>
                    <li>Fragile items are wrapped in protective materials</li>
                    <li>All packages include tracking information</li>
                    <li>Eco-friendly packaging materials used when possible</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Tracking and Delivery */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-center text-foreground mb-12">Tracking & Delivery</h2>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Order Tracking</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Once your order ships, you'll receive a tracking number via email. You can track your 
                    package's progress from our warehouse to your doorstep.
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Tracking information is available within 24 hours of shipping</li>
                    <li>Real-time updates on package location and delivery status</li>
                    <li>Email notifications for delivery confirmations</li>
                    <li>Contact customer service if tracking information is not updating</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Delivery Process</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Packages require a signature for delivery</li>
                    <li>If you're not available, the carrier will leave a delivery notice</li>
                    <li>You can reschedule delivery or pick up at the carrier's facility</li>
                    <li>Undeliverable packages will be returned to us after 3 attempts</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* International Shipping */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-center text-foreground mb-12">International Shipping</h2>
            <div className="bg-muted/30 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">Currently Available</h3>
              <p className="text-muted-foreground mb-6">
                We currently ship to the United States and Canada. We're working on expanding our 
                international shipping options to serve customers worldwide.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">United States</h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm">
                    <li>All 50 states</li>
                    <li>3-5 business days standard</li>
                    <li>Free shipping on orders over $50</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Canada</h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm">
                    <li>All provinces and territories</li>
                    <li>7-10 business days standard</li>
                    <li>Free shipping on orders over $100</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-center text-foreground mb-12">Shipping FAQ</h2>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">How much does shipping cost?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Standard shipping is $9.99, but it's free on orders over $50. Express shipping is $19.99 
                    (free on orders over $100), and overnight shipping is $29.99.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Can I change my shipping address?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Yes, you can change your shipping address before your order ships. Contact customer 
                    service immediately if your order has already shipped.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What if my package is damaged?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    If your package arrives damaged, contact us immediately with photos. We'll replace 
                    the damaged items at no cost to you.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Do you ship to PO boxes?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Yes, we ship to PO boxes. However, some shipping methods may not be available for 
                    PO box addresses.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold mb-6">Ready to Order?</h2>
            <p className="text-xl mb-8 opacity-90">
              Experience fast, reliable shipping with EmmaFab.shop.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/products">Shop Now</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent">
                <Link href="/contact">Contact Support</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
