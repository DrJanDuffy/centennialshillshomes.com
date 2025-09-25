import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { HiHomeMini, HiMapPinMini, HiPhoneMini, HiStarMini } from '@qwikest/icons/heroicons';
import { LuSearch, LuTrendingUp, LuUsers, LuCalendar } from '@qwikest/icons/lucide';

export default component$(() => {
  return (
    <>
      {/* Hero Section */}
      <section class="hero-section">
        <div class="container container-center">
          <h1 class="hero-title">
            Centennial Hills Homes in <span class="highlight">ZIP Code 89135</span>
          </h1>
          <p class="hero-subtitle">
            Discover Central Centennial Hills real estate in ZIP code 89135. Established neighborhoods, excellent schools, 
            and mature landscaping make this area perfect for families seeking a stable, well-established community.
          </p>
          <div class="hero-search">
            <div class="search-box">
              <LuSearch class="search-icon" />
              <input type="text" placeholder="Search homes in Centennial Hills 89135..." />
              <button class="btn btn-primary">Search Properties</button>
            </div>
          </div>
          <div class="hero-buttons">
            <a href="/centennial-hills-homes-for-sale" class="btn btn-primary">View All 89135 Homes</a>
            <a href="/contact" class="btn btn-secondary">Get Market Report</a>
          </div>
        </div>
      </section>

      {/* Neighborhood Overview */}
      <section class="neighborhood-overview">
        <div class="container container-center">
          <h2>Central Centennial Hills (89135) Overview</h2>
          <div class="overview-grid">
            <div class="overview-card">
              <HiMapPinMini class="overview-icon" />
              <h3>Prime Location</h3>
              <p>Centennial Hills ZIP code 89135 represents the heart of this master-planned community. Located in Northwest Las Vegas, this area offers the perfect balance of suburban tranquility and urban convenience, with easy access to major highways, shopping centers, and entertainment venues.</p>
            </div>
            <div class="overview-card">
              <HiStarMini class="overview-icon" />
              <h3>Established Community</h3>
              <p>Central Centennial Hills features well-established neighborhoods with mature landscaping, tree-lined streets, and a strong sense of community. The area has been carefully developed over the years to create a family-friendly environment with excellent amenities and services.</p>
            </div>
            <div class="overview-card">
              <LuTrendingUp class="overview-icon" />
              <h3>Strong Investment</h3>
              <p>Centennial Hills 89135 has shown consistent appreciation and strong market performance. With established infrastructure, excellent schools, and growing demand, homes in this area represent excellent long-term investment opportunities for both homeowners and investors.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section class="featured-properties">
        <div class="container container-center">
          <h2>Featured Centennial Hills 89135 Homes</h2>
          <div class="properties-grid">
            <div class="property-card">
              <div class="property-image">
                <div class="property-badge">New Listing</div>
              </div>
              <div class="property-info">
                <h3>Central Centennial Hills Family Home</h3>
                <p class="property-address">Centennial Hills, Las Vegas, NV 89135</p>
                <div class="property-details">
                  <span>4 Bed</span>
                  <span>3 Bath</span>
                  <span>2,850 Sq Ft</span>
                  <span>0.25 Acres</span>
                </div>
                <p class="property-price">$485,000</p>
                <p class="property-description">Beautiful family home in Central Centennial Hills featuring mature landscaping, updated kitchen, and spacious living areas perfect for growing families.</p>
                <a href="/properties" class="btn btn-outline">View Details</a>
              </div>
            </div>

            <div class="property-card">
              <div class="property-image">
                <div class="property-badge">Price Reduced</div>
              </div>
              <div class="property-info">
                <h3>Centennial Hills 89135 Estate</h3>
                <p class="property-address">Centennial Hills, Las Vegas, NV 89135</p>
                <div class="property-details">
                  <span>5 Bed</span>
                  <span>4 Bath</span>
                  <span>3,200 Sq Ft</span>
                  <span>0.35 Acres</span>
                </div>
                <p class="property-price">$625,000</p>
                <p class="property-description">Spacious estate in Central Centennial Hills with custom finishes, private backyard, and proximity to excellent schools and amenities.</p>
                <a href="/properties" class="btn btn-outline">View Details</a>
              </div>
            </div>

            <div class="property-card">
              <div class="property-image">
                <div class="property-badge">Move-In Ready</div>
              </div>
              <div class="property-info">
                <h3>Centennial Hills 89135 Townhouse</h3>
                <p class="property-address">Centennial Hills, Las Vegas, NV 89135</p>
                <div class="property-details">
                  <span>3 Bed</span>
                  <span>2.5 Bath</span>
                  <span>1,850 Sq Ft</span>
                  <span>Attached Garage</span>
                </div>
                <p class="property-price">$425,000</p>
                <p class="property-description">Modern townhouse in Central Centennial Hills with low-maintenance lifestyle, community amenities, and excellent location near shopping and dining.</p>
                <a href="/properties" class="btn btn-outline">View Details</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Statistics */}
      <section class="market-statistics">
        <div class="container container-center">
          <h2>Centennial Hills 89135 Market Statistics</h2>
          <div class="stats-grid">
            <div class="stat-card">
              <HiHomeMini class="stat-icon" />
              <h3>Average Home Price</h3>
              <p class="stat-value">$485,000</p>
              <p class="stat-label">Central Centennial Hills</p>
            </div>
            <div class="stat-card">
              <LuTrendingUp class="stat-icon" />
              <h3>Price Appreciation</h3>
              <p class="stat-value">+9.2%</p>
              <p class="stat-label">Year over Year</p>
            </div>
            <div class="stat-card">
              <LuCalendar class="stat-icon" />
              <h3>Days on Market</h3>
              <p class="stat-value">26 days</p>
              <p class="stat-label">Average Time to Sell</p>
            </div>
            <div class="stat-card">
              <LuUsers class="stat-icon" />
              <h3>Population</h3>
              <p class="stat-value">12,500</p>
              <p class="stat-label">Residents in 89135</p>
            </div>
          </div>
        </div>
      </section>

      {/* Schools & Amenities */}
      <section class="schools-amenities">
        <div class="container container-center">
          <h2>Schools & Amenities in Centennial Hills 89135</h2>
          <div class="amenities-grid">
            <div class="amenity-section">
              <h3>Top-Rated Schools</h3>
              <div class="amenity-list">
                <div class="amenity-item">
                  <h4>Centennial High School</h4>
                  <p>9-12 Grade • A+ Rating • Advanced Placement programs</p>
                </div>
                <div class="amenity-item">
                  <h4>Centennial Hills Elementary</h4>
                  <p>K-5 Grade • A Rating • STEM programs</p>
                </div>
                <div class="amenity-item">
                  <h4>Centennial Hills Middle School</h4>
                  <p>6-8 Grade • A Rating • Arts & music programs</p>
                </div>
              </div>
            </div>

            <div class="amenity-section">
              <h3>Recreation & Parks</h3>
              <div class="amenity-list">
                <div class="amenity-item">
                  <h4>Centennial Hills Park</h4>
                  <p>Community center, sports fields, playgrounds</p>
                </div>
                <div class="amenity-item">
                  <h4>Centennial Hills Library</h4>
                  <p>Public library with programs and events</p>
                </div>
                <div class="amenity-item">
                  <h4>Centennial Hills Golf Course</h4>
                  <p>Public golf course and driving range</p>
                </div>
              </div>
            </div>

            <div class="amenity-section">
              <h3>Shopping & Dining</h3>
              <div class="amenity-list">
                <div class="amenity-item">
                  <h4>Centennial Hills Shopping Center</h4>
                  <p>Major retailers, restaurants, services</p>
                </div>
                <div class="amenity-item">
                  <h4>Centennial Hills Plaza</h4>
                  <p>Local businesses, cafes, specialty shops</p>
                </div>
                <div class="amenity-item">
                  <h4>Centennial Hills Farmers Market</h4>
                  <p>Weekly farmers market with local vendors</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transportation & Commute */}
      <section class="transportation">
        <div class="container container-center">
          <h2>Transportation & Commute Times from Centennial Hills 89135</h2>
          <div class="commute-grid">
            <div class="commute-card">
              <HiMapPinMini class="commute-icon" />
              <h3>Downtown Las Vegas</h3>
              <p class="commute-time">25 minutes</p>
              <p class="commute-distance">18 miles via US-95</p>
            </div>
            <div class="commute-card">
              <HiMapPinMini class="commute-icon" />
              <h3>Las Vegas Strip</h3>
              <p class="commute-time">20 minutes</p>
              <p class="commute-distance">15 miles via I-215</p>
            </div>
            <div class="commute-card">
              <HiMapPinMini class="commute-icon" />
              <h3>McCarran Airport</h3>
              <p class="commute-time">30 minutes</p>
              <p class="commute-distance">22 miles via I-215</p>
            </div>
            <div class="commute-card">
              <HiMapPinMini class="commute-icon" />
              <h3>Henderson</h3>
              <p class="commute-time">35 minutes</p>
              <p class="commute-distance">28 miles via I-215</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose 89135 */}
      <section class="why-choose">
        <div class="container container-center">
          <h2>Why Choose Centennial Hills ZIP Code 89135?</h2>
          <div class="reasons-grid">
            <div class="reason-card">
              <HiStarMini class="reason-icon" />
              <h3>Established Neighborhoods</h3>
              <p>Centennial Hills 89135 features well-established neighborhoods with mature landscaping, proven community stability, and a strong sense of belonging that comes from years of careful development.</p>
            </div>
            <div class="reason-card">
              <LuUsers class="reason-icon" />
              <h3>Family-Friendly Environment</h3>
              <p>With excellent schools, safe neighborhoods, and abundant recreational facilities, Central Centennial Hills provides the perfect environment for families to grow and thrive.</p>
            </div>
            <div class="reason-card">
              <LuTrendingUp class="reason-icon" />
              <h3>Strong Property Values</h3>
              <p>Centennial Hills 89135 has demonstrated consistent property value appreciation, making it an excellent choice for both homeowners and real estate investors seeking long-term growth.</p>
            </div>
            <div class="reason-card">
              <HiMapPinMini class="reason-icon" />
              <h3>Convenient Location</h3>
              <p>Central Centennial Hills offers easy access to major employment centers, shopping districts, and entertainment venues while maintaining a peaceful residential atmosphere.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section class="cta-section">
        <div class="container container-center">
          <h2>Find Your Centennial Hills 89135 Home Today</h2>
          <p>Dr. Janet Duffy's expertise in Central Centennial Hills real estate ensures you'll find the perfect home in ZIP code 89135. Contact us today for personalized assistance and local market insights.</p>
          <div class="cta-buttons">
            <a href="/contact" class="btn btn-primary btn-large">
              <HiPhoneMini class="btn-icon" />
              Call (702) 555-0123
            </a>
            <a href="/contact" class="btn btn-secondary btn-large">Get Free Consultation</a>
          </div>
        </div>
      </section>

      <style>{`
        .hero-section {
          background: linear-gradient(135deg, var(--primary-color) 0%, #3b82f6 100%);
          color: white;
          padding: 4rem 0;
          text-align: center;
        }

        .hero-title {
          font-size: 3rem;
          margin-bottom: 1.5rem;
          line-height: 1.2;
        }

        .hero-subtitle {
          font-size: 1.25rem;
          margin-bottom: 2rem;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.6;
        }

        .neighborhood-overview {
          padding: 4rem 0;
          background: var(--bg-light);
        }

        .neighborhood-overview h2 {
          text-align: center;
          margin-bottom: 3rem;
          color: var(--text-dark);
        }

        .overview-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
        }

        .overview-card {
          background: white;
          padding: 2rem;
          border-radius: 16px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          text-align: center;
        }

        .overview-icon {
          width: 3rem;
          height: 3rem;
          color: var(--primary-color);
          margin: 0 auto 1rem auto;
          display: block;
        }

        .overview-card h3 {
          margin-bottom: 1rem;
          color: var(--text-dark);
        }

        .overview-card p {
          line-height: 1.6;
          color: var(--text-light);
        }

        .featured-properties {
          padding: 4rem 0;
        }

        .featured-properties h2 {
          text-align: center;
          margin-bottom: 3rem;
          color: var(--text-dark);
        }

        .properties-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
        }

        .property-card {
          background: white;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease;
        }

        .property-card:hover {
          transform: translateY(-4px);
        }

        .property-image {
          height: 200px;
          background: linear-gradient(45deg, #e5e7eb, #f3f4f6);
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .property-badge {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: var(--secondary-color);
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.875rem;
          font-weight: 600;
        }

        .property-info {
          padding: 1.5rem;
        }

        .property-info h3 {
          margin-bottom: 0.5rem;
          color: var(--text-dark);
        }

        .property-address {
          color: var(--text-light);
          margin-bottom: 1rem;
          font-size: 0.875rem;
        }

        .property-details {
          display: flex;
          gap: 1rem;
          margin-bottom: 1rem;
          flex-wrap: wrap;
        }

        .property-details span {
          background: var(--bg-light);
          padding: 0.5rem 1rem;
          border-radius: 12px;
          font-size: 0.875rem;
          color: var(--text-dark);
          font-weight: 600;
        }

        .property-price {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--primary-color);
          margin-bottom: 1rem;
        }

        .property-description {
          margin-bottom: 1.5rem;
          line-height: 1.6;
          color: var(--text-light);
        }

        .market-statistics {
          padding: 4rem 0;
          background: var(--bg-light);
        }

        .market-statistics h2 {
          text-align: center;
          margin-bottom: 3rem;
          color: var(--text-dark);
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
          max-width: 1000px;
          margin: 0 auto;
        }

        .stat-card {
          text-align: center;
          padding: 2rem;
          border: 2px solid var(--border-color);
          border-radius: 16px;
          transition: all 0.3s ease;
        }

        .stat-card:hover {
          border-color: var(--primary-color);
          box-shadow: 0 8px 24px rgba(59, 130, 246, 0.15);
        }

        .stat-icon {
          width: 2.5rem;
          height: 2.5rem;
          color: var(--primary-color);
          margin: 0 auto 1rem auto;
          display: block;
        }

        .stat-value {
          font-size: 2rem;
          font-weight: 700;
          color: var(--primary-color);
          margin-bottom: 0.5rem;
        }

        .stat-label {
          color: var(--text-light);
          font-size: 0.875rem;
        }

        .schools-amenities {
          padding: 4rem 0;
        }

        .schools-amenities h2 {
          text-align: center;
          margin-bottom: 3rem;
          color: var(--text-dark);
        }

        .amenities-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .amenity-section {
          background: white;
          padding: 2rem;
          border-radius: 16px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .amenity-section h3 {
          margin-bottom: 1.5rem;
          color: var(--text-dark);
          text-align: center;
        }

        .amenity-item {
          margin-bottom: 1.5rem;
          padding-bottom: 1.5rem;
          border-bottom: 1px solid var(--border-color);
        }

        .amenity-item:last-child {
          border-bottom: none;
          margin-bottom: 0;
          padding-bottom: 0;
        }

        .amenity-item h4 {
          margin-bottom: 0.5rem;
          color: var(--text-dark);
        }

        .amenity-item p {
          color: var(--text-light);
          line-height: 1.6;
        }

        .transportation {
          padding: 4rem 0;
          background: var(--bg-light);
        }

        .transportation h2 {
          text-align: center;
          margin-bottom: 3rem;
          color: var(--text-dark);
        }

        .commute-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
          max-width: 1000px;
          margin: 0 auto;
        }

        .commute-card {
          background: white;
          padding: 2rem;
          border-radius: 16px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          text-align: center;
          transition: transform 0.3s ease;
        }

        .commute-card:hover {
          transform: translateY(-4px);
        }

        .commute-icon {
          width: 2.5rem;
          height: 2.5rem;
          color: var(--primary-color);
          margin: 0 auto 1rem auto;
          display: block;
        }

        .commute-card h3 {
          margin-bottom: 1rem;
          color: var(--text-dark);
        }

        .commute-time {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--primary-color);
          margin-bottom: 0.5rem;
        }

        .commute-distance {
          color: var(--text-light);
          font-size: 0.875rem;
        }

        .why-choose {
          padding: 4rem 0;
        }

        .why-choose h2 {
          text-align: center;
          margin-bottom: 3rem;
          color: var(--text-dark);
        }

        .reasons-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .reason-card {
          background: white;
          padding: 2rem;
          border-radius: 16px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          text-align: center;
          transition: transform 0.3s ease;
        }

        .reason-card:hover {
          transform: translateY(-4px);
        }

        .reason-icon {
          width: 3rem;
          height: 3rem;
          color: var(--primary-color);
          margin: 0 auto 1rem auto;
          display: block;
        }

        .reason-card h3 {
          margin-bottom: 1rem;
          color: var(--text-dark);
        }

        .reason-card p {
          line-height: 1.6;
          color: var(--text-light);
        }

        .cta-section {
          padding: 4rem 0;
          background: linear-gradient(135deg, var(--text-dark) 0%, #374151 100%);
          color: white;
          text-align: center;
        }

        .cta-section h2 {
          margin-bottom: 1rem;
          font-size: 2.5rem;
        }

        .cta-section p {
          font-size: 1.125rem;
          margin-bottom: 2rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.6;
        }

        .cta-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .btn-large {
          padding: 1rem 2rem;
          font-size: 1.125rem;
        }

        .btn-icon {
          width: 1.25rem;
          height: 1.25rem;
          margin-right: 0.5rem;
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2rem;
          }
          
          .overview-grid,
          .properties-grid,
          .stats-grid,
          .amenities-grid,
          .commute-grid,
          .reasons-grid {
            grid-template-columns: 1fr;
          }

          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Centennial Hills Homes ZIP Code 89135 | Dr. Janet Duffy Real Estate',
  meta: [
    {
      name: 'description',
      content: 'Find homes in Centennial Hills ZIP code 89135. Central Centennial Hills real estate with established neighborhoods, excellent schools, and mature landscaping. Dr. Janet Duffy expert guidance.',
    },
    {
      name: 'keywords',
      content: 'Centennial Hills 89135, ZIP code 89135 homes, Central Centennial Hills, Las Vegas 89135, Centennial Hills real estate, Dr. Janet Duffy',
    },
  ],
};

