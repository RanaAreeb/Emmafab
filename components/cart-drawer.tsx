"use client"

import { useState } from "react"
import { X, Plus, Minus, ShoppingBag, Trash2, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/lib/cart-context"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"

export function CartDrawer() {
  const [isOpen, setIsOpen] = useState(false)
  const { state, actions } = useCart()

  return (
    <>
      {/* Cart Button */}
      <Button 
        variant="ghost" 
        size="sm" 
        className="relative hover:bg-primary/10 transition-colors" 
        onClick={() => setIsOpen(true)}
      >
        <ShoppingBag className="h-5 w-5" />
        <AnimatePresence>
          {state.itemCount > 0 && (
            <motion.span
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center font-semibold shadow-lg"
            >
              {state.itemCount}
            </motion.span>
          )}
        </AnimatePresence>
      </Button>

      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[55]"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md sm:w-[450px] bg-white dark:bg-gray-900 shadow-2xl z-[60] border-l border-gray-200 dark:border-gray-700"
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 flex-shrink-0">
                <div className="flex items-center gap-3">
                  <ShoppingBag className="h-5 w-5 text-primary" />
                  <h2 className="text-lg font-bold text-gray-900 dark:text-white">Shopping Cart</h2>
                  {state.itemCount > 0 && (
                    <Badge variant="secondary" className="bg-primary text-primary-foreground">
                      {state.itemCount} {state.itemCount === 1 ? 'item' : 'items'}
                    </Badge>
                  )}
                </div>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => setIsOpen(false)}
                  className="hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full p-2"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              {/* Cart Items */}
              <div className="flex-1 p-4 overflow-y-auto bg-white dark:bg-gray-900" style={{ minHeight: '200px' }}>
                {state.items.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-full text-center py-12">
                    <div className="w-20 h-20 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mb-6">
                      <ShoppingBag className="h-10 w-10 text-gray-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Your cart is empty</h3>
                    <p className="text-gray-500 dark:text-gray-400 mb-6 max-w-sm">
                      Looks like you haven't added any items to your cart yet. Start shopping to fill it up!
                    </p>
                    <Button 
                      onClick={() => setIsOpen(false)}
                      className="bg-primary hover:bg-primary/90"
                    >
                      Continue Shopping
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4 pb-4">
                    {state.items.map((item, index) => (
                        <div
                          key={item.product.id}
                          className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow"
                        >
                          <div className="flex gap-3">
                            {/* Product Image */}
                            <div className="relative flex-shrink-0">
                              <img
                                src={item.product.image || "/placeholder.svg"}
                                alt={item.product.name}
                                className="w-16 h-16 object-cover rounded-lg bg-gray-100 dark:bg-gray-700"
                              />
                              <div className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center font-semibold">
                                {item.quantity}
                              </div>
                            </div>
                            
                            {/* Product Details */}
                            <div className="flex-1 min-w-0">
                              <h3 className="font-semibold text-gray-900 dark:text-white text-sm leading-tight mb-1">
                                {item.product.name}
                              </h3>
                              
                              {/* Price Display */}
                              <div className="flex items-center gap-2 mb-2">
                                <p className="text-primary font-bold text-base">
                                  ${item.product.price.toFixed(2)}
                                </p>
                                {item.product.originalPrice && (
                                  <p className="text-gray-500 dark:text-gray-400 text-sm line-through">
                                    ${item.product.originalPrice.toFixed(2)}
                                  </p>
                                )}
                              </div>
                              
                              {/* Quantity Controls */}
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-1">
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => actions.updateQuantity(item.product.id.toString(), item.quantity - 1)}
                                    className="h-7 w-7 p-0 hover:bg-gray-100 dark:hover:bg-gray-700"
                                  >
                                    <Minus className="h-3 w-3" />
                                  </Button>
                                  <span className="text-sm font-semibold w-6 text-center text-gray-900 dark:text-white">
                                    {item.quantity}
                                  </span>
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => actions.updateQuantity(item.product.id.toString(), item.quantity + 1)}
                                    className="h-7 w-7 p-0 hover:bg-gray-100 dark:hover:bg-gray-700"
                                  >
                                    <Plus className="h-3 w-3" />
                                  </Button>
                                </div>
                                
                                <div className="flex items-center gap-2">
                                  <span className="text-sm font-semibold text-gray-600 dark:text-gray-300">
                                    ${(item.product.price * item.quantity).toFixed(2)}
                                  </span>
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => actions.removeFromCart(item.product.id.toString())}
                                    className="text-red-500 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20 p-1"
                                  >
                                    <Trash2 className="h-3 w-3" />
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                )}
              </div>

              {/* Footer */}
              {state.items.length > 0 && (
                <div className="border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 p-4 flex-shrink-0">
                    {/* Order Summary */}
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600 dark:text-gray-400">Subtotal:</span>
                        <span className="font-semibold text-gray-900 dark:text-white">
                          ${state.total.toFixed(2)}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600 dark:text-gray-400">Shipping:</span>
                        <span className="font-semibold text-green-600">
                          {state.total > 50 ? 'Free' : '$9.99'}
                        </span>
                      </div>
                      <div className="border-t border-gray-200 dark:border-gray-700 pt-3">
                        <div className="flex justify-between items-center">
                          <span className="text-lg font-bold text-gray-900 dark:text-white">Total:</span>
                          <motion.span
                            key={state.total}
                            initial={{ scale: 1.1 }}
                            animate={{ scale: 1 }}
                            className="text-xl font-bold text-primary"
                          >
                            ${(state.total + (state.total > 50 ? 0 : 9.99)).toFixed(2)}
                          </motion.span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Checkout Button */}
                    <Link href="/checkout" onClick={() => setIsOpen(false)}>
                      <Button className="w-full h-10 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200">
                        <span>Proceed to Checkout</span>
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </Link>
                    
                    {/* Free Shipping Notice */}
                    {state.total <= 50 && (
                      <div className="mt-3 p-2 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                        <p className="text-sm text-blue-700 dark:text-blue-300 text-center">
                          Add ${(50 - state.total).toFixed(2)} more for free shipping!
                        </p>
                      </div>
                    )}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
