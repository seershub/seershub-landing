# 🚀 Neon Database'i Vercel'e Bağlama

## Mevcut Neon Database'inizi Vercel'de Kullanın

### Adım 1: Neon Connection String'i Alın

1. [Neon Console](https://console.neon.tech) → Projenizi seçin
2. **Connection Details** bölümünden şu bilgileri kopyalayın:
   - Connection string (Pooled veya Direct)
   - Örnek: `postgresql://user:password@ep-xxx.us-east-2.aws.neon.tech/neondb?sslmode=require`

### Adım 2: Vercel Environment Variables Ekleyin

1. [Vercel Dashboard](https://vercel.com/dashboard) → `seershub-landing` projenizi seçin
2. **Settings** → **Environment Variables**
3. Şu değişkenleri ekleyin:

#### POSTGRES_URL (Pooled Connection)
```
Key: POSTGRES_URL
Value: postgresql://user:password@ep-xxx.us-east-2.aws.neon.tech/neondb?sslmode=require
Environment: Production, Preview, Development
```

#### POSTGRES_PRISMA_URL (Same as POSTGRES_URL)
```
Key: POSTGRES_PRISMA_URL
Value: postgresql://user:password@ep-xxx.us-east-2.aws.neon.tech/neondb?sslmode=require
Environment: Production, Preview, Development
```

#### POSTGRES_URL_NON_POOLING (Direct Connection)
```
Key: POSTGRES_URL_NON_POOLING
Value: postgresql://user:password@ep-xxx.us-east-2.aws.neon.tech/neondb?sslmode=require
Environment: Production, Preview, Development
```

> **Not**: Neon'da "Direct" connection string kullanın (port genelde 5432)

#### Diğer Değişkenler (Opsiyonel ama önerilen)
```
POSTGRES_USER=your_username
POSTGRES_HOST=ep-xxx.us-east-2.aws.neon.tech
POSTGRES_PASSWORD=your_password
POSTGRES_DATABASE=neondb
```

### Adım 3: Waitlist Tablosunu Kontrol Edin

Neon Console'da SQL Editor'ü açın ve kontrol edin:

```sql
-- Tablo var mı kontrol et
SELECT * FROM waitlist LIMIT 1;

-- Yoksa oluştur
CREATE TABLE IF NOT EXISTS waitlist (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  notified BOOLEAN DEFAULT FALSE
);

CREATE INDEX IF NOT EXISTS idx_waitlist_email ON waitlist(email);
CREATE INDEX IF NOT EXISTS idx_waitlist_created_at ON waitlist(created_at);
```

### Adım 4: Vercel'i Redeploy Edin

1. **Deployments** tab → Latest deployment
2. **⋯** (three dots) → **Redeploy**
3. Bekleyin (~1-2 dakika)

### Adım 5: Test Edin

1. Sitenizi açın: `https://seershub-landing.vercel.app`
2. Waitlist formunu doldurun
3. Submit edin
4. ✅ "Welcome to Seershub!" mesajını görmelisiniz

---

## 🔍 Neon Connection String Nerede?

### Neon Console'da:
1. Dashboard → Your Project
2. **Connection Details** (sağ üstte)
3. **Pooled connection** seçin (Vercel için önerilen)
4. Copy butonuna tıklayın

### Connection String Formatı:
```
postgresql://[user]:[password]@[host]/[database]?sslmode=require
```

Örnek:
```
postgresql://seershub_user:AbCd1234XyZ@ep-cool-cloud-123456.us-east-2.aws.neon.tech/seershub_db?sslmode=require
```

---

## ⚡ Neon vs Vercel Postgres

### Neon Kullanmanın Avantajları:
- ✅ Zaten kurulu ve çalışıyor
- ✅ Ücretsiz tier cömert (512 MB storage)
- ✅ Auto-scaling
- ✅ Daha hızlı kurulum (sadece env var ekle)

### Vercel Postgres Kullanmanın Avantajları:
- ✅ Vercel ile entegre
- ✅ Otomatik connection pooling
- ✅ Dashboard'tan direkt query çalıştırma

**Önerim**: Neon'u kullanmaya devam edin, zaten çalışıyor! 🚀

---

## 🐛 Sorun Giderme

### "Connection timed out"
→ Neon'da IP whitelist kontrolü yapın (genelde gerekmiyor)

### "SSL required"
→ Connection string'e `?sslmode=require` ekleyin

### "Database does not exist"
→ Neon Console'da database adını kontrol edin

### "Password authentication failed"
→ Yeni password oluşturun: Neon Console → Settings → Reset Password

---

## 📊 Waitlist Verilerini Görüntüleme

### Neon Console'da:
```sql
SELECT 
  email, 
  created_at,
  COUNT(*) OVER() as total_signups
FROM waitlist 
ORDER BY created_at DESC;
```

### API Endpoint ile:
```bash
curl https://seershub-landing.vercel.app/api/waitlist
```

Sonuç: `{ "count": 42 }`

---

## ✅ Tamamlandı!

Artık Neon database'iniz Vercel'e bağlı ve waitlist çalışıyor! 🎉

