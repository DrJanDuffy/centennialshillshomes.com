import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import CommuteWidget from '../../components/commute-widget';
import MapsWidget from '../../components/maps-widget';
import SEOStructuredData from '../../components/seo-structured-data';
import { centennialHillsProperties } from '../../data/sample-properties';
import { pageSchemas } from '../../components/seo-structured-data';
import FAQSection, { realtorServiceFAQs } from '../../components/faq-section';

export default component$(() => {
  // Schema data for Centennial Hills neighborhood page
  const centennialHillsSchema = pageSchemas.neighborhoodPage({
    name: "Centennial Hills",
    slug: "centennial-hills",
    geo: {
      "@type": "GeoCoordinates",
      "latitude": 36.3047,
      "longitude": -115.3019
    }
  });

  return (
    <>
      {/* SEO Structured Data */}
      <SEOStructuredData 
        type="LocalBusiness" 
        data={centennialHillsSchema} 
      />

      {/* Hero Section */}
      <section class="hero-section">
        <div class="container container-center">
          <h1 class="hero-title">
            <span class="highlight">Centennial Hills</span>
            <br />
            Master-Planned Living in Las Vegas
          </h1>
          <p class="hero-subtitle">
            Discover modern amenities, family-friendly atmosphere, and exceptional value in one of Las Vegas' most desirable communities.
          </p>
        </div>
      </section>

      {/* Community Overview */}
      <section class="community-overview">
        <div class="container container-center">
          <div class="overview-grid">
            <div class="overview-content">
              <h2>About Centennial Hills</h2>
              <p>
                Centennial Hills is a master-planned community located in northwest Las Vegas, offering residents 
                a perfect blend of suburban tranquility and urban convenience. This family-friendly neighborhood 
                features modern amenities, excellent schools, and a strong sense of community. Developed over the past two decades, Centennial Hills has grown into one of Las Vegas' most desirable residential areas, attracting families, professionals, and retirees seeking quality living in a well-planned environment.
              </p>
              
              <h3>Community Development and Growth</h3>
              <p>Centennial Hills represents one of Las Vegas' most successful master-planned communities, with development beginning in the early 2000s and continuing through today. The community's thoughtful planning includes diverse housing options, extensive amenities, and infrastructure designed to support long-term growth. This planned approach has created a cohesive neighborhood with consistent quality and value, making it attractive to both homebuyers and real estate investors.</p>
              
              <h3>Geographic Location and Accessibility</h3>
              <p>Centennial Hills' location in northwest Las Vegas provides residents with convenient access to major employment centers, shopping districts, and entertainment venues while maintaining a suburban atmosphere. The community is strategically positioned near major highways including US-95 and the 215 Beltway, facilitating easy commutes throughout the Las Vegas Valley. This accessibility, combined with the area's natural beauty and proximity to Red Rock Canyon, creates an ideal balance between convenience and lifestyle.</p>
              
              <h3>Key Features</h3>
              <ul class="feature-list">
                <li>Master-planned community with modern infrastructure</li>
                <li>Family-friendly atmosphere with parks and recreational facilities</li>
                <li>Excellent schools in the Clark County School District</li>
                <li>Convenient access to shopping, dining, and entertainment</li>
                <li>Close proximity to Red Rock Canyon National Conservation Area</li>
                <li>Growing area with new developments and amenities</li>
              </ul>
              
              <h3>Housing Diversity and Options</h3>
              <p>Centennial Hills offers diverse housing options to accommodate various lifestyles and budgets. The community includes single-family homes ranging from starter homes to luxury estates, providing options for first-time buyers, growing families, and luxury home purchasers. This diversity ensures that buyers at different price points can find properties that meet their needs while enjoying the benefits of living in a master-planned community.</p>
              
              <h3>Community Character and Lifestyle</h3>
              <p>The community's character reflects its family-oriented planning, with safe neighborhoods, well-maintained common areas, and active community associations. Residents enjoy a strong sense of community, with neighborhood events, recreational programs, and social activities that bring neighbors together. This community spirit, combined with the area's natural beauty and modern amenities, creates a desirable lifestyle that appeals to families and individuals seeking quality living in Las Vegas.</p>
            </div>
            
            <div class="overview-stats">
              <div class="stat-card">
                <h4>Average Home Price</h4>
                <p class="stat-value">$650,000</p>
              </div>
              <div class="stat-card">
                <h4>Home Styles</h4>
                <p class="stat-value">Single Family</p>
              </div>
              <div class="stat-card">
                <h4>Year Built</h4>
                <p class="stat-value">2000-2024</p>
              </div>
              <div class="stat-card">
                <h4>Community Size</h4>
                <p class="stat-value">15,000+ Homes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section class="amenities-section">
        <div class="container container-center">
          <h2>Community Amenities and Services</h2>
          <p>Centennial Hills offers extensive amenities and services that enhance quality of life and property values. The community's master-planned design includes parks, recreational facilities, shopping centers, and essential services within convenient distances. These amenities contribute to the area's desirability and help maintain strong property values by providing residents with everything they need for comfortable, convenient living.</p>
          
          <div class="amenities-grid">
            <div class="amenity-card">
              <h3>Parks & Recreation</h3>
              <p>Multiple parks, walking trails, and recreational facilities for families. The community includes several neighborhood parks with playgrounds, sports courts, and picnic areas. Walking and biking trails connect neighborhoods and provide safe routes for exercise and recreation. These recreational amenities promote active lifestyles and provide gathering spaces for families and neighbors.</p>
            </div>
            <div class="amenity-card">
              <h3>Schools</h3>
              <p>Top-rated schools in the Clark County School District. Centennial Hills is served by highly-rated elementary, middle, and high schools that consistently perform above district and state averages. The area's schools offer comprehensive educational programs, extracurricular activities, and strong community support. This educational quality attracts families and contributes to property values.</p>
            </div>
            <div class="amenity-card">
              <h3>Shopping</h3>
              <p>Centennial Hills Marketplace and nearby retail centers provide convenient access to shopping, dining, and services. The area includes grocery stores, restaurants, banks, and specialty retailers within minutes of most homes. This retail convenience saves time and enhances daily living, while the variety of options ensures residents can find everything they need locally.</p>
            </div>
            <div class="amenity-card">
              <h3>Healthcare</h3>
              <p>Medical facilities and healthcare services nearby include urgent care centers, medical offices, and access to major hospitals. The area's healthcare infrastructure ensures residents have convenient access to quality medical care for routine and emergency needs. This healthcare accessibility is particularly important for families and retirees who value proximity to medical services.</p>
            </div>
            <div class="amenity-card">
              <h3>Transportation</h3>
              <p>Easy access to major highways and public transportation facilitates commutes throughout the Las Vegas Valley. The community's location near US-95 and the 215 Beltway provides convenient routes to employment centers, entertainment districts, and the Las Vegas Strip. Public transportation options supplement driving, offering alternatives for residents who prefer not to drive.</p>
            </div>
            <div class="amenity-card">
              <h3>Entertainment</h3>
              <p>Close to Red Rock Canyon and Las Vegas attractions provides residents with easy access to outdoor recreation and world-class entertainment. Red Rock Canyon National Conservation Area offers hiking, rock climbing, and scenic drives just minutes away. The Las Vegas Strip and downtown Las Vegas are within reasonable driving distance, providing access to shows, dining, and entertainment options.</p>
            </div>
          </div>
          
          <h3>Additional Community Features</h3>
          <p>Beyond the primary amenities, Centennial Hills offers additional features that enhance community living. These include community centers, swimming pools, fitness facilities, and organized activities for residents of all ages. The community's active homeowners associations maintain common areas, organize events, and ensure that community standards are maintained, contributing to the area's overall quality and appeal.</p>
        </div>
      </section>
      
      {/* Real Estate Market Section */}
      <section class="market-section">
        <div class="container container-center">
          <h2>Centennial Hills Real Estate Market</h2>
          <p>The Centennial Hills real estate market has demonstrated consistent strength and growth, making it an attractive area for both homebuyers and investors. The community's master-planned design, quality schools, and extensive amenities have contributed to strong property values and steady appreciation. Understanding market trends, pricing patterns, and investment potential helps buyers make informed decisions about purchasing property in this desirable community.</p>
          
          <h3>Market Trends and Appreciation</h3>
          <p>Centennial Hills has experienced consistent appreciation over the years, with property values increasing steadily as the community has matured and amenities have expanded. The area's desirability, combined with limited available land for new development, has created a supply-demand dynamic that supports property values. Recent market trends show continued strength, with properties selling quickly and often receiving multiple offers, particularly in desirable price ranges and locations.</p>
          
          <h3>Price Ranges and Property Values</h3>
          <p>Property values in Centennial Hills span a wide range, accommodating buyers from various price points. Entry-level homes typically start in the $400,000s, mid-range properties range from $500,000 to $800,000, and luxury homes extend beyond $1,000,000. This price diversity ensures that buyers at different budget levels can find properties in the community, while the overall quality and amenities maintain strong values across all price ranges.</p>
          
          <h3>Investment Potential</h3>
          <p>Centennial Hills offers strong investment potential for real estate investors seeking rental properties or long-term appreciation. The area's desirability, quality schools, and amenities create consistent rental demand, while the community's growth and development support long-term appreciation. Properties in Centennial Hills often provide positive cash flow for investors and strong returns over time, making the area attractive for both individual and portfolio investors.</p>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section class="map-section">
        <div class="container container-center">
          <MapsWidget 
            center={{ lat: 36.3047, lng: -115.3019 }}
            zoom={14}
            title="Centennial Hills Interactive Property Map - Northwest Las Vegas Real Estate"
            description="Explore Centennial Hills properties, amenities, and surrounding areas in northwest Las Vegas. Discover available homes, neighborhood boundaries, school districts, and local attractions with our interactive real estate map."
            height="500px"
            placeholder="Search for specific addresses, parks, schools, or nearby attractions..."
            showSearch={true}
            showPropertyMarkers={true}
            showNeighborhoodBoundaries={true}
            showSchoolDistricts={true}
            showSalesHeatmap={false}
            properties={centennialHillsProperties}
            class="community-map"
            ariaLabel="Interactive Centennial Hills property map with real estate search"
            ariaDescription="Use this interactive map to explore Centennial Hills properties, neighborhood boundaries, school districts, and local amenities in northwest Las Vegas."
            locationName="Centennial Hills, Las Vegas"
            canonicalUrl="https://www.centennialhillshomesforsale.com/centennial-hills"
          />
        </div>
      </section>

      {/* Featured Properties */}
      <section class="featured-properties">
        <div class="container container-center">
          <h2>Featured Properties in Centennial Hills</h2>
          <div class="properties-grid">
            <div class="property-card">
              <div class="property-image">
                <div class="placeholder-image">Property Image</div>
                <div class="property-status">For Sale</div>
              </div>
              <div class="property-info">
                <h3>Modern Family Home</h3>
                <p class="property-price">$675,000</p>
                <p class="property-details">4 Bedrooms • 3 Bathrooms • 2,800 sq ft</p>
                <p class="property-description">
                  Beautiful single-family home with open floor plan and modern finishes.
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
                <h3>Spacious Family Residence</h3>
                <p class="property-price">$725,000</p>
                <p class="property-details">5 Bedrooms • 3.5 Bathrooms • 3,200 sq ft</p>
                <p class="property-description">
                  Large family home with pool and mountain views.
                </p>
                <a href="/contact" class="btn btn-secondary">Schedule Showing</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commute Planning Section */}
      <section class="commute-planning-section">
        <div class="container container-center">
          <h2>Commute from Centennial Hills</h2>
          <p>See how long it takes to get to work, entertainment, or other destinations from Centennial Hills homes.</p>
          <CommuteWidget 
            center={{ lat: 36.3047, lng: -115.3019 }} // Centennial Hills coordinates
            title="Centennial Hills Commute Times"
            description="Add destinations to see travel times from Centennial Hills"
            class="community-widget"
          />
          <div class="commute-highlights">
            <h3>Popular Destinations from Centennial Hills:</h3>
            <ul>
              <li><strong>Las Vegas Strip:</strong> 20-30 minutes</li>
              <li><strong>Downtown Las Vegas:</strong> 25-35 minutes</li>
              <li><strong>McCarran Airport:</strong> 30-45 minutes</li>
              <li><strong>Red Rock Canyon:</strong> 15-25 minutes</li>
              <li><strong>Summerlin:</strong> 15-20 minutes</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section class="cta-section">
        <div class="container container-center">
          <h2>Interested in Centennial Hills?</h2>
          <p>Dr. Janet Duffy can help you find the perfect home in this wonderful community.</p>
          <div class="cta-buttons">
            <a href="/contact" class="btn btn-primary">Contact Dr. Duffy</a>
            <a href="/properties" class="btn btn-secondary">View All Properties</a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection 
        faqs={realtorServiceFAQs}
        title="Frequently Asked Questions About Real Estate in Centennial Hills"
        className="bg-gray-50"
      />
    </>
  );
});

export const head: DocumentHead = {
  title: 'Centennial Hills Homes for Sale | Interactive Property Map | Las Vegas Real Estate | Dr. Janet Duffy',
  meta: [
    {
      name: 'description',
      content: 'Explore Centennial Hills homes for sale with our interactive property map. Master-planned community in northwest Las Vegas featuring modern amenities, family-friendly atmosphere, excellent schools, and convenient access to Red Rock Canyon. Dr. Janet Duffy specializes in Centennial Hills real estate.',
    },
    {
      name: 'author',
      content: 'Dr. Janet Duffy, REALTOR®',
    },
    {
      name: 'geo.region',
      content: 'US-NV',
    },
    {
      name: 'geo.placename',
      content: 'Centennial Hills, Las Vegas, Nevada',
    },
    {
      name: 'geo.position',
      content: '36.3047;-115.3019',
    },
    {
      name: 'ICBM',
      content: '36.3047, -115.3019',
    },
    {
      property: 'og:title',
      content: 'Centennial Hills Interactive Property Map | Homes for Sale | Las Vegas Real Estate',
    },
    {
      property: 'og:description',
      content: 'Explore Centennial Hills homes for sale with our interactive property map. Master-planned community in northwest Las Vegas with modern amenities and excellent schools.',
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      property: 'og:url',
      content: 'https://www.centennialhillshomesforsale.com/centennial-hills',
    },
    {
      property: 'og:image',
      content: 'https://www.centennialhillshomesforsale.com/images/centennial-hills-property-map.jpg',
    },
    {
      property: 'og:site_name',
      content: 'Centennial Hills Real Estate',
    },
    {
      property: 'og:locale',
      content: 'en_US',
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      name: 'twitter:title',
      content: 'Centennial Hills Homes for Sale | Interactive Property Map',
    },
    {
      name: 'twitter:description',
      content: 'Explore Centennial Hills properties with our interactive map featuring homes, neighborhood boundaries, and school districts.',
    },
    {
      name: 'robots',
      content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    },
    {
      name: 'googlebot',
      content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    },
  ],
};
