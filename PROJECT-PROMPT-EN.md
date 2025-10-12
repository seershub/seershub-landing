# 🏆 Seershub Landing Page - Complete Project Prompt (English)

## 📋 Project Overview

**Seershub** is a decentralized sports prediction platform built on Base Network (Ethereum L2). This landing page showcases the platform's features, value proposition, and roadmap to attract early adopters to the waitlist.

---

## 🎨 Design Philosophy

### Visual Identity
- **Style**: Professional, minimal, modern Web3 aesthetic inspired by Linear.app
- **Theme**: Dark mode with vibrant accent colors
- **Primary Color**: Base Blue (`#0052FF`)
- **Accent Colors**: Cyan, Purple, Green, Orange, Red
- **Typography**: System fonts with tight letter-spacing and large headlines
- **Effects**: Glass morphism, subtle shadows, smooth animations

### Key Design Principles
1. **Minimalism**: Clean lines, generous whitespace, focused content
2. **Motion**: Framer Motion animations for engagement
3. **Clarity**: Clear hierarchy, readable typography, intuitive navigation
4. **Authenticity**: Real team/league logos, professional graphics
5. **Performance**: Optimized images, viewport animations, efficient rendering

---

## 🛠️ Technology Stack

### Core Framework
- **Next.js 15.1.3** (App Router)
- **React 19** (React Compiler enabled)
- **TypeScript** (Strict mode)

### Styling & Animation
- **Tailwind CSS 3.4.17** (Utility-first)
- **Framer Motion 12.1.0** (Smooth animations)
- **Custom CSS variables** (Design system)

### Database & Backend
- **Vercel Postgres** (via Neon)
- **Zod** (Schema validation)
- **API Routes** (Next.js serverless functions)

### Optional Services
- **Resend** (Email notifications for waitlist)

### Deployment
- **Vercel** (Hosting + CI/CD)
- **Base Network** (Target blockchain)

---

## 📁 Project Structure

```
seershub-landing/
├── app/
│   ├── api/
│   │   └── waitlist/
│   │       └── route.ts          # Waitlist API endpoint
│   ├── globals.css               # Global styles + design system
│   ├── layout.tsx                # Root layout with header
│   └── page.tsx                  # Main landing page
│
├── components/
│   ├── navigation/
│   │   └── Header.tsx            # Site header with logo & navigation
│   │
│   ├── sections/
│   │   ├── Hero.tsx              # Hero section with animated graphics
│   │   ├── LiveMatchesDemo.tsx   # Live match cards simulation
│   │   ├── ProblemSolution.tsx   # Problem/solution comparison
│   │   ├── HowItWorks.tsx        # 3-step process explanation
│   │   ├── WhyBase.tsx           # Base Network benefits
│   │   ├── Roadmap.tsx           # Timeline-style roadmap
│   │   ├── WaitlistCTA.tsx       # Email capture form
│   │   └── Footer.tsx            # Site footer
│   │
│   └── graphics/
│       ├── LeagueLogo.tsx        # League logo component (uses real PNGs)
│       ├── TeamLogo.tsx          # Team logo component (uses real PNGs)
│       ├── SoccerBallButton.tsx  # Custom button with hexagon pattern
│       ├── FootballField.tsx     # Animated football field graphic
│       ├── Web3Chain.tsx         # Blockchain chain graphic
│       ├── TrophyCup.tsx         # Trophy illustration
│       ├── BlockchainNetwork.tsx # Network nodes graphic
│       ├── WalletIcon.tsx        # Wallet icon for "How it Works"
│       ├── PredictionTarget.tsx  # Target icon for predictions
│       ├── RewardTrophy.tsx      # Trophy icon for rewards
│       ├── BaseLogo.tsx          # Base Network logo
│       ├── CoinbaseIntegration.tsx # Coinbase + Base integration
│       ├── QuarterBadge.tsx      # Roadmap quarter badges
│       └── TimelineConnector.tsx # Roadmap timeline connector
│
├── public/
│   ├── logos/                    # Team & league logos (user-provided)
│   │   ├── barcelona.png
│   │   ├── real-madrid.png
│   │   ├── man-united.png
│   │   ├── liverpool.png
│   │   ├── bayern.png
│   │   ├── dortmund.png
│   │   ├── laliga.png
│   │   ├── premier-league.png
│   │   └── bundesliga.png
│   │
│   ├── patterns/
│   │   └── soccer-hexagon.png    # Soccer ball pattern (user-provided)
│   │
│   ├── seershub-logo.png         # Main logo (70-80px height)
│   └── robots.txt
│
├── scripts/
│   └── setup-db.sql              # Database schema
│
├── .env.local                    # Environment variables (not in repo)
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── LOGO-SETUP-INSTRUCTIONS.md    # Logo installation guide
```

---

## 🎯 Key Features

### 1. **Hero Section** (`Hero.tsx`)
- **Headline**: "Predict. Compete. Win. On-Chain."
- **Animated Background**: Football field, blockchain chains, trophy
- **Gradient Orbs**: Pulsing blue/cyan orbs for energy
- **Floating Icons**: Trophy, Zap, Target icons
- **Stats**: 10K+ Events, $500K+ Prize Pool, Instant Payouts
- **CTAs**: "Join Waitlist" + "How it works"

### 2. **Live Matches Demo** (`LiveMatchesDemo.tsx`)
- **3 Match Cards**: Barcelona vs Real Madrid, Man United vs Liverpool, Bayern vs Dortmund
- **Real Logos**: Uses actual team and league logos from `/public/logos/`
- **Live Data**: Countdown timers, participant counts, prize pools
- **Entry Fees**: USDC amounts with green badges
- **Base Badge**: Shows blockchain network
- **Custom Button**: Soccer ball hexagon pattern button

### 3. **Problem/Solution** (`ProblemSolution.tsx`)
- **Two Columns**: Problem (red) vs Solution (blue)
- **Animated Icons**: Shield, Lock for security themes
- **Hover Effects**: Scale + glow on cards
- **Comparison**:
  - ❌ Problem: Custodial, high fees, no transparency, slow
  - ✅ Solution: Non-custodial, low fees, open contracts, instant

### 4. **How It Works** (`HowItWorks.tsx`)
- **3 Steps**:
  1. Pay Entry Fee (Wallet icon + USDC)
  2. Make Predictions (Target icon + analysis)
  3. Win Rewards (Trophy icon + instant payout)
- **Custom Graphics**: `WalletIcon`, `PredictionTarget`, `RewardTrophy`
- **Arrows**: Animated arrows between steps
- **Hover**: Glow effects and scale animations

### 5. **Why Base?** (`WhyBase.tsx`)
- **3 Features**:
  - ⚡ Lightning Fast (~2s)
  - 💰 Ultra Low Fees (<$0.01)
  - 🛡️ Ethereum Security (L2)
- **Graphics**: `BaseLogo`, `CoinbaseIntegration`
- **Animations**: Rotating backgrounds, pulsing icons
- **Integration Card**: Coinbase + Base visual showcase

### 6. **Roadmap** (`Roadmap.tsx`)
- **Timeline Style**: Vertical flow with connectors
- **4 Quarters** (Q1-Q4 2025):
  - Q1: Launch, Audit, Beta
  - Q2: Multi-sport, Mobile app, BASE tokens
  - Q3: Tennis/esports, Analytics, Live betting
  - Q4: NFT badges, Collectibles, VIP rewards
- **Quarter Badges**: `QuarterBadge` components
- **Status Indicators**: Current (pulsing), Upcoming
- **Icons**: Rocket, TrendingUp, Users, Coins

### 7. **Waitlist CTA** (`WaitlistCTA.tsx`)
- **Email Capture Form**: Validated with Zod
- **API Integration**: POST to `/api/waitlist`
- **Status Messages**: Loading, Success, Error states
- **Animations**: Floating sparkles, gradient shifts
- **Benefits**: Early access, exclusive perks

### 8. **Header** (`Header.tsx`)
- **Logo**: Large Seershub logo (70-80px) with blue glow
- **Navigation**: "How it works", "Roadmap" anchor links
- **Buttons**: 
  - 📄 Pitch Deck (glass effect)
  - Join Waitlist (blue gradient + glow)
- **Fixed Position**: Always visible on scroll
- **Mobile**: Hamburger menu (to be implemented)

---

## 🎨 Design System (`globals.css`)

### CSS Variables
```css
/* Colors */
--base-blue: #0052FF;
--accent-cyan: #00D4FF;
--accent-purple: #8B5CF6;
--accent-green: #10B981;
--accent-orange: #F59E0B;
--sport-red: #EF4444;

/* Spacing Scale */
--space-4 to --space-160 (4px → 160px)

/* Typography Scale */
--text-xs to --text-8xl (0.75rem → 4.5rem)

/* Line Heights */
--leading-tight: 1.1;
--leading-normal: 1.5;
--leading-relaxed: 1.6;

/* Border Radius */
--radius-sm to --radius-full (6px → 9999px)
```

### Utility Classes
- `.glass-effect` - Subtle glass morphism (3% white, 20px blur)
- `.glass-effect-strong` - Stronger glass (5% white, 24px blur)
- `.text-gradient` - Base blue gradient text
- `.btn-glow` - Button glow on hover
- `.text-display` - Large headlines (clamp 3rem → 6rem)
- `.text-title` - Section titles (clamp 2rem → 3.5rem)
- `.text-subtle` - 60% opacity white
- `.text-muted` - 40% opacity white

### Animations
- `fadeIn` - Fade in + slide up
- `slideUp` - Slide up entrance
- `gradient-shift` - Moving gradient background
- `pulse-glow` - Pulsing glow effect

---

## 🗄️ Database Schema

### `waitlist` Table
```sql
CREATE TABLE waitlist (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### API Endpoint: `/api/waitlist`
- **Method**: POST
- **Body**: `{ "email": "user@example.com" }`
- **Validation**: Zod schema
- **Response**: 
  - 201: Success
  - 400: Invalid email or duplicate
  - 500: Server error

---

## 🌐 Environment Variables

### Required (`.env.local`)
```bash
# Database (Vercel Postgres via Neon)
POSTGRES_URL="postgres://..."
POSTGRES_PRISMA_URL="postgres://..."
POSTGRES_URL_NO_SSL="postgres://..."
POSTGRES_URL_NON_POOLING="postgres://..."
POSTGRES_USER="..."
POSTGRES_HOST="..."
POSTGRES_PASSWORD="..."
POSTGRES_DATABASE="..."

# Optional: Email notifications
RESEND_API_KEY="re_..."
```

### Setup Commands
```bash
# Install Vercel CLI
npm i -g vercel

# Link project
vercel link

# Pull environment variables
vercel env pull .env.local

# Create database table
vercel postgres sql -- < scripts/setup-db.sql
```

---

## 🚀 Development Workflow

### Installation
```bash
npm install
```

### Development Server
```bash
npm run dev
# → http://localhost:3000
```

### Build for Production
```bash
npm run build
npm run start
```

### Linting
```bash
npm run lint
```

---

## 📊 Component Breakdown

### Graphics Components (SVG-based)
All custom SVG graphics are self-contained React components with Framer Motion animations:

1. **Sports Theme**:
   - `FootballField.tsx` - Animated grass field with lines
   - `SportsBall.tsx` - Rotating football
   - `TrophyCup.tsx` - 3D-style trophy

2. **Web3 Theme**:
   - `Web3Chain.tsx` - Blockchain chain links
   - `BlockchainNetwork.tsx` - Network nodes
   - `BaseLogo.tsx` - Base Network logo
   - `CoinbaseIntegration.tsx` - Coinbase + Base

3. **Icons**:
   - `WalletIcon.tsx` - Crypto wallet
   - `PredictionTarget.tsx` - Target crosshair
   - `RewardTrophy.tsx` - Winner trophy
   - `QuarterBadge.tsx` - Roadmap badges
   - `TimelineConnector.tsx` - Vertical timeline

### Logo Components (Image-based)
- `LeagueLogo.tsx` - Displays La Liga, Premier League, Bundesliga logos
- `TeamLogo.tsx` - Displays Barcelona, Real Madrid, Man United, Liverpool, Bayern, Dortmund logos
- Both use Next.js `Image` component with real PNG files from `/public/logos/`

### Custom Button
- `SoccerBallButton.tsx` - Make Prediction button with:
  - Real hexagon pattern from `/public/patterns/soccer-hexagon.png`
  - Animated gradient overlay
  - Rotating soccer ball decorations
  - USDC fee badge
  - Hover effects

---

## 🎭 Animation Strategy

### Framer Motion Patterns
1. **Initial Load**: `opacity: 0, y: 20` → `opacity: 1, y: 0`
2. **Viewport Triggers**: `viewport={{ once: true }}` for performance
3. **Hover Effects**: `scale: 1.05`, `y: -5` for interactivity
4. **Continuous**: Rotating, pulsing for background elements
5. **Spring Physics**: `type: "spring"` for natural motion

### Performance Optimizations
- `viewport={{ once: true }}` - Animate only once
- Lazy loading for images
- CSS transforms (GPU-accelerated)
- Debounced scroll listeners

---

## 📱 Responsive Design

### Breakpoints (Tailwind)
- **Mobile**: `< 768px` (default)
- **Tablet**: `md: 768px+`
- **Desktop**: `lg: 1024px+`
- **Wide**: `xl: 1280px+`

### Mobile Adaptations
- Header: Smaller logo (64px → 70px)
- Typography: Clamp functions for fluid scaling
- Grid: 1 column → 2/3 columns on larger screens
- Spacing: Reduced padding on mobile
- Navigation: Hamburger menu (to be implemented)

---

## ✅ Logo Setup Requirements

### User Must Provide
Place the following files in `public/logos/`:

**Team Logos** (PNG, 512x512px min):
- `barcelona.png`
- `real-madrid.png`
- `man-united.png`
- `liverpool.png`
- `bayern.png`
- `dortmund.png`

**League Logos** (PNG, 512x512px min):
- `laliga.png`
- `premier-league.png`
- `bundesliga.png`

**Pattern** (PNG, 80x80px tile):
- `public/patterns/soccer-hexagon.png`

### Installation
See `LOGO-SETUP-INSTRUCTIONS.md` for detailed steps.

---

## 🔧 Configuration Files

### `tailwind.config.ts`
- Extended colors: Base blue, accent colors
- Custom animations: fade-in, slide-up
- Content paths: app/*, components/*

### `tsconfig.json`
- Strict mode enabled
- Path aliases: `@/` → root
- React compiler enabled

### `next.config.mjs`
- React compiler: enabled
- Experimental features: optimizePackageImports

---

## 🎯 User Journey

1. **Land on Hero** → See value proposition
2. **View Live Matches** → Understand the experience
3. **Read Problem/Solution** → See why decentralization matters
4. **Learn How It Works** → Understand the process
5. **Discover Base Benefits** → See technical advantages
6. **Review Roadmap** → See future vision
7. **Join Waitlist** → Capture email
8. **Footer** → Social links, legal

---

## 🚀 Deployment Checklist

- [ ] Logo files placed in `public/logos/`
- [ ] Pattern file placed in `public/patterns/`
- [ ] Environment variables configured
- [ ] Database table created
- [ ] Build succeeds (`npm run build`)
- [ ] No linter errors (`npm run lint`)
- [ ] Test waitlist form
- [ ] Verify all animations work
- [ ] Test on mobile
- [ ] Deploy to Vercel

---

## 📈 Future Enhancements

### High Priority
- [ ] Mobile hamburger menu implementation
- [ ] Email confirmation system
- [ ] Admin dashboard for waitlist
- [ ] Social sharing meta tags
- [ ] Analytics integration (Vercel Analytics)

### Medium Priority
- [ ] Blog/news section
- [ ] Team member profiles
- [ ] Tokenomics page
- [ ] FAQ section
- [ ] Multi-language support

### Low Priority
- [ ] Dark/light mode toggle
- [ ] Custom cursor
- [ ] Loading screen
- [ ] Sound effects
- [ ] 3D graphics with Three.js

---

## 🐛 Known Issues

1. **Mobile menu**: Not yet implemented (hamburger button exists but no drawer)
2. **Image optimization**: Requires user to provide logos
3. **Email sending**: Optional Resend integration not required for MVP

---

## 🎓 Learning Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Vercel Postgres Docs](https://vercel.com/docs/storage/vercel-postgres)
- [Base Network Docs](https://docs.base.org/)

---

## 📞 Support & Contact

For issues or questions:
- Check `LOGO-SETUP-INSTRUCTIONS.md` for logo setup
- Review error messages in browser console (F12)
- Verify environment variables are set
- Ensure database table exists
- Restart dev server after changes

---

## 🏁 Quick Start Summary

```bash
# 1. Clone/setup project
cd seershub-landing

# 2. Install dependencies
npm install

# 3. Setup environment
vercel link
vercel env pull .env.local

# 4. Create database
vercel postgres sql -- < scripts/setup-db.sql

# 5. Add logo files
# - Place 9 team/league logos in public/logos/
# - Place soccer hexagon pattern in public/patterns/

# 6. Run development server
npm run dev

# 7. Open browser
# → http://localhost:3000
```

---

**Built with ❤️ for the Web3 sports prediction revolution on Base Network** 🏆⚽🚀

