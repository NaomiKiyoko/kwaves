/**
 * KWAVES API Client
 * Connects to Google Cloud Functions (asia-southeast1)
 * Falls back to mock data when API returns empty results
 */

import {
  articles as mockArticles,
  popularSongs as mockSongs,
  popularTags as mockTags,
  type Article,
  type Song,
  type Tag,
} from './data'

// ── BASE URL ─────────────────────────────────────────
const BASE = 'https://asia-southeast1-kwaves-io.cloudfunctions.net'

// ── TYPES ────────────────────────────────────────────
export type PaginatedResponse<T> = {
  total: number
  offset: number
  limit: number
  data: T[]
}

export type ArticleParams = {
  offset?: number
  limit?: number
  topic?: string
  tag?: string
}

export type TagParams = {
  limit?: number
  offset?: number
}

// ── HELPERS ──────────────────────────────────────────
function toQS(params: Record<string, string | number | undefined>): string {
  const clean = Object.fromEntries(
    Object.entries(params)
      .filter(([, v]) => v !== undefined)
      .map(([k, v]) => [k, String(v)])
  )
  return new URLSearchParams(clean).toString()
}

async function apiFetch<T>(path: string): Promise<T> {
  const res = await fetch(`${BASE}${path}`, {
    next: { revalidate: 60 },
    headers: { 'Content-Type': 'application/json' },
  })
  if (!res.ok) throw new Error(`API ${res.status}: ${BASE}${path}`)
  return res.json()
}

// ── ENDPOINTS ────────────────────────────────────────

export async function getLatestArticles(
  params: ArticleParams = {}
): Promise<PaginatedResponse<Article>> {
  try {
    const qs = toQS({ limit: 10, offset: 0, ...params })
    const result = await apiFetch<PaginatedResponse<Article>>(
      `/getLatestArticles?${qs}`
    )
    if (!result.data || result.data.length === 0) {
      return { total: mockArticles.length, offset: 0, limit: params.limit ?? 10, data: mockArticles }
    }
    return result
  } catch (err) {
    console.warn('[getLatestArticles] falling back to mock data:', err)
    return { total: mockArticles.length, offset: 0, limit: params.limit ?? 10, data: mockArticles }
  }
}

export async function getPopularArticles(
  params: ArticleParams = {}
): Promise<PaginatedResponse<Article>> {
  try {
    const qs = toQS({ limit: 10, ...params })
    const result = await apiFetch<PaginatedResponse<Article>>(
      `/getPopularArticles?${qs}`
    )
    if (!result.data || result.data.length === 0) {
      return { total: mockArticles.length, offset: 0, limit: params.limit ?? 10, data: mockArticles }
    }
    return result
  } catch (err) {
    console.warn('[getPopularArticles] falling back to mock data:', err)
    return { total: mockArticles.length, offset: 0, limit: params.limit ?? 10, data: mockArticles }
  }
}

export async function getPopularTags(
  params: TagParams = {}
): Promise<PaginatedResponse<Tag>> {
  try {
    const qs = toQS({ limit: 20, offset: 0, ...params })
    const result = await apiFetch<PaginatedResponse<Tag>>(
      `/getPopularTags?${qs}`
    )
    if (!result.data || result.data.length === 0) {
      return { total: mockTags.length, offset: 0, limit: params.limit ?? 20, data: mockTags }
    }
    return result
  } catch (err) {
    console.warn('[getPopularTags] falling back to mock data:', err)
    return { total: mockTags.length, offset: 0, limit: params.limit ?? 20, data: mockTags }
  }
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  try {
    const result = await apiFetch<Article>(
      `/getArticleBySlug?slug=${encodeURIComponent(slug)}`
    )
    return result ?? null
  } catch (err) {
    console.warn('[getArticleBySlug] falling back to mock data:', err)
    return mockArticles.find(a => a.slug === slug) ?? null
  }
}

// getPopularSongs — no Cloud Function yet, uses mock data
export async function getPopularSongs(): Promise<{ data: Song[] }> {
  return { data: mockSongs }
}
