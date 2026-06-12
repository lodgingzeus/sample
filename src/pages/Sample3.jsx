import { useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  Award,
  BadgeCheck,
  Baby,
  Briefcase,
  GraduationCap,
  HandHeart,
  Heart,
  Leaf,
  LifeBuoy,
  Mail,
  Megaphone,
  Phone,
  Quote,
  ShieldCheck,
  ShoppingBag,
  Sprout,
  Stethoscope,
  Tractor,
  Users,
} from 'lucide-react'
import { Mandala, Squiggle, Dots, Marquee, Counter } from '../components/fx'
import { ORG, STATS, FOCUS_AREAS, PROJECTS, CREDENTIALS, TESTIMONIALS, IMG, STORY_IMAGES } from '../data/rsks'

const AREA_ICONS = [Users, GraduationCap, Sprout, Stethoscope, Leaf, Tractor, Baby, LifeBuoy, Megaphone]

const GET_INVOLVED = [
  { Icon: HandHeart, title: 'Donate', blurb: '80G tax-exempt giving — online, bank transfer or GlobalGiving.' },
  { Icon: Users, title: 'Volunteer', blurb: 'Join field programs in Ajmer district and lend your skills.' },
  { Icon: Briefcase, title: 'Intern', blurb: 'Structured internships in grassroots development.' },
  { Icon: ShoppingBag, title: 'Shop Crafts', blurb: 'Rajasthani handicrafts made by women’s collectives.' },
]

export default function Sample3() {
  useEffect(() => {
    document.title = 'RSKS India — Rajasthan Samgrah Kalyan Sansthan'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-[#FDF8F0] font-sans text-stone-800">
      {/* Utility bar */}
      <div className="bg-indigo-950 text-xs text-indigo-200">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-2">
          <p className="flex items-center gap-2 truncate">
            <BadgeCheck className="h-3.5 w-3.5 shrink-0 text-amber-400" aria-hidden="true" />
            <span className="truncate">
              UN ECOSOC Special Consultative Status · FCRA Certified · ISO 9001:2008
            </span>
          </p>
          <div className="hidden items-center gap-5 sm:flex">
            <a href={`mailto:${ORG.email}`} className="flex items-center gap-1.5 transition-colors duration-200 hover:text-white">
              <Mail className="h-3.5 w-3.5" aria-hidden="true" />
              {ORG.email}
            </a>
            <a href="tel:+911452787000" className="flex items-center gap-1.5 transition-colors duration-200 hover:text-white">
              <Phone className="h-3.5 w-3.5" aria-hidden="true" />
              {ORG.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-stone-200 bg-[#FDF8F0]/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3.5">
          <a href="#" className="flex items-center gap-3">
            <span className="relative flex h-11 w-11 items-center justify-center rounded-full bg-rose-700 text-white">
              <Mandala spin={false} className="absolute inset-0 h-full w-full text-white/30" />
              <Heart className="relative h-5 w-5" aria-hidden="true" />
            </span>
            <span>
              <span className="block font-serif text-xl leading-tight font-black tracking-tight text-stone-900">
                RSKS India
              </span>
              <span className="block text-[10px] leading-tight tracking-[0.14em] text-stone-500 uppercase">
                Rajasthan Samgrah Kalyan Sansthan
              </span>
            </span>
          </a>
          <nav className="hidden items-center gap-7 text-sm font-semibold text-stone-600 lg:flex">
            {['About', 'Focus Areas', 'Projects', 'Get Involved'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s/g, '-')}`}
                className="transition-colors duration-200 hover:text-rose-700"
              >
                {item}
              </a>
            ))}
          </nav>
          <a
            href="#donate"
            className="rounded-full bg-rose-700 px-6 py-2.5 text-sm font-bold text-white shadow-md shadow-rose-700/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-rose-800"
          >
            Donate Now
          </a>
        </div>
      </header>

      {/* ───────────────────── Hero with jharokha arches ───────────────────── */}
      <section className="relative overflow-hidden">
        <Dots className="inset-0" color="rgba(190,18,60,0.07)" size={22} />
        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 py-16 md:py-24 lg:grid-cols-2">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-white px-4 py-1.5 text-xs font-bold tracking-[0.2em] text-rose-700 uppercase">
              <Award className="h-3.5 w-3.5" aria-hidden="true" />
              Grassroots NGO · Est. {ORG.founded}
            </p>
            <h1 className="mt-7 font-serif text-4xl leading-[1.04] font-black text-stone-900 md:text-6xl">
              Empowering{' '}
              <span className="relative inline-block text-rose-700">
                women &amp; girls
                <Squiggle className="absolute -bottom-2 left-0 w-full text-amber-500" />
              </span>{' '}
              at the foothills of the Aravalis
            </h1>
            <p className="mt-7 max-w-lg text-lg leading-relaxed text-stone-600">
              For over three decades, {ORG.fullName} has worked hand-in-hand with
              marginalized communities in rural Rajasthan — through education,
              livelihoods, health and dignity.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#donate"
                className="group inline-flex items-center gap-2 rounded-full bg-rose-700 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-rose-700/25 transition-all duration-200 hover:-translate-y-0.5 hover:bg-rose-800"
              >
                Support our work
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
              </a>
              <a
                href="#focus-areas"
                className="rounded-full border-2 border-stone-900 px-8 py-[14px] text-sm font-bold text-stone-900 transition-all duration-200 hover:bg-stone-900 hover:text-[#FDF8F0]"
              >
                Explore programs
              </a>
            </div>
            <div className="mt-9 flex items-center gap-3 text-sm text-stone-500">
              <ShieldCheck className="h-5 w-5 text-emerald-700" aria-hidden="true" />
              Donations are 80G tax-exempt · Top-rated on GlobalGiving
            </div>
          </div>

          {/* Arch composition */}
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <Mandala className="pointer-events-none absolute -top-14 -right-10 h-56 w-56 text-amber-500/30" />
            <div className="relative grid grid-cols-5 items-end gap-4">
              <div className="col-span-3">
                <img
                  src={IMG.heroCommunity}
                  alt="Community walking together through fields in rural Rajasthan"
                  className="aspect-[3/4.2] w-full rounded-t-full border-[6px] border-white object-cover shadow-2xl"
                />
              </div>
              <div className="col-span-2 space-y-4">
                <img
                  src={IMG.childSmile}
                  alt="A smiling child supported by RSKS programs"
                  loading="lazy"
                  className="aspect-square w-full rounded-t-full border-[6px] border-white object-cover shadow-xl"
                />
                <div className="rounded-2xl border-2 border-stone-900 bg-amber-400 p-5 shadow-[6px_6px_0px_rgba(28,25,23,1)]">
                  <p className="font-serif text-4xl font-black text-stone-900">
                    <Counter to={33} suffix="+" />
                  </p>
                  <p className="mt-1 text-xs leading-snug font-bold tracking-wide text-stone-800 uppercase">
                    Years of grassroots service
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-5 left-6 flex items-center gap-2 rounded-full border border-stone-200 bg-white px-5 py-2.5 shadow-lg">
              <Award className="h-4 w-4 text-rose-700" aria-hidden="true" />
              <span className="text-xs font-bold text-stone-700">UN ECOSOC Consultative Status</span>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────── Marigold ribbon ───────────────────── */}
      <Marquee slow className="-rotate-[0.6deg] border-y-2 border-stone-900 bg-amber-400 py-3">
        {FOCUS_AREAS.map((area) => (
          <span key={area.title} className="flex items-center whitespace-nowrap">
            <span className="px-7 text-sm font-black tracking-[0.22em] text-stone-900 uppercase">
              {area.title}
            </span>
            <Heart className="h-3.5 w-3.5 fill-rose-700 text-rose-700" aria-hidden="true" />
          </span>
        ))}
      </Marquee>

      {/* ───────────────────── Stats ───────────────────── */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="grid grid-cols-2 divide-stone-300 lg:grid-cols-4 lg:divide-x">
          {STATS.map((stat) => (
            <div key={stat.label} className="px-6 py-4 text-center">
              <p className="font-serif text-5xl font-black text-rose-700 md:text-6xl">
                <Counter to={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mx-auto mt-2 max-w-[180px] text-sm text-stone-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ───────────────────── Focus areas — bento ───────────────────── */}
      <section className="relative overflow-hidden bg-indigo-950 py-20 md:py-24" id="focus-areas">
        <Dots className="inset-0" color="rgba(255,255,255,0.06)" size={20} />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-xs font-bold tracking-[0.3em] text-amber-400 uppercase">
                Focus Areas
              </p>
              <h2 className="mt-3 font-serif text-3xl font-black text-white md:text-5xl">
                Nine ways we stand with communities
              </h2>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-indigo-200">
              Holistic, interconnected programs — because real change never happens in isolation.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {/* Big featured tile */}
            <a
              href="#"
              className="group relative overflow-hidden rounded-3xl sm:col-span-2 lg:row-span-2 cursor-pointer"
            >
              <img
                src={IMG.workshop}
                alt="Women's self-help group workshop"
                loading="lazy"
                className="h-full min-h-[340px] w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/95 via-indigo-950/30 to-transparent" />
              <div className="absolute right-0 bottom-0 left-0 p-8">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-400 text-stone-900">
                  <Users className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-serif text-2xl font-black text-white md:text-3xl">
                  {FOCUS_AREAS[0].title}
                </h3>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-indigo-100">
                  {FOCUS_AREAS[0].blurb}
                </p>
              </div>
            </a>

            {/* Remaining tiles */}
            {FOCUS_AREAS.slice(1).map((area, i) => {
              const Icon = AREA_ICONS[i + 1]
              return (
                <a
                  key={area.title}
                  href="#"
                  className="group rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/50 hover:bg-white/[0.08] cursor-pointer"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-amber-400 transition-colors duration-300 group-hover:bg-amber-400 group-hover:text-stone-900">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 font-serif text-lg font-bold text-white">{area.title}</h3>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-indigo-200">{area.blurb}</p>
                </a>
              )
            })}
          </div>
        </div>
      </section>

      {/* ───────────────────── About ───────────────────── */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28" id="about">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div className="relative mx-auto w-full max-w-md">
            <Mandala className="pointer-events-none absolute -bottom-12 -left-12 h-52 w-52 text-rose-700/20" />
            <img
              src={IMG.sproutHands}
              alt="Hands holding a young sapling"
              loading="lazy"
              className="relative aspect-[4/5] w-full rounded-t-full border-[6px] border-white object-cover shadow-2xl"
            />
            <figcaption className="absolute -right-4 bottom-10 rotate-2 border-2 border-stone-900 bg-white px-5 py-3 font-serif text-sm italic shadow-[5px_5px_0px_rgba(28,25,23,1)]">
              “Growth, planted by the community itself.”
            </figcaption>
          </div>
          <div>
            <p className="flex items-center gap-3 text-xs font-bold tracking-[0.3em] text-rose-700 uppercase">
              <span className="h-px w-10 bg-rose-700" aria-hidden="true" />
              Who We Are
            </p>
            <h2 className="mt-4 font-serif text-3xl leading-tight font-black text-stone-900 md:text-5xl">
              A pioneer organization for marginalized women &amp; girls
            </h2>
            <p className="mt-6 leading-relaxed text-stone-600">
              Founded in {ORG.founded} in Ajmer district, {ORG.name} began as a small
              circle of community workers and has grown into a UN-recognized
              institution — without ever leaving the village lanes where it started.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                'Community-led: programs designed with the people they serve',
                'Transparent: audited financials and public annual reports',
                'Sustainable: skills and institutions that outlast any single project',
              ].map((point) => (
                <li key={point} className="flex items-start gap-3 text-stone-700">
                  <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-rose-700" aria-hidden="true" />
                  <span className="text-sm leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 font-serif text-lg text-stone-500 italic">— Team RSKS, Ajmer</p>
          </div>
        </div>
      </section>

      {/* ───────────────────── Projects ───────────────────── */}
      <section className="border-y border-stone-200 bg-[#F6EEDF] py-20 md:py-24" id="projects">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-bold tracking-[0.3em] text-rose-700 uppercase">
                Flagship Projects
              </p>
              <h2 className="mt-3 font-serif text-3xl font-black text-stone-900 md:text-5xl">
                Where your support goes
              </h2>
            </div>
            <a
              href="#"
              className="group inline-flex items-center gap-2 border-b-2 border-stone-900 pb-1 text-sm font-bold tracking-wider text-stone-900 uppercase transition-colors duration-200 hover:border-rose-700 hover:text-rose-700"
            >
              All projects
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
            </a>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {PROJECTS.map((project, i) => (
              <a
                key={project.title}
                href="#"
                className="group block cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-t-[140px] border-[6px] border-white shadow-xl transition-transform duration-300 group-hover:-translate-y-2">
                  <img
                    src={STORY_IMAGES[i]}
                    alt={project.title}
                    loading="lazy"
                    className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                  />
                  <span className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full border border-stone-900 bg-amber-400 px-4 py-1 text-[11px] font-black tracking-[0.18em] whitespace-nowrap text-stone-900 uppercase">
                    {project.category}
                  </span>
                </div>
                <div className="mt-6 text-center">
                  <h3 className="font-serif text-2xl font-bold text-stone-900 transition-colors duration-200 group-hover:text-rose-700">
                    {project.title}
                  </h3>
                  <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-stone-600">
                    {project.blurb}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────── Get involved ───────────────────── */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-24" id="get-involved">
        <div className="text-center">
          <p className="text-xs font-bold tracking-[0.3em] text-rose-700 uppercase">Get Involved</p>
          <h2 className="mt-3 font-serif text-3xl font-black text-stone-900 md:text-5xl">
            Four ways to stand with us
          </h2>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {GET_INVOLVED.map(({ Icon, title, blurb }) => (
            <a
              key={title}
              href="#"
              className="group border-2 border-stone-900 bg-white p-8 text-center shadow-[7px_7px_0px_rgba(28,25,23,1)] transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[11px_11px_0px_rgba(190,18,60,1)] cursor-pointer"
            >
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border-2 border-stone-900 bg-amber-400 text-stone-900 transition-colors duration-300 group-hover:bg-rose-700 group-hover:text-white">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-serif text-xl font-bold text-stone-900">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-600">{blurb}</p>
            </a>
          ))}
        </div>
      </section>

      {/* ───────────────────── Quote ───────────────────── */}
      <section className="relative mx-auto max-w-4xl overflow-hidden px-6 py-16 text-center md:py-20">
        <Mandala className="pointer-events-none absolute top-1/2 left-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 text-rose-700/10" />
        <Quote className="mx-auto h-9 w-9 text-amber-500" aria-hidden="true" />
        <blockquote className="relative mt-6 font-serif text-2xl leading-snug font-light text-stone-800 italic md:text-4xl">
          “{TESTIMONIALS[1].quote}”
        </blockquote>
        <p className="mt-7 font-bold text-stone-900">{TESTIMONIALS[1].name}</p>
        <p className="text-xs tracking-[0.2em] text-stone-500 uppercase">{TESTIMONIALS[1].role}</p>
      </section>

      {/* ───────────────────── Donate CTA ───────────────────── */}
      <section className="mx-auto max-w-7xl px-6 pb-24" id="donate">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-indigo-950 px-8 py-14 md:px-16 md:py-18">
          <Dots className="inset-0" color="rgba(251,191,36,0.12)" size={22} />
          <Mandala className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 text-amber-400/15" />
          <div className="relative grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h2 className="font-serif text-3xl leading-tight font-black text-white md:text-5xl">
                ₹1,500 keeps a girl in Pathshala for a month
              </h2>
              <p className="mt-5 max-w-lg leading-relaxed text-indigo-200">
                Every rupee is accounted for in our audited public reports. Give once
                or monthly — online, by bank transfer, or through GlobalGiving.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#"
                  className="rounded-full bg-amber-400 px-9 py-4 text-sm font-black tracking-wide text-stone-900 uppercase shadow-xl transition-transform duration-200 hover:scale-[1.04] cursor-pointer"
                >
                  Donate Securely
                </a>
                <a
                  href="#"
                  className="rounded-full border border-white/25 px-9 py-4 text-sm font-bold text-white transition-colors duration-200 hover:bg-white/10"
                >
                  Sponsor monthly
                </a>
              </div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-8 backdrop-blur">
              <div className="flex items-end justify-between">
                <p className="text-sm font-semibold text-indigo-200">Raised this year</p>
                <p className="font-serif text-3xl font-black text-amber-400">₹68.4L</p>
              </div>
              <div className="mt-4 h-3 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '72%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                  className="h-full rounded-full bg-gradient-to-r from-amber-400 to-rose-500"
                />
              </div>
              <p className="mt-3 text-xs text-indigo-300">72% of the ₹95L annual program goal</p>
              <div className="mt-6 grid grid-cols-3 gap-3">
                {['₹1,500', '₹5,000', '₹12,000'].map((amt, i) => (
                  <button
                    key={amt}
                    type="button"
                    className={`rounded-xl border py-3 text-sm font-bold transition-colors duration-200 cursor-pointer ${
                      i === 0
                        ? 'border-amber-400 bg-amber-400 text-stone-900'
                        : 'border-white/20 text-white hover:border-amber-400 hover:text-amber-400'
                    }`}
                  >
                    {amt}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────── Credentials ───────────────────── */}
      <section className="border-t border-stone-200 py-10">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-4 px-6">
          {CREDENTIALS.map((cred) => (
            <span key={cred} className="flex items-center gap-2 text-sm font-semibold text-stone-500">
              <BadgeCheck className="h-4 w-4 text-rose-700" aria-hidden="true" />
              {cred}
            </span>
          ))}
        </div>
      </section>

      {/* ───────────────────── Footer ───────────────────── */}
      <footer className="bg-indigo-950 text-indigo-200">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-rose-700 text-white">
                <Heart className="h-4 w-4" aria-hidden="true" />
              </span>
              <span className="font-serif text-xl font-black text-white">RSKS India</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed">
              {ORG.fullName} — a grassroots non-profit serving marginalized women,
              girls and children across Rajasthan since {ORG.founded}.
            </p>
          </div>
          <div>
            <h3 className="text-xs font-black tracking-[0.25em] text-amber-400 uppercase">Explore</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {['About Us', 'Focus Areas', 'Projects', 'Gallery', 'E-Library'].map((link) => (
                <li key={link}>
                  <a href="#" className="transition-colors duration-200 hover:text-white">{link}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-black tracking-[0.25em] text-amber-400 uppercase">Contact</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>{ORG.location}</li>
              <li>
                <a href={`mailto:${ORG.email}`} className="transition-colors duration-200 hover:text-white">
                  {ORG.email}
                </a>
              </li>
              <li>
                <a href="tel:+911452787000" className="transition-colors duration-200 hover:text-white">
                  {ORG.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10">
          <p className="mx-auto max-w-7xl px-6 py-5 text-xs text-indigo-400">
            © 2026 {ORG.name}. Registered under Societies Registration Act 1958 · FCRA Certified · 80G Tax Exemption
          </p>
        </div>
      </footer>
    </div>
  )
}
