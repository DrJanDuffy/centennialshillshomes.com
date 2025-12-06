import { component$ } from '@builder.io/qwik';
import SEOStructuredData from './seo-structured-data';
import { pageSchemas } from './seo-structured-data';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQItem[];
  title?: string;
  className?: string;
}

/**
 * FAQ Section Component with Schema Markup
 * Displays FAQs with proper FAQPage structured data for SEO
 */
export default component$<FAQSectionProps>(({ faqs, title = "Frequently Asked Questions", className = "" }) => {
  // Generate FAQ schema data
  const faqSchema = pageSchemas.faqPage({ faqs });

  return (
    <section class={`faq-section py-12 ${className}`}>
      {/* FAQ Schema Markup */}
      <SEOStructuredData type="FAQPage" data={faqSchema} />
      
      <div class="container container-center">
        <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">
          {title}
        </h2>
        
        <div class="faq-list space-y-6 max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              class="faq-item bg-white rounded-lg shadow-md p-6 border border-gray-200"
              itemScope
              itemType="https://schema.org/Question"
            >
              <h3 
                class="text-xl font-semibold text-gray-900 mb-3"
                itemProp="name"
              >
                {faq.question}
              </h3>
              <div 
                class="text-gray-700 leading-relaxed"
                itemScope
                itemType="https://schema.org/Answer"
                itemProp="acceptedAnswer"
              >
                <p itemProp="text">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

/**
 * Pre-defined FAQ sets for different page types
 */
export const realtorServiceFAQs: FAQItem[] = [
  {
    question: "What areas does Dr. Jan Duffy serve in Las Vegas?",
    answer: "Dr. Jan Duffy specializes in Centennial Hills and northwest Las Vegas, including ZIP codes 89135, 89138, and 89144. She serves premier communities like Red Rock Country Club, The Ridges, Summerlin West, Lone Mountain, and North Las Vegas. Her expertise covers luxury homes, new construction, and investment properties throughout these areas."
  },
  {
    question: "What price range does Dr. Jan Duffy specialize in?",
    answer: "Dr. Jan Duffy specializes in luxury homes priced between $400K and $750K, though she has experience with properties ranging from starter homes to luxury estates. Her focus is on helping California equity buyers, corporate relocations, and luxury home investments in Las Vegas' most desirable neighborhoods."
  },
  {
    question: "How quickly can Dr. Jan Duffy schedule property showings?",
    answer: "Dr. Jan Duffy offers same-day showings for qualified buyers and is available 24/7 for executive clients and urgent inquiries. She understands that timing is critical in the Las Vegas real estate market and works flexibly to accommodate busy professionals, including evening and weekend appointments."
  },
  {
    question: "What services does Dr. Jan Duffy provide for sellers?",
    answer: "Dr. Jan Duffy provides comprehensive seller services including complimentary market analysis, professional property valuation, strategic pricing guidance, professional photography and staging recommendations, marketing and listing services, negotiation expertise, and transaction management. She uses her 30+ years of research expertise to provide data-driven insights for optimal pricing and timing."
  },
  {
    question: "Does Dr. Jan Duffy help California equity buyers?",
    answer: "Yes, Dr. Jan Duffy specializes in helping California equity buyers leverage their home equity to purchase luxury properties in Las Vegas. She understands the unique needs of California relocations, including tax benefits, equity calculations, and the transition process. She provides personalized guidance for buyers moving from California to Las Vegas."
  },
  {
    question: "What makes Dr. Jan Duffy a Top 1% REALTOR®?",
    answer: "Dr. Jan Duffy has achieved Top 1% REALTOR® status through exceptional sales volume, client satisfaction, and market expertise. With 30+ years of research experience and real estate expertise, she combines data-driven analysis with personalized service. Her track record includes $2.4M+ in sales volume and 150+ homes sold, demonstrating consistent excellence in the Las Vegas market."
  },
  {
    question: "Does Dr. Jan Duffy provide free market analysis?",
    answer: "Yes, Dr. Jan Duffy offers complimentary market analysis for both buyers and sellers. Her research background enables her to provide comprehensive data-driven insights including comparable property analysis, market trends, pricing strategies, and investment opportunities. This service helps clients make informed decisions about buying or selling in the Centennial Hills and Las Vegas market."
  },
  {
    question: "What neighborhoods does Dr. Jan Duffy know best?",
    answer: "Dr. Jan Duffy has deep expertise in Centennial Hills, Red Rock Country Club, The Ridges, Summerlin West, Lone Mountain, North Las Vegas, and northwest Las Vegas communities. She understands neighborhood dynamics, school districts, amenities, market trends, and property values in these premier areas, helping clients find the perfect location for their lifestyle."
  }
];

export const buyerServiceFAQs: FAQItem[] = [
  {
    question: "How do I get started buying a home in Centennial Hills?",
    answer: "Start by contacting Dr. Jan Duffy at (702) 903-1952 for a complimentary consultation. She'll discuss your needs, budget, timeline, and preferences. Dr. Duffy provides same-day showings, market analysis, and personalized guidance throughout the buying process. She specializes in luxury homes, California equity buyers, and corporate relocations in Centennial Hills and northwest Las Vegas."
  },
  {
    question: "What should first-time homebuyers know about Centennial Hills?",
    answer: "Centennial Hills offers excellent value for first-time buyers with new construction options, great schools, and family-friendly amenities. Dr. Jan Duffy provides first-time buyer guidance including financing options, down payment assistance programs, home inspection guidance, and neighborhood insights. ZIP codes 89135, 89138, and 89144 offer diverse housing options from starter homes to luxury properties."
  },
  {
    question: "Are there new construction homes available in Centennial Hills?",
    answer: "Yes, Centennial Hills has active new construction communities offering modern floor plans, energy-efficient features, and builder warranties. Dr. Jan Duffy specializes in new construction sales and can guide you through builder negotiations, design center selections, and construction timelines. She works with reputable builders in the area to find the perfect new home."
  },
  {
    question: "What financing options are available for luxury home buyers?",
    answer: "Dr. Jan Duffy works with trusted lenders to provide various financing options including conventional loans, jumbo loans for luxury properties, cash purchases, and specialized programs for California equity buyers. She helps clients understand loan options, interest rates, and down payment requirements to find the best financing solution for their situation."
  },
  {
    question: "How long does the home buying process take in Las Vegas?",
    answer: "The typical home buying process in Las Vegas takes 30-45 days from accepted offer to closing, though this can vary based on financing, inspections, and negotiations. Dr. Jan Duffy's expertise helps streamline the process, and she's available 24/7 to address questions and keep transactions on track. Same-day showings help buyers move quickly in competitive markets."
  }
];

export const sellerServiceFAQs: FAQItem[] = [
  {
    question: "How much is my Centennial Hills home worth?",
    answer: "Dr. Jan Duffy provides complimentary market analysis and property valuations using her 30+ years of research expertise. She analyzes comparable sales, current market conditions, property features, and neighborhood trends to provide accurate pricing guidance. This data-driven approach helps sellers maximize value while ensuring competitive pricing in the Las Vegas market."
  },
  {
    question: "What should I do to prepare my home for sale?",
    answer: "Dr. Jan Duffy provides comprehensive seller guidance including staging recommendations, professional photography, minor repairs and updates, decluttering and depersonalization, curb appeal improvements, and pricing strategy. Her research background helps identify which improvements provide the best return on investment for your specific property and market conditions."
  },
  {
    question: "How long will it take to sell my home in Centennial Hills?",
    answer: "Average days on market in Centennial Hills varies by price range and property type, typically 30-60 days for well-priced properties. Dr. Jan Duffy's strategic pricing, professional marketing, and market expertise help reduce time on market. She provides data-driven insights on market timing and pricing strategies to optimize your sale timeline."
  },
  {
    question: "What marketing does Dr. Jan Duffy provide for listings?",
    answer: "Dr. Jan Duffy provides comprehensive marketing including professional photography, virtual tours, MLS listing, online marketing across major real estate websites, social media promotion, open houses, targeted marketing to California equity buyers and corporate relocations, and networking with other agents. Her Top 1% REALTOR® status provides extensive reach in the Las Vegas market."
  },
  {
    question: "What are the closing costs for sellers in Las Vegas?",
    answer: "Typical seller closing costs in Las Vegas include real estate commissions, title insurance, escrow fees, transfer taxes, HOA transfer fees, and any negotiated repairs or credits. Dr. Jan Duffy provides transparent cost estimates and works to minimize expenses while maximizing your net proceeds. She explains all costs upfront so there are no surprises at closing."
  }
];

export const investmentServiceFAQs: FAQItem[] = [
  {
    question: "What investment opportunities exist in Centennial Hills?",
    answer: "Centennial Hills offers various investment opportunities including single-family rentals, new construction investments, fix-and-flip properties, and long-term appreciation potential. Dr. Jan Duffy provides investment analysis including cap rates, cash flow projections, market trends, and ROI calculations. She helps investors identify properties that align with their investment goals and risk tolerance."
  },
  {
    question: "Is Centennial Hills a good area for rental properties?",
    answer: "Yes, Centennial Hills is attractive for rental investments due to strong rental demand, good schools, family-friendly amenities, and proximity to employment centers. Dr. Jan Duffy provides rental market analysis including average rents, occupancy rates, tenant demographics, and property management resources. She helps investors evaluate rental potential and cash flow projections."
  },
  {
    question: "What should investors know about Las Vegas real estate?",
    answer: "Las Vegas offers strong investment potential with no state income tax, growing population, diverse economy, and relatively affordable property prices compared to California. Dr. Jan Duffy provides market insights including appreciation trends, rental yields, market cycles, and investment strategies. Her research background enables data-driven investment guidance for both local and out-of-state investors."
  }
];

export const californiaEquityBuyerFAQs: FAQItem[] = [
  {
    question: "How can I use my California home equity to buy in Las Vegas?",
    answer: "Dr. Jan Duffy specializes in helping California equity buyers leverage their home equity. She provides guidance on equity calculations, tax benefits of relocating to Nevada, financing options using California equity, and the transition process. Many California buyers use their equity as down payment or purchase luxury Las Vegas properties outright, taking advantage of Nevada's no state income tax."
  },
  {
    question: "What are the tax benefits of moving from California to Las Vegas?",
    answer: "Nevada offers significant tax advantages including no state income tax, no state inheritance tax, and lower property taxes compared to California. Dr. Jan Duffy helps California equity buyers understand these benefits and how they can maximize savings. Many California buyers find they can purchase more home in Las Vegas while reducing their overall tax burden."
  },
  {
    question: "Can I buy a Las Vegas home before selling my California property?",
    answer: "Yes, Dr. Jan Duffy helps California equity buyers navigate bridge financing, contingent offers, and timing strategies. She works with lenders who understand California equity situations and can structure transactions that allow buyers to purchase in Las Vegas while managing their California property sale. Same-day showings help California buyers efficiently view properties during visits."
  },
  {
    question: "What should California buyers know about Centennial Hills?",
    answer: "Centennial Hills offers California buyers excellent value with luxury homes at significantly lower prices than California markets. The area features new construction, great schools, family amenities, and proximity to Red Rock Canyon. Dr. Jan Duffy provides neighborhood tours, school information, and lifestyle insights to help California buyers find communities that match their preferences and budget."
  }
];

export const corporateRelocationFAQs: FAQItem[] = [
  {
    question: "Does Dr. Jan Duffy help with corporate relocations?",
    answer: "Yes, Dr. Jan Duffy specializes in corporate relocations for executives and professionals moving to Las Vegas. She provides services including area orientation, neighborhood matching, school district information, temporary housing assistance, and expedited showings. Available 24/7 for executive clients, she understands the urgency and specific needs of corporate relocations."
  },
  {
    question: "What neighborhoods are best for corporate relocations?",
    answer: "Centennial Hills, Summerlin West, and northwest Las Vegas are popular for corporate relocations due to excellent schools, family amenities, proximity to employment centers, and luxury housing options. Dr. Jan Duffy provides neighborhood tours and insights to help relocating professionals find communities that match their lifestyle, commute needs, and family requirements."
  },
  {
    question: "How quickly can corporate relocations be completed?",
    answer: "Dr. Jan Duffy understands corporate relocation timelines and provides expedited services including same-day showings, fast-track transactions, and 24/7 availability for executive clients. She works with relocation companies and corporate HR departments to streamline the process, ensuring smooth transitions for relocating professionals and their families."
  }
];

