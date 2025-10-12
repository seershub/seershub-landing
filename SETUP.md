# Quick Setup Guide

This guide will help you get Seershub landing page up and running in minutes.

## 🚀 Quick Start

### 1. Install Node.js

If you haven't already, download and install Node.js from [nodejs.org](https://nodejs.org/) (LTS version recommended).

Verify installation:
```bash
node --version
npm --version
```

### 2. Install Dependencies

```bash
cd seershub-landing
npm install
```

### 3. Set Up Vercel Postgres Database

#### Option A: Using Vercel Dashboard (Easiest)

1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Create a new project or select existing
3. Go to **Storage** tab → Click **Create Database**
4. Select **Postgres** → Create
5. Go to the `.env.local` tab in your database
6. Copy all environment variables
7. Create a `.env.local` file in your project root
8. Paste the environment variables
9. In the **Query** tab, paste and run this SQL:

```sql
CREATE TABLE IF NOT EXISTS waitlist (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  notified BOOLEAN DEFAULT FALSE
);

CREATE INDEX IF NOT EXISTS idx_waitlist_email ON waitlist(email);
CREATE INDEX IF NOT EXISTS idx_waitlist_created_at ON waitlist(created_at);
```

#### Option B: Using Vercel CLI

```bash
# Install Vercel CLI globally
npm i -g vercel

# Login to Vercel
vercel login

# Link your project
vercel link

# Create Postgres database
vercel postgres create

# Pull environment variables
vercel env pull .env.local

# Run setup script
vercel postgres exec scripts/setup-db.sql
```

### 4. Set Up Resend (Email Service)

1. Go to [resend.com](https://resend.com)
2. Sign up for a free account
3. Go to **API Keys** → Create API Key
4. Copy the API key
5. Add to your `.env.local`:

```env
RESEND_API_KEY="re_your_api_key_here"
EMAIL_FROM="Seershub <onboarding@seershub.com>"
```

**Important**: For production, you need to verify your domain in Resend. For testing, you can use your registered email address.

### 5. Configure Environment Variables

Your `.env.local` should look like this:

```env
# Vercel Postgres (copied from Vercel dashboard)
POSTGRES_URL="postgres://..."
POSTGRES_PRISMA_URL="postgres://..."
POSTGRES_URL_NO_SSL="postgres://..."
POSTGRES_URL_NON_POOLING="postgres://..."
POSTGRES_USER="default"
POSTGRES_HOST="..."
POSTGRES_PASSWORD="..."
POSTGRES_DATABASE="verceldb"

# Resend API
RESEND_API_KEY="re_..."
EMAIL_FROM="Seershub <onboarding@seershub.com>"

# App URL
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

### 6. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) 🎉

## ✅ Verify Everything Works

### Test the Waitlist

1. Go to the waitlist section on the homepage
2. Enter your email address
3. Click "Join Now"
4. You should see a success message
5. Check your email for the welcome message
6. Verify the email is in your database:
   - Go to Vercel dashboard → Your Postgres database → Data tab
   - You should see your email in the `waitlist` table

## 🔧 Troubleshooting

### Problem: `npx: command not found`

**Solution**: Install Node.js from [nodejs.org](https://nodejs.org/) and restart your terminal.

### Problem: Database connection error

**Solutions**:
- Verify all `POSTGRES_*` variables are set in `.env.local`
- Make sure you ran the SQL setup script
- Check Vercel dashboard for database status

### Problem: Email not sending

**Solutions**:
- Verify `RESEND_API_KEY` is correct
- Check if you're using the correct sender email
- For testing, use the email associated with your Resend account
- Check Resend dashboard for email logs

### Problem: Build errors

```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run dev
```

### Problem: TypeScript errors

```bash
# Make sure all dependencies are installed
npm install

# Check TypeScript configuration
npx tsc --noEmit
```

## 📦 Deploy to Production

### Deploy to Vercel

1. Push your code to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your GitHub repository
4. Vercel will auto-detect Next.js
5. Add environment variables in the Vercel dashboard:
   - Go to **Settings** → **Environment Variables**
   - Add all variables from your `.env.local`
6. Click **Deploy**

Your site will be live at `your-project.vercel.app` 🚀

## 🎨 Customization Checklist

- [ ] Update brand colors in `tailwind.config.ts`
- [ ] Replace "SEERSHUB" logo in `components/sections/Hero.tsx`
- [ ] Update social media links in `components/sections/Footer.tsx`
- [ ] Customize email template in `app/api/waitlist/route.ts`
- [ ] Update metadata in `app/layout.tsx`
- [ ] Add your actual sports data to `components/sections/LiveMatches.tsx`

## 📞 Need Help?

- Check the main [README.md](README.md) for detailed documentation
- Review [Next.js Documentation](https://nextjs.org/docs)
- Check [Vercel Postgres Docs](https://vercel.com/docs/storage/vercel-postgres)
- Check [Resend Documentation](https://resend.com/docs)

---

**That's it! You're ready to build the future of Web3 sports prediction! 🎉**


