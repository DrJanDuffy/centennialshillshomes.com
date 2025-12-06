import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import SEOStructuredData from '../../../../components/seo-structured-data';
import { pageSchemas } from '../../../../components/seo-structured-data';
import FAQSection, { buyerServiceFAQs } from '../../../../components/faq-section';

export default component$(() => {
  const buyerGuideSchema = pageSchemas.articlePage({
    title: "Buyer Guide - Las Vegas Real Estate",
    description: "Comprehensive buyer's guide with tips, strategies, and expert advice for purchasing a home in Las Vegas.",
    slug: "buyer-guide"
  });

  return (
    <>
      <SEOStructuredData type="Article" data={buyerGuideSchema} />

      <section class="hero-section">
        <div class="container container-center">
          <h1 class="hero-title">
            <span class="highlight">Buyer's Guide</span>
            <br />
            Las Vegas Real Estate
          </h1>
          <p class="hero-subtitle">
            Comprehensive buyer's guide with tips, strategies, and expert advice for purchasing a home 
            in Las Vegas from Dr. Jan Duffy, Top 1% REALTOR®.
          </p>
        </div>
      </section>

      <section class="service-content py-16">
        <div class="container container-center">
          <h2>Complete Buyer's Guide</h2>
          <p>
            Buying a home is one of life's biggest decisions. This comprehensive guide provides everything 
            you need to know about purchasing a home in Las Vegas, from getting pre-approved to closing day. 
            Whether you're a first-time buyer, move-up buyer, or luxury homebuyer, this guide provides the 
            information and resources you need for successful home purchases.
          </p>
          <p>
            The home buying process involves numerous steps, decisions, and considerations that can be 
            overwhelming without proper guidance. This comprehensive buyer's guide addresses all aspects of 
            the home buying process, from initial planning through closing and moving into your new home.
          </p>
          <p>
            Dr. Jan Duffy's 30+ years of research expertise and Top 1% REALTOR® designation ensure that you 
            receive expert guidance throughout your home purchase process. Her comprehensive knowledge of Las 
            Vegas real estate markets, neighborhoods, and financing options provides you with the expertise 
            needed for successful home purchases.
          </p>

          <h2>Getting Started</h2>
          <p>
            Getting started with your home purchase involves understanding your financial situation, getting 
            pre-approved, finding the right agent, and defining your needs and preferences. This planning phase 
            is crucial for successful home purchases and helps you avoid common mistakes that can complicate the 
            buying process.
          </p>

          <h3>Understanding Your Budget and Affordability</h3>
          <p>
            Understanding your budget and affordability is the first step in the home buying process, as it 
            determines how much you can spend and what properties you can consider. This understanding involves 
            evaluating your income, debt, savings, and financial goals to establish a realistic home purchase 
            budget.
          </p>
          <p>
            Affordability calculations typically use the 28% rule, which suggests that housing costs should not 
            exceed 28% of gross monthly income. However, actual affordability can vary based on individual 
            circumstances, debt levels, and financial goals. Understanding your specific affordability helps you 
            set realistic expectations and focus your home search on properties you can actually afford.
          </p>
          <p>
            Dr. Jan Duffy can help you understand your affordability and connect you with lenders who can provide 
            pre-approval and accurate affordability assessments. Her expertise in financing and Las Vegas markets 
            ensures that you receive comprehensive guidance on affordability and budgeting.
          </p>

          <h3>Getting Pre-Approved for a Mortgage</h3>
          <p>
            Getting pre-approved for a mortgage before you start your home search helps you understand your budget, 
            shows sellers you're serious, and ensures you're looking at properties you can actually afford. 
            Pre-approval provides confidence in your buying power and helps you make informed decisions about 
            properties and pricing.
          </p>
          <p>
            Pre-approval involves working with a lender to evaluate your credit, income, and financial situation 
            to determine how much you can borrow. This process provides a pre-approval letter that shows sellers 
            you're qualified to purchase homes in specific price ranges, making your offers more attractive.
          </p>
          <p>
            Dr. Jan Duffy can connect you with trusted lenders who understand the Las Vegas market and can help 
            you get pre-approved quickly and efficiently. Her network of lenders ensures that you receive 
            competitive rates and terms that support your home purchase goals.
          </p>

          <h3>Finding the Right Real Estate Agent</h3>
          <p>
            Finding the right real estate agent is crucial for successful home purchases, as agents provide market 
            expertise, negotiation skills, and guidance throughout the buying process. A good agent understands 
            your needs, provides market insights, and ensures that transactions proceed smoothly.
          </p>
          <p>
            Dr. Jan Duffy's 30+ years of research expertise and Top 1% REALTOR® designation provide clients 
            with comprehensive market knowledge that helps them make informed decisions. Her expertise in Las 
            Vegas neighborhoods, property values, and market dynamics ensures that clients receive expert guidance 
            throughout their home purchase process.
          </p>
          <p>
            Working with an experienced agent like Dr. Jan Duffy provides access to comprehensive listing data, 
            market insights, and professional networks that enhance your home search. This access ensures that you 
            see all available properties that match your criteria and receive expert guidance throughout your 
            home purchase.
          </p>

          <h3>Defining Your Needs and Wants</h3>
          <p>
            Defining your needs and wants helps you focus your home search and make informed decisions about 
            properties. Needs are essential requirements that properties must meet, while wants are desirable 
            features that enhance quality of life but aren't essential.
          </p>
          <p>
            Creating a list of needs and wants helps you evaluate properties objectively and make decisions that 
            support your goals. This list should consider location, size, features, schools, commute, and budget 
            to ensure that you find properties that match your requirements.
          </p>

          <h2>The Home Search</h2>
          <p>
            The home search involves using various tools and resources to find properties that match your needs 
            and preferences. This process requires patience, organization, and expert guidance to ensure that you 
            find the right home at the right price.
          </p>

          <h3>Using Online Tools and MLS Search</h3>
          <p>
            Online tools and MLS search provide access to comprehensive listing data that helps you identify 
            properties that match your criteria. These tools allow you to search by location, price, features, 
            and other criteria to find properties that meet your needs.
          </p>
          <p>
            Dr. Jan Duffy provides access to comprehensive listing data and search tools that help you find 
            properties that match your criteria. Her expertise in Las Vegas markets ensures that you receive 
            accurate, up-to-date information about available properties.
          </p>

          <h3>Attending Open Houses and Showings</h3>
          <p>
            Attending open houses and private showings allows you to experience properties firsthand and evaluate 
            whether they match your needs and preferences. These visits provide opportunities to assess property 
            condition, layout, and neighborhood characteristics that affect your decision.
          </p>
          <p>
            Dr. Jan Duffy provides same-day showings and coordinates property visits that accommodate your 
            schedule. Her expertise in property evaluation helps you assess properties objectively and make 
            informed decisions about which properties to pursue.
          </p>

          <h3>Evaluating Neighborhoods and Schools</h3>
          <p>
            Evaluating neighborhoods and schools is crucial for families and those who prioritize location and 
            education. Understanding neighborhood characteristics, amenities, and school quality helps you choose 
            areas that support your lifestyle and goals.
          </p>
          <p>
            Dr. Jan Duffy provides comprehensive area orientation and school information that helps you evaluate 
            neighborhoods and make informed location decisions. Her expertise in Las Vegas neighborhoods and 
            schools ensures that you receive detailed information about areas that match your preferences.
          </p>

          <h3>Understanding Market Conditions</h3>
          <p>
            Understanding market conditions helps you develop realistic expectations and strategies for your home 
            purchase. Market conditions affect pricing, inventory, competition, and negotiation dynamics that 
            influence your buying experience.
          </p>
          <p>
            Dr. Jan Duffy's market expertise helps you understand current conditions and develop strategies that 
            support successful purchases. Her understanding of market dynamics ensures that you make informed 
            decisions about timing, pricing, and negotiation.
          </p>

          <h2>Making an Offer</h2>
          <p>
            Making an offer involves crafting competitive proposals, understanding contingencies, and negotiating 
            terms that protect your interests while remaining attractive to sellers. This process requires 
            expertise and strategy to ensure successful transactions.
          </p>

          <h3>Crafting a Competitive Offer</h3>
          <p>
            Crafting a competitive offer involves evaluating market conditions, comparable sales, and property 
            characteristics to determine appropriate pricing and terms. Competitive offers balance price, terms, 
            and contingencies to create proposals that sellers find attractive.
          </p>
          <p>
            Dr. Jan Duffy's negotiation expertise helps you craft offers that maximize your position while 
            remaining attractive to sellers. Her understanding of market conditions and negotiation dynamics 
            ensures that you make competitive offers that support successful transactions.
          </p>

          <h3>Understanding Contingencies</h3>
          <p>
            Contingencies protect buyers by allowing them to withdraw from transactions under specific 
            circumstances. Common contingencies include financing, inspection, and appraisal contingencies that 
            provide protection while transactions proceed.
          </p>
          <p>
            Understanding contingencies helps you structure offers that protect your interests while remaining 
            competitive. Dr. Jan Duffy's expertise in offer structuring ensures that you include appropriate 
            contingencies that provide protection without making offers unattractive to sellers.
          </p>

          <h3>Negotiation Strategies</h3>
          <p>
            Negotiation strategies help you achieve favorable terms while maintaining positive relationships with 
            sellers. Effective negotiation involves understanding seller motivations, market conditions, and 
            property characteristics to develop strategies that support successful transactions.
          </p>
          <p>
            Dr. Jan Duffy's negotiation expertise ensures that you achieve the best possible terms while 
            maintaining positive transaction relationships. Her understanding of negotiation dynamics and market 
            conditions helps you develop strategies that support successful purchases.
          </p>

          <h3>Escrow and Closing Process</h3>
          <p>
            The escrow and closing process involves completing inspections, finalizing financing, and transferring 
            ownership. This process requires coordination and attention to detail to ensure that all requirements 
            are met and transactions close successfully.
          </p>
          <p>
            Dr. Jan Duffy guides you through the escrow and closing process, ensuring that all requirements are 
            met and transactions proceed smoothly. Her coordination skills and transaction expertise ensure that 
            your home purchase closes successfully and on time.
          </p>

          <h2>Working with Dr. Jan Duffy for Your Home Purchase</h2>
          <p>
            Dr. Jan Duffy provides comprehensive services for home buyers, ensuring that your home purchase 
            proceeds smoothly and successfully. Her expertise in Las Vegas real estate, financing, and buyer 
            services makes her the ideal choice for your home purchase needs.
          </p>
          <p>
            Whether you're a first-time buyer, move-up buyer, or luxury homebuyer, Dr. Duffy's personalized 
            service and comprehensive expertise ensure that your home purchase meets your goals. Her commitment to 
            client service and understanding of buyer needs make her the ideal guide for your home purchase process.
          </p>
        </div>
      </section>

      <FAQSection 
        faqs={buyerServiceFAQs}
        title="Frequently Asked Questions for Home Buyers"
        className="bg-gray-50"
      />

      <section class="cta-section">
        <div class="container container-center">
          <h2>Ready to Start Your Home Search?</h2>
          <p>Contact Dr. Jan Duffy for expert buyer guidance.</p>
          <div class="cta-buttons">
            <a href="/contact" class="btn btn-primary">Contact Dr. Duffy</a>
            <a href="/buy-a-home" class="btn btn-secondary">View Homes</a>
          </div>
        </div>
      </section>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Buyer\'s Guide | Las Vegas Real Estate | Dr. Jan Duffy',
  meta: [
    {
      name: 'description',
      content: 'Comprehensive buyer\'s guide with tips, strategies, and expert advice for purchasing a home in Las Vegas.',
    },
  ],
};

