'use client'
import { useState } from 'react'
import { artists } from '@/lib/data'

export default function ArtistsScroll() {
  return (
    <section style={{ margin: '3.5rem 0' }}>
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
        <h2 style={{ fontFamily: "'Playfair Display',Georgia,serif", fontWeight: 900, fontSize: '1.55rem', letterSpacing: '-.02em' }}>
          Popular Artists
        </h2>
        <a href="#" style={{ fontSize: '.75rem', fontWeight: 600, letterSpacing: '.05em', color: 'var(--rose)', display: 'flex', alignItems: 'center', gap: 4 }}>
          All Artists
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </a>
      </div>

      <div style={{ overflowX: 'auto', scrollbarWidth: 'none', margin: '0 calc(-1 * clamp(1.25rem,4vw,3rem))', padding: '0 clamp(1.25rem,4vw,3rem)' }}>
        <div style={{ display: 'flex', gap: '1.1rem', width: 'max-content', paddingBottom: 4 }}>
          {artists.map(a => <ArtistCard key={a.name} artist={a} />)}
        </div>
      </div>
    </section>
  )
}

function ArtistCard({ artist }: { artist: typeof artists[number] }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ width: 160, flexShrink: 0, cursor: 'pointer', transition: 'transform .2s', transform: hovered ? 'translateY(-4px)' : 'none' }}
    >
      <div style={{
        width: 160, height: 160, borderRadius: '50%',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '3.8rem',
        border: `3px solid ${hovered ? 'var(--rose)' : 'var(--border)'}`,
        marginBottom: '.75rem',
        overflow: 'hidden',
        background: artist.gradient,
        transition: 'border-color .2s',
      }}>{artist.emoji}</div>
      <div style={{ fontFamily: "'Playfair Display',Georgia,serif", fontWeight: 700, fontSize: '.95rem', textAlign: 'center', color: 'var(--ink)', marginBottom: 2 }}>
        {artist.name}
      </div>
      <div style={{ fontSize: '.7rem', color: 'var(--muted)', textAlign: 'center' }}>
        {artist.members === 1 ? 'Solo' : `${artist.members} members`} · {artist.articles} articles
      </div>
    </div>
  )
}
