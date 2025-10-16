import { NextRequest, NextResponse } from 'next/server';
import { coinbaseSDK, validateCDPConfig } from '@/lib/cdp-server-config';

export async function POST(request: NextRequest) {
  try {
    // Validate environment configuration
    validateCDPConfig();

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

    // Create embedded wallet using CDP SDK
    // Note: Using the correct CDP SDK API
    const wallet = await coinbaseSDK.createWallet({
      type: 'embedded',
      authentication: {
        method,
        identifier,
      },
      networkId: 'base-sepolia',
    });

    const walletId = wallet.getId();
    const address = wallet.getDefaultAddress()?.getId();

    if (!address) {
      throw new Error('Failed to get wallet address');
    }

    console.log(`Embedded wallet created successfully: ${address}`);

    return NextResponse.json({
      success: true,
      wallet: {
        id: walletId,
        networkId: wallet.getNetworkId(),
      },
      address,
    });

  } catch (error: any) {
    console.error('Wallet creation error:', error);
    
    // Handle specific CDP errors
    if (error.message?.includes('API key')) {
      return NextResponse.json(
        { error: 'Invalid CDP API configuration. Please check your environment variables.' },
        { status: 500 }
      );
    }

    if (error.message?.includes('network')) {
      return NextResponse.json(
        { error: 'Network error. Please try again later.' },
        { status: 503 }
      );
    }

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
