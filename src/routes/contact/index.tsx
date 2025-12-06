import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import MapsWidget from '../../components/maps-widget';
import RealScoutOfficeListings from '../../components/realscout-office-listings';
import SEOStructuredData from '../../components/seo-structured-data';
import { pageSchemas } from '../../components/seo-structured-data';
import FAQSection, { realtorServiceFAQs } from '../../components/faq-section';
import ContactForm from '../../components/contact-form';

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

      {/* Hero Section */}
      <section class="hero-section bg-gradient-to-br from-blue-50 to-white py-16">
        <div class="container container-center">
          <div class="text-center mb-8">
            <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Contact Dr. Jan Duffy
            </h1>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              Las Vegas Real Estate Expert | Top 1% REALTOR® | Available 24/7
            </p>
          </div>
          
          <div class="flex flex-col md:flex-row gap-6 justify-center items-center mt-8">
            <a 
              href="tel:+17029031952" 
              class="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
              </svg>
              (702) 903-1952
            </a>
            <a 
              href="mailto:jan@centennialhillshomesforsale.com" 
              class="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-colors"
            >
              <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
              </svg>
              Send Email
            </a>
          </div>
        </div>
      </section>

      <div class="container container-center py-12">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl font-bold text-gray-900 mb-6">Get In Touch Today</h2>
          <p class="text-lg text-gray-700 leading-relaxed mb-8">Ready to buy or sell real estate in Centennial Hills or Las Vegas? Contact Dr. Jan Duffy for personalized service and expert guidance. Luxury real estate specialist serving West Summerlin's premier neighborhoods including ZIP codes 89138, 89144, and 89135. Dr. Jan Duffy, REALTOR® offers 30+ years of research expertise in luxury homes $400K-$750K. Specializing in Red Rock Country Club, The Ridges, and Summerlin West communities for California equity buyers and corporate relocations. Top 1% Las Vegas REALTOR® providing same-day showings and complimentary market analysis. Available 24/7 for executive clients and luxury home investments.</p>
          
          <h2 class="text-3xl font-bold text-gray-900 mb-6 mt-12">Why Choose Dr. Janet Duffy for Your Real Estate Needs</h2>
        <p>Dr. Janet Duffy brings unparalleled expertise and dedication to every real estate transaction in Las Vegas. With over 30 years of research experience and a proven track record as a Top 1% REALTOR®, Dr. Duffy provides clients with data-driven insights, strategic guidance, and personalized service that exceeds expectations. Whether you're buying your first home, upgrading to a luxury property, selling an investment, or relocating to Las Vegas, Dr. Duffy's comprehensive approach ensures successful outcomes.</p>
        
          <div class="space-y-6 mb-12">
            <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 class="text-xl font-semibold text-gray-900 mb-3">Comprehensive Market Knowledge</h3>
              <p class="text-gray-700 leading-relaxed">Dr. Duffy's deep understanding of the Las Vegas real estate market, particularly in <a href="/centennial-hills" class="text-blue-600 hover:text-blue-700 font-medium">Centennial Hills</a>, <a href="/summerlin" class="text-blue-600 hover:text-blue-700 font-medium">Summerlin</a>, and northwest Las Vegas communities, provides clients with invaluable insights. Her research background enables her to analyze market trends, property values, and investment opportunities with scientific precision. Access our <a href="/market-analysis" class="text-blue-600 hover:text-blue-700 font-medium">comprehensive market analysis</a> and <a href="/market-reports" class="text-blue-600 hover:text-blue-700 font-medium">detailed market reports</a> to understand current conditions and trends.</p>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 class="text-xl font-semibold text-gray-900 mb-3">Personalized Service Approach</h3>
              <p class="text-gray-700 leading-relaxed">Every client receives personalized attention tailored to their unique needs, timeline, and goals. Dr. Duffy takes time to understand your priorities, whether you're seeking a family home in a top-rated school district, a luxury estate with resort-style amenities, or an investment property with strong rental potential. This personalized approach ensures that every recommendation and strategy aligns with your specific objectives.</p>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 class="text-xl font-semibold text-gray-900 mb-3">Executive-Level Availability</h3>
              <p class="text-gray-700 leading-relaxed">Understanding that real estate transactions often require immediate attention, Dr. Duffy offers 24/7 availability for executive clients and urgent inquiries. Same-day property showings, rapid response to market changes, and flexible scheduling accommodate busy professionals, corporate relocations, and time-sensitive transactions. This commitment to accessibility ensures you never miss an opportunity or face unnecessary delays.</p>
            </div>
          </div>

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

        {/* Contact Form Section */}
        <section class="contact-form-section py-16 bg-gray-50">
          <div class="container container-center">
            <div class="text-center mb-12">
              <h2 class="text-3xl font-bold text-gray-900 mb-4">
                Send Us a Message
              </h2>
              <p class="text-lg text-gray-600 max-w-2xl mx-auto">
                Fill out the form below and Dr. Jan Duffy will get back to you within 24 hours. 
                For immediate assistance, call (702) 903-1952.
              </p>
            </div>
            <ContactForm />
          </div>
        </section>

          <h2 class="text-3xl font-bold text-gray-900 mb-6 mt-12">Phone and Email Contact Information</h2>
          <div class="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-8">
            <p class="text-gray-800 leading-relaxed mb-4">Call Dr. Janet Duffy directly at <a href="tel:+17029031952" class="text-blue-600 hover:text-blue-700 font-semibold text-lg">(702) 903-1952</a> for immediate assistance with your real estate needs. Available 24/7 for executive clients and urgent inquiries.</p>
            <p class="text-gray-700 leading-relaxed">Email for detailed questions, property information, or to schedule consultations. Dr. Duffy personally responds to all inquiries to ensure you receive the attention and expertise you deserve.</p>
          </div>
          
          <div class="grid md:grid-cols-2 gap-6 mb-12">
            <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 class="text-xl font-semibold text-gray-900 mb-3">Phone Consultation Benefits</h3>
              <p class="text-gray-700 leading-relaxed">Phone consultations provide immediate access to Dr. Duffy's expertise, allowing you to discuss your real estate goals, ask questions about specific properties, or get quick market insights. Whether you're exploring neighborhoods, comparing properties, or need urgent advice during negotiations, a phone call ensures you receive timely guidance when it matters most.</p>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 class="text-xl font-semibold text-gray-900 mb-3">Email Communication Advantages</h3>
              <p class="text-gray-700 leading-relaxed">Email communication offers the convenience of detailed property information, market reports, and documentation sharing. Dr. Duffy provides comprehensive responses to email inquiries, including property comparisons, neighborhood analyses, and detailed answers to complex questions. This format allows you to review information at your own pace and maintain a written record of important details.</p>
            </div>
          </div>

          <h2 class="text-3xl font-bold text-gray-900 mb-6">Office Location and Service Area</h2>
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

          <h2 class="text-3xl font-bold text-gray-900 mb-6 mt-12">Specialized Services Available</h2>
        <p>Contact Dr. Duffy for specialized services including luxury home sales, California equity buyer assistance, corporate relocations, investment property guidance, and first-time homebuyer support. Each consultation includes market analysis, neighborhood insights, and personalized recommendations based on your specific needs and goals.</p>
        
        <h3>Luxury Home Sales and Purchases</h3>
        <p>Dr. Duffy specializes in luxury real estate transactions, providing access to exclusive listings, private showings, and personalized service for high-end properties. Her expertise in luxury markets ensures that buyers and sellers receive sophisticated guidance tailored to premium properties, including estate homes, golf course properties, and custom-built residences in Las Vegas' most prestigious communities. Explore our <a href="/luxury-home-sales">luxury home sales</a> and <a href="/our-luxury-listings">luxury listings</a> to see available properties.</p>
        
        <h3>California Equity Buyer Assistance</h3>
        <p>California residents looking to leverage their home equity for Nevada real estate purchases receive specialized assistance from Dr. Duffy. This includes navigating tax implications, coordinating cross-state transactions, understanding financing options, and identifying properties that maximize investment potential. Learn more about our <a href="/california-equity-buyers">California equity buyer services</a> and how we help Californians transition to Nevada real estate.</p>
        
        <h3>Corporate Relocation Services</h3>
        <p>Corporate relocations require specialized attention to timelines, temporary housing, neighborhood analysis, and family considerations. Dr. Duffy provides comprehensive relocation services including neighborhood comparisons, school district information, commute analysis, and coordination with relocation companies. Discover our <a href="/corporate-relocation-services">corporate relocation services</a> and <a href="/moving-guide">moving guide</a> for comprehensive relocation support.</p>
        
        <h3>Investment Property Guidance</h3>
        <p>Real estate investors benefit from Dr. Duffy's analytical approach to property evaluation, rental market analysis, and ROI projections. She helps identify properties with strong investment potential, provides cash flow analysis, and offers strategic guidance for building and optimizing real estate portfolios in the Las Vegas market. Explore <a href="/investment-properties">investment property opportunities</a> and market analysis to identify the best investment options.</p>
        
        <h3>First-Time Homebuyer Support</h3>
        <p>First-time homebuyers receive comprehensive guidance through every step of the purchasing process. Dr. Duffy explains financing options, first-time buyer programs, the home inspection process, and helps navigate the complexities of purchasing your first home. Our <a href="/first-time-homebuyers">first-time homebuyer resources</a> and <a href="/buying-guide">comprehensive buying guide</a> provide detailed information to help you get started.</p>

          <h2 class="text-3xl font-bold text-gray-900 mb-6 mt-12">Free Consultation Process</h2>
        <p>Schedule a complimentary consultation to discuss your real estate goals, market questions, or property needs. Dr. Duffy provides free market analysis, home valuations, and strategic guidance to help you make informed decisions about buying or selling Las Vegas real estate.</p>
        
        <h3>Initial Consultation Overview</h3>
        <p>During your initial consultation, Dr. Duffy will discuss your real estate goals, timeline, budget, and preferences. This comprehensive conversation helps her understand your unique needs and develop a personalized strategy. Whether you're buying or selling, this consultation provides valuable insights and establishes a foundation for a successful real estate experience.</p>
        
        <h3>Market Analysis and Valuations</h3>
        <p>Free market analysis and home valuations provide essential information for making informed real estate decisions. Dr. Duffy's comprehensive analysis includes recent comparable sales, current market conditions, neighborhood trends, and property-specific factors that influence value. This data-driven approach ensures you have accurate information to guide your decisions.</p>
        
        <h3>Strategic Planning Sessions</h3>
        <p>Strategic planning sessions help you develop a clear roadmap for achieving your real estate goals. Dr. Duffy works with you to identify priorities, establish timelines, understand market dynamics, and create actionable plans. These sessions ensure you're prepared for every phase of your real estate transaction.</p>

          <h2 class="text-3xl font-bold text-gray-900 mb-6 mt-12">Client Testimonials and References</h2>
        <p>Dr. Janet Duffy's clients consistently rate her service as exceptional, citing her market expertise, attention to detail, and commitment to client success. Request references from recent clients to learn about their experience working with Dr. Duffy for their Las Vegas real estate transactions.</p>
        
        <h3>Proven Track Record</h3>
        <p>Dr. Duffy's Top 1% REALTOR® status reflects her consistent success in helping clients achieve their real estate goals. Her track record includes successful transactions across all price ranges, from first-time home purchases to luxury estate sales. This proven performance demonstrates her ability to deliver results regardless of transaction complexity or market conditions.</p>
        
        <h3>Client Satisfaction Commitment</h3>
        <p>Client satisfaction is Dr. Duffy's top priority, and her commitment to exceeding expectations is evident in every interaction. From initial consultation through closing and beyond, she maintains open communication, provides regular updates, and ensures you're informed and comfortable throughout the process. This dedication to client satisfaction has earned her exceptional reviews and repeat business.</p>
        
        <h3>Requesting References</h3>
        <p>Prospective clients are encouraged to request references from recent transactions similar to their own needs. Dr. Duffy is happy to connect you with past clients who can share their experiences working with her. These references provide valuable insights into her service quality, communication style, and ability to deliver successful outcomes.</p>
        
          <h2 class="text-3xl font-bold text-gray-900 mb-6 mt-12">Response Time and Communication Expectations</h2>
        <p>Dr. Duffy understands that real estate decisions often require timely responses, and she commits to rapid response times for all inquiries. Executive clients receive priority response, typically within minutes for urgent matters. All clients can expect responses within 24 hours, with most inquiries answered the same day. This commitment to communication ensures you never feel left waiting during critical moments of your transaction.</p>
        
            <div class="grid md:grid-cols-2 gap-6 mb-12">
              <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 class="text-xl font-semibold text-gray-900 mb-3">Urgent Matter Handling</h3>
                <p class="text-gray-700 leading-relaxed">For urgent matters such as time-sensitive offers, inspection issues, or closing complications, Dr. Duffy provides immediate attention and rapid problem-solving. Her availability and responsiveness during critical moments help prevent delays and ensure smooth transaction progress.</p>
              </div>
              
              <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 class="text-xl font-semibold text-gray-900 mb-3">Regular Update Schedule</h3>
                <p class="text-gray-700 leading-relaxed">Throughout your transaction, Dr. Duffy provides regular updates on market activity, showing feedback, offer status, and transaction progress. This proactive communication keeps you informed and engaged, allowing you to make timely decisions and feel confident about your transaction's status.</p>
              </div>
            </div>
          </div>
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