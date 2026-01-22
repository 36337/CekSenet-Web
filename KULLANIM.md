# ÇekSenet Web - Kullanım Kılavuzu

## 🌐 Canlı Site
**URL:** https://ceksenet-web.vercel.app/

**Giriş Bilgileri:**
- E-posta: nadiryalcinkaya@gmail.com
- Şifre: 123456

---

## 💻 Kod Değişikliği Yapma (3 Adım)

### Adım 1: VS Code'da Aç

1. VS Code'u aç
2. **File → Open Folder**
3. `D:\Projeler\ceksenet-web` klasörünü seç
4. **Select Folder** tıkla

---

### Adım 2: Değişiklik Yap

Dosyaları düzenle ve kaydet (Ctrl+S).

**Önemli Klasörler:**
```
src/
├── app/                    # Sayfalar
│   ├── (dashboard)/        # Ana sayfalar (giriş sonrası)
│   │   ├── dashboard/      # Ana sayfa
│   │   ├── evraklar/       # Evrak sayfaları
│   │   ├── cariler/        # Cari sayfaları
│   │   ├── krediler/       # Kredi sayfaları
│   │   ├── raporlar/       # Rapor sayfası
│   │   └── ayarlar/        # Ayar sayfaları
│   ├── login/              # Giriş sayfası
│   └── api/                # Backend API'ler
├── components/             # Ortak bileşenler
│   ├── ui/                 # Buton, tablo vs.
│   └── layout/             # Sayfa düzeni
└── lib/                    # Yardımcı fonksiyonlar
```

---

### Adım 3: GitHub'a Gönder (Push)

VS Code'da **Terminal → New Terminal** aç ve şu komutları çalıştır:

```bash
git add .
git commit -m "Değişiklik açıklaması"
git push
```

**Örnek:**
```bash
git add .
git commit -m "Evrak sayfasında düzenleme yaptım"
git push
```

⏳ **1-2 dakika bekle** → Vercel otomatik olarak yeni kodu yayınlar!

---

## 🔧 Faydalı Bilgiler

### Git Komutları
| Komut | Açıklama |
|-------|----------|
| `git status` | Değişen dosyaları göster |
| `git add .` | Tüm değişiklikleri hazırla |
| `git commit -m "mesaj"` | Değişiklikleri kaydet |
| `git push` | GitHub'a gönder |
| `git pull` | GitHub'dan son değişiklikleri al |

### Sık Kullanılan Dosyalar
| Dosya | Ne İşe Yarar |
|-------|--------------|
| `src/app/(dashboard)/evraklar/page.tsx` | Evrak listesi sayfası |
| `src/app/(dashboard)/dashboard/page.tsx` | Ana sayfa (Dashboard) |
| `src/components/ui/` | Buton, tablo gibi bileşenler |
| `src/lib/utils/format.ts` | Para, tarih formatlama |

---

## 🆘 Sorun Giderme

### "git push" çalışmıyor
GitHub giriş penceresi açılır, giriş yap.

### Vercel'de hata görünüyor
1. https://vercel.com/dashboard git
2. Projeye tıkla
3. **Deployments** sekmesinde hatayı oku

### Kodu bozduysan ve geri almak istiyorsan
```bash
git checkout .
```
Bu komut son commit'e geri döner.

---

## 📞 Yardım

Sorun olursa:
1. Hata mesajını kopyala
2. Claude/Gemini'ye sor
3. Veya Ender'e WhatsApp at

---

**Son Güncelleme:** 21 Ocak 2026
