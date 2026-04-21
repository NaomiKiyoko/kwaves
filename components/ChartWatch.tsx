'use client'
import { type Song } from '@/lib/data'

export default function ChartWatch.tsx({ songs }: { songs: Song[] }) {
  return (
    <section style={{
      background: 'var(--warm)', border: '1px solid var(--border)',
      borderRadius: 14, padding: '2rem 2rem 1.5rem', margin: '3.5rem 0',
    }}>
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
        <h2 style={{ fontFamily: "'Playfair Display',Georgia,serif", fontWeight: 900, fontSize: '1.55rem', letterSpacing: '-.02em' }}>
          Chart Watch
        </h2>
        <a href="#" style={{ fontSize: '.75rem', fontWeight: 600, letterSpacing: '.05em', color: 'var(--rose)', display: 'flex', alignItems: 'center', gap: 4 }}>
          Full Chart
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </a>
      </div>

      <ol style={{ listStyle: 'none' }}>
        {songs.map((song, i) => (
          <li key={song.songId} style={{
            display: 'flex', alignItems: 'center', gap: '1rem',
            padding: '.9rem 0',
            borderBottom: i < songs.length - 1 ? '1px solid var(--border)' : 'none',
            cursor: 'pointer',
          }}>
            <span style={{
              fontFamily: "'Playfair Display',Georgia,serif", fontWeight: 900,
              fontSize: '1.6rem', width: 34, textAlign: 'center', flexShrink: 0,
              color: i < 3 ? 'var(--ink)' : 'var(--border)', lineHeight: 1,
            }}>{song.rank}</span>

            <div style={{
              width: 46, height: 46, borderRadius: 10, flexShrink: 0,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '1.4rem', background: song.bgGradient,
            }}>{song.emoji}</div>

            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontWeight: 600, fontSize: '.92rem', color: 'var(--ink)' }}>{song.title}</div>
              <div style={{ fontSize: '.75rem', color: 'var(--muted)' }}>{song.artist}</div>
            </div>

            <div style={{ textAlign: 'right', flexShrink: 0 }}>
              <div style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: '1.2rem', fontWeight: 900, color: 'var(--gold)' }}>
                {song.streamCountLabel}
              </div>
              <div style={{ fontSize: '.72rem', color: 'var(--muted)' }}>streams</div>
            </div>

            <span style={{
              width: 14, textAlign: 'center', fontSize: '.7rem', flexShrink: 0,
              color: song.trendDirection === 'up' ? '#00b894' : song.trendDirection === 'down' ? 'var(--rose)' : 'var(--muted)',
            }}>
              {song.trendDirection === 'up' ? '▲' : song.trendDirection === 'down' ? '▼' : '—'}
            </span>
          </li>
        ))}
      </ol>
    </section>
  )
}
