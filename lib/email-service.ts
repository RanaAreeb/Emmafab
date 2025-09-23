interface OrderEmailData {
  items: Array<{
    product: {
      id: string
      name: string
      price: number
      image?: string
    }
    quantity: number
  }>
  total: number
  customer: {
    firstName: string
    lastName: string
    email: string
    phone: string
    address: string
    city: string
    state: string
    zipCode: string
    country: string
  }
  orderNumber: string
  orderDate: string
}

export async function sendOrderConfirmationEmail(orderData: OrderEmailData): Promise<boolean> {
  try {
    const response = await fetch("/api/send-order-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderData),
    })

    const result = await response.json()

    if (!response.ok) {
      throw new Error(result.message || "Failed to send email")
    }

    console.log("[v0] Order confirmation email sent successfully")
    return true
  } catch (error) {
    console.error("[v0] Failed to send order confirmation email:", error)
    return false
  }
}
