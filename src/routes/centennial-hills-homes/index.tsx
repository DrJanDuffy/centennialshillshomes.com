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
            Find Your Dream <span class="highlight">Centennial Hills Homes</span> with Dr. Janet Duffy
          </h1>
          <p class="hero-subtitle">
            Las Vegas' premier real estate expert specializing in Centennial Hills homes for sale. 
            Discover luxury living in the heart of Northwest Las Vegas with 30+ years of local expertise.
          </p>
          <div class="hero-search">
            <div class="search-box">
              <svg class="search-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
              </svg>
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
              <svg class="feature-icon" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
              </svg>
              <h3>Prime Northwest Location</h3>
              <p>Centennial Hills homes offer the perfect blend of suburban tranquility and urban convenience. Located in Northwest Las Vegas, residents enjoy easy access to major highways, shopping centers, and entertainment venues while maintaining a peaceful residential atmosphere.</p>
            </div>
            <div class="feature-card">
              <svg class="feature-icon" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
              <h3>Master-Planned Community</h3>
              <p>Centennial Hills is a carefully planned community featuring modern <a href="/centennial-hills-amenities">amenities</a>, well-maintained parks, and family-friendly neighborhoods. The area boasts excellent <a href="/centennial-hills-schools">schools</a>, recreational facilities, and a strong sense of community that makes it ideal for families and professionals. Learn more about the <a href="/centennial-hills">Centennial Hills community</a> and what makes it special.</p>
            </div>
            <div class="feature-card">
              <svg class="feature-icon" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clip-rule="evenodd"/>
              </svg>
              <h3>Strong Investment Potential</h3>
              <p>Centennial Hills real estate has shown consistent appreciation and strong market performance. With new developments, infrastructure improvements, and growing demand, Centennial Hills homes represent excellent long-term investment opportunities. Review our <a href="/centennial-hills-market-report">Centennial Hills market report</a> and <a href="/market-analysis">market analysis</a> to understand investment potential. Explore <a href="/investment-properties">investment property opportunities</a> in the area.</p>
            </div>
            <div class="feature-card">
              <svg class="feature-icon" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"/>
              </svg>
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
          <p>Understanding market conditions helps buyers make informed decisions. For comprehensive market insights, review our <a href="/centennial-hills-market-report">detailed Centennial Hills market report</a> and <a href="/market-analysis">comprehensive market analysis</a>. These reports provide data-driven insights into pricing trends, inventory levels, and future projections for Centennial Hills real estate.</p>
          <div class="market-stats">
            <div class="stat-card">
              <svg class="stat-icon" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clip-rule="evenodd"/>
              </svg>
              <h3>Market Trend</h3>
              <p class="stat-value">+12.5%</p>
              <p class="stat-label">Year over Year Growth</p>
            </div>
            <div class="stat-card">
              <svg class="stat-icon" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
              </svg>
              <h3>Average Price</h3>
              <p class="stat-value">$525,000</p>
              <p class="stat-label">Centennial Hills Homes</p>
            </div>
            <div class="stat-card">
              <svg class="stat-icon" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"/>
              </svg>
              <h3>Days on Market</h3>
              <p class="stat-value">22 days</p>
              <p class="stat-label">Average Time to Sell</p>
            </div>
            <div class="stat-card">
              <svg class="stat-icon" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"/>
              </svg>
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
              <svg class="service-icon" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
              </svg>
              <h3>Centennial Hills Home Buying</h3>
              <p>Expert guidance for finding your perfect Centennial Hills home. From first-time buyers to luxury home purchases, Dr. Janet Duffy provides personalized service and deep local market knowledge.</p>
              <a href="/buy-a-home" class="service-link">Start Your Search →</a>
            </div>
            <div class="service-card">
              <svg class="service-icon" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clip-rule="evenodd"/>
              </svg>
              <h3>Centennial Hills Home Selling</h3>
              <p>Maximize your Centennial Hills home's value with professional marketing, staging, and pricing strategies. Get top dollar for your property with Dr. Janet Duffy's proven selling approach.</p>
              <a href="/sell-a-home" class="service-link">Get Free Valuation →</a>
            </div>
            <div class="service-card">
              <svg class="service-icon" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
              <h3>Market Analysis</h3>
              <p>Comprehensive Centennial Hills market analysis including recent sales, price trends, and neighborhood insights. Stay informed about your local real estate market with detailed reports.</p>
              <a href="/market-analysis" class="service-link">Request Analysis →</a>
            </div>
            <div class="service-card">
              <svg class="service-icon" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"/>
              </svg>
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
              <svg class="btn-icon" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
              </svg>
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
  ],
};

