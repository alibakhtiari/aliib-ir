import { NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(request) {
  console.log('API route called')

  // Check if API key exists
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.error('RESEND_API_KEY not found')
    return NextResponse.json({
      success: false,
      message: 'RESEND_API_KEY not configured'
    }, { status: 500 })
  }

  try {
    const body = await request.json()
    const { name, email, subject, service, message } = body

    // Handle both forms: main contact form (subject) and popup (service)
    const formSubject = subject || `Quote Request: ${service || 'General'}`

    console.log('Received contact form:', { name, email, subject: formSubject, message: message?.slice(0, 50) })

    const resend = new Resend(apiKey)

    // Send email using Resend
    const data = await resend.emails.send({
      from: 'admin@aliib.ir', // Make sure this domain is verified in Resend dashboard
      to: 'info@aliib.ir',
      subject: `Contact Form: ${formSubject}`,
      reply_to: email,
      html: `
        <div>
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${formSubject}</p>
          ${service ? `<p><strong>Service:</strong> ${service}</p>` : ''}
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        </div>
      `
    })

    console.log('Email sent successfully:', data)
    return NextResponse.json({
      success: true,
      message: 'Email sent successfully'
    })
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json({
      success: false,
      message: `Failed to send email: ${error.message}`,
      error: error.message
    }, { status: 500 })
  }
}
