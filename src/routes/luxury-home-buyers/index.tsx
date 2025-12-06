import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import RealScoutOfficeListings from '../../components/realscout-office-listings';
import RealScoutSearchWidget from '../../components/realscout-search-widget';
import FAQSection, { buyerServiceFAQs } from '../../components/faq-section';

export default component$(() => {
  return (
    <>
      {/* Hero Section */}
      <section class="hero-section">
        <div class="container container-center">
          <h1 class="hero-title">
            Luxury Home Buyers - <span class="highlight">Premium Las Vegas Properties</span>
          </h1>
          <p class="hero-subtitle">
            Experience white-glove service for luxury home buyers in Las Vegas with Dr. Janet Duffy's specialized expertise in premium properties. 
            Private showings, off-market opportunities, and access to exclusive luxury communities. Top 1% Las Vegas REALTOR® with 30+ years of research expertise, available 24/7 for executive clients.
          </p>
          <div class="hero-buttons">
            <a href="/contact" class="btn btn-primary">Luxury Buyer Consultation</a>
            <a href="/luxury-estates" class="btn btn-secondary">View Luxury Collection</a>
          </div>
        </div>
      </section>

      {/* Advanced Search for Luxury Buyers */}
      <section class="luxury-search-section py-16">
        <div class="container container-center">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">
              Advanced Luxury Property Search
            </h2>
            <p class="text-lg text-gray-600 max-w-2xl mx-auto">
              Search for luxury properties with advanced filters and criteria
            </p>
          </div>
          
          {/* RealScout Advanced Search Widget */}
          <RealScoutSearchWidget
            agentEncodedId="QWdlbnQtMjI1MDUw"
            height="400px"
          />
        </div>
      </section>

      {/* Featured Luxury Properties - Lead Generator */}
      <section class="featured-properties-section bg-gray-50 py-16">
        <div class="container container-center">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">
              Featured Luxury Properties
            </h2>
            <p class="text-lg text-gray-600 max-w-2xl mx-auto">
              Browse our exclusive collection of luxury homes and premium estates
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
              Schedule Private Luxury Consultation
            </a>
          </div>
        </div>
      </section>

      <div class="container container-center">
        <h2>Exclusive Luxury Real Estate Services</h2>
        <p>Experience white-glove service for luxury home buyers in Las Vegas with Dr. Janet Duffy's specialized expertise in premium properties. Our luxury buyer services include private showings, off-market opportunities, and access to exclusive Centennial Hills estates, Summerlin luxury communities, and high-end properties throughout Las Vegas.</p>

        <h2>Luxury Market Expertise</h2>
        <p>Navigate the Las Vegas luxury real estate market with confidence, understanding market dynamics, pricing strategies, and investment potential. Our luxury market analysis covers properties from $750,000 to multi-million dollar estates, with specialized knowledge of Centennial Hills luxury developments and exclusive communities.</p>

        <h2>Exclusive Property Access</h2>
        <p>Gain access to off-market luxury properties, pre-market listings, and exclusive communities not available to the general public. Our network of luxury real estate professionals provides early access to premium properties in Centennial Hills, The Ridges, and other exclusive Las Vegas communities.</p>

        <h2>Custom Home and Estate Services</h2>
        <p>Explore custom home opportunities, luxury estate developments, and high-end new construction in Las Vegas' premier locations. We work with luxury builders, architects, and designers to help you create or find the perfect luxury home that meets your exact specifications and lifestyle requirements.</p>

        <h2>Investment and Portfolio Building</h2>
        <p>Build your luxury real estate portfolio with strategic investments in Las Vegas' most desirable locations. Our investment analysis covers luxury market trends, rental potential, appreciation forecasts, and tax advantages for high-end property investments in Centennial Hills and surrounding luxury communities.</p>

        <h2>Concierge-Level Client Service</h2>
        <p>Experience personalized luxury service including private transportation, exclusive property tours, and connections to Las Vegas' finest service providers. Dr. Janet Duffy provides the attention to detail and discretion expected by luxury home buyers, ensuring a seamless and confidential transaction process.</p>
      </div>

      {/* FAQ Section */}
      <FAQSection 
        faqs={buyerServiceFAQs}
        title="Frequently Asked Questions for Luxury Home Buyers in Centennial Hills"
        className="bg-gray-50"
      />
    </>
  );
});

export const head: DocumentHead = {
  title: 'Luxury Home Buyers - Premium Las Vegas Properties | Dr. Janet Duffy',
  meta: [
    {
      name: 'description',
      content: 'Exclusive luxury home buyer services with Dr. Janet Duffy, Top 1% Las Vegas REALTOR®. Premium Las Vegas properties, off-market opportunities, and custom estates in Centennial Hills. Available 24/7 for executive clients.',
    },
  ],
};







