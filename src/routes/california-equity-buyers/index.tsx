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
            <span class="highlight">California Equity Buyers</span>
            <br />
            Leverage Your California Equity in Nevada
          </h1>
          <p class="hero-subtitle">
            Specialized assistance for California residents looking to maximize their equity investment in Las Vegas real estate. Dr. Jan Duffy, Top 1% Las Vegas REALTOR® with 30+ years of research expertise, specializes in California equity buyers and corporate relocations.
          </p>
          <div class="hero-buttons">
            <a href="/contact" class="btn btn-primary">California Buyer Consultation</a>
            <a href="/properties" class="btn btn-secondary">View Las Vegas Properties</a>
          </div>
        </div>
      </section>

      {/* Featured Properties for California Buyers - Lead Generator */}
      <section class="featured-properties-section bg-gray-50 py-16">
        <div class="container container-center">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">
              Perfect Properties for California Equity Buyers
            </h2>
            <p class="text-lg text-gray-600 max-w-2xl mx-auto">
              Browse Las Vegas properties ideal for California equity buyers
            </p>
          </div>
          
          {/* RealScout Office Listings - Primary Lead Generator */}
          <RealScoutOfficeListings
            agentEncodedId="QWdlbnQtMjI1MDUw"
            sortOrder="NEWEST"
            listingStatus="For Sale"
            propertyTypes=",SFR"
            priceMin="500000"
            priceMax="1500000"
          />
          
          <div class="text-center mt-8">
            <a href="/contact" class="btn btn-primary btn-lg">
              Get California Equity Analysis
            </a>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section class="service-overview">
        <div class="container container-center">
          <div class="overview-grid">
            <div class="overview-content">
              <h2>California Equity Expertise</h2>
              <p>
                Dr. Janet Duffy specializes in helping California residents leverage their home equity 
                to purchase property in Nevada. With deep understanding of both markets, tax implications, 
                and financing options, we help Californians make smart real estate investments.
              </p>
              
              <h3>Why California Residents Choose Nevada</h3>
              <ul class="feature-list">
                <li>No state income tax - significant savings potential</li>
                <li>Lower property taxes compared to California</li>
                <li>Better value for luxury properties</li>
                <li>No inheritance tax</li>
                <li>Growing real estate market with strong appreciation</li>
                <li>Close proximity to California for easy access</li>
              </ul>
            </div>
            
            <div class="overview-stats">
              <div class="stat-card">
                <h4>Average CA Equity</h4>
                <p class="stat-value">$500K+</p>
              </div>
              <div class="stat-card">
                <h4>Tax Savings</h4>
                <p class="stat-value">Up to 13.3%</p>
              </div>
              <div class="stat-card">
                <h4>Properties Sold</h4>
                <p class="stat-value">200+</p>
              </div>
              <div class="stat-card">
                <h4>Client Satisfaction</h4>
                <p class="stat-value">100%</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section class="benefits-section">
        <div class="container container-center">
          <h2>Benefits of Nevada Real Estate for Californians</h2>
          <div class="benefits-grid">
            <div class="benefit-card">
              <h3>Tax Advantages</h3>
              <p>No state income tax, lower property taxes, and no inheritance tax provide significant financial benefits.</p>
            </div>
            <div class="benefit-card">
              <h3>Better Value</h3>
              <p>Get more house for your money with luxury properties at significantly lower prices than California.</p>
            </div>
            <div class="benefit-card">
              <h3>Investment Growth</h3>
              <p>Las Vegas real estate market offers strong appreciation potential and rental income opportunities.</p>
            </div>
            <div class="benefit-card">
              <h3>Convenient Location</h3>
              <p>Easy access to California with direct flights and driving distance for regular visits.</p>
            </div>
            <div class="benefit-card">
              <h3>Lifestyle Benefits</h3>
              <p>World-class entertainment, dining, and recreational opportunities in Las Vegas.</p>
            </div>
            <div class="benefit-card">
              <h3>Expert Guidance</h3>
              <p>Specialized knowledge of both California and Nevada markets for seamless transactions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section class="service-process">
        <div class="container container-center">
          <h2>Our California Equity Process</h2>
          <div class="process-grid">
            <div class="process-step">
              <div class="step-number">1</div>
              <h3>Equity Assessment</h3>
              <p>Evaluate your California property equity and determine optimal investment strategy.</p>
            </div>
            <div class="process-step">
              <div class="step-number">2</div>
              <h3>Tax Analysis</h3>
              <p>Detailed analysis of tax implications and potential savings from Nevada investment.</p>
            </div>
            <div class="process-step">
              <div class="step-number">3</div>
              <h3>Financing Options</h3>
              <p>Explore financing options including cash-out refinancing and investment property loans.</p>
            </div>
            <div class="process-step">
              <div class="step-number">4</div>
              <h3>Property Search</h3>
              <p>Curated selection of Nevada properties that maximize your California equity investment.</p>
            </div>
            <div class="process-step">
              <div class="step-number">5</div>
              <h3>Remote Viewing</h3>
              <p>Virtual tours and detailed property analysis for California-based buyers.</p>
            </div>
            <div class="process-step">
              <div class="step-number">6</div>
              <h3>Transaction Support</h3>
              <p>Comprehensive support for cross-state transactions and closing coordination.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section class="featured-properties">
        <div class="container container-center">
          <h2>Popular Properties for California Buyers</h2>
          <div class="properties-grid">
            <div class="property-card">
              <div class="property-image">
                <div class="placeholder-image">Property Image</div>
                <div class="property-status">For Sale</div>
              </div>
              <div class="property-info">
                <h3>Centennial Hills Family Home</h3>
                <p class="property-price">$675,000</p>
                <p class="property-details">4 Bedrooms • 3 Bathrooms • 2,800 sq ft</p>
                <p class="property-description">
                  Perfect family home with modern amenities and excellent schools - great value compared to California.
                </p>
                <a href="/contact" class="btn btn-secondary">Virtual Tour</a>
              </div>
            </div>

            <div class="property-card">
              <div class="property-image">
                <div class="placeholder-image">Property Image</div>
                <div class="property-status">For Sale</div>
              </div>
              <div class="property-info">
                <h3>Red Rock Golf Course Home</h3>
                <p class="property-price">$1,250,000</p>
                <p class="property-details">5 Bedrooms • 4 Bathrooms • 3,800 sq ft</p>
                <p class="property-description">
                  Luxury golf course home with mountain views - fraction of California prices.
                </p>
                <a href="/contact" class="btn btn-secondary">Virtual Tour</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section class="testimonials-section">
        <div class="container container-center">
          <h2>California Client Success Stories</h2>
          <div class="testimonials-grid">
            <div class="testimonial-card">
              <p class="testimonial-text">
                "Dr. Duffy helped us leverage our San Francisco equity to buy a beautiful home in Las Vegas. 
                The tax savings alone made it worthwhile, and we got so much more house for our money."
              </p>
              <div class="testimonial-author">
                <strong>Sarah & Michael Chen</strong>
                <span>San Francisco, CA</span>
              </div>
            </div>
            <div class="testimonial-card">
              <p class="testimonial-text">
                "As California residents, we were nervous about buying out of state. Dr. Duffy made the 
                entire process seamless and helped us understand all the financial benefits."
              </p>
              <div class="testimonial-author">
                <strong>Jennifer Martinez</strong>
                <span>Los Angeles, CA</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section class="cta-section">
        <div class="container container-center">
          <h2>Ready to Leverage Your California Equity?</h2>
          <p>Contact Dr. Janet Duffy for personalized guidance on maximizing your California equity in Nevada real estate.</p>
          <div class="cta-buttons">
            <a href="/contact" class="btn btn-primary">Contact Dr. Duffy</a>
            <a href="/market-analysis" class="btn btn-secondary">Get Market Analysis</a>
          </div>
        </div>
      </section>
    </>
  );
});

export const head: DocumentHead = {
  title: 'California Equity Buyers | Nevada Real Estate Investment',
  meta: [
    {
      name: 'description',
      content: 'Specialized assistance for California residents leveraging home equity in Nevada real estate. Dr. Jan Duffy, Top 1% Las Vegas REALTOR® with 30+ years of research expertise, provides expert guidance on tax benefits and investment opportunities.',
    },
    {
      name: 'keywords',
      content: 'California equity buyers, Nevada real estate, tax benefits, Las Vegas investment properties',
    },
  ],
};
