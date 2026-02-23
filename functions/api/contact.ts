import { Resend } from 'resend'
import { z } from 'zod'

const contactSchema = z.object({
    name: z.string().min(2, "Name is too short"),
    email: z.string().email("Invalid email address"),
    subject: z.string().optional(),
    service: z.string().optional(),
    message: z.string().min(10, "Message must be at least 10 characters"),
})

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
        const result = contactSchema.safeParse(body)

        if (!result.success) {
            return new Response(JSON.stringify({
                success: false,
                message: result.error.issues[0].message
            }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' }
            })
        }

        const { name, email, subject, service, message } = result.data
        const formSubject = subject || `Quote Request: ${service || 'General'}`
        const resend = new Resend(apiKey)

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
