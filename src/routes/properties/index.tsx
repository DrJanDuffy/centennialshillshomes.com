import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import CommuteWidget from '../../components/commute-widget';
import MapsWidget from '../../components/maps-widget';
import RealScoutOfficeListings from '../../components/realscout-office-listings';
import SEOStructuredData from '../../components/seo-structured-data';
import { centennialHillsProperties, luxuryProperties } from '../../data/sample-properties';
import { pageSchemas } from '../../components/seo-structured-data';

export default component$(() => {
  // Schema data for properties page
  const propertiesSchema = pageSchemas.propertyListing({
    name: "Las Vegas Luxury Properties",
    description: "Browse luxury homes and investment properties in Las Vegas premier communities including Centennial Hills, Red Rock Country Club, and Summerlin",
    url: "http://centennialhillshomesforsale.com/properties",
    price: "500000",
    bedrooms: 4,
    bathrooms: 3,
    squareFeet: "3200",
    yearBuilt: "2020"
  });

  return (
    <>
      {/* SEO Structured Data */}
      <SEOStructuredData 
        type="RealEstateListing" 
        data={propertiesSchema} 
      />

      {/* Hero Section */}
      <section class="hero-section">
        <div class="container container-center">
          <h1 class="hero-title">
            Featured <span class="highlight">Properties</span>
          </h1>
          <p class="hero-subtitle">
            Discover luxury homes and investment opportunities in Las Vegas' premier communities
          </p>
        </div>
      </section>

      {/* Featured Properties - Primary Lead Generator */}
      <section class="featured-properties-section bg-gray-50 py-16">
        <div class="container container-center">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">
              Featured Las Vegas Properties
            </h2>
            <p class="text-lg text-gray-600 max-w-2xl mx-auto">
              Browse our latest luxury homes and investment opportunities in Las Vegas' premier communities
            </p>
          </div>
          
          {/* RealScout Office Listings - Primary Lead Generator */}
          <RealScoutOfficeListings
            agentEncodedId="QWdlbnQtMjI1MDUw"
            sortOrder="NEWEST"
            listingStatus="For Sale"
            propertyTypes=",SFR"
            priceMin="500000"
            priceMax="2000000"
          />
          
          <div class="text-center mt-8">
            <a href="/mls-search" class="btn btn-primary btn-lg">
              View All Available Properties
            </a>
          </div>
        </div>
      </section>

      {/* Property Search */}
      <section class="property-search">
        <div class="container container-center">
          <div class="search-form">
            <h2>Find Your Perfect Home</h2>
            <form class="search-grid">
              <div class="search-field">
                <label for="location">Location</label>
                <select id="location" name="location">
                  <option value="">All Areas</option>
                  <option value="centennial-hills">Centennial Hills</option>
                  <option value="red-rock-country-club">Red Rock Country Club</option>
                  <option value="the-ridges">The Ridges</option>
                  <option value="summerlin-west">Summerlin West</option>
                  <option value="lone-mountain">Lone Mountain</option>
                  <option value="north-las-vegas">North Las Vegas</option>
                </select>
              </div>
              
              <div class="search-field">
                <label for="price-min">Min Price</label>
                <select id="price-min" name="price-min">
                  <option value="">Any</option>
                  <option value="500000">$500,000</option>
                  <option value="750000">$750,000</option>
                  <option value="1000000">$1,000,000</option>
                  <option value="1500000">$1,500,000</option>
                  <option value="2000000">$2,000,000+</option>
                </select>
              </div>
              
              <div class="search-field">
                <label for="price-max">Max Price</label>
                <select id="price-max" name="price-max">
                  <option value="">Any</option>
                  <option value="750000">$750,000</option>
                  <option value="1000000">$1,000,000</option>
                  <option value="1500000">$1,500,000</option>
                  <option value="2000000">$2,000,000</option>
                  <option value="3000000">$3,000,000+</option>
                </select>
              </div>
              
              <div class="search-field">
                <label for="bedrooms">Bedrooms</label>
                <select id="bedrooms" name="bedrooms">
                  <option value="">Any</option>
                  <option value="3">3+</option>
                  <option value="4">4+</option>
                  <option value="5">5+</option>
                </select>
              </div>
              
              <button type="submit" class="btn btn-primary">Search Properties</button>
            </form>
          </div>
        </div>
      </section>

      {/* Interactive Properties Map */}
      <section class="properties-map-section">
        <div class="container container-center">
          <MapsWidget 
            center={{ lat: 36.1699, lng: -115.1398 }}
            zoom={11}
            title="Las Vegas Properties Map"
            description="Explore all available properties with interactive markers, neighborhood boundaries, and school districts. Click on property markers for detailed information."
            height="600px"
            placeholder="Search for specific addresses, neighborhoods, or areas..."
            showSearch={true}
            showPropertyMarkers={true}
            showNeighborhoodBoundaries={true}
            showSchoolDistricts={true}
            showSalesHeatmap={true}
            properties={[...centennialHillsProperties, ...luxuryProperties]}
            class="properties-map"
          />
        </div>
      </section>

      {/* Featured Properties */}
      <section class="featured-properties">
        <div class="container container-center">
          <h2>Featured Properties</h2>
          <div class="properties-grid">
            <div class="property-card">
              <div class="property-image">
                <div class="placeholder-image">Property Image</div>
                <div class="property-status">For Sale</div>
              </div>
              <div class="property-info">
                <h3>Luxury Home in Centennial Hills</h3>
                <p class="property-price">$1,250,000</p>
                <p class="property-details">4 Bedrooms • 3.5 Bathrooms • 3,200 sq ft</p>
                <p class="property-description">
                  Stunning custom home with modern amenities, open floor plan, and beautiful mountain views.
                </p>
                <a href="/contact" class="btn btn-secondary">Schedule Showing</a>
              </div>
            </div>

            <div class="property-card">
              <div class="property-image">
                <div class="placeholder-image">Property Image</div>
                <div class="property-status">For Sale</div>
              </div>
              <div class="property-info">
                <h3>Golf Course Home in Red Rock</h3>
                <p class="property-price">$2,100,000</p>
                <p class="property-details">5 Bedrooms • 4 Bathrooms • 4,500 sq ft</p>
                <p class="property-description">
                  Exclusive gated community home with championship golf course views and resort-style amenities.
                </p>
                <a href="/contact" class="btn btn-secondary">Schedule Showing</a>
              </div>
            </div>

            <div class="property-card">
              <div class="property-image">
                <div class="placeholder-image">Property Image</div>
                <div class="property-status">For Sale</div>
              </div>
              <div class="property-info">
                <h3>Modern Home in The Ridges</h3>
                <p class="property-price">$1,850,000</p>
                <p class="property-details">4 Bedrooms • 3 Bathrooms • 3,800 sq ft</p>
                <p class="property-description">
                  Contemporary design with smart home features, pool, and panoramic city views.
                </p>
                <a href="/contact" class="btn btn-secondary">Schedule Showing</a>
              </div>
            </div>

            <div class="property-card">
              <div class="property-image">
                <div class="placeholder-image">Property Image</div>
                <div class="property-status">Investment</div>
              </div>
              <div class="property-info">
                <h3>Investment Property in Summerlin</h3>
                <p class="property-price">$950,000</p>
                <p class="property-details">3 Bedrooms • 2 Bathrooms • 2,200 sq ft</p>
                <p class="property-description">
                  Excellent rental property with high ROI potential in premier master-planned community.
                </p>
                <a href="/contact" class="btn btn-secondary">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commute Planning Section */}
      <section class="commute-planning-section">
        <div class="container container-center">
          <h2>Plan Your Commute</h2>
          <p>Before making an offer, check commute times from potential properties to your workplace, school, or other important destinations.</p>
          <CommuteWidget 
            center={{ lat: 36.1898207, lng: -115.3130859 }}
            title="Property Commute Calculator"
            description="Add destinations to see travel times from Las Vegas properties"
            class="properties-widget"
          />
          <div class="commute-tips">
            <h3>Commute Planning Tips:</h3>
            <ul>
              <li>Test commute times during peak hours (7-9 AM, 5-7 PM)</li>
              <li>Consider alternative routes and transportation options</li>
              <li>Factor in weather conditions and seasonal traffic patterns</li>
              <li>Check public transit availability and schedules</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section class="cta-section">
        <div class="container container-center">
          <h2>Don't See What You're Looking For?</h2>
          <p>Dr. Janet Duffy can help you find the perfect property or market your current home.</p>
          <div class="cta-buttons">
            <a href="/contact" class="btn btn-primary">Contact Us</a>
            <a href="/market-analysis" class="btn btn-secondary">Get Market Analysis</a>
          </div>
        </div>
      </section>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Las Vegas Properties for Sale | Dr. Janet Duffy Real Estate',
  meta: [
    {
      name: 'description',
      content: 'Browse luxury homes and investment properties in Las Vegas. Dr. Janet Duffy specializes in Centennial Hills, Red Rock Country Club, and other premier communities.',
    },
  ],
};
