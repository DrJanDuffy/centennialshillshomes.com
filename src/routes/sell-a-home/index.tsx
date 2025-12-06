import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { HiHomeMini, HiMapPinMini, HiPhoneMini, HiStarMini } from '@qwikest/icons/heroicons';
import { LuTrendingUp, LuCalendar, LuDollarSign, LuBarChart3 } from '@qwikest/icons/lucide';
import FAQSection, { sellerServiceFAQs } from '../../components/faq-section';

export default component$(() => {
  return (
    <>
      {/* Hero Section */}
      <section class="hero-section">
        <div class="container container-center">
          <h1 class="hero-title">
            Sell Your <span class="highlight">Centennial Hills Home</span> for Maximum Value
          </h1>
          <p class="hero-subtitle">
            Dr. Janet Duffy's proven selling strategies help Centennial Hills homeowners achieve top dollar for their properties. 
            From market analysis to professional marketing, we provide comprehensive services for a successful home sale.
          </p>
          <div class="hero-buttons">
            <a href="/home-valuation" class="btn btn-primary">Get Free Home Valuation</a>
            <a href="/contact" class="btn btn-secondary">Schedule Selling Consultation</a>
          </div>
        </div>
      </section>

      {/* Selling Services */}
      <section class="selling-services">
        <div class="container container-center">
          <h2>Comprehensive Centennial Hills Home Selling Services</h2>
          <div class="services-grid">
            <div class="service-card">
              <LuBarChart3 class="service-icon" />
              <h3>Market Analysis & Pricing</h3>
              <p>Get an accurate market analysis of your Centennial Hills home's value. Dr. Janet Duffy provides comprehensive pricing strategies based on recent sales, market trends, and property features to maximize your return on investment.</p>
              <ul>
                <li>Comparative Market Analysis (CMA)</li>
                <li>Current market conditions review</li>
                <li>Competitive pricing strategy</li>
                <li>ROI optimization planning</li>
              </ul>
              <a href="/market-analysis" class="btn btn-outline">Get Market Analysis</a>
            </div>

            <div class="service-card">
              <HiStarMini class="service-icon" />
              <h3>Professional Marketing</h3>
              <p>Comprehensive marketing strategy for your Centennial Hills home including professional photography, virtual tours, and targeted advertising. Our multi-channel approach ensures maximum exposure to qualified buyers.</p>
              <ul>
                <li>Professional photography & staging</li>
                <li>Virtual tours & 360° views</li>
                <li>MLS listing optimization</li>
                <li>Digital marketing campaigns</li>
              </ul>
              <a href="/marketing-strategy" class="btn btn-outline">View Marketing Plan</a>
            </div>

            <div class="service-card">
              <LuCalendar class="service-icon" />
              <h3>Showing Coordination</h3>
              <p>Professional showing management including scheduling, feedback collection, and buyer qualification. We ensure your Centennial Hills home is presented perfectly while minimizing disruption to your daily life.</p>
              <ul>
                <li>Flexible showing schedules</li>
                <li>Buyer qualification process</li>
                <li>Showing feedback analysis</li>
                <li>Security & safety measures</li>
              </ul>
              <a href="/contact" class="btn btn-outline">Schedule Consultation</a>
            </div>

            <div class="service-card">
              <LuDollarSign class="service-icon" />
              <h3>Negotiation & Closing</h3>
              <p>Expert negotiation skills to secure the best possible terms and price for your Centennial Hills home. Dr. Janet Duffy handles all aspects of the transaction from offer review to successful closing.</p>
              <ul>
                <li>Offer evaluation & strategy</li>
                <li>Contract negotiation</li>
                <li>Inspection coordination</li>
                <li>Closing process management</li>
              </ul>
              <a href="/contact" class="btn btn-outline">Learn More</a>
            </div>
          </div>
        </div>
      </section>

      {/* Selling Process */}
      <section class="selling-process">
        <div class="container container-center">
          <h2>Your Centennial Hills Home Selling Journey</h2>
          <div class="process-timeline">
            <div class="process-step">
              <div class="step-number">1</div>
              <div class="step-content">
                <h3>Initial Consultation & Valuation</h3>
                <p>Comprehensive home evaluation and market analysis to determine your Centennial Hills home's optimal listing price. We'll discuss your goals, timeline, and create a customized selling strategy.</p>
              </div>
            </div>

            <div class="process-step">
              <div class="step-number">2</div>
              <div class="step-content">
                <h3>Home Preparation & Staging</h3>
                <p>Professional recommendations for preparing your Centennial Hills home for sale. From minor repairs to staging suggestions, we'll help maximize your home's appeal to potential buyers.</p>
              </div>
            </div>

            <div class="process-step">
              <div class="step-number">3</div>
              <div class="step-content">
                <h3>Marketing Launch</h3>
                <p>Comprehensive marketing campaign launch including MLS listing, professional photography, virtual tours, and targeted advertising to reach qualified buyers for your Centennial Hills home.</p>
              </div>
            </div>

            <div class="process-step">
              <div class="step-number">4</div>
              <div class="step-content">
                <h3>Showings & Buyer Feedback</h3>
                <p>Coordinate private showings and open houses while collecting valuable buyer feedback. We'll analyze market response and adjust strategy as needed to optimize your selling timeline.</p>
              </div>
            </div>

            <div class="process-step">
              <div class="step-number">5</div>
              <div class="step-content">
                <h3>Offer Review & Negotiation</h3>
                <p>Expert evaluation of incoming offers and strategic negotiation to secure the best possible terms. We'll guide you through each offer's strengths and help you make informed decisions.</p>
              </div>
            </div>

            <div class="process-step">
              <div class="step-number">6</div>
              <div class="step-content">
                <h3>Closing & Move-Out</h3>
                <p>Final closing coordination including inspection management, appraisal coordination, and ensuring all paperwork is completed correctly for a smooth transaction and successful sale.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Performance */}
      <section class="market-performance">
        <div class="container container-center">
          <h2>Centennial Hills Market Performance</h2>
          <p>Understanding market performance helps sellers set realistic expectations and optimize pricing strategies. For comprehensive market data, review our <a href="/market-analysis">detailed market analysis</a> and <a href="/centennial-hills-market-report">Centennial Hills market reports</a> to understand current conditions and trends.</p>
          <div class="performance-stats">
            <div class="stat-card">
              <LuTrendingUp class="stat-icon" />
              <h3>Average Sale Price</h3>
              <p class="stat-value">$565,000</p>
              <p class="stat-label">Centennial Hills Homes</p>
            </div>
            <div class="stat-card">
              <LuCalendar class="stat-icon" />
              <h3>Days on Market</h3>
              <p class="stat-value">22 days</p>
              <p class="stat-label">Average Time to Sell</p>
            </div>
            <div class="stat-card">
              <LuDollarSign class="stat-icon" />
              <h3>List-to-Sale Ratio</h3>
              <p class="stat-value">98.5%</p>
              <p class="stat-label">Average Sale vs List Price</p>
            </div>
            <div class="stat-card">
              <HiStarMini class="stat-icon" />
              <h3>Market Activity</h3>
              <p class="stat-value">+12.3%</p>
              <p class="stat-label">Year-over-Year Growth</p>
            </div>
          </div>
        </div>
      </section>

      {/* Seller Resources */}
      <section class="seller-resources">
        <div class="container container-center">
          <h2>Essential Seller Resources</h2>
          <div class="resources-grid">
            <div class="resource-card">
              <LuDollarSign class="resource-icon" />
              <h3>Free Home Valuation</h3>
              <p>Get an instant estimate of your Centennial Hills home's current market value with our comprehensive valuation tool.</p>
              <a href="/home-valuation" class="btn btn-outline">Get Valuation</a>
            </div>

            <div class="resource-card">
              <LuBarChart3 class="resource-icon" />
              <h3>Market Reports</h3>
              <p>Access detailed Centennial Hills market reports including recent sales, price trends, and neighborhood insights. Review our <a href="/market-reports">comprehensive market reports</a> and <a href="/market-analysis">market analysis</a> to understand current market conditions.</p>
              <a href="/market-reports" class="btn btn-outline">View Reports</a>
            </div>

            <div class="resource-card">
              <HiHomeMini class="resource-icon" />
              <h3>Staging Services</h3>
              <p>Professional staging recommendations and services to maximize your Centennial Hills home's appeal to buyers.</p>
              <a href="/staging-services" class="btn btn-outline">Learn More</a>
            </div>

            <div class="resource-card">
              <HiStarMini class="resource-icon" />
              <h3>Photography Services</h3>
              <p>High-quality professional photography and virtual tours to showcase your Centennial Hills home's best features.</p>
              <a href="/photography-services" class="btn btn-outline">View Services</a>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section class="success-stories">
        <div class="container container-center">
          <h2>Centennial Hills Selling Success Stories</h2>
          <div class="stories-grid">
            <div class="story-card">
              <div class="story-header">
                <h3>Centennial Hills Estate Sale</h3>
                <p class="story-location">89135 - Central Centennial Hills</p>
              </div>
              <div class="story-content">
                <p>"Dr. Janet Duffy sold our Centennial Hills home for $25,000 above asking price in just 18 days. Her marketing strategy and negotiation skills were exceptional."</p>
                <div class="story-stats">
                  <span>Listed: $685,000</span>
                  <span>Sold: $710,000</span>
                  <span>Days on Market: 18</span>
                </div>
              </div>
            </div>

            <div class="story-card">
              <div class="story-header">
                <h3>New Construction Sale</h3>
                <p class="story-location">89138 - North Centennial Hills</p>
              </div>
              <div class="story-content">
                <p>"We trusted Dr. Janet Duffy with our new construction Centennial Hills home. She positioned it perfectly in the market and found the ideal buyers quickly."</p>
                <div class="story-stats">
                  <span>Listed: $725,000</span>
                  <span>Sold: $725,000</span>
                  <span>Days on Market: 12</span>
                </div>
              </div>
            </div>

            <div class="story-card">
              <div class="story-header">
                <h3>Investment Property Sale</h3>
                <p class="story-location">89144 - West Centennial Hills</p>
              </div>
              <div class="story-content">
                <p>"Dr. Janet Duffy helped us sell our Centennial Hills investment property with excellent returns. Her market knowledge and investor network were invaluable."</p>
                <div class="story-stats">
                  <span>Listed: $485,000</span>
                  <span>Sold: $495,000</span>
                  <span>Days on Market: 15</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section class="cta-section">
        <div class="container container-center">
          <h2>Ready to Sell Your Centennial Hills Home?</h2>
          <p>Dr. Janet Duffy's proven track record and deep Centennial Hills market expertise ensure you'll achieve maximum value for your home. Contact us today for a complimentary consultation and market analysis.</p>
          <div class="cta-buttons">
            <a href="/contact" class="btn btn-primary btn-large">
              <HiPhoneMini class="btn-icon" />
              Call (702) 555-0123
            </a>
            <a href="/home-valuation" class="btn btn-secondary btn-large">Get Free Valuation</a>
          </div>
        </div>
      </section>

      <style>{`
        .hero-section {
          background: linear-gradient(135deg, var(--secondary-color) 0%, #ef4444 100%);
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

        .selling-services {
          padding: 4rem 0;
          background: var(--bg-light);
        }

        .selling-services h2 {
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
          border-radius: 16px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease;
        }

        .service-card:hover {
          transform: translateY(-4px);
        }

        .service-icon {
          width: 3rem;
          height: 3rem;
          color: var(--secondary-color);
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

        .service-card ul {
          margin-bottom: 2rem;
          padding-left: 1.5rem;
        }

        .service-card li {
          margin-bottom: 0.5rem;
          color: var(--text-light);
        }

        .selling-process {
          padding: 4rem 0;
        }

        .selling-process h2 {
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
          background: var(--secondary-color);
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

        .market-performance {
          padding: 4rem 0;
          background: var(--bg-light);
        }

        .market-performance h2 {
          text-align: center;
          margin-bottom: 3rem;
          color: var(--text-dark);
        }

        .performance-stats {
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
          border-color: var(--secondary-color);
          box-shadow: 0 8px 24px rgba(220, 38, 38, 0.15);
        }

        .stat-icon {
          width: 2.5rem;
          height: 2.5rem;
          color: var(--secondary-color);
          margin: 0 auto 1rem auto;
          display: block;
        }

        .stat-value {
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--secondary-color);
          margin-bottom: 0.5rem;
        }

        .stat-label {
          color: var(--text-light);
          font-size: 0.875rem;
        }

        .seller-resources {
          padding: 4rem 0;
        }

        .seller-resources h2 {
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
          color: var(--secondary-color);
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

        .success-stories {
          padding: 4rem 0;
          background: var(--bg-light);
        }

        .success-stories h2 {
          text-align: center;
          margin-bottom: 3rem;
          color: var(--text-dark);
        }

        .stories-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
        }

        .story-card {
          background: white;
          padding: 2rem;
          border-radius: 16px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .story-header h3 {
          margin-bottom: 0.5rem;
          color: var(--text-dark);
        }

        .story-location {
          color: var(--text-light);
          margin-bottom: 1rem;
          font-size: 0.875rem;
        }

        .story-content p {
          margin-bottom: 1.5rem;
          line-height: 1.6;
          color: var(--text-light);
          font-style: italic;
        }

        .story-stats {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .story-stats span {
          background: var(--bg-light);
          padding: 0.5rem 1rem;
          border-radius: 12px;
          font-size: 0.875rem;
          color: var(--text-dark);
          font-weight: 600;
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
          
          .services-grid,
          .performance-stats,
          .resources-grid,
          .stories-grid {
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

      {/* FAQ Section */}
      <FAQSection 
        faqs={sellerServiceFAQs}
        title="Frequently Asked Questions About Selling Your Centennial Hills Home"
        className="bg-gray-50"
      />
    </>
  );
});

export const head: DocumentHead = {
  title: 'Sell Your Centennial Hills Home | Dr. Janet Duffy Real Estate',
  meta: [
    {
      name: 'description',
      content: 'Sell your Centennial Hills home for maximum value with Dr. Janet Duffy. Expert marketing, pricing, and negotiation services for successful home sales in Northwest Las Vegas.',
    },
  ],
};

