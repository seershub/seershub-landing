# 🏆 Seershub Landing Sayfası - Komple Proje Prompt (Türkçe)

## 📋 Proje Genel Bakış

**Seershub**, Base Network (Ethereum L2) üzerinde inşa edilmiş merkezi olmayan bir spor tahmin platformudur. Bu landing sayfası, platformun özelliklerini, değer önerisini ve yol haritasını sergiler ve erken katılımcıları bekleme listesine çekmek için tasarlanmıştır.

---

## 🎨 Tasarım Felsefesi

### Görsel Kimlik
- **Stil**: Linear.app'ten ilham alan profesyonel, minimal, modern Web3 estetiği
- **Tema**: Canlı vurgu renkleriyle karanlık mod
- **Ana Renk**: Base Mavi (`#0052FF`)
- **Vurgu Renkleri**: Cyan, Mor, Yeşil, Turuncu, Kırmızı
- **Tipografi**: Sıkı harf aralığı ve büyük başlıklarla sistem fontları
- **Efektler**: Cam morfizmi, ince gölgeler, yumuşak animasyonlar

### Temel Tasarım İlkeleri
1. **Minimalizm**: Temiz çizgiler, bol boşluk, odaklanmış içerik
2. **Hareket**: Etkileşim için Framer Motion animasyonları
3. **Netlik**: Açık hiyerarşi, okunabilir tipografi, sezgisel navigasyon
4. **Otantiklik**: Gerçek takım/lig logoları, profesyonel grafikler
5. **Performans**: Optimize edilmiş görseller, viewport animasyonları, verimli render

---

## 🛠️ Teknoloji Stack

### Çekirdek Framework
- **Next.js 15.1.3** (App Router)
- **React 19** (React Compiler aktif)
- **TypeScript** (Strict mode)

### Stil & Animasyon
- **Tailwind CSS 3.4.17** (Utility-first)
- **Framer Motion 12.1.0** (Yumuşak animasyonlar)
- **Özel CSS değişkenleri** (Tasarım sistemi)

### Veritabanı & Backend
- **Vercel Postgres** (Neon üzerinden)
- **Zod** (Şema validasyonu)
- **API Routes** (Next.js serverless fonksiyonlar)

### Opsiyonel Servisler
- **Resend** (Bekleme listesi email bildirimleri)

### Deployment
- **Vercel** (Hosting + CI/CD)
- **Base Network** (Hedef blockchain)

---

## 📁 Proje Yapısı

```
seershub-landing/
├── app/
│   ├── api/
│   │   └── waitlist/
│   │       └── route.ts          # Bekleme listesi API endpoint
│   ├── globals.css               # Global stiller + tasarım sistemi
│   ├── layout.tsx                # Header'lı root layout
│   └── page.tsx                  # Ana landing sayfası
│
├── components/
│   ├── navigation/
│   │   └── Header.tsx            # Logo & navigasyon ile site başlığı
│   │
│   ├── sections/
│   │   ├── Hero.tsx              # Animasyonlu grafiklerle hero bölümü
│   │   ├── LiveMatchesDemo.tsx   # Canlı maç kartları simülasyonu
│   │   ├── ProblemSolution.tsx   # Problem/çözüm karşılaştırması
│   │   ├── HowItWorks.tsx        # 3 adımlı süreç açıklaması
│   │   ├── WhyBase.tsx           # Base Network avantajları
│   │   ├── Roadmap.tsx           # Zaman çizelgesi tarzı yol haritası
│   │   ├── WaitlistCTA.tsx       # Email yakalama formu
│   │   └── Footer.tsx            # Site footer
│   │
│   └── graphics/
│       ├── LeagueLogo.tsx        # Lig logosu bileşeni (gerçek PNG kullanır)
│       ├── TeamLogo.tsx          # Takım logosu bileşeni (gerçek PNG kullanır)
│       ├── SoccerBallButton.tsx  # Hexagon desenli özel buton
│       ├── FootballField.tsx     # Animasyonlu futbol sahası grafiği
│       ├── Web3Chain.tsx         # Blockchain zincir grafiği
│       ├── TrophyCup.tsx         # Kupa illüstrasyonu
│       ├── BlockchainNetwork.tsx # Ağ düğümleri grafiği
│       ├── WalletIcon.tsx        # "Nasıl Çalışır" için cüzdan ikonu
│       ├── PredictionTarget.tsx  # Tahminler için hedef ikonu
│       ├── RewardTrophy.tsx      # Ödüller için kupa ikonu
│       ├── BaseLogo.tsx          # Base Network logosu
│       ├── CoinbaseIntegration.tsx # Coinbase + Base entegrasyonu
│       ├── QuarterBadge.tsx      # Yol haritası çeyrek rozetleri
│       └── TimelineConnector.tsx # Yol haritası zaman çizelgesi bağlayıcı
│
├── public/
│   ├── logos/                    # Takım & lig logoları (kullanıcı tarafından sağlanır)
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
│   │   └── soccer-hexagon.png    # Futbol topu deseni (kullanıcı tarafından sağlanır)
│   │
│   ├── seershub-logo.png         # Ana logo (70-80px yükseklik)
│   └── robots.txt
│
├── scripts/
│   └── setup-db.sql              # Veritabanı şeması
│
├── .env.local                    # Environment değişkenleri (repo'da yok)
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── LOGO-SETUP-INSTRUCTIONS.md    # Logo kurulum rehberi
```

---

## 🎯 Temel Özellikler

### 1. **Hero Bölümü** (`Hero.tsx`)
- **Başlık**: "Predict. Compete. Win. On-Chain."
- **Animasyonlu Arka Plan**: Futbol sahası, blockchain zincirleri, kupa
- **Gradient Küreler**: Enerji için nabız gibi mavi/cyan küreler
- **Yüzen İkonlar**: Kupa, Yıldırım, Hedef ikonları
- **İstatistikler**: 10K+ Etkinlik, $500K+ Ödül Havuzu, Anında Ödemeler
- **CTA'lar**: "Bekleme Listesine Katıl" + "Nasıl çalışır"

### 2. **Canlı Maçlar Demo** (`LiveMatchesDemo.tsx`)
- **3 Maç Kartı**: Barcelona vs Real Madrid, Man United vs Liverpool, Bayern vs Dortmund
- **Gerçek Logolar**: `/public/logos/` klasöründen gerçek takım ve lig logoları kullanır
- **Canlı Veri**: Geri sayım sayaçları, katılımcı sayıları, ödül havuzları
- **Giriş Ücretleri**: Yeşil rozetlerle USDC miktarları
- **Base Rozeti**: Blockchain ağını gösterir
- **Özel Buton**: Futbol topu hexagon desen butonu

### 3. **Problem/Çözüm** (`ProblemSolution.tsx`)
- **İki Sütun**: Problem (kırmızı) vs Çözüm (mavi)
- **Animasyonlu İkonlar**: Güvenlik temaları için Kalkan, Kilit
- **Hover Efektleri**: Kartlarda ölçeklendirme + parıltı
- **Karşılaştırma**:
  - ❌ Problem: Emanetli, yüksek ücretler, şeffaflık yok, yavaş
  - ✅ Çözüm: Emanetsiz, düşük ücretler, açık kontratlar, anında

### 4. **Nasıl Çalışır** (`HowItWorks.tsx`)
- **3 Adım**:
  1. Giriş Ücreti Öde (Cüzdan ikonu + USDC)
  2. Tahmin Yap (Hedef ikonu + analiz)
  3. Ödül Kazan (Kupa ikonu + anında ödeme)
- **Özel Grafikler**: `WalletIcon`, `PredictionTarget`, `RewardTrophy`
- **Oklar**: Adımlar arası animasyonlu oklar
- **Hover**: Parıltı efektleri ve ölçeklendirme animasyonları

### 5. **Neden Base?** (`WhyBase.tsx`)
- **3 Özellik**:
  - ⚡ Yıldırım Hızı (~2s)
  - 💰 Ultra Düşük Ücretler (<$0.01)
  - 🛡️ Ethereum Güvenliği (L2)
- **Grafikler**: `BaseLogo`, `CoinbaseIntegration`
- **Animasyonlar**: Dönen arka planlar, nabız gibi ikonlar
- **Entegrasyon Kartı**: Coinbase + Base görsel vitrin

### 6. **Yol Haritası** (`Roadmap.tsx`)
- **Zaman Çizelgesi Stili**: Bağlayıcılarla dikey akış
- **4 Çeyrek** (Q1-Q4 2025):
  - Q1: Lansман, Denetim, Beta
  - Q2: Çok sporlu, Mobil uygulama, BASE tokenleri
  - Q3: Tenis/esports, Analitik, Canlı bahis
  - Q4: NFT rozetleri, Koleksiyonlar, VIP ödüller
- **Çeyrek Rozetleri**: `QuarterBadge` bileşenleri
- **Durum Göstergeleri**: Mevcut (nabız), Yaklaşan
- **İkonlar**: Roket, YükselenTrend, Kullanıcılar, Madeni Paralar

### 7. **Bekleme Listesi CTA** (`WaitlistCTA.tsx`)
- **Email Yakalama Formu**: Zod ile doğrulanmış
- **API Entegrasyonu**: `/api/waitlist`'e POST
- **Durum Mesajları**: Yükleniyor, Başarılı, Hata durumları
- **Animasyonlar**: Yüzen parıltılar, gradient değişimleri
- **Faydalar**: Erken erişim, özel ayrıcalıklar

### 8. **Header** (`Header.tsx`)
- **Logo**: Mavi parıltılı büyük Seershub logosu (70-80px)
- **Navigasyon**: "Nasıl çalışır", "Yol haritası" çapa linkleri
- **Butonlar**: 
  - 📄 Pitch Deck (cam efekti)
  - Bekleme Listesine Katıl (mavi gradient + parıltı)
- **Sabit Konum**: Kaydırmada her zaman görünür
- **Mobil**: Hamburger menü (uygulanacak)

---

## 🎨 Tasarım Sistemi (`globals.css`)

### CSS Değişkenleri
```css
/* Renkler */
--base-blue: #0052FF;
--accent-cyan: #00D4FF;
--accent-purple: #8B5CF6;
--accent-green: #10B981;
--accent-orange: #F59E0B;
--sport-red: #EF4444;

/* Boşluk Skalası */
--space-4 to --space-160 (4px → 160px)

/* Tipografi Skalası */
--text-xs to --text-8xl (0.75rem → 4.5rem)

/* Satır Yükseklikleri */
--leading-tight: 1.1;
--leading-normal: 1.5;
--leading-relaxed: 1.6;

/* Kenar Yarıçapı */
--radius-sm to --radius-full (6px → 9999px)
```

### Utility Sınıfları
- `.glass-effect` - İnce cam morfizmi (%3 beyaz, 20px blur)
- `.glass-effect-strong` - Güçlü cam (%5 beyaz, 24px blur)
- `.text-gradient` - Base mavi gradient metin
- `.btn-glow` - Hover'da buton parıltısı
- `.text-display` - Büyük başlıklar (clamp 3rem → 6rem)
- `.text-title` - Bölüm başlıkları (clamp 2rem → 3.5rem)
- `.text-subtle` - %60 opaklık beyaz
- `.text-muted` - %40 opaklık beyaz

### Animasyonlar
- `fadeIn` - Fade in + yukarı kaydır
- `slideUp` - Yukarı kaydırarak giriş
- `gradient-shift` - Hareketli gradient arka plan
- `pulse-glow` - Nabız parıltı efekti

---

## 🗄️ Veritabanı Şeması

### `waitlist` Tablosu
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
- **Validasyon**: Zod şeması
- **Yanıt**: 
  - 201: Başarılı
  - 400: Geçersiz email veya duplicate
  - 500: Sunucu hatası

---

## 🌐 Environment Değişkenleri

### Gerekli (`.env.local`)
```bash
# Veritabanı (Neon üzerinden Vercel Postgres)
POSTGRES_URL="postgres://..."
POSTGRES_PRISMA_URL="postgres://..."
POSTGRES_URL_NO_SSL="postgres://..."
POSTGRES_URL_NON_POOLING="postgres://..."
POSTGRES_USER="..."
POSTGRES_HOST="..."
POSTGRES_PASSWORD="..."
POSTGRES_DATABASE="..."

# Opsiyonel: Email bildirimleri
RESEND_API_KEY="re_..."
```

### Kurulum Komutları
```bash
# Vercel CLI kurulumu
npm i -g vercel

# Projeyi bağla
vercel link

# Environment değişkenlerini çek
vercel env pull .env.local

# Veritabanı tablosu oluştur
vercel postgres sql -- < scripts/setup-db.sql
```

---

## 🚀 Geliştirme İş Akışı

### Kurulum
```bash
npm install
```

### Development Sunucusu
```bash
npm run dev
# → http://localhost:3000
```

### Production için Build
```bash
npm run build
npm run start
```

### Linting
```bash
npm run lint
```

---

## 📊 Bileşen Dökümü

### Grafik Bileşenleri (SVG-tabanlı)
Tüm özel SVG grafikleri, Framer Motion animasyonlarıyla kendi kendine yeten React bileşenleridir:

1. **Spor Teması**:
   - `FootballField.tsx` - Çizgili animasyonlu çim saha
   - `SportsBall.tsx` - Dönen futbol topu
   - `TrophyCup.tsx` - 3D-tarzı kupa

2. **Web3 Teması**:
   - `Web3Chain.tsx` - Blockchain zincir halkaları
   - `BlockchainNetwork.tsx` - Ağ düğümleri
   - `BaseLogo.tsx` - Base Network logosu
   - `CoinbaseIntegration.tsx` - Coinbase + Base

3. **İkonlar**:
   - `WalletIcon.tsx` - Kripto cüzdan
   - `PredictionTarget.tsx` - Hedef nişangahı
   - `RewardTrophy.tsx` - Kazanan kupası
   - `QuarterBadge.tsx` - Yol haritası rozetleri
   - `TimelineConnector.tsx` - Dikey zaman çizelgesi

### Logo Bileşenleri (Görsel-tabanlı)
- `LeagueLogo.tsx` - La Liga, Premier League, Bundesliga logolarını gösterir
- `TeamLogo.tsx` - Barcelona, Real Madrid, Man United, Liverpool, Bayern, Dortmund logolarını gösterir
- Her ikisi de `/public/logos/` klasöründen gerçek PNG dosyalarıyla Next.js `Image` bileşeni kullanır

### Özel Buton
- `SoccerBallButton.tsx` - Tahmin Yap butonu ile:
  - `/public/patterns/soccer-hexagon.png` dosyasından gerçek hexagon deseni
  - Animasyonlu gradient overlay
  - Dönen futbol topu süslemeleri
  - USDC ücret rozeti
  - Hover efektleri

---

## 🎭 Animasyon Stratejisi

### Framer Motion Kalıpları
1. **İlk Yükleme**: `opacity: 0, y: 20` → `opacity: 1, y: 0`
2. **Viewport Tetikleyicileri**: Performans için `viewport={{ once: true }}`
3. **Hover Efektleri**: Etkileşim için `scale: 1.05`, `y: -5`
4. **Sürekli**: Arka plan öğeleri için dönen, nabız gibi
5. **Yay Fiziği**: Doğal hareket için `type: "spring"`

### Performans Optimizasyonları
- `viewport={{ once: true }}` - Sadece bir kez animasyon yap
- Görseller için lazy loading
- CSS transformları (GPU-hızlandırmalı)
- Debounced scroll dinleyicileri

---

## 📱 Responsive Tasarım

### Breakpoint'ler (Tailwind)
- **Mobil**: `< 768px` (varsayılan)
- **Tablet**: `md: 768px+`
- **Desktop**: `lg: 1024px+`
- **Geniş**: `xl: 1280px+`

### Mobil Uyarlamaları
- Header: Daha küçük logo (64px → 70px)
- Tipografi: Akışkan ölçeklendirme için clamp fonksiyonları
- Grid: Büyük ekranlarda 1 sütun → 2/3 sütun
- Boşluk: Mobilde azaltılmış padding
- Navigasyon: Hamburger menü (uygulanacak)

---

## ✅ Logo Kurulum Gereksinimleri

### Kullanıcı Sağlamalı
Aşağıdaki dosyaları `public/logos/` klasörüne yerleştirin:

**Takım Logoları** (PNG, min 512x512px):
- `barcelona.png`
- `real-madrid.png`
- `man-united.png`
- `liverpool.png`
- `bayern.png`
- `dortmund.png`

**Lig Logoları** (PNG, min 512x512px):
- `laliga.png`
- `premier-league.png`
- `bundesliga.png`

**Desen** (PNG, 80x80px döşeme):
- `public/patterns/soccer-hexagon.png`

### Kurulum
Detaylı adımlar için `LOGO-SETUP-INSTRUCTIONS.md` dosyasına bakın.

---

## 🔧 Yapılandırma Dosyaları

### `tailwind.config.ts`
- Genişletilmiş renkler: Base mavi, vurgu renkleri
- Özel animasyonlar: fade-in, slide-up
- İçerik yolları: app/*, components/*

### `tsconfig.json`
- Strict mode aktif
- Path aliasları: `@/` → root
- React compiler aktif

### `next.config.mjs`
- React compiler: aktif
- Deneysel özellikler: optimizePackageImports

---

## 🎯 Kullanıcı Yolculuğu

1. **Hero'ya İn** → Değer önerisini gör
2. **Canlı Maçları Görüntüle** → Deneyimi anla
3. **Problem/Çözümü Oku** → Merkeziyetsizliğin neden önemli olduğunu gör
4. **Nasıl Çalıştığını Öğren** → Süreci anla
5. **Base Avantajlarını Keşfet** → Teknik avantajları gör
6. **Yol Haritasını İncele** → Gelecek vizyonunu gör
7. **Bekleme Listesine Katıl** → Email yakalama
8. **Footer** → Sosyal linkler, yasal

---

## 🚀 Deployment Kontrol Listesi

- [ ] Logo dosyaları `public/logos/` klasörüne yerleştirildi
- [ ] Desen dosyası `public/patterns/` klasörüne yerleştirildi
- [ ] Environment değişkenleri yapılandırıldı
- [ ] Veritabanı tablosu oluşturuldu
- [ ] Build başarılı (`npm run build`)
- [ ] Linter hatası yok (`npm run lint`)
- [ ] Bekleme listesi formunu test et
- [ ] Tüm animasyonların çalıştığını doğrula
- [ ] Mobilde test et
- [ ] Vercel'e deploy et

---

## 📈 Gelecek İyileştirmeler

### Yüksek Öncelik
- [ ] Mobil hamburger menü uygulaması
- [ ] Email onay sistemi
- [ ] Bekleme listesi için admin paneli
- [ ] Sosyal paylaşım meta etiketleri
- [ ] Analitik entegrasyonu (Vercel Analytics)

### Orta Öncelik
- [ ] Blog/haber bölümü
- [ ] Takım üyesi profilleri
- [ ] Tokenomics sayfası
- [ ] SSS bölümü
- [ ] Çoklu dil desteği

### Düşük Öncelik
- [ ] Karanlık/aydınlık mod geçişi
- [ ] Özel imleç
- [ ] Yükleme ekranı
- [ ] Ses efektleri
- [ ] Three.js ile 3D grafikler

---

## 🐛 Bilinen Sorunlar

1. **Mobil menü**: Henüz uygulanmadı (hamburger butonu var ama drawer yok)
2. **Görsel optimizasyonu**: Kullanıcının logo sağlaması gerekiyor
3. **Email gönderme**: MVP için opsiyonel Resend entegrasyonu gerekli değil

---

## 🎓 Öğrenme Kaynakları

- [Next.js Dokümanları](https://nextjs.org/docs)
- [Framer Motion Dokümanları](https://www.framer.com/motion/)
- [Tailwind CSS Dokümanları](https://tailwindcss.com/docs)
- [Vercel Postgres Dokümanları](https://vercel.com/docs/storage/vercel-postgres)
- [Base Network Dokümanları](https://docs.base.org/)

---

## 📞 Destek & İletişim

Sorunlar veya sorular için:
- Logo kurulumu için `LOGO-SETUP-INSTRUCTIONS.md` dosyasına bakın
- Tarayıcı konsolunda hata mesajlarını inceleyin (F12)
- Environment değişkenlerinin ayarlandığını doğrulayın
- Veritabanı tablosunun var olduğundan emin olun
- Değişikliklerden sonra dev sunucusunu yeniden başlatın

---

## 🏁 Hızlı Başlangıç Özeti

```bash
# 1. Projeyi klonla/kur
cd seershub-landing

# 2. Bağımlılıkları kur
npm install

# 3. Environment'ı kur
vercel link
vercel env pull .env.local

# 4. Veritabanını oluştur
vercel postgres sql -- < scripts/setup-db.sql

# 5. Logo dosyalarını ekle
# - 9 takım/lig logosunu public/logos/ klasörüne yerleştir
# - Futbol hexagon desenini public/patterns/ klasörüne yerleştir

# 6. Development sunucusunu çalıştır
npm run dev

# 7. Tarayıcıyı aç
# → http://localhost:3000
```

---

**Base Network üzerinde Web3 spor tahmin devrimi için ❤️ ile inşa edildi** 🏆⚽🚀

