'use client'
import { useState } from 'react'
import { type Article, type Tag, topicColors, formatViews } from '@/lib/data'

type Props = {
  articles: Article[]
  tags: Tag[]
}

// Build filter list from actual tags + always include "All"
function buildFilters(tags: Tag[]): string[] {
  const topics = ['All', 'Music', 'Concert', 'Drama', 'Chart', 'Fan Meeting', 'Anniversary', 'Record']
  return topics
}

export default function LatestNews({ articles, tags }: Props) {
  const [active, setActive] = useState('All')
  const filters = buildFilters(tags)

  const filtered = active === 'All'
    ? articles
    : articles.filter(a => a.topic === active)

  return (
    <section style={{ marginBottom: '3.5rem' }}>
      {/* header */}
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
        <h2 style={{ fontFamily: "'Playfair Display',Georgia,serif", fontWeight: 900, fontSize: '1.55rem', letterSpacing: '-.02em' }}>
          Latest News
        </h2>
        <a href="#" style={{ fontSize: '.75rem', fontWeight: 600, letterSpacing: '.05em', color: 'var(--rose)', display: 'flex', alignItems: 'center', gap: 4 }}>
          View All
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </a>
      </div>

      {/* pills */}
      <div style={{ display: 'flex', gap: 8, marginBottom: '2rem', overflowX: 'auto', scrollbarWidth: 'none', paddingBottom: 2 }}>
        {filters.map(f => (
          <button
            key={f}
            onClick={() => setActive(f)}
            style={{
              padding: '6px 16px', borderRadius: 999,
              fontSize: '.78rem', fontWeight: 600, whiteSpace: 'nowrap',
              border: `1.5px solid ${active === f ? 'var(--ink)' : 'var(--border)'}`,
              background: active === f ? 'var(--ink)' : 'transparent',
              color: active === f ? '#fff' : 'var(--muted)',
              transition: 'all .15s', cursor: 'pointer',
            }}
          >{f}</button>
        ))}
      </div>

      {/* grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '1.5rem',
      }}>
        {filtered.length > 0
          ? filtered.map(article => <ArticleCard key={article.id} article={article} />)
          : <p style={{ color: 'var(--muted)', fontSize: '.9rem', gridColumn: '1/-1' }}>No articles found.</p>
        }
      </div>
    </section>
  )
}

function ArticleCard({ article }: { article: Article }) {
  const [hovered, setHovered] = useState(false)
  const color = topicColors[article.topic] ?? 'var(--rose)'

  return (
    <article
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: 'var(--card)',
        borderRadius: 14, overflow: 'hidden',
        border: '1px solid var(--border)', cursor: 'pointer',
        transition: 'transform .22s cubic-bezier(.23,1,.32,1), box-shadow .22s',
        transform: hovered ? 'translateY(-5px)' : 'translateY(0)',
        boxShadow: hovered ? '0 16px 48px rgba(0,0,0,.1)' : 'none',
        display: 'flex', flexDirection: 'column',
      }}
    >
      {/* image */}
      <div style={{
        aspectRatio: '16/10',
        background: article.gradient ?? 'linear-gradient(145deg,#fde8ed,#f9a8c0)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '3.8rem', position: 'relative', overflow: 'hidden',
      }}>
        {article.emoji ?? '📰'}
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,.04)', opacity: hovered ? 0 : 1, transition: 'opacity .2s' }} />
      </div>

      {/* body */}
      <div style={{ padding: '1.1rem 1.2rem 1.3rem', display: 'flex', flexDirection: 'column', gap: '.55rem', flex: 1 }}>
        <span style={{ fontSize: '.63rem', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color }}>
          {article.topic}
        </span>
        <h3 style={{
          fontFamily: "'Playfair Display',Georgia,serif",
          fontWeight: 700, fontSize: '1.08rem', lineHeight: 1.3,
          letterSpacing: '-.01em', color: 'var(--ink)',
          display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden',
        }}>{article.title}</h3>

        <div style={{ fontSize: '.7rem', color: 'var(--muted)', display: 'flex', alignItems: 'center', gap: 8, marginTop: 'auto' }}>
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
      </div>
    </article>
  )
}
