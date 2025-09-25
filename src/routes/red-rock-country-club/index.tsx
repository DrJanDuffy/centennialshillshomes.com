import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import CommuteWidget from '../../components/commute-widget';

export default component$(() => {
  return (
    <>
      {/* Hero Section */}
      <section class="hero-section">
        <div class="container container-center">
          <h1 class="hero-title">
            <span class="highlight">Red Rock Country Club</span>
            <br />
            Luxury Living with Championship Golf
          </h1>
          <p class="hero-subtitle">
            Experience exclusive gated community living with world-class golf, stunning mountain views, and resort-style amenities.
          </p>
        </div>
      </section>

      {/* Community Overview */}
      <section class="community-overview">
        <div class="container container-center">
          <div class="overview-grid">
            <div class="overview-content">
              <h2>About Red Rock Country Club</h2>
              <p>
                Red Rock Country Club is Las Vegas' premier gated golf community, offering residents 
                an exclusive lifestyle with championship golf, luxury amenities, and breathtaking 
                mountain views. This prestigious community features custom homes and resort-style living.
              </p>
              
              <h3>Exclusive Features</h3>
              <ul class="feature-list">
                <li>Championship 18-hole golf course designed by Arnold Palmer</li>
                <li>Gated community with 24/7 security</li>
                <li>Luxury custom homes with mountain and golf course views</li>
                <li>Resort-style amenities including spa and fitness center</li>
                <li>Fine dining restaurants and social events</li>
                <li>Close proximity to Red Rock Canyon National Conservation Area</li>
              </ul>
            </div>
            
            <div class="overview-stats">
              <div class="stat-card">
                <h4>Average Home Price</h4>
                <p class="stat-value">$1,200,000</p>
              </div>
              <div class="stat-card">
                <h4>Home Styles</h4>
                <p class="stat-value">Custom Luxury</p>
              </div>
              <div class="stat-card">
                <h4>Year Built</h4>
                <p class="stat-value">1995-2024</p>
              </div>
              <div class="stat-card">
                <h4>Community Size</h4>
                <p class="stat-value">1,200+ Homes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section class="amenities-section">
        <div class="container container-center">
          <h2>Luxury Amenities</h2>
          <div class="amenities-grid">
            <div class="amenity-card">
              <h3>Championship Golf</h3>
              <p>Arnold Palmer-designed 18-hole golf course with stunning mountain views</p>
            </div>
            <div class="amenity-card">
              <h3>Clubhouse</h3>
              <p>Luxurious clubhouse with fine dining and social events</p>
            </div>
            <div class="amenity-card">
              <h3>Spa & Fitness</h3>
              <p>Full-service spa and state-of-the-art fitness center</p>
            </div>
            <div class="amenity-card">
              <h3>Tennis Courts</h3>
              <p>Professional tennis courts with instruction available</p>
            </div>
            <div class="amenity-card">
              <h3>Swimming Pool</h3>
              <p>Resort-style pool with cabanas and poolside service</p>
            </div>
            <div class="amenity-card">
              <h3>Security</h3>
              <p>24/7 gated security and concierge services</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section class="featured-properties">
        <div class="container container-center">
          <h2>Featured Properties in Red Rock Country Club</h2>
          <div class="properties-grid">
            <div class="property-card">
              <div class="property-image">
                <div class="placeholder-image">Property Image</div>
                <div class="property-status">For Sale</div>
              </div>
              <div class="property-info">
                <h3>Golf Course Estate</h3>
                <p class="property-price">$1,450,000</p>
                <p class="property-details">5 Bedrooms • 4.5 Bathrooms • 4,200 sq ft</p>
                <p class="property-description">
                  Stunning custom home with panoramic golf course and mountain views.
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
                <h3>Mountain View Villa</h3>
                <p class="property-price">$1,850,000</p>
                <p class="property-details">6 Bedrooms • 5 Bathrooms • 5,100 sq ft</p>
                <p class="property-description">
                  Luxury custom home with breathtaking Red Rock Canyon views.
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
          <h2>Commute from Red Rock Country Club</h2>
          <p>Experience convenient access to Las Vegas attractions while enjoying the privacy of this exclusive gated community.</p>
          <CommuteWidget 
            center={{ lat: 36.1081, lng: -115.3301 }} // Red Rock Country Club coordinates
            title="Red Rock Country Club Commute Times"
            description="Add destinations to see travel times from Red Rock Country Club"
            class="community-widget"
          />
          <div class="commute-highlights">
            <h3>Popular Destinations from Red Rock Country Club:</h3>
            <ul>
              <li><strong>Las Vegas Strip:</strong> 15-25 minutes</li>
              <li><strong>Downtown Las Vegas:</strong> 20-30 minutes</li>
              <li><strong>McCarran Airport:</strong> 25-40 minutes</li>
              <li><strong>Red Rock Canyon:</strong> 5-10 minutes</li>
              <li><strong>Summerlin:</strong> 10-15 minutes</li>
              <li><strong>Centennial Hills:</strong> 20-30 minutes</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section class="cta-section">
        <div class="container container-center">
          <h2>Ready for Luxury Living?</h2>
          <p>Dr. Janet Duffy specializes in Red Rock Country Club properties and can help you find your dream home.</p>
          <div class="cta-buttons">
            <a href="/contact" class="btn btn-primary">Contact Dr. Duffy</a>
            <a href="/luxury-home-sales" class="btn btn-secondary">Luxury Home Sales</a>
          </div>
        </div>
      </section>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Red Rock Country Club Homes | Luxury Golf Community Las Vegas',
  meta: [
    {
      name: 'description',
      content: 'Discover Red Rock Country Club, Las Vegas\' premier gated golf community with championship golf, luxury amenities, and custom homes.',
    },
    {
      name: 'keywords',
      content: 'Red Rock Country Club, luxury golf community, Las Vegas golf homes, Arnold Palmer golf course',
    },
  ],
};
