'use client'
import { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  return (
    <div style={{
      background: 'var(--rose)', borderRadius: 14,
      padding: '3rem', margin: '3.5rem 0',
      display: 'grid', gridTemplateColumns: '1fr auto',
      alignItems: 'center', gap: '2rem',
    }}>
      <div>
        <h2 style={{ fontFamily: "'Playfair Display',Georgia,serif", fontWeight: 900, fontSize: '1.9rem', color: '#fff', letterSpacing: '-.02em', marginBottom: '.5rem' }}>
          Never Miss a Drop
        </h2>
        <p style={{ fontSize: '.88rem', color: 'rgba(255,255,255,.75)' }}>
          The best K-pop news, delivered to your inbox every morning. No spam — just the stories that matter.
        </p>
      </div>

      {submitted ? (
        <p style={{ color: '#fff', fontWeight: 600, fontSize: '.9rem' }}>✓ You&apos;re subscribed!</p>
      ) : (
        <div style={{ display: 'flex', gap: 8, flexShrink: 0 }}>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="your@email.com"
            style={{
              background: 'rgba(255,255,255,.2)', border: '1.5px solid rgba(255,255,255,.35)',
              borderRadius: 999, padding: '10px 20px', fontSize: '.85rem', color: '#fff',
              outline: 'none', width: 240,
            }}
          />
          <button
            onClick={() => email && setSubmitted(true)}
            style={{
              padding: '10px 22px', borderRadius: 999, background: '#fff',
              color: 'var(--rose)', fontWeight: 700, fontSize: '.82rem',
              letterSpacing: '.03em', border: 'none', cursor: 'pointer',
            }}
          >
            Subscribe
          </button>
        </div>
      )}
    </div>
  )
}
