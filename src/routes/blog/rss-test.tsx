import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import RSSBlogFeed from '../../components/rss-blog-feed';

/**
 * Test page for RSS feed integration
 * This page can be used to test the RSS feed functionality
 */
export default component$(() => {
  return (
    <div class="container mx-auto px-4 py-8">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-8">
          <h1 class="text-3xl font-bold text-gray-900 mb-4">
            RSS Feed Test Page
          </h1>
          <p class="text-gray-600">
            Testing RSS feed integration with hyperlocal filtering
          </p>
        </div>

        {/* Test RSS Feed with different configurations */}
        <div class="space-y-12">
          {/* Test 1: Full RSS Feed */}
          <div>
            <h2 class="text-2xl font-semibold mb-4">Test 1: Full RSS Feed (No Filtering)</h2>
            <RSSBlogFeed 
              feedUrl="https://www.simplifyingthemarket.com/en/feed?a=956758-ef2edda2f940e018328655620ea05f18"
              showImages={true}
              maxItems={5}
              enableHyperlocalFilter={false}
              fallbackToIframe={false}
            />
          </div>

          {/* Test 2: Hyperlocal Filtered Feed */}
          <div>
            <h2 class="text-2xl font-semibold mb-4">Test 2: Hyperlocal Filtered Feed</h2>
            <RSSBlogFeed 
              feedUrl="https://www.simplifyingthemarket.com/en/feed?a=956758-ef2edda2f940e018328655620ea05f18"
              showImages={true}
              maxItems={5}
              enableHyperlocalFilter={true}
              fallbackToIframe={true}
            />
          </div>

          {/* Test 3: Iframe Fallback Only */}
          <div>
            <h2 class="text-2xl font-semibold mb-4">Test 3: Iframe Fallback</h2>
            <div class="bg-white rounded-lg shadow-md p-6">
              <h3 class="text-xl font-semibold text-gray-900 mb-4">
                Iframe Embed Test
              </h3>
              <div class="aspect-video rounded-lg overflow-hidden">
                <iframe 
                  src="https://www.simplifyingthemarket.com/en/?a=956758-ef2edda2f940e018328655620ea05f18"
                  class="w-full h-full border-0"
                  title="Real Estate Blog Feed - Test"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'RSS Feed Test | Centennial Hills Homes',
  meta: [
    {
      name: 'description',
      content: 'Test page for RSS feed integration and hyperlocal content filtering.',
    },
    {
      property: 'og:title',
      content: 'RSS Feed Test | Centennial Hills Homes',
    },
    {
      property: 'og:description',
      content: 'Test page for RSS feed integration and hyperlocal content filtering.',
    },
  ],
};
