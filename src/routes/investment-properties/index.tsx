import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import RealScoutOfficeListings from '../../components/realscout-office-listings';
import FAQSection, { investmentServiceFAQs } from '../../components/faq-section';

export default component$(() => {
  return (
    <>
      {/* Hero Section */}
      <section class="hero-section">
        <div class="container container-center">
          <h1 class="hero-title">
            Investment Properties - <span class="highlight">Las Vegas Real Estate Investments</span>
          </h1>
          <p class="hero-subtitle">
            Build wealth through Las Vegas real estate investments with Dr. Janet Duffy's expertise in investment property analysis and portfolio development. 
            Rental properties, fix-and-flip opportunities, and long-term appreciation strategies.
          </p>
          <div class="hero-buttons">
            <a href="/contact" class="btn btn-primary">Investment Consultation</a>
            <a href="/properties" class="btn btn-secondary">View Investment Properties</a>
          </div>
        </div>
      </section>

      {/* Featured Investment Properties - Lead Generator */}
      <section class="featured-properties-section bg-gray-50 py-16">
        <div class="container container-center">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">
              Investment Property Opportunities
            </h2>
            <p class="text-lg text-gray-600 max-w-2xl mx-auto">
              Browse current investment properties and rental opportunities in Las Vegas
            </p>
          </div>
          
          {/* RealScout Office Listings - Primary Lead Generator */}
          <RealScoutOfficeListings
            agentEncodedId="QWdlbnQtMjI1MDUw"
            sortOrder="NEWEST"
            listingStatus="For Sale"
            propertyTypes=",SFR"
            priceMin="300000"
            priceMax="800000"
          />
          
          <div class="text-center mt-8">
            <a href="/contact" class="btn btn-primary btn-lg">
              Get Investment Analysis
            </a>
          </div>
        </div>
      </section>

      <div class="container container-center">
        <h2>Strategic Real Estate Investment Opportunities</h2>
        <p>Build wealth through Las Vegas real estate investments with Dr. Janet Duffy's expertise in investment property analysis and portfolio development. Our investment services cover rental properties, fix-and-flip opportunities, and long-term appreciation strategies in Centennial Hills and other high-growth Las Vegas neighborhoods.</p>

        <h2>Investment Property Analysis</h2>
        <p>Receive comprehensive investment analysis including cash flow projections, cap rate calculations, and return on investment (ROI) estimates for Las Vegas properties. Our analysis covers rental market trends, vacancy rates, appreciation potential, and tax advantages to help you make informed investment decisions.</p>

        <h2>Rental Market Opportunities</h2>
        <p>Explore Las Vegas rental property opportunities with strong tenant demand, favorable rental rates, and growth potential. Our rental market analysis covers Centennial Hills, Summerlin, and other areas with high rental demand from professionals, families, and seasonal residents seeking quality housing options.</p>

        <h2>Fix-and-Flip Investments</h2>
        <p>Identify fix-and-flip opportunities in Las Vegas neighborhoods with renovation potential and strong resale markets. Our expertise helps you find undervalued properties, estimate renovation costs, and project resale values to maximize your investment returns in the Las Vegas real estate market.</p>

        <h2>Portfolio Diversification</h2>
        <p>Diversify your real estate portfolio across different Las Vegas neighborhoods, property types, and investment strategies. We help you build a balanced portfolio including single-family rentals, multi-family properties, and commercial investments to spread risk and maximize returns in the Las Vegas market.</p>

        <h2>Investment Property Management</h2>
        <p>Access professional property management services and contractor networks to maintain and optimize your Las Vegas investment properties. Our connections help you find reliable tenants, manage maintenance issues, and maximize rental income while minimizing vacancies and expenses.</p>
      </div>

      {/* FAQ Section */}
      <FAQSection 
        faqs={investmentServiceFAQs}
        title="Frequently Asked Questions About Investment Properties in Centennial Hills"
        className="bg-gray-50"
      />
    </>
  );
});

export const head: DocumentHead = {
  title: 'Investment Properties - Las Vegas Real Estate Investments | Dr. Janet Duffy',
  meta: [
    {
      name: 'description',
      content: 'Las Vegas investment property opportunities with Dr. Janet Duffy. Rental properties, fix-and-flip investments, and portfolio building in Centennial Hills.',
    },
  ],
};







