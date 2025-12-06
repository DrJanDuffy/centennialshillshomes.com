import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import RealScoutOfficeListings from '../../components/realscout-office-listings';
import SEOStructuredData from '../../components/seo-structured-data';
import { pageSchemas } from '../../components/seo-structured-data';
import FAQSection, { realtorServiceFAQs } from '../../components/faq-section';

export default component$(() => {
  const summerlinSchema = pageSchemas.neighborhoodPage({
    name: "Summerlin",
    slug: "summerlin",
    geo: {
      "@type": "GeoCoordinates",
      "latitude": 36.1699,
      "longitude": -115.1398
    }
  });

  return (
    <>
      <SEOStructuredData type="LocalBusiness" data={summerlinSchema} />

      <section class="hero-section">
        <div class="container container-center">
          <h1 class="hero-title">
            <span class="highlight">Summerlin</span>
            <br />
            Las Vegas' Premier Master-Planned Community
          </h1>
          <p class="hero-subtitle">
            Explore Summerlin, Las Vegas' largest and most prestigious master-planned community featuring 
            luxury homes, world-class amenities, and exceptional quality of life. Dr. Jan Duffy specializes 
            in Summerlin real estate with expertise in luxury properties, California equity buyers, and 
            corporate relocations.
          </p>
        </div>
      </section>

      <section class="community-overview py-16">
        <div class="container container-center">
          <h2>About Summerlin</h2>
          <p>
            Summerlin is a 22,500-acre master-planned community in Las Vegas, developed by The Howard Hughes 
            Corporation. It's consistently ranked among the best places to live in America, offering residents 
            a sophisticated lifestyle with world-class amenities, excellent schools, and beautiful natural surroundings. 
            Since its inception in the 1990s, Summerlin has grown into one of the most prestigious and desirable 
            communities in the Las Vegas Valley, attracting families, professionals, and luxury homebuyers from 
            around the world.
          </p>
          <p>
            The community's master-planned design ensures thoughtful development that balances residential, 
            commercial, and recreational uses. This planning creates cohesive neighborhoods, convenient access 
            to amenities, and a quality of life that's rare in major metropolitan areas. Summerlin's commitment 
            to quality, from infrastructure to landscaping to community services, is evident throughout the 
            community and contributes to its reputation as a premier place to live.
          </p>
          <p>
            Summerlin's location in the western Las Vegas Valley provides residents with stunning views of the 
            Spring Mountains and Red Rock Canyon, while maintaining convenient access to the Las Vegas Strip, 
            McCarran International Airport, and major employment centers. This combination of natural beauty, 
            convenience, and quality amenities makes Summerlin one of the most sought-after communities in 
            Las Vegas.
          </p>

          <h2>Summerlin Areas and Neighborhoods</h2>
          <p>
            Summerlin is divided into distinct areas, each with its own character, amenities, and housing 
            options. Understanding these areas helps buyers find neighborhoods that match their lifestyle, 
            budget, and preferences.
          </p>

          <h3>Summerlin West</h3>
          <p>
            Summerlin West represents the pinnacle of luxury living in Summerlin, featuring exclusive gated 
            communities like The Ridges and Red Rock Country Club. This area offers luxury estates, golf course 
            living, and proximity to Red Rock Canyon National Conservation Area. Properties in Summerlin West 
            typically range from $1 million to over $10 million, attracting executives, professionals, and 
            luxury homebuyers seeking the ultimate in Las Vegas living.
          </p>
          <p>
            The area's luxury communities feature custom architecture, premium finishes, and extensive 
            amenities including private golf course access, clubhouses, and resort-style facilities. Summerlin 
            West's location provides stunning mountain views, privacy, and access to world-class recreational 
            opportunities while maintaining convenient access to employment centers and lifestyle amenities.
          </p>

          <h3>Summerlin South</h3>
          <p>
            Summerlin South features established neighborhoods and golf course communities that offer a balance 
            of luxury and value. This area includes well-established communities with mature landscaping, 
            proven property values, and access to multiple golf courses and country clubs. Properties in 
            Summerlin South typically range from $500K to $2M+, making it attractive to move-up buyers and 
            families seeking established communities.
          </p>
          <p>
            The area's established neighborhoods offer the benefits of mature communities, including proven 
            property values, established amenities, and well-maintained infrastructure. Golf course 
            communities provide resort-style living with access to championship courses, clubhouses, and 
            social activities that enhance quality of life.
          </p>

          <h3>Summerlin North</h3>
          <p>
            Summerlin North features newer developments and family communities that offer modern homes, 
            contemporary amenities, and family-friendly neighborhoods. This area attracts first-time buyers, 
            growing families, and professionals seeking quality homes in well-planned communities. Properties 
            in Summerlin North typically range from $400K to $1M+, providing options for various budgets and 
            needs.
          </p>
          <p>
            New construction in Summerlin North offers modern floor plans, energy-efficient features, and 
            contemporary designs that appeal to today's buyers. Family-friendly neighborhoods feature parks, 
            schools, and community amenities designed to support active lifestyles and family activities.
          </p>

          <h3>Downtown Summerlin</h3>
          <p>
            Downtown Summerlin serves as the urban core of the community, featuring shopping, dining, 
            entertainment, and employment centers. This mixed-use development provides residents with 
            convenient access to retail, restaurants, entertainment venues, and professional services. 
            Downtown Summerlin's walkable design and diverse offerings create a vibrant community hub that 
            enhances the Summerlin living experience.
          </p>
          <p>
            The area includes residential options ranging from condominiums to luxury townhomes, providing 
            urban living options within the master-planned community. Downtown Summerlin's location and 
            amenities make it attractive to professionals, empty nesters, and those seeking a more urban 
            lifestyle within Summerlin's master-planned environment.
          </p>

          <h2>Community Features and Amenities</h2>
          <p>
            Summerlin's extensive amenities and features set it apart from other Las Vegas communities, 
            providing residents with a quality of life that's exceptional for a major metropolitan area. 
            These amenities support active lifestyles, family activities, and social connections that 
            enhance the Summerlin living experience.
          </p>

          <h3>Parks and Trails</h3>
          <p>
            Summerlin features over 150 parks and 150+ miles of trails that provide opportunities for 
            recreation, exercise, and enjoying the outdoors. These parks range from neighborhood pocket 
            parks to large community parks with sports facilities, playgrounds, and picnic areas. The 
            extensive trail system connects neighborhoods, parks, and amenities, providing safe routes for 
            walking, jogging, and cycling throughout the community.
          </p>
          <p>
            The trail system includes both paved and natural surface trails that accommodate various 
            activities and fitness levels. Many trails provide access to Red Rock Canyon National 
            Conservation Area, connecting Summerlin residents directly to one of Las Vegas' premier natural 
            attractions. This extensive park and trail system supports active lifestyles and provides 
            opportunities for outdoor recreation that are rare in urban environments.
          </p>

          <h3>Golf Courses and Country Clubs</h3>
          <p>
            Summerlin features 10 golf courses and country clubs that provide world-class golfing 
            opportunities and resort-style amenities. These courses include championship designs by 
            renowned architects, offering diverse playing experiences from challenging championship courses 
            to more accessible recreational courses.
          </p>
          <p>
            Country clubs in Summerlin provide members with access to golf courses, clubhouses, dining, 
            social activities, and other amenities that enhance the luxury living experience. Many communities 
            in Summerlin offer golf course living, with homes positioned along fairways and providing 
            direct access to golf facilities. This golf course access significantly enhances property values 
            and makes Summerlin particularly attractive to golf enthusiasts.
          </p>

          <h3>Schools and Education</h3>
          <p>
            Summerlin is served by top-rated public and private schools that provide excellent educational 
            opportunities for students from kindergarten through high school. The area's schools consistently 
            rank among the best in Clark County and Nevada, with strong academic programs, comprehensive 
            extracurricular activities, and high graduation and college acceptance rates.
          </p>
          <p>
            Public schools in Summerlin are part of the Clark County School District, with many schools 
            receiving high ratings from GreatSchools.org and other educational rating services. Private 
            school options include prestigious institutions that offer alternative educational approaches and 
            specialized programs. This combination of excellent public and private schools makes Summerlin 
            particularly attractive to families who prioritize education.
          </p>
          <p>
            School quality is a significant factor in Summerlin's property values and desirability. Homes 
            in areas with top-rated schools command premium prices and maintain their value better than 
            homes in areas with lower-rated schools. This relationship between schools and property values 
            makes Summerlin an attractive investment for families and real estate investors.
          </p>

          <h3>Shopping and Dining</h3>
          <p>
            Downtown Summerlin provides extensive shopping and dining options, including major retailers, 
            specialty shops, restaurants, and entertainment venues. This mixed-use development creates a 
            vibrant community hub where residents can shop, dine, and socialize without leaving the community.
          </p>
          <p>
            The area's dining scene includes everything from casual family restaurants to fine dining 
            establishments, providing options for various occasions and preferences. Shopping options range 
            from major department stores to specialty boutiques, ensuring residents have access to the 
            products and services they need. This convenience enhances quality of life and reduces the need 
            to travel outside the community for shopping and dining.
          </p>

          <h3>Recreation and Natural Areas</h3>
          <p>
            Summerlin's proximity to Red Rock Canyon National Conservation Area provides residents with 
            access to one of Las Vegas' premier natural attractions. Red Rock Canyon offers hiking, rock 
            climbing, scenic drives, and opportunities to experience the natural beauty of the Mojave Desert. 
            This access to natural recreation enhances Summerlin's appeal and provides residents with 
            opportunities for outdoor activities that are rare in urban environments.
          </p>
          <p>
            Community centers and pools throughout Summerlin provide additional recreational opportunities 
            for residents. These facilities support active lifestyles, social connections, and family 
            activities that enhance the Summerlin living experience. The community's commitment to 
            recreation and wellness is evident in the quality and accessibility of these facilities.
          </p>

          <h2>Real Estate in Summerlin</h2>
          <p>
            Summerlin offers diverse housing options from entry-level homes to luxury estates, with prices 
            ranging from $300K to $15M+. The community features new construction, custom homes, and 
            established neighborhoods, making it attractive for first-time buyers, move-up families, and 
            luxury home buyers. This diversity ensures that Summerlin has options for various budgets, 
            lifestyles, and preferences.
          </p>

          <h3>Property Types and Price Ranges</h3>
          <p>
            Summerlin's housing market includes single-family homes, townhomes, condominiums, and luxury 
            estates that accommodate various needs and budgets. Entry-level homes in the $300K-$500K range 
            provide opportunities for first-time buyers, while move-up homes in the $500K-$1M range offer 
            options for growing families. Luxury properties above $1M provide the ultimate in Las Vegas 
            living for executives, professionals, and high-net-worth individuals.
          </p>
          <p>
            New construction provides modern homes with contemporary features, energy efficiency, and 
            current design trends. Custom homes allow buyers to work with builders to create their dream 
            homes, while established neighborhoods offer proven property values and mature landscaping. This 
            variety ensures that Summerlin has options for buyers at various stages of life and with 
            different preferences.
          </p>

          <h3>Market Performance</h3>
          <p>
            Summerlin's real estate market has shown consistent appreciation over time, reflecting the 
            community's desirability and strong fundamentals. Properties in Summerlin typically maintain 
            their value well and show appreciation even during broader market corrections, making Summerlin 
            an attractive investment as well as a great place to live.
          </p>
          <p>
            The community's master-planned design, extensive amenities, and excellent schools contribute to 
            strong property values and consistent demand. This demand, combined with limited inventory in 
            desirable areas, supports property values and makes Summerlin properties attractive investments 
            for both primary residence buyers and real estate investors.
          </p>

          <h2>Why Choose Summerlin</h2>
          <p>
            Summerlin offers a unique combination of quality, convenience, and lifestyle that's difficult 
            to find in other Las Vegas communities. The community's master-planned design, extensive 
            amenities, excellent schools, and natural beauty create a living experience that's exceptional 
            for a major metropolitan area.
          </p>

          <h3>Quality of Life</h3>
          <p>
            Summerlin's quality of life is supported by extensive amenities, excellent schools, and 
            thoughtful planning that creates cohesive, attractive neighborhoods. The community's commitment 
            to quality, from infrastructure to landscaping to community services, is evident throughout 
            Summerlin and contributes to residents' satisfaction and property values.
          </p>
          <p>
            The combination of natural beauty, convenient amenities, and quality infrastructure creates a 
            living environment that supports active lifestyles, family activities, and social connections. 
            This quality of life is a significant factor in Summerlin's desirability and property values, 
            making it an attractive choice for buyers seeking the best Las Vegas has to offer.
          </p>

          <h3>Investment Value</h3>
          <p>
            Summerlin properties have demonstrated strong appreciation over time, making them attractive 
            investments as well as exceptional places to live. The community's desirability, limited 
            inventory in desirable areas, and strong fundamentals support property values and make Summerlin 
            properties attractive for both primary residence buyers and real estate investors.
          </p>
          <p>
            The combination of quality, amenities, and location makes Summerlin properties particularly 
            attractive to high-net-worth individuals, executives, and investors seeking both lifestyle and 
            financial returns. The community's reputation and prestige ensure that properties maintain their 
            value and appeal over the long term.
          </p>

          <h3>Working with Dr. Jan Duffy</h3>
          <p>
            Dr. Jan Duffy specializes in Summerlin real estate and other premier Las Vegas communities. 
            With 30+ years of research expertise and a Top 1% REALTOR® designation, Dr. Duffy provides 
            clients with comprehensive market knowledge, expert negotiation skills, and personalized service 
            that ensures successful transactions.
          </p>
          <p>
            Whether you're buying or selling in Summerlin, Dr. Duffy's expertise in luxury properties, 
            California equity buyers, and corporate relocations makes her the ideal choice for your real 
            estate needs. Her understanding of Summerlin's diverse neighborhoods, combined with her 
            commitment to client service, ensures that your experience in Summerlin real estate will be 
            exceptional.
          </p>
        </div>
      </section>

      <section class="featured-properties-section bg-gray-50 py-16">
        <div class="container container-center">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">
              Summerlin Homes for Sale
            </h2>
            <p class="text-lg text-gray-600 max-w-2xl mx-auto">
              Browse luxury homes in Summerlin
            </p>
          </div>
          
          <RealScoutOfficeListings
            agentEncodedId="QWdlbnQtMjI1MDUw"
            sortOrder="NEWEST"
            listingStatus="For Sale"
            propertyTypes=",SFR"
            priceMin="300000"
            priceMax="15000000"
          />
        </div>
      </section>

      <FAQSection 
        faqs={realtorServiceFAQs}
        title="Frequently Asked Questions About Summerlin Real Estate"
        className="bg-gray-50"
      />

      <section class="cta-section">
        <div class="container container-center">
          <h2>Interested in Summerlin?</h2>
          <p>Contact Dr. Jan Duffy for expert guidance on Summerlin real estate.</p>
          <div class="cta-buttons">
            <a href="/contact" class="btn btn-primary">Contact Dr. Duffy</a>
            <a href="/properties" class="btn btn-secondary">View All Properties</a>
          </div>
        </div>
      </section>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Summerlin Las Vegas | Luxury Homes | Dr. Jan Duffy Real Estate',
  meta: [
    {
      name: 'description',
      content: 'Summerlin luxury homes in Las Vegas. Premier master-planned community with world-class amenities, golf courses, and excellent schools. Dr. Jan Duffy specializes in Summerlin real estate.',
    },
  ],
};

