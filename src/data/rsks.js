// Shared content for all RSKS India samples.
// Source: rsksindia.ngo + rsksindia.blog (impact figures are illustrative placeholders).

export const ORG = {
  name: 'RSKS India',
  fullName: 'Rajasthan Samgrah Kalyan Sansthan',
  founded: 1992,
  location: 'Ajmer, Rajasthan, India',
  tagline: 'Empowering marginalized women & girls across rural Rajasthan since 1992.',
  email: 'info@rsksindia.ngo',
  phone: '+91 145 2787 000',
}

export const CREDENTIALS = [
  'UN ECOSOC Special Consultative Status (2015)',
  'FCRA Certified (2010)',
  'ISO 9001:2008 Certified',
  'Top-Rated NGO — GlobalGiving',
  '80G Tax Exemption',
  'Registered Society, Act 1958',
]

export const STATS = [
  { value: 33, suffix: '+', label: 'Years of grassroots service' },
  { value: 52000, suffix: '+', label: 'Lives touched across Rajasthan' },
  { value: 1400, suffix: '+', label: 'Women in self-help groups' },
  { value: 120, suffix: '+', label: 'Villages reached' },
]

export const FOCUS_AREAS = [
  { title: 'Women Empowerment', blurb: 'Self-help groups, leadership training and campaigns to stop violence against women.' },
  { title: 'Girls’ Education', blurb: 'Pathshaala learning centres bringing classrooms to girls who never had one.' },
  { title: 'Sustainable Livelihood', blurb: 'Vocational training, micro-enterprise and traditional Rajasthani craft revival.' },
  { title: 'Health & Safe Motherhood', blurb: 'Health camps, maternal care awareness and HIV/AIDS prevention programs.' },
  { title: 'Environment & Sanitation', blurb: 'Clean water, sanitation drives and green awareness in rural communities.' },
  { title: 'Agriculture & Livestock', blurb: 'Better farming practices and livestock support for smallholder families.' },
  { title: 'Child Rights & Welfare', blurb: 'Child labour prevention, protection and pathways back into school.' },
  { title: 'Disaster Management', blurb: 'Rapid relief and rebuilding, from drought response to COVID-19 support.' },
  { title: 'Campaign & Advocacy', blurb: 'Grassroots voices amplified into policy through sustained advocacy.' },
]

export const PROJECTS = [
  {
    title: 'Pathshaala Education Support',
    category: 'Education',
    blurb: 'Open-air learning centres serving rural girls who lack access to formal schooling, with books, mentoring and a path into mainstream education.',
  },
  {
    title: 'Stop Violence Against Women',
    category: 'Advocacy',
    blurb: 'Community campaigns, legal-aid linkages and safe spaces that confront gender violence at its roots.',
  },
  {
    title: 'Sustainable Livelihood Initiative',
    category: 'Livelihood',
    blurb: 'Garment-making vocational schools and craft collectives turning skills into steady incomes for rural women.',
  },
]

export const STORIES = [
  {
    title: 'Pathshala: A Classroom Beyond Walls',
    category: 'Education',
    date: 'May 28, 2026',
    readTime: '5 min read',
    excerpt: 'In villages where the nearest school is hours away, Pathshala centres bring blackboards, books and belief to girls learning to read for the first time.',
  },
  {
    title: 'Threads of Independence',
    category: 'Livelihood',
    date: 'May 14, 2026',
    readTime: '4 min read',
    excerpt: 'Inside the Advanced Garment Making Vocational School, sewing machines hum with something bigger than fabric — financial freedom.',
  },
  {
    title: 'Safe Clicks: Cyber Awareness for Women',
    category: 'Digital Safety',
    date: 'Apr 30, 2026',
    readTime: '6 min read',
    excerpt: 'As smartphones reach slum communities, RSKS workshops teach women and girls to spot online fraud before it finds them.',
  },
  {
    title: 'Khelo India: SHG Women Take the Field',
    category: 'Empowerment',
    date: 'Apr 18, 2026',
    readTime: '3 min read',
    excerpt: 'Self-help group members swapped ledgers for jerseys at a sports day proving confidence is built on and off the field.',
  },
  {
    title: 'A Health Day in the Villages',
    category: 'Health',
    date: 'Apr 2, 2026',
    readTime: '4 min read',
    excerpt: 'Free check-ups, nutrition talks and safe-motherhood counselling — one day that brings the clinic to communities that have none.',
  },
  {
    title: 'Games That Build Confidence',
    category: 'Life Skills',
    date: 'Mar 21, 2026',
    readTime: '3 min read',
    excerpt: 'Through play-based life-skills sessions, adolescent girls practise decision-making, teamwork and speaking up.',
  },
]

export const TESTIMONIALS = [
  {
    quote: 'My internship with RSKS India changed how I understand development. The team works shoulder-to-shoulder with the community, never above it.',
    name: 'Ananya Sharma',
    role: 'Field Intern, Delhi University',
  },
  {
    quote: 'I joined a self-help group with nothing but doubt. Today I run a tailoring unit and my daughter is in school. RSKS walked every step with us.',
    name: 'Meera Devi',
    role: 'SHG Member, Ajmer District',
  },
  {
    quote: 'Their transparency and grassroots reach is why we have partnered with RSKS for years. Donations translate visibly into impact.',
    name: 'GlobalGiving Partner',
    role: 'International Donor Platform',
  },
]

export const QUOTES = [
  { text: 'My religion is very simple. My religion is kindness.', author: 'Dalai Lama' },
  { text: 'Arise, awake and stop not till the goal is reached.', author: 'Swami Vivekananda' },
]

// Curated Unsplash imagery (auto-format, lazy-loaded by consumers)
const u = (id, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`

export const IMG = {
  heroCommunity: u('photo-1469571486292-0ba58a3f068b', 1800),
  handsTogether: u('photo-1488521787991-ed7bbaae773c', 1600),
  childSmile: u('photo-1582213782179-e0d53f98f2ca'),
  childPortrait: u('photo-1559027615-cd4628902d4a'),
  volunteers: u('photo-1593113598332-cd288d649433', 1600),
  classroom: u('photo-1509062522246-3755977927d7', 1600),
  teacherOutdoor: u('photo-1427504494785-3a9ca7044f45'),
  studyDesk: u('photo-1503676260728-1c00da094a0b'),
  womanLaptop: u('photo-1573164713988-8665fc963095'),
  womanWriting: u('photo-1488190211105-8b0e65b80b4e'),
  workshop: u('photo-1531482615713-2afd69097998'),
  studentsPair: u('photo-1522202176988-66273c2fd55f'),
  sproutHands: u('photo-1542601906990-b4d3fb778b09'),
  farmField: u('photo-1500382017468-9049fed747ef', 1800),
  atelier: u('photo-1558769132-cb1aea458c5e'),
  health: u('photo-1584515933487-779824d29309'),
  handshake: u('photo-1521791136064-7986c2920216'),
}

export const STORY_IMAGES = [
  IMG.classroom,
  IMG.atelier,
  IMG.womanLaptop,
  IMG.heroCommunity,
  IMG.health,
  IMG.childSmile,
]
