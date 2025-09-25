import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { HiHomeMini, HiMapPinMini, HiPhoneMini, HiStarMini } from '@qwikest/icons/heroicons';
import { LuTrendingUp, LuSearch, LuHeart, LuCalendar } from '@qwikest/icons/lucide';
import RealScoutOfficeListings from '../../components/realscout-office-listings';

export default component$(() => {
  return (
    <>
      {/* Hero Section */}
      <section class="hero-section">
        <div class="container container-center">
          <h1 class="hero-title">
            Find Your Dream <span class="highlight">Centennial Hills Homes</span> with Dr. Janet Duffy
          </h1>
          <p class="hero-subtitle">
            Las Vegas' premier real estate expert specializing in Centennial Hills homes for sale. 
            Discover luxury living in the heart of Northwest Las Vegas with 30+ years of local expertise.
          </p>
          <div class="hero-search">
            <div class="search-box">
              <LuSearch class="search-icon" />
              <input type="text" placeholder="Search Centennial Hills homes by price, bedrooms, or ZIP code..." />
              <button class="btn btn-primary">Search Homes</button>
            </div>
          </div>
          <div class="hero-buttons">
            <a href="/centennial-hills-homes-for-sale" class="btn btn-primary">View All Centennial Hills Homes</a>
            <a href="/contact" class="btn btn-secondary">Get Free Market Analysis</a>
          </div>
        </div>
      </section>

      {/* Featured Centennial Hills Properties - Lead Generator */}
      <section class="featured-properties">
        <div class="container container-center">
          <h2>Featured Centennial Hills Homes for Sale</h2>
          <p class="text-center text-gray-600 mb-8">
            Browse our latest listings in Centennial Hills and surrounding Northwest Las Vegas areas
          </p>
          
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
            <a href="/mls-search" class="btn btn-primary btn-lg">
              View All Available Properties
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Centennial Hills */}
      <section class="why-choose-section">
        <div class="container container-center">
          <h2>Why Choose Centennial Hills Homes?</h2>
          <div class="features-grid">
            <div class="feature-card">
              <HiMapPinMini class="feature-icon" />
              <h3>Prime Northwest Location</h3>
              <p>Centennial Hills homes offer the perfect blend of suburban tranquility and urban convenience. Located in Northwest Las Vegas, residents enjoy easy access to major highways, shopping centers, and entertainment venues while maintaining a peaceful residential atmosphere.</p>
            </div>
            <div class="feature-card">
              <HiStarMini class="feature-icon" />
              <h3>Master-Planned Community</h3>
              <p>Centennial Hills is a carefully planned community featuring modern amenities, well-maintained parks, and family-friendly neighborhoods. The area boasts excellent schools, recreational facilities, and a strong sense of community that makes it ideal for families and professionals.</p>
            </div>
            <div class="feature-card">
              <LuTrendingUp class="feature-icon" />
              <h3>Strong Investment Potential</h3>
              <p>Centennial Hills real estate has shown consistent appreciation and strong market performance. With new developments, infrastructure improvements, and growing demand, Centennial Hills homes represent excellent long-term investment opportunities.</p>
            </div>
            <div class="feature-card">
              <LuCalendar class="feature-icon" />
              <h3>New Construction Available</h3>
              <p>Centennial Hills continues to expand with new construction projects offering modern floor plans, energy-efficient features, and contemporary designs. Buyers can choose from established neighborhoods or brand-new Centennial Hills homes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Centennial Hills ZIP Codes */}
      <section class="zip-codes-section">
        <div class="container container-center">
          <h2>Centennial Hills ZIP Codes & Neighborhoods</h2>
          <div class="zip-grid">
            <div class="zip-card">
              <h3>89135 - Central Centennial Hills</h3>
              <p>Central Centennial Hills homes feature established neighborhoods with mature landscaping, excellent schools, and convenient access to shopping and dining. This area offers a mix of single-family homes, townhouses, and condos.</p>
              <ul>
                <li>Average Home Price: $450,000 - $650,000</li>
                <li>Property Types: Single-family, Townhouses</li>
                <li>Schools: Centennial High School District</li>
                <li>Amenities: Centennial Hills Park, Shopping Centers</li>
              </ul>
              <a href="/centennial-hills-89135" class="btn btn-outline">Explore 89135</a>
            </div>

            <div class="zip-card">
              <h3>89138 - North Centennial Hills</h3>
              <p>North Centennial Hills represents the newest developments with modern amenities and contemporary home designs. This area features newer construction, larger lots, and proximity to recreational facilities and outdoor activities.</p>
              <ul>
                <li>Average Home Price: $475,000 - $750,000</li>
                <li>Property Types: New Construction, Luxury Homes</li>
                <li>Schools: Shadow Ridge High School District</li>
                <li>Amenities: Golf Courses, Recreation Centers</li>
              </ul>
              <a href="/centennial-hills-89138" class="btn btn-outline">Explore 89138</a>
            </div>

            <div class="zip-card">
              <h3>89144 - West Centennial Hills</h3>
              <p>West Centennial Hills offers a mix of established communities and new developments, providing diverse housing options for buyers. This area features excellent transportation access and proximity to major employment centers.</p>
              <ul>
                <li>Average Home Price: $425,000 - $600,000</li>
                <li>Property Types: Condos, Townhouses, Single-family</li>
                <li>Schools: Arbor View High School District</li>
                <li>Amenities: Community Centers, Parks</li>
              </ul>
              <a href="/centennial-hills-89144" class="btn btn-outline">Explore 89144</a>
            </div>
          </div>
        </div>
      </section>

      {/* Market Analysis */}
      <section class="market-analysis">
        <div class="container container-center">
          <h2>Centennial Hills Real Estate Market Analysis</h2>
          <div class="market-stats">
            <div class="stat-card">
              <LuTrendingUp class="stat-icon" />
              <h3>Market Trend</h3>
              <p class="stat-value">+12.5%</p>
              <p class="stat-label">Year over Year Growth</p>
            </div>
            <div class="stat-card">
              <HiHomeMini class="stat-icon" />
              <h3>Average Price</h3>
              <p class="stat-value">$525,000</p>
              <p class="stat-label">Centennial Hills Homes</p>
            </div>
            <div class="stat-card">
              <LuCalendar class="stat-icon" />
              <h3>Days on Market</h3>
              <p class="stat-value">22 days</p>
              <p class="stat-label">Average Time to Sell</p>
            </div>
            <div class="stat-card">
              <LuHeart class="stat-icon" />
              <h3>Inventory Level</h3>
              <p class="stat-value">1.8 months</p>
              <p class="stat-label">Supply of Homes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section class="services-section">
        <div class="container container-center">
          <h2>Centennial Hills Real Estate Services</h2>
          <div class="services-grid">
            <div class="service-card">
              <HiHomeMini class="service-icon" />
              <h3>Centennial Hills Home Buying</h3>
              <p>Expert guidance for finding your perfect Centennial Hills home. From first-time buyers to luxury home purchases, Dr. Janet Duffy provides personalized service and deep local market knowledge.</p>
              <a href="/buy-a-home" class="service-link">Start Your Search →</a>
            </div>
            <div class="service-card">
              <LuTrendingUp class="service-icon" />
              <h3>Centennial Hills Home Selling</h3>
              <p>Maximize your Centennial Hills home's value with professional marketing, staging, and pricing strategies. Get top dollar for your property with Dr. Janet Duffy's proven selling approach.</p>
              <a href="/sell-a-home" class="service-link">Get Free Valuation →</a>
            </div>
            <div class="service-card">
              <HiStarMini class="service-icon" />
              <h3>Market Analysis</h3>
              <p>Comprehensive Centennial Hills market analysis including recent sales, price trends, and neighborhood insights. Stay informed about your local real estate market with detailed reports.</p>
              <a href="/market-analysis" class="service-link">Request Analysis →</a>
            </div>
            <div class="service-card">
              <LuCalendar class="service-icon" />
              <h3>Same-Day Showings</h3>
              <p>Available 24/7 for Centennial Hills property showings. Whether you're buying or selling, Dr. Janet Duffy provides flexible scheduling to accommodate your busy lifestyle.</p>
              <a href="/contact" class="service-link">Schedule Now →</a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section class="cta-section">
        <div class="container container-center">
          <h2>Ready to Find Your Centennial Hills Home?</h2>
          <p>Contact Dr. Janet Duffy today for expert guidance in the Centennial Hills real estate market. With 30+ years of experience and deep local knowledge, she'll help you find the perfect home or sell your current property for maximum value.</p>
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

        .featured-properties {
          padding: 4rem 0;
          background: var(--bg-light);
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
          max-width: 1200px;
          margin: 0 auto;
        }

        .property-card {
          background: white;
          border-radius: 12px;
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
        }

        .property-details {
          display: flex;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .property-details span {
          background: var(--bg-light);
          padding: 0.25rem 0.75rem;
          border-radius: 12px;
          font-size: 0.875rem;
          color: var(--text-dark);
        }

        .property-price {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--primary-color);
          margin-bottom: 1rem;
        }

        .why-choose-section {
          padding: 4rem 0;
        }

        .why-choose-section h2 {
          text-align: center;
          margin-bottom: 3rem;
          color: var(--text-dark);
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .feature-card {
          text-align: center;
          padding: 2rem;
          border: 2px solid var(--border-color);
          border-radius: 12px;
          transition: all 0.3s ease;
        }

        .feature-card:hover {
          border-color: var(--primary-color);
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.15);
        }

        .feature-icon {
          width: 3rem;
          height: 3rem;
          color: var(--primary-color);
          margin: 0 auto 1rem auto;
          display: block;
        }

        .feature-card h3 {
          margin-bottom: 1rem;
          color: var(--text-dark);
        }

        .feature-card p {
          line-height: 1.6;
          color: var(--text-light);
        }

        .zip-codes-section {
          padding: 4rem 0;
          background: var(--bg-light);
        }

        .zip-codes-section h2 {
          text-align: center;
          margin-bottom: 3rem;
          color: var(--text-dark);
        }

        .zip-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
        }

        .zip-card {
          background: white;
          padding: 2rem;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .zip-card h3 {
          color: var(--primary-color);
          margin-bottom: 1rem;
        }

        .zip-card ul {
          margin: 1rem 0;
          padding-left: 1.5rem;
        }

        .zip-card li {
          margin-bottom: 0.5rem;
          color: var(--text-light);
        }

        .market-analysis {
          padding: 4rem 0;
        }

        .market-analysis h2 {
          text-align: center;
          margin-bottom: 3rem;
          color: var(--text-dark);
        }

        .market-stats {
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
          border-radius: 12px;
          transition: all 0.3s ease;
        }

        .stat-card:hover {
          border-color: var(--primary-color);
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.15);
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

        .services-section {
          padding: 4rem 0;
          background: var(--bg-light);
        }

        .services-section h2 {
          text-align: center;
          margin-bottom: 3rem;
          color: var(--text-dark);
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .service-card {
          background: white;
          padding: 2rem;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease;
        }

        .service-card:hover {
          transform: translateY(-4px);
        }

        .service-icon {
          width: 2.5rem;
          height: 2.5rem;
          color: var(--primary-color);
          margin-bottom: 1rem;
          display: block;
        }

        .service-card h3 {
          margin-bottom: 1rem;
          color: var(--text-dark);
        }

        .service-card p {
          margin-bottom: 1.5rem;
          line-height: 1.6;
          color: var(--text-light);
        }

        .service-link {
          color: var(--primary-color);
          text-decoration: none;
          font-weight: 600;
          transition: color 0.3s ease;
        }

        .service-link:hover {
          color: #1d4ed8;
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
          
          .properties-grid,
          .features-grid,
          .zip-grid,
          .market-stats,
          .services-grid {
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
  title: 'Centennial Hills Homes for Sale | Dr. Janet Duffy Real Estate',
  meta: [
    {
      name: 'description',
      content: 'Find your dream Centennial Hills home with Dr. Janet Duffy. Expert real estate services in Northwest Las Vegas. Browse luxury homes, new construction, and investment properties in Centennial Hills.',
    },
    {
      name: 'keywords',
      content: 'Centennial Hills homes, Centennial Hills real estate, Las Vegas homes for sale, Northwest Las Vegas, Dr. Janet Duffy, luxury homes, new construction',
    },
  ],
};

