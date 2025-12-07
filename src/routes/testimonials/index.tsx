import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import SEOStructuredData from '../../components/seo-structured-data';
import { pageSchemas } from '../../components/seo-structured-data';
import FAQSection, { realtorServiceFAQs } from '../../components/faq-section';

export default component$(() => {
  const testimonialsSchema = pageSchemas.servicePage({
    name: "Client Testimonials - Dr. Janet Duffy Real Estate Success Stories",
    description: "Read client testimonials for Dr. Janet Duffy real estate services. Success stories from Las Vegas homebuyers, sellers, and investors in Centennial Hills.",
    slug: "testimonials",
    serviceType: "Client Testimonial Services"
  });

  return (
    <>
      <SEOStructuredData type="Service" data={testimonialsSchema} />

      <section class="hero-section">
        <div class="container container-center">
          <h1 class="hero-title">
            Client Testimonials - <span class="highlight">Dr. Janet Duffy Real Estate Success Stories</span>
          </h1>
          <p class="hero-subtitle">
            Read authentic testimonials from satisfied clients who have worked with Dr. Janet Duffy for their Las Vegas real 
            estate transactions. Our clients consistently praise Dr. Duffy's expertise, professionalism, and dedication to 
            achieving their real estate goals in Centennial Hills and throughout the Las Vegas area.
          </p>
        </div>
      </section>

      <section class="service-content py-16">
        <div class="container container-center">
          <h2>Trusted by Las Vegas Homebuyers and Sellers</h2>
          <p>
            Read authentic testimonials from satisfied clients who have worked with Dr. Janet Duffy for their Las Vegas real 
            estate transactions. Our clients consistently praise Dr. Duffy's expertise, professionalism, and dedication to 
            achieving their real estate goals in Centennial Hills and throughout the Las Vegas area. These testimonials 
            reflect Dr. Duffy's commitment to client success and her ability to deliver exceptional results across diverse 
            real estate transactions.
          </p>
          <p>
            Client testimonials provide valuable insights into Dr. Duffy's service quality, market expertise, and commitment 
            to client satisfaction. These authentic reviews from real clients demonstrate Dr. Duffy's ability to exceed 
            expectations and deliver successful outcomes. Reading testimonials helps prospective clients understand what to 
            expect when working with Dr. Duffy and provides confidence in her expertise and service quality.
          </p>
          <p>
            The diversity of testimonials reflects Dr. Duffy's ability to serve clients across various transaction types, 
            price ranges, and circumstances. From first-time homebuyers to luxury property investors, from corporate 
            relocations to estate sales, Dr. Duffy's clients consistently report exceptional service and successful outcomes. 
            This diversity demonstrates Dr. Duffy's comprehensive expertise and ability to adapt her approach to meet diverse 
            client needs.
          </p>

          <h3>Consistent Client Satisfaction</h3>
          <p>
            Consistent client satisfaction is evident in testimonials that praise Dr. Duffy's expertise, professionalism, and 
            dedication to client success. Clients consistently report that Dr. Duffy exceeds expectations and delivers 
            exceptional results. This consistent satisfaction reflects Dr. Duffy's commitment to client service and her ability 
            to deliver successful outcomes across diverse real estate transactions.
          </p>
          <p>
            Satisfaction factors include Dr. Duffy's market expertise, negotiation skills, communication, and personalized 
            service that ensures clients feel supported throughout their transactions. Clients appreciate Dr. Duffy's 
            availability, responsiveness, and commitment to achieving their goals. This consistent satisfaction creates 
            confidence for prospective clients considering working with Dr. Duffy.
          </p>

          <h3>Expertise and Professionalism</h3>
          <p>
            Testimonials consistently highlight Dr. Duffy's expertise, professionalism, and market knowledge that contribute to 
            successful transactions. Clients appreciate Dr. Duffy's 30+ years of research expertise, Top 1% REALTOR® 
            designation, and comprehensive market knowledge that supports informed decision-making. This expertise and 
            professionalism create confidence for clients and contribute to successful outcomes.
          </p>
          <p>
            Professional qualities include Dr. Duffy's market expertise, negotiation skills, attention to detail, and 
            commitment to client success. Clients consistently report that Dr. Duffy's professionalism and expertise 
            contribute to successful transactions. This professional approach creates value for clients and supports 
            exceptional outcomes.
          </p>

          <h3>Dedication to Client Success</h3>
          <p>
            Testimonials consistently praise Dr. Duffy's dedication to client success and her commitment to achieving client 
            goals. Clients appreciate Dr. Duffy's personalized service, availability, and responsiveness that ensure they feel 
            supported throughout their transactions. This dedication to client success creates confidence and contributes to 
            exceptional outcomes.
          </p>
          <p>
            Dedication factors include Dr. Duffy's personalized approach, availability, and commitment to achieving client 
            goals. Clients consistently report that Dr. Duffy's dedication contributes to successful transactions. This 
            dedication creates value for clients and supports exceptional service quality.
          </p>

          <h2>Luxury Home Buyer Testimonials</h2>
          <p>
            Discover how Dr. Janet Duffy has helped luxury home buyers find their dream properties in Las Vegas' most 
            exclusive communities. Our luxury clients appreciate Dr. Duffy's attention to detail, market expertise, and 
            personalized service that exceeds expectations for high-end real estate transactions. These testimonials 
            demonstrate Dr. Duffy's ability to serve luxury buyers and deliver exceptional results in premium property 
            transactions.
          </p>
          <p>
            Luxury home buyer testimonials highlight Dr. Duffy's expertise in luxury markets, her understanding of high-end 
            buyer preferences, and her ability to navigate complex luxury transactions. Clients appreciate Dr. Duffy's access 
            to exclusive listings, her negotiation skills in luxury markets, and her personalized service that ensures luxury 
            buyers receive the attention and expertise they expect. These testimonials demonstrate Dr. Duffy's ability to serve 
            luxury buyers effectively.
          </p>
          <p>
            Testimonials from luxury buyers consistently praise Dr. Duffy's market knowledge, her ability to identify value 
            opportunities, and her commitment to achieving luxury buyer goals. Clients appreciate Dr. Duffy's understanding of 
            luxury property characteristics, her ability to evaluate premium properties, and her negotiation skills that 
            maximize value for luxury buyers. These testimonials create confidence for luxury buyers considering working with 
            Dr. Duffy.
          </p>

          <h3>Exclusive Property Access</h3>
          <p>
            Luxury buyer testimonials highlight Dr. Duffy's access to exclusive listings and her ability to identify premium 
            properties that match luxury buyer preferences. Clients appreciate Dr. Duffy's network, her knowledge of luxury 
            markets, and her ability to provide access to properties that may not be widely available. This exclusive access 
            creates value for luxury buyers and supports successful luxury transactions.
          </p>
          <p>
            Access benefits include Dr. Duffy's network, market knowledge, and ability to identify premium properties that 
            match luxury buyer preferences. Clients consistently report that Dr. Duffy's access contributes to successful 
            luxury transactions. This exclusive access creates value for luxury buyers and supports exceptional outcomes.
          </p>

          <h3>Luxury Market Expertise</h3>
          <p>
            Luxury market expertise testimonials highlight Dr. Duffy's understanding of luxury property characteristics, her 
            ability to evaluate premium properties, and her knowledge of luxury market dynamics. Clients appreciate Dr. Duffy's 
            expertise in luxury markets, her ability to identify value opportunities, and her negotiation skills that maximize 
            value for luxury buyers. This luxury market expertise creates confidence for luxury buyers and supports successful 
            transactions.
          </p>
          <p>
            Expertise factors include Dr. Duffy's understanding of luxury property characteristics, her ability to evaluate 
            premium properties, and her knowledge of luxury market dynamics. Clients consistently report that Dr. Duffy's 
            expertise contributes to successful luxury transactions. This luxury market expertise creates value for luxury buyers 
            and supports exceptional outcomes.
          </p>

          <h3>Personalized Luxury Service</h3>
          <p>
            Personalized luxury service testimonials highlight Dr. Duffy's attention to detail, her commitment to luxury buyer 
            preferences, and her ability to provide personalized service that exceeds expectations. Clients appreciate Dr. 
            Duffy's availability, her responsiveness, and her commitment to ensuring luxury buyers receive the attention and 
            expertise they expect. This personalized service creates confidence for luxury buyers and supports successful 
            transactions.
          </p>
          <p>
            Service factors include Dr. Duffy's attention to detail, her commitment to luxury buyer preferences, and her 
            ability to provide personalized service. Clients consistently report that Dr. Duffy's personalized service 
            contributes to successful luxury transactions. This personalized luxury service creates value for luxury buyers 
            and supports exceptional outcomes.
          </p>

          <h2>First-Time Homebuyer Success Stories</h2>
          <p>
            Learn from first-time homebuyers who successfully navigated the Las Vegas real estate market with Dr. Janet Duffy's 
            guidance. These testimonials highlight Dr. Duffy's patient approach, educational support, and commitment to 
            ensuring first-time buyers understand every aspect of the homebuying process. These success stories demonstrate 
            Dr. Duffy's ability to serve first-time buyers and help them achieve successful home purchases.
          </p>
          <p>
            First-time homebuyer testimonials highlight Dr. Duffy's educational approach, her patience in explaining complex 
            processes, and her commitment to ensuring first-time buyers feel confident and informed. Clients appreciate Dr. 
            Duffy's ability to explain financing options, inspection processes, and transaction steps in ways that first-time 
            buyers can understand. These testimonials demonstrate Dr. Duffy's ability to serve first-time buyers effectively.
          </p>
          <p>
            Testimonials from first-time buyers consistently praise Dr. Duffy's guidance, her educational support, and her 
            commitment to ensuring first-time buyers make informed decisions. Clients appreciate Dr. Duffy's patience, her 
            ability to answer questions, and her commitment to ensuring first-time buyers understand every aspect of the 
            homebuying process. These testimonials create confidence for first-time buyers considering working with Dr. Duffy.
          </p>

          <h3>Educational Support and Guidance</h3>
          <p>
            Educational support testimonials highlight Dr. Duffy's ability to explain complex processes, answer questions, and 
            provide guidance that helps first-time buyers make informed decisions. Clients appreciate Dr. Duffy's educational 
            approach, her patience, and her commitment to ensuring first-time buyers understand every aspect of the homebuying 
            process. This educational support creates confidence for first-time buyers and supports successful transactions.
          </p>
          <p>
            Support factors include Dr. Duffy's educational approach, her ability to explain complex processes, and her 
            commitment to ensuring first-time buyers understand transactions. Clients consistently report that Dr. Duffy's 
            educational support contributes to successful first-time buyer transactions. This educational support creates value 
            for first-time buyers and supports exceptional outcomes.
          </p>

          <h3>Patient and Understanding Approach</h3>
          <p>
            Patient approach testimonials highlight Dr. Duffy's understanding of first-time buyer concerns, her patience in 
            answering questions, and her commitment to ensuring first-time buyers feel comfortable throughout the process. 
            Clients appreciate Dr. Duffy's patience, her ability to address concerns, and her commitment to ensuring first-time 
            buyers make informed decisions. This patient approach creates confidence for first-time buyers and supports 
            successful transactions.
          </p>
          <p>
            Approach factors include Dr. Duffy's patience, her understanding of first-time buyer concerns, and her commitment 
            to ensuring first-time buyers feel comfortable. Clients consistently report that Dr. Duffy's patient approach 
            contributes to successful first-time buyer transactions. This patient approach creates value for first-time buyers 
            and supports exceptional outcomes.
          </p>

          <h3>First-Time Buyer Program Knowledge</h3>
          <p>
            First-time buyer program knowledge testimonials highlight Dr. Duffy's understanding of first-time buyer programs, 
            financing options, and assistance programs that help first-time buyers achieve homeownership. Clients appreciate 
            Dr. Duffy's knowledge of first-time buyer resources, her ability to explain program benefits, and her commitment to 
            helping first-time buyers access available assistance. This program knowledge creates value for first-time buyers 
            and supports successful transactions.
          </p>
          <p>
            Knowledge factors include Dr. Duffy's understanding of first-time buyer programs, her ability to explain program 
            benefits, and her commitment to helping first-time buyers access assistance. Clients consistently report that Dr. 
            Duffy's program knowledge contributes to successful first-time buyer transactions. This program knowledge creates 
            value for first-time buyers and supports exceptional outcomes.
          </p>

          <h2>Investment Property Client Reviews</h2>
          <p>
            Read testimonials from real estate investors who have built successful portfolios with Dr. Janet Duffy's expertise. 
            Our investment clients value Dr. Duffy's market analysis, property evaluation skills, and strategic guidance that 
            helps maximize returns on Las Vegas real estate investments. These testimonials demonstrate Dr. Duffy's ability to 
            serve investors and help them achieve successful investment outcomes.
          </p>
          <p>
            Investment property client testimonials highlight Dr. Duffy's analytical approach, her ability to evaluate 
            investment properties, and her strategic guidance that helps investors make informed decisions. Clients appreciate 
            Dr. Duffy's market analysis, her understanding of investment property characteristics, and her ability to identify 
            properties with strong investment potential. These testimonials demonstrate Dr. Duffy's ability to serve investors 
            effectively.
          </p>
          <p>
            Testimonials from investors consistently praise Dr. Duffy's analytical skills, her market knowledge, and her 
            commitment to helping investors achieve their investment goals. Clients appreciate Dr. Duffy's ability to evaluate 
            properties for investment potential, her strategic guidance, and her commitment to helping investors build 
            successful portfolios. These testimonials create confidence for investors considering working with Dr. Duffy.
          </p>

          <h3>Market Analysis and Property Evaluation</h3>
          <p>
            Market analysis testimonials highlight Dr. Duffy's analytical approach, her ability to evaluate investment 
            properties, and her market knowledge that helps investors make informed decisions. Clients appreciate Dr. Duffy's 
            comprehensive market analysis, her understanding of investment property characteristics, and her ability to identify 
            properties with strong investment potential. This market analysis creates value for investors and supports successful 
            investment transactions.
          </p>
          <p>
            Analysis factors include Dr. Duffy's analytical approach, her ability to evaluate investment properties, and her 
            market knowledge. Clients consistently report that Dr. Duffy's market analysis contributes to successful investment 
            transactions. This market analysis creates value for investors and supports exceptional outcomes.
          </p>

          <h3>Strategic Investment Guidance</h3>
          <p>
            Strategic guidance testimonials highlight Dr. Duffy's ability to provide strategic advice that helps investors make 
            informed decisions and achieve their investment goals. Clients appreciate Dr. Duffy's strategic approach, her 
            understanding of investment strategies, and her commitment to helping investors build successful portfolios. This 
            strategic guidance creates value for investors and supports successful investment outcomes.
          </p>
          <p>
            Guidance factors include Dr. Duffy's strategic approach, her understanding of investment strategies, and her 
            commitment to helping investors achieve goals. Clients consistently report that Dr. Duffy's strategic guidance 
            contributes to successful investment transactions. This strategic guidance creates value for investors and supports 
            exceptional outcomes.
          </p>

          <h3>Portfolio Building Support</h3>
          <p>
            Portfolio building testimonials highlight Dr. Duffy's ability to help investors build successful portfolios through 
            strategic property selection and investment guidance. Clients appreciate Dr. Duffy's understanding of portfolio 
            building, her ability to identify properties that complement existing portfolios, and her commitment to helping 
            investors achieve long-term investment goals. This portfolio building support creates value for investors and 
            supports successful investment outcomes.
          </p>
          <p>
            Support factors include Dr. Duffy's understanding of portfolio building, her ability to identify complementary 
            properties, and her commitment to helping investors achieve long-term goals. Clients consistently report that Dr. 
            Duffy's portfolio building support contributes to successful investment outcomes. This portfolio building support 
            creates value for investors and supports exceptional outcomes.
          </p>

          <h2>Corporate Relocation Experiences</h2>
          <p>
            Explore testimonials from corporate executives and professionals who relocated to Las Vegas with Dr. Janet Duffy's 
            assistance. These clients appreciate Dr. Duffy's understanding of relocation challenges, market knowledge, and 
            personalized service that makes transitioning to Las Vegas seamless and successful. These testimonials demonstrate 
            Dr. Duffy's ability to serve corporate relocations and help executives achieve successful moves.
          </p>
          <p>
            Corporate relocation testimonials highlight Dr. Duffy's understanding of relocation challenges, her ability to 
            provide rapid response and comprehensive support, and her commitment to ensuring smooth transitions. Clients 
            appreciate Dr. Duffy's same-day showing availability, her expedited market analysis, and her coordination with 
            relocation companies. These testimonials demonstrate Dr. Duffy's ability to serve corporate relocations effectively.
          </p>
          <p>
            Testimonials from corporate clients consistently praise Dr. Duffy's responsiveness, her understanding of 
            relocation timelines, and her commitment to ensuring smooth transitions. Clients appreciate Dr. Duffy's ability to 
            accommodate tight timelines, her comprehensive support, and her commitment to helping corporate clients find homes 
            quickly and efficiently. These testimonials create confidence for corporate clients considering working with Dr. 
            Duffy.
          </p>

          <h3>Rapid Response and Timely Service</h3>
          <p>
            Rapid response testimonials highlight Dr. Duffy's ability to provide immediate attention and comprehensive support 
            for corporate relocations with tight timelines. Clients appreciate Dr. Duffy's same-day showing availability, her 
            expedited market analysis, and her commitment to ensuring smooth transitions. This rapid response creates value for 
            corporate clients and supports successful relocations.
          </p>
          <p>
            Response factors include Dr. Duffy's availability, her ability to accommodate tight timelines, and her commitment 
            to ensuring smooth transitions. Clients consistently report that Dr. Duffy's rapid response contributes to successful 
            corporate relocations. This rapid response creates value for corporate clients and supports exceptional outcomes.
          </p>

          <h3>Relocation Challenge Understanding</h3>
          <p>
            Relocation challenge understanding testimonials highlight Dr. Duffy's understanding of corporate relocation 
            challenges, her ability to provide comprehensive support, and her commitment to ensuring smooth transitions. 
            Clients appreciate Dr. Duffy's understanding of relocation timelines, her coordination with relocation companies, and 
            her commitment to helping corporate clients navigate relocation challenges. This understanding creates value for 
            corporate clients and supports successful relocations.
          </p>
          <p>
            Understanding factors include Dr. Duffy's knowledge of relocation challenges, her ability to provide comprehensive 
            support, and her commitment to ensuring smooth transitions. Clients consistently report that Dr. Duffy's 
            understanding contributes to successful corporate relocations. This understanding creates value for corporate clients 
            and supports exceptional outcomes.
          </p>

          <h3>Comprehensive Relocation Support</h3>
          <p>
            Comprehensive support testimonials highlight Dr. Duffy's ability to provide complete relocation assistance including 
            neighborhood analysis, school district information, and coordination with relocation companies. Clients appreciate Dr. 
            Duffy's comprehensive approach, her understanding of relocation needs, and her commitment to ensuring smooth 
            transitions. This comprehensive support creates value for corporate clients and supports successful relocations.
          </p>
          <p>
            Support factors include Dr. Duffy's comprehensive approach, her understanding of relocation needs, and her 
            commitment to ensuring smooth transitions. Clients consistently report that Dr. Duffy's comprehensive support 
            contributes to successful corporate relocations. This comprehensive support creates value for corporate clients and 
            supports exceptional outcomes.
          </p>

          <h2>Seller Success Stories</h2>
          <p>
            Hear from home sellers who achieved optimal results with Dr. Janet Duffy's marketing expertise and negotiation 
            skills. Our seller testimonials demonstrate Dr. Duffy's ability to maximize property values, minimize time on 
            market, and ensure smooth transactions for Las Vegas home sellers. These success stories demonstrate Dr. Duffy's 
            ability to serve sellers and help them achieve successful home sales.
          </p>
          <p>
            Seller testimonials highlight Dr. Duffy's marketing expertise, her negotiation skills, and her commitment to 
            maximizing property values and minimizing time on market. Clients appreciate Dr. Duffy's comprehensive marketing 
            strategies, her ability to attract qualified buyers, and her negotiation skills that maximize sale prices. These 
            testimonials demonstrate Dr. Duffy's ability to serve sellers effectively.
          </p>
          <p>
            Testimonials from sellers consistently praise Dr. Duffy's marketing strategies, her negotiation skills, and her 
            commitment to achieving optimal results. Clients appreciate Dr. Duffy's ability to maximize property values, her 
            comprehensive marketing approach, and her commitment to ensuring smooth transactions. These testimonials create 
            confidence for sellers considering working with Dr. Duffy.
          </p>

          <h3>Marketing Expertise and Strategies</h3>
          <p>
            Marketing expertise testimonials highlight Dr. Duffy's comprehensive marketing strategies, her ability to attract 
            qualified buyers, and her commitment to maximizing property exposure. Clients appreciate Dr. Duffy's marketing 
            approach, her use of various marketing channels, and her ability to create compelling property presentations. This 
            marketing expertise creates value for sellers and supports successful sales.
          </p>
          <p>
            Expertise factors include Dr. Duffy's comprehensive marketing strategies, her ability to attract qualified buyers, 
            and her commitment to maximizing property exposure. Clients consistently report that Dr. Duffy's marketing expertise 
            contributes to successful sales. This marketing expertise creates value for sellers and supports exceptional 
            outcomes.
          </p>

          <h3>Negotiation Skills and Results</h3>
          <p>
            Negotiation skills testimonials highlight Dr. Duffy's ability to negotiate favorable terms, maximize sale prices, 
            and ensure smooth transactions. Clients appreciate Dr. Duffy's negotiation skills, her ability to represent seller 
            interests effectively, and her commitment to achieving optimal results. This negotiation expertise creates value for 
            sellers and supports successful sales.
          </p>
          <p>
            Skills factors include Dr. Duffy's negotiation abilities, her ability to represent seller interests, and her 
            commitment to achieving optimal results. Clients consistently report that Dr. Duffy's negotiation skills contribute to 
            successful sales. This negotiation expertise creates value for sellers and supports exceptional outcomes.
          </p>

          <h3>Transaction Management and Support</h3>
          <p>
            Transaction management testimonials highlight Dr. Duffy's ability to manage complex transactions, coordinate with 
            various parties, and ensure smooth closings. Clients appreciate Dr. Duffy's transaction management, her 
            communication throughout the process, and her commitment to ensuring smooth transactions. This transaction 
            management creates value for sellers and supports successful sales.
          </p>
          <p>
            Management factors include Dr. Duffy's ability to manage transactions, her coordination with various parties, and 
            her commitment to ensuring smooth closings. Clients consistently report that Dr. Duffy's transaction management 
            contributes to successful sales. This transaction management creates value for sellers and supports exceptional 
            outcomes.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection 
        faqs={realtorServiceFAQs}
        title="Frequently Asked Questions About Client Testimonials"
        className="bg-gray-50"
      />
    </>
  );
});

export const head: DocumentHead = {
  title: 'Client Testimonials - Dr. Janet Duffy Real Estate Success Stories',
  meta: [
    {
      name: 'description',
      content: 'Read client testimonials for Dr. Janet Duffy real estate services. Success stories from Las Vegas homebuyers, sellers, and investors in Centennial Hills.',
    },
  ],
};
