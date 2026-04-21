export type Article = {
  id: string
  title: string
  excerpt: string
  topic: string
  body?: string
  tags: string[]
  author: { id: string; name: string }
  publishedAt: string
  readTimeMinutes: number
  viewCount: number
  slug: string
  emoji: string
  gradient: string
}

export type Song = {
  rank: number
  previousRank: number
  trendDirection: 'up' | 'down' | 'flat'
  songId: string
  title: string
  artist: string
  streamCountLabel: string
  emoji: string
  bgGradient: string
}

export type Tag = {
  tag: string
  articleCount: number
  trendDirection: 'up' | 'down' | 'flat' | 'new'
  trendPercent: number | null
}

export type CarouselSlide = {
  emoji: string
  topic: string
  topicColor: string
  headline: string
  excerpt: string
  date: string
  readTime: string
  bgClass: string
  thumbBg: string
}

// ── CAROUSEL ──────────────────────────────────────────
export const carouselSlides: CarouselSlide[] = [
  {
    emoji: '🎤',
    topic: 'Music',
    topicColor: '#e8365d',
    headline: 'BTS Announces Massive New World Tour',
    excerpt: 'The legendary septet returns to the stage — covering Asia, North America, and Europe. Tickets go on sale next month.',
    date: 'Dec 12, 2025',
    readTime: '3 min read',
    bgClass: 'slide-bg-1',
    thumbBg: 'rgba(232,54,93,0.35)',
  },
  {
    emoji: '👑',
    topic: 'Music',
    topicColor: '#2563eb',
    headline: "BLACKPINK's Lisa Sets New Global Streaming Record",
    excerpt: 'Lisa breaks the 24-hour record on Spotify with her latest solo single — 14 million streams in a single day.',
    date: 'Dec 11, 2025',
    readTime: '2 min read',
    bgClass: 'slide-bg-2',
    thumbBg: 'rgba(37,99,235,0.35)',
  },
  {
    emoji: '🎬',
    topic: 'Drama',
    topicColor: '#c9983a',
    headline: 'New K-Drama Starring IU and Park Seo-joon Announced',
    excerpt: 'The long-awaited pairing is confirmed — IU and Park Seo-joon headline a Studio Dragon production set for 2026.',
    date: 'Dec 10, 2025',
    readTime: '3 min read',
    bgClass: 'slide-bg-3',
    thumbBg: 'rgba(201,152,58,0.35)',
  },
]

// ── ARTICLES ──────────────────────────────────────────
export const articles: Article[] = [
  {
    id: 'article_001',
    title: "BLACKPINK's Lisa Sets New Global Streaming Record",
    excerpt: 'Lisa breaks the 24-hour streaming record with her latest single, surpassing all previous K-pop records.',
    topic: 'Music',
    tags: ['blackpink', 'lisa', 'streaming_record'],
    author: { id: 'author_001', name: 'Jisoo Park' },
    publishedAt: 'Dec 11, 2025',
    readTimeMinutes: 2,
    viewCount: 38400,
    slug: 'blackpink-lisa-streaming-record-2025',
    emoji: '👑',
    gradient: 'linear-gradient(145deg, #fde8ed, #f9a8c0)',
  },
  {
    id: 'article_002',
    title: 'New K-Drama Starring IU and Park Seo-joon Officially Announced',
    excerpt: 'The highly anticipated drama pairing IU with Park Seo-joon has been confirmed by HYBE and Studio Dragon.',
    topic: 'Drama',
    tags: ['iu', 'park_seo_joon', 'kdrama'],
    author: { id: 'author_002', name: 'Min Jae Lee' },
    publishedAt: 'Dec 10, 2025',
    readTimeMinutes: 3,
    viewCount: 29700,
    slug: 'iu-park-seo-joon-kdrama-announced-2025',
    emoji: '🎬',
    gradient: 'linear-gradient(145deg, #ede8fd, #c4b5fd)',
  },
  {
    id: 'article_003',
    title: 'TWICE Celebrates 8th Anniversary with Special Studio Album',
    excerpt: 'The nine-member group marks eight years together with a full studio album and a heartfelt fan event in Seoul.',
    topic: 'Anniversary',
    tags: ['twice', 'anniversary', 'album'],
    author: { id: 'author_003', name: 'Soyeon Kim' },
    publishedAt: 'Dec 9, 2025',
    readTimeMinutes: 4,
    viewCount: 24100,
    slug: 'twice-8th-anniversary-special-album',
    emoji: '🎂',
    gradient: 'linear-gradient(145deg, #e8f4fd, #93c5fd)',
  },
  {
    id: 'article_004',
    title: 'Stray Kids Wins First Place on Billboard 200 for Third Week',
    excerpt: 'Stray Kids make history as the first K-pop group to hold the Billboard 200 top spot for three weeks running.',
    topic: 'Chart',
    tags: ['stray_kids', 'billboard', 'chart'],
    author: { id: 'author_001', name: 'Jisoo Park' },
    publishedAt: 'Dec 8, 2025',
    readTimeMinutes: 2,
    viewCount: 19800,
    slug: 'stray-kids-billboard-200-three-weeks',
    emoji: '🏆',
    gradient: 'linear-gradient(145deg, #e8fdf4, #6ee7b7)',
  },
  {
    id: 'article_005',
    title: 'NewJeans Announces First Fan Meeting World Tour',
    excerpt: 'The five-member sensation takes their fan meetings global with stops in Tokyo, Seoul, and Los Angeles.',
    topic: 'Fan Meeting',
    tags: ['newjeans', 'fan_meeting', 'world_tour'],
    author: { id: 'author_002', name: 'Min Jae Lee' },
    publishedAt: 'Dec 7, 2025',
    readTimeMinutes: 2,
    viewCount: 17200,
    slug: 'newjeans-fan-meeting-world-tour-2026',
    emoji: '💫',
    gradient: 'linear-gradient(145deg, #fdf4e8, #fcd34d)',
  },
  {
    id: 'article_006',
    title: 'aespa Sets YouTube Premiere Record with Brand-New Music Video',
    excerpt: "aespa's new MV drew over 4.2 million concurrent viewers during its YouTube Premiere.",
    topic: 'Record',
    tags: ['aespa', 'youtube', 'record'],
    author: { id: 'author_003', name: 'Soyeon Kim' },
    publishedAt: 'Dec 6, 2025',
    readTimeMinutes: 3,
    viewCount: 15500,
    slug: 'aespa-youtube-premiere-record-2025',
    emoji: '🌊',
    gradient: 'linear-gradient(145deg, #fde8f4, #f9a8d4)',
  },
]

// ── SONGS ─────────────────────────────────────────────
export const popularSongs: Song[] = [
  { rank: 1, previousRank: 2, trendDirection: 'up',   songId: 'song_001', title: 'Butter (Remix)',  artist: 'BTS',        streamCountLabel: '2.4B', emoji: '💜', bgGradient: 'linear-gradient(135deg,#fde8ed,#f9a8c0)' },
  { rank: 2, previousRank: 1, trendDirection: 'down', songId: 'song_002', title: 'Flower',         artist: 'Lisa',       streamCountLabel: '1.9B', emoji: '🖤', bgGradient: 'linear-gradient(135deg,#fde8ed,#fecdd3)' },
  { rank: 3, previousRank: 4, trendDirection: 'up',   songId: 'song_003', title: 'Hype Boy',       artist: 'NewJeans',   streamCountLabel: '1.6B', emoji: '✨', bgGradient: 'linear-gradient(135deg,#e0f2fe,#bae6fd)' },
  { rank: 4, previousRank: 3, trendDirection: 'down', songId: 'song_004', title: 'Miroh',          artist: 'Stray Kids', streamCountLabel: '1.1B', emoji: '🌟', bgGradient: 'linear-gradient(135deg,#f5f3ff,#ddd6fe)' },
  { rank: 5, previousRank: 5, trendDirection: 'flat', songId: 'song_005', title: 'Talk That Talk', artist: 'TWICE',      streamCountLabel: '980M', emoji: '💫', bgGradient: 'linear-gradient(135deg,#d1fae5,#a7f3d0)' },
]

// ── TAGS ──────────────────────────────────────────────
export const popularTags: Tag[] = [
  { tag: 'blackpink',        articleCount: 48, trendDirection: 'up',   trendPercent: 42 },
  { tag: 'lisa',             articleCount: 31, trendDirection: 'up',   trendPercent: 38 },
  { tag: 'streaming_record', articleCount: 12, trendDirection: 'up',   trendPercent: 21 },
  { tag: 'iu',               articleCount: 27, trendDirection: 'up',   trendPercent: 18 },
  { tag: 'park_seo_joon',    articleCount: 19, trendDirection: 'new',  trendPercent: null },
  { tag: 'bts',              articleCount: 55, trendDirection: 'up',   trendPercent: 14 },
  { tag: 'newjeans',         articleCount: 22, trendDirection: 'up',   trendPercent: 27 },
  { tag: 'stray_kids',       articleCount: 18, trendDirection: 'flat', trendPercent: 0 },
]

// ── ARTISTS ───────────────────────────────────────────
export const artists = [
  { name: 'BLACKPINK', emoji: '🖤', members: 4, articles: 21, gradient: 'linear-gradient(145deg,#fde8ed,#f9a8c0)' },
  { name: 'BTS',       emoji: '💜', members: 7, articles: 18, gradient: 'linear-gradient(145deg,#e8edfd,#a5b4fc)' },
  { name: 'TWICE',     emoji: '💫', members: 9, articles: 12, gradient: 'linear-gradient(145deg,#fdf4e8,#fcd34d)' },
  { name: 'NewJeans',  emoji: '✨', members: 5, articles: 9,  gradient: 'linear-gradient(145deg,#e8f4fd,#93c5fd)' },
  { name: 'aespa',     emoji: '🔮', members: 4, articles: 8,  gradient: 'linear-gradient(145deg,#fde8f4,#f9a8d4)' },
  { name: 'Stray Kids',emoji: '🌟', members: 8, articles: 7,  gradient: 'linear-gradient(145deg,#e8fdf4,#6ee7b7)' },
  { name: 'IU',        emoji: '🌸', members: 1, articles: 6,  gradient: 'linear-gradient(145deg,#fef3c7,#fde68a)' },
]

// ── HELPERS ───────────────────────────────────────────
export function formatViews(n: number): string {
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(1) + 'M'
  if (n >= 1_000)     return (n / 1_000).toFixed(1) + 'K'
  return String(n)
}

export const topicColors: Record<string, string> = {
  Music:       '#e8365d',
  Drama:       '#2563eb',
  Anniversary: '#00b894',
  Chart:       '#c9983a',
  'Fan Meeting': '#ff6b4a',
  Record:      '#7c3aed',
  Concert:     '#e8365d',
}
