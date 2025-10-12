# Vercel Postgres Kurulum Rehberi

Bu rehber, Seershub Landing Page için Vercel Postgres veritabanını kurmanıza yardımcı olacak.

## 📋 Ön Koşullar

- Vercel hesabı ([vercel.com](https://vercel.com))
- Projenizin Vercel'de deploy edilmiş olması (veya local geliştirme için Vercel CLI)

## 🚀 Adım Adım Kurulum

### 1. Vercel Postgres Oluşturma

1. [Vercel Dashboard](https://vercel.com/dashboard)'a gidin
2. **Storage** sekmesine tıklayın
3. **Create Database** butonuna tıklayın
4. **Postgres** seçeneğini seçin
5. Veritabanınıza bir isim verin (örn: `seershub-db`)
6. Region seçin (en yakın lokasyonu seçin)
7. **Create** butonuna tıklayın

### 2. Veritabanını Projenize Bağlama

1. Oluşturduğunuz veritabanının sayfasında **Connect Project** butonuna tıklayın
2. Seershub projenizi seçin
3. Environment'ı seçin (Production, Preview, Development)
4. **Connect** butonuna tıklayın

Vercel otomatik olarak gerekli environment variable'ları projenize ekleyecektir.

### 3. Veritabanı Tablolarını Oluşturma

Vercel Dashboard'da veritabanınızın sayfasında:

1. **Data** sekmesine gidin veya **Query** butonuna tıklayın
2. Aşağıdaki SQL sorgusunu çalıştırın:

```sql
-- Create waitlist table
CREATE TABLE IF NOT EXISTS waitlist (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  notified BOOLEAN DEFAULT FALSE
);

-- Create index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_waitlist_email ON waitlist(email);

-- Create index on created_at for analytics
CREATE INDEX IF NOT EXISTS idx_waitlist_created_at ON waitlist(created_at);
```

3. **Run Query** butonuna tıklayın

> **Not:** Bu SQL script'i `scripts/setup-db.sql` dosyasında da bulunmaktadır.

### 4. Local Development İçin Environment Variables

Local geliştirme için:

1. Vercel Dashboard'da projenizin **Settings > Environment Variables** sayfasına gidin
2. Tüm `POSTGRES_*` değişkenlerini kopyalayın
3. Proje kök dizininde `.env.local` dosyası oluşturun:

```bash
# .env.local dosyasını oluştur
cp .env.local.example .env.local
```

4. Vercel'den aldığınız değerleri `.env.local` dosyasına yapıştırın

### 5. Vercel CLI ile Environment Variables Çekme (Alternatif)

Daha kolay bir yol:

```bash
# Vercel CLI'yi global olarak yükleyin
npm i -g vercel

# Projeyi Vercel'e bağlayın
vercel link

# Environment variables'ları çekin
vercel env pull .env.local
```

## 📧 Email Bildirimleri (Opsiyonel)

Waitlist'e kaydolan kullanıcılara otomatik email göndermek için [Resend](https://resend.com) kullanabilirsiniz:

1. [resend.com](https://resend.com)'a kaydolun
2. API Key oluşturun
3. Environment variables'a ekleyin:

```env
RESEND_API_KEY="re_your_api_key_here"
EMAIL_FROM="Seershub <onboarding@seershub.com>"
```

> **Not:** Email gönderimi opsiyoneldir. Eğer RESEND_API_KEY yoksa, kullanıcı waitlist'e eklenecek ancak email gönderilmeyecektir.

## ✅ Kurulumu Test Etme

### Local'de Test

1. Development server'ı başlatın:
```bash
npm run dev
```

2. Tarayıcınızda `http://localhost:3000` açın
3. Waitlist formunu doldurup test edin
4. API'yi doğrudan test etmek için:

```bash
curl -X POST http://localhost:3000/api/waitlist \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com"}'
```

### Vercel'de Test

1. Projenizi deploy edin:
```bash
vercel --prod
```

2. Deploy edilen URL'de waitlist formunu test edin

## 📊 Veritabanı Yönetimi

### Waitlist'i Görüntüleme

Vercel Dashboard'da:
1. **Storage** sekmesine gidin
2. Veritabanınızı seçin
3. **Data** sekmesine gidin
4. `waitlist` tablosunu görüntüleyin

### SQL Sorguları

Yararlı sorgular:

```sql
-- Tüm kayıtları görüntüle
SELECT * FROM waitlist ORDER BY created_at DESC;

-- Toplam kayıt sayısı
SELECT COUNT(*) FROM waitlist;

-- Bugün eklenen kayıtlar
SELECT * FROM waitlist 
WHERE DATE(created_at) = CURRENT_DATE 
ORDER BY created_at DESC;

-- Email ile arama
SELECT * FROM waitlist WHERE email = 'user@example.com';
```

## 🔒 Güvenlik

- `.env.local` dosyasını asla Git'e eklemeyin (zaten `.gitignore`'da)
- Production environment variables'ını sadece Vercel Dashboard'da yönetin
- API endpoint'leri production'da rate limiting ekleyin

## 🆘 Sorun Giderme

### "Database not initialized" Hatası

Veritabanı tabloları oluşturulmamış. Adım 3'teki SQL script'ini çalıştırın.

### "Email already registered" Hatası

Bu normal bir durum - aynı email iki kez eklenemez.

### Connection Hatası

- Environment variables'ların doğru ayarlandığından emin olun
- Vercel'de veritabanının projeye bağlı olduğunu kontrol edin
- `.env.local` dosyasını düzenledikten sonra dev server'ı yeniden başlatın

## 📚 Daha Fazla Bilgi

- [Vercel Postgres Docs](https://vercel.com/docs/storage/vercel-postgres)
- [Vercel SDK Docs](https://vercel.com/docs/storage/vercel-postgres/sdk)
- [Resend Docs](https://resend.com/docs)

---

✨ Kurulum tamamlandı! Artık waitlist sisteminiz hazır.

