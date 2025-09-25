import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import RealScoutOfficeListings from '../../components/realscout-office-listings';

export default component$(() => {
  return (
    <>
      {/* Hero Section */}
      <section class="hero-section">
        <div class="container container-center">
          <h1 class="hero-title">
            Free Home Valuation - <span class="highlight">Las Vegas Property Values</span>
          </h1>
          <p class="hero-subtitle">
            Get a comprehensive home valuation for your Las Vegas property with Dr. Janet Duffy's expert analysis. 
            Our valuation process combines MLS data, recent sales comparisons, market trends, and local expertise.
          </p>
          <div class="hero-buttons">
            <a href="/contact" class="btn btn-primary">Get Free Home Valuation</a>
            <a href="/sell-a-home" class="btn btn-secondary">Selling Services</a>
          </div>
        </div>
      </section>

      {/* Featured Properties - Lead Generator */}
      <section class="featured-properties-section bg-gray-50 py-16">
        <div class="container container-center">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">
              Recent Sales & Market Data
            </h2>
            <p class="text-lg text-gray-600 max-w-2xl mx-auto">
              View recent sales and current market data to understand your property's value
            </p>
          </div>
          
          {/* RealScout Office Listings - Primary Lead Generator */}
          <RealScoutOfficeListings
            agentEncodedId="QWdlbnQtMjI1MDUw"
            sortOrder="NEWEST"
            listingStatus="For Sale"
            propertyTypes=",SFR"
            priceMin="400000"
            priceMax="1500000"
          />
          
          <div class="text-center mt-8">
            <a href="/contact" class="btn btn-primary btn-lg">
              Get Your Free Home Valuation
            </a>
          </div>
        </div>
      </section>

      <div class="container container-center">
        <h2>Accurate Property Valuation Services</h2>
        <p>Get a comprehensive home valuation for your Las Vegas property with Dr. Janet Duffy's expert analysis. Our valuation process combines MLS data, recent sales comparisons, market trends, and local expertise to provide accurate property values for Centennial Hills and surrounding Las Vegas neighborhoods.</p>

        <h2>Professional Valuation Methods</h2>
        <p>Our home valuation uses multiple approaches including comparative market analysis (CMA), automated valuation models (AVM), and local market expertise. We analyze recent sales, current listings, property condition, and neighborhood trends to determine the most accurate value for your Las Vegas home.</p>

        <h2>Centennial Hills Market Expertise</h2>
        <p>Specialized knowledge of Centennial Hills real estate values, including understanding of neighborhood variations, community amenities, and market dynamics. Our valuations account for factors specific to northwest Las Vegas including proximity to Red Rock Canyon, school districts, and transportation access.</p>

        <h2>Comprehensive Market Analysis</h2>
        <p>Receive detailed market analysis including recent comparable sales, current competition, market trends, and neighborhood statistics. Our valuation reports provide the data and insights needed for informed decisions about selling, refinancing, or investing in Las Vegas real estate.</p>

        <h2>Free Consultation Process</h2>
        <p>Our home valuation process includes property inspection, market analysis, and detailed report preparation at no cost to you. Dr. Janet Duffy personally reviews each valuation to ensure accuracy and provides recommendations for maximizing your property's value in the Las Vegas market.</p>

        <h2>Valuation for Multiple Purposes</h2>
        <p>Our home valuation services support various needs including selling preparation, refinancing decisions, investment analysis, and estate planning. Whether you're considering selling your Centennial Hills home or need accurate values for financial planning, our comprehensive approach provides reliable results.</p>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Free Home Valuation - Las Vegas Property Values | Dr. Janet Duffy',
  meta: [
    {
      name: 'description',
      content: 'Get a free home valuation for your Las Vegas property with Dr. Janet Duffy. Accurate property values for Centennial Hills and surrounding neighborhoods.',
    },
  ],
};







