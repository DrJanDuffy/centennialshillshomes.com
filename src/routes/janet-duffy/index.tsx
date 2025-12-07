import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import SEOStructuredData from '../../components/seo-structured-data';
import { pageSchemas } from '../../components/seo-structured-data';
import FAQSection, { realtorServiceFAQs } from '../../components/faq-section';

export default component$(() => {
  // Schema data for Dr. Janet Duffy person page
  const janetDuffySchema = pageSchemas.personPage({});

  return (
    <>
      {/* SEO Structured Data */}
      <SEOStructuredData 
        type="Person" 
        data={janetDuffySchema} 
      />
      
      {/* Breadcrumb Structured Data */}
      <SEOStructuredData 
        type="BreadcrumbList" 
        data={pageSchemas.breadcrumbList([
          { name: 'Home', url: '/' },
          { name: 'About', url: '/about' },
          { name: 'Dr. Janet Duffy', url: '/janet-duffy' }
        ])} 
      />
      
      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" class="container mx-auto px-4 py-4 text-sm text-gray-600">
        <ol class="flex space-x-2">
          <li class="flex items-center">
            <a href="/" class="hover:text-blue-600">Home</a>
          </li>
          <li class="flex items-center">
            <span class="mx-2 text-gray-400" aria-hidden="true">/</span>
            <a href="/about" class="hover:text-blue-600">About</a>
          </li>
          <li class="flex items-center">
            <span class="mx-2 text-gray-400" aria-hidden="true">/</span>
            <span class="font-semibold text-gray-800">Dr. Janet Duffy</span>
          </li>
        </ol>
      </nav>

      <div class="container container-center py-12">
        <h1 class="text-4xl font-bold text-gray-900 mb-6">Dr. Janet Duffy - Top 1% Las Vegas REALTOR®</h1>
        
        <h2 class="text-3xl font-bold text-gray-900 mt-8 mb-4">Meet Your Real Estate Expert</h2>
        <p class="text-lg text-gray-700 mb-4">
          Dr. Janet Duffy brings over 30 years of research expertise and real estate experience to serve Las Vegas homebuyers and sellers. As a Top 1% REALTOR®, Dr. Duffy specializes in luxury real estate, corporate relocations, and California equity buyers, providing personalized service and market insights for <a href="/centennial-hills" class="text-blue-600 hover:underline">Centennial Hills</a> and northwest Las Vegas properties. Available 24/7 for executive clients and luxury home investments, Dr. Duffy offers same-day showings and complimentary <a href="/market-analysis" class="text-blue-600 hover:underline">market analysis</a>.
        </p>
        <p class="text-lg text-gray-700 mb-4">
          With a unique combination of academic research expertise and hands-on real estate experience, Dr. Duffy provides clients with data-driven insights that go beyond traditional real estate services. Her approach combines rigorous market analysis with personalized attention, ensuring that every client receives expert guidance tailored to their specific needs and goals.
        </p>
        <p class="text-lg text-gray-700 mb-4">
          Dr. Duffy's commitment to excellence has earned her recognition as one of Las Vegas' top real estate professionals. Her Top 1% REALTOR® designation reflects her consistent performance, client satisfaction, and outstanding results in the competitive Las Vegas real estate market. Whether you're buying your first home, upgrading to a luxury property, or investing in Las Vegas real estate, Dr. Duffy provides the expertise and dedication needed for successful outcomes.
        </p>

        <h2 class="text-3xl font-bold text-gray-900 mt-8 mb-4">Professional Credentials and Achievements</h2>
        <p class="text-lg text-gray-700 mb-4">
          Dr. Janet Duffy holds advanced degrees in research and has achieved recognition as a Top 1% REALTOR® in Las Vegas. Her credentials include specialized training in luxury home sales, investment properties, and relocation services. Dr. Duffy's research background provides clients with data-driven market analysis and strategic real estate guidance that sets her apart from traditional real estate agents.
        </p>
        
        <h3 class="text-2xl font-semibold text-gray-900 mt-6 mb-3">Academic Excellence</h3>
        <p class="text-lg text-gray-700 mb-4">
          Dr. Duffy's academic background in research provides her with unique analytical skills that benefit her real estate clients. Her ability to analyze complex market data, identify trends, and make data-driven recommendations ensures that clients receive insights based on rigorous analysis rather than intuition alone. This research expertise is particularly valuable in luxury markets where pricing strategies and market timing require sophisticated analysis.
        </p>
        
        <h3 class="text-2xl font-semibold text-gray-900 mt-6 mb-3">Real Estate Certifications</h3>
        <p class="text-lg text-gray-700 mb-4">
          Licensed in Nevada (License #S.0197614), Dr. Duffy maintains active membership in professional real estate organizations and continuously updates her knowledge through ongoing education. Her certifications and training cover luxury home sales, investment property analysis, corporate relocation services, and specialized market segments that serve her diverse client base.
        </p>
        
        <h3 class="text-2xl font-semibold text-gray-900 mt-6 mb-3">Top 1% REALTOR® Recognition</h3>
        <p class="text-lg text-gray-700 mb-4">
          The Top 1% REALTOR® designation is awarded to real estate professionals who demonstrate exceptional performance in sales volume, client satisfaction, and market expertise. Dr. Duffy's consistent achievement of this recognition reflects her commitment to excellence, outstanding client service, and results that exceed expectations. This designation places her among the elite real estate professionals in Las Vegas and demonstrates her ability to deliver exceptional value to clients.
        </p>

        <h2 class="text-3xl font-bold text-gray-900 mt-8 mb-4">Specialized Market Expertise</h2>
        <p class="text-lg text-gray-700 mb-4">
          Specializing in Centennial Hills and northwest Las Vegas real estate, Dr. Duffy provides expert knowledge of neighborhood dynamics, market trends, and property values. Her expertise covers luxury homes, new construction, investment properties, and first-time homebuyer guidance with personalized service for each client's unique needs.
        </p>
        
        <h3 class="text-2xl font-semibold text-gray-900 mt-6 mb-3">Centennial Hills Real Estate Expertise</h3>
        <p class="text-lg text-gray-700 mb-4">
          Dr. Duffy's deep knowledge of <a href="/centennial-hills" class="text-blue-600 hover:underline">Centennial Hills</a> real estate includes understanding of the area's growth patterns, property values, and neighborhood characteristics. She specializes in ZIP codes 89135, 89138, and 89144, providing clients with comprehensive insights into these premier northwest Las Vegas communities. Her expertise helps clients understand the value proposition of Centennial Hills properties, including new construction opportunities, established neighborhoods, and investment potential.
        </p>
        <p class="text-lg text-gray-700 mb-4">
          Whether clients are interested in <a href="/homes-under-400k" class="text-blue-600 hover:underline">homes under $400K</a>, <a href="/homes-400k-600k" class="text-blue-600 hover:underline">mid-range properties $400K-$600K</a>, or <a href="/homes-over-1m" class="text-blue-600 hover:underline">luxury homes over $1M</a>, Dr. Duffy provides expert guidance tailored to each price segment. Her knowledge of Centennial Hills includes understanding of <a href="/centennial-hills-schools" class="text-blue-600 hover:underline">area schools</a>, <a href="/centennial-hills-amenities" class="text-blue-600 hover:underline">community amenities</a>, and lifestyle benefits that appeal to different buyer segments.
        </p>
        
        <h3 class="text-2xl font-semibold text-gray-900 mt-6 mb-3">Luxury Home Specialization</h3>
        <p class="text-lg text-gray-700 mb-4">
          Dr. Duffy's expertise in luxury real estate extends to Las Vegas' most prestigious communities including <a href="/red-rock-country-club" class="text-blue-600 hover:underline">Red Rock Country Club</a>, <a href="/the-ridges" class="text-blue-600 hover:underline">The Ridges</a>, <a href="/summerlin-west" class="text-blue-600 hover:underline">Summerlin West</a>, and other premier neighborhoods. Her luxury home specialization includes understanding of high-end market dynamics, pricing strategies, and buyer preferences unique to the luxury segment. Explore <a href="/luxury-home-sales" class="text-blue-600 hover:underline">luxury home sales</a> and <a href="/our-luxury-listings" class="text-blue-600 hover:underline">our luxury listings</a> to see available properties.
        </p>
        <p class="text-lg text-gray-700 mb-4">
          Luxury home transactions require specialized knowledge of market timing, pricing strategies, and negotiation techniques. Dr. Duffy's experience in luxury markets ensures that clients receive comprehensive guidance on pricing, marketing, and negotiation strategies that maximize value and ensure successful transactions. Her luxury home specialization includes understanding of <a href="/golf-course-homes" class="text-blue-600 hover:underline">golf course homes</a>, gated communities, and exclusive neighborhoods that appeal to high-net-worth buyers.
        </p>
        
        <h3 class="text-2xl font-semibold text-gray-900 mt-6 mb-3">New Construction Expertise</h3>
        <p class="text-lg text-gray-700 mb-4">
          Dr. Duffy provides expert guidance for clients interested in <a href="/new-construction" class="text-blue-600 hover:underline">new construction homes</a> in Centennial Hills and surrounding areas. Her new construction expertise includes understanding of builder reputations, construction quality, warranty programs, and customization options. She helps clients navigate the new construction process from initial selection through final walkthrough, ensuring that clients make informed decisions about their new home investment.
        </p>
        <p class="text-lg text-gray-700 mb-4">
          New construction homes offer unique advantages including modern design, energy efficiency, and warranty protection. Dr. Duffy's expertise helps clients understand these benefits, evaluate different builders and communities, and make decisions that align with their preferences and budget. Her knowledge of <a href="/centennial-hills-new-construction" class="text-blue-600 hover:underline">Centennial Hills new construction</a> includes understanding of available communities, pricing trends, and investment potential for new homes.
        </p>
        
        <h3 class="text-2xl font-semibold text-gray-900 mt-6 mb-3">Investment Property Guidance</h3>
        <p class="text-lg text-gray-700 mb-4">
          Dr. Duffy provides expert guidance for real estate investors seeking to build or expand their investment portfolios in Las Vegas. Her investment property expertise includes analyzing rental potential, cash flow projections, appreciation potential, and market trends that affect investment returns. Explore <a href="/investment-properties" class="text-blue-600 hover:underline">investment property opportunities</a> and review our <a href="/market-analysis" class="text-blue-600 hover:underline">market analysis</a> for investment insights.
        </p>
        <p class="text-lg text-gray-700 mb-4">
          Investment property guidance includes understanding of rental markets, property management considerations, and tax implications. Dr. Duffy helps investors evaluate opportunities, analyze returns, and make decisions that support their investment goals. Her investment expertise covers single-family rentals, multi-family properties, and commercial real estate opportunities in Las Vegas.
        </p>

        <h2 class="text-3xl font-bold text-gray-900 mt-8 mb-4">Client Success Stories</h2>
        <p class="text-lg text-gray-700 mb-4">
          Dr. Janet Duffy has successfully helped hundreds of families find their dream homes in Centennial Hills and surrounding areas. Her clients include executives, professionals, families, and investors who appreciate her attention to detail, market expertise, and commitment to exceeding expectations throughout the real estate process.
        </p>
        
        <h3 class="text-2xl font-semibold text-gray-900 mt-6 mb-3">California Equity Buyer Success</h3>
        <p class="text-lg text-gray-700 mb-4">
          Dr. Duffy has successfully helped numerous <a href="/california-equity-buyers" class="text-blue-600 hover:underline">California equity buyers</a> leverage their California home equity to purchase properties in Nevada. These clients appreciate her expertise in cross-state transactions, tax benefits, and equity maximization strategies. Her California equity buyer services include navigating tax implications, coordinating financing, and finding properties that maximize their equity investment.
        </p>
        <p class="text-lg text-gray-700 mb-4">
          California equity buyers face unique challenges including understanding Nevada tax benefits, coordinating financing across states, and finding properties that offer better value than California alternatives. Dr. Duffy's expertise helps these clients navigate these challenges and make informed decisions that maximize their equity investment and achieve their real estate goals.
        </p>
        
        <h3 class="text-2xl font-semibold text-gray-900 mt-6 mb-3">Corporate Relocation Success</h3>
        <p class="text-lg text-gray-700 mb-4">
          Dr. Duffy's <a href="/corporate-relocation-services" class="text-blue-600 hover:underline">corporate relocation services</a> have helped numerous executives and professionals transition smoothly to Las Vegas. Her same-day showing availability, expedited market analysis, and comprehensive relocation support ensure that corporate clients find homes quickly and efficiently, minimizing disruption to their professional and personal lives.
        </p>
        <p class="text-lg text-gray-700 mb-4">
          Corporate relocations require rapid response and comprehensive support to ensure smooth transitions. Dr. Duffy's corporate relocation services include temporary housing assistance, neighborhood analysis, school district information, commute analysis, and coordination with relocation companies. Her ability to provide same-day showings and expedited market analysis helps corporate clients make decisions quickly while ensuring they find properties that meet their needs.
        </p>
        
        <h3 class="text-2xl font-semibold text-gray-900 mt-6 mb-3">First-Time Homebuyer Success</h3>
        <p class="text-lg text-gray-700 mb-4">
          Dr. Duffy has helped numerous <a href="/first-time-homebuyers" class="text-blue-600 hover:underline">first-time homebuyers</a> navigate the home buying process with confidence. Her comprehensive guidance through every step, from pre-approval to closing, ensures that first-time buyers make informed decisions and avoid common pitfalls. Her first-time homebuyer services include neighborhood education, financing options, and step-by-step process guidance.
        </p>
        <p class="text-lg text-gray-700 mb-4">
          First-time homebuyers often face challenges including understanding the buying process, securing financing, and evaluating properties. Dr. Duffy's expertise helps these clients navigate these challenges and make informed decisions that lead to successful home purchases. Her first-time homebuyer guidance includes understanding of first-time buyer programs, down payment assistance, and financing options that make homeownership accessible.
        </p>

        <h2 class="text-3xl font-bold text-gray-900 mt-8 mb-4">Research-Based Approach</h2>
        <p class="text-lg text-gray-700 mb-4">
          With 30+ years of research experience, Dr. Duffy provides clients with comprehensive market analysis, data-driven insights, and strategic guidance. Her research background enables her to analyze market trends, property values, and investment opportunities with scientific precision and professional expertise.
        </p>
        
        <h3 class="text-2xl font-semibold text-gray-900 mt-6 mb-3">Data-Driven Market Analysis</h3>
        <p class="text-lg text-gray-700 mb-4">
          Dr. Duffy's research expertise enables her to provide clients with comprehensive <a href="/market-analysis" class="text-blue-600 hover:underline">market analysis</a> that goes beyond surface-level information. Her analysis includes examining recent sales, current listings, market trends, and economic factors that affect property values. This data-driven approach helps clients understand pricing dynamics, market conditions, and opportunities that support their real estate goals.
        </p>
        <p class="text-lg text-gray-700 mb-4">
          Market analysis includes understanding of comparable sales, pricing trends, days on market, and inventory levels. Dr. Duffy's research background enables her to analyze these factors with scientific precision, providing clients with insights that support informed decision-making. Her <a href="/market-reports" class="text-blue-600 hover:underline">market reports</a> and <a href="/centennial-hills-market-report" class="text-blue-600 hover:underline">Centennial Hills market report</a> provide detailed analysis of current market conditions and trends.
        </p>
        
        <h3 class="text-2xl font-semibold text-gray-900 mt-6 mb-3">Strategic Property Valuation</h3>
        <p class="text-lg text-gray-700 mb-4">
          Dr. Duffy's research expertise enables her to provide accurate <a href="/home-valuation" class="text-blue-600 hover:underline">property valuations</a> based on comprehensive data analysis. Her valuation approach includes examining comparable properties, market trends, property condition, and location factors that affect value. This strategic approach ensures that clients receive accurate valuations that support informed decision-making.
        </p>
        <p class="text-lg text-gray-700 mb-4">
          Property valuation requires understanding of multiple factors including comparable sales, market trends, property condition, and location characteristics. Dr. Duffy's research background enables her to analyze these factors systematically, providing clients with valuations that reflect current market conditions and property characteristics. Her valuation expertise helps clients understand property values, pricing strategies, and negotiation positions.
        </p>

        <h2 class="text-3xl font-bold text-gray-900 mt-8 mb-4">Personalized Service Philosophy</h2>
        <p class="text-lg text-gray-700 mb-4">
          Dr. Janet Duffy believes in building long-term relationships with clients through personalized service, honest communication, and expert guidance. Whether you're buying your first home, upgrading to a luxury property, or investing in Las Vegas real estate, Dr. Duffy provides the expertise and dedication needed for successful outcomes.
        </p>
        
        <h3 class="text-2xl font-semibold text-gray-900 mt-6 mb-3">24/7 Availability for Executive Clients</h3>
        <p class="text-lg text-gray-700 mb-4">
          Dr. Duffy understands that executive clients and luxury home buyers often require immediate attention and flexible scheduling. Her 24/7 availability ensures that clients can reach her when needed, whether for urgent property questions, same-day showings, or time-sensitive transaction support. This commitment to availability demonstrates her dedication to client service and understanding of the urgency that often accompanies real estate transactions.
        </p>
        <p class="text-lg text-gray-700 mb-4">
          Executive clients and luxury home buyers often have demanding schedules and require rapid response to real estate opportunities. Dr. Duffy's 24/7 availability ensures that these clients receive the immediate attention and flexible scheduling they need. Her same-day showing availability and expedited market analysis help executive clients make decisions quickly while ensuring they find properties that meet their needs.
        </p>
        
        <h3 class="text-2xl font-semibold text-gray-900 mt-6 mb-3">Complimentary Market Analysis</h3>
        <p class="text-lg text-gray-700 mb-4">
          Dr. Duffy provides complimentary <a href="/market-analysis" class="text-blue-600 hover:underline">market analysis</a> to help clients understand current market conditions and property values. This complimentary service demonstrates her commitment to client education and informed decision-making. Her market analysis includes examining recent sales, current listings, market trends, and economic factors that affect property values.
        </p>
        <p class="text-lg text-gray-700 mb-4">
          Market analysis helps clients understand pricing dynamics, market conditions, and opportunities that support their real estate goals. Dr. Duffy's complimentary market analysis provides clients with valuable insights without obligation, demonstrating her commitment to client education and informed decision-making. This service is particularly valuable for buyers evaluating properties and sellers determining listing prices.
        </p>
        
        <h3 class="text-2xl font-semibold text-gray-900 mt-6 mb-3">Long-Term Client Relationships</h3>
        <p class="text-lg text-gray-700 mb-4">
          Dr. Duffy believes in building long-term relationships with clients that extend beyond individual transactions. Her commitment to client service includes ongoing support, market updates, and continued guidance as clients' real estate needs evolve. This long-term approach ensures that clients receive consistent support and expert guidance throughout their real estate journey.
        </p>
        <p class="text-lg text-gray-700 mb-4">
          Long-term client relationships are built on trust, communication, and consistent results. Dr. Duffy's commitment to building these relationships ensures that clients receive ongoing support and expert guidance as their real estate needs evolve. Her personalized service philosophy includes understanding clients' long-term goals and providing guidance that supports their evolving needs.
        </p>
      </div>

      {/* FAQ Section */}
      <FAQSection 
        faqs={realtorServiceFAQs}
        title="Frequently Asked Questions About Dr. Jan Duffy"
        className="bg-gray-50"
      />
    </>
  );
});

export const head: DocumentHead = {
  title: 'Dr. Janet Duffy - Top 1% Las Vegas REALTOR® | Real Estate Expert',
  meta: [
    {
      name: 'description',
      content: 'Meet Dr. Janet Duffy, Top 1% Las Vegas REALTOR® with 30+ years of research expertise. Specializing in Centennial Hills luxury real estate, California equity buyers, and corporate relocations. Available 24/7 for executive clients with same-day showings and complimentary market analysis. Licensed in Nevada License #S.0197614.',
    },
    {
      name: 'robots',
      content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    },
    {
      property: 'og:title',
      content: 'Dr. Janet Duffy - Top 1% Las Vegas REALTOR® | Real Estate Expert',
    },
    {
      property: 'og:description',
      content: 'Meet Dr. Janet Duffy, Top 1% Las Vegas REALTOR® with 30+ years of research expertise. Specializing in Centennial Hills luxury real estate and corporate relocations.',
    },
    {
      property: 'og:image',
      content: 'https://www.centennialhillshomesforsale.com/images/dr-janet-duffy.jpg',
    },
    {
      property: 'og:type',
      content: 'profile',
    },
    {
      property: 'og:url',
      content: 'https://www.centennialhillshomesforsale.com/janet-duffy',
    },
    {
      property: 'og:site_name',
      content: 'Centennial Hills Real Estate',
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      name: 'twitter:title',
      content: 'Dr. Janet Duffy - Top 1% Las Vegas REALTOR®',
    },
    {
      name: 'twitter:description',
      content: 'Top 1% Las Vegas REALTOR® with 30+ years of research expertise. Specializing in Centennial Hills luxury real estate.',
    },
    {
      name: 'twitter:image',
      content: 'https://www.centennialhillshomesforsale.com/images/dr-janet-duffy.jpg',
    },
  ],
};







