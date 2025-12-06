import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import FAQSection, { realtorServiceFAQs } from '../../components/faq-section';

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
                With 30+ years of research expertise and years of experience in luxury home sales, California equity 
                transactions, and corporate relocations, she has established herself as a trusted advisor for 
                discerning clients. Her Top 1% REALTOR® designation reflects her commitment to excellence and 
                outstanding results in the Las Vegas real estate market.
              </p>
              <p>
                Dr. Duffy's unique combination of research expertise and real estate experience provides clients 
                with data-driven insights and strategic guidance that ensures successful transactions. Her 
                understanding of market dynamics, property values, and buyer behavior helps clients make informed 
                decisions and achieve their real estate goals.
              </p>
              <p>
                As a Top 1% REALTOR®, Dr. Duffy has demonstrated exceptional performance in the Las Vegas real 
                estate market, consistently achieving outstanding results for her clients. This designation 
                reflects her commitment to excellence, market expertise, and client service that sets her apart 
                in the competitive Las Vegas real estate market.
              </p>

              <h2>Specialized Services</h2>
              <p>
                Dr. Duffy offers comprehensive real estate services tailored to meet the unique needs of her 
                clients. Her specialized expertise in luxury properties, California equity transactions, and 
                corporate relocations ensures that clients receive expert guidance throughout their real estate 
                journey.
              </p>
              
              <h3>Luxury Home Sales</h3>
              <p>
                Dr. Duffy specializes in luxury home sales in Las Vegas' most prestigious communities, including 
                The Ridges, Red Rock Country Club, Summerlin West, and other premier neighborhoods. Her expertise 
                in luxury properties includes understanding market dynamics, property values, and buyer preferences 
                that are unique to the luxury market.
              </p>
              <p>
                Luxury home sales require specialized knowledge and expertise that goes beyond standard real 
                estate transactions. Dr. Duffy's experience in luxury markets ensures that clients receive 
                comprehensive guidance on pricing, marketing, and negotiation strategies that maximize value and 
                ensure successful transactions.
              </p>

              <h3>California Equity Buyer Assistance</h3>
              <p>
                Dr. Duffy provides specialized assistance for California equity buyers who are leveraging their 
                California home equity to purchase properties in Nevada. This service includes navigating tax 
                implications, coordinating financing, and finding properties that maximize their equity investment.
              </p>
              <p>
                California equity buyers face unique challenges and opportunities when purchasing Nevada properties. 
                Dr. Duffy's expertise in cross-state transactions, tax benefits, and equity maximization ensures 
                that California buyers receive expert guidance that helps them make the most of their equity 
                investment.
              </p>

              <h3>Corporate Relocation Services</h3>
              <p>
                Dr. Duffy offers comprehensive corporate relocation services for executives and professionals 
                who are relocating to Las Vegas. These services include temporary housing assistance, neighborhood 
                analysis, school district information, commute analysis, and coordination with relocation companies.
              </p>
              <p>
                Corporate relocations require rapid response and comprehensive support to ensure smooth transitions. 
                Dr. Duffy's same-day showing availability and expedited market analysis help corporate clients 
                find homes quickly and efficiently, minimizing disruption to their professional and personal lives.
              </p>

              <h3>Market Analysis and Property Valuations</h3>
              <p>
                Dr. Duffy provides comprehensive market analysis and property valuations that help clients 
                understand current market conditions and property values. Her 30+ years of research expertise 
                ensures that clients receive data-driven insights that support informed decision-making.
              </p>
              <p>
                Market analysis includes examining recent sales, current listings, market trends, and economic 
                factors that affect property values. This analysis helps clients understand pricing dynamics, 
                market conditions, and opportunities that support their real estate goals.
              </p>

              <h3>Same-Day Property Showings</h3>
              <p>
                Dr. Duffy offers same-day property showings for executive clients and urgent inquiries, ensuring 
                that clients can view properties promptly when needed. This service is particularly valuable for 
                corporate relocations and time-sensitive transactions.
              </p>
              <p>
                Same-day showings require flexibility and responsiveness that Dr. Duffy provides to ensure that 
                clients can view properties when it's most convenient for them. This service demonstrates her 
                commitment to client service and understanding of the urgency that often accompanies real estate 
                transactions.
              </p>

              <h3>Investment Property Guidance</h3>
              <p>
                Dr. Duffy provides expert guidance for real estate investors seeking to build or expand their 
                investment portfolios in Las Vegas. Her expertise in investment analysis, rental markets, and 
                property values helps investors identify opportunities and make informed investment decisions. 
                Explore <a href="/investment-properties">investment property opportunities</a> and review our <a href="/market-analysis">market analysis</a> for investment insights.
              </p>
              <p>
                Investment property guidance includes analyzing rental potential, cash flow projections, 
                appreciation potential, and market trends that affect investment returns. This guidance helps 
                investors evaluate opportunities and make decisions that support their investment goals.
              </p>

              <h2>Community Focus</h2>
              <p>
                Dr. Duffy specializes in Las Vegas' premier communities including Centennial Hills, Red Rock 
                Country Club, The Ridges, Summerlin West, Lone Mountain, and North Las Vegas. Her deep knowledge 
                of these areas ensures clients find the perfect home in the ideal location.
              </p>
              <p>
                Each community offers unique characteristics, amenities, and lifestyle benefits that appeal to 
                different buyers. Dr. Duffy's expertise in these communities helps clients understand what each 
                area offers and identify communities that match their preferences and goals.
              </p>

              <h3>Centennial Hills</h3>
              <p>
                <a href="/centennial-hills">Centennial Hills</a> is a master-planned community in northwest Las Vegas that offers excellent value, 
                new construction, and family-friendly neighborhoods. Dr. Duffy's expertise in Centennial Hills 
                helps clients understand the area's growth, <a href="/centennial-hills-amenities">amenities</a>, and property values. Explore <a href="/centennial-hills-homes">available Centennial Hills homes</a> and learn about <a href="/centennial-hills-schools">area schools</a>.
              </p>

              <h3>Red Rock Country Club</h3>
              <p>
                <a href="/red-rock-country-club">Red Rock Country Club</a> is a premier golf course community featuring luxury homes, championship 
                golf, and resort-style amenities. Dr. Duffy's expertise in golf course communities helps clients 
                understand the benefits and value of golf course living. Explore <a href="/golf-course-homes">golf course homes</a> in this exclusive community.
              </p>

              <h3>The Ridges</h3>
              <p>
                <a href="/the-ridges">The Ridges</a> is one of Las Vegas' most exclusive gated communities, featuring luxury estates, 
                private golf course access, and stunning mountain views. Dr. Duffy's expertise in luxury 
                communities helps clients navigate the exclusive market and find properties that match their 
                preferences. View <a href="/homes-over-1m">luxury homes over $1M</a> in The Ridges.
              </p>

              <h3>Summerlin West</h3>
              <p>
                <a href="/summerlin-west">Summerlin West</a> is the premier section of the master-planned <a href="/summerlin">Summerlin</a> community, offering luxury 
                homes, excellent schools, and world-class amenities. Dr. Duffy's expertise in Summerlin helps 
                clients understand the area's established reputation and comprehensive amenities. Compare <a href="/centennial-hills-vs-summerlin">Centennial Hills vs Summerlin</a> to understand the differences.
              </p>

              <h2>Why Choose Dr. Jan Duffy</h2>
              <p>
                Dr. Jan Duffy's combination of research expertise, market knowledge, and client service makes her 
                the ideal choice for your Las Vegas real estate needs. Her 30+ years of research expertise, Top 
                1% REALTOR® designation, and specialized services ensure that clients receive expert guidance 
                throughout their real estate journey.
              </p>

              <h3>Research Expertise</h3>
              <p>
                Dr. Duffy's 30+ years of research expertise provides clients with data-driven insights and 
                comprehensive market knowledge that supports informed decision-making. This expertise ensures that 
                clients understand market dynamics, property values, and opportunities that affect their real 
                estate goals.
              </p>

              <h3>Market Knowledge</h3>
              <p>
                Dr. Duffy's deep knowledge of Las Vegas real estate markets, neighborhoods, and property values 
                ensures that clients receive expert guidance tailored to their specific needs and goals. This 
                knowledge helps clients make informed decisions and achieve successful transactions.
              </p>

              <h3>Client Service</h3>
              <p>
                Dr. Duffy's commitment to client service includes same-day showings, personalized attention, and 
                24/7 availability for executive clients. This commitment ensures that clients receive the support 
                and guidance they need throughout their real estate journey.
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

      {/* FAQ Section */}
      <FAQSection 
        faqs={realtorServiceFAQs}
        title="Frequently Asked Questions About Dr. Jan Duffy's Services"
        className="bg-gray-50"
      />

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
  ],
};
