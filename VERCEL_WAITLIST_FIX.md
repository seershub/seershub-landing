# 🔧 Waitlist "Internal Server Error" Fix

## Problem
Waitlist form shows "Internal server error" when submitting.

## Root Cause
Vercel Postgres database is not configured or the `waitlist` table doesn't exist.

---

## ✅ Solution: Setup Vercel Postgres

### Step 1: Create Postgres Database on Vercel

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project: `seershub-landing`
3. Go to **Storage** tab
4. Click **Create Database**
5. Select **Postgres**
6. Choose a name: `seershub-db`
7. Select region (closest to your users)
8. Click **Create**

### Step 2: Connect Database to Project

1. After creation, click **Connect Project**
2. Select `seershub-landing`
3. Vercel will automatically add environment variables:
   - `POSTGRES_URL`
   - `POSTGRES_PRISMA_URL`
   - `POSTGRES_URL_NON_POOLING`
   - `POSTGRES_USER`
   - `POSTGRES_HOST`
   - `POSTGRES_PASSWORD`
   - `POSTGRES_DATABASE`

### Step 3: Create Waitlist Table

1. In Vercel Dashboard → Storage → Your Database
2. Click **Query** tab
3. Run this SQL:

```sql
CREATE TABLE IF NOT EXISTS waitlist (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_waitlist_email ON waitlist(email);
CREATE INDEX idx_waitlist_created_at ON waitlist(created_at DESC);
```

4. Click **Execute**

### Step 4: Redeploy

1. Go to **Deployments** tab
2. Click on latest deployment
3. Click **⋯** (three dots) → **Redeploy**
4. Check **Use existing Build Cache** (optional)
5. Click **Redeploy**

---

## ✅ Verify It Works

1. Wait for deployment to complete (~1-2 minutes)
2. Visit your site: `https://seershub-landing.vercel.app`
3. Scroll to waitlist section
4. Enter an email and submit
5. Should see: "Welcome to Seershub! Check your email for confirmation."

---

## 📊 Check Waitlist Entries

### Option 1: Vercel Dashboard
1. Go to Storage → Your Database → Query
2. Run: `SELECT * FROM waitlist ORDER BY created_at DESC;`

### Option 2: API Endpoint
Visit: `https://your-domain.com/api/waitlist`

Returns: `{ "count": 5 }`

---

## 🔧 Optional: Setup Email Notifications

To send confirmation emails when users join:

1. Go to [Resend.com](https://resend.com)
2. Sign up / Login
3. Go to **API Keys**
4. Create new key: `seershub-production`
5. Copy the API key
6. In Vercel Dashboard → Settings → Environment Variables
7. Add:
   - Key: `RESEND_API_KEY`
   - Value: `re_xxxxxxxxxxxxx`
   - Environment: **Production**
8. Add:
   - Key: `EMAIL_FROM`
   - Value: `Seershub <noreply@seershub.com>`
   - Environment: **Production**
9. Redeploy

---

## 🐛 Still Having Issues?

### Check Logs
1. Vercel Dashboard → Deployments
2. Click latest deployment
3. Click **Functions** tab
4. Click `/api/waitlist`
5. View error logs

### Common Errors

**"relation 'waitlist' does not exist"**
→ Run the CREATE TABLE SQL from Step 3

**"password authentication failed"**
→ Reconnect database to project (Step 2)

**"Network error"**
→ Check if Postgres database is in same region as deployment

---

## 📝 Local Development

To test locally:

1. Copy `.env.example` to `.env.local`
2. Fill in Vercel Postgres credentials from dashboard
3. Run: `npm run dev`
4. Test at: `http://localhost:3000`

---

## ✅ Done!

Your waitlist should now work perfectly! 🎉

Users can join and you'll see entries in your Postgres database.

