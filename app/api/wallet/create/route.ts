import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { method, identifier } = await request.json();

    // Validate input
    if (!method || !identifier) {
      return NextResponse.json(
        { error: 'Missing method or identifier' },
        { status: 400 }
      );
    }

    if (!['email', 'sms'].includes(method)) {
      return NextResponse.json(
        { error: 'Invalid authentication method. Must be "email" or "sms"' },
        { status: 400 }
      );
    }

    // Basic validation for email format
    if (method === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(identifier)) {
        return NextResponse.json(
          { error: 'Invalid email format' },
          { status: 400 }
        );
      }
    }

    // Basic validation for phone number format
    if (method === 'sms') {
      const phoneRegex = /^\+?[1-9]\d{1,14}$/;
      if (!phoneRegex.test(identifier.replace(/\s/g, ''))) {
        return NextResponse.json(
          { error: 'Invalid phone number format' },
          { status: 400 }
        );
      }
    }

    console.log(`Creating embedded wallet for ${method}: ${identifier}`);

    // TODO: Implement actual CDP wallet creation
    // For now, return a mock response to prevent build errors
    const mockAddress = `0x${Math.random().toString(16).substr(2, 40)}`;
    
    console.log(`Mock embedded wallet created: ${mockAddress}`);

    return NextResponse.json({
      success: true,
      wallet: {
        id: `wallet_${Date.now()}`,
        networkId: 'base-sepolia',
      },
      address: mockAddress,
    });

  } catch (error: any) {
    console.error('Wallet creation error:', error);
    
    return NextResponse.json(
      { error: error.message || 'Failed to create embedded wallet' },
      { status: 500 }
    );
  }
}

// Handle unsupported methods
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed. Use POST to create wallets.' },
    { status: 405 }
  );
}
