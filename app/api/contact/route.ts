import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { z } from 'zod'

// Define validation schema
const contactSchema = z.object({
  name: z.string().min(2, "Name is too short"),
  email: z.string().email("Invalid email address"),
  subject: z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    return NextResponse.json({ success: false, message: 'Server configuration error' }, { status: 500 })
  }

  try {
    const body = await request.json()

    // 1. Validate Input
    const result = contactSchema.safeParse(body)
    if (!result.success) {
      return NextResponse.json({
        success: false,
        message: result.error.issues[0].message
      }, { status: 400 })
    }

    const { name, email, subject, service, message } = result.data
    const formSubject = subject || `Quote Request: ${service || 'General'}`
    const resend = new Resend(apiKey)

    // 2. Send Email
    await resend.emails.send({
      from: 'Ali Bakhtiari Portfolio <admin@aliib.ir>',
      to: 'info@aliib.ir',
      subject: formSubject,
      replyTo: email,
      html: `
        <h3>New Message from ${name}</h3>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Service:</strong> ${service || 'N/A'}</p>
        <hr />
        <p>${message.replace(/\n/g, '<br>')}</p>
      `
    })

    return NextResponse.json({ success: true, message: 'Email sent successfully' })
  } catch (error) {
    console.error('Contact error:', error)
    return NextResponse.json({ success: false, message: 'Failed to send message' }, { status: 500 })
  }
}
