# Seershub - Sports Prediction Competition on Base

Transparent, skill-based sports predictions on Base Network.

## 🔵 Deployed on Base Sepolia

**Smart Contract:** [0xYOUR_CONTRACT_ADDRESS](https://sepolia.basescan.org/address/0x0E446140121605f898e8Ca84f40FFC75384305d0)

**Network:** Base Sepolia (Testnet)  
**Status:** ✅ Active  
**Predictions:** 10+ on-chain  

## 🚀 Quick Links

- **Live Site:** [seershub.com](https://seershub.com)
- **Contract:** [BaseScan](https://sepolia.basescan.org/address/0x0E446140121605f898e8Ca84f40FFC75384305d0)
- **Documentation:** See [docs](./pitch-deck)

## 🛠️ Tech Stack

- **Blockchain:** Base (Ethereum L2)
- **Smart Contracts:** Solidity 0.8.20
- **Frontend:** Next.js 14, TypeScript, Tailwind
- **Web3:** Wagmi, Viem, RainbowKit
- **Development:** Hardhat

## 📜 Smart Contract
```solidity
contract SeershubPredictions {
    // On-chain sports predictions
    // Transparent, verifiable, skill-based
}
# Seershub Landing Page

![Seershub](https://img.shields.io/badge/Built%20on-Base%20Network-0052FF)
![Next.js](https://img.shields.io/badge/Next.js-14-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8)

A professional landing page for **Seershub** - a decentralized Web3 sports prediction platform built on Base Network.

## 🚀 Features

- ✨ Modern, responsive design with dark theme
- 🎨 Framer Motion animations and glass morphism effects
- 📧 Waitlist functionality with email validation
- 💾 Vercel Postgres database integration
- 📨 Automated welcome emails via Resend API
- ⚡ Lightning-fast performance with Next.js 14
- 🎯 TypeScript for type safety
- 🎨 Tailwind CSS for styling

## 📦 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Database**: Vercel Postgres
- **Email**: Resend API
- **Validation**: Zod

## 🛠️ Installation

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Vercel account (for database)
- Resend account (for emails)

### Step 1: Install Dependencies

```bash
npm install
# or
yarn install
```

### Step 2: Set Up Environment Variables

Copy the environment template:

```bash
cp .env.local.example .env.local
```

Fill in your environment variables in `.env.local`:

```env
# Vercel Postgres - Get from https://vercel.com/dashboard
POSTGRES_URL="your_postgres_url"
POSTGRES_PRISMA_URL="your_postgres_prisma_url"
POSTGRES_URL_NO_SSL="your_postgres_url_no_ssl"
POSTGRES_URL_NON_POOLING="your_postgres_url_non_pooling"
POSTGRES_USER="your_postgres_user"
POSTGRES_HOST="your_postgres_host"
POSTGRES_PASSWORD="your_postgres_password"
POSTGRES_DATABASE="your_postgres_database"

# Resend API - Get from https://resend.com/api-keys
RESEND_API_KEY="re_your_api_key"
EMAIL_FROM="Seershub <onboarding@seershub.com>"

NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

### Step 3: Set Up Database

#### Using Vercel Dashboard

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Create a new Postgres database
3. Copy the connection strings to your `.env.local`
4. In the Vercel Postgres dashboard, run the SQL from `scripts/setup-db.sql`

#### Using Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Link your project
vercel link

# Create Postgres database
vercel postgres create

# Run setup script
vercel postgres exec scripts/setup-db.sql
```

### Step 4: Run Development Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🌐 Deployment

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/seershub-landing)

1. Click the "Deploy with Vercel" button above
2. Connect your GitHub repository
3. Add your environment variables in Vercel dashboard
4. Deploy!

### Manual Deployment

```bash
# Build the application
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
seershub-landing/
├── app/
│   ├── api/
│   │   └── waitlist/
│   │       └── route.ts          # Waitlist API endpoint
│   ├── layout.tsx                # Root layout
│   ├── page.tsx                  # Home page
│   └── globals.css               # Global styles
├── components/
│   └── sections/
│       ├── Hero.tsx              # Hero section
│       ├── ProblemSolution.tsx   # Problem/Solution comparison
│       ├── HowItWorks.tsx        # How it works section
│       ├── WhyBase.tsx           # Why Base Network
│       ├── LiveMatches.tsx       # Live matches preview
│       ├── Roadmap.tsx           # Roadmap timeline
│       ├── WaitlistCTA.tsx       # Waitlist CTA section
│       └── Footer.tsx            # Footer
├── scripts/
│   └── setup-db.sql              # Database setup script
├── public/                       # Static assets
├── .env.example                  # Environment variables template
├── tailwind.config.ts            # Tailwind configuration
├── tsconfig.json                 # TypeScript configuration
└── package.json                  # Dependencies
```

## 🎨 Customization

### Brand Colors

Update colors in `tailwind.config.ts`:

```typescript
colors: {
  navy: {
    DEFAULT: '#000814',
    light: '#001D3D',
  },
  base: {
    blue: '#0052FF',
  },
}
```

### Content

- **Hero Section**: Edit `components/sections/Hero.tsx`
- **Features**: Edit respective section components
- **Footer Links**: Edit `components/sections/Footer.tsx`

### Email Template

Customize the welcome email in `app/api/waitlist/route.ts`:

```typescript
const getWelcomeEmailHTML = (email: string) => `
  // Your custom HTML here
`;
```

## 🔌 API Endpoints

### POST /api/waitlist

Add an email to the waitlist.

**Request Body:**
```json
{
  "email": "user@example.com"
}
```

**Response (Success):**
```json
{
  "success": true,
  "message": "Successfully joined the waitlist"
}
```

**Response (Error):**
```json
{
  "error": "Email already registered on waitlist"
}
```

### GET /api/waitlist

Get waitlist statistics.

**Response:**
```json
{
  "count": 1234
}
```

## 🧪 Testing

### Test Waitlist Functionality

```bash
# Using curl
curl -X POST http://localhost:3000/api/waitlist \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com"}'

# Get stats
curl http://localhost:3000/api/waitlist
```

## 📝 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `POSTGRES_URL` | Vercel Postgres connection URL | Yes |
| `RESEND_API_KEY` | Resend API key for emails | Yes |
| `EMAIL_FROM` | Sender email address | Yes |
| `NEXT_PUBLIC_APP_URL` | Application URL | No |

## 🐛 Troubleshooting

### Database Connection Error

- Verify all Postgres environment variables are set correctly
- Run the setup script: `scripts/setup-db.sql`
- Check Vercel Postgres dashboard for connection issues

### Email Not Sending

- Verify `RESEND_API_KEY` is set correctly
- Check Resend dashboard for API key permissions
- Verify sender email domain is verified in Resend

### Build Errors

```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# Rebuild
npm run build
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Links

- [Seershub Website](https://seershub.com)
- [Base Network](https://base.org)
- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Postgres](https://vercel.com/docs/storage/vercel-postgres)
- [Resend API](https://resend.com/docs)

## 💬 Support

For support, email info@seershub.com or join our [Discord community](#).

---

**Built with ❤️ on Base Network**

*Predict. Win. Own The Game.*


