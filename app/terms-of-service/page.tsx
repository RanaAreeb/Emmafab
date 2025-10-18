import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Scale, Shield, AlertTriangle, Users, CreditCard } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Terms of Service - EmmaFab Cosmetics",
  description: "Read EmmaFab Cosmetics' terms of service and user agreement.",
}

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-primary/5 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center pt-20">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Please read these terms carefully before using our website or purchasing our products.
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              Last updated: January 1, 2025
            </p>
          </div>
        </div>
      </section>

      {/* Agreement Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-8">Agreement to Terms</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              By accessing and using EmmaFab Cosmetics' website and services, you agree to be bound by 
              these Terms of Service and all applicable laws and regulations. If you do not agree with 
              any of these terms, you are prohibited from using this site.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <Card className="text-center p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Clear Terms</h3>
                <p className="text-muted-foreground">Easy to understand language</p>
              </Card>

              <Card className="text-center p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Scale className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Fair & Legal</h3>
                <p className="text-muted-foreground">Compliant with applicable laws</p>
              </Card>

              <Card className="text-center p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Protection</h3>
                <p className="text-muted-foreground">Protects both parties</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Use of Website */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-8">Use of Website</h2>
            
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Permitted Uses</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">You may use our website for:</p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Browsing and purchasing our products</li>
                    <li>Creating and managing your account</li>
                    <li>Accessing customer support</li>
                    <li>Reading product information and reviews</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Prohibited Uses</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">You may not use our website to:</p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Violate any applicable laws or regulations</li>
                    <li>Transmit harmful or malicious code</li>
                    <li>Attempt to gain unauthorized access to our systems</li>
                    <li>Interfere with the proper functioning of the website</li>
                    <li>Use automated systems to access the site without permission</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Products and Orders */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-8">Products and Orders</h2>
            
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <CreditCard className="h-6 w-6 text-primary" />
                    Order Processing
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>All orders are subject to acceptance and availability</li>
                    <li>We reserve the right to refuse or cancel any order</li>
                    <li>Prices are subject to change without notice</li>
                    <li>Payment must be received before order processing</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <AlertTriangle className="h-6 w-6 text-primary" />
                    Product Information
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Product descriptions are accurate to the best of our knowledge</li>
                    <li>Images are for illustrative purposes and may vary from actual products</li>
                    <li>We are not responsible for individual reactions to products</li>
                    <li>Always patch test new products before full use</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Shipping and Delivery</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Shipping times are estimates and not guaranteed</li>
                    <li>We are not responsible for delays caused by shipping carriers</li>
                    <li>Risk of loss transfers to you upon delivery</li>
                    <li>You are responsible for providing accurate shipping information</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Returns and Refunds */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-8">Returns and Refunds</h2>
            
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Return Policy</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Returns must be initiated within 30 days of purchase</li>
                    <li>Products must be unused and in original packaging</li>
                    <li>Return shipping costs are the customer's responsibility</li>
                    <li>Refunds will be processed within 5-10 business days</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Refund Process</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Contact customer service to initiate a return</li>
                    <li>Receive return authorization and instructions</li>
                    <li>Ship items back using provided return label</li>
                    <li>Refund will be issued to original payment method</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* User Accounts */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-8">User Accounts</h2>
            
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Users className="h-6 w-6 text-primary" />
                    Account Creation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>You must provide accurate and complete information</li>
                    <li>You are responsible for maintaining account security</li>
                    <li>You must be at least 18 years old to create an account</li>
                    <li>One account per person is permitted</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Account Responsibilities</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Keep your login credentials confidential</li>
                    <li>Notify us immediately of any unauthorized access</li>
                    <li>You are responsible for all activity under your account</li>
                    <li>We may suspend accounts that violate these terms</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Limitation of Liability */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-8">Limitation of Liability</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              To the maximum extent permitted by law, EmmaFab Cosmetics shall not be liable for any 
              indirect, incidental, special, consequential, or punitive damages, including but not limited 
              to loss of profits, data, use, goodwill, or other intangible losses.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our total liability to you for any damages arising from or related to these terms or your 
              use of our services shall not exceed the amount you paid us for the products or services 
              giving rise to the claim.
            </p>
          </div>
        </div>
      </section>

      {/* Changes to Terms */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-8">Changes to Terms</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              We reserve the right to modify these terms at any time. We will notify users of any 
              material changes by posting the new terms on our website and updating the "Last updated" 
              date. Your continued use of our services after such changes constitutes acceptance of 
              the new terms.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              If you do not agree to the modified terms, you must stop using our services and may 
              close your account.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold mb-6">Questions About These Terms?</h2>
            <p className="text-xl mb-8 opacity-90">
              If you have any questions about these Terms of Service, please contact us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent">
                <a href="mailto:legal@emmafab.com">Email Legal Team</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
