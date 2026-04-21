'use client'
import { useState, useEffect, useRef, useCallback } from 'react'
import { carouselSlides } from '@/lib/data'

const AUTO_DELAY = 5000

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const progressRef = useRef<HTMLDivElement>(null)
  const total = carouselSlides.length

  const goTo = useCallback((index: number) => {
    const next = ((index % total) + total) % total
    setCurrent(next)
  }, [total])

  const resetProgress = useCallback(() => {
    if (!progressRef.current) return
    progressRef.current.style.transition = 'none'
    progressRef.current.style.width = '0%'
    void progressRef.current.offsetWidth
    progressRef.current.style.transition = `width ${AUTO_DELAY}ms linear`
    progressRef.current.style.width = '100%'
  }, [])

  const startAuto = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(() => setCurrent(c => (c + 1) % total), AUTO_DELAY)
    resetProgress()
  }, [total, resetProgress])

  const stopAuto = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current)
    if (progressRef.current) {
      progressRef.current.style.transition = 'none'
    }
  }, [])

  useEffect(() => { startAuto(); return () => stopAuto() }, [startAuto, stopAuto])
  useEffect(() => { resetProgress() }, [current, resetProgress])

  const slide = carouselSlides[current]

  return (
    <section
      aria-label="Top stories carousel"
      onMouseEnter={stopAuto}
      onMouseLeave={startAuto}
      style={{
        position: 'relative',
        width: '100vw',
        left: '50%',
        transform: 'translateX(-50%)',
        height: 580,
        overflow: 'hidden',
        marginBottom: '3rem',
        background: 'var(--ink)',
      }}
    >
      {/* progress bar */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'rgba(255,255,255,.08)', zIndex: 10 }}>
        <div ref={progressRef} style={{ height: '100%', background: 'var(--rose)', width: '0%' }} />
      </div>

      {/* slides */}
      <div style={{
        display: 'flex',
        height: '100%',
        transform: `translateX(-${current * 100}%)`,
        transition: 'transform .7s cubic-bezier(.77,0,.175,1)',
        willChange: 'transform',
      }}>
        {carouselSlides.map((s, i) => (
          <div
            key={i}
            className={s.bgClass}
            style={{ minWidth: '100%', height: '100%', position: 'relative', flexShrink: 0 }}
          >
            {/* big emoji */}
            <div style={{
              position: 'absolute', inset: 0,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 180, userSelect: 'none', pointerEvents: 'none',
              transition: 'transform .7s ease',
              transform: i === current ? 'scale(1)' : 'scale(1.04)',
            }}>{s.emoji}</div>

            {/* scrim */}
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(to top, rgba(10,8,16,.98) 0%, rgba(10,8,16,.55) 40%, rgba(10,8,16,.1) 70%, transparent 100%)',
            }} />
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(to right, rgba(10,8,16,.5) 0%, transparent 60%)',
            }} />
          </div>
        ))}
      </div>

      {/* slide body (always on top, transitions with state) */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        zIndex: 5,
        padding: '3rem clamp(1.5rem,5vw,4rem)',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        gap: '2rem',
      }}>
        <div style={{ maxWidth: 620 }}>
          {/* kicker */}
          <p style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            fontSize: '.68rem', fontWeight: 700, letterSpacing: '.12em',
            textTransform: 'uppercase', color: slide.topicColor,
            marginBottom: '.9rem',
          }}>
            <span style={{ width: 18, height: 2, background: 'currentColor', display: 'block' }} />
            {slide.topic}
          </p>

          <h1 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 'clamp(1.9rem,4vw,3.2rem)',
            fontWeight: 900,
            lineHeight: 1.06,
            letterSpacing: '-.02em',
            color: '#fff',
            marginBottom: '.85rem',
          }}>{slide.headline}</h1>

          <p style={{ fontSize: '.9rem', color: 'rgba(255,255,255,.62)', maxWidth: 480, marginBottom: '1.5rem', lineHeight: 1.7 }}>
            {slide.excerpt}
          </p>

          <div style={{ fontSize: '.73rem', color: 'rgba(255,255,255,.4)', display: 'flex', gap: 10, alignItems: 'center', marginBottom: '1.4rem' }}>
            <span>{slide.date}</span>
            <span style={{ opacity: .35 }}>·</span>
            <span>{slide.readTime}</span>
          </div>

          <a href="#" style={{
            display: 'inline-flex', alignItems: 'center', gap: 7,
            background: 'var(--rose)', color: '#fff',
            padding: '10px 22px', borderRadius: 999,
            fontSize: '.82rem', fontWeight: 600, letterSpacing: '.02em',
          }}>
            Read More
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>

        {/* counter */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 10, paddingBottom: 6 }}>
          <div style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: '3.5rem', fontWeight: 900, lineHeight: 1,
            color: 'rgba(255,255,255,.08)', letterSpacing: '-.04em', userSelect: 'none',
          }}>
            {String(current + 1).padStart(2, '0')}
          </div>
          <div style={{ fontSize: '.72rem', color: 'rgba(255,255,255,.3)', letterSpacing: '.08em' }}>/ 0{total}</div>
        </div>
      </div>

      {/* prev / next */}
      {(['prev', 'next'] as const).map(dir => (
        <button
          key={dir}
          onClick={() => { stopAuto(); goTo(current + (dir === 'next' ? 1 : -1)); startAuto() }}
          aria-label={dir === 'prev' ? 'Previous slide' : 'Next slide'}
          style={{
            position: 'absolute',
            top: '50%', transform: 'translateY(-50%)',
            [dir === 'prev' ? 'left' : 'right']: 'clamp(1rem,3vw,2.5rem)',
            zIndex: 10,
            width: 44, height: 44, borderRadius: '50%',
            background: 'rgba(255,255,255,.1)',
            border: '1px solid rgba(255,255,255,.18)',
            color: '#fff',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            backdropFilter: 'blur(8px)',
            cursor: 'pointer',
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            {dir === 'prev'
              ? <path d="M15 18l-6-6 6-6"/>
              : <path d="M9 18l6-6-6-6"/>
            }
          </svg>
        </button>
      ))}

      {/* thumbnail strip */}
      <div style={{
        position: 'absolute', bottom: '1.4rem',
        left: 'clamp(1.5rem,5vw,4rem)',
        display: 'flex', gap: 10, zIndex: 10,
      }}>
        {carouselSlides.map((s, i) => (
          <button
            key={i}
            onClick={() => { stopAuto(); goTo(i); startAuto() }}
            style={{
              display: 'flex', alignItems: 'center', gap: 9,
              padding: '7px 12px 7px 8px',
              borderRadius: 10,
              background: i === current ? 'rgba(255,255,255,.14)' : 'rgba(255,255,255,.07)',
              border: `1px solid ${i === current ? 'rgba(255,255,255,.25)' : 'rgba(255,255,255,.1)'}`,
              cursor: 'pointer',
              backdropFilter: 'blur(10px)',
              maxWidth: 200,
              color: '#fff',
            }}
          >
            <div style={{
              width: 36, height: 36, borderRadius: 7,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '1.2rem', flexShrink: 0,
              background: s.thumbBg,
            }}>{s.emoji}</div>
            <div style={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
              <span style={{ fontSize: '.6rem', fontWeight: 700, letterSpacing: '.09em', textTransform: 'uppercase', opacity: .5 }}>{s.topic}</span>
              <span style={{ fontSize: '.72rem', fontWeight: 600, color: 'rgba(255,255,255,.85)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {s.headline.split(' ').slice(0, 4).join(' ')}…
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* dots */}
      <div style={{
        position: 'absolute', bottom: '1.5rem',
        right: 'clamp(1.5rem,5vw,4rem)',
        display: 'flex', gap: 8, zIndex: 10,
      }}>
        {carouselSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => { stopAuto(); goTo(i); startAuto() }}
            style={{
              width: i === current ? 44 : 28, height: 3,
              borderRadius: 2, padding: 0, border: 'none',
              background: i === current ? 'var(--rose)' : 'rgba(255,255,255,.25)',
              transition: 'background .25s, width .25s',
              cursor: 'pointer',
            }}
          />
        ))}
      </div>
    </section>
  )
}
