import { Resend } from 'resend';

export interface Env {
  ASSETS: { fetch: (request: Request | string) => Promise<Response> };
  RESEND_API_KEY?: string;
  RESEND_FROM_EMAIL?: string;
  RESEND_TO_EMAIL?: string;
}

export async function handleContact(request: Request, env: Env): Promise<Response> {
  const apiKey = env.RESEND_API_KEY;

  if (!apiKey) {
    console.error('Missing RESEND_API_KEY environment variable/secret');
    return new Response(
      JSON.stringify({ success: false, message: 'Server configuration error' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }

  try {
    const body = (await request.json()) as any;
    const { name, email, subject, service, message } = body || {};

    // Native validation
    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return new Response(
        JSON.stringify({
          success: false,
          message: 'Name is too short',
        }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== 'string' || !emailRegex.test(email.trim())) {
      return new Response(
        JSON.stringify({
          success: false,
          message: 'Invalid email address',
        }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    if (!message || typeof message !== 'string' || message.trim().length < 10) {
      return new Response(
        JSON.stringify({
          success: false,
          message: 'Message must be at least 10 characters',
        }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    const formSubject = subject || `Quote Request: ${service || 'General'}`;
    const fromAddress = env.RESEND_FROM_EMAIL || 'Ali Bakhtiari Portfolio <admin@aliib.ir>';
    const toAddress = env.RESEND_TO_EMAIL || 'info@aliib.ir';

    const resend = new Resend(apiKey);

    const { data, error } = await resend.emails.send({
      from: fromAddress,
      to: toAddress,
      subject: formSubject,
      replyTo: email.trim(),
      html: `
        <h3>New Message from ${name.trim()}</h3>
        <p><strong>Email:</strong> ${email.trim()}</p>
        <p><strong>Service:</strong> ${service || 'N/A'}</p>
        <hr />
        <p>${message.trim().replace(/\n/g, '<br>')}</p>
      `,
    });

    if (error) {
      console.error('Resend API error:', error);
      return new Response(
        JSON.stringify({
          success: false,
          message: error.message || 'Failed to send message',
        }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Email sent successfully',
        id: data?.id,
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error: any) {
    console.error('Contact error:', error);
    return new Response(
      JSON.stringify({
        success: false,
        message: error?.message || 'Failed to send message',
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === '/api/contact') {
      if (request.method === 'OPTIONS') {
        return new Response(null, {
          status: 204,
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type',
          },
        });
      }

      if (request.method !== 'POST') {
        return new Response(
          JSON.stringify({ success: false, message: 'Method not allowed' }),
          {
            status: 405,
            headers: { 'Content-Type': 'application/json' },
          }
        );
      }

      return handleContact(request, env);
    }

    return env.ASSETS.fetch(request);
  },
};
