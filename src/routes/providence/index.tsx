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
            Providence Real Estate - <span class="highlight">Luxury Community Living</span>
          </h1>
          <p class="hero-subtitle">
            Experience luxury living in Providence, Centennial Hills' premier gated community featuring custom estates, 
            resort-style amenities, and breathtaking mountain views with exclusive lifestyle and privacy.
          </p>
          <div class="hero-buttons">
            <a href="/contact" class="btn btn-primary">Find Providence Homes</a>
            <a href="/luxury-estates" class="btn btn-secondary">Luxury Estates</a>
          </div>
        </div>
      </section>

      {/* Featured Providence Properties - Lead Generator */}
      <section class="featured-properties-section bg-gray-50 py-16">
        <div class="container container-center">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">
              Available Providence Homes
            </h2>
            <p class="text-lg text-gray-600 max-w-2xl mx-auto">
              Browse current Providence properties for sale in this exclusive gated community
            </p>
          </div>
          
          {/* RealScout Office Listings - Primary Lead Generator */}
          <RealScoutOfficeListings
            agentEncodedId="QWdlbnQtMjI1MDUw"
            sortOrder="NEWEST"
            listingStatus="For Sale"
            propertyTypes=",SFR"
            priceMin="750000"
            priceMax="2500000"
          />
          
          <div class="text-center mt-8">
            <a href="/contact" class="btn btn-primary btn-lg">
              Schedule Private Providence Tour
            </a>
          </div>
        </div>
      </section>

      <div class="container container-center">
        <h2>Exclusive Providence Community</h2>
        <p>Experience luxury living in Providence, Centennial Hills' premier gated community featuring custom estates, resort-style amenities, and breathtaking mountain views. Providence offers an exclusive lifestyle with private security, community parks, and access to some of Las Vegas' most spectacular natural landscapes, making it ideal for discerning buyers seeking privacy and luxury.</p>

        <h2>Luxury Estate Features</h2>
        <p>Providence homes feature custom architecture, premium finishes, and luxury amenities including gourmet kitchens with high-end appliances, master suites with spa-like bathrooms, outdoor living spaces with pools and fire features, and smart home technology. Many properties include mountain views, private courtyards, and resort-style outdoor entertainment areas.</p>

        <h2>Community Amenities and Services</h2>
        <p>Providence residents enjoy access to exclusive community amenities including private parks, walking trails, and recreational facilities. The gated community provides security, privacy, and a sense of exclusivity while maintaining easy access to Centennial Hills' shopping, dining, and entertainment options.</p>

        <h2>Investment and Resale Value</h2>
        <p>Providence properties have demonstrated strong appreciation and resale values due to the community's exclusive location, luxury features, and limited inventory. The gated community's reputation for quality and privacy makes it attractive to both owner-occupants and investors seeking stable returns in Las Vegas' luxury real estate market.</p>

        <h2>Location and Accessibility</h2>
        <p>Providence's location in Centennial Hills provides convenient access to major highways including US-95 and I-215, making commuting throughout the Las Vegas valley efficient. The community is well-positioned for access to downtown Las Vegas, the Strip, and major employment centers while maintaining a private, residential atmosphere.</p>

        <h2>Luxury Market Position</h2>
        <p>Providence represents the pinnacle of luxury living in northwest Las Vegas, with properties ranging from $750,000 to over $2 million. The community's exclusivity, custom homes, and premium location make it one of Las Vegas' most desirable luxury communities for buyers seeking the ultimate in privacy and sophistication.</p>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Providence Real Estate - Luxury Community Living | Dr. Janet Duffy',
  meta: [
    {
      name: 'description',
      content: 'Explore Providence real estate with Dr. Janet Duffy. Luxury gated community, custom estates, and exclusive amenities in Centennial Hills.',
    },
  ],
};







