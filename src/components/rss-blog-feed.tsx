import { component$, useSignal, useTask$ } from '@builder.io/qwik';
import { fetchRSSFeed, filterHyperlocalContent, formatDate, truncateText, type RSSFeed, type RSSItem } from '../data/rss-parser';

interface RSSBlogFeedProps {
  feedUrl: string;
  showImages?: boolean;
  maxItems?: number;
  enableHyperlocalFilter?: boolean;
  fallbackToIframe?: boolean;
}

export default component$<RSSBlogFeedProps>(({ 
  feedUrl, 
  showImages = true, 
  maxItems = 10,
  enableHyperlocalFilter = true,
  fallbackToIframe = true
}) => {
  const feedData = useSignal<RSSFeed | null>(null);
  const loading = useSignal(true);
  const error = useSignal<string | null>(null);
  const showIframe = useSignal(false);

  useTask$(async ({ track }) => {
    track(() => feedUrl);
    
    loading.value = true;
    error.value = null;
    showIframe.value = false;

    try {
      const feed = await fetchRSSFeed(feedUrl);
      
      // Apply hyperlocal filtering if enabled
      if (enableHyperlocalFilter) {
        feed.items = filterHyperlocalContent(feed.items);
      }

      // Limit number of items
      if (maxItems && feed.items.length > maxItems) {
        feed.items = feed.items.slice(0, maxItems);
      }

      feedData.value = feed;
    } catch (err) {
      console.error('RSS Feed Error:', err);
      error.value = err instanceof Error ? err.message : 'Failed to load blog content';
      
      // Show iframe fallback if enabled and RSS fails
      if (fallbackToIframe) {
        showIframe.value = true;
      }
    } finally {
      loading.value = false;
    }
  });

  // Iframe fallback component
  const IframeFallback = component$(() => (
    <div class="bg-white rounded-lg shadow-md p-6">
      <h3 class="text-xl font-semibold text-gray-900 mb-4">
        Latest Real Estate Insights
      </h3>
      <div class="aspect-video rounded-lg overflow-hidden">
        <iframe 
          src="https://www.simplifyingthemarket.com/en/?a=956758-ef2edda2f940e018328655620ea05f18"
          class="w-full h-full border-0"
          title="Real Estate Blog Feed"
          loading="lazy"
        />
      </div>
      <p class="text-sm text-gray-600 mt-4">
        Loading personalized real estate content from our trusted partners...
      </p>
    </div>
  ));

  // Loading component
  const LoadingState = component$(() => (
    <div class="space-y-6">
      {Array.from({ length: 3 }).map((_, i) => (
        <div key={i} class="bg-white rounded-lg shadow-md p-6 animate-pulse">
          <div class="h-6 bg-gray-200 rounded mb-4"></div>
          <div class="h-4 bg-gray-200 rounded mb-2"></div>
          <div class="h-4 bg-gray-200 rounded mb-4 w-3/4"></div>
          <div class="h-4 bg-gray-200 rounded w-1/2"></div>
        </div>
      ))}
    </div>
  ));

  // Error state
  const ErrorState = component$(() => (
    <div class="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
      <div class="text-red-600 text-xl mb-2">⚠️</div>
      <h3 class="text-lg font-semibold text-red-900 mb-2">Unable to Load Blog Content</h3>
      <p class="text-red-700 mb-4">{error.value}</p>
      <button 
        class="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors"
        onClick$={() => {
          error.value = null;
          loading.value = true;
          // Retry loading
          fetchRSSFeed(feedUrl).then(feed => {
            if (enableHyperlocalFilter) {
              feed.items = filterHyperlocalContent(feed.items);
            }
            if (maxItems && feed.items.length > maxItems) {
              feed.items = feed.items.slice(0, maxItems);
            }
            feedData.value = feed;
            loading.value = false;
          }).catch(() => {
            if (fallbackToIframe) {
              showIframe.value = true;
            }
            loading.value = false;
          });
        }}
      >
        Try Again
      </button>
    </div>
  ));

  // RSS item component
  const RSSItemCard = component$<{ item: RSSItem }>(({ item }) => (
    <article class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      {showImages && item.image && (
        <div class="mb-4">
          <img 
            src={item.image} 
            alt={item.title}
            class="w-full h-48 object-cover rounded-lg"
            loading="lazy"
          />
        </div>
      )}
      
      <div class="mb-4">
        <h3 class="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
          {item.title}
        </h3>
        <p class="text-gray-600 mb-3">
          {truncateText(item.description, 200)}
        </p>
      </div>

      <div class="flex items-center justify-between">
        <span class="text-sm text-gray-500">
          {formatDate(item.pubDate)}
        </span>
        <a 
          href={item.link} 
          target="_blank" 
          rel="noopener noreferrer"
          class="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
        >
          Read More
          <svg class="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </article>
  ));

  return (
    <div class="rss-blog-feed" data-testid="rss-blog-feed">
      {loading.value && <LoadingState />}
      
      {error.value && !showIframe.value && <ErrorState />}
      
      {showIframe.value && <IframeFallback />}
      
      {feedData.value && !showIframe.value && (
        <div class="space-y-6">
          <div class="text-center mb-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-2">
              Latest Real Estate Insights
            </h2>
            <p class="text-gray-600">
              {enableHyperlocalFilter 
                ? 'Curated content for Centennial Hills and Las Vegas area'
                : 'Latest updates from our real estate experts'
              }
            </p>
            {feedData.value.items.length === 0 && enableHyperlocalFilter && (
              <p class="text-sm text-amber-600 mt-2">
                No hyperlocal content found. Showing iframe fallback.
              </p>
            )}
          </div>

          {feedData.value.items.length > 0 ? (
            <div class="grid gap-6">
              {feedData.value.items.map((item) => (
                <RSSItemCard key={item.guid} item={item} />
              ))}
            </div>
          ) : feedData.value.items.length === 0 && enableHyperlocalFilter ? (
            <IframeFallback />
          ) : (
            <div class="text-center py-8">
              <p class="text-gray-600">No blog posts available at this time.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
});
