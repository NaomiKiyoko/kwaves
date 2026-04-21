import { notFound } from 'next/navigation'
import { getArticleBySlug } from '@/lib/api'
import { topicColors, formatViews } from '@/lib/data'
import Navbar  from '@/components/Navbar'
import Footer  from '@/components/Footer'
import TopStrip from '@/components/TopStrip'

type Props = {
  params: { slug: string }
}

export default async function ArticlePage({ params }: Props) {
  const article = await getArticleBySlug(params.slug)
  if (!article) notFound()

  const color = topicColors[article.topic] ?? 'var(--rose)'

  return (
    <>
      <TopStrip />
      <Navbar />
      <main style={{ maxWidth: 760, margin: '0 auto', padding: '3rem clamp(1.25rem,4vw,3rem) 60px' }}>

        {/* back */}
        <a href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: '.78rem', fontWeight: 600, color: 'var(--muted)', marginBottom: '2rem' }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
          Back to Home
        </a>

        {/* cover */}
        <div style={{
          aspectRatio: '16/7',
          background: article.gradient ?? 'linear-gradient(145deg,#fde8ed,#f9a8c0)',
          borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '6rem', marginBottom: '2.5rem',
          border: '1px solid var(--border)',
        }}>
          {article.emoji ?? '📰'}
        </div>

        {/* kicker */}
        <p style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: '.68rem', fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color, marginBottom: '.9rem' }}>
          <span style={{ width: 18, height: 2, background: 'currentColor', display: 'block' }} />
          {article.topic}
        </p>

        {/* title */}
        <h1 style={{
          fontFamily: "'Playfair Display',Georgia,serif",
          fontWeight: 900, fontSize: 'clamp(1.8rem,4vw,2.8rem)',
          lineHeight: 1.1, letterSpacing: '-.02em',
          color: 'var(--ink)', marginBottom: '1rem',
        }}>{article.title}</h1>

        {/* meta */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: '.78rem', color: 'var(--muted)', marginBottom: '2rem', paddingBottom: '1.5rem', borderBottom: '1px solid var(--border)' }}>
          {article.author && <span style={{ fontWeight: 600, color: 'var(--mid)' }}>By {article.author.name}</span>}
          <span style={{ opacity: .4 }}>·</span>
          <time>{article.publishedAt}</time>
          <span style={{ opacity: .4 }}>·</span>
          <span>{article.readTimeMinutes} min read</span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 3, marginLeft: 'auto' }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ opacity: .6 }}>
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
              <circle cx="12" cy="12" r="3"/>
            </svg>
            {formatViews(article.viewCount)}
          </span>
        </div>

        {/* body */}
        <div style={{ fontSize: '1rem', lineHeight: 1.85, color: 'var(--mid)' }}>
          {article.body
            ? article.body.split('\n\n').map((para, i) => (
                <p key={i} style={{ marginBottom: '1.5rem' }}>{para}</p>
              ))
            : <p>{article.excerpt}</p>
          }
        </div>

        {/* tags */}
        {article.tags && article.tags.length > 0 && (
          <div style={{ marginTop: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border)', display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {article.tags.map(tag => (
              <span key={tag} style={{
                padding: '4px 12px', borderRadius: 999, fontSize: '.72rem', fontWeight: 600,
                background: 'var(--warm)', border: '1px solid var(--border)', color: 'var(--muted)',
              }}>#{tag}</span>
            ))}
          </div>
        )}

      </main>
      <Footer />
    </>
  )
}
