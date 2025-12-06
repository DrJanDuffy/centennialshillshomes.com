import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import FAQSection, { realtorServiceFAQs } from '../../components/faq-section';

export default component$(() => {
  return (
    <>
      <div class="container container-center">
        <h1>Las Vegas Real Estate Market Analysis</h1>
        
        <h2>Comprehensive Market Intelligence</h2>
        <p>Access detailed Las Vegas real estate market analysis with Dr. Janet Duffy's 30+ years of research expertise. Our market analysis covers trends, pricing patterns, inventory levels, and future projections for Centennial Hills and the broader Las Vegas metropolitan area to inform your real estate decisions.</p>

        <h2>Centennial Hills Market Trends</h2>
        <p>Specialized analysis of Centennial Hills real estate market including price appreciation, sales volume, days on market, and neighborhood-specific trends. Our analysis covers different property types from starter homes to luxury estates, providing insights into market dynamics and investment opportunities.</p>

        <h2>Economic Factors and Market Drivers</h2>
        <p>Our market analysis examines economic factors affecting Las Vegas real estate including employment growth, population trends, interest rates, and development activity. We analyze how these factors impact Centennial Hills and northwest Las Vegas property values and market conditions.</p>

        <h2>Comparative Market Analysis</h2>
        <p>Detailed comparison of Centennial Hills market performance against other Las Vegas neighborhoods including Summerlin, Henderson, and North Las Vegas. Our analysis identifies relative value opportunities, market positioning, and competitive advantages for different property types and price ranges.</p>

        <h2>Investment Market Insights</h2>
        <p>Specialized analysis for real estate investors including rental market trends, cap rates, appreciation potential, and development opportunities in Centennial Hills. Our research identifies emerging investment areas and provides data-driven recommendations for portfolio building and wealth creation.</p>

        <h2>Future Market Projections</h2>
        <p>Forward-looking market analysis based on development plans, infrastructure projects, and demographic trends affecting Centennial Hills and Las Vegas real estate. Our projections help buyers, sellers, and investors make informed decisions about timing and strategy in the Las Vegas market.</p>
      </div>

      {/* FAQ Section */}
      <FAQSection 
        faqs={realtorServiceFAQs}
        title="Frequently Asked Questions About Las Vegas Market Analysis"
        className="bg-gray-50"
      />
    </>
  );
});

export const head: DocumentHead = {
  title: 'Las Vegas Real Estate Market Analysis | Dr. Janet Duffy',
  meta: [
    {
      name: 'description',
      content: 'Comprehensive Las Vegas real estate market analysis with Dr. Janet Duffy. Market trends, pricing patterns, and investment insights for Centennial Hills and Las Vegas.',
    },
  ],
};







