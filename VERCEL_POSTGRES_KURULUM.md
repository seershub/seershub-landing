# 🚀 Vercel Postgres Kurulumu (Doğru Adımlar)

## Ekran Görüntünüze Göre Adımlar

Gördüğünüz ekranda **Storage** menüsü yok çünkü henüz database oluşturulmamış.

---

## ✅ Adım 1: Vercel Dashboard Ana Sayfaya Dönün

1. Sol üstteki **Neon logo**ya tıklayın veya
2. Tarayıcınızda: https://vercel.com/dashboard

---

## ✅ Adım 2: Storage Sekmesine Gidin

Ana dashboard'da (tüm projelerinizi gördüğünüz yer):

1. Üst menüde **Storage** sekmesini bulun
2. Veya direkt: https://vercel.com/dashboard/stores

**Not**: Storage, proje içinde değil, ana dashboard'da!

---

## ✅ Adım 3: Postgres Database Oluşturun

1. **Create Database** butonuna tıklayın
2. **Postgres** seçin
3. Database bilgileri:
   ```
   Database Name: seershub-db
   Region: Europe (Frankfurt) - Zaten Frankfurt seçmişsiniz ✓
   ```
4. **Create** butonuna tıklayın

---

## ✅ Adım 4: Database'i Projeye Bağlayın

Database oluştuktan sonra:

1. **Connect Project** butonuna tıklayın
2. **seershub-db** projesini seçin
3. Environment seçin: **Production, Preview, Development** (hepsini seçin)
4. **Connect** tıklayın

Vercel otomatik olarak şu environment variable'ları ekleyecek:
- `POSTGRES_URL`
- `POSTGRES_PRISMA_URL`
- `POSTGRES_URL_NON_POOLING`
- `POSTGRES_USER`
- `POSTGRES_HOST`
- `POSTGRES_PASSWORD`
- `POSTGRES_DATABASE`

---

## ✅ Adım 5: Waitlist Tablosunu Oluşturun

1. Storage → **seershub-db** → **Data** sekmesi
2. Sol menüde **Query** butonuna tıklayın
3. Şu SQL'i yapıştırın:

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

4. **Run Query** veya **Execute** butonuna tıklayın

---

## ✅ Adım 6: Projeyi Redeploy Edin

1. Sol menüden projenize dönün: **seershub-db**
2. **Deployments** sekmesi
3. En son deployment'ın yanındaki **⋯** (üç nokta)
4. **Redeploy** seçin
5. **Redeploy** butonuna tıklayın

Yaklaşık 1-2 dakika bekleyin.

---

## ✅ Adım 7: Test Edin

1. Sitenizi açın: https://seershub-landing.vercel.app
2. Aşağı scroll yapın → Waitlist bölümü
3. Email girin ve **Join Waitlist** tıklayın
4. ✅ "Welcome to Seershub!" mesajını görmelisiniz

---

## 🔍 Storage Menüsü Nerede?

### Ana Dashboard'da (Tüm Projeler):
```
https://vercel.com/dashboard
```
Üst menü: **Overview | Storage | Integrations | Settings**

### Storage'a Direkt Link:
```
https://vercel.com/dashboard/stores
```

**ÖNEMLİ**: Storage menüsü **proje içinde değil**, **ana dashboard'da**!

---

## 📊 Database'i Kontrol Etme

### Vercel Dashboard'da:
1. Storage → seershub-db
2. **Data** sekmesi
3. Sol menüde **Tables** → **waitlist**
4. Kayıtları göreceksiniz

### Query ile:
```sql
SELECT * FROM waitlist ORDER BY created_at DESC;
```

### API ile:
```bash
curl https://seershub-landing.vercel.app/api/waitlist
```

Sonuç: `{"count": 5}`

---

## 🐛 Sorun Giderme

### "Storage menüsünü göremiyorum"
→ Ana dashboard'a dönün (tüm projeleri gördüğünüz yer)
→ Üst menüde Storage olmalı

### "Create Database butonu yok"
→ Vercel hesabınız doğrulanmış mı? (Email verification)
→ Hobby plan'de misiniz? (Ücretsiz plan yeterli)

### "Database oluşturdum ama proje görmüyor"
→ Database'i projeye bağlamayı unutmuş olabilirsiniz
→ Storage → Database → Connect Project

### "Waitlist hala çalışmıyor"
→ Deployments → Functions → /api/waitlist → Logs
→ Hata mesajını kontrol edin

---

## 📸 Ekran Görüntüsü Rehberi

### 1. Ana Dashboard
```
[Vercel Logo] | Overview | Storage | Integrations | Settings
              ↑
         Buraya tıklayın
```

### 2. Storage Sayfası
```
Create Database [+]
↑
Buraya tıklayın
```

### 3. Database Seçimi
```
○ Postgres  ← Bunu seçin
○ KV
○ Blob
○ Edge Config
```

---

## ✅ Özet

1. **Ana Dashboard** → **Storage** → **Create Database**
2. **Postgres** seçin → **Create**
3. **Connect Project** → **seershub-db** seçin
4. **Query** → SQL'i çalıştırın
5. **Redeploy** projeyi
6. **Test** edin

**Toplam süre: ~5 dakika** ⏱️

---

## 💡 İpucu

Eğer hala Storage menüsünü göremiyorsanız:

1. Tarayıcıyı yenileyin (Ctrl+F5)
2. Farklı tarayıcı deneyin
3. Vercel hesabınızı kontrol edin (email doğrulaması)
4. Direkt link kullanın: https://vercel.com/dashboard/stores

---

## ✅ Tamamlandı!

Artık Vercel Postgres çalışıyor ve waitlist formu aktif! 🎉

