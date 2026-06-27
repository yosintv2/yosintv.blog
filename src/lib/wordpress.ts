const WP_API_BASE = 'https://www.yosin-tv.net/wp-json/wp/v2';

export interface WPPost {
  id: number;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  slug: string;
  date: string;
  modified: string;
  featured_media: number;
  _embedded?: {
    'wp:featuredmedia'?: Array<{ source_url: string; alt: string }>;
    'wp:term'?: Array<Array<{ id: number; name: string; slug: string }>>;
  };
  categories?: number[];
  tags?: number[];
}

export interface WPCategory {
  id: number;
  name: string;
  slug: string;
  count: number;
  description: string;
}

export interface WPMedia {
  id: number;
  source_url: string;
  alt_text: string;
  media_details?: {
    sizes?: Record<string, { source_url: string }>;
  };
}

async function fetchAPI<T>(endpoint: string, params?: Record<string, string>): Promise<T> {
  const url = new URL(`${WP_API_BASE}/${endpoint}`);
  if (params) {
    Object.entries(params).forEach(([key, value]) => url.searchParams.set(key, value));
  }
  url.searchParams.set('_embed', 'true');
  const res = await fetch(url.toString(), {
    headers: { 'User-Agent': 'YoSinTV-Astro/1.0' },
  });
  if (!res.ok) throw new Error(`WP API error: ${res.status}`);
  return res.json();
}

export async function getPosts(page = 1, perPage = 10, categoryId?: number): Promise<WPPost[]> {
  const params: Record<string, string> = {
    page: String(page),
    per_page: String(perPage),
    _embed: 'true',
  };
  if (categoryId) params.categories = String(categoryId);
  return fetchAPI<WPPost[]>('posts', params);
}

export async function getPost(slug: string): Promise<WPPost[]> {
  return fetchAPI<WPPost[]>('posts', { slug, _embed: 'true' });
}

export async function getCategories(): Promise<WPCategory[]> {
  return fetchAPI<WPCategory[]>('categories', { per_page: '100' });
}

export async function getMedia(id: number): Promise<WPMedia> {
  return fetchAPI<WPMedia>(`media/${id}`);
}

export function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, '').trim();
}

export function truncateText(text: string, maxLength = 120): string {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength).replace(/\s+\S*$/, '') + '...';
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
