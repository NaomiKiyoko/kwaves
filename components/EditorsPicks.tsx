'use client'
import { useState } from 'react'

const picks = [
  {
    emoji: '🎸', topic: 'Concert', topicColor: '#e8365d', bgGrad: 'radial-gradient(ellipse at 60% 40%, rgba(232,54,93,.25) 0%, transparent 60%)',
    title: 'The K-pop Concert Experience: Why 2026 is Going to Be Historic',
    date: 'Dec 5, 2025', readTime: '6 min read', size: 'large',
  },
  {
    emoji: '🎭', topic: 'Drama', topicColor: '#ff6b4a', bgGrad: 'linear-gradient(145deg, #2d1b4e, #5b21b6)',
    title: 'How K-Dramas Conquered Global Streaming in 2025',
    date: 'Dec 4, 2025', readTime: '5 min', size: 'mini',
  },
  {
    emoji: '🌏', topic: 'Culture', topicColor: '#00b894', bgGrad: 'linear-gradient(145deg, #1b3a4b, #0c7792)',
    title: 'The Hallyu Wave in 2025: By the Numbers',
    date: 'Dec 3, 2025', readTime: '4 min', size: 'mini',
  },
]

export default function EditorsPicks() {
  return (
    <div style={{
      background: 'var(--ink)',
      margin: '3.5rem calc(-1 * clamp(1.25rem,4vw,3rem))',
      padding: '3.5rem clamp(1.25rem,4vw,3rem)',
    }}>
      <div style={{ maxWidth: 'var(--max)', margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
          <h2 style={{ fontFamily: "'Playfair Display',Georgia,serif", fontWeight: 900, fontSize: '1.55rem', letterSpacing: '-.02em', color: '#fff' }}>
            Editor&apos;s Picks
          </h2>
          <a href="#" style={{ fontSize: '.75rem', fontWeight: 600, letterSpacing: '.05em', color: 'rgba(255,255,255,.45)', display: 'flex', alignItems: 'center', gap: 4 }}>
            View All
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '1.25rem' }}>
          <FeatureCard pick={picks[0]} />
          <MiniCard pick={picks[1]} />
          <MiniCard pick={picks[2]} />
        </div>
      </div>
    </div>
  )
}

function FeatureCard({ pick }: { pick: typeof picks[number] }) {
  const [hovered, setHovered] = useState(false)
  return (
    <article
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative', borderRadius: 14, overflow: 'hidden',
        cursor: 'pointer', background: '#1a1525', minHeight: 320,
        display: 'flex', alignItems: 'flex-end',
      }}
    >
      <div style={{
        position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 90, background: pick.bgGrad,
        transform: hovered ? 'scale(1.05)' : 'scale(1)', transition: 'transform .5s ease',
      }}>{pick.emoji}</div>
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,8,18,.98) 0%, rgba(10,8,18,.2) 60%, transparent 100%)' }} />
      <div style={{ position: 'relative', zIndex: 2, padding: '1.5rem' }}>
        <p style={{ fontSize: '.62rem', fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: pick.topicColor, marginBottom: '.6rem', display: 'flex', alignItems: 'center', gap: 6 }}>
          <span style={{ width: 18, height: 2, background: 'currentColor', display: 'block' }} />{pick.topic}
        </p>
        <h3 style={{ fontFamily: "'Playfair Display',Georgia,serif", fontWeight: 700, fontSize: '1.3rem', lineHeight: 1.2, color: '#fff', letterSpacing: '-.01em', marginBottom: '.5rem' }}>
          {pick.title}
        </h3>
        <div style={{ fontSize: '.7rem', color: 'rgba(255,255,255,.4)' }}>{pick.date} · {pick.readTime}</div>
      </div>
    </article>
  )
}

function MiniCard({ pick }: { pick: typeof picks[number] }) {
  const [hovered, setHovered] = useState(false)
  return (
    <article
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? 'rgba(255,255,255,.07)' : 'rgba(255,255,255,.04)',
        border: '1px solid rgba(255,255,255,.08)',
        borderRadius: 14, overflow: 'hidden', cursor: 'pointer',
        transition: 'background .18s',
      }}
    >
      <div style={{ aspectRatio: '4/3', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.8rem', background: pick.bgGrad }}>
        {pick.emoji}
      </div>
      <div style={{ padding: '1rem 1.1rem 1.2rem' }}>
        <p style={{ fontSize: '.6rem', fontWeight: 700, letterSpacing: '.09em', textTransform: 'uppercase', color: pick.topicColor, marginBottom: '.4rem', display: 'flex', alignItems: 'center', gap: 5 }}>
          <span style={{ width: 14, height: 2, background: 'currentColor', display: 'block' }} />{pick.topic}
        </p>
        <h3 style={{
          fontFamily: "'Playfair Display',Georgia,serif", fontWeight: 700, fontSize: '.95rem',
          lineHeight: 1.3, color: '#fff', marginBottom: '.4rem',
          display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden',
        }}>{pick.title}</h3>
        <div style={{ fontSize: '.68rem', color: 'rgba(255,255,255,.35)' }}>{pick.date} · {pick.readTime}</div>
      </div>
    </article>
  )
}
