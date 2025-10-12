# 📁 Logo ve Görsel Dosyaları Kurulum Talimatları

## 🎯 Gerekli Dosyalar

Sana gönderdiğim **10 adet logo dosyasını** aşağıdaki dizinlere yerleştirmen gerekiyor:

---

## 📂 1. Takım Logoları (`public/logos/`)

Aşağıdaki dosyaları `public/logos/` klasörüne kopyala:

### Dosya İsimlendirmesi:

| Gönderdiğim Dosya | Yeni İsim | Konum |
|-------------------|-----------|-------|
| `barcelona_logo.png` → | `barcelona.png` | `public/logos/barcelona.png` |
| `real_madrid_logo.png` → | `real-madrid.png` | `public/logos/real-madrid.png` |
| `man_united_logo.png` → | `man-united.png` | `public/logos/man-united.png` |
| `liverpool_logo.png` → | `liverpool.png` | `public/logos/liverpool.png` |
| `bayern_munich_logo.png` → | `bayern.png` | `public/logos/bayern.png` |
| `bvb_dortmund_logo.png` → | `dortmund.png` | `public/logos/dortmund.png` |

---

## 🏆 2. Lig Logoları (`public/logos/`)

Aşağıdaki dosyaları **aynı** `public/logos/` klasörüne kopyala:

| Gönderdiğim Dosya | Yeni İsim | Konum |
|-------------------|-----------|-------|
| `laliga_logo.png` → | `laliga.png` | `public/logos/laliga.png` |
| `premier_league_logo.png` → | `premier-league.png` | `public/logos/premier-league.png` |
| `bundesliga_logo.png` → | `bundesliga.png` | `public/logos/bundesliga.png` |

---

## ⚽ 3. Futbol Topu Deseni (`public/patterns/`)

| Gönderdiğim Dosya | Yeni İsim | Konum |
|-------------------|-----------|-------|
| `soccer_hexagon_pattern.png` → | `soccer-hexagon.png` | `public/patterns/soccer-hexagon.png` |

---

## 🛠️ Adım Adım Kurulum:

### 1. Klasörleri Oluştur:
```bash
# Windows PowerShell veya CMD:
mkdir public\logos
mkdir public\patterns

# Mac/Linux Terminal:
mkdir -p public/logos
mkdir -p public/patterns
```

### 2. Dosyaları Kopyala:

Gönderdiğim **10 dosyayı** yukarıdaki tabloda belirtilen isimlere göre **yeniden adlandır** ve ilgili klasörlere kopyala.

**Örnek (Windows):**
```
İndirilenler/barcelona_logo.png 
  → seershub-landing/public/logos/barcelona.png

İndirilenler/soccer_hexagon_pattern.png 
  → seershub-landing/public/patterns/soccer-hexagon.png
```

### 3. Kontrol Et:

Klasör yapın şöyle olmalı:
```
seershub-landing/
├─ public/
│  ├─ logos/
│  │  ├─ barcelona.png
│  │  ├─ real-madrid.png
│  │  ├─ man-united.png
│  │  ├─ liverpool.png
│  │  ├─ bayern.png
│  │  ├─ dortmund.png
│  │  ├─ laliga.png
│  │  ├─ premier-league.png
│  │  └─ bundesliga.png
│  └─ patterns/
│     └─ soccer-hexagon.png
```

---

## ✅ Test Et:

Dosyaları yerleştirdikten sonra:

1. **Dev server'ı yeniden başlat:**
   ```bash
   npm run dev
   ```

2. **Tarayıcıda aç:** `http://localhost:3000`

3. **Kontrol et:**
   - ✅ Takım logoları maç kartlarında görünüyor mu?
   - ✅ Lig logoları maç kartı başlıklarında görünüyor mu?
   - ✅ "Make Prediction" butonunda futbol topu deseni var mı?

---

## 🚨 Önemli Notlar:

- **Dosya isimleri TAM OLARAK** yukarıdaki gibi olmalı (küçük harf, tire ile)
- **PNG formatı** kullan (şeffaf arka plan için ideal)
- **Yüksek çözünürlük** logoları kullan (minimum 512x512px)
- Logo dosyaları **maksimum 500KB** olmalı (performans için)

---

## 🆘 Sorun Giderme:

### Logo görünmüyor?
1. Dosya isimlerini kontrol et (büyük/küçük harf duyarlı)
2. Klasör yolunu kontrol et (`public/logos/` ve `public/patterns/`)
3. Browser console'da hata var mı kontrol et (F12)
4. Dev server'ı yeniden başlat

### Görsel bozuk görünüyor?
1. PNG formatında olduğunu doğrula
2. Şeffaf arka plana sahip olduğunu kontrol et
3. Minimum 512x512px çözünürlükte olduğunu doğrula

---

## 📞 Yardım İste:

Sorun yaşarsan, hangi adımda takıldığını söyle, yardımcı olurum! 🚀

