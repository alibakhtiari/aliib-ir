import { NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(request) {
  try {
    const { name, email, subject, message } = await request.json()

    const resend = new Resend(process.env.RESEND_API_KEY)

    // Send email using Resend
    const data = await resend.emails.send({
      from: 'admin@aliib.ir',
      to: 'info@aliib.ir',
      subject: `Contact Form: ${subject}`,
      reply_to: email,
      html: `
        <div>
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        </div>
      `
    })

    return NextResponse.json({
      success: true,
      message: 'Email sent successfully'
    })
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json({
      success: false,
      message: 'Failed to send email'
    }, { status: 500 })
  }
}
