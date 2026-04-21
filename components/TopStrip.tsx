'use client'
export default function TopStrip.tsx() {
  const date = new Date().toLocaleDateString('en-US', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
  })

  return (
    <div style={{
      background: 'var(--ink)',
      color: 'rgba(255,255,255,.55)',
      fontSize: '.7rem',
      letterSpacing: '.06em',
      padding: '7px clamp(1.25rem, 4vw, 3rem)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '1rem',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
        <span>{date}</span>
        <span>케이팝 뉴스 &amp; 엔터테인먼트</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        {['𝕏', '◎', '♪', '▶'].map((icon, i) => (
          <span key={i} style={{ fontSize: '.85rem', cursor: 'pointer', opacity: .6, transition: 'opacity .15s' }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '.6')}
          >{icon}</span>
        ))}
      </div>
    </div>
  )
}
