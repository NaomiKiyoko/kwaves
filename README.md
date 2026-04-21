# KWAVES — K-pop Culture & Entertainment

Your daily home for K-pop news, music, drama, and everything Hallyu.

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **CSS Variables** (no Tailwind — pure CSS for full design control)

## Project Structure

```
kwaves/
├── app/
│   ├── globals.css        # Design tokens, global styles, animations
│   ├── layout.tsx         # Root layout + metadata
│   └── page.tsx           # Homepage
├── components/
│   ├── TopStrip.tsx       # Date bar + social icons
│   ├── Navbar.tsx         # Logo + search + category nav
│   ├── HeroCarousel.tsx   # Auto-play carousel (top 3 articles)
│   ├── LatestNews.tsx     # Filter pills + article grid + view counts
│   ├── ArtistsScroll.tsx  # Horizontal artist scroll
│   ├── EditorsPicks.tsx   # Dark editorial band
│   ├── ChartWatch.tsx     # Top 5 songs chart
│   ├── Newsletter.tsx     # Email signup
│   └── Footer.tsx         # Site footer
└── lib/
    └── data.ts            # Types + all mock data
```

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
# → open http://localhost:3000

# Build for production
npm run build
npm start
```

## Deploy to Vercel

### 1. Push to GitHub

```bash
git init
git add .
git commit -m "init: kwaves"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/kwaves.git
git push -u origin main
```

### 2. Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) → **Add New Project**
2. Import your `kwaves` GitHub repo
3. Vercel auto-detects Next.js → click **Deploy**
4. Live in ~1 minute at `kwaves-xyz.vercel.app`

### 3. Connect Your Domain

In **Vercel → Settings → Domains**, add your domain then set these DNS records at your registrar:

| Type  | Name | Value                  |
|-------|------|------------------------|
| A     | @    | `76.76.21.21`          |
| CNAME | www  | `cname.vercel-dns.com` |

SSL is provisioned automatically.

## Connecting a Real API

All mock data lives in `lib/data.ts`. When your API is ready, replace each section with a fetch call. Example for Latest News:

```ts
// lib/api.ts
const BASE = process.env.NEXT_PUBLIC_API_URL

export async function getLatestArticles(params: {
  offset?: number
  limit?: number
  topic?: string
  tag?: string
}) {
  const qs = new URLSearchParams(params as Record<string, string>)
  const res = await fetch(`${BASE}/articles/latest?${qs}`)
  if (!res.ok) throw new Error('Failed to fetch articles')
  return res.json()
}

export async function getPopularArticles(params: {
  offset?: number
  limit?: number
  topic?: string
  tag?: string
}) {
  const qs = new URLSearchParams(params as Record<string, string>)
  const res = await fetch(`${BASE}/articles/popular?${qs}`)
  if (!res.ok) throw new Error('Failed to fetch articles')
  return res.json()
}

export async function getPopularTags(params: { limit?: number; offset?: number }) {
  const qs = new URLSearchParams(params as Record<string, string>)
  const res = await fetch(`${BASE}/tags/popular?${qs}`)
  if (!res.ok) throw new Error('Failed to fetch tags')
  return res.json()
}

export async function getPopularSongs() {
  const res = await fetch(`${BASE}/songs/popular`)
  if (!res.ok) throw new Error('Failed to fetch songs')
  return res.json()
}
```

Then add your API URL in Vercel → **Settings → Environment Variables**:

```
NEXT_PUBLIC_API_URL=https://api.kwaves.io
```

## Environment Variables

| Variable                | Description          | Required |
|-------------------------|----------------------|----------|
| `NEXT_PUBLIC_API_URL`   | Your backend API URL | No (uses mock data) |
