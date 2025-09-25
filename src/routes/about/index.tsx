import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <>
      {/* Hero Section */}
      <section class="hero-section">
        <div class="container container-center">
          <h1 class="hero-title">
            About <span class="highlight">Dr. Janet Duffy</span>
          </h1>
          <p class="hero-subtitle">
            Your trusted real estate professional specializing in Las Vegas luxury properties. Top 1% REALTOR® with 30+ years of research expertise, available 24/7 for executive clients.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section class="about-content">
        <div class="container container-center">
          <div class="about-grid">
            <div class="about-text">
              <h2>Professional Excellence in Real Estate</h2>
              <p>
                Dr. Janet Duffy brings unparalleled expertise and dedication to the Las Vegas real estate market. 
                With years of experience in luxury home sales, California equity transactions, and corporate relocations, 
                she has established herself as a trusted advisor for discerning clients.
              </p>
              
              <h3>Specialized Services</h3>
              <ul class="service-list">
                <li>Luxury Home Sales in Las Vegas' most prestigious communities</li>
                <li>California Equity Buyer Assistance - helping Californians leverage their equity</li>
                <li>Corporate Relocation Services for executives and professionals</li>
                <li>Market Analysis and Property Valuations</li>
                <li>Same-Day Property Showings</li>
                <li>Investment Property Guidance</li>
              </ul>

              <h3>Community Focus</h3>
              <p>
                Dr. Duffy specializes in Las Vegas' premier communities including Centennial Hills, 
                Red Rock Country Club, The Ridges, Summerlin West, Lone Mountain, and North Las Vegas. 
                Her deep knowledge of these areas ensures clients find the perfect home in the ideal location.
              </p>
            </div>
            
            <div class="about-highlights">
              <div class="highlight-card">
                <h4>Experience</h4>
                <p>Years of dedicated service in Las Vegas real estate</p>
              </div>
              <div class="highlight-card">
                <h4>Expertise</h4>
                <p>Specialized knowledge in luxury properties and equity transactions</p>
              </div>
              <div class="highlight-card">
                <h4>Service</h4>
                <p>Personalized attention and same-day showings</p>
              </div>
              <div class="highlight-card">
                <h4>Results</h4>
                <p>Successful transactions and satisfied clients</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section class="cta-section">
        <div class="container container-center">
          <h2>Ready to Work with Dr. Duffy?</h2>
          <p>Contact Dr. Janet Duffy today for personalized real estate guidance.</p>
          <div class="cta-buttons">
            <a href="/contact" class="btn btn-primary">Contact Us</a>
            <a href="/properties" class="btn btn-secondary">View Properties</a>
          </div>
        </div>
      </section>
    </>
  );
});

export const head: DocumentHead = {
  title: 'About Dr. Janet Duffy | Las Vegas Real Estate Professional',
  meta: [
    {
      name: 'description',
      content: 'Learn about Dr. Janet Duffy, your trusted Las Vegas real estate professional specializing in luxury homes, California equity buyers, and corporate relocations. Top 1% REALTOR® with 30+ years of research expertise, available 24/7 for executive clients.',
    },
    {
      name: 'keywords',
      content: 'Dr. Janet Duffy, Las Vegas real estate agent, luxury homes, California equity buyers, corporate relocations',
    },
  ],
};
