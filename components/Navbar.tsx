'use client'
import { useState } from 'react'

const links = ['Home', 'Music', 'Concert', 'Drama', 'Charts', 'Fan Meeting']

export default function Navbar() {
  const [active, setActive] = useState('Home')

  return (
    <nav style={{
      background: 'var(--card)',
      borderBottom: '1px solid var(--border)',
      position: 'sticky',
      top: 0,
      zIndex: 100,
    }}>
      {/* top row */}
      <div style={{
        maxWidth: 'var(--max)',
        margin: '0 auto',
        padding: '18px clamp(1.25rem,4vw,3rem) 14px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '1.5rem',
        borderBottom: '1px solid var(--border)',
      }}>
        {/* spacer */}
        <div style={{ width: 180 }} />

        {/* logo */}
        <a href="/" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', lineHeight: 1 }}>
          <span style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontWeight: 900,
            fontSize: '2.4rem',
            letterSpacing: '-.02em',
            color: 'var(--ink)',
          }}>KWAVES</span>
          <span style={{
            fontFamily: "'Noto Sans KR', sans-serif",
            fontSize: '.5rem',
            letterSpacing: '.35em',
            color: 'var(--muted)',
            marginTop: 2,
          }}>케이팝 컬처 &amp; 엔터테인먼트</span>
        </a>

        {/* search */}
        <div style={{ width: 180, display: 'flex', justifyContent: 'flex-end' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            background: 'var(--warm)',
            border: '1px solid var(--border)',
            borderRadius: 999,
            padding: '8px 16px',
            fontSize: '.82rem',
            color: 'var(--muted)',
            cursor: 'text',
            width: 200,
          }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
            </svg>
            Search
          </div>
        </div>
      </div>

      {/* bottom nav */}
      <div style={{
        maxWidth: 'var(--max)',
        margin: '0 auto',
        padding: '0 clamp(1.25rem,4vw,3rem)',
        display: 'flex',
        overflowX: 'auto',
        scrollbarWidth: 'none',
      }}>
        {links.map(link => (
          <button
            key={link}
            onClick={() => setActive(link)}
            style={{
              display: 'block',
              padding: '12px 14px',
              fontSize: '.78rem',
              fontWeight: 600,
              letterSpacing: '.04em',
              color: active === link ? 'var(--rose)' : 'var(--muted)',
              borderBottom: active === link ? '2px solid var(--rose)' : '2px solid transparent',
              background: 'transparent',
              border: 'none',
              borderBottomWidth: 2,
              borderBottomStyle: 'solid',
              borderBottomColor: active === link ? 'var(--rose)' : 'transparent',
              whiteSpace: 'nowrap',
              cursor: 'pointer',
              transition: 'color .15s, border-color .15s',
            }}
          >
            {link}
          </button>
        ))}
      </div>
    </nav>
  )
}
