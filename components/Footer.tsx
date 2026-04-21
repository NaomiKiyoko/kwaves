'use client'
const cols = {
  Sections: ['Music', 'Concert', 'Drama', 'Charts', 'Fan Meeting'],
  Company:  ['About Us', 'Contact', 'Careers', 'Advertise'],
  Legal:    ['Terms of Service', 'Privacy Policy', 'Cookie Policy'],
}

export default function Footer() {
  return (
    <footer style={{ background: 'var(--ink)', marginTop: '4rem' }}>
      <div style={{
        maxWidth: 'var(--max)', margin: '0 auto',
        padding: '3.5rem clamp(1.25rem,4vw,3rem) 2.5rem',
        display: 'grid', gridTemplateColumns: '1.5fr repeat(3, 1fr)', gap: '2.5rem',
      }}>
        <div>
          <div style={{ fontFamily: "'Playfair Display',Georgia,serif", fontWeight: 900, fontSize: '2.2rem', color: '#fff', letterSpacing: '-.02em', marginBottom: '.6rem' }}>
            KWAVES
          </div>
          <p style={{ fontSize: '.8rem', color: 'rgba(255,255,255,.35)', lineHeight: 1.7, maxWidth: 230 }}>
            Your daily home for K-pop culture, music, drama, and everything Hallyu.
          </p>
        </div>
        {Object.entries(cols).map(([heading, links]) => (
          <div key={heading}>
            <h4 style={{ fontSize: '.65rem', fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,.35)', marginBottom: '1.1rem' }}>
              {heading}
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
              {links.map(l => (
                <li key={l}>
                  <a href="#" style={{ fontSize: '.82rem', color: 'rgba(255,255,255,.5)', transition: 'color .15s' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,.5)')}
                  >{l}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div style={{
        maxWidth: 'var(--max)', margin: '0 auto',
        padding: '1.4rem clamp(1.25rem,4vw,3rem)',
        borderTop: '1px solid rgba(255,255,255,.08)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        fontSize: '.72rem', color: 'rgba(255,255,255,.3)',
      }}>
        <span>© 2025 KWAVES · All rights reserved</span>
        <div style={{ display: 'flex', gap: 8 }}>
          {['𝕏', '◎', '♪', '▶'].map((icon, i) => (
            <div key={i} style={{
              width: 34, height: 34, borderRadius: '50%',
              border: '1px solid rgba(255,255,255,.12)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '.85rem', cursor: 'pointer', color: 'rgba(255,255,255,.4)',
            }}
              onMouseEnter={e => { const el = e.currentTarget; el.style.color = '#fff'; el.style.borderColor = 'rgba(255,255,255,.4)' }}
              onMouseLeave={e => { const el = e.currentTarget; el.style.color = 'rgba(255,255,255,.4)'; el.style.borderColor = 'rgba(255,255,255,.12)' }}
            >{icon}</div>
          ))}
        </div>
      </div>
    </footer>
  )
}
