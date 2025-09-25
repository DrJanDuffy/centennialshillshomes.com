import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import SEOStructuredData from '../../components/seo-structured-data';
import { pageSchemas } from '../../components/seo-structured-data';
import RSSBlogFeed from '../../components/rss-blog-feed';

export default component$(() => {
  // Schema data for blog page
  const blogSchema = pageSchemas.articlePage({
    title: "Centennial Hills Real Estate Blog",
    description: "Expert insights, market updates, and local real estate news for Centennial Hills and Northwest Las Vegas",
    slug: "blog"
  });

  return (
    <>
      {/* SEO Structured Data */}
      <SEOStructuredData 
        type="Article" 
        data={blogSchema} 
      />

      <div class="container mx-auto px-4 py-8" data-testid="blog-page">
      <div class="max-w-4xl mx-auto">
        {/* Header */}
        <div class="text-center mb-12" data-debug="blog-header">
          <h1 class="text-4xl font-bold text-gray-900 mb-4" data-debug="blog-title">
            Centennial Hills Real Estate Blog
          </h1>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Expert insights, market updates, and local real estate news for Centennial Hills and Northwest Las Vegas
          </p>
        </div>

        {/* Blog Categories */}
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div class="text-blue-600 text-3xl mb-4">🏠</div>
            <h3 class="text-xl font-semibold mb-3">Buyer's Guide</h3>
            <p class="text-gray-600 mb-4">
              Everything you need to know about buying a home in Centennial Hills
            </p>
            <a href="/blog/category/buyer-guide" class="text-blue-600 hover:text-blue-800 font-medium">
              Read More →
            </a>
          </div>

          <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div class="text-blue-600 text-3xl mb-4">💰</div>
            <h3 class="text-xl font-semibold mb-3">Seller's Guide</h3>
            <p class="text-gray-600 mb-4">
              Expert tips for selling your Centennial Hills home at the best price
            </p>
            <a href="/blog/category/seller-guide" class="text-blue-600 hover:text-blue-800 font-medium">
              Read More →
            </a>
          </div>

          <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div class="text-blue-600 text-3xl mb-4">📊</div>
            <h3 class="text-xl font-semibold mb-3">Market Insights</h3>
            <p class="text-gray-600 mb-4">
              Latest market trends and analysis for Northwest Las Vegas
            </p>
            <a href="/blog/category/market-insights" class="text-blue-600 hover:text-blue-800 font-medium">
              Read More →
            </a>
          </div>
        </div>

        {/* RSS Blog Feed */}
        <div class="bg-gray-50 rounded-lg p-8">
          <RSSBlogFeed 
            feedUrl="https://www.simplifyingthemarket.com/en/feed?a=956758-ef2edda2f940e018328655620ea05f18"
            showImages={true}
            maxItems={8}
            enableHyperlocalFilter={true}
            fallbackToIframe={true}
          />
        </div>

        {/* Featured Local Articles */}
        <div class="mt-12">
          <h2 class="text-2xl font-bold text-gray-900 mb-6">Featured Local Articles</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <article class="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 class="text-xl font-semibold text-gray-900 mb-2">
                Why Centennial Hills is Las Vegas' Premier Luxury Community
              </h3>
              <p class="text-gray-600 mb-4">
                Discover what makes Centennial Hills the top choice for luxury home buyers in Las Vegas, from world-class amenities to prime location.
              </p>
              <div class="flex items-center justify-between">
                <span class="text-sm text-gray-500">Published: September 2024</span>
                <a href="/centennial-hills-luxury-homes" class="text-blue-600 hover:text-blue-800 font-medium">
                  Read Full Article →
                </a>
              </div>
            </article>

            <article class="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 class="text-xl font-semibold text-gray-900 mb-2">
                New Construction Trends in Northwest Las Vegas
              </h3>
              <p class="text-gray-600 mb-4">
                Explore the latest new construction developments and what buyers can expect in Centennial Hills and surrounding areas.
              </p>
              <div class="flex items-center justify-between">
                <span class="text-sm text-gray-500">Published: August 2024</span>
                <a href="/centennial-hills-new-construction" class="text-blue-600 hover:text-blue-800 font-medium">
                  Read Full Article →
                </a>
              </div>
            </article>
          </div>
        </div>

        {/* CTA Section */}
        <div class="text-center mt-12">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">
            Ready to Buy or Sell in Centennial Hills?
          </h2>
          <p class="text-gray-600 mb-6">
            Get personalized assistance from Dr. Janet Duffy, Las Vegas' top luxury real estate expert
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" class="btn btn-primary">
              Get Free Consultation
            </a>
            <a href="/mls-search" class="btn btn-outline">
              Search Properties
            </a>
          </div>
        </div>
      </div>
    </div>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Centennial Hills Real Estate Blog | Market Insights & Expert Tips',
  meta: [
    {
      name: 'description',
      content: 'Expert real estate insights, market updates, and local news for Centennial Hills and Northwest Las Vegas. Get the latest trends and tips from Dr. Janet Duffy.',
    },
    {
      property: 'og:title',
      content: 'Centennial Hills Real Estate Blog | Market Insights & Expert Tips',
    },
    {
      property: 'og:description',
      content: 'Expert real estate insights, market updates, and local news for Centennial Hills and Northwest Las Vegas. Get the latest trends and tips from Dr. Janet Duffy.',
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image',
    },
  ],
  links: [
    {
      rel: 'stylesheet',
      href: '/blog-styles.css',
    },
  ],
};
