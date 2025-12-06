import { component$, useSignal } from '@builder.io/qwik';
import { useStyles$ } from '@builder.io/qwik';
import styles from './footer.css?inline';

export default component$(() => {
  useStyles$(styles);
  
  const email = useSignal('');

  return (
    <footer class="main-footer">
      <div class="footer-container">
        {/* Newsletter Section */}
        <div class="newsletter-section">
          <div class="newsletter-content">
            <div class="newsletter-text">
              <h3>Stay Updated with Las Vegas Real Estate</h3>
              <p>Get the latest market insights, new listings, and exclusive opportunities delivered to your inbox.</p>
            </div>
            <form class="newsletter-form">
              <div class="newsletter-input-group">
                <input 
                  type="email" 
                  placeholder="Enter your email address"
                  bind:value={email}
                  required
                />
                <button type="submit" class="newsletter-button">
                  Subscribe
                </button>
              </div>
              <p class="newsletter-disclaimer">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </form>
          </div>
        </div>

        {/* Main Footer Content */}
        <div class="footer-content">
          {/* Company Info */}
          <div class="footer-section company-section">
            <div class="footer-logo">
              <a href="/" class="footer-logo-link">
                <img 
                  src="/images/logo.png" 
                  alt="Centennial Hills Real Estate - Homes by Dr. Jan Duffy"
                  class="footer-logo-image"
                  loading="lazy"
                />
              </a>
              <h3>Centennial Hills Real Estate</h3>
              <p class="footer-subtitle">Homes by Dr. Jan Duffy</p>
            </div>
            <p class="footer-description">
              Luxury real estate specialist serving West Summerlin's premier neighborhoods including ZIP codes 89138, 89144, and 89135. Dr. Jan Duffy, REALTOR® offers 30+ years of research expertise in luxury homes $400K-$750K. Specializing in Red Rock Country Club, The Ridges, and Summerlin West communities for California equity buyers and corporate relocations.
            </p>
            
            {/* Contact Info */}
            <div class="contact-info">
              <div class="contact-item">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122L9.96 11.672a.678.678 0 0 1-.755-.245L7.64 9.35a.678.678 0 0 1-.122-.58l.122-1.034a.678.678 0 0 0-.122-.58L5.35 4.64a.678.678 0 0 1-.245-.755l1.034-1.034a.678.678 0 0 0-.58-.122L4.64 3.654a.678.678 0 0 0-1.015-.063z"/>
                </svg>
                <div class="contact-details">
                  <a href="tel:+17029031952">(702) 903-1952</a>
                  <span class="contact-label">Call or Text</span>
                </div>
              </div>
              <div class="contact-item">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                </svg>
                <div class="contact-details">
                  <a href="mailto:janet@centennialhillshomes.com">janet@centennialhillshomes.com</a>
                  <span class="contact-label">Email</span>
                </div>
              </div>
              <div class="contact-item">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                </svg>
                <div class="contact-details">
                  <span>1490 Center Crossing Rd</span>
                  <span class="contact-label">Las Vegas, NV 89144</span>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div class="business-hours">
              <h4>Business Hours</h4>
              <div class="hours-list">
                <div class="hours-item">
                  <span class="day">Sunday</span>
                  <span class="time">6:00 AM - 9:00 PM</span>
                </div>
                <div class="hours-item">
                  <span class="day">Monday</span>
                  <span class="time">6:00 AM - 9:00 PM</span>
                </div>
                <div class="hours-item">
                  <span class="day">Tuesday</span>
                  <span class="time">6:00 AM - 9:00 PM</span>
                </div>
                <div class="hours-item">
                  <span class="day">Wednesday</span>
                  <span class="time">6:00 AM - 9:00 PM</span>
                </div>
                <div class="hours-item">
                  <span class="day">Thursday</span>
                  <span class="time">6:00 AM - 9:00 PM</span>
                </div>
                <div class="hours-item">
                  <span class="day">Friday</span>
                  <span class="time">6:00 AM - 9:00 PM</span>
                </div>
                <div class="hours-item">
                  <span class="day">Saturday</span>
                  <span class="time">6:00 AM - 9:00 PM</span>
                </div>
                <div class="hours-item special">
                  <span class="day">Same-Day Showings</span>
                  <span class="time">Available 24/7</span>
                </div>
                <div class="hours-item special">
                  <span class="day">Executive Clients</span>
                  <span class="time">24/7 Service</span>
                </div>
                <div class="hours-item special">
                  <span class="day">Special Hours</span>
                  <span class="time">Closed: Jul 4, Sep 1 (Labor Day)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div class="footer-section">
            <h4 class="footer-title">Our Services</h4>
            <ul class="footer-links">
              <li><a href="/luxury-home-sales">Luxury Home Sales</a></li>
              <li><a href="/california-equity-buyers">California Equity Buyers</a></li>
              <li><a href="/corporate-relocations">Corporate Relocations</a></li>
              <li><a href="/market-analysis">Market Analysis</a></li>
              <li><a href="/same-day-showings">Same-Day Showings</a></li>
              <li><a href="/investment-properties">Investment Properties</a></li>
            </ul>
            
            {/* Service Areas */}
            <div class="service-areas">
              <h5>Service Areas</h5>
              <div class="areas-grid">
                <span>Centennial Hills</span>
                <span>Summerlin</span>
                <span>Summerlin West</span>
                <span>Summerlin North</span>
                <span>Summerlin South</span>
                <span>North Las Vegas</span>
                <span>Lone Mountain</span>
                <span>Providence</span>
                <span>Tule Springs</span>
                <span>Kyle Canyon</span>
                <span>Elkhorn</span>
                <span>Antelope</span>
                <span>Los Prados</span>
                <span>The Springs</span>
                <span>Wyeth Ranch</span>
                <span>La Madre Foothills</span>
                <span>Carmel Canyon</span>
                <span>Silverstone Ranch</span>
                <span>Iron Mountain Ranch</span>
                <span>Lone Mountain Heights</span>
              </div>
            </div>
          </div>

          {/* Communities */}
          <div class="footer-section">
            <h4 class="footer-title">Featured Communities</h4>
            <ul class="footer-links">
              <li><a href="/centennial-hills">Centennial Hills</a></li>
              <li><a href="/red-rock-country-club">Red Rock Country Club</a></li>
              <li><a href="/the-ridges">The Ridges</a></li>
              <li><a href="/summerlin-west">Summerlin West</a></li>
              <li><a href="/lone-mountain">Lone Mountain</a></li>
              <li><a href="/north-las-vegas">North Las Vegas</a></li>
            </ul>
            
            {/* Quick Links */}
            <div class="quick-links">
              <h5>Quick Links</h5>
              <ul class="quick-links-list">
                <li><a href="/properties">View Properties</a></li>
                <li><a href="/commute-calculator">Commute Calculator</a></li>
                <li><a href="/buyers">For Buyers</a></li>
                <li><a href="/sellers">For Sellers</a></li>
              </ul>
            </div>
          </div>

          {/* Resources & Support */}
          <div class="footer-section">
            <h4 class="footer-title">Resources & Support</h4>
            <ul class="footer-links">
              <li><a href="/about">About Dr. Duffy</a></li>
              <li><a href="/testimonials">Client Testimonials</a></li>
              <li><a href="/faq">Frequently Asked Questions</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
            
            {/* Certifications */}
            <div class="certifications-section">
              <h5>Professional Certifications</h5>
              <div class="cert-badges">
                <div class="cert-badge">
                  <span class="cert-icon">🏆</span>
                  <span class="cert-text">Top 1% REALTOR®</span>
                </div>
                <div class="cert-badge">
                  <span class="cert-icon">🎓</span>
                  <span class="cert-text">30+ Years Experience</span>
                </div>
                <div class="cert-badge">
                  <span class="cert-icon">⭐</span>
                  <span class="cert-text">Women-Owned Business</span>
                </div>
                <div class="cert-badge">
                  <span class="cert-icon">🇺🇸</span>
                  <span class="cert-text">Veteran-Owned Business</span>
                </div>
                <div class="cert-badge">
                  <span class="cert-icon">♿</span>
                  <span class="cert-text">Wheelchair Accessible</span>
                </div>
                <div class="cert-badge">
                  <span class="cert-icon">🏳️‍🌈</span>
                  <span class="cert-text">LGBTQ+ Friendly</span>
                </div>
                <div class="cert-badge">
                  <span class="cert-icon">🚗</span>
                  <span class="cert-text">Free Parking</span>
                </div>
                <div class="cert-badge">
                  <span class="cert-icon">🌍</span>
                  <span class="cert-text">Multi-Language</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media & Certifications */}
        <div class="footer-social">
          <div class="social-links">
            <a href="https://www.facebook.com/SummerlinNewHomesBHHS" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/drjanduffy/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.919-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/company/california-to-vegas-homes" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="https://www.pinterest.com/DrJanDuffy/" target="_blank" rel="noopener noreferrer" aria-label="Pinterest">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
              </svg>
            </a>
            <a href="https://www.youtube.com/@DrDuffy" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
          
          <div class="certifications">
            <div class="cert-item">
              <span class="cert-badge">Top 1%</span>
              <span class="cert-text">Las Vegas REALTOR®</span>
            </div>
            <div class="cert-item">
              <span class="cert-badge">30+ Years</span>
              <span class="cert-text">Research Expertise</span>
            </div>
            <div class="cert-item">
              <span class="cert-badge">24/7</span>
              <span class="cert-text">Executive Service</span>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div class="footer-bottom">
          <div class="footer-bottom-content">
            <div class="footer-bottom-left">
              <p>&copy; 2024 Centennial Hills Real Estate | Homes by Dr. Jan Duffy. All rights reserved.</p>
              <p>Licensed in Nevada | Equal Housing Opportunity</p>
            </div>
            <div class="footer-bottom-right">
              <a href="/privacy">Privacy Policy</a>
              <a href="/terms">Terms of Service</a>
              <a href="/sitemap.xml">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});
