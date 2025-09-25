import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <>
      <div class="container container-center">
        <h1>Recent Sales - Las Vegas Real Estate Market Activity</h1>
        
        <h2>Market Activity and Sales Data</h2>
        <p>Stay informed about Las Vegas real estate market activity with our comprehensive recent sales data. Track property sales, pricing trends, and market performance across Centennial Hills, Summerlin, Henderson, and other Las Vegas neighborhoods to understand current market conditions and make informed real estate decisions.</p>

        <h2>Centennial Hills Recent Sales</h2>
        <p>Monitor Centennial Hills recent sales activity including luxury homes, new construction, and investment properties. Our Centennial Hills sales data provides insights into pricing trends, days on market, and property appreciation to help buyers and sellers understand current market values and opportunities.</p>

        <h2>Luxury Property Sales</h2>
        <p>Track recent sales of luxury properties in Las Vegas' most exclusive communities including The Ridges, MacDonald Highlands, and luxury developments in Centennial Hills. Our luxury sales data helps high-end buyers and sellers understand market positioning, pricing strategies, and investment potential.</p>

        <h2>Investment Property Sales</h2>
        <p>Analyze recent sales of investment properties including rental homes, fix-and-flip opportunities, and commercial properties. Our investment sales data provides cap rate information, rental income potential, and appreciation trends to help investors identify opportunities and build profitable portfolios.</p>

        <h2>Market Trend Analysis</h2>
        <p>Understand Las Vegas real estate market trends through comprehensive sales analysis including price appreciation, inventory levels, and seasonal patterns. Our market trend analysis helps buyers and sellers time their transactions and make strategic decisions based on current market conditions.</p>

        <h2>Comparative Market Analysis</h2>
        <p>Access detailed comparative market analysis for specific properties and neighborhoods based on recent sales data. Our CMA reports help establish accurate property values, support pricing decisions, and provide market context for real estate transactions in Las Vegas.</p>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Recent Sales - Las Vegas Real Estate Market Activity | Dr. Janet Duffy',
  meta: [
    {
      name: 'description',
      content: 'Track Las Vegas real estate sales activity with Dr. Janet Duffy. Recent sales data, market trends, and comparative analysis for Centennial Hills.',
    },
  ],
};






