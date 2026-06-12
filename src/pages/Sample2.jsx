import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { ArrowDown, ArrowRight, ArrowUpRight, Clock, Heart, Quote } from 'lucide-react'
import { Reveal, Letters, Counter, Tilt, Mandala, Marquee, Grain } from '../components/fx'
import { ORG, STORIES, STORY_IMAGES, TESTIMONIALS, QUOTES, IMG } from '../data/rsks'

export default function Sample2() {
  useEffect(() => {
    document.title = 'Footprints of Change — Immersive | RSKS India Blog'
    window.scrollTo(0, 0)
  }, [])

  const reduce = useReducedMotion()
  const { scrollYProgress, scrollY } = useScroll()

  // Hero spotlight follows the mouse
  const [spot, setSpot] = useState({ x: 50, y: 35 })
  const onHeroMove = (e) => {
    if (reduce) return
    const r = e.currentTarget.getBoundingClientRect()
    setSpot({
      x: ((e.clientX - r.left) / r.width) * 100,
      y: ((e.clientY - r.top) / r.height) * 100,
    })
  }

  // Hero parallax layers
  const yImgLeft = useTransform(scrollY, [0, 700], [0, reduce ? 0 : 150])
  const yImgRight = useTransform(scrollY, [0, 700], [0, reduce ? 0 : -110])
  const heroFade = useTransform(scrollY, [0, 550], [1, 0.1])

  // Featured image parallax
  const featRef = useRef(null)
  const { scrollYProgress: featProgress } = useScroll({
    target: featRef,
    offset: ['start end', 'end start'],
  })
  const featY = useTransform(featProgress, [0, 1], reduce ? ['0%', '0%'] : ['-10%', '10%'])

  // Pinned horizontal scroll for stories
  const hRef = useRef(null)
  const { scrollYProgress: hProgress } = useScroll({ target: hRef })
  const trackX = useTransform(hProgress, [0, 1], ['1%', reduce ? '1%' : '-62%'])

  // Quote parallax
  const quoteRef = useRef(null)
  const { scrollYProgress: quoteProgress } = useScroll({
    target: quoteRef,
    offset: ['start end', 'end start'],
  })
  const quoteBgY = useTransform(quoteProgress, [0, 1], reduce ? ['0%', '0%'] : ['-14%', '14%'])

  const [featured, ...rest] = STORIES

  return (
    <div className="min-h-screen overflow-x-clip bg-[#0C0A09] font-sans text-stone-200">
      <Grain opacity={0.05} />

      {/* Scroll progress */}
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed top-0 right-0 left-0 z-[70] h-1 origin-left bg-gradient-to-r from-rose-500 via-amber-400 to-rose-500"
      />

      {/* Navigation */}
      <header className="fixed top-0 right-0 left-0 z-50 border-b border-white/5 bg-[#0C0A09]/60 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <a href="#" className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-rose-600 text-white">
              <Heart className="h-4 w-4" aria-hidden="true" />
            </span>
            <span className="font-serif text-lg font-semibold tracking-tight text-white">
              Footprints <span className="font-light italic text-stone-400">of Change</span>
            </span>
          </a>
          <nav className="hidden items-center gap-8 text-sm font-medium text-stone-400 md:flex">
            {['Stories', 'Impact', 'Voices'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="transition-colors duration-200 hover:text-white">
                {item}
              </a>
            ))}
          </nav>
          <a
            href="https://rsksindia.ngo"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-stone-900 transition-colors duration-200 hover:bg-rose-500 hover:text-white"
          >
            Donate
          </a>
        </div>
      </header>

      {/* ───────────────────── Hero — mouse spotlight ───────────────────── */}
      <section
        onMouseMove={onHeroMove}
        className="relative flex min-h-screen flex-col justify-center overflow-hidden pt-20"
      >
        {/* Spotlight that tracks the cursor */}
        <div
          aria-hidden="true"
          className="absolute inset-0 transition-[background] duration-200"
          style={{
            background: `radial-gradient(640px circle at ${spot.x}% ${spot.y}%, rgba(225,29,72,0.16), transparent 65%)`,
          }}
        />
        <Mandala className="pointer-events-none absolute -top-40 -right-40 h-[520px] w-[520px] text-rose-500/10" />
        <Mandala className="pointer-events-none absolute -bottom-48 -left-44 h-[480px] w-[480px] text-amber-500/10" />

        {/* Floating parallax photos */}
        <motion.figure
          style={{ y: yImgLeft, '--float-rotate': '-6deg' }}
          className="absolute top-[15%] left-[4%] hidden w-48 -rotate-6 lg:block animate-float-soft"
        >
          <img
            src={IMG.childSmile}
            alt=""
            aria-hidden="true"
            className="rounded-xl border-4 border-white/90 object-cover shadow-2xl"
          />
          <figcaption className="mt-2 text-center font-serif text-xs text-stone-500 italic">
            joy, unposed
          </figcaption>
        </motion.figure>
        <motion.figure
          style={{ y: yImgRight }}
          className="absolute right-[5%] bottom-[16%] hidden w-56 rotate-[5deg] lg:block"
        >
          <img
            src={IMG.atelier}
            alt=""
            aria-hidden="true"
            className="rounded-xl border-4 border-white/90 object-cover shadow-2xl"
          />
          <figcaption className="mt-2 text-center font-serif text-xs text-stone-500 italic">
            threads of independence
          </figcaption>
        </motion.figure>

        <motion.div style={{ opacity: heroFade }} className="relative mx-auto max-w-5xl px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-block rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs font-semibold tracking-[0.3em] text-rose-300 uppercase backdrop-blur"
          >
            Dear Reader, Namaste!
          </motion.p>

          <h1 className="mt-8 font-serif text-[13vw] leading-[0.92] font-black text-white md:text-9xl">
            <Letters text="Footprints" delay={0.15} />
            <span className="block font-light">
              <span className="text-outline font-black">of</span>{' '}
              <Letters
                text="Change"
                delay={0.6}
                step={0.06}
                className="bg-gradient-to-r from-rose-400 via-amber-300 to-rose-400 bg-clip-text italic text-transparent"
              />
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-stone-400"
          >
            Stories of courage from the villages of Rajasthan — written in the field,
            carried by the women and girls living them. Since {ORG.founded}.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="#stories"
              className="group inline-flex items-center gap-2 rounded-full bg-rose-600 px-8 py-4 text-sm font-semibold text-white shadow-xl shadow-rose-600/25 transition-colors duration-200 hover:bg-rose-500"
            >
              Read the stories
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
            </a>
            <a
              href="#impact"
              className="rounded-full border border-white/15 px-8 py-4 text-sm font-semibold text-stone-200 backdrop-blur transition-colors duration-200 hover:border-white/40 hover:text-white"
            >
              Our impact
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          aria-hidden="true"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-stone-500"
        >
          <motion.span
            animate={reduce ? {} : { y: [0, 9, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="block"
          >
            <ArrowDown className="h-5 w-5" />
          </motion.span>
        </motion.div>
      </section>

      {/* ─────────────────── Giant outlined marquee ─────────────────── */}
      <Marquee className="border-y border-white/5 bg-white/[0.015] py-6">
        <span className="flex items-center whitespace-nowrap">
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i} className="flex items-center">
              <span className="text-outline px-8 font-serif text-6xl font-black tracking-tight uppercase md:text-8xl">
                Footprints of Change
              </span>
              <Heart className="h-6 w-6 fill-rose-600 text-rose-600" aria-hidden="true" />
            </span>
          ))}
        </span>
      </Marquee>

      {/* ─────────────────── Featured — clip-path reveal ─────────────────── */}
      <section ref={featRef} className="mx-auto max-w-7xl px-6 py-28" id="stories">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.a
            href="#"
            initial={{ clipPath: 'inset(0 100% 0 0)' }}
            whileInView={{ clipPath: 'inset(0 0% 0 0)' }}
            viewport={{ once: true, margin: '-120px' }}
            transition={{ duration: 1.1, ease: [0.77, 0, 0.18, 1] }}
            className="group relative block overflow-hidden rounded-[2rem] cursor-pointer"
          >
            <motion.img
              src={STORY_IMAGES[0]}
              alt="Girls learning in a Pathshala classroom"
              style={{ y: featY }}
              className="h-[480px] w-full scale-110 object-cover transition-transform duration-700 group-hover:scale-[1.16]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <span className="absolute top-5 left-5 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold tracking-[0.25em] text-white uppercase backdrop-blur-md">
              Featured
            </span>
            <span className="absolute bottom-6 left-6 font-serif text-8xl font-black text-white/20" aria-hidden="true">
              01
            </span>
          </motion.a>

          <div>
            <Reveal>
              <p className="flex items-center gap-3 text-xs font-bold tracking-[0.3em] text-rose-400 uppercase">
                <span className="h-px w-10 bg-rose-400" aria-hidden="true" />
                {featured.category}
              </p>
              <h2 className="mt-5 font-serif text-4xl leading-[1.05] font-bold text-white md:text-6xl">
                {featured.title}
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-6 text-lg leading-relaxed text-stone-400">{featured.excerpt}</p>
              <div className="mt-6 flex items-center gap-4 text-sm text-stone-500">
                <span>{featured.date}</span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="h-4 w-4" aria-hidden="true" />
                  {featured.readTime}
                </span>
              </div>
              <a
                href="#"
                className="group mt-9 inline-flex items-center gap-3 border-b border-rose-400/40 pb-2 text-sm font-bold tracking-[0.2em] text-rose-300 uppercase transition-colors duration-200 hover:border-rose-300 hover:text-white"
              >
                Continue reading
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1.5" aria-hidden="true" />
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─────────────────── Pinned horizontal stories ─────────────────── */}
      <section ref={hRef} className="relative h-[300vh]">
        <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
          <div className="mx-auto mb-10 flex w-full max-w-7xl items-end justify-between px-6">
            <h2 className="font-serif text-3xl font-bold text-white md:text-5xl">
              More from the <span className="italic text-rose-400">field</span>
            </h2>
            <p className="hidden text-sm text-stone-500 md:block">Keep scrolling — the page walks sideways</p>
          </div>

          <motion.div style={{ x: trackX }} className="flex gap-8 pl-6 md:pl-[6vw]">
            {rest.map((story, i) => (
              <a
                key={story.title}
                href="#"
                className="group relative w-[78vw] shrink-0 cursor-pointer overflow-hidden rounded-[2rem] border border-white/8 sm:w-[52vw] lg:w-[34vw]"
              >
                <img
                  src={STORY_IMAGES[i + 1]}
                  alt={story.title}
                  loading="lazy"
                  draggable="false"
                  className="h-[56vh] w-full object-cover grayscale-[50%] transition-all duration-700 group-hover:scale-[1.05] group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />
                <span
                  aria-hidden="true"
                  className="text-outline absolute top-5 right-6 font-serif text-7xl font-black"
                >
                  {String(i + 2).padStart(2, '0')}
                </span>
                <div className="absolute right-0 bottom-0 left-0 p-7">
                  <p className="text-[11px] font-bold tracking-[0.3em] text-rose-300 uppercase">
                    {story.category} · {story.date}
                  </p>
                  <h3 className="mt-2 font-serif text-2xl leading-snug font-bold text-white md:text-3xl">
                    {story.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 max-w-md text-sm text-stone-300 opacity-0 transition-all duration-500 group-hover:opacity-100">
                    {story.excerpt}
                  </p>
                </div>
                <span className="absolute top-5 left-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur transition-colors duration-300 group-hover:bg-rose-600">
                  <ArrowUpRight className="h-4 w-4 text-white" aria-hidden="true" />
                </span>
              </a>
            ))}
          </motion.div>

          {/* progress hint */}
          <div className="mx-auto mt-10 w-full max-w-7xl px-6">
            <div className="h-px w-full bg-white/10">
              <motion.div style={{ scaleX: hProgress }} className="h-px origin-left bg-rose-500" />
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────── Impact counters ─────────────────── */}
      <section className="relative border-y border-white/5 bg-white/[0.02] py-24" id="impact">
        <Mandala className="pointer-events-none absolute top-1/2 left-1/2 h-[460px] w-[460px] -translate-x-1/2 -translate-y-1/2 text-rose-500/8" />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-6 text-center sm:grid-cols-3">
          {[
            { to: 240, suffix: '+', label: 'Dispatches published from the field' },
            { to: 52000, suffix: '+', label: 'Lives touched across Rajasthan' },
            { to: 120, suffix: '+', label: 'Villages walked, one footprint at a time' },
          ].map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.12}>
              <p className="font-serif text-6xl font-black text-white md:text-7xl">
                <Counter to={stat.to} suffix={stat.suffix} />
              </p>
              <p className="mx-auto mt-3 max-w-[220px] text-sm leading-relaxed text-stone-400">
                {stat.label}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ─────────────────── Parallax quote ─────────────────── */}
      <section ref={quoteRef} className="relative overflow-hidden py-36 md:py-48">
        <motion.div style={{ y: quoteBgY }} className="absolute inset-[-16%]">
          <img
            src={IMG.farmField}
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="h-full w-full object-cover opacity-30"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0C0A09] via-transparent to-[#0C0A09]" />
        <Reveal className="relative mx-auto max-w-3xl px-6 text-center">
          <Quote className="mx-auto h-9 w-9 text-amber-400" aria-hidden="true" />
          <blockquote className="mt-7 font-serif text-3xl leading-snug font-light text-white italic md:text-5xl">
            “{QUOTES[1].text}”
          </blockquote>
          <p className="mt-8 text-xs font-bold tracking-[0.35em] text-rose-300 uppercase">
            — {QUOTES[1].author}
          </p>
        </Reveal>
      </section>

      {/* ─────────────────── Voices — tilt cards ─────────────────── */}
      <section className="mx-auto max-w-7xl px-6 py-28" id="voices">
        <Reveal>
          <p className="text-xs font-bold tracking-[0.3em] text-rose-400 uppercase">Voices</p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-white md:text-5xl">
            The people behind the <span className="italic text-rose-400">footprints</span>
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-7 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.12}>
              <Tilt className="h-full">
                <figure className="flex h-full flex-col rounded-[1.75rem] border border-white/8 bg-gradient-to-b from-white/[0.06] to-transparent p-8 backdrop-blur-sm">
                  <span className="font-serif text-6xl leading-none text-rose-500/80" aria-hidden="true">
                    “
                  </span>
                  <blockquote className="-mt-3 flex-1 font-serif text-[15px] leading-relaxed text-stone-300 italic">
                    {t.quote}
                  </blockquote>
                  <figcaption className="mt-7 flex items-center gap-3 border-t border-white/8 pt-5">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-rose-600/20 font-serif font-bold text-rose-300">
                      {t.name[0]}
                    </span>
                    <span>
                      <p className="font-semibold text-white">{t.name}</p>
                      <p className="text-xs text-stone-500">{t.role}</p>
                    </span>
                  </figcaption>
                </figure>
              </Tilt>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ─────────────────── CTA ─────────────────── */}
      <section className="mx-auto max-w-7xl px-6 pb-32">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-rose-600 via-rose-500 to-amber-500 p-10 text-center md:p-24 animate-gradient-pan">
            <Mandala className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 text-white/15" />
            <Mandala className="pointer-events-none absolute -bottom-36 -left-32 h-96 w-96 text-white/10" />
            <h2 className="relative mx-auto max-w-2xl font-serif text-4xl leading-tight font-black text-white md:text-6xl">
              Every subscriber keeps a story walking
            </h2>
            <p className="relative mx-auto mt-5 max-w-lg text-rose-50/90">
              Join readers around the world following change as it happens in rural Rajasthan.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="relative mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row"
            >
              <label htmlFor="s2-email" className="sr-only">Email address</label>
              <input
                id="s2-email"
                type="email"
                required
                placeholder="you@example.com"
                className="flex-1 rounded-full border border-white/30 bg-white/15 px-6 py-4 text-sm text-white placeholder-rose-100/70 outline-none backdrop-blur transition-colors duration-200 focus:border-white"
              />
              <button
                type="submit"
                className="rounded-full bg-stone-900 px-8 py-4 text-sm font-bold text-white transition-transform duration-200 hover:scale-[1.04] cursor-pointer"
              >
                Subscribe
              </button>
            </form>
          </div>
        </Reveal>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-9 text-sm text-stone-500 md:flex-row">
          <p>© 2026 {ORG.name} · {ORG.fullName}</p>
          <div className="flex items-center gap-6">
            <a href="#" className="transition-colors duration-200 hover:text-white">Privacy</a>
            <a href="#" className="transition-colors duration-200 hover:text-white">Contact</a>
            <a
              href="https://rsksindia.ngo"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-200 hover:text-white"
            >
              rsksindia.ngo
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
