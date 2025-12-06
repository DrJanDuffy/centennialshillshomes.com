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
            Discover luxury homes and investment opportunities in Las Vegas' premier communities. Browse our curated selection of exceptional properties in Centennial Hills, Summerlin, Red Rock Country Club, and other prestigious neighborhoods throughout Northwest Las Vegas.
          </p>
        </div>
      </section>
      
      {/* Property Overview Section */}
      <section class="property-overview">
        <div class="container container-center">
          <h2>Las Vegas Premier Property Portfolio</h2>
          <p>Dr. Janet Duffy presents an exceptional collection of luxury homes, investment properties, and family residences throughout Las Vegas' most desirable communities. Our portfolio features properties ranging from elegant starter homes to magnificent estates, each carefully selected to meet diverse buyer needs and investment objectives. Whether you're seeking a family home in a top-rated school district, a luxury estate with resort-style amenities, or an investment property with strong rental potential, our comprehensive property selection offers something for every buyer. Explore properties in <a href="/centennial-hills">Centennial Hills</a>, <a href="/summerlin">Summerlin</a>, <a href="/red-rock-country-club">Red Rock Country Club</a>, <a href="/the-ridges">The Ridges</a>, and other premier communities.</p>
          
          <h3>Property Types Available</h3>
          <p>Our property portfolio includes single-family homes, luxury estates, condominiums, townhouses, and investment properties across Las Vegas' premier communities. Each property type offers unique advantages, from the privacy and space of single-family homes to the low-maintenance lifestyle of condominiums. Luxury estates provide exceptional amenities and prestige, while investment properties offer strong rental income potential and appreciation opportunities.</p>
          
          <h3>Price Range Diversity</h3>
          <p>Properties in our portfolio span a wide price range, accommodating buyers from first-time homebuyers to luxury estate purchasers. Entry-level homes start in the $300,000s, mid-range properties range from $500,000 to $1,000,000, and luxury estates extend beyond $2,000,000. This diversity ensures that buyers at every price point can find exceptional properties that meet their needs and exceed their expectations.</p>
          
          <h3>Community Selection</h3>
          <p>Our properties are located in Las Vegas' most desirable communities, including <a href="/centennial-hills">Centennial Hills</a>, <a href="/summerlin">Summerlin</a>, <a href="/red-rock-country-club">Red Rock Country Club</a>, <a href="/the-ridges">The Ridges</a>, <a href="/lone-mountain">Lone Mountain</a>, and <a href="/north-las-vegas">North Las Vegas</a>. Each community offers unique characteristics, from master-planned developments with extensive amenities to established neighborhoods with mature landscaping and excellent schools. Learn more about each community's <a href="/centennial-hills-amenities">amenities</a>, <a href="/centennial-hills-schools">schools</a>, and lifestyle to find the perfect match for your needs.</p>
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
            <h2>Advanced Property Search Tools</h2>
            <p>Our comprehensive property search tools help you find your perfect home quickly and efficiently. Use advanced filters to narrow your search by location, price range, property type, bedrooms, bathrooms, square footage, and special features. Save your searches to receive automatic updates when new properties matching your criteria become available. Our search platform provides detailed property information, high-quality photos, virtual tours, and neighborhood insights to help you make informed decisions.</p>
            
            <h3>Search Filter Options</h3>
            <p>Our search filters allow you to customize your property search based on specific criteria. Filter by location to focus on particular neighborhoods or zip codes. Set price ranges to match your budget, and select property types that align with your preferences. Additional filters for bedrooms, bathrooms, square footage, lot size, year built, and special features help you find properties that meet your exact requirements.</p>
            
            <h3>Saved Searches and Alerts</h3>
            <p>Create saved searches to automatically receive notifications when new properties matching your criteria are listed. This feature ensures you never miss an opportunity, as you'll be immediately informed about new listings that meet your specifications. Saved searches can be modified at any time, and you can create multiple searches for different property types or locations.</p>
            
            <h3>Property Comparison Tools</h3>
            <p>Compare multiple properties side-by-side to evaluate features, prices, locations, and amenities. Our comparison tools help you identify the properties that best meet your needs and make informed decisions. Compare up to four properties simultaneously, reviewing details such as square footage, lot size, year built, property taxes, and neighborhood characteristics.</p>
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
          <h2>Featured Properties Showcase</h2>
          <p>Our featured properties represent the finest homes available in Las Vegas' premier communities. These carefully selected properties showcase exceptional quality, desirable locations, and outstanding value. From luxury estates with resort-style amenities to family homes in top-rated school districts, our featured properties represent diverse opportunities for buyers seeking exceptional real estate in Las Vegas.</p>
          
          <h3>Selection Criteria for Featured Properties</h3>
          <p>Properties featured in our showcase are selected based on exceptional quality, desirable locations, competitive pricing, and unique features. We prioritize properties that offer outstanding value, whether through pricing, location, amenities, or condition. Our featured properties represent the best opportunities in the current market, helping buyers identify exceptional homes that may not remain available for long.</p>
          
          <h3>Property Highlights and Features</h3>
          <p>Each featured property includes detailed information about its unique features, recent upgrades, neighborhood characteristics, and investment potential. High-quality photography, virtual tours, and detailed descriptions provide comprehensive information to help you evaluate properties before scheduling showings. This detailed information saves time and ensures you focus on properties that truly meet your needs.</p>
          <div class="properties-grid">
            <div class="property-card">
              <div class="property-image">
                <img 
                  src="/images/modern-home-exterior.jpg" 
                  alt="Modern luxury home in Centennial Hills with desert landscaping"
                  class="w-full h-64 object-cover"
                  loading="lazy"
                />
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
                <img 
                  src="/images/clubhouse-exterior.jpg" 
                  alt="Modern clubhouse building in Las Vegas community"
                  class="w-full h-64 object-cover"
                  loading="lazy"
                />
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
                <img 
                  src="/images/modern-home-exterior.jpg" 
                  alt="Contemporary single-story home with modern architecture"
                  class="w-full h-64 object-cover"
                  loading="lazy"
                />
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
                <img 
                  src="/images/modern-home-exterior.jpg" 
                  alt="Investment property in Summerlin with high ROI potential"
                  class="w-full h-64 object-cover"
                  loading="lazy"
                />
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
          <h2>Commute Planning and Location Analysis</h2>
          <p>Before making an offer, check commute times from potential properties to your workplace, school, or other important destinations. Understanding commute patterns, traffic conditions, and transportation options helps you evaluate properties based on practical daily living considerations. Our commute planning tools provide realistic travel time estimates and help you identify properties that offer convenient access to your most important destinations.</p>
          
          <h3>Peak Hour Traffic Analysis</h3>
          <p>Commute planning includes analysis of peak hour traffic patterns, which can significantly impact travel times during rush hours. Understanding these patterns helps you make informed decisions about property locations and ensures you're prepared for realistic commute times. Our tools account for typical traffic conditions and provide estimates for both peak and off-peak travel times.</p>
          
          <h3>Alternative Transportation Options</h3>
          <p>In addition to driving, consider alternative transportation options such as public transit, biking, or walking. Properties located near transit stops, bike paths, or within walking distance of amenities offer additional convenience and can reduce transportation costs. Our location analysis includes information about transportation alternatives and their availability near each property.</p>
          
          <h3>School and Amenity Proximity</h3>
          <p>Proximity to schools, shopping, dining, and recreational facilities significantly impacts daily living convenience. Our location analysis includes information about nearby amenities, helping you evaluate properties based on lifestyle factors beyond just commute times. Properties with convenient access to essential services and recreational opportunities often provide better long-term value and quality of life.</p>
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

      {/* Property Investment Information */}
      <section class="investment-info">
        <div class="container container-center">
          <h2>Investment Property Opportunities</h2>
          <p>Las Vegas offers exceptional investment property opportunities with strong rental demand, favorable tax conditions, and consistent appreciation potential. Our investment property portfolio includes single-family rentals, multi-family properties, and properties with strong cash flow potential. Each investment property includes detailed analysis of rental income potential, operating expenses, ROI projections, and appreciation forecasts to help investors make informed decisions.</p>
          
          <h3>Rental Market Analysis</h3>
          <p>Investment properties include comprehensive rental market analysis, including average rental rates, occupancy rates, tenant demographics, and rental demand trends. This analysis helps investors understand income potential and evaluate properties based on cash flow projections. Properties in high-demand rental markets often provide stable income and strong long-term returns.</p>
          
          <h3>ROI and Cash Flow Projections</h3>
          <p>Detailed ROI and cash flow projections help investors evaluate properties based on financial performance. These projections include estimates of rental income, operating expenses, maintenance costs, and net cash flow. Properties with positive cash flow and strong ROI potential offer investors reliable income and long-term wealth building opportunities.</p>
          
          <h3>Property Management Considerations</h3>
          <p>Investment properties require effective property management to maximize returns and minimize hassles. Our investment property information includes recommendations for property management services, maintenance considerations, and strategies for optimizing rental income. Properties that are well-maintained and professionally managed often provide better returns and fewer complications for investors.</p>
        </div>
      </section>
      
      {/* Neighborhood Information Section */}
      <section class="neighborhood-info">
        <div class="container container-center">
          <h2>Neighborhood Information and Community Insights</h2>
          <p>Understanding neighborhood characteristics, market trends, and community features is essential for making informed property decisions. Our comprehensive neighborhood information includes details about schools, amenities, demographics, market trends, and future development plans. This information helps buyers evaluate properties based on long-term value and quality of life factors.</p>
          
          <h3>School District Information</h3>
          <p>School district quality significantly impacts property values and family satisfaction. Our neighborhood information includes detailed school district ratings, school performance data, and information about educational opportunities. Properties in top-rated school districts often maintain stronger values and appeal to families seeking quality education for their children.</p>
          
          <h3>Community Amenities and Features</h3>
          <p>Community amenities such as parks, recreational facilities, shopping centers, and dining options enhance quality of life and property values. Our neighborhood information includes comprehensive details about available amenities and their proximity to properties. Communities with extensive amenities often provide better lifestyle experiences and stronger long-term property values.</p>
          
          <h3>Market Trends and Future Development</h3>
          <p>Understanding market trends and future development plans helps buyers evaluate properties based on appreciation potential and long-term value. Our neighborhood information includes analysis of recent market trends, planned developments, infrastructure improvements, and economic factors that may impact property values. This forward-looking analysis helps buyers make informed decisions about long-term investment potential.</p>
        </div>
      </section>
      
      {/* CTA Section */}
      <section class="cta-section">
        <div class="container container-center">
          <h2>Don't See What You're Looking For?</h2>
          <p>Dr. Janet Duffy can help you find the perfect property or market your current home. With access to exclusive listings, off-market opportunities, and comprehensive market knowledge, Dr. Duffy ensures you don't miss exceptional properties that match your criteria. Contact us today to discuss your property needs and discover opportunities that may not be publicly listed.</p>
          
          <h3>Off-Market and Exclusive Listings</h3>
          <p>Many exceptional properties are available through off-market listings and exclusive opportunities not found in public databases. Dr. Duffy's extensive network and market presence provide access to these exclusive properties, giving you advantages over other buyers. Contact us to learn about off-market opportunities that may perfectly match your property search criteria.</p>
          
          <h3>Custom Property Search Services</h3>
          <p>Our custom property search services go beyond public listings to identify properties that meet your specific needs. We analyze market data, monitor new listings, and leverage our network to find properties that match your criteria. This personalized approach ensures you see all available options, including properties that may not appear in standard searches.</p>
          
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
