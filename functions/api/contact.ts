import { Resend } from 'resend'

export const onRequestPost: PagesFunction<{ RESEND_API_KEY: string }> = async (context) => {
    const apiKey = context.env.RESEND_API_KEY

    if (!apiKey) {
        return new Response(JSON.stringify({ success: false, message: 'Server configuration error' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        })
    }

    try {
        const body = (await context.request.json()) as any
        const { name, email, subject, service, message } = body || {}

        // Native validation (Zero Zod runtime overhead)
        if (!name || typeof name !== 'string' || name.trim().length < 2) {
            return new Response(JSON.stringify({
                success: false,
                message: 'Name is too short'
            }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' }
            })
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!email || typeof email !== 'string' || !emailRegex.test(email.trim())) {
            return new Response(JSON.stringify({
                success: false,
                message: 'Invalid email address'
            }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' }
            })
        }

        if (!message || typeof message !== 'string' || message.trim().length < 10) {
            return new Response(JSON.stringify({
                success: false,
                message: 'Message must be at least 10 characters'
            }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' }
            })
        }

        const formSubject = subject || `Quote Request: ${service || 'General'}`
        const resend = new Resend(apiKey)

        await resend.emails.send({
            from: 'Ali Bakhtiari Portfolio <admin@aliib.ir>',
            to: 'info@aliib.ir',
            subject: formSubject,
            replyTo: email.trim(),
            html: `
        <h3>New Message from ${name.trim()}</h3>
        <p><strong>Email:</strong> ${email.trim()}</p>
        <p><strong>Service:</strong> ${service || 'N/A'}</p>
        <hr />
        <p>${message.trim().replace(/\n/g, '<br>')}</p>
      `
        })

        return new Response(JSON.stringify({ success: true, message: 'Email sent successfully' }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        })
    } catch (error) {
        console.error('Contact error:', error)
        return new Response(JSON.stringify({ success: false, message: 'Failed to send message' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        })
    }
}
