import { NextResponse } from 'next/server';
import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { Resend } from 'resend';

// Initialize Resend only if API key is available
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

// Email validation schema
const emailSchema = z.object({
  email: z.string().email('Invalid email address'),
});

// Welcome email template
const getWelcomeEmailHTML = (email: string) => `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #000814 0%, #0052FF 100%); padding: 40px; text-align: center; border-radius: 10px 10px 0 0; }
    .header h1 { color: white; margin: 0; font-size: 32px; }
    .content { background: #f9f9f9; padding: 40px; border-radius: 0 0 10px 10px; }
    .button { display: inline-block; background: #0052FF; color: white; padding: 15px 30px; text-decoration: none; border-radius: 25px; margin: 20px 0; }
    .footer { text-align: center; margin-top: 30px; color: #666; font-size: 14px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>🎉 Welcome to Seershub!</h1>
    </div>
    <div class="content">
      <h2>You're on the list!</h2>
      <p>Thank you for joining the Seershub waitlist. You're now part of an exclusive group of early adopters who will revolutionize sports prediction.</p>
      
      <h3>What's Next?</h3>
      <ul>
        <li>🚀 Get early access to the platform before public launch</li>
        <li>💰 Receive bonus USDC in your account</li>
        <li>⚡ Exclusive features and perks for early members</li>
        <li>📊 Priority access to high-stakes matches</li>
      </ul>
      
      <p>We'll notify you as soon as Seershub launches on Base Network. In the meantime, follow us on social media for updates!</p>
      
      <a href="https://seershub.com" class="button">Visit Seershub</a>
      
      <div class="footer">
        <p>Built on Base Network | Secured by Ethereum</p>
        <p>© 2024 Seershub. All rights reserved.</p>
      </div>
    </div>
  </div>
</body>
</html>
`;

export async function POST(request: Request) {
  try {
    // Parse and validate request body
    const body = await request.json();
    const { email } = emailSchema.parse(body);

    // Check if email already exists
    const existingEmail = await sql`
      SELECT email FROM waitlist WHERE email = ${email}
    `;

    if (existingEmail.rows.length > 0) {
      return NextResponse.json(
        { error: 'Email already registered on waitlist' },
        { status: 400 }
      );
    }

    // Insert email into database
    await sql`
      INSERT INTO waitlist (email, created_at)
      VALUES (${email}, NOW())
    `;

    // Send welcome email (only if Resend is configured)
    if (resend) {
      try {
        await resend.emails.send({
          from: process.env.EMAIL_FROM || 'Seershub <info@seershub.com>',
          to: email,
          subject: '🎉 Welcome to Seershub - You\'re on the Waitlist!',
          html: getWelcomeEmailHTML(email),
        });
      } catch (emailError) {
        console.error('Email sending failed:', emailError);
        // Continue even if email fails - user is still added to waitlist
      }
    } else {
      console.log('Resend not configured - skipping email notification');
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Successfully joined the waitlist',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Waitlist API error:', error);

    // Handle Zod validation errors
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: error.errors[0].message },
        { status: 400 }
      );
    }

    // Handle database errors
    if (error instanceof Error) {
      if (error.message.includes('relation "waitlist" does not exist')) {
        return NextResponse.json(
          { error: 'Database not initialized. Please run the setup script.' },
          { status: 500 }
        );
      }
      
      // Return more detailed error in development
      if (process.env.NODE_ENV === 'development') {
        return NextResponse.json(
          { error: `Database error: ${error.message}` },
          { status: 500 }
        );
      }
    }

    return NextResponse.json(
      { error: 'Internal server error. Please try again later.' },
      { status: 500 }
    );
  }
}

// GET endpoint to check waitlist stats (optional)
export async function GET() {
  try {
    const result = await sql`
      SELECT COUNT(*) as count FROM waitlist
    `;

    return NextResponse.json({
      count: result.rows[0].count,
    });
  } catch (error) {
    console.error('Waitlist stats error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch waitlist stats' },
      { status: 500 }
    );
  }
}


