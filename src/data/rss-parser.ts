/**
 * RSS Feed Parser for KCM Content
 * Handles parsing and filtering of RSS feed content for hyperlocal display
 */

export interface RSSItem {
  title: string;
  description: string;
  link: string;
  pubDate: string;
  guid: string;
  content?: string;
  image?: string;
  categories?: string[];
}

export interface RSSFeed {
  title: string;
  description: string;
  link: string;
  items: RSSItem[];
  lastBuildDate?: string;
}

/**
 * Parse XML RSS feed data
 */
export function parseRSSFeed(xmlText: string): RSSFeed {
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(xmlText, 'text/xml');
  
  const channel = xmlDoc.querySelector('channel');
  if (!channel) {
    throw new Error('Invalid RSS feed format');
  }

  const title = channel.querySelector('title')?.textContent || '';
  const description = channel.querySelector('description')?.textContent || '';
  const link = channel.querySelector('link')?.textContent || '';
  const lastBuildDate = channel.querySelector('lastBuildDate')?.textContent;

  const items: RSSItem[] = [];
  const itemElements = xmlDoc.querySelectorAll('item');

  itemElements.forEach((item) => {
    const title = item.querySelector('title')?.textContent || '';
    const description = item.querySelector('description')?.textContent || '';
    const link = item.querySelector('link')?.textContent || '';
    const pubDate = item.querySelector('pubDate')?.textContent || '';
    const guid = item.querySelector('guid')?.textContent || '';
    const content = item.querySelector('content\\:encoded')?.textContent || 
                   item.querySelector('encoded')?.textContent || '';

    // Extract image from content or description
    const imageRegex = /<img[^>]+src="([^"]+)"/i;
    const imageMatch = content.match(imageRegex) || description.match(imageRegex);
    const image = imageMatch?.[1] || undefined;

    // Extract categories
    const categoryElements = item.querySelectorAll('category');
    const categories = Array.from(categoryElements).map(cat => cat.textContent || '');

    items.push({
      title,
      description: cleanHTML(description),
      link,
      pubDate,
      guid,
      content: cleanHTML(content),
      image,
      categories
    });
  });

  return {
    title,
    description,
    link,
    items,
    lastBuildDate: lastBuildDate || undefined
  };
}

/**
 * Clean HTML content for display
 */
function cleanHTML(html: string): string {
  if (!html) return '';
  
  // Remove HTML tags but preserve line breaks
  return html
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<p[^>]*>/gi, '\n')
    .replace(/<\/p>/gi, '')
    .replace(/<[^>]*>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .trim();
}

/**
 * Filter RSS items for hyperlocal content related to Centennial Hills/Las Vegas
 */
export function filterHyperlocalContent(items: RSSItem[]): RSSItem[] {
  const localKeywords = [
    'centennial hills',
    'las vegas',
    'northwest las vegas',
    'nevada',
    'real estate',
    'housing market',
    'home buying',
    'home selling',
    'mortgage',
    'interest rates',
    'luxury homes',
    'new construction',
    '89135',
    '89138',
    '89144'
  ];

  return items.filter(item => {
    const searchText = `${item.title} ${item.description} ${item.content || ''}`.toLowerCase();
    return localKeywords.some(keyword => searchText.includes(keyword.toLowerCase()));
  });
}

/**
 * Fetch RSS feed from URL
 */
export async function fetchRSSFeed(url: string): Promise<RSSFeed> {
  try {
    const response = await fetch(url, {
      headers: {
        'Accept': 'application/rss+xml, application/xml, text/xml',
        'User-Agent': 'CentennialHillsHomes/1.0'
      }
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch RSS feed: ${response.status} ${response.statusText}`);
    }

    const xmlText = await response.text();
    return parseRSSFeed(xmlText);
  } catch (error) {
    console.error('Error fetching RSS feed:', error);
    throw new Error('Unable to fetch RSS feed content');
  }
}

/**
 * Format date for display
 */
export function formatDate(dateString: string): string {
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  } catch {
    return dateString;
  }
}

/**
 * Truncate text content
 */
export function truncateText(text: string, maxLength: number = 200): string {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength).trim() + '...';
}
