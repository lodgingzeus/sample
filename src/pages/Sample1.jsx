import { useEffect } from 'react'
import {
  ArrowRight,
  ArrowUpRight,
  Clock,
  Download,
  FileText,
  Heart,
  Quote,
  Send,
} from 'lucide-react'
import { Mandala, Squiggle, Marquee } from '../components/fx'
import { ORG, STORIES, STORY_IMAGES, TESTIMONIALS, QUOTES, IMG } from '../data/rsks'

const TICKER = ['Education', 'Women Empowerment', 'Livelihood', 'Health', 'Digital Safety', 'Life Skills', 'Child Rights', 'Environment']

const LIBRARY = [
  { title: 'Annual Report 2025', meta: 'PDF · 4.2 MB' },
  { title: 'Audited Financial Statement', meta: 'PDF · 1.8 MB' },
  { title: 'Impact Study — Pathshaala', meta: 'PDF · 2.6 MB' },
]

const TILTS = ['-rotate-1', 'rotate-1', '-rotate-[0.5deg]', 'rotate-[0.75deg]', '-rotate-1']

export default function Sample1() {
  useEffect(() => {
    document.title = 'Footprints of Change — RSKS India Blog'
    window.scrollTo(0, 0)
  }, [])

  const [featured, ...rest] = STORIES

  return (
    <div className="min-h-screen bg-[#FAF5EC] font-sans text-stone-900">
      {/* ───────────────────────── Masthead ───────────────────────── */}
      <header className="border-b-4 border-double border-stone-900">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex items-center justify-between border-b border-stone-300 py-2.5 text-[11px] font-medium tracking-[0.18em] text-stone-500 uppercase">
            <span>Vol. 33 · Ajmer, Rajasthan</span>
            <span className="hidden sm:block">A field journal by {ORG.fullName}</span>
            <span>Est. {ORG.founded}</span>
          </div>
          <div className="relative py-10 text-center md:py-14">
            <Mandala
              spin={false}
              className="pointer-events-none absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 text-rose-600/10 md:h-80 md:w-80"
            />
            <p className="text-xs font-semibold tracking-[0.35em] text-rose-700 uppercase">
              Dear Reader, Namaste!
            </p>
            <h1 className="relative mt-4 font-serif text-5xl leading-[0.95] font-black tracking-tight text-stone-900 md:text-8xl">
              Footprints
              <span className="block font-light italic">
                of <span className="relative inline-block text-rose-600">
                  Change
                  <Squiggle className="absolute -bottom-2 left-0 w-full text-amber-500 md:-bottom-3" />
                </span>
              </span>
            </h1>
            <p className="mt-6 font-serif text-base text-stone-500 italic md:text-lg">
              बदलाव के पदचिन्ह — stories walked, not written
            </p>
          </div>
        </div>

        {/* Sticky slim nav */}
        <nav className="sticky top-0 z-50 border-t border-stone-900 bg-[#FAF5EC]/95 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-rose-600 text-white">
                <Heart className="h-3.5 w-3.5" aria-hidden="true" />
              </span>
              <span className="font-serif text-sm font-bold">RSKS India</span>
            </div>
            <div className="hidden items-center gap-7 text-[13px] font-semibold tracking-wide text-stone-600 uppercase md:flex">
              {['Dispatches', 'Library', 'Voices', 'Subscribe'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="transition-colors duration-200 hover:text-rose-700"
                >
                  {item}
                </a>
              ))}
            </div>
            <a
              href="https://rsksindia.ngo"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-stone-900 px-5 py-2 text-xs font-bold tracking-wider text-[#FAF5EC] uppercase transition-colors duration-200 hover:bg-rose-700"
            >
              Donate
            </a>
          </div>
        </nav>
      </header>

      {/* ───────────────────────── Ticker ───────────────────────── */}
      <Marquee slow className="border-b border-stone-300 bg-amber-400/90 py-2.5">
        {TICKER.map((item) => (
          <span key={item} className="flex items-center whitespace-nowrap">
            <span className="px-6 text-xs font-bold tracking-[0.25em] text-stone-900 uppercase">
              {item}
            </span>
            <Heart className="h-3 w-3 fill-stone-900 text-stone-900" aria-hidden="true" />
          </span>
        ))}
      </Marquee>

      {/* ───────────────────────── Featured dispatch ───────────────────────── */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24" id="dispatches">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <figure className="group relative -rotate-1 cursor-pointer transition-transform duration-300 hover:rotate-0">
              <div className="border-[10px] border-white bg-white pb-14 shadow-[8px_10px_30px_rgba(28,25,23,0.18)]">
                <div className="overflow-hidden">
                  <img
                    src={STORY_IMAGES[0]}
                    alt="Girls learning together in a Pathshala classroom"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>
                <figcaption className="absolute bottom-4 left-0 w-full text-center font-serif text-sm text-stone-500 italic">
                  Pathshala centre, Ajmer district — morning lessons
                </figcaption>
              </div>
              <span
                aria-hidden="true"
                className="absolute -top-3 left-1/2 h-7 w-24 -translate-x-1/2 rotate-2 bg-amber-200/80 shadow-sm"
              />
            </figure>
          </div>
          <div className="lg:col-span-5">
            <p className="flex items-center gap-3 text-xs font-bold tracking-[0.3em] text-rose-700 uppercase">
              <span className="h-px w-10 bg-rose-700" aria-hidden="true" />
              Featured Dispatch
            </p>
            <h2 className="mt-5 font-serif text-3xl leading-[1.08] font-bold text-stone-900 md:text-5xl">
              {featured.title}
            </h2>
            <p className="mt-6 leading-relaxed text-stone-600 first-letter:float-left first-letter:mr-3 first-letter:font-serif first-letter:text-6xl first-letter:leading-[0.75] first-letter:font-black first-letter:text-rose-600">
              {featured.excerpt} Far from the highway, past the last bus stop, a
              blackboard leans against a neem tree — and forty girls lean toward it.
            </p>
            <div className="mt-6 flex items-center gap-4 text-xs font-semibold tracking-wider text-stone-500 uppercase">
              <span>{featured.date}</span>
              <span aria-hidden="true">·</span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                {featured.readTime}
              </span>
            </div>
            <a
              href="#"
              className="group mt-8 inline-flex items-center gap-3 border-b-2 border-stone-900 pb-1 text-sm font-bold tracking-wider uppercase transition-colors duration-200 hover:border-rose-600 hover:text-rose-700"
            >
              Read the full dispatch
              <ArrowRight
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1.5"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>
      </section>

      {/* ───────────────────────── Story grid ───────────────────────── */}
      <section className="border-y border-stone-300 bg-[#F4EDE0] py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-serif text-3xl font-bold md:text-5xl">
              The <span className="italic text-rose-600">Dispatches</span>
            </h2>
            <p className="text-sm text-stone-500">Fresh from the field, every fortnight</p>
          </div>

          <div className="mt-12 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((story, i) => (
              <a key={story.title} href="#" className="group block cursor-pointer">
                <div
                  className={`relative ${TILTS[i % TILTS.length]} transition-transform duration-300 group-hover:rotate-0`}
                >
                  <div className="overflow-hidden rounded-t-[160px] border border-stone-900/10 bg-white p-2 pb-0 shadow-[5px_6px_0px_rgba(28,25,23,0.9)] transition-shadow duration-300 group-hover:shadow-[7px_9px_0px_rgba(225,29,72,0.9)]">
                    <img
                      src={STORY_IMAGES[i + 1]}
                      alt={story.title}
                      loading="lazy"
                      className="aspect-[4/5] w-full rounded-t-[150px] object-cover grayscale-[35%] transition-all duration-700 group-hover:scale-[1.02] group-hover:grayscale-0"
                    />
                  </div>
                  <span className="absolute -top-2 -right-2 flex h-12 w-12 items-center justify-center rounded-full bg-stone-900 font-serif text-sm font-bold text-amber-300 shadow-md">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <div className="mt-6 px-1">
                  <p className="text-[11px] font-bold tracking-[0.28em] text-rose-700 uppercase">
                    {story.category} · {story.date}
                  </p>
                  <h3 className="mt-2 font-serif text-2xl leading-snug font-bold text-stone-900 transition-colors duration-200 group-hover:text-rose-700">
                    {story.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-stone-600">
                    {story.excerpt}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────── Pull quote ───────────────────────── */}
      <section className="relative overflow-hidden bg-stone-900 py-24 text-center md:py-32">
        <Mandala className="pointer-events-none absolute top-1/2 left-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 text-amber-400/15" />
        <div className="relative mx-auto max-w-3xl px-6">
          <span className="font-serif text-8xl leading-none text-rose-500" aria-hidden="true">
            “
          </span>
          <blockquote className="-mt-8 font-serif text-3xl leading-snug font-light text-[#FAF5EC] italic md:text-5xl">
            {QUOTES[0].text}
          </blockquote>
          <p className="mt-8 text-xs font-bold tracking-[0.35em] text-amber-400 uppercase">
            — {QUOTES[0].author}
          </p>
        </div>
      </section>

      {/* ───────────────────────── Library ───────────────────────── */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-24" id="library">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="flex items-center gap-3 text-xs font-bold tracking-[0.3em] text-rose-700 uppercase">
              <span className="h-px w-10 bg-rose-700" aria-hidden="true" />
              Digital Library
            </p>
            <h2 className="mt-4 font-serif text-3xl font-bold md:text-4xl">
              Transparency,
              <span className="block italic text-stone-500">in writing.</span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-stone-600">
              Every rupee, every report, every audit — public, downloadable, and
              filed with care since {ORG.founded}.
            </p>
          </div>
          <div className="space-y-4 lg:col-span-8">
            {LIBRARY.map((doc, i) => (
              <a
                key={doc.title}
                href="#"
                className="group relative flex items-center gap-5 border border-stone-900 bg-white p-5 pl-6 shadow-[4px_4px_0px_rgba(28,25,23,1)] transition-all duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[7px_7px_0px_rgba(225,29,72,1)] cursor-pointer"
              >
                <span
                  aria-hidden="true"
                  className="absolute -top-px left-8 h-2.5 w-16 rounded-b-md bg-amber-400"
                />
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-stone-900 bg-[#FAF5EC] font-serif text-sm font-bold">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <FileText className="h-5 w-5 shrink-0 text-stone-400" aria-hidden="true" />
                <div className="flex-1">
                  <h3 className="font-serif text-lg font-bold text-stone-900">{doc.title}</h3>
                  <p className="text-xs tracking-wider text-stone-500 uppercase">{doc.meta}</p>
                </div>
                <Download
                  className="h-5 w-5 text-stone-400 transition-all duration-200 group-hover:translate-y-0.5 group-hover:text-rose-600"
                  aria-hidden="true"
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────── Voices ───────────────────────── */}
      <section className="border-t border-stone-300 bg-[#F4EDE0] py-20 md:py-24" id="voices">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center font-serif text-3xl font-bold md:text-5xl">
            Voices from the <span className="italic text-rose-600">field</span>
          </h2>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <figure
                key={t.name}
                className={`relative flex flex-col border border-stone-900 bg-white p-7 pt-9 shadow-[6px_6px_0px_rgba(28,25,23,1)] ${TILTS[i]} transition-transform duration-300 hover:rotate-0`}
              >
                <span
                  aria-hidden="true"
                  className="absolute -top-3 left-1/2 h-6 w-6 -translate-x-1/2 rounded-full border-2 border-stone-900 bg-rose-500 shadow-sm"
                />
                <Quote className="h-6 w-6 text-amber-500" aria-hidden="true" />
                <blockquote className="mt-4 flex-1 font-serif text-[15px] leading-relaxed text-stone-700 italic">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 border-t border-dashed border-stone-300 pt-4">
                  <p className="font-bold text-stone-900">{t.name}</p>
                  <p className="text-xs tracking-wider text-stone-500 uppercase">{t.role}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────── Postcard subscribe ───────────────────────── */}
      <section className="mx-auto max-w-5xl px-6 py-20 md:py-28" id="subscribe">
        <div className="relative rotate-[0.5deg] border-2 border-stone-900 bg-white p-3 shadow-[10px_12px_0px_rgba(28,25,23,1)] transition-transform duration-300 hover:rotate-0">
          <div className="grid border-2 border-dashed border-stone-300 md:grid-cols-2">
            <div className="relative overflow-hidden">
              <img
                src={IMG.handsTogether}
                alt="Hands joined together in solidarity"
                loading="lazy"
                className="h-56 w-full object-cover md:h-full"
              />
              <span className="absolute bottom-3 left-3 bg-stone-900/80 px-3 py-1 font-serif text-xs text-amber-300 italic backdrop-blur">
                with love, from Ajmer
              </span>
            </div>
            <div className="relative p-8 md:p-10">
              <span
                aria-hidden="true"
                className="absolute top-6 right-6 flex h-16 w-14 items-center justify-center border-2 border-dashed border-rose-300 bg-rose-50"
              >
                <Heart className="h-6 w-6 fill-rose-600 text-rose-600" />
              </span>
              <p className="text-xs font-bold tracking-[0.3em] text-rose-700 uppercase">
                Post Card
              </p>
              <h2 className="mt-3 max-w-[14ch] font-serif text-3xl leading-tight font-bold md:text-4xl">
                Letters from the field, monthly.
              </h2>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-stone-600">
                One postcard-length email. New dispatches, milestones, and the
                occasional photograph worth a thousand words.
              </p>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="mt-8 max-w-sm"
              >
                <label
                  htmlFor="s1-email"
                  className="text-[11px] font-bold tracking-[0.2em] text-stone-500 uppercase"
                >
                  Deliver to
                </label>
                <div className="mt-2 flex items-end gap-3 border-b-2 border-stone-900 pb-2">
                  <input
                    id="s1-email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="w-full bg-transparent font-serif text-lg text-stone-900 italic placeholder-stone-400 outline-none"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe"
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-rose-600 text-white transition-colors duration-200 hover:bg-stone-900 cursor-pointer"
                  >
                    <Send className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────── Colophon footer ───────────────────────── */}
      <footer className="border-t-4 border-double border-stone-900 bg-[#FAF5EC]">
        <div className="mx-auto max-w-6xl px-6 py-10 text-center">
          <p className="font-serif text-2xl font-black">Footprints of Change</p>
          <p className="mt-2 text-xs tracking-[0.25em] text-stone-500 uppercase">
            Published by {ORG.fullName} · {ORG.location}
          </p>
          <div className="mt-6 flex items-center justify-center gap-8 text-xs font-semibold tracking-wider text-stone-600 uppercase">
            <a href="#" className="transition-colors duration-200 hover:text-rose-700">Privacy</a>
            <a href="#" className="transition-colors duration-200 hover:text-rose-700">Contact</a>
            <a
              href="https://rsksindia.ngo"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-200 hover:text-rose-700"
            >
              rsksindia.ngo
            </a>
          </div>
          <p className="mt-8 border-t border-stone-300 pt-5 text-[11px] text-stone-400">
            © 2026 {ORG.name} · Set in Fraunces &amp; Inter · Printed on recycled pixels
          </p>
        </div>
      </footer>
    </div>
  )
}
