import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import RealScoutOfficeListings from '../../components/realscout-office-listings';
import SEOStructuredData from '../../components/seo-structured-data';
import { pageSchemas } from '../../components/seo-structured-data';
import FAQSection, { realtorServiceFAQs } from '../../components/faq-section';

export default component$(() => {
  const virtualToursSchema = pageSchemas.servicePage({
    name: "Virtual Tours - Las Vegas Property Walkthroughs",
    description: "Explore Las Vegas properties through virtual tours with Dr. Janet Duffy. 360-degree walkthroughs, luxury showcases, and interactive property features.",
    slug: "virtual-tours",
    serviceType: "Property Tour Services"
  });

  return (
    <>
      <SEOStructuredData type="Service" data={virtualToursSchema} />

      {/* Hero Section */}
      <section class="hero-section">
        <div class="container container-center">
          <h1 class="hero-title">
            Virtual Tours - <span class="highlight">Las Vegas Property Walkthroughs</span>
          </h1>
          <p class="hero-subtitle">
            Explore Las Vegas properties through our comprehensive virtual tour collection featuring 360-degree walkthroughs, 
            detailed property photography, and interactive floor plans from anywhere in the world. Virtual tours provide 
            convenient access to property exploration, allowing buyers to experience homes remotely before scheduling in-person 
            visits.
          </p>
          <div class="hero-buttons">
            <a href="/properties" class="btn btn-primary">View All Properties</a>
            <a href="/contact" class="btn btn-secondary">Schedule Live Tour</a>
          </div>
        </div>
      </section>

      <section class="service-content py-16">
        <div class="container container-center">
          <h2>Immersive Property Experiences</h2>
          <p>
            Explore Las Vegas properties through our comprehensive virtual tour collection featuring 360-degree walkthroughs, 
            detailed property photography, and interactive floor plans. Our virtual tours allow you to experience Centennial 
            Hills homes, luxury estates, and investment properties from anywhere in the world with professional-quality 
            presentations. Virtual tours provide convenient access to property exploration, allowing buyers to experience 
            homes remotely before scheduling in-person visits.
          </p>
          <p>
            Virtual tour technology has revolutionized the real estate industry, enabling buyers to explore properties in 
            detail from any location. Our comprehensive virtual tour collection includes 360-degree walkthroughs that provide 
            immersive experiences, detailed property photography that showcases every room and feature, and interactive floor 
            plans that help buyers understand property layouts and flow. This technology creates opportunities for remote 
            property exploration that saves time and enables informed decision-making.
          </p>
          <p>
            Professional-quality virtual tours ensure that buyers receive accurate representations of properties, enabling 
            them to make informed decisions about which properties warrant in-person visits. Our virtual tours are created 
            using professional photography and technology that captures properties in their best light while providing honest, 
            detailed representations. This professional approach ensures that buyers can trust virtual tour representations 
            and make confident decisions.
          </p>

          <h3>360-Degree Walkthrough Technology</h3>
          <p>
            360-degree walkthrough technology provides immersive property experiences that allow buyers to explore every room 
            and space in detail. This technology creates virtual environments that closely replicate in-person property 
            visits, enabling buyers to experience properties as if they were physically present. The immersive nature of 
            360-degree tours helps buyers understand property layouts, room sizes, and spatial relationships that are 
            difficult to convey through traditional photography.
          </p>
          <p>
            Walkthrough features include the ability to navigate between rooms, zoom in on specific features, and explore 
            properties at your own pace. This interactive technology creates engaging property experiences that help buyers 
            visualize themselves living in properties. The convenience of 360-degree tours makes property exploration 
            accessible to buyers regardless of location or schedule constraints.
          </p>

          <h3>Detailed Property Photography</h3>
          <p>
            Detailed property photography in virtual tours showcases every room, feature, and detail that makes each property 
            unique. Professional photography ensures that properties are presented in their best light while providing honest, 
            accurate representations. This detailed photography helps buyers understand property conditions, finishes, and 
            features that may not be immediately apparent in standard listings.
          </p>
          <p>
            Photography features include high-resolution images, multiple angles, and detailed shots of special features 
            that help buyers understand property quality and appeal. Professional photography creates visual representations 
            that accurately convey property characteristics and help buyers make informed decisions. This detailed photography 
            enhances virtual tour experiences and supports informed property evaluation.
          </p>

          <h3>Interactive Floor Plans</h3>
          <p>
            Interactive floor plans in virtual tours help buyers understand property layouts, room relationships, and spatial 
            flow. These floor plans provide visual representations of property structures that help buyers visualize how they 
            would use and live in properties. Interactive features allow buyers to explore floor plans in detail and understand 
            property configurations.
          </p>
          <p>
            Floor plan features include room dimensions, layout visualization, and interactive elements that help buyers 
            understand property structures. These interactive floor plans create opportunities for buyers to explore properties 
            in detail and make informed decisions about property suitability. This floor plan technology enhances virtual tour 
            experiences and supports informed property evaluation.
          </p>

          <h2>Centennial Hills Virtual Tours</h2>
          <p>
            Take virtual tours of Centennial Hills properties including luxury homes, new construction, and established 
            neighborhoods. Our Centennial Hills virtual tours showcase the area's natural beauty, mountain views, and 
            community amenities while highlighting each property's unique features and architectural details. These virtual 
            tours provide convenient access to Centennial Hills property exploration, enabling buyers to experience homes 
            remotely before scheduling in-person visits.
          </p>
          <p>
            Centennial Hills virtual tours feature properties across various price ranges, from starter homes to luxury 
            estates, providing opportunities for diverse buyer segments to explore properties remotely. The tours showcase 
            the area's natural beauty, mountain views, and community amenities that make Centennial Hills attractive to buyers. 
            This comprehensive virtual tour coverage ensures that buyers can explore Centennial Hills properties conveniently 
            and efficiently.
          </p>
          <p>
            Virtual tours of Centennial Hills properties highlight unique features including mountain views, natural 
            landscaping, and community amenities that enhance quality of life. The tours provide detailed views of property 
            interiors, exteriors, and surrounding areas that help buyers understand property appeal and location benefits. 
            This comprehensive virtual tour coverage creates opportunities for remote property exploration that saves time and 
            enables informed decision-making.
          </p>

          <h3>Luxury Home Virtual Tours</h3>
          <p>
            Luxury home virtual tours in Centennial Hills showcase premium properties with detailed views of custom features, 
            high-end finishes, and resort-style amenities. These tours provide comprehensive views of luxury properties that 
            help buyers understand property quality and appeal. Luxury virtual tours highlight features that justify premium 
            pricing and attract discerning buyers.
          </p>
          <p>
            Tour features include detailed views of gourmet kitchens, spa-like bathrooms, outdoor living spaces, and special 
            amenities that make luxury properties distinctive. These comprehensive tours help buyers understand luxury 
            property value and appeal. This luxury tour coverage creates opportunities for remote exploration of premium 
            properties.
          </p>

          <h3>New Construction Virtual Tours</h3>
          <p>
            New construction virtual tours in Centennial Hills showcase modern homes with contemporary designs, energy-efficient 
            features, and current design trends. These tours help buyers visualize finished homes, understand layout options, 
            and make informed decisions about customization and upgrades. New construction tours provide opportunities to 
            explore modern homes remotely before they're completed.
          </p>
          <p>
            Tour features include model home walkthroughs, floor plan visualizations, and customization options that help 
            buyers understand new construction opportunities. These tours create opportunities for buyers to explore new 
            construction properties and make informed decisions about purchases. This new construction tour coverage enables 
            remote exploration of modern homes.
          </p>

          <h3>Established Neighborhood Tours</h3>
          <p>
            Established neighborhood virtual tours in Centennial Hills showcase mature communities with proven track records, 
            established amenities, and stable property values. These tours provide views of established properties that help 
            buyers understand neighborhood character and appeal. Established neighborhood tours highlight community features that 
            make these areas attractive to buyers.
          </p>
          <p>
            Tour features include neighborhood overviews, community amenities, and property views that help buyers understand 
            established neighborhood appeal. These tours create opportunities for buyers to explore established communities 
            remotely. This established neighborhood tour coverage enables convenient exploration of mature communities.
          </p>

          <h2>Luxury Property Showcases</h2>
          <p>
            Experience Las Vegas luxury properties through high-definition virtual tours featuring custom estates, premium 
            finishes, and resort-style amenities. Our luxury virtual tours provide detailed views of gourmet kitchens, master 
            suites, outdoor living spaces, and special features that make each property unique. These comprehensive tours help 
            buyers understand luxury property value and appeal, enabling informed decision-making about premium properties.
          </p>
          <p>
            Luxury property virtual tours showcase properties in Las Vegas' most exclusive communities including The Ridges, 
            Red Rock Country Club, and Summerlin West. These tours provide detailed views of luxury features including custom 
            architecture, premium finishes, and resort-style amenities that justify premium pricing. The comprehensive nature 
            of luxury virtual tours helps buyers understand property quality and make informed decisions about high-end 
            purchases.
          </p>
          <p>
            High-definition virtual tours ensure that luxury properties are presented with clarity and detail that accurately 
            represents property quality. Professional photography and technology create virtual experiences that closely replicate 
            in-person property visits, enabling buyers to evaluate luxury properties remotely. This technology creates 
            opportunities for remote exploration of premium properties that saves time and enables informed decision-making.
          </p>

          <h3>Custom Estate Virtual Tours</h3>
          <p>
            Custom estate virtual tours showcase luxury properties with unique features, custom architecture, and premium 
            finishes that create distinctive living experiences. These tours provide comprehensive views of custom estates that 
            help buyers understand property uniqueness and appeal. Custom estate tours highlight features that justify premium 
            pricing and attract discerning buyers.
          </p>
          <p>
            Tour features include detailed views of custom architecture, premium finishes, and special amenities that make 
            custom estates distinctive. These comprehensive tours help buyers understand custom estate value and appeal. This 
            custom estate tour coverage creates opportunities for remote exploration of unique luxury properties.
          </p>

          <h3>Golf Course Property Tours</h3>
          <p>
            Golf course property virtual tours showcase luxury homes with golf course access, course views, and resort-style 
            amenities. These tours provide detailed views of golf course properties that help buyers understand property appeal 
            and lifestyle benefits. Golf course property tours highlight features that make these properties attractive to golf 
            enthusiasts and luxury buyers.
          </p>
          <p>
            Tour features include golf course views, course access points, and resort-style amenities that enhance golf course 
            property appeal. These comprehensive tours help buyers understand golf course property value and lifestyle benefits. 
            This golf course property tour coverage creates opportunities for remote exploration of luxury golf course homes.
          </p>

          <h3>Mountain View Property Tours</h3>
          <p>
            Mountain view property virtual tours showcase luxury homes with stunning views of Red Rock Canyon, the Spring 
            Mountains, and surrounding natural beauty. These tours provide detailed views of mountain view properties that help 
            buyers understand property appeal and natural setting benefits. Mountain view property tours highlight views that 
            enhance property values and quality of life.
          </p>
          <p>
            Tour features include mountain views, natural setting views, and outdoor living spaces that take advantage of views. 
            These comprehensive tours help buyers understand mountain view property value and appeal. This mountain view property 
            tour coverage creates opportunities for remote exploration of luxury properties with natural views.
          </p>

          <h2>Investment Property Presentations</h2>
          <p>
            Review investment properties through virtual tours designed to highlight rental potential, renovation opportunities, 
            and market positioning. Our investment property tours include detailed analysis of property condition, layout 
            efficiency, and income potential to help investors make informed decisions. These comprehensive tours provide 
            investors with remote access to property evaluation that saves time and enables efficient investment analysis.
          </p>
          <p>
            Investment property virtual tours focus on features that affect investment returns including property condition, 
            layout efficiency, rental potential, and renovation opportunities. These tours provide detailed views that help 
            investors evaluate properties for investment potential. The comprehensive nature of investment property tours 
            enables remote property evaluation that supports efficient investment decision-making.
          </p>
          <p>
            Virtual tours of investment properties include detailed views of property conditions, layout efficiency, and 
            features that affect rental potential and investment returns. These tours help investors understand property 
            investment characteristics and make informed decisions about investment opportunities. This investment property tour 
            coverage creates opportunities for remote investment property evaluation.
          </p>

          <h3>Rental Property Analysis Tours</h3>
          <p>
            Rental property analysis virtual tours showcase properties with strong rental potential, highlighting features that 
            appeal to tenants and support rental income. These tours provide detailed views of property conditions, layouts, and 
            features that affect rental potential. Rental property tours help investors evaluate properties for rental income 
            potential and make informed investment decisions.
          </p>
          <p>
            Tour features include property condition views, layout efficiency analysis, and rental potential highlights that 
            help investors understand investment characteristics. These comprehensive tours enable remote evaluation of rental 
            properties that saves time and supports efficient investment analysis. This rental property tour coverage creates 
            opportunities for remote rental property evaluation.
          </p>

          <h3>Fix-and-Flip Property Tours</h3>
          <p>
            Fix-and-flip property virtual tours showcase properties with renovation potential, highlighting opportunities to 
            increase value through improvements. These tours provide detailed views of property conditions, renovation 
            opportunities, and value-add potential. Fix-and-flip property tours help investors evaluate properties for 
            renovation potential and estimate returns.
          </p>
          <p>
            Tour features include property condition analysis, renovation opportunity highlights, and value-add potential views 
            that help investors understand renovation opportunities. These comprehensive tours enable remote evaluation of 
            fix-and-flip properties that saves time and supports efficient investment analysis. This fix-and-flip property 
            tour coverage creates opportunities for remote renovation property evaluation.
          </p>

          <h3>Commercial Property Tours</h3>
          <p>
            Commercial property virtual tours showcase income-producing properties with business potential, highlighting features 
            that affect commercial value and income potential. These tours provide detailed views of commercial properties that 
            help investors evaluate properties for commercial investment potential. Commercial property tours help investors 
            understand commercial property characteristics and make informed investment decisions.
          </p>
          <p>
            Tour features include commercial space views, business potential analysis, and income potential highlights that 
            help investors understand commercial investment characteristics. These comprehensive tours enable remote evaluation 
            of commercial properties that saves time and supports efficient investment analysis. This commercial property tour 
            coverage creates opportunities for remote commercial property evaluation.
          </p>

          <h2>New Construction Virtual Tours</h2>
          <p>
            Explore new construction homes through virtual tours showcasing modern floor plans, contemporary designs, and builder 
            upgrades. Our new construction tours help you visualize finished homes, understand layout options, and make informed 
            decisions about customization and upgrades. These virtual tours provide convenient access to new construction 
            exploration, enabling buyers to experience modern homes remotely before they're completed.
          </p>
          <p>
            New construction virtual tours showcase model homes, floor plan visualizations, and customization options that help 
            buyers understand new construction opportunities. These tours provide detailed views of modern features, 
            energy-efficient designs, and contemporary layouts that appeal to today's buyers. The comprehensive nature of new 
            construction tours enables remote exploration of modern homes that saves time and enables informed decision-making.
          </p>
          <p>
            Virtual tours of new construction properties include model home walkthroughs, floor plan visualizations, and 
            customization option views that help buyers understand new construction opportunities. These tours create 
            opportunities for buyers to explore new construction properties remotely and make informed decisions about 
            purchases. This new construction tour coverage enables convenient exploration of modern homes.
          </p>

          <h3>Model Home Walkthroughs</h3>
          <p>
            Model home walkthrough virtual tours showcase finished new construction homes with all upgrades and features, 
            providing buyers with views of completed homes. These tours help buyers visualize finished homes and understand 
            how new construction properties will look when completed. Model home tours create opportunities for remote 
            exploration of new construction that saves time and enables informed decision-making.
          </p>
          <p>
            Tour features include completed home views, upgrade showcases, and feature highlights that help buyers understand 
            new construction quality and appeal. These comprehensive tours enable remote exploration of model homes that saves 
            time and supports informed new construction purchases. This model home tour coverage creates opportunities for 
            convenient new construction exploration.
          </p>

          <h3>Floor Plan Visualizations</h3>
          <p>
            Floor plan visualization virtual tours showcase new construction layouts, helping buyers understand room 
            relationships and spatial flow. These tours provide interactive floor plan views that help buyers visualize how 
            they would use and live in new construction properties. Floor plan visualizations create opportunities for remote 
            exploration of new construction layouts.
          </p>
          <p>
            Tour features include interactive floor plans, room relationship views, and spatial flow visualizations that help 
            buyers understand new construction layouts. These comprehensive tours enable remote exploration of floor plans that 
            saves time and supports informed new construction decisions. This floor plan visualization coverage creates 
            opportunities for convenient layout exploration.
          </p>

          <h3>Customization and Upgrade Options</h3>
          <p>
            Customization and upgrade option virtual tours showcase available options for new construction properties, helping 
            buyers understand customization opportunities. These tours provide views of upgrade options, finish selections, and 
            customization possibilities that help buyers make informed decisions about new construction purchases. 
            Customization tours create opportunities for remote exploration of new construction options.
          </p>
          <p>
            Tour features include upgrade showcases, finish option views, and customization possibility highlights that help 
            buyers understand new construction customization opportunities. These comprehensive tours enable remote exploration 
            of customization options that saves time and supports informed new construction decisions. This customization tour 
            coverage creates opportunities for convenient option exploration.
          </p>

          <h2>Interactive Property Features</h2>
          <p>
            Our virtual tours include interactive features such as clickable hotspots, detailed property information, 
            neighborhood maps, and market data. Experience properties in detail with the ability to explore specific rooms, 
            view property specifications, and access additional resources for informed decision-making. These interactive 
            features enhance virtual tour experiences and provide buyers with comprehensive property information.
          </p>
          <p>
            Interactive virtual tour features create engaging property experiences that help buyers explore properties in detail 
            and access comprehensive information. Clickable hotspots provide access to detailed information about specific 
            features, while neighborhood maps help buyers understand property locations and surrounding areas. Market data 
            integration provides buyers with property value information and market context that supports informed 
            decision-making.
          </p>
          <p>
            Interactive features enhance virtual tour experiences by providing buyers with tools to explore properties 
            thoroughly and access comprehensive information. These features create opportunities for detailed property 
            exploration that helps buyers make informed decisions. The interactive nature of virtual tours creates engaging 
            experiences that support informed property evaluation.
          </p>

          <h3>Clickable Hotspots and Information</h3>
          <p>
            Clickable hotspots in virtual tours provide access to detailed information about specific features, rooms, and 
            property characteristics. These interactive elements create engaging property experiences that help buyers explore 
            properties in detail and access comprehensive information. Hotspot features enable buyers to learn about specific 
            property aspects that interest them.
          </p>
          <p>
            Hotspot features include detailed information about property features, room descriptions, and special 
            characteristics that help buyers understand property appeal. These interactive elements create opportunities for 
            detailed property exploration that supports informed decision-making. This hotspot coverage enhances virtual tour 
            experiences and provides comprehensive property information.
          </p>

          <h3>Neighborhood Maps and Location Data</h3>
          <p>
            Neighborhood maps and location data in virtual tours help buyers understand property locations, surrounding areas, 
            and neighborhood characteristics. These interactive features provide context about property locations that helps 
            buyers evaluate properties comprehensively. Neighborhood maps create opportunities for buyers to understand property 
            locations and surrounding areas.
          </p>
          <p>
            Map features include neighborhood overviews, location context, and surrounding area information that helps buyers 
            understand property locations. These interactive features enable remote exploration of property locations that saves 
            time and supports informed decision-making. This neighborhood map coverage enhances virtual tour experiences and 
            provides location context.
          </p>

          <h3>Market Data Integration</h3>
          <p>
            Market data integration in virtual tours provides buyers with property value information, market context, and 
            comparable property data that supports informed decision-making. These interactive features help buyers understand 
            property values and market positioning. Market data integration creates opportunities for comprehensive property 
            evaluation that supports informed purchases.
          </p>
          <p>
            Data features include property value information, market trends, and comparable property data that helps buyers 
            understand property values and market context. These interactive features enable comprehensive property evaluation 
            that supports informed decision-making. This market data integration enhances virtual tour experiences and provides 
            value context.
          </p>
        </div>
      </section>

      {/* Featured Properties - Lead Generator */}
      <section class="featured-properties-section bg-gray-50 py-16">
        <div class="container container-center">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">
              Properties with Virtual Tours
            </h2>
            <p class="text-lg text-gray-600 max-w-2xl mx-auto">
              Browse our latest listings with professional virtual tours and 360-degree walkthroughs
            </p>
          </div>
          
          {/* RealScout Office Listings - Primary Lead Generator */}
          <RealScoutOfficeListings
            agentEncodedId="QWdlbnQtMjI1MDUw"
            sortOrder="NEWEST"
            listingStatus="For Sale"
            propertyTypes=",SFR"
            priceMin="500000"
            priceMax="2000000"
          />
          
          <div class="text-center mt-8">
            <a href="/properties" class="btn btn-primary btn-lg">
              View All Properties with Virtual Tours
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection 
        faqs={realtorServiceFAQs}
        title="Frequently Asked Questions About Virtual Tours"
        className="bg-gray-50"
      />
    </>
  );
});

export const head: DocumentHead = {
  title: 'Virtual Tours - Las Vegas Property Walkthroughs | Dr. Janet Duffy',
  meta: [
    {
      name: 'description',
      content: 'Explore Las Vegas properties through virtual tours with Dr. Janet Duffy. 360-degree walkthroughs, luxury showcases, and interactive property features.',
    },
  ],
};
