import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { HiHomeMini, HiMapPinMini, HiPhoneMini, HiStarMini } from '@qwikest/icons/heroicons';
import { LuSearch, LuHeart, LuCalendar, LuTrendingUp } from '@qwikest/icons/lucide';

export default component$(() => {
  return (
    <>
      {/* Hero Section */}
      <section class="hero-section">
        <div class="container container-center">
          <h1 class="hero-title">
            Our Luxury Listings in <span class="highlight">Centennial Hills</span>
          </h1>
          <p class="hero-subtitle">
            Discover exclusive luxury homes and premium properties in Centennial Hills and Northwest Las Vegas. 
            Dr. Janet Duffy's curated collection of exceptional Centennial Hills homes for discerning buyers.
          </p>
          <div class="hero-buttons">
            <a href="/mls-search" class="btn btn-primary">Search All Properties</a>
            <a href="/contact" class="btn btn-secondary">Schedule Private Showing</a>
          </div>
        </div>
      </section>

      {/* Featured Luxury Properties */}
      <section class="featured-properties">
        <div class="container container-center">
          <h2>Featured Luxury Centennial Hills Homes</h2>
          <div class="properties-grid">
            <div class="property-card luxury">
              <div class="property-image">
                <div class="property-badge luxury">Luxury Estate</div>
                <div class="property-features">
                  <span>Pool</span>
                  <span>Golf Course View</span>
                  <span>Smart Home</span>
                </div>
              </div>
              <div class="property-info">
                <h3>Centennial Hills Luxury Estate</h3>
                <p class="property-address">Centennial Hills, Las Vegas, NV 89135</p>
                <div class="property-details">
                  <span>5 Bed</span>
                  <span>6 Bath</span>
                  <span>4,250 Sq Ft</span>
                  <span>0.35 Acres</span>
                </div>
                <p class="property-price">$875,000</p>
                <p class="property-description">Stunning luxury home in prestigious Centennial Hills featuring resort-style amenities, custom finishes, and panoramic mountain views.</p>
                <div class="property-actions">
                  <a href="/properties" class="btn btn-primary">View Details</a>
                  <button class="btn btn-outline">
                    <LuHeart class="btn-icon" />
                    Save
                  </button>
                </div>
              </div>
            </div>

            <div class="property-card luxury">
              <div class="property-image">
                <div class="property-badge luxury">New Construction</div>
                <div class="property-features">
                  <span>Energy Efficient</span>
                  <span>Modern Design</span>
                  <span>Smart Features</span>
                </div>
              </div>
              <div class="property-info">
                <h3>Modern Centennial Hills Masterpiece</h3>
                <p class="property-address">Centennial Hills, Las Vegas, NV 89138</p>
                <div class="property-details">
                  <span>4 Bed</span>
                  <span>4.5 Bath</span>
                  <span>3,800 Sq Ft</span>
                  <span>0.28 Acres</span>
                </div>
                <p class="property-price">$725,000</p>
                <p class="property-description">Brand new construction in Centennial Hills featuring contemporary architecture, high-end finishes, and cutting-edge smart home technology.</p>
                <div class="property-actions">
                  <a href="/properties" class="btn btn-primary">View Details</a>
                  <button class="btn btn-outline">
                    <LuHeart class="btn-icon" />
                    Save
                  </button>
                </div>
              </div>
            </div>

            <div class="property-card luxury">
              <div class="property-image">
                <div class="property-badge luxury">Golf Course Home</div>
                <div class="property-features">
                  <span>Golf Views</span>
                  <span>Resort Amenities</span>
                  <span>Gated Community</span>
                </div>
              </div>
              <div class="property-info">
                <h3>Centennial Hills Golf Course Villa</h3>
                <p class="property-address">Centennial Hills, Las Vegas, NV 89144</p>
                <div class="property-details">
                  <span>3 Bed</span>
                  <span>3 Bath</span>
                  <span>2,650 Sq Ft</span>
                  <span>0.22 Acres</span>
                </div>
                <p class="property-price">$625,000</p>
                <p class="property-description">Elegant golf course home in Centennial Hills offering breathtaking fairway views, private patio, and access to exclusive resort amenities.</p>
                <div class="property-actions">
                  <a href="/properties" class="btn btn-primary">View Details</a>
                  <button class="btn btn-outline">
                    <LuHeart class="btn-icon" />
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Property Categories */}
      <section class="property-categories">
        <div class="container container-center">
          <h2>Luxury Property Categories</h2>
          <div class="categories-grid">
            <div class="category-card">
              <HiHomeMini class="category-icon" />
              <h3>Luxury Estates</h3>
              <p>Exclusive Centennial Hills estates featuring premium amenities, custom finishes, and exceptional privacy. Perfect for discerning buyers seeking the ultimate in luxury living.</p>
              <ul>
                <li>4+ Bedrooms</li>
                <li>Premium Finishes</li>
                <li>Private Pools</li>
                <li>Mountain Views</li>
              </ul>
              <a href="/luxury-estates" class="btn btn-outline">View Estates</a>
            </div>

            <div class="category-card">
              <LuTrendingUp class="category-icon" />
              <h3>New Construction</h3>
              <p>Brand new Centennial Hills homes with modern designs, energy-efficient features, and smart home technology. Move into your dream home with the latest amenities.</p>
              <ul>
                <li>Modern Floor Plans</li>
                <li>Smart Home Features</li>
                <li>Energy Efficient</li>
                <li>Builder Warranties</li>
              </ul>
              <a href="/centennial-hills-new-construction" class="btn btn-outline">View New Homes</a>
            </div>

            <div class="category-card">
              <HiStarMini class="category-icon" />
              <h3>Golf Course Homes</h3>
              <p>Premium Centennial Hills properties with golf course access and resort-style amenities. Experience luxury living with access to world-class recreational facilities.</p>
              <ul>
                <li>Golf Course Views</li>
                <li>Resort Amenities</li>
                <li>Gated Communities</li>
                <li>Private Access</li>
              </ul>
              <a href="/golf-course-homes" class="btn btn-outline">View Golf Homes</a>
            </div>

            <div class="category-card">
              <LuSearch class="category-icon" />
              <h3>Investment Properties</h3>
              <p>Strategic investment opportunities in Centennial Hills with strong rental potential and appreciation prospects. Build your portfolio with premium Las Vegas real estate.</p>
              <ul>
                <li>High Rental Demand</li>
                <li>Appreciation Potential</li>
                <li>Prime Locations</li>
                <li>Professional Management</li>
              </ul>
              <a href="/investment-properties" class="btn btn-outline">View Investments</a>
            </div>
          </div>
        </div>
      </section>

      {/* Luxury Features */}
      <section class="luxury-features">
        <div class="container container-center">
          <h2>Luxury Features in Centennial Hills Homes</h2>
          <div class="features-grid">
            <div class="feature-item">
              <h3>Premium Finishes</h3>
              <p>Centennial Hills luxury homes feature high-end materials including granite countertops, hardwood flooring, custom cabinetry, and designer fixtures throughout.</p>
            </div>
            <div class="feature-item">
              <h3>Smart Home Technology</h3>
              <p>State-of-the-art home automation systems including smart lighting, climate control, security systems, and entertainment centers for modern luxury living.</p>
            </div>
            <div class="feature-item">
              <h3>Outdoor Living Spaces</h3>
              <p>Expansive patios, outdoor kitchens, fire features, and resort-style pools create the perfect environment for entertaining and relaxation.</p>
            </div>
            <div class="feature-item">
              <h3>Energy Efficiency</h3>
              <p>Modern Centennial Hills homes incorporate energy-efficient windows, insulation, HVAC systems, and solar panels for sustainable luxury living.</p>
            </div>
            <div class="feature-item">
              <h3>Mountain Views</h3>
              <p>Many Centennial Hills luxury properties offer stunning mountain and valley views, providing a peaceful retreat from the city below.</p>
            </div>
            <div class="feature-item">
              <h3>Gated Communities</h3>
              <p>Exclusive gated neighborhoods in Centennial Hills provide enhanced security, privacy, and access to premium amenities and services.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Market Insights */}
      <section class="market-insights">
        <div class="container container-center">
          <h2>Centennial Hills Luxury Market Insights</h2>
          <div class="insights-grid">
            <div class="insight-card">
              <LuTrendingUp class="insight-icon" />
              <h3>Price Appreciation</h3>
              <p class="insight-value">+15.2%</p>
              <p class="insight-label">Annual Growth in Luxury Segment</p>
            </div>
            <div class="insight-card">
              <LuCalendar class="insight-icon" />
              <h3>Days on Market</h3>
              <p class="insight-value">18 days</p>
              <p class="insight-label">Average for Luxury Homes</p>
            </div>
            <div class="insight-card">
              <HiHomeMini class="insight-icon" />
              <h3>Inventory Level</h3>
              <p class="insight-value">2.1 months</p>
              <p class="insight-label">Supply of Luxury Properties</p>
            </div>
            <div class="insight-card">
              <HiStarMini class="insight-icon" />
              <h3>Average Price</h3>
              <p class="insight-value">$685,000</p>
              <p class="insight-label">Luxury Centennial Hills Homes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Exclusive Access */}
      <section class="exclusive-access">
        <div class="container container-center">
          <h2>Exclusive Access to Off-Market Properties</h2>
          <p>Dr. Janet Duffy provides exclusive access to pre-market and off-market Centennial Hills luxury properties. Join our VIP client network for first access to the most desirable homes before they hit the public market.</p>
          <div class="exclusive-benefits">
            <div class="benefit-item">
              <HiStarMini class="benefit-icon" />
              <h3>Pre-Market Listings</h3>
              <p>Get first access to luxury Centennial Hills homes before they're publicly listed</p>
            </div>
            <div class="benefit-item">
              <LuCalendar class="benefit-icon" />
              <h3>Private Showings</h3>
              <p>Schedule exclusive private viewings at your convenience</p>
            </div>
            <div class="benefit-item">
              <HiMapPinMini class="benefit-icon" />
              <h3>Neighborhood Expertise</h3>
              <p>Deep knowledge of Centennial Hills luxury market trends and opportunities</p>
            </div>
          </div>
          <div class="cta-section">
            <a href="/exclusive-access" class="btn btn-primary btn-large">Join VIP Network</a>
            <a href="/contact" class="btn btn-secondary btn-large">Schedule Consultation</a>
          </div>
        </div>
      </section>

      <style>{`
        .hero-section {
          background: linear-gradient(135deg, #1f2937 0%, #374151 100%);
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
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 2rem;
          max-width: 1400px;
          margin: 0 auto;
        }

        .property-card.luxury {
          background: white;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border: 2px solid transparent;
        }

        .property-card.luxury:hover {
          transform: translateY(-8px);
          box-shadow: 0 16px 48px rgba(0, 0, 0, 0.2);
          border-color: var(--primary-color);
        }

        .property-image {
          height: 250px;
          background: linear-gradient(45deg, #e5e7eb, #f3f4f6);
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .property-badge.luxury {
          position: absolute;
          top: 1rem;
          left: 1rem;
          background: linear-gradient(135deg, #dc2626, #ef4444);
          color: white;
          padding: 0.75rem 1.5rem;
          border-radius: 25px;
          font-size: 0.875rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .property-features {
          position: absolute;
          bottom: 1rem;
          right: 1rem;
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        .property-features span {
          background: rgba(255, 255, 255, 0.9);
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--text-dark);
        }

        .property-info {
          padding: 2rem;
        }

        .property-info h3 {
          margin-bottom: 0.5rem;
          color: var(--text-dark);
          font-size: 1.25rem;
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
          border-radius: 15px;
          font-size: 0.875rem;
          color: var(--text-dark);
          font-weight: 600;
        }

        .property-price {
          font-size: 1.75rem;
          font-weight: 700;
          color: var(--primary-color);
          margin-bottom: 1rem;
        }

        .property-description {
          margin-bottom: 1.5rem;
          line-height: 1.6;
          color: var(--text-light);
        }

        .property-actions {
          display: flex;
          gap: 1rem;
          align-items: center;
        }

        .property-categories {
          padding: 4rem 0;
        }

        .property-categories h2 {
          text-align: center;
          margin-bottom: 3rem;
          color: var(--text-dark);
        }

        .categories-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .category-card {
          background: white;
          padding: 2rem;
          border-radius: 16px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          text-align: center;
          transition: transform 0.3s ease;
        }

        .category-card:hover {
          transform: translateY(-4px);
        }

        .category-icon {
          width: 3rem;
          height: 3rem;
          color: var(--primary-color);
          margin: 0 auto 1rem auto;
          display: block;
        }

        .category-card h3 {
          margin-bottom: 1rem;
          color: var(--text-dark);
        }

        .category-card p {
          margin-bottom: 1.5rem;
          line-height: 1.6;
          color: var(--text-light);
        }

        .category-card ul {
          text-align: left;
          margin-bottom: 2rem;
          padding-left: 1.5rem;
        }

        .category-card li {
          margin-bottom: 0.5rem;
          color: var(--text-light);
        }

        .luxury-features {
          padding: 4rem 0;
          background: var(--bg-light);
        }

        .luxury-features h2 {
          text-align: center;
          margin-bottom: 3rem;
          color: var(--text-dark);
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
        }

        .feature-item {
          background: white;
          padding: 2rem;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .feature-item h3 {
          margin-bottom: 1rem;
          color: var(--text-dark);
        }

        .feature-item p {
          line-height: 1.6;
          color: var(--text-light);
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

        .exclusive-access {
          padding: 4rem 0;
          background: linear-gradient(135deg, var(--primary-color) 0%, #3b82f6 100%);
          color: white;
          text-align: center;
        }

        .exclusive-access h2 {
          margin-bottom: 1rem;
          font-size: 2.5rem;
        }

        .exclusive-access p {
          font-size: 1.125rem;
          margin-bottom: 3rem;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.6;
        }

        .exclusive-benefits {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .benefit-item {
          text-align: center;
        }

        .benefit-icon {
          width: 2.5rem;
          height: 2.5rem;
          color: white;
          margin: 0 auto 1rem auto;
          display: block;
        }

        .benefit-item h3 {
          margin-bottom: 1rem;
          color: white;
        }

        .benefit-item p {
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.6;
        }

        .cta-section {
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
          .categories-grid,
          .features-grid,
          .insights-grid,
          .exclusive-benefits {
            grid-template-columns: 1fr;
          }

          .cta-section {
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Luxury Listings in Centennial Hills | Dr. Janet Duffy Real Estate',
  meta: [
    {
      name: 'description',
      content: 'Discover exclusive luxury homes in Centennial Hills with Dr. Janet Duffy. Premium properties, estates, new construction, and golf course homes in Northwest Las Vegas.',
    },
    {
      name: 'keywords',
      content: 'luxury homes Centennial Hills, premium properties Las Vegas, Centennial Hills estates, luxury real estate, Dr. Janet Duffy, Northwest Las Vegas homes',
    },
  ],
};

