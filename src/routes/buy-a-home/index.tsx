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
            Buy Your Dream <span class="highlight">Centennial Hills Home</span> with Expert Guidance
          </h1>
          <p class="hero-subtitle">
            Dr. Janet Duffy's comprehensive home buying services help you find the perfect Centennial Hills home. 
            From first-time buyers to luxury home purchases, we provide personalized service and deep local market expertise.
          </p>
          <div class="hero-search">
            <div class="search-box">
              <LuSearch class="search-icon" />
              <input type="text" placeholder="Search Centennial Hills homes by price, bedrooms, or ZIP code..." />
              <button class="btn btn-primary">Search Properties</button>
            </div>
          </div>
          <div class="hero-buttons">
            <a href="/centennial-hills-homes-for-sale" class="btn btn-primary">View All Centennial Hills Homes</a>
            <a href="/contact" class="btn btn-secondary">Get Free Buyer Consultation</a>
          </div>
        </div>
      </section>

      {/* Buyer Types */}
      <section class="buyer-types">
        <div class="container container-center">
          <h2>Home Buying Services for Every Buyer</h2>
          <div class="buyer-grid">
            <div class="buyer-card">
              <HiHomeMini class="buyer-icon" />
              <h3>First-Time Homebuyers</h3>
              <p>Navigating the home buying process for the first time? Dr. Janet Duffy provides comprehensive guidance through every step, from pre-approval to closing. Learn about Centennial Hills neighborhoods, financing options, and make informed decisions with confidence.</p>
              <ul>
                <li>Pre-approval guidance</li>
                <li>Neighborhood education</li>
                <li>First-time buyer programs</li>
                <li>Step-by-step process</li>
              </ul>
              <a href="/first-time-homebuyers" class="btn btn-outline">Learn More</a>
            </div>

            <div class="buyer-card">
              <LuTrendingUp class="buyer-icon" />
              <h3>Move-Up Buyers</h3>
              <p>Ready to upgrade to a larger Centennial Hills home? Our move-up buyer services help you sell your current home while finding the perfect upgrade. We coordinate both transactions seamlessly for a stress-free experience.</p>
              <ul>
                <li>Current home valuation</li>
                <li>Upgrade planning</li>
                <li>Transaction coordination</li>
                <li>Timing optimization</li>
              </ul>
              <a href="/move-up-buyers" class="btn btn-outline">Learn More</a>
            </div>

            <div class="buyer-card">
              <HiStarMini class="buyer-icon" />
              <h3>Luxury Home Buyers</h3>
              <p>Seeking premium Centennial Hills properties? Our luxury home buying services provide access to exclusive listings, private showings, and personalized service for discerning buyers looking for exceptional homes and lifestyle.</p>
              <ul>
                <li>Exclusive listings access</li>
                <li>Private showings</li>
                <li>Luxury market expertise</li>
                <li>Concierge-level service</li>
              </ul>
              <a href="/luxury-home-buyers" class="btn btn-outline">Learn More</a>
            </div>

            <div class="buyer-card">
              <LuUsers class="buyer-icon" />
              <h3>Investment Buyers</h3>
              <p>Building your real estate portfolio in Centennial Hills? Our investment buying services help identify properties with strong rental potential, appreciation prospects, and positive cash flow opportunities in the Northwest Las Vegas market.</p>
              <ul>
                <li>Investment analysis</li>
                <li>Rental market insights</li>
                <li>Cash flow projections</li>
                <li>Portfolio building</li>
              </ul>
              <a href="/investment-buyers" class="btn btn-outline">Learn More</a>
            </div>
          </div>
        </div>
      </section>

      {/* Home Buying Process */}
      <section class="buying-process">
        <div class="container container-center">
          <h2>Your Centennial Hills Home Buying Journey</h2>
          <div class="process-timeline">
            <div class="process-step">
              <div class="step-number">1</div>
              <div class="step-content">
                <h3>Initial Consultation</h3>
                <p>We'll discuss your needs, budget, and preferences for your Centennial Hills home. Dr. Janet Duffy will provide market insights, financing guidance, and create a personalized buying strategy.</p>
              </div>
            </div>

            <div class="process-step">
              <div class="step-number">2</div>
              <div class="step-content">
                <h3>Pre-Approval & Budget Planning</h3>
                <p>Get pre-approved for financing and establish your budget for Centennial Hills homes. We'll connect you with trusted lenders and help you understand your purchasing power in the current market.</p>
              </div>
            </div>

            <div class="process-step">
              <div class="step-number">3</div>
              <div class="step-content">
                <h3>Property Search & Viewings</h3>
                <p>Search through available Centennial Hills homes that match your criteria. We'll schedule private showings, provide detailed property analysis, and help you evaluate each home's potential.</p>
              </div>
            </div>

            <div class="process-step">
              <div class="step-number">4</div>
              <div class="step-content">
                <h3>Offer & Negotiation</h3>
                <p>When you find your perfect Centennial Hills home, we'll craft a competitive offer and negotiate on your behalf. Our market expertise ensures you get the best possible terms and price.</p>
              </div>
            </div>

            <div class="process-step">
              <div class="step-number">5</div>
              <div class="step-content">
                <h3>Inspection & Due Diligence</h3>
                <p>Coordinate home inspections, appraisals, and all due diligence activities. We'll review all reports and ensure you understand any issues or concerns before proceeding to closing.</p>
              </div>
            </div>

            <div class="process-step">
              <div class="step-number">6</div>
              <div class="step-content">
                <h3>Closing & Move-In</h3>
                <p>Guide you through the final closing process and ensure all paperwork is completed correctly. We'll also provide recommendations for moving services and help you settle into your new Centennial Hills home.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Centennial Hills Neighborhoods */}
      <section class="neighborhoods-section">
        <div class="container container-center">
          <h2>Centennial Hills Neighborhoods to Explore</h2>
          <div class="neighborhoods-grid">
            <div class="neighborhood-card">
              <div class="neighborhood-image">
                <div class="neighborhood-badge">Central</div>
              </div>
              <div class="neighborhood-info">
                <h3>Central Centennial Hills (89135)</h3>
                <p>Established neighborhoods with mature landscaping, excellent schools, and convenient amenities. Perfect for families seeking a stable, well-established community in Centennial Hills.</p>
                <div class="neighborhood-stats">
                  <span>Avg Price: $485,000</span>
                  <span>Homes: 2,500+</span>
                  <span>Schools: A+ Rated</span>
                </div>
                <a href="/centennial-hills-89135" class="btn btn-outline">Explore Neighborhood</a>
              </div>
            </div>

            <div class="neighborhood-card">
              <div class="neighborhood-image">
                <div class="neighborhood-badge">North</div>
              </div>
              <div class="neighborhood-info">
                <h3>North Centennial Hills (89138)</h3>
                <p>Newer developments with modern amenities and contemporary home designs. Features larger lots, newer construction, and proximity to recreational facilities and outdoor activities.</p>
                <div class="neighborhood-stats">
                  <span>Avg Price: $625,000</span>
                  <span>Homes: 1,800+</span>
                  <span>New Construction</span>
                </div>
                <a href="/centennial-hills-89138" class="btn btn-outline">Explore Neighborhood</a>
              </div>
            </div>

            <div class="neighborhood-card">
              <div class="neighborhood-image">
                <div class="neighborhood-badge">West</div>
              </div>
              <div class="neighborhood-info">
                <h3>West Centennial Hills (89144)</h3>
                <p>Mixed communities with diverse housing options from condos to luxury estates. Excellent transportation access and proximity to major employment centers and shopping districts.</p>
                <div class="neighborhood-stats">
                  <span>Avg Price: $525,000</span>
                  <span>Homes: 2,200+</span>
                  <span>Diverse Options</span>
                </div>
                <a href="/centennial-hills-89144" class="btn btn-outline">Explore Neighborhood</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Insights */}
      <section class="market-insights">
        <div class="container container-center">
          <h2>Centennial Hills Market Insights for Buyers</h2>
          <div class="insights-grid">
            <div class="insight-card">
              <LuTrendingUp class="insight-icon" />
              <h3>Market Trends</h3>
              <p class="insight-value">+8.5%</p>
              <p class="insight-label">Annual Price Appreciation</p>
            </div>
            <div class="insight-card">
              <LuCalendar class="insight-icon" />
              <h3>Inventory Level</h3>
              <p class="insight-value">2.3 months</p>
              <p class="insight-label">Supply of Available Homes</p>
            </div>
            <div class="insight-card">
              <HiHomeMini class="insight-icon" />
              <h3>Average Price</h3>
              <p class="insight-value">$545,000</p>
              <p class="insight-label">Centennial Hills Homes</p>
            </div>
            <div class="insight-card">
              <HiStarMini class="insight-icon" />
              <h3>Days on Market</h3>
              <p class="insight-value">24 days</p>
              <p class="insight-label">Average Time to Sell</p>
            </div>
          </div>
        </div>
      </section>

      {/* Buyer Resources */}
      <section class="buyer-resources">
        <div class="container container-center">
          <h2>Essential Buyer Resources</h2>
          <div class="resources-grid">
            <div class="resource-card">
              <LuSearch class="resource-icon" />
              <h3>MLS Search</h3>
              <p>Access the complete database of Centennial Hills homes for sale with advanced search filters and real-time updates.</p>
              <a href="/mls-search" class="btn btn-outline">Search MLS</a>
            </div>

            <div class="resource-card">
              <HiMapPinMini class="resource-icon" />
              <h3>Neighborhood Guides</h3>
              <p>Comprehensive guides to Centennial Hills neighborhoods, including schools, amenities, and local attractions.</p>
              <a href="/neighborhood-guides" class="btn btn-outline">View Guides</a>
            </div>

            <div class="resource-card">
              <LuCalendar class="resource-icon" />
              <h3>Home Buying Guide</h3>
              <p>Step-by-step guide to the home buying process, from pre-approval to closing on your Centennial Hills home.</p>
              <a href="/home-buying-guide" class="btn btn-outline">Read Guide</a>
            </div>

            <div class="resource-card">
              <HiPhoneMini class="resource-icon" />
              <h3>Free Consultation</h3>
              <p>Schedule a complimentary consultation with Dr. Janet Duffy to discuss your Centennial Hills home buying goals.</p>
              <a href="/contact" class="btn btn-outline">Schedule Call</a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section class="cta-section">
        <div class="container container-center">
          <h2>Ready to Find Your Centennial Hills Home?</h2>
          <p>Dr. Janet Duffy's expertise in Centennial Hills real estate ensures you'll find the perfect home with confidence. Contact us today to start your home buying journey with Las Vegas' top real estate professional.</p>
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

        .buyer-types {
          padding: 4rem 0;
          background: var(--bg-light);
        }

        .buyer-types h2 {
          text-align: center;
          margin-bottom: 3rem;
          color: var(--text-dark);
        }

        .buyer-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .buyer-card {
          background: white;
          padding: 2rem;
          border-radius: 16px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          text-align: center;
          transition: transform 0.3s ease;
        }

        .buyer-card:hover {
          transform: translateY(-4px);
        }

        .buyer-icon {
          width: 3rem;
          height: 3rem;
          color: var(--primary-color);
          margin: 0 auto 1rem auto;
          display: block;
        }

        .buyer-card h3 {
          margin-bottom: 1rem;
          color: var(--text-dark);
        }

        .buyer-card p {
          margin-bottom: 1.5rem;
          line-height: 1.6;
          color: var(--text-light);
        }

        .buyer-card ul {
          text-align: left;
          margin-bottom: 2rem;
          padding-left: 1.5rem;
        }

        .buyer-card li {
          margin-bottom: 0.5rem;
          color: var(--text-light);
        }

        .buying-process {
          padding: 4rem 0;
        }

        .buying-process h2 {
          text-align: center;
          margin-bottom: 3rem;
          color: var(--text-dark);
        }

        .process-timeline {
          max-width: 800px;
          margin: 0 auto;
        }

        .process-step {
          display: flex;
          align-items: flex-start;
          margin-bottom: 3rem;
          padding: 2rem;
          background: white;
          border-radius: 16px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .step-number {
          width: 3rem;
          height: 3rem;
          background: var(--primary-color);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.25rem;
          font-weight: 700;
          margin-right: 2rem;
          flex-shrink: 0;
        }

        .step-content h3 {
          margin-bottom: 1rem;
          color: var(--text-dark);
        }

        .step-content p {
          line-height: 1.6;
          color: var(--text-light);
        }

        .neighborhoods-section {
          padding: 4rem 0;
          background: var(--bg-light);
        }

        .neighborhoods-section h2 {
          text-align: center;
          margin-bottom: 3rem;
          color: var(--text-dark);
        }

        .neighborhoods-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
        }

        .neighborhood-card {
          background: white;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease;
        }

        .neighborhood-card:hover {
          transform: translateY(-4px);
        }

        .neighborhood-image {
          height: 200px;
          background: linear-gradient(45deg, #e5e7eb, #f3f4f6);
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .neighborhood-badge {
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

        .neighborhood-info {
          padding: 2rem;
        }

        .neighborhood-info h3 {
          margin-bottom: 1rem;
          color: var(--text-dark);
        }

        .neighborhood-info p {
          margin-bottom: 1.5rem;
          line-height: 1.6;
          color: var(--text-light);
        }

        .neighborhood-stats {
          display: flex;
          gap: 1rem;
          margin-bottom: 1.5rem;
          flex-wrap: wrap;
        }

        .neighborhood-stats span {
          background: var(--bg-light);
          padding: 0.5rem 1rem;
          border-radius: 12px;
          font-size: 0.875rem;
          color: var(--text-dark);
          font-weight: 600;
        }

        .market-insights {
          padding: 4rem 0;
        }

        .market-insights h2 {
          text-align: center;
          margin-bottom: 3rem;
          color: var(--text-dark);
        }

        .insights-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
          max-width: 1000px;
          margin: 0 auto;
        }

        .insight-card {
          text-align: center;
          padding: 2rem;
          border: 2px solid var(--border-color);
          border-radius: 16px;
          transition: all 0.3s ease;
        }

        .insight-card:hover {
          border-color: var(--primary-color);
          box-shadow: 0 8px 24px rgba(59, 130, 246, 0.15);
        }

        .insight-icon {
          width: 2.5rem;
          height: 2.5rem;
          color: var(--primary-color);
          margin: 0 auto 1rem auto;
          display: block;
        }

        .insight-value {
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--primary-color);
          margin-bottom: 0.5rem;
        }

        .insight-label {
          color: var(--text-light);
          font-size: 0.875rem;
        }

        .buyer-resources {
          padding: 4rem 0;
          background: var(--bg-light);
        }

        .buyer-resources h2 {
          text-align: center;
          margin-bottom: 3rem;
          color: var(--text-dark);
        }

        .resources-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }

        .resource-card {
          background: white;
          padding: 2rem;
          border-radius: 16px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          text-align: center;
          transition: transform 0.3s ease;
        }

        .resource-card:hover {
          transform: translateY(-4px);
        }

        .resource-icon {
          width: 2.5rem;
          height: 2.5rem;
          color: var(--primary-color);
          margin: 0 auto 1rem auto;
          display: block;
        }

        .resource-card h3 {
          margin-bottom: 1rem;
          color: var(--text-dark);
        }

        .resource-card p {
          margin-bottom: 1.5rem;
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
          
          .buyer-grid,
          .neighborhoods-grid,
          .insights-grid,
          .resources-grid {
            grid-template-columns: 1fr;
          }

          .process-step {
            flex-direction: column;
            text-align: center;
          }

          .step-number {
            margin-right: 0;
            margin-bottom: 1rem;
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
  title: 'Buy a Home in Centennial Hills | Dr. Janet Duffy Real Estate',
  meta: [
    {
      name: 'description',
      content: 'Expert home buying services in Centennial Hills. Dr. Janet Duffy helps first-time buyers, move-up buyers, and luxury home buyers find their perfect Centennial Hills home.',
    },
    {
      name: 'keywords',
      content: 'buy home Centennial Hills, Centennial Hills homes for sale, home buying services, first-time homebuyers, luxury home buyers, Dr. Janet Duffy',
    },
  ],
};

