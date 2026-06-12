import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Globe, LayoutTemplate, Newspaper, Sparkles } from 'lucide-react'
import { Tilt, Mandala, Marquee, Grain } from '../components/fx'

const SAMPLES = [
  {
    n: 1,
    href: '/sample1',
    site: 'rsksindia.blog',
    title: 'Footprints of Change — Editorial',
    desc: 'A field-journal redesign: newspaper masthead, polaroid imagery, postcard subscribe, craft textures.',
    tag: 'Clean & Crafted',
    Icon: Newspaper,
    gradient: 'from-rose-500/25 via-orange-400/15 to-transparent',
    accent: 'text-rose-300',
    ring: 'group-hover:ring-rose-400/40',
  },
  {
    n: 2,
    href: '/sample2',
    site: 'rsksindia.blog',
    title: 'Footprints of Change — Immersive',
    desc: 'Mouse-spotlight hero, letter-stagger type, pinned horizontal story scroll, clip-path reveals, 3D tilt cards.',
    tag: 'Animated & Interactive',
    Icon: Sparkles,
    gradient: 'from-violet-500/25 via-rose-500/15 to-transparent',
    accent: 'text-violet-300',
    ring: 'group-hover:ring-violet-400/40',
  },
  {
    n: 3,
    href: '/sample3',
    site: 'rsksindia.ngo',
    title: 'RSKS India — Professional',
    desc: 'Trust-first NGO site with jharokha arch imagery, marigold ribbon, bento focus areas and a live donation meter.',
    tag: 'Clean & Crafted',
    Icon: LayoutTemplate,
    gradient: 'from-emerald-500/25 via-teal-400/15 to-transparent',
    accent: 'text-emerald-300',
    ring: 'group-hover:ring-emerald-400/40',
  },
  {
    n: 4,
    href: '/sample4',
    site: 'rsksindia.ngo',
    title: 'RSKS India — Immersive',
    desc: 'Cinematic hero with custom cursor, animated counters, sideways program journey, scroll timeline, magnetic buttons.',
    tag: 'Animated & Interactive',
    Icon: Globe,
    gradient: 'from-sky-500/25 via-indigo-500/15 to-transparent',
    accent: 'text-sky-300',
    ring: 'group-hover:ring-sky-400/40',
  },
]

export default function Hub() {
  useEffect(() => {
    document.title = 'RSKS India — Design Samples'
  }, [])

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 font-sans text-slate-100">
      <Grain opacity={0.04} />

      {/* Ambient background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-40 h-[480px] w-[480px] rounded-full bg-rose-600/15 blur-[120px]" />
        <div className="absolute top-1/3 -right-40 h-[420px] w-[420px] rounded-full bg-indigo-600/15 blur-[120px]" />
        <div className="absolute bottom-0 left-1/3 h-[360px] w-[360px] rounded-full bg-emerald-600/10 blur-[120px]" />
      </div>
      <Mandala className="pointer-events-none absolute -top-44 -right-44 h-[480px] w-[480px] text-rose-500/10" />
      <Mandala className="pointer-events-none absolute -bottom-48 -left-44 h-[440px] w-[440px] text-amber-500/10" />

      <main className="relative mx-auto max-w-6xl px-6 py-16 md:py-24">
        <motion.header
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-2xl"
        >
          <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-widest text-rose-300 uppercase">
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            Website Redesign Concepts
          </p>
          <h1 className="mt-6 font-serif text-5xl leading-[1.0] font-black text-white md:text-7xl">
            RSKS India
            <span className="block font-light text-slate-400 italic">design samples</span>
          </h1>
          <p className="mt-6 leading-relaxed text-slate-400">
            Four redesign concepts for <span className="text-slate-200">rsksindia.blog</span> and{' '}
            <span className="text-slate-200">rsksindia.ngo</span> — one clean &amp; crafted
            and one animated &amp; immersive for each site. Every sample opens in a new tab.
          </p>
        </motion.header>

        <div className="mt-14 grid gap-7 sm:grid-cols-2">
          {SAMPLES.map(({ n, href, site, title, desc, tag, Icon, gradient, accent, ring }, i) => (
            <motion.div
              key={n}
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.15 + i * 0.1, ease: 'easeOut' }}
            >
              <Tilt max={5} className="h-full">
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative flex h-full flex-col rounded-3xl border border-white/10 bg-white/[0.03] p-8 ring-1 ring-transparent transition-all duration-300 hover:bg-white/[0.06] ${ring} cursor-pointer`}
                >
                  <div
                    aria-hidden="true"
                    className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                  />
                  <div className="relative flex items-start justify-between">
                    <span className="font-serif text-7xl font-black text-white/10 transition-colors duration-300 group-hover:text-white/25">
                      0{n}
                    </span>
                    <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all duration-300 group-hover:rotate-45 group-hover:bg-white group-hover:text-slate-900">
                      <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
                    </span>
                  </div>
                  <div className="relative mt-8">
                    <div className={`flex items-center gap-2 text-xs font-semibold tracking-widest uppercase ${accent}`}>
                      <Icon className="h-4 w-4" aria-hidden="true" />
                      {site}
                    </div>
                    <h2 className="mt-3 font-serif text-2xl font-bold text-white">{title}</h2>
                    <p className="mt-2 text-sm leading-relaxed text-slate-400">{desc}</p>
                    <span className="mt-6 inline-block rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-slate-300">
                      {tag}
                    </span>
                  </div>
                </a>
              </Tilt>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-20 border-t border-white/10 pt-2"
        >
          <Marquee slow className="py-4 opacity-50">
            <span className="flex items-center whitespace-nowrap">
              {['Education', 'Women Empowerment', 'Livelihood', 'Health', 'Environment', 'Child Rights'].map((item) => (
                <span key={item} className="flex items-center">
                  <span className="px-7 font-display text-xs font-medium tracking-[0.3em] text-slate-500 uppercase">
                    {item}
                  </span>
                  <span className="h-1 w-1 rounded-full bg-rose-500/70" />
                </span>
              ))}
            </span>
          </Marquee>
          <p className="pb-2 text-center text-sm text-slate-600">
            Rajasthan Samgrah Kalyan Sansthan · Ajmer, Rajasthan · Serving communities since 1992
          </p>
        </motion.div>
      </main>
    </div>
  )
}
