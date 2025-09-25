import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import RealScoutOfficeListings from '../../components/realscout-office-listings';
import RealScoutSearchWidget from '../../components/realscout-search-widget';

export default component$(() => {
  return (
    <>
      {/* Hero Section */}
      <section class="hero-section">
        <div class="container container-center">
          <h1 class="hero-title">
            Luxury Estates - <span class="highlight">Premium Las Vegas Properties</span>
          </h1>
          <p class="hero-subtitle">
            Discover Las Vegas' most prestigious luxury estates featuring custom architecture, premium finishes, and unparalleled amenities. 
            Our portfolio includes properties from $1M to multi-million dollar estates in Centennial Hills, The Ridges, and exclusive communities.
          </p>
          <div class="hero-buttons">
            <a href="/contact" class="btn btn-primary">Private Estate Consultation</a>
            <a href="/our-luxury-listings" class="btn btn-secondary">View Luxury Collection</a>
          </div>
        </div>
      </section>

      {/* Featured Luxury Properties - Primary Lead Generator */}
      <section class="featured-properties-section bg-gray-50 py-16">
        <div class="container container-center">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">
              Featured Luxury Estates
            </h2>
            <p class="text-lg text-gray-600 max-w-2xl mx-auto">
              Browse our exclusive collection of luxury estates and premium properties
            </p>
          </div>
          
          {/* RealScout Office Listings - Primary Lead Generator */}
          <RealScoutOfficeListings
            agentEncodedId="QWdlbnQtMjI1MDUw"
            sortOrder="NEWEST"
            listingStatus="For Sale"
            propertyTypes=",SFR"
            priceMin="1000000"
            priceMax="5000000"
          />
          
          <div class="text-center mt-8">
            <a href="/contact" class="btn btn-primary btn-lg">
              Schedule Private Estate Tour
            </a>
          </div>
        </div>
      </section>

      <div class="container container-center">
        <h2>Exclusive Luxury Estate Collection</h2>
        <p>Discover Las Vegas' most prestigious luxury estates featuring custom architecture, premium finishes, and unparalleled amenities. Our luxury estate portfolio includes properties from $1 million to multi-million dollar estates in Centennial Hills, The Ridges, and other exclusive Las Vegas communities with resort-style living and mountain views.</p>

        <h2>Custom Estate Features</h2>
        <p>Explore luxury estates with custom features including gourmet kitchens with high-end appliances, master suites with spa-like bathrooms, outdoor living spaces with pools and fire features, home theaters, wine cellars, and smart home technology. Each estate offers unique architectural details and premium finishes throughout.</p>

        <h2>Exclusive Community Access</h2>
        <p>Gain access to Las Vegas' most exclusive gated communities including The Ridges, MacDonald Highlands, and luxury developments in Centennial Hills. These communities offer privacy, security, and amenities including golf courses, private parks, and concierge services for discerning luxury estate buyers.</p>

        <h2>Mountain and Strip Views</h2>
        <p>Experience luxury estates with breathtaking views of the Las Vegas Strip, Red Rock Canyon, and surrounding mountain ranges. Our portfolio includes properties with panoramic views, private balconies, and outdoor living spaces designed to showcase Las Vegas' spectacular natural and urban landscapes.</p>

        <h2>Luxury Estate Investment Potential</h2>
        <p>Invest in luxury estates with strong appreciation potential, rental income opportunities, and tax advantages. Our investment analysis covers luxury market trends, rental rates for high-end properties, and long-term appreciation forecasts for Las Vegas' most desirable luxury estate locations.</p>

        <h2>Concierge Estate Services</h2>
        <p>Experience white-glove service for luxury estate transactions including private showings, off-market opportunities, and connections to Las Vegas' finest contractors and service providers. Dr. Janet Duffy provides the discretion, expertise, and attention to detail expected by luxury estate buyers and sellers.</p>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Luxury Estates - Premium Las Vegas Properties | Dr. Janet Duffy',
  meta: [
    {
      name: 'description',
      content: 'Las Vegas luxury estates with Dr. Janet Duffy. Premium properties, custom features, and exclusive communities in Centennial Hills and The Ridges.',
    },
  ],
};







