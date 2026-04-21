import TopStrip     from '@/components/TopStrip'
import Navbar        from '@/components/Navbar'
import HeroCarousel  from '@/components/HeroCarousel'
import LatestNews    from '@/components/LatestNews'
import ArtistsScroll from '@/components/ArtistsScroll'
import EditorsPicks  from '@/components/EditorsPicks'
import ChartWatch    from '@/components/ChartWatch'
import Newsletter    from '@/components/Newsletter'
import Footer        from '@/components/Footer'
import { getLatestArticles, getPopularTags, getPopularSongs } from '@/lib/api'

// Server component — fetches at build/request time
export default async function Home() {
  const [latestRes, tagsRes, songsRes] = await Promise.all([
    getLatestArticles({ limit: 6, offset: 0 }),
    getPopularTags({ limit: 20 }),
    getPopularSongs(),
  ])

  return (
    <>
      <TopStrip />
      <Navbar />
      <main style={{ maxWidth: 'var(--max)', margin: '0 auto', padding: '0 clamp(1.25rem,4vw,3rem) 60px' }}>
        <HeroCarousel />
        <LatestNews articles={latestRes.data} tags={tagsRes.data} />
        <ArtistsScroll />
        <EditorsPicks />
        <ChartWatch songs={songsRes.data} />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}

