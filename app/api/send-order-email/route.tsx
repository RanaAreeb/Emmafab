import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

interface OrderItem {
  product: {
    id: string
    name: string
    price: number
    image?: string
  }
  quantity: number
}

interface OrderData {
  items: OrderItem[]
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

export async function POST(request: NextRequest) {
  try {
    const orderData: OrderData = await request.json()

    // Create email contents
    const customerEmailHtml = generateOrderEmailHTML(orderData)
    const adminEmailHtml = generateAdminOrderEmailHTML(orderData)

    // Determine recipient for store notifications (owner/admin)
    const recipient = process.env.ORDER_NOTIFICATION_EMAIL || "emmafabcosmetics@gmail.com"

    // In a real application, you would use a service like:
    // - Resend (resend.com)
    // - SendGrid
    // - Nodemailer with SMTP
    // - AWS SES

    // Try to send the email via SMTP (Nodemailer). If SMTP is not configured, fallback to console.
    const smtpUser = process.env.SMTP_USER
    const smtpPass = process.env.SMTP_PASS
    const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com"
    const smtpPort = Number(process.env.SMTP_PORT || 465)
    const smtpSecure = process.env.SMTP_SECURE ? process.env.SMTP_SECURE === "true" : true
    const mailFrom = process.env.MAIL_FROM || smtpUser || "no-reply@emmafab.com"

    if (smtpUser && smtpPass) {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpSecure,
        auth: { user: smtpUser, pass: smtpPass },
      })

      // Send confirmation to customer
      await transporter.sendMail({
        from: mailFrom,
        to: orderData.customer.email,
        subject: `Order Confirmation - ${orderData.orderNumber}`,
        html: customerEmailHtml,
      })
      // Send notification to store/admin
      await transporter.sendMail({
        from: mailFrom,
        to: recipient,
        subject: `New Order Received - ${orderData.orderNumber}`,
        html: adminEmailHtml,
      })
      console.log("[v0] Sent customer confirmation to:", orderData.customer.email)
      console.log("[v0] Sent admin notification to:", recipient)
    } else {
      console.warn("[v0] SMTP not configured. Logging email instead of sending. Set SMTP_USER/SMTP_PASS.")
      console.log("[v0] Customer confirmation would be sent to:", orderData.customer.email)
      console.log("[v0] Customer email content:", customerEmailHtml)
      console.log("[v0] Admin notification would be sent to:", recipient)
      console.log("[v0] Admin email content:", adminEmailHtml)
      // Simulate email sending delay
      await new Promise((resolve) => setTimeout(resolve, 1000))
    }

    // Here's how you would integrate with Resend (example):
    /*
    import { Resend } from 'resend'
    const resend = new Resend(process.env.RESEND_API_KEY)
    
    // Example using Resend to send both emails
    await resend.emails.send({
      from: 'orders@emmafab.com',
      to: orderData.customer.email,
      subject: `Order Confirmation - ${orderData.orderNumber}`,
      html: customerEmailHtml,
    })

    await resend.emails.send({
      from: 'orders@emmafab.com',
      to: recipient,
      subject: `New Order Received - ${orderData.orderNumber}`,
      html: adminEmailHtml,
    })
    */

    return NextResponse.json({
      success: true,
      message: "Order confirmation email sent successfully",
    })
  } catch (error) {
    console.error("Failed to send order email:", error)
    return NextResponse.json({ success: false, message: "Failed to send order confirmation email" }, { status: 500 })
  }
}

function generateOrderEmailHTML(orderData: OrderData): string {
  const { customer, items, total, orderNumber, orderDate } = orderData

  const itemsHTML = items
    .map(
      (item) => `
    <tr>
      <td style="padding: 12px; border-bottom: 1px solid #e5e7eb;">
        <div style="display: flex; align-items: center; gap: 12px;">
          <img src="${item.product.image || "https://via.placeholder.com/60"}" 
               alt="${item.product.name}" 
               style="width: 60px; height: 60px; object-fit: cover; border-radius: 8px;">
          <div>
            <h4 style="margin: 0; font-weight: 600; color: #1f2937;">${item.product.name}</h4>
            <p style="margin: 4px 0 0 0; color: #6b7280; font-size: 14px;">
              ${item.product.price.toFixed(2)} × ${item.quantity}
            </p>
          </div>
        </div>
      </td>
      <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; text-align: right; font-weight: 600;">
        ${(item.product.price * item.quantity).toFixed(2)}
      </td>
    </tr>
  `,
    )
    .join("")

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Order Confirmation - ${orderNumber}</title>
    </head>
    <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
      
      <!-- Header -->
      <div style="text-align: center; margin-bottom: 40px; padding: 20px; background: linear-gradient(135deg, #059669 0%, #10b981 100%); border-radius: 12px;">
        <h1 style="color: white; margin: 0; font-size: 28px; font-weight: 300;">EmmaFab Cosmetics</h1>
        <p style="color: rgba(255,255,255,0.9); margin: 8px 0 0 0; font-size: 16px;">Natural Beauty Products</p>
      </div>
      
      <!-- Order Confirmation -->
      <div style="background: #f9fafb; padding: 24px; border-radius: 12px; margin-bottom: 32px;">
        <h2 style="color: #059669; margin: 0 0 16px 0; font-size: 24px;">Order Confirmed!</h2>
        <p style="margin: 0 0 12px 0; font-size: 16px;">
          Thank you for your order, <strong>${customer.firstName} ${customer.lastName}</strong>!
        </p>
        <p style="margin: 0; color: #6b7280;">
          Order #<strong>${orderNumber}</strong> • ${new Date(orderDate).toLocaleDateString()}
        </p>
      </div>
      
      <!-- Order Items -->
      <div style="margin-bottom: 32px;">
        <h3 style="color: #1f2937; margin: 0 0 16px 0; font-size: 20px;">Order Items</h3>
        <table style="width: 100%; border-collapse: collapse; background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
          ${itemsHTML}
          <tr style="background: #f9fafb;">
            <td style="padding: 16px; font-weight: 600; font-size: 18px;">Total</td>
            <td style="padding: 16px; text-align: right; font-weight: 700; font-size: 18px; color: #059669;">
              $${total.toFixed(2)}
            </td>
          </tr>
        </table>
      </div>
      
      <!-- Shipping Address -->
      <div style="margin-bottom: 32px;">
        <h3 style="color: #1f2937; margin: 0 0 16px 0; font-size: 20px;">Shipping Address</h3>
        <div style="background: white; padding: 20px; border-radius: 12px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
          <p style="margin: 0; line-height: 1.8;">
            <strong>${customer.firstName} ${customer.lastName}</strong><br>
            ${customer.address}<br>
            ${customer.city}, ${customer.state} ${customer.zipCode}<br>
            ${customer.country}
          </p>
        </div>
      </div>
      
      <!-- What's Next -->
      <div style="background: #eff6ff; padding: 24px; border-radius: 12px; margin-bottom: 32px;">
        <h3 style="color: #1e40af; margin: 0 0 12px 0; font-size: 18px;">What's Next?</h3>
        <ul style="margin: 0; padding-left: 20px; color: #1f2937;">
          <li style="margin-bottom: 8px;">We'll prepare your order within 1-2 business days</li>
          <li style="margin-bottom: 8px;">You'll receive a shipping confirmation with tracking info</li>
          <li style="margin-bottom: 8px;">Your order will arrive in 3-7 business days</li>
        </ul>
      </div>
      
      <!-- Contact Info -->
      <div style="text-align: center; padding: 24px; background: #f9fafb; border-radius: 12px;">
        <h3 style="color: #1f2937; margin: 0 0 12px 0; font-size: 18px;">Need Help?</h3>
        <p style="margin: 0 0 16px 0; color: #6b7280;">
          Contact our customer service team if you have any questions about your order.
        </p>
        <p style="margin: 0; color: #059669; font-weight: 600;">
          📧 support@emmafab.com • 📞 1-800-EMMAFAB
        </p>
      </div>
      
      <!-- Footer -->
      <div style="text-align: center; margin-top: 40px; padding-top: 24px; border-top: 1px solid #e5e7eb;">
        <p style="margin: 0; color: #9ca3af; font-size: 14px;">
          © ${new Date().getFullYear()} EmmaFab Cosmetics. All rights reserved.
        </p>
        <p style="margin: 8px 0 0 0; color: #9ca3af; font-size: 14px;">
          Natural Beauty Products for Your Skin Care Needs
        </p>
      </div>
      
    </body>
    </html>
  `
}

function generateAdminOrderEmailHTML(orderData: OrderData): string {
  const { customer, items, total, orderNumber, orderDate } = orderData
  const itemsLines = items
    .map(
      (item) => `${item.quantity} × ${item.product.name} — $${(item.product.price * item.quantity).toFixed(2)}`,
    )
    .join("\n")

  return `
    <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;line-height:1.6;max-width:640px;margin:0 auto;padding:16px;">
      <h2>New Order Received</h2>
      <p><strong>Order:</strong> ${orderNumber} • ${new Date(orderDate).toLocaleString()}</p>
      <h3>Customer</h3>
      <p>
        ${customer.firstName} ${customer.lastName}<br/>
        ${customer.email}<br/>
        ${customer.phone || ""}
      </p>
      <h3>Shipping Address</h3>
      <p>
        ${customer.address}<br/>
        ${customer.city}, ${customer.state} ${customer.zipCode}<br/>
        ${customer.country}
      </p>
      <h3>Items</h3>
      <pre style="background:#f6f7f9;padding:12px;border-radius:8px;white-space:pre-wrap;">${itemsLines}</pre>
      <p style="font-size:18px"><strong>Total:</strong> $${total.toFixed(2)}</p>
    </div>
  `
}
