# serkan-acar-portfolio

Kişisel portfolyo sitesi · https://serkan-acar-portfolio.vercel.app

Next.js 16 (App Router) · React 19 · Tailwind CSS 4 · framer-motion. Tüm sayfalar derleme anında statik üretilir (`/tr`, `/en` ve proje sayfaları).

## Komutlar

```bash
npm run dev        # geliştirme sunucusu
npm run verify     # typecheck + lint + production build
```

## Yapı

```
src/content/        metinlerin tamamı: types.ts, tr.ts, en.ts, index.ts (yardımcılar)
src/app/[lang]/     ana sayfa, proje sayfaları, OG görseli, 404
src/components/
  sections/         ana sayfa bölümleri (sunucu bileşenleri)
  motion/           Reveal, Parallax, ScrollLine (istemci, animasyon)
  site/             Header, Footer
  ui/               SectionHeader, CopyButton, ikonlar
public/cv/          indirilebilir CV
public/images/      fotoğraflar
```

Metin değiştirmek için yalnızca `src/content/tr.ts` ve `src/content/en.ts` düzenlenir; iki dosya aynı `Content` tipine uymak zorunda, eksik alan derlemeyi kırar. Proje eklemek için `projects.items` dizisine iki dilde aynı `slug` ile kayıt eklenir; sayfa ve sitemap otomatik oluşur.
