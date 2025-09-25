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
            Aliante Real Estate - <span class="highlight">Master-Planned Community</span>
          </h1>
          <p class="hero-subtitle">
            Experience the best of master-planned community living in Aliante, North Las Vegas' premier residential development. 
            Carefully designed neighborhoods, extensive amenities, and a strong sense of community.
          </p>
          <div class="hero-buttons">
            <a href="/contact" class="btn btn-primary">Find Aliante Homes</a>
            <a href="/properties" class="btn btn-secondary">View All Properties</a>
          </div>
        </div>
      </section>

      {/* Featured Aliante Properties - Lead Generator */}
      <section class="featured-properties-section bg-gray-50 py-16">
        <div class="container container-center">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">
              Available Aliante Homes
            </h2>
            <p class="text-lg text-gray-600 max-w-2xl mx-auto">
              Browse current Aliante properties for sale in this premier master-planned community
            </p>
          </div>
          
          {/* RealScout Office Listings - Primary Lead Generator */}
          <RealScoutOfficeListings
            agentEncodedId="QWdlbnQtMjI1MDUw"
            sortOrder="NEWEST"
            listingStatus="For Sale"
            propertyTypes=",SFR"
            priceMin="400000"
            priceMax="800000"
          />
          
          <div class="text-center mt-8">
            <a href="/contact" class="btn btn-primary btn-lg">
              Schedule Aliante Community Tour
            </a>
          </div>
        </div>
      </section>

      <div class="container container-center">
        <h2>Premier Master-Planned Living</h2>
        <p>Experience the best of master-planned community living in Aliante, North Las Vegas' premier residential development. Aliante features carefully designed neighborhoods, extensive amenities, and a strong sense of community, making it one of Las Vegas' most desirable places to live with homes ranging from starter properties to luxury estates.</p>

        <h2>Community Amenities and Features</h2>
        <p>Aliante residents enjoy access to world-class amenities including Aliante Golf Club, Aliante Nature Discovery Park, and Aliante Library. The community features walking trails, playgrounds, and recreational facilities designed to enhance quality of life and provide opportunities for outdoor activities and family recreation.</p>

        <h2>Diverse Housing Options</h2>
        <p>Aliante offers diverse housing options including single-family homes, townhouses, and luxury estates across multiple neighborhoods. The community features homes from various builders with different architectural styles, floor plans, and price points to accommodate buyers at different stages of life and budget levels.</p>

        <h2>Excellent Schools and Education</h2>
        <p>Aliante is served by the Clark County School District with highly-rated schools including Aliante Elementary, Del Webb Middle School, and Shadow Ridge High School. The area also provides access to private school options and is within reasonable distance to higher education institutions including UNLV and Nevada State College.</p>

        <h2>Convenient Location and Access</h2>
        <p>Aliante's location in North Las Vegas provides convenient access to major highways including I-15 and US-95, making commuting throughout the Las Vegas valley efficient. The community is well-positioned for access to downtown Las Vegas, the Strip, and major employment centers while maintaining a suburban atmosphere.</p>

        <h2>Investment and Resale Value</h2>
        <p>Aliante properties have shown consistent appreciation and strong resale values due to the community's master-planned design, quality amenities, and desirable location. The community's reputation for quality living and excellent schools makes it attractive to both owner-occupants and real estate investors seeking stable returns.</p>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Aliante Real Estate - Master-Planned Community | Dr. Janet Duffy',
  meta: [
    {
      name: 'description',
      content: 'Explore Aliante real estate with Dr. Janet Duffy. Master-planned community homes, amenities, and investment opportunities in North Las Vegas.',
    },
  ],
};







