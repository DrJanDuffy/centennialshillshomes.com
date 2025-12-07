import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import SEOStructuredData from '../../components/seo-structured-data';
import { pageSchemas } from '../../components/seo-structured-data';
import FAQSection, { realtorServiceFAQs } from '../../components/faq-section';
import RealScoutOfficeListings from '../../components/realscout-office-listings';

export default component$(() => {
  const recentSalesSchema = pageSchemas.servicePage({
    name: "Recent Sales - Las Vegas Real Estate Market Activity",
    description: "Track Las Vegas real estate sales activity with comprehensive recent sales data. Market trends, pricing analysis, and comparative market insights for Centennial Hills and surrounding areas.",
    slug: "recent-sales",
    serviceType: "Market Data Services"
  });

  return (
    <>
      <SEOStructuredData type="Service" data={recentSalesSchema} />

      <section class="hero-section">
        <div class="container container-center">
          <h1 class="hero-title">
            <span class="highlight">Recent Sales</span>
            <br />
            Las Vegas Real Estate Market Activity
          </h1>
          <p class="hero-subtitle">
            Stay informed about Las Vegas real estate market activity with our comprehensive recent sales data. 
            Track property sales, pricing trends, and market performance across Centennial Hills, Summerlin, 
            Henderson, and other Las Vegas neighborhoods to understand current market conditions and make 
            informed real estate decisions.
          </p>
        </div>
      </section>

      <section class="service-content py-16">
        <div class="container container-center">
          <h2>Market Activity and Sales Data</h2>
          <p>
            Stay informed about Las Vegas real estate market activity with our comprehensive recent sales data. 
            Track property sales, pricing trends, and market performance across Centennial Hills, Summerlin, 
            Henderson, and other Las Vegas neighborhoods to understand current market conditions and make 
            informed real estate decisions. Our sales data provides detailed insights into transaction volumes, 
            pricing patterns, and market dynamics that help buyers, sellers, and investors understand current 
            market conditions and identify opportunities.
          </p>
          <p>
            Recent sales data serves as a critical indicator of market health and direction, revealing trends 
            that may not be immediately apparent from current listings alone. By analyzing completed transactions, 
            we can identify pricing patterns, buyer preferences, and market shifts that inform strategic 
            decision-making. This historical data provides context for current market conditions and helps 
            predict future trends.
          </p>
          <p>
            Our comprehensive sales database includes detailed information about each transaction including 
            sale price, days on market, property characteristics, and neighborhood context. This granular 
            data enables precise market analysis and helps clients understand how similar properties have 
            performed in recent transactions. Access to this detailed information supports accurate property 
            valuations and informed pricing strategies.
          </p>

          <h3>Sales Volume Trends</h3>
          <p>
            Sales volume analysis reveals market activity levels and helps identify seasonal patterns and 
            market cycles. We track monthly and annual sales volumes across different neighborhoods, property 
            types, and price ranges to identify trends and predict future activity. Understanding sales volume 
            trends helps buyers and sellers time their transactions optimally and anticipate market conditions.
          </p>
          <p>
            High sales volumes typically indicate strong market activity and buyer demand, while declining 
            volumes may suggest market shifts or seasonal variations. Our analysis compares current sales 
            volumes to historical averages and seasonal patterns to identify whether current activity levels 
            represent normal market conditions or significant changes. This comparative analysis helps clients 
            understand market context and make informed decisions.
          </p>

          <h3>Pricing Pattern Analysis</h3>
          <p>
            Recent sales reveal pricing patterns that help establish market values and identify value 
            opportunities. We analyze sale prices relative to list prices, original asking prices, and 
            comparable properties to identify pricing trends and market positioning. This analysis helps 
            buyers understand fair market values and sellers establish competitive pricing strategies.
          </p>
          <p>
            Sale price analysis includes examining price per square foot trends, price appreciation rates, 
            and relative pricing across neighborhoods and property types. This detailed pricing analysis 
            helps identify areas with strong appreciation potential and properties that may offer better 
            value relative to market trends. Understanding pricing patterns supports informed decision-making 
            for both buyers and sellers.
          </p>

          <h3>Days on Market Metrics</h3>
          <p>
            Days on market data provides insights into market velocity and buyer demand. Properties selling 
            quickly typically indicate strong demand and competitive markets, while longer marketing times 
            may suggest pricing adjustments or market shifts. Our analysis tracks days on market trends 
            across different property types and price ranges, helping sellers set realistic expectations 
            and buyers understand market competitiveness.
          </p>
          <p>
            Understanding days on market trends helps sellers establish realistic timelines and pricing 
            strategies, while buyers can use this information to identify properties that may be overpriced 
            or understand how quickly they need to act in competitive markets. This metric provides valuable 
            context for market conditions and transaction planning.
          </p>

          <h2>Centennial Hills Recent Sales</h2>
          <p>
            Monitor Centennial Hills recent sales activity including luxury homes, new construction, and 
            investment properties. Our Centennial Hills sales data provides insights into pricing trends, 
            days on market, and property appreciation to help buyers and sellers understand current market 
            values and opportunities. This neighborhood-specific analysis helps clients understand local 
            market dynamics and make informed decisions about Centennial Hills properties.
          </p>
          <p>
            Centennial Hills has experienced consistent sales activity across various property types and 
            price ranges, reflecting the community's appeal to diverse buyer segments. Our analysis tracks 
            sales across different neighborhoods within Centennial Hills, identifying areas with strongest 
            activity and properties that represent value opportunities. This detailed neighborhood analysis 
            supports informed decision-making for Centennial Hills buyers and sellers.
          </p>
          <p>
            Recent sales in Centennial Hills demonstrate strong market fundamentals with properties selling 
            at competitive prices and reasonable timeframes. The community's combination of new construction, 
            established neighborhoods, and diverse housing options creates opportunities for buyers across 
            different price ranges and preferences. Understanding recent sales activity helps buyers identify 
            value and sellers establish competitive pricing.
          </p>

          <h3>Luxury Home Sales in Centennial Hills</h3>
          <p>
            Luxury home sales in Centennial Hills reflect strong demand for high-end properties in the 
            community. Our analysis tracks sales of luxury homes, including properties over $500K, to 
            identify pricing trends and market positioning. Understanding luxury sales activity helps 
            high-end buyers and sellers navigate the premium market segment and establish appropriate 
            pricing strategies.
          </p>
          <p>
            Luxury properties in Centennial Hills often feature premium amenities, larger lot sizes, and 
            custom features that command premium prices. Our sales analysis examines how these premium 
            features affect sale prices and market positioning, helping luxury buyers understand value 
            and sellers optimize pricing for high-end properties. This specialized analysis supports 
            successful luxury real estate transactions.
          </p>

          <h3>New Construction Sales Activity</h3>
          <p>
            New construction sales represent a significant portion of Centennial Hills real estate activity, 
            with builders offering modern homes with contemporary features and energy-efficient designs. 
            Our analysis tracks new construction sales to identify pricing trends, builder performance, and 
            buyer preferences. Understanding new construction sales helps buyers evaluate builder offerings 
            and sellers understand competition from new homes.
          </p>
          <p>
            New construction sales often command premium prices due to modern features, warranties, and 
            move-in ready condition. Our analysis compares new construction sales to resale properties to 
            identify value opportunities and understand pricing dynamics. This comparison helps buyers 
            evaluate whether new construction or resale properties offer better value for their needs.
          </p>

          <h3>Starter Home and Mid-Range Sales</h3>
          <p>
            Starter home and mid-range sales represent the majority of Centennial Hills real estate activity, 
            with properties typically ranging from $300K to $600K. Our analysis tracks sales in these price 
            ranges to identify value opportunities and market trends. Understanding sales activity in these 
            segments helps first-time buyers and move-up buyers identify properties that match their budgets 
            and preferences.
          </p>
          <p>
            These price ranges offer excellent opportunities for buyers seeking quality homes in established 
            neighborhoods with good schools and amenities. Our sales analysis helps identify properties that 
            offer best value and neighborhoods with strongest appreciation potential. This information 
            supports informed decision-making for buyers in these important market segments.
          </p>

          <h2>Luxury Property Sales</h2>
          <p>
            Track recent sales of luxury properties in Las Vegas' most exclusive communities including 
            The Ridges, MacDonald Highlands, Red Rock Country Club, and luxury developments in Centennial 
            Hills. Our luxury sales data helps high-end buyers and sellers understand market positioning, 
            pricing strategies, and investment potential. This specialized analysis supports successful 
            luxury real estate transactions.
          </p>
          <p>
            Luxury property sales represent a distinct market segment with unique characteristics, buyer 
            preferences, and pricing dynamics. Our analysis examines luxury sales across different 
            communities, property types, and price ranges to identify trends and opportunities. 
            Understanding luxury market dynamics helps high-end buyers and sellers navigate this specialized 
            market segment effectively.
          </p>
          <p>
            Recent luxury sales demonstrate strong demand for premium properties in Las Vegas' most desirable 
            communities. Properties featuring exceptional amenities, prime locations, and custom features 
            command premium prices and attract discerning buyers. Our analysis tracks these premium 
            transactions to identify pricing trends and market positioning for luxury properties.
          </p>

          <h3>Estate Home Sales</h3>
          <p>
            Estate home sales represent the pinnacle of luxury real estate, with properties typically 
            exceeding $1 million and featuring extensive amenities, large lot sizes, and custom designs. 
            Our analysis tracks estate sales to identify pricing trends, buyer preferences, and market 
            positioning. Understanding estate sales helps high-end buyers and sellers navigate this 
            exclusive market segment.
          </p>
          <p>
            Estate properties often feature unique characteristics that make direct comparisons challenging. 
            Our sales analysis examines how specific features, locations, and amenities affect sale prices, 
            helping estate buyers understand value and sellers establish appropriate pricing. This detailed 
            analysis supports successful estate transactions.
          </p>

          <h3>Golf Course Property Sales</h3>
          <p>
            Golf course property sales represent a specialized luxury segment with properties offering 
            direct golf course access, premium views, and resort-style amenities. Our analysis tracks 
            golf course property sales to identify pricing trends and market positioning. Understanding 
            golf course sales helps buyers and sellers navigate this specialized market segment.
          </p>
          <p>
            Golf course properties typically command premium prices due to their unique locations and 
            lifestyle benefits. Our sales analysis examines how golf course access, views, and course 
            quality affect property values, helping buyers understand value and sellers optimize pricing. 
            This specialized analysis supports successful golf course property transactions.
          </p>

          <h3>Luxury Condominium and Townhome Sales</h3>
          <p>
            Luxury condominium and townhome sales offer buyers access to luxury living with lower 
            maintenance requirements and premium amenities. Our analysis tracks luxury condo and townhome 
            sales to identify pricing trends and market positioning. Understanding these sales helps buyers 
            and sellers navigate the luxury attached housing market.
          </p>
          <p>
            Luxury attached properties often feature high-end finishes, premium locations, and resort-style 
            amenities that appeal to buyers seeking luxury living with convenience. Our sales analysis 
            examines how specific features and locations affect values, helping buyers identify value and 
            sellers establish competitive pricing. This analysis supports successful luxury attached 
            property transactions.
          </p>

          <h2>Investment Property Sales</h2>
          <p>
            Analyze recent sales of investment properties including rental homes, fix-and-flip opportunities, 
            and commercial properties. Our investment sales data provides cap rate information, rental income 
            potential, and appreciation trends to help investors identify opportunities and build profitable 
            portfolios. This specialized analysis supports successful real estate investment strategies.
          </p>
          <p>
            Investment property sales represent a distinct market segment with unique considerations including 
            cash flow potential, appreciation prospects, and tax benefits. Our analysis examines investment 
            sales across different property types, locations, and price ranges to identify trends and 
            opportunities. Understanding investment sales helps investors make informed decisions about 
            property selection and portfolio building.
          </p>
          <p>
            Recent investment property sales demonstrate strong demand for income-producing properties in 
            Las Vegas, with investors seeking properties that offer positive cash flow and appreciation 
            potential. Our analysis tracks these transactions to identify pricing trends, cap rates, and 
            investment opportunities. This data helps investors evaluate properties and build profitable 
            portfolios.
          </p>

          <h3>Rental Property Sales Analysis</h3>
          <p>
            Rental property sales represent a significant portion of investment activity, with investors 
            seeking properties that generate positive cash flow and long-term appreciation. Our analysis 
            tracks rental property sales to identify pricing trends, cap rates, and rental income potential. 
            Understanding rental sales helps investors evaluate properties and make informed investment 
            decisions.
          </p>
          <p>
            Rental property values are influenced by rental income potential, location desirability, and 
            property condition. Our sales analysis examines how these factors affect sale prices, helping 
            investors identify properties that offer best returns. This analysis supports successful rental 
            property investment strategies.
          </p>

          <h3>Fix-and-Flip Property Sales</h3>
          <p>
            Fix-and-flip property sales represent opportunities for investors seeking short-term returns 
            through property renovation and resale. Our analysis tracks fix-and-flip sales to identify 
            pricing trends, renovation costs, and profit potential. Understanding these sales helps 
            investors identify properties with renovation potential and estimate returns.
          </p>
          <p>
            Fix-and-flip investments require careful analysis of purchase price, renovation costs, and 
            resale potential. Our sales analysis examines completed flip transactions to identify pricing 
            patterns and profit margins, helping investors evaluate opportunities and estimate returns. 
            This analysis supports successful fix-and-flip investment strategies.
          </p>

          <h3>Commercial Property Sales</h3>
          <p>
            Commercial property sales represent opportunities for investors seeking income-producing 
            properties with business potential. Our analysis tracks commercial sales to identify pricing 
            trends, income potential, and investment opportunities. Understanding commercial sales helps 
            investors evaluate properties and make informed investment decisions.
          </p>
          <p>
            Commercial properties offer different risk and return profiles compared to residential 
            investments. Our sales analysis examines how property type, location, and income potential 
            affect values, helping investors identify opportunities that match their investment goals. 
            This analysis supports successful commercial property investment strategies.
          </p>

          <h2>Market Trend Analysis</h2>
          <p>
            Understand Las Vegas real estate market trends through comprehensive sales analysis including 
            price appreciation, inventory levels, and seasonal patterns. Our market trend analysis helps 
            buyers and sellers time their transactions and make strategic decisions based on current market 
            conditions. This forward-looking analysis supports informed real estate decision-making.
          </p>
          <p>
            Market trends reveal patterns and shifts that may not be immediately apparent from individual 
            transactions. Our analysis examines sales data over time to identify trends, cycles, and 
            emerging patterns that help predict future market conditions. Understanding these trends helps 
            clients make strategic decisions about timing and pricing.
          </p>
          <p>
            Recent sales data provides valuable insights into market direction and momentum. By analyzing 
            sales trends, we can identify whether markets are strengthening, stabilizing, or shifting. 
            This trend analysis helps buyers and sellers understand current market conditions and anticipate 
            future changes that may affect their goals.
          </p>

          <h3>Price Appreciation Trends</h3>
          <p>
            Price appreciation analysis examines how property values have changed over time, identifying 
            neighborhoods and property types with strongest appreciation. Our analysis tracks appreciation 
            rates across different areas, price ranges, and property types to identify trends and 
            opportunities. Understanding appreciation trends helps buyers identify areas with growth 
            potential and sellers understand value increases.
          </p>
          <p>
            Consistent appreciation indicates strong market fundamentals and buyer demand, while declining 
            or stagnant appreciation may suggest market shifts. Our analysis compares current appreciation 
            rates to historical averages to identify whether current trends represent normal market 
            conditions or significant changes. This comparative analysis helps clients understand market 
            context and make informed decisions.
          </p>

          <h3>Seasonal Sales Patterns</h3>
          <p>
            Seasonal patterns significantly impact real estate sales activity, with certain times of year 
            experiencing higher or lower activity levels. Our analysis tracks seasonal sales patterns to 
            identify optimal timing for transactions. Understanding seasonal patterns helps buyers and 
            sellers time their transactions to maximize opportunities and minimize competition.
          </p>
          <p>
            Las Vegas real estate typically experiences seasonal variations with spring and summer months 
            showing higher activity levels. Our analysis examines these patterns to help clients understand 
            when markets are most active and when opportunities may be greatest. This seasonal analysis 
            supports strategic transaction timing.
          </p>

          <h3>Inventory and Absorption Rates</h3>
          <p>
            Inventory levels and absorption rates provide insights into market balance and buyer-seller 
            dynamics. Our analysis tracks inventory levels and sales rates to identify whether markets 
            favor buyers or sellers. Understanding these metrics helps buyers and sellers understand 
            market conditions and adjust strategies accordingly.
          </p>
          <p>
            Low inventory with high absorption rates typically indicates seller's markets with competitive 
            conditions, while high inventory with low absorption may suggest buyer's markets with more 
            negotiation opportunities. Our analysis tracks these metrics to help clients understand current 
            market balance and adjust expectations and strategies.
          </p>

          <h2>Comparative Market Analysis</h2>
          <p>
            Access detailed comparative market analysis for specific properties and neighborhoods based on 
            recent sales data. Our CMA reports help establish accurate property values, support pricing 
            decisions, and provide market context for real estate transactions in Las Vegas. This detailed 
            analysis supports informed pricing and negotiation strategies.
          </p>
          <p>
            Comparative market analysis examines recent sales of similar properties to establish accurate 
            property values and support pricing decisions. Our CMA reports include detailed analysis of 
            comparable sales, property adjustments, and market conditions that affect values. This 
            comprehensive analysis helps buyers and sellers understand fair market values and establish 
            appropriate pricing.
          </p>
          <p>
            Accurate property valuations require careful analysis of comparable sales, property 
            characteristics, and market conditions. Our CMA reports provide detailed analysis that 
            supports informed pricing decisions and helps buyers and sellers understand how properties 
            compare to recent sales. This analysis supports successful real estate transactions.
          </p>

          <h3>Property-Specific CMA Reports</h3>
          <p>
            Property-specific CMA reports provide detailed analysis of individual properties based on 
            recent sales of comparable properties. Our reports include analysis of comparable sales, 
            property adjustments, and market conditions that affect values. This detailed analysis helps 
            buyers and sellers understand fair market values and establish appropriate pricing strategies.
          </p>
          <p>
            Property-specific analysis requires careful selection of comparable properties and appropriate 
            adjustments for differences. Our CMA reports provide detailed analysis that accounts for 
            property characteristics, locations, and market conditions to establish accurate values. 
            This comprehensive analysis supports informed pricing decisions.
          </p>

          <h3>Neighborhood Market Analysis</h3>
          <p>
            Neighborhood market analysis examines recent sales within specific neighborhoods to identify 
            pricing trends and market positioning. Our analysis tracks sales across neighborhoods to identify 
            areas with strongest activity and properties that represent value opportunities. This 
            neighborhood-specific analysis helps buyers and sellers understand local market dynamics.
          </p>
          <p>
            Neighborhood markets can vary significantly even within the same city, with different areas 
            experiencing distinct trends and conditions. Our analysis examines neighborhood-specific sales 
            to identify local market dynamics and opportunities. This detailed analysis helps clients 
            understand neighborhood markets and make informed decisions.
          </p>

          <h3>Price Range Analysis</h3>
          <p>
            Price range analysis examines recent sales within specific price ranges to identify trends and 
            opportunities. Our analysis tracks sales across different price segments to identify ranges 
            with strongest activity and properties that represent value opportunities. This price-specific 
            analysis helps buyers and sellers understand market dynamics within their price range.
          </p>
          <p>
            Different price ranges experience distinct market conditions with varying levels of competition, 
            inventory, and buyer demand. Our analysis examines price range-specific sales to identify 
            trends and opportunities within specific segments. This detailed analysis helps clients 
            understand market dynamics for their price range and make informed decisions.
          </p>
        </div>
      </section>

      {/* Featured Properties Section */}
      <section class="featured-properties-section bg-gray-50 py-16">
        <div class="container container-center">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">
              Current Las Vegas Listings
            </h2>
            <p class="text-lg text-gray-600 max-w-2xl mx-auto">
              Browse our current listings while reviewing recent sales data
            </p>
          </div>
          
          <RealScoutOfficeListings
            agentEncodedId="QWdlbnQtMjI1MDUw"
            sortOrder="NEWEST"
            listingStatus="For Sale"
            propertyTypes=",SFR"
            priceMin="300000"
            priceMax="2000000"
          />
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection 
        faqs={realtorServiceFAQs}
        title="Frequently Asked Questions About Recent Sales Data"
        className="bg-gray-50"
      />
    </>
  );
});

export const head: DocumentHead = {
  title: 'Recent Sales - Las Vegas Real Estate Market Activity | Dr. Janet Duffy',
  meta: [
    {
      name: 'description',
      content: 'Track Las Vegas real estate sales activity with Dr. Janet Duffy. Recent sales data, market trends, and comparative analysis for Centennial Hills and surrounding areas.',
    },
  ],
};
