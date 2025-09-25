import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import MapsWidget from '../../components/maps-widget';
import RealScoutOfficeListings from '../../components/realscout-office-listings';
import { luxuryProperties } from '../../data/sample-properties';

export default component$(() => {
  return (
    <>
      {/* Hero Section */}
      <section class="hero-section">
        <div class="container container-center">
          <h1 class="hero-title">
            <span class="highlight">Luxury Home Sales</span>
            <br />
            Las Vegas' Most Exclusive Properties
          </h1>
          <p class="hero-subtitle">
            Expert guidance for high-end property transactions in Las Vegas' most prestigious neighborhoods and communities.
          </p>
          <div class="hero-buttons">
            <a href="/contact" class="btn btn-primary">Luxury Sales Consultation</a>
            <a href="/sell-a-home" class="btn btn-secondary">Selling Services</a>
          </div>
        </div>
      </section>

      {/* Featured Luxury Properties - Lead Generator */}
      <section class="featured-properties-section bg-gray-50 py-16">
        <div class="container container-center">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">
              Current Luxury Listings
            </h2>
            <p class="text-lg text-gray-600 max-w-2xl mx-auto">
              Browse our exclusive luxury properties for sale in Las Vegas
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
              Schedule Luxury Sales Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section class="service-overview">
        <div class="container container-center">
          <div class="overview-grid">
            <div class="overview-content">
              <h2>Luxury Real Estate Expertise</h2>
              <p>
                Dr. Janet Duffy specializes in luxury home sales, bringing years of experience and 
                deep market knowledge to help clients navigate Las Vegas' most exclusive properties. 
                From custom estates to golf course homes, we provide personalized service for 
                discerning buyers and sellers.
              </p>
              
              <h3>What Sets Us Apart</h3>
              <ul class="feature-list">
                <li>Deep knowledge of Las Vegas luxury market trends</li>
                <li>Access to exclusive off-market properties</li>
                <li>Personalized service with same-day showings</li>
                <li>Comprehensive market analysis and pricing strategies</li>
                <li>Network of luxury service providers</li>
                <li>Discrete and confidential service for high-profile clients</li>
              </ul>
            </div>
            
            <div class="overview-stats">
              <div class="stat-card">
                <h4>Average Sale Price</h4>
                <p class="stat-value">$1.2M+</p>
              </div>
              <div class="stat-card">
                <h4>Communities Served</h4>
                <p class="stat-value">15+</p>
              </div>
              <div class="stat-card">
                <h4>Years Experience</h4>
                <p class="stat-value">10+</p>
              </div>
              <div class="stat-card">
                <h4>Client Satisfaction</h4>
                <p class="stat-value">100%</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Luxury Communities */}
      <section class="luxury-communities">
        <div class="container container-center">
          <h2>Luxury Communities We Serve</h2>
          <div class="communities-grid">
            <div class="community-card">
              <h3>Red Rock Country Club</h3>
              <p>Championship golf community with custom estates and mountain views</p>
              <a href="/red-rock-country-club" class="community-link">Explore →</a>
            </div>
            <div class="community-card">
              <h3>The Ridges</h3>
              <p>Upscale community featuring custom homes and stunning mountain views</p>
              <a href="/the-ridges" class="community-link">Explore →</a>
            </div>
            <div class="community-card">
              <h3>Summerlin West</h3>
              <p>Premier master-planned community with world-class amenities</p>
              <a href="/summerlin-west" class="community-link">Explore →</a>
            </div>
            <div class="community-card">
              <h3>MacDonald Highlands</h3>
              <p>Exclusive gated community with luxury custom homes</p>
              <a href="/contact" class="community-link">Learn More →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section class="service-process">
        <div class="container container-center">
          <h2>Our Luxury Sales Process</h2>
          <div class="process-grid">
            <div class="process-step">
              <div class="step-number">1</div>
              <h3>Initial Consultation</h3>
              <p>Comprehensive discussion of your needs, preferences, and budget for luxury properties.</p>
            </div>
            <div class="process-step">
              <div class="step-number">2</div>
              <h3>Market Analysis</h3>
              <p>Detailed analysis of luxury market trends, comparable sales, and pricing strategies.</p>
            </div>
            <div class="process-step">
              <div class="step-number">3</div>
              <h3>Property Search</h3>
              <p>Curated selection of luxury properties including exclusive off-market opportunities.</p>
            </div>
            <div class="process-step">
              <div class="step-number">4</div>
              <h3>Private Showings</h3>
              <p>Personalized property tours with same-day availability and flexible scheduling.</p>
            </div>
            <div class="process-step">
              <div class="step-number">5</div>
              <h3>Negotiation</h3>
              <p>Expert negotiation to secure the best terms and price for your luxury property.</p>
            </div>
            <div class="process-step">
              <div class="step-number">6</div>
              <h3>Closing Support</h3>
              <p>Comprehensive support through closing with luxury service providers and specialists.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Luxury Properties Map */}
      <section class="luxury-map-section">
        <div class="container container-center">
          <MapsWidget 
            center={{ lat: 36.1200, lng: -115.1800 }}
            zoom={12}
            title="Luxury Properties Map"
            description="Explore Las Vegas' most exclusive neighborhoods and luxury properties with interactive property markers and neighborhood boundaries"
            height="500px"
            placeholder="Search for luxury communities, golf courses, or specific addresses..."
            showSearch={true}
            showPropertyMarkers={true}
            showNeighborhoodBoundaries={true}
            showSchoolDistricts={false}
            showSalesHeatmap={true}
            properties={luxuryProperties}
            class="luxury-map"
          />
        </div>
      </section>

      {/* Featured Properties */}
      <section class="featured-properties">
        <div class="container container-center">
          <h2>Featured Luxury Properties</h2>
          <div class="properties-grid">
            <div class="property-card">
              <div class="property-image">
                <div class="placeholder-image">Luxury Property Image</div>
                <div class="property-status">For Sale</div>
              </div>
              <div class="property-info">
                <h3>Red Rock Estate</h3>
                <p class="property-price">$2,500,000</p>
                <p class="property-details">6 Bedrooms • 6 Bathrooms • 6,500 sq ft</p>
                <p class="property-description">
                  Stunning custom estate with panoramic mountain views and resort-style amenities.
                </p>
                <a href="/contact" class="btn btn-secondary">Private Showing</a>
              </div>
            </div>

            <div class="property-card">
              <div class="property-image">
                <div class="placeholder-image">Luxury Property Image</div>
                <div class="property-status">For Sale</div>
              </div>
              <div class="property-info">
                <h3>Golf Course Villa</h3>
                <p class="property-price">$1,850,000</p>
                <p class="property-details">5 Bedrooms • 4.5 Bathrooms • 4,200 sq ft</p>
                <p class="property-description">
                  Luxury home with championship golf course views and custom finishes.
                </p>
                <a href="/contact" class="btn btn-secondary">Private Showing</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section class="cta-section">
        <div class="container container-center">
          <h2>Ready to Buy or Sell Luxury Real Estate?</h2>
          <p>Contact Dr. Janet Duffy for personalized luxury real estate guidance and exclusive property access.</p>
          <div class="cta-buttons">
            <a href="/contact" class="btn btn-primary">Contact Dr. Duffy</a>
            <a href="/properties" class="btn btn-secondary">View All Properties</a>
          </div>
        </div>
      </section>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Luxury Home Sales Las Vegas | Dr. Janet Duffy Real Estate',
  meta: [
    {
      name: 'description',
      content: 'Expert luxury home sales in Las Vegas\' most exclusive communities. Dr. Janet Duffy specializes in high-end properties with personalized service.',
    },
    {
      name: 'keywords',
      content: 'luxury homes Las Vegas, high-end real estate, custom estates, golf course homes, Red Rock Country Club',
    },
  ],
};
