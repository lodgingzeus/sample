import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { ArrowDown, ArrowRight, BadgeCheck, Heart, Quote } from 'lucide-react'
import {
  Reveal,
  Letters,
  Counter,
  Tilt,
  Magnetic,
  CursorGlow,
  Mandala,
  Marquee,
  Grain,
} from '../components/fx'
import { ORG, STATS, FOCUS_AREAS, CREDENTIALS, TESTIMONIALS, IMG } from '../data/rsks'

const PANEL_PROGRAMS = [
  { n: '01', title: 'Girls’ Education', sub: 'Pathshaala learning centres bring the classroom to girls who never had one.', img: IMG.classroom },
  { n: '02', title: 'Women Empowerment', sub: 'Self-help groups, leadership training and campaigns against gender violence.', img: IMG.workshop },
  { n: '03', title: 'Sustainable Livelihood', sub: 'Garment-making schools and craft collectives turning skill into income.', img: IMG.atelier },
  { n: '04', title: 'Health & Motherhood', sub: 'Village health camps, safe-motherhood counselling and HIV/AIDS awareness.', img: IMG.health },
  { n: '05', title: 'Environment', sub: 'Clean water, sanitation drives and green livelihoods for dry-land villages.', img: IMG.sproutHands },
]

const TIMELINE = [
  { year: '1992', title: 'A circle of community workers', text: 'RSKS is founded in Ajmer district, at the foothills of the Aravali range.' },
  { year: '2010', title: 'FCRA certification', text: 'Cleared to receive international support — the work goes global, the roots stay local.' },
  { year: '2014', title: 'Top-rated on GlobalGiving', text: 'International donors recognize transparent, grassroots-first delivery.' },
  { year: '2015', title: 'UN ECOSOC status', text: 'Special Consultative Status with the United Nations Economic and Social Council.' },
  { year: '2020', title: '“Together We Can”', text: 'COVID-19 relief reaches thousands of families with rations, masks and care.' },
  { year: 'Today', title: 'The walk continues', text: '120+ villages, 1,400+ SHG women, and a generation of girls in classrooms.' },
]

const TIERS = [
  { amount: '₹1,500', impact: 'Keeps a girl learning in Pathshala for one month', tag: 'Most popular' },
  { amount: '₹5,000', impact: 'Funds a vocational training seat for a rural woman', tag: null },
  { amount: '₹12,000', impact: 'Sponsors a village health & safe-motherhood camp', tag: null },
]

export default function Sample4() {
  useEffect(() => {
    document.title = 'RSKS India — Immersive | Rajasthan Samgrah Kalyan Sansthan'
    window.scrollTo(0, 0)
  }, [])

  const reduce = useReducedMotion()
  const { scrollYProgress, scrollY } = useScroll()

  // Hero — Ken Burns + mouse parallax
  const heroScale = useTransform(scrollY, [0, 900], [1, reduce ? 1 : 1.22])
  const heroY = useTransform(scrollY, [0, 900], [0, reduce ? 0 : 140])
  const heroTextY = useTransform(scrollY, [0, 600], [0, reduce ? 0 : -90])
  const heroOpacity = useTransform(scrollY, [0, 550], [1, 0.1])
  const [tiltOff, setTiltOff] = useState({ x: 0, y: 0 })
  const onHeroMove = (e) => {
    if (reduce) return
    const { innerWidth, innerHeight } = window
    setTiltOff({
      x: (e.clientX / innerWidth - 0.5) * 22,
      y: (e.clientY / innerHeight - 0.5) * 14,
    })
  }

  // Nav background on scroll
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Pinned horizontal program panels
  const hRef = useRef(null)
  const { scrollYProgress: hProgress } = useScroll({ target: hRef })
  const panelX = useTransform(hProgress, [0, 1], ['2%', reduce ? '2%' : '-68%'])

  // Parallax story
  const storyRef = useRef(null)
  const { scrollYProgress: storyProgress } = useScroll({
    target: storyRef,
    offset: ['start end', 'end start'],
  })
  const storyY = useTransform(storyProgress, [0, 1], reduce ? ['0%', '0%'] : ['-15%', '15%'])

  // Timeline progress
  const timelineRef = useRef(null)
  const { scrollYProgress: tlProgress } = useScroll({
    target: timelineRef,
    offset: ['start 75%', 'end 65%'],
  })

  return (
    <div className="min-h-screen overflow-x-clip bg-[#070B14] font-sans text-slate-200">
      <CursorGlow />
      <Grain opacity={0.05} />

      {/* Scroll progress */}
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed top-0 right-0 left-0 z-[70] h-1 origin-left bg-gradient-to-r from-rose-500 via-amber-400 to-rose-500"
      />

      {/* Navigation */}
      <header
        className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
          scrolled ? 'border-b border-white/5 bg-[#070B14]/80 backdrop-blur-xl' : 'bg-transparent'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-3">
            <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-rose-600 text-white">
              <Mandala spin={false} className="absolute inset-0 h-full w-full text-white/30" />
              <Heart className="relative h-4 w-4" aria-hidden="true" />
            </span>
            <span className="font-display text-lg font-semibold tracking-tight text-white">
              RSKS <span className="text-rose-400">India</span>
            </span>
          </a>
          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-300 lg:flex">
            {['Mission', 'Programs', 'Journey', 'Give'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="transition-colors duration-200 hover:text-white">
                {item}
              </a>
            ))}
          </nav>
          <Magnetic strength={0.25}>
            <a
              href="#give"
              className="block rounded-full bg-rose-600 px-6 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-rose-500"
            >
              Donate
            </a>
          </Magnetic>
        </div>
      </header>

      {/* ───────────────────── Hero ───────────────────── */}
      <section
        onMouseMove={onHeroMove}
        className="relative flex h-screen min-h-[680px] items-center justify-center overflow-hidden"
      >
        <motion.div
          style={{ scale: heroScale, y: heroY }}
          className="absolute inset-[-4%]"
        >
          <div
            style={{
              transform: `translate(${-tiltOff.x}px, ${-tiltOff.y}px)`,
              transition: 'transform 0.6s cubic-bezier(0.16,1,0.3,1)',
            }}
            className="h-full w-full"
          >
            <img
              src={IMG.heroCommunity}
              alt="Community walking together through golden fields in rural Rajasthan"
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#070B14]/75 via-[#070B14]/35 to-[#070B14]" />

        {/* Watermark */}
        <span
          aria-hidden="true"
          className="text-outline pointer-events-none absolute bottom-[4%] left-1/2 -translate-x-1/2 font-serif text-[22vw] leading-none font-black whitespace-nowrap opacity-60"
        >
          {ORG.founded}
        </span>

        <motion.div
          style={{ y: heroTextY, opacity: heroOpacity }}
          className="relative z-10 mx-auto max-w-5xl px-6 text-center"
        >
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="inline-block rounded-full border border-white/20 bg-white/10 px-5 py-2 text-xs font-semibold tracking-[0.3em] text-white uppercase backdrop-blur-md"
          >
            Ajmer, Rajasthan · Since {ORG.founded}
          </motion.p>
          <h1 className="mt-8 font-serif text-[14vw] leading-[0.95] font-black text-white md:text-9xl">
            <Letters text="Her future," delay={0.25} step={0.045} />
            <Letters
              text="rewritten."
              delay={0.85}
              step={0.05}
              className="block bg-gradient-to-r from-rose-400 via-amber-300 to-rose-400 bg-clip-text italic text-transparent"
            />
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-slate-300"
          >
            {ORG.fullName} stands with marginalized women and girls of rural
            Rajasthan — through education, livelihood, health and dignity.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-5"
          >
            <Magnetic>
              <a
                href="#give"
                className="group inline-flex items-center gap-2 rounded-full bg-rose-600 px-9 py-4 text-sm font-bold text-white shadow-2xl shadow-rose-600/40 transition-colors duration-200 hover:bg-rose-500"
              >
                Donate now
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="#mission"
                className="block rounded-full border border-white/25 bg-white/5 px-9 py-4 text-sm font-semibold text-white backdrop-blur transition-colors duration-200 hover:bg-white/15"
              >
                Our mission
              </a>
            </Magnetic>
          </motion.div>
        </motion.div>

        <motion.a
          href="#mission"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.1 }}
          className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2 text-white/70 transition-colors duration-200 hover:text-white"
          aria-label="Scroll to mission"
        >
          <motion.span
            animate={reduce ? {} : { y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="block"
          >
            <ArrowDown className="h-6 w-6" aria-hidden="true" />
          </motion.span>
        </motion.a>
      </section>

      {/* ───────────────────── Outlined marquee ───────────────────── */}
      <Marquee className="border-y border-white/5 bg-white/[0.015] py-6">
        <span className="flex items-center whitespace-nowrap">
          {FOCUS_AREAS.slice(0, 5).map((area) => (
            <span key={area.title} className="flex items-center">
              <span className="text-outline px-8 font-serif text-5xl font-black tracking-tight uppercase md:text-7xl">
                {area.title}
              </span>
              <Heart className="h-5 w-5 fill-rose-600 text-rose-600" aria-hidden="true" />
            </span>
          ))}
        </span>
      </Marquee>

      {/* ───────────────────── Mission ───────────────────── */}
      <section className="relative mx-auto max-w-5xl px-6 py-32 text-center md:py-44" id="mission">
        <Mandala className="pointer-events-none absolute top-1/2 left-1/2 h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 text-rose-500/8" />
        <Reveal>
          <p className="text-xs font-bold tracking-[0.35em] text-rose-400 uppercase">Our Mission</p>
        </Reveal>
        <div className="relative mt-9 space-y-3 font-serif text-3xl leading-snug font-light text-white md:text-6xl">
          {[
            'No woman left without a voice.',
            'No girl left without a classroom.',
            'No village left behind.',
          ].map((line, i) => (
            <motion.p
              key={line}
              initial={{ opacity: 0.12, y: 24, filter: 'blur(6px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: '-110px' }}
              transition={{ duration: 0.9, delay: i * 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
              className={i === 1 ? 'italic text-rose-300' : ''}
            >
              {line}
            </motion.p>
          ))}
        </div>
        <Reveal delay={0.55}>
          <p className="mx-auto mt-12 max-w-2xl leading-relaxed text-slate-400">
            For {2026 - ORG.founded} years we have worked where the need is greatest
            and the spotlight is dimmest — building self-help groups, classrooms,
            livelihoods and health systems that belong to the community itself.
          </p>
        </Reveal>
      </section>

      {/* ───────────────────── Stats ───────────────────── */}
      <section className="relative overflow-hidden border-y border-white/5 bg-white/[0.02] py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 left-1/2 h-[420px] w-[760px] -translate-x-1/2 rounded-full bg-rose-600/10 blur-[140px] animate-glow-pulse"
        />
        <div className="relative mx-auto grid max-w-7xl grid-cols-2 gap-12 px-6 text-center lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.1}>
              <p className="font-serif text-5xl font-black text-white md:text-7xl">
                <Counter to={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mx-auto mt-3 max-w-[210px] text-sm leading-relaxed text-slate-400">
                {stat.label}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ───────────────────── Pinned horizontal programs ───────────────────── */}
      <section ref={hRef} className="relative h-[340vh]" id="programs">
        <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
          <div className="mx-auto mb-10 flex w-full max-w-7xl items-end justify-between px-6">
            <div>
              <p className="text-xs font-bold tracking-[0.35em] text-rose-400 uppercase">Programs</p>
              <h2 className="mt-3 font-serif text-3xl font-black text-white md:text-5xl">
                Where the work <span className="italic text-rose-400">happens</span>
              </h2>
            </div>
            <p className="hidden text-sm text-slate-500 md:block">Scroll — the journey moves sideways</p>
          </div>

          <motion.div style={{ x: panelX }} className="flex gap-8 pl-6 md:pl-[6vw]">
            {PANEL_PROGRAMS.map((program) => (
              <article
                key={program.title}
                className="group relative h-[58vh] w-[80vw] shrink-0 overflow-hidden rounded-[2.25rem] border border-white/8 sm:w-[55vw] lg:w-[38vw]"
              >
                <img
                  src={program.img}
                  alt={program.title}
                  loading="lazy"
                  draggable="false"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <span
                  aria-hidden="true"
                  className="text-outline absolute top-6 right-7 font-serif text-8xl font-black"
                >
                  {program.n}
                </span>
                <div className="absolute right-0 bottom-0 left-0 p-8">
                  <h3 className="font-serif text-3xl font-black text-white md:text-4xl">
                    {program.title}
                  </h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-300">
                    {program.sub}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-xs font-bold tracking-[0.25em] text-rose-300 uppercase opacity-0 transition-all duration-500 group-hover:opacity-100">
                    Explore program
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                </div>
              </article>
            ))}
          </motion.div>

          <div className="mx-auto mt-10 w-full max-w-7xl px-6">
            <div className="h-px w-full bg-white/10">
              <motion.div style={{ scaleX: hProgress }} className="h-px origin-left bg-gradient-to-r from-rose-500 to-amber-400" />
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────── Parallax story ───────────────────── */}
      <section ref={storyRef} className="relative overflow-hidden py-40 md:py-56">
        <motion.div style={{ y: storyY }} className="absolute inset-[-16%]">
          <img
            src={IMG.handsTogether}
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="h-full w-full object-cover opacity-35"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#070B14] via-[#070B14]/25 to-[#070B14]" />
        <Reveal className="relative mx-auto max-w-3xl px-6 text-center">
          <Quote className="mx-auto h-10 w-10 text-amber-400" aria-hidden="true" />
          <blockquote className="mt-8 font-serif text-2xl leading-snug font-light text-white italic md:text-4xl">
            “{TESTIMONIALS[1].quote}”
          </blockquote>
          <p className="mt-9 font-bold text-white">{TESTIMONIALS[1].name}</p>
          <p className="mt-1 text-xs tracking-[0.25em] text-slate-400 uppercase">{TESTIMONIALS[1].role}</p>
        </Reveal>
      </section>

      {/* ───────────────────── Timeline ───────────────────── */}
      <section ref={timelineRef} className="mx-auto max-w-4xl px-6 py-32" id="journey">
        <Reveal className="text-center">
          <p className="text-xs font-bold tracking-[0.35em] text-rose-400 uppercase">The Journey</p>
          <h2 className="mt-3 font-serif text-3xl font-black text-white md:text-5xl">
            Three decades of <span className="italic text-rose-400">footprints</span>
          </h2>
        </Reveal>

        <div className="relative mt-20">
          <div aria-hidden="true" className="absolute top-0 bottom-0 left-[19px] w-px bg-white/10 md:left-1/2" />
          <motion.div
            aria-hidden="true"
            style={{ scaleY: tlProgress }}
            className="absolute top-0 bottom-0 left-[19px] w-px origin-top bg-gradient-to-b from-rose-500 to-amber-400 md:left-1/2"
          />
          <div className="space-y-16">
            {TIMELINE.map((item, i) => (
              <Reveal key={item.year} delay={0.05} className="relative">
                <div
                  className={`flex flex-col gap-4 pl-14 md:w-1/2 md:pl-0 ${
                    i % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:ml-auto md:pl-16'
                  }`}
                >
                  <span
                    aria-hidden="true"
                    className="absolute top-1.5 left-[11px] flex h-4 w-4 items-center justify-center md:left-1/2 md:-translate-x-1/2"
                  >
                    <span className="absolute h-4 w-4 animate-ping rounded-full bg-rose-500/40" style={{ animationDuration: '2.5s' }} />
                    <span className="absolute h-4 w-4 rounded-full bg-rose-500/30" />
                    <span className="h-2 w-2 rounded-full bg-rose-400" />
                  </span>
                  <div>
                    <p className="font-serif text-3xl font-black text-rose-400">{item.year}</p>
                    <h3 className="mt-1 text-lg font-bold text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-400">{item.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────── Donation tiers ───────────────────── */}
      <section className="border-t border-white/5 bg-white/[0.02] py-32" id="give">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold tracking-[0.35em] text-rose-400 uppercase">
              Give With Confidence
            </p>
            <h2 className="mt-3 font-serif text-3xl font-black text-white md:text-6xl">
              Your kindness, <span className="italic text-rose-400">accounted for</span>
            </h2>
            <p className="mt-6 leading-relaxed text-slate-400">
              80G tax-exempt. Audited annually. Every report public in our e-library.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-7 md:grid-cols-3">
            {TIERS.map((tier, i) => (
              <Reveal key={tier.amount} delay={i * 0.12}>
                <Tilt className="h-full" max={7}>
                  <div
                    className={`relative flex h-full flex-col rounded-[2rem] border p-10 ${
                      tier.tag
                        ? 'border-rose-500/50 bg-gradient-to-b from-rose-600/20 to-transparent shadow-[0_0_60px_rgba(225,29,72,0.15)]'
                        : 'border-white/10 bg-white/[0.03]'
                    }`}
                  >
                    {tier.tag && (
                      <span className="absolute -top-3.5 left-9 rounded-full bg-rose-600 px-4 py-1 text-xs font-black tracking-wider text-white uppercase">
                        {tier.tag}
                      </span>
                    )}
                    <p className="font-serif text-5xl font-black text-white">{tier.amount}</p>
                    <p className="mt-5 flex-1 leading-relaxed text-slate-300">{tier.impact}</p>
                    <a
                      href="#"
                      className={`mt-9 inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-sm font-bold transition-colors duration-200 cursor-pointer ${
                        tier.tag
                          ? 'bg-rose-600 text-white hover:bg-rose-500'
                          : 'border border-white/15 text-white hover:bg-white hover:text-slate-900'
                      }`}
                    >
                      Give {tier.amount}
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                  </div>
                </Tilt>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2} className="mt-14 flex flex-wrap items-center justify-center gap-x-9 gap-y-3">
            {CREDENTIALS.map((cred) => (
              <span key={cred} className="flex items-center gap-2 text-xs font-medium text-slate-500">
                <BadgeCheck className="h-3.5 w-3.5 text-rose-400" aria-hidden="true" />
                {cred}
              </span>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ───────────────────── Final CTA ───────────────────── */}
      <section className="mx-auto max-w-7xl px-6 py-28">
        <Reveal>
          <div className="relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-rose-600 via-rose-500 to-amber-500 p-12 text-center md:p-28 animate-gradient-pan">
            <Mandala className="pointer-events-none absolute -top-36 -right-36 h-[420px] w-[420px] text-white/15" />
            <Mandala className="pointer-events-none absolute -bottom-40 -left-36 h-[420px] w-[420px] text-white/10" />
            <h2 className="relative mx-auto max-w-3xl font-serif text-4xl leading-[1.05] font-black text-white md:text-7xl">
              Walk with us. The next footprint is yours.
            </h2>
            <div className="relative mt-12 flex flex-wrap items-center justify-center gap-5">
              <Magnetic>
                <a
                  href="#give"
                  className="block rounded-full bg-stone-900 px-10 py-5 text-sm font-black tracking-wider text-white uppercase shadow-2xl transition-transform duration-200 hover:scale-[1.04] cursor-pointer"
                >
                  Donate Now
                </a>
              </Magnetic>
              <Magnetic>
                <a
                  href="https://rsksindia.blog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-full border-2 border-white/50 px-10 py-[18px] text-sm font-bold text-white transition-colors duration-200 hover:bg-white/15"
                >
                  Read our stories
                </a>
              </Magnetic>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-9 text-sm text-slate-500 md:flex-row">
          <p>© 2026 {ORG.name} · {ORG.fullName} · {ORG.location}</p>
          <div className="flex items-center gap-6">
            <a href="#" className="transition-colors duration-200 hover:text-white">Privacy</a>
            <a href="#" className="transition-colors duration-200 hover:text-white">Annual Reports</a>
            <a
              href="https://rsksindia.blog"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-200 hover:text-white"
            >
              rsksindia.blog
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
