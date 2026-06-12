import { useEffect, useRef, useState } from 'react'
import {
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useSpring,
  animate,
} from 'framer-motion'

/* ---------------------------------- Reveal --------------------------------- */

export function Reveal({ children, className = '', delay = 0, y = 44, once = true }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '-70px' }}
      transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  )
}

/* ------------------------------ Letter stagger ----------------------------- */

export function Letters({ text, className = '', delay = 0, step = 0.035 }) {
  return (
    <span className={className} aria-label={text}>
      {text.split('').map((ch, i) => (
        <motion.span
          key={i}
          aria-hidden="true"
          initial={{ opacity: 0, y: '0.6em', rotateX: -60 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.7, delay: delay + i * step, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="inline-block"
          style={{ whiteSpace: ch === ' ' ? 'pre' : undefined }}
        >
          {ch === ' ' ? ' ' : ch}
        </motion.span>
      ))}
    </span>
  )
}

/* --------------------------------- Counter --------------------------------- */

export function Counter({ to, suffix = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [val, setVal] = useState(0)
  const reduce = useReducedMotion()

  useEffect(() => {
    if (!inView) return
    if (reduce) {
      setVal(to)
      return
    }
    const controls = animate(0, to, {
      duration: 2.2,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setVal(Math.round(v)),
    })
    return () => controls.stop()
  }, [inView, to, reduce])

  return (
    <span ref={ref}>
      {val.toLocaleString('en-IN')}
      {suffix}
    </span>
  )
}

/* -------------------------------- Tilt card -------------------------------- */

export function Tilt({ children, className = '', max = 9 }) {
  const reduce = useReducedMotion()
  const rx = useMotionValue(0)
  const ry = useMotionValue(0)
  const srx = useSpring(rx, { stiffness: 220, damping: 18 })
  const sry = useSpring(ry, { stiffness: 220, damping: 18 })

  const onMove = (e) => {
    if (reduce) return
    const r = e.currentTarget.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width - 0.5
    const py = (e.clientY - r.top) / r.height - 0.5
    ry.set(px * max)
    rx.set(-py * max)
  }
  const onLeave = () => {
    rx.set(0)
    ry.set(0)
  }

  return (
    <motion.div
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX: srx, rotateY: sry, transformPerspective: 900, transformStyle: 'preserve-3d' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/* ----------------------------- Magnetic wrapper ---------------------------- */

export function Magnetic({ children, className = '', strength = 0.35 }) {
  const reduce = useReducedMotion()
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 180, damping: 16 })
  const sy = useSpring(y, { stiffness: 180, damping: 16 })

  const onMove = (e) => {
    if (reduce) return
    const r = e.currentTarget.getBoundingClientRect()
    x.set((e.clientX - (r.left + r.width / 2)) * strength)
    y.set((e.clientY - (r.top + r.height / 2)) * strength)
  }
  const onLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ x: sx, y: sy }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  )
}

/* ------------------------------- Custom cursor ------------------------------ */

export function CursorGlow({ color = 'bg-rose-400' }) {
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const sx = useSpring(x, { stiffness: 400, damping: 35 })
  const sy = useSpring(y, { stiffness: 400, damping: 35 })
  const rx = useSpring(x, { stiffness: 120, damping: 18 })
  const ry = useSpring(y, { stiffness: 120, damping: 18 })
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return
    setEnabled(true)
    const move = (e) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }
    window.addEventListener('pointermove', move, { passive: true })
    return () => window.removeEventListener('pointermove', move)
  }, [x, y])

  if (!enabled) return null
  return (
    <>
      <motion.div
        aria-hidden="true"
        style={{ x: sx, y: sy, translateX: '-50%', translateY: '-50%' }}
        className={`pointer-events-none fixed top-0 left-0 z-[90] h-2.5 w-2.5 rounded-full ${color} mix-blend-difference`}
      />
      <motion.div
        aria-hidden="true"
        style={{ x: rx, y: ry, translateX: '-50%', translateY: '-50%' }}
        className="pointer-events-none fixed top-0 left-0 z-[90] h-9 w-9 rounded-full border border-white/40 mix-blend-difference"
      />
    </>
  )
}

/* --------------------------------- Mandala --------------------------------- */

export function Mandala({ className = '', spin = true }) {
  return (
    <svg
      viewBox="0 0 200 200"
      aria-hidden="true"
      className={`${className} ${spin ? 'animate-spin-slow' : ''}`}
      fill="none"
      stroke="currentColor"
    >
      <circle cx="100" cy="100" r="97" strokeWidth="0.8" strokeDasharray="3 7" />
      <circle cx="100" cy="100" r="82" strokeWidth="0.6" strokeDasharray="1 5" />
      <circle cx="100" cy="100" r="64" strokeWidth="0.8" />
      <circle cx="100" cy="100" r="20" strokeWidth="0.8" strokeDasharray="2 4" />
      {Array.from({ length: 12 }).map((_, i) => (
        <ellipse
          key={i}
          cx="100"
          cy="44"
          rx="9"
          ry="22"
          strokeWidth="0.8"
          transform={`rotate(${i * 30} 100 100)`}
        />
      ))}
      {Array.from({ length: 24 }).map((_, i) => (
        <circle
          key={`d${i}`}
          cx="100"
          cy="10"
          r="1.6"
          fill="currentColor"
          stroke="none"
          transform={`rotate(${i * 15} 100 100)`}
        />
      ))}
    </svg>
  )
}

/* --------------------------------- Squiggle -------------------------------- */

export function Squiggle({ className = '' }) {
  return (
    <svg viewBox="0 0 220 18" aria-hidden="true" className={className} fill="none">
      <path
        d="M3 13 C 35 4, 65 4, 95 10 S 150 18, 217 7"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
      />
    </svg>
  )
}

/* ----------------------------------- Grain --------------------------------- */

const GRAIN_URI = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='220' height='220'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.55'/%3E%3C/svg%3E")`

export function Grain({ opacity = 0.06 }) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[80]"
      style={{ backgroundImage: GRAIN_URI, opacity }}
    />
  )
}

/* ------------------------------ Bandhani dots ------------------------------- */

export function Dots({ className = '', color = 'rgba(255,255,255,0.25)', size = 18 }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute ${className}`}
      style={{
        backgroundImage: `radial-gradient(circle, ${color} 1.3px, transparent 1.8px)`,
        backgroundSize: `${size}px ${size}px`,
      }}
    />
  )
}

/* ------------------------------ Marquee strip ------------------------------- */

export function Marquee({ children, className = '', slow = false }) {
  return (
    <div className={`flex overflow-hidden ${className}`} aria-hidden="true">
      <div className={`flex shrink-0 items-center ${slow ? 'animate-marquee-slow' : 'animate-marquee'}`}>
        {children}
        {children}
      </div>
    </div>
  )
}
