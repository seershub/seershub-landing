# 🚀 Seershub - Quick Start (5 Minutes)

Get your Seershub landing page running in 5 minutes!

## ✅ Prerequisites

- [ ] Node.js installed ([Download here](https://nodejs.org/))
- [ ] Vercel account ([Sign up free](https://vercel.com/signup))
- [ ] Resend account ([Sign up free](https://resend.com/signup))

---

## 📦 Step 1: Install Dependencies (1 min)

```bash
cd seershub-landing
npm install
```

---

## 🗄️ Step 2: Setup Database (2 min)

### Option A: Vercel Dashboard (Easier)

1. Go to https://vercel.com/dashboard
2. Click **Storage** → **Create Database** → **Postgres**
3. Copy the `.env.local` tab contents
4. Paste into a new file: `seershub-landing/.env.local`
5. In the **Query** tab, run this:

```sql
CREATE TABLE IF NOT EXISTS waitlist (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  notified BOOLEAN DEFAULT FALSE
);

CREATE INDEX idx_waitlist_email ON waitlist(email);
CREATE INDEX idx_waitlist_created_at ON waitlist(created_at);
```

### Option B: Vercel CLI (Faster)

```bash
npm i -g vercel
vercel login
vercel link
vercel postgres create
vercel env pull .env.local
vercel postgres exec scripts/setup-db.sql
```

---

## 📧 Step 3: Setup Email (1 min)

1. Go to https://resend.com/api-keys
2. Create API Key → Copy it
3. Add to your `.env.local`:

```env
RESEND_API_KEY="re_your_api_key_here"
EMAIL_FROM="Seershub <onboarding@seershub.com>"
```

---

## 🎉 Step 4: Run! (1 min)

```bash
npm run dev
```

Open: **http://localhost:3000** 🚀

---

## ✅ Test It

1. Scroll to the waitlist section
2. Enter your email
3. Click "Join Now"
4. Check your inbox! 📧

---

## 🐛 Not Working?

### Database Error?
```bash
# Check your .env.local has all POSTGRES_* variables
cat .env.local
```

### Email Not Sending?
- Use the email address you signed up with on Resend
- Check Resend dashboard logs
- For production, verify your domain

### Build Error?
```bash
rm -rf .next node_modules
npm install
npm run dev
```

---

## 📚 Need More Help?

- **Setup Issues**: See [SETUP.md](SETUP.md)
- **Full Docs**: See [README.md](README.md)
- **Overview**: See [PROJECT_SUMMARY.md](PROJECT_SUMMARY.md)

---

## 🎨 Customize

After it's running, customize:

1. **Colors**: Edit `tailwind.config.ts`
2. **Logo**: Update `components/sections/Hero.tsx`
3. **Content**: Edit files in `components/sections/`
4. **Email**: Edit `app/api/waitlist/route.ts`

---

## 🚢 Deploy to Production

```bash
# Push to GitHub
git add .
git commit -m "Initial commit"
git push

# Then deploy on Vercel
# 1. Go to https://vercel.com/new
# 2. Import your repo
# 3. Add environment variables
# 4. Deploy!
```

---

## 🎯 You're Done!

Your Seershub landing page is ready! 🎉

**Next Steps:**
- Add your logo and branding
- Update social media links
- Customize content
- Deploy to Vercel

---

**Questions?** Check the other documentation files or create an issue.

*Built with ❤️ on Base Network*


