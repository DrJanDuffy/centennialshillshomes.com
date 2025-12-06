import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import MapsWidget from '../../components/maps-widget';
import RealScoutOfficeListings from '../../components/realscout-office-listings';
import SEOStructuredData from '../../components/seo-structured-data';
import { pageSchemas } from '../../components/seo-structured-data';
import FAQSection, { realtorServiceFAQs } from '../../components/faq-section';

export default component$(() => {
  // Schema data for contact page
  const contactSchema = pageSchemas.personPage({});

  return (
    <>
      {/* SEO Structured Data */}
      <SEOStructuredData 
        type="Person" 
        data={contactSchema} 
      />

      <div class="container container-center">
        <h1>Contact Dr. Jan Duffy - Las Vegas Real Estate Expert</h1>
        
        <h2>Get In Touch Today</h2>
        <p>Ready to buy or sell real estate in Centennial Hills or Las Vegas? Contact Dr. Jan Duffy for personalized service and expert guidance. Luxury real estate specialist serving West Summerlin's premier neighborhoods including ZIP codes 89138, 89144, and 89135. Dr. Jan Duffy, REALTOR® offers 30+ years of research expertise in luxury homes $400K-$750K. Specializing in Red Rock Country Club, The Ridges, and Summerlin West communities for California equity buyers and corporate relocations. Top 1% Las Vegas REALTOR® providing same-day showings and complimentary market analysis. Available 24/7 for executive clients and luxury home investments.</p>
        
        <h2>Why Choose Dr. Janet Duffy for Your Real Estate Needs</h2>
        <p>Dr. Janet Duffy brings unparalleled expertise and dedication to every real estate transaction in Las Vegas. With over 30 years of research experience and a proven track record as a Top 1% REALTOR®, Dr. Duffy provides clients with data-driven insights, strategic guidance, and personalized service that exceeds expectations. Whether you're buying your first home, upgrading to a luxury property, selling an investment, or relocating to Las Vegas, Dr. Duffy's comprehensive approach ensures successful outcomes.</p>
        
        <h3>Comprehensive Market Knowledge</h3>
        <p>Dr. Duffy's deep understanding of the Las Vegas real estate market, particularly in Centennial Hills, Summerlin, and northwest Las Vegas communities, provides clients with invaluable insights. Her research background enables her to analyze market trends, property values, and investment opportunities with scientific precision, helping clients make informed decisions based on comprehensive data analysis rather than speculation.</p>
        
        <h3>Personalized Service Approach</h3>
        <p>Every client receives personalized attention tailored to their unique needs, timeline, and goals. Dr. Duffy takes time to understand your priorities, whether you're seeking a family home in a top-rated school district, a luxury estate with resort-style amenities, or an investment property with strong rental potential. This personalized approach ensures that every recommendation and strategy aligns with your specific objectives.</p>
        
        <h3>Executive-Level Availability</h3>
        <p>Understanding that real estate transactions often require immediate attention, Dr. Duffy offers 24/7 availability for executive clients and urgent inquiries. Same-day property showings, rapid response to market changes, and flexible scheduling accommodate busy professionals, corporate relocations, and time-sensitive transactions. This commitment to accessibility ensures you never miss an opportunity or face unnecessary delays.</p>

        {/* Featured Properties - Lead Generator */}
        <section class="featured-properties-section bg-gray-50 py-16">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">
              Featured Las Vegas Properties
            </h2>
            <p class="text-lg text-gray-600 max-w-2xl mx-auto">
              Browse our latest luxury homes while you're here
            </p>
          </div>
          
          {/* RealScout Office Listings - Primary Lead Generator */}
          <RealScoutOfficeListings
            agentEncodedId="QWdlbnQtMjI1MDUw"
            sortOrder="NEWEST"
            listingStatus="For Sale"
            propertyTypes=",SFR"
            priceMin="500000"
            priceMax="1500000"
          />
        </section>

        <h2>Phone and Email Contact Information</h2>
        <p>Call Dr. Janet Duffy directly at (702) 903-1952 for immediate assistance with your real estate needs. Available 24/7 for executive clients and urgent inquiries. Email for detailed questions, property information, or to schedule consultations. Dr. Duffy personally responds to all inquiries to ensure you receive the attention and expertise you deserve.</p>
        
        <h3>Phone Consultation Benefits</h3>
        <p>Phone consultations provide immediate access to Dr. Duffy's expertise, allowing you to discuss your real estate goals, ask questions about specific properties, or get quick market insights. Whether you're exploring neighborhoods, comparing properties, or need urgent advice during negotiations, a phone call ensures you receive timely guidance when it matters most.</p>
        
        <h3>Email Communication Advantages</h3>
        <p>Email communication offers the convenience of detailed property information, market reports, and documentation sharing. Dr. Duffy provides comprehensive responses to email inquiries, including property comparisons, neighborhood analyses, and detailed answers to complex questions. This format allows you to review information at your own pace and maintain a written record of important details.</p>

        <h2>Office Location and Service Area</h2>
        <p>Dr. Janet Duffy serves clients throughout Las Vegas with special focus on Centennial Hills, Summerlin, and northwest Las Vegas communities. Flexible scheduling accommodates busy professionals, executives, and families. Evening and weekend appointments available by request to meet your schedule and timeline requirements.</p>
        
        <h3>Primary Service Areas</h3>
        <p>Dr. Duffy's primary service areas include Centennial Hills (zip codes 89135, 89138, 89144), Summerlin, Red Rock Country Club, The Ridges, Lone Mountain, and North Las Vegas. Her deep knowledge of these communities enables her to provide detailed insights about neighborhoods, schools, amenities, market trends, and property values specific to each area.</p>
        
        <h3>Flexible Meeting Options</h3>
        <p>Understanding that real estate transactions require flexibility, Dr. Duffy offers multiple meeting options including in-person consultations at properties, virtual meetings via video conference, phone consultations, and office meetings. This flexibility ensures that distance, scheduling conflicts, or personal preferences never prevent you from accessing expert real estate guidance.</p>
        
        {/* Interactive Map Section */}
        <MapsWidget 
          center={{ lat: 36.1699, lng: -115.1398 }}
          zoom={11}
          title="Las Vegas Service Area"
          description="Dr. Janet Duffy serves clients throughout Las Vegas with expertise in Centennial Hills, Summerlin, and northwest Las Vegas communities"
          height="400px"
          placeholder="Search for your neighborhood or address..."
          showSearch={true}
          class="contact-map"
        />

        <h2>Specialized Services Available</h2>
        <p>Contact Dr. Duffy for specialized services including luxury home sales, California equity buyer assistance, corporate relocations, investment property guidance, and first-time homebuyer support. Each consultation includes market analysis, neighborhood insights, and personalized recommendations based on your specific needs and goals.</p>
        
        <h3>Luxury Home Sales and Purchases</h3>
        <p>Dr. Duffy specializes in luxury real estate transactions, providing access to exclusive listings, private showings, and personalized service for high-end properties. Her expertise in luxury markets ensures that buyers and sellers receive sophisticated guidance tailored to premium properties, including estate homes, golf course properties, and custom-built residences in Las Vegas' most prestigious communities.</p>
        
        <h3>California Equity Buyer Assistance</h3>
        <p>California residents looking to leverage their home equity for Nevada real estate purchases receive specialized assistance from Dr. Duffy. This includes navigating tax implications, coordinating cross-state transactions, understanding financing options, and identifying properties that maximize investment potential. Her experience with California equity buyers ensures smooth transitions and optimal financial outcomes.</p>
        
        <h3>Corporate Relocation Services</h3>
        <p>Corporate relocations require specialized attention to timelines, temporary housing, neighborhood analysis, and family considerations. Dr. Duffy provides comprehensive relocation services including neighborhood comparisons, school district information, commute analysis, and coordination with relocation companies. Her executive-level service ensures that corporate moves proceed efficiently and successfully.</p>
        
        <h3>Investment Property Guidance</h3>
        <p>Real estate investors benefit from Dr. Duffy's analytical approach to property evaluation, rental market analysis, and ROI projections. She helps identify properties with strong investment potential, provides cash flow analysis, and offers strategic guidance for building and optimizing real estate portfolios in the Las Vegas market.</p>
        
        <h3>First-Time Homebuyer Support</h3>
        <p>First-time homebuyers receive comprehensive guidance through every step of the purchasing process. Dr. Duffy explains financing options, first-time buyer programs, the home inspection process, and helps navigate the complexities of purchasing your first home. Her patient, educational approach ensures first-time buyers feel confident and informed throughout their journey.</p>

        <h2>Free Consultation Process</h2>
        <p>Schedule a complimentary consultation to discuss your real estate goals, market questions, or property needs. Dr. Duffy provides free market analysis, home valuations, and strategic guidance to help you make informed decisions about buying or selling Las Vegas real estate.</p>
        
        <h3>Initial Consultation Overview</h3>
        <p>During your initial consultation, Dr. Duffy will discuss your real estate goals, timeline, budget, and preferences. This comprehensive conversation helps her understand your unique needs and develop a personalized strategy. Whether you're buying or selling, this consultation provides valuable insights and establishes a foundation for a successful real estate experience.</p>
        
        <h3>Market Analysis and Valuations</h3>
        <p>Free market analysis and home valuations provide essential information for making informed real estate decisions. Dr. Duffy's comprehensive analysis includes recent comparable sales, current market conditions, neighborhood trends, and property-specific factors that influence value. This data-driven approach ensures you have accurate information to guide your decisions.</p>
        
        <h3>Strategic Planning Sessions</h3>
        <p>Strategic planning sessions help you develop a clear roadmap for achieving your real estate goals. Dr. Duffy works with you to identify priorities, establish timelines, understand market dynamics, and create actionable plans. These sessions ensure you're prepared for every phase of your real estate transaction.</p>

        <h2>Client Testimonials and References</h2>
        <p>Dr. Janet Duffy's clients consistently rate her service as exceptional, citing her market expertise, attention to detail, and commitment to client success. Request references from recent clients to learn about their experience working with Dr. Duffy for their Las Vegas real estate transactions.</p>
        
        <h3>Proven Track Record</h3>
        <p>Dr. Duffy's Top 1% REALTOR® status reflects her consistent success in helping clients achieve their real estate goals. Her track record includes successful transactions across all price ranges, from first-time home purchases to luxury estate sales. This proven performance demonstrates her ability to deliver results regardless of transaction complexity or market conditions.</p>
        
        <h3>Client Satisfaction Commitment</h3>
        <p>Client satisfaction is Dr. Duffy's top priority, and her commitment to exceeding expectations is evident in every interaction. From initial consultation through closing and beyond, she maintains open communication, provides regular updates, and ensures you're informed and comfortable throughout the process. This dedication to client satisfaction has earned her exceptional reviews and repeat business.</p>
        
        <h3>Requesting References</h3>
        <p>Prospective clients are encouraged to request references from recent transactions similar to their own needs. Dr. Duffy is happy to connect you with past clients who can share their experiences working with her. These references provide valuable insights into her service quality, communication style, and ability to deliver successful outcomes.</p>
        
        <h2>Response Time and Communication Expectations</h2>
        <p>Dr. Duffy understands that real estate decisions often require timely responses, and she commits to rapid response times for all inquiries. Executive clients receive priority response, typically within minutes for urgent matters. All clients can expect responses within 24 hours, with most inquiries answered the same day. This commitment to communication ensures you never feel left waiting during critical moments of your transaction.</p>
        
        <h3>Urgent Matter Handling</h3>
        <p>For urgent matters such as time-sensitive offers, inspection issues, or closing complications, Dr. Duffy provides immediate attention and rapid problem-solving. Her availability and responsiveness during critical moments help prevent delays and ensure smooth transaction progress.</p>
        
        <h3>Regular Update Schedule</h3>
        <p>Throughout your transaction, Dr. Duffy provides regular updates on market activity, showing feedback, offer status, and transaction progress. This proactive communication keeps you informed and engaged, allowing you to make timely decisions and feel confident about your transaction's status.</p>
      </div>

      {/* FAQ Section */}
      <FAQSection 
        faqs={realtorServiceFAQs}
        title="Frequently Asked Questions About Contacting Dr. Jan Duffy"
        className="bg-gray-50"
      />
    </>
  );
});

export const head: DocumentHead = {
  title: 'Contact Dr. Jan Duffy - Las Vegas Real Estate Expert',
  meta: [
    {
      name: 'description',
      content: 'Contact Dr. Jan Duffy for Las Vegas real estate expertise. Call (702) 903-1952 for luxury homes, Centennial Hills properties, and personalized service. Luxury real estate specialist serving West Summerlin\'s premier neighborhoods. Top 1% Las Vegas REALTOR® providing same-day showings and complimentary market analysis. Available 24/7 for executive clients.',
    },
  ],
};