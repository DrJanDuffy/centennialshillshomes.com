import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <>
      {/* Hero Section */}
      <section class="hero-section">
        <div class="container container-center">
          <h1 class="hero-title">
            Frequently Asked <span class="highlight">Questions</span>
          </h1>
          <p class="hero-subtitle">
            Get answers to common questions about Las Vegas real estate, Dr. Janet Duffy's services, and the home buying process.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section class="faq-content">
        <div class="container container-center">
          <div class="faq-grid">
            <div class="faq-category">
              <h2>General Questions</h2>
              
              <div class="faq-item">
                <h3>What is Dr. Janet Duffy Real Estate?</h3>
                <p>
                  Dr. Janet Duffy Real Estate is a specialized real estate service focused on luxury home sales, 
                  California equity buyers, and corporate relocations in Las Vegas' most prestigious communities. 
                  We provide personalized service with same-day showings and comprehensive market analysis.
                </p>
              </div>

              <div class="faq-item">
                <h3>What services does Dr. Janet Duffy provide?</h3>
                <p>
                  Dr. Janet Duffy offers a comprehensive range of real estate services including:
                </p>
                <ul>
                  <li>Luxury Home Sales in Las Vegas' premier communities</li>
                  <li>California Equity Buyer Assistance</li>
                  <li>Corporate Relocation Services</li>
                  <li>Market Analysis and Property Valuations</li>
                  <li>Same-Day Property Showings</li>
                  <li>Investment Property Guidance</li>
                </ul>
              </div>

              <div class="faq-item">
                <h3>How much do Dr. Janet Duffy's services cost?</h3>
                <p>
                  Real estate commissions are typically paid by the seller and split between listing and buyer agents. 
                  Dr. Duffy's consultation and market analysis services are often provided at no additional cost to buyers. 
                  Contact us for specific pricing information based on your needs.
                </p>
              </div>
            </div>

            <div class="faq-category">
              <h2>California Equity Buyers</h2>
              
              <div class="faq-item">
                <h3>What is a California Equity Buyer?</h3>
                <p>
                  California Equity Buyers are residents of California who have built significant equity in their 
                  current homes and want to leverage that equity to purchase property in Nevada, often for better 
                  value, lower taxes, or investment purposes.
                </p>
              </div>

              <div class="faq-item">
                <h3>How can Dr. Duffy help California residents?</h3>
                <p>
                  Dr. Duffy specializes in helping California residents navigate the Nevada real estate market, 
                  understand tax implications, coordinate financing across states, and find properties that 
                  maximize their California equity investment.
                </p>
              </div>

              <div class="faq-item">
                <h3>What are the tax benefits of buying in Nevada?</h3>
                <p>
                  Nevada offers several tax advantages including no state income tax, lower property taxes 
                  compared to California, and no inheritance tax. Dr. Duffy can provide detailed information 
                  about tax implications for your specific situation.
                </p>
              </div>
            </div>

            <div class="faq-category">
              <h2>Corporate Relocations</h2>
              
              <div class="faq-item">
                <h3>What corporate relocation services are available?</h3>
                <p>
                  Dr. Duffy provides comprehensive corporate relocation services including temporary housing 
                  assistance, neighborhood analysis, school district information, commute analysis, and 
                  coordination with relocation companies.
                </p>
              </div>

              <div class="faq-item">
                <h3>How quickly can you help with a corporate move?</h3>
                <p>
                  Dr. Duffy understands the urgency of corporate relocations and can provide same-day showings, 
                  expedited market analysis, and rapid response to relocation needs. Contact us immediately 
                  for urgent relocation assistance.
                </p>
              </div>
            </div>

            <div class="faq-category">
              <h2>Property Search & Showings</h2>
              
              <div class="faq-item">
                <h3>How do I schedule a property showing?</h3>
                <p>
                  You can schedule showings by calling Dr. Duffy directly, using our contact form, or 
                  requesting a showing through our property listings. Same-day showings are available 
                  for urgent needs.
                </p>
              </div>

              <div class="faq-item">
                <h3>What areas does Dr. Duffy serve?</h3>
                <p>
                  Dr. Duffy specializes in Las Vegas' premier communities including Centennial Hills, 
                  Red Rock Country Club, The Ridges, Summerlin West, Lone Mountain, and North Las Vegas.
                </p>
              </div>

              <div class="faq-item">
                <h3>Do you provide market analysis for specific areas?</h3>
                <p>
                  Yes, Dr. Duffy provides detailed market analysis for specific neighborhoods, 
                  including recent sales data, price trends, and market forecasts to help you make 
                  informed decisions.
                </p>
              </div>
            </div>

            <div class="faq-category">
              <h2>Investment Properties</h2>
              
              <div class="faq-item">
                <h3>What types of investment properties are available?</h3>
                <p>
                  Las Vegas offers various investment opportunities including single-family rentals, 
                  multi-family properties, commercial real estate, and vacation rental properties. 
                  Dr. Duffy can help identify the best investment opportunities for your goals.
                </p>
              </div>

              <div class="faq-item">
                <h3>What is the rental market like in Las Vegas?</h3>
                <p>
                  Las Vegas has a strong rental market with good cash flow potential. Dr. Duffy can 
                  provide detailed rental market analysis including average rents, occupancy rates, 
                  and ROI projections for specific areas.
                </p>
              </div>
            </div>

            <div class="faq-category">
              <h2>Why Choose Dr. Janet Duffy?</h2>
              
              <div class="faq-item">
                <h3>What makes Dr. Duffy different from other agents?</h3>
                <p>
                  Dr. Duffy offers specialized expertise in luxury properties, California equity transactions, 
                  and corporate relocations. Her personalized service, same-day showings, and deep market 
                  knowledge set her apart from traditional real estate agents.
                </p>
              </div>

              <div class="faq-item">
                <h3>How can I get started with Dr. Duffy?</h3>
                <p>
                  Getting started is easy! Contact Dr. Duffy through our website, call directly, or 
                  schedule a consultation. She will assess your needs and create a personalized 
                  plan to help you achieve your real estate goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section class="cta-section">
        <div class="container container-center">
          <h2>Still Have Questions?</h2>
          <p>Contact Dr. Janet Duffy for personalized answers to your specific real estate questions.</p>
          <div class="cta-buttons">
            <a href="/contact" class="btn btn-primary">Contact Dr. Duffy</a>
            <a href="/about" class="btn btn-secondary">About Dr. Duffy</a>
          </div>
        </div>
      </section>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Real Estate FAQ | Dr. Janet Duffy Las Vegas',
  meta: [
    {
      name: 'description',
      content: 'Get answers to frequently asked questions about Las Vegas real estate, California equity buyers, corporate relocations, and Dr. Janet Duffy\'s services.',
    },
    {
      name: 'keywords',
      content: 'Las Vegas real estate FAQ, California equity buyers, corporate relocations, luxury homes, Dr. Janet Duffy',
    },
  ],
};
