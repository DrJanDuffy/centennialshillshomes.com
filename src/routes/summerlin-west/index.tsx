import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import RealScoutOfficeListings from '../../components/realscout-office-listings';
import SEOStructuredData from '../../components/seo-structured-data';
import { pageSchemas } from '../../components/seo-structured-data';
import FAQSection, { realtorServiceFAQs } from '../../components/faq-section';

export default component$(() => {
  const summerlinWestSchema = pageSchemas.neighborhoodPage({
    name: "Summerlin West",
    slug: "summerlin-west",
    geo: {
      "@type": "GeoCoordinates",
      "latitude": 36.1699,
      "longitude": -115.1398
    }
  });

  return (
    <>
      <SEOStructuredData type="LocalBusiness" data={summerlinWestSchema} />

      <section class="hero-section">
        <div class="container container-center">
          <h1 class="hero-title">
            <span class="highlight">Summerlin West</span>
            <br />
            Premier Las Vegas Living
          </h1>
          <p class="hero-subtitle">
            Explore Summerlin West, one of Las Vegas' most desirable master-planned communities featuring 
            luxury homes, excellent schools, and world-class amenities. Dr. Jan Duffy specializes in 
            Summerlin West real estate with expertise in luxury properties and corporate relocations.
          </p>
        </div>
      </section>

      <section class="community-overview py-16">
        <div class="container container-center">
          <h2>About Summerlin West</h2>
          <p>
            Summerlin West is the premier section of the master-planned Summerlin community, offering 
            luxury homes, gated communities, and proximity to Red Rock Canyon. This area is known for 
            its upscale neighborhoods, excellent schools, and resort-style amenities. As the most 
            prestigious section of Summerlin, Summerlin West represents the pinnacle of Las Vegas 
            luxury living, attracting executives, professionals, and high-net-worth individuals 
            seeking the ultimate in residential quality and lifestyle.
          </p>
          <p>
            The area's development has been carefully planned to create cohesive, attractive neighborhoods 
            that blend luxury living with natural beauty. Summerlin West's proximity to Red Rock Canyon 
            National Conservation Area provides residents with stunning mountain views and direct access 
            to one of Las Vegas' premier natural attractions, creating a living environment that's 
            unique in the Las Vegas Valley.
          </p>
          <p>
            Summerlin West's reputation for quality, luxury, and lifestyle amenities has made it one of 
            Las Vegas' most desirable residential areas. The combination of luxury homes, world-class 
            amenities, excellent schools, and natural beauty creates a living experience that's 
            exceptional for a major metropolitan area.
          </p>

          <h2>Key Neighborhoods in Summerlin West</h2>
          <p>
            Summerlin West is home to several of Las Vegas' most prestigious and desirable neighborhoods, 
            each offering unique characteristics, amenities, and lifestyle benefits. Understanding these 
            neighborhoods helps buyers find communities that match their specific preferences and needs.
          </p>

          <h3>The Ridges</h3>
          <p>
            The Ridges is one of Las Vegas' most exclusive gated communities, featuring luxury estates, 
            private golf course access, and stunning Red Rock Canyon views. This gated community offers 
            residents privacy, security, and access to Bear's Best Las Vegas golf course, creating a 
            resort-like living experience.
          </p>
          <p>
            Properties in The Ridges typically range from $1 million to over $10 million, attracting 
            high-net-worth individuals, executives, and luxury homebuyers seeking the ultimate in Las 
            Vegas living. The community's exclusivity, amenities, and natural beauty make it one of the 
            most prestigious addresses in Las Vegas.
          </p>

          <h3>Red Rock Country Club</h3>
          <p>
            Red Rock Country Club is a premier golf course community featuring luxury homes, championship 
            golf, and resort-style amenities. The community's golf course, designed by renowned architects, 
            provides residents with world-class golfing opportunities and stunning course views.
          </p>
          <p>
            The community offers diverse housing options from luxury estates to move-up homes, with prices 
            ranging from $600K to $5M+. Golf course living provides residents with resort-style amenities, 
            social opportunities, and a lifestyle that combines luxury living with active recreation.
          </p>

          <h3>Providence</h3>
          <p>
            Providence is a master-planned community in Summerlin West featuring diverse housing options, 
            community amenities, and family-friendly neighborhoods. The community's thoughtful planning 
            creates cohesive neighborhoods with parks, trails, and amenities that support active, 
            family-oriented lifestyles.
          </p>
          <p>
            Properties in Providence range from move-up homes to luxury estates, providing options for 
            various budgets and preferences. The community's amenities, schools, and location make it 
            attractive to families, professionals, and those seeking quality homes in Summerlin West.
          </p>

          <h3>Tule Springs</h3>
          <p>
            Tule Springs is a newer development area in Summerlin West featuring new construction homes 
            with modern designs and contemporary features. The area's new construction provides buyers 
            with opportunities to purchase new homes with warranties, modern floor plans, and current 
            design trends.
          </p>
          <p>
            The area's development reflects Summerlin West's commitment to quality and thoughtful 
            planning, ensuring that new construction enhances the area's appeal and maintains the high 
            standards that define Summerlin West living.
          </p>

          <h3>Skye Canyon</h3>
          <p>
            Skye Canyon is a modern development in Summerlin West featuring contemporary homes, community 
            amenities, and innovative design. The community's modern approach to development creates 
            neighborhoods that appeal to today's buyers seeking contemporary homes with modern features.
          </p>
          <p>
            The community's amenities, location, and modern design make it attractive to professionals, 
            families, and those seeking contemporary homes in Summerlin West. Skye Canyon's development 
            reflects current trends in residential design and community planning.
          </p>

          <h2>Community Features and Amenities</h2>
          <p>
            Summerlin West offers comprehensive amenities and features that support luxury lifestyles, 
            active recreation, and family activities. These amenities enhance quality of life and 
            contribute to the area's desirability and property values.
          </p>

          <h3>Top-Rated Schools</h3>
          <p>
            Summerlin West is served by top-rated schools in the Clark County School District, providing 
            excellent educational opportunities for students from kindergarten through high school. These 
            schools consistently rank among the best in Clark County and Nevada, with strong academic 
            programs, comprehensive extracurricular activities, and high graduation and college acceptance 
            rates.
          </p>
          <p>
            School quality is a significant factor in Summerlin West's property values and desirability. 
            Homes in areas with top-rated schools command premium prices and maintain their value better 
            than homes in areas with lower-rated schools. This relationship between schools and property 
            values makes Summerlin West attractive to families who prioritize education alongside luxury living.
          </p>
          <p>
            Private school options are also available in Summerlin West, providing families with 
            additional educational choices. These schools offer alternative educational approaches and 
            specialized programs that may better match specific family needs and preferences.
          </p>

          <h3>Golf Courses and Country Clubs</h3>
          <p>
            Summerlin West features multiple golf courses and country clubs that provide world-class 
            golfing opportunities and resort-style amenities. These facilities include championship 
            courses designed by renowned architects, clubhouses with dining and social facilities, and 
            comprehensive amenities that support active, luxury lifestyles.
          </p>
          <p>
            Golf course living in Summerlin West provides residents with private access to championship 
            courses, preferred tee times, and resort-style amenities that enhance quality of life. This 
            access significantly enhances property values and makes Summerlin West particularly attractive 
            to golf enthusiasts and those seeking active, luxury lifestyles.
          </p>
          <p>
            Country clubs in Summerlin West offer members access to golf courses, dining, social activities, 
            and other amenities that create resort-like living experiences. These clubs provide opportunities 
            for social connections, recreation, and lifestyle enhancement that are rare in residential 
            communities.
          </p>

          <h3>Red Rock Canyon Access</h3>
          <p>
            Summerlin West's proximity to Red Rock Canyon National Conservation Area provides residents 
            with direct access to one of Las Vegas' premier natural attractions. This access offers 
            opportunities for hiking, rock climbing, scenic drives, and experiencing the natural beauty 
            of the Mojave Desert.
          </p>
          <p>
            Many homes in Summerlin West feature stunning views of Red Rock Canyon and the Spring Mountains, 
            creating a sense of connection to the natural landscape that's rare in urban environments. 
            These views enhance property values and provide residents with daily reminders of the area's 
            natural beauty.
          </p>
          <p>
            The area's extensive trail system connects Summerlin West neighborhoods to Red Rock Canyon, 
            providing safe routes for walking, jogging, and cycling that allow residents to enjoy the 
            outdoors while staying close to home. This connection to nature enhances quality of life 
            and makes Summerlin West attractive to those who value both luxury living and natural beauty.
          </p>

          <h3>Trail System and Parks</h3>
          <p>
            Summerlin West features an extensive trail system and numerous parks that provide opportunities 
            for recreation, exercise, and enjoying the outdoors. These trails connect neighborhoods, parks, 
            and amenities, creating a network that supports active lifestyles and outdoor recreation.
          </p>
          <p>
            The area's parks range from neighborhood pocket parks to large community parks with sports 
            facilities, playgrounds, and picnic areas. These parks provide safe, well-maintained spaces 
            for children to play, families to gather, and residents to exercise and enjoy the outdoors.
          </p>

          <h3>Premium Shopping and Dining</h3>
          <p>
            Summerlin West provides access to premium shopping and dining options, including Downtown 
            Summerlin and other upscale retail and dining destinations. These options provide residents 
            with convenient access to high-end retailers, fine dining restaurants, and entertainment 
            venues that support luxury lifestyles.
          </p>
          <p>
            The area's dining scene includes everything from casual family restaurants to fine dining 
            establishments featuring world-renowned chefs. Shopping options range from major department 
            stores to specialty boutiques, ensuring residents have access to the products and services 
            they need and want.
          </p>

          <h3>Medical Facilities and Corporate Headquarters</h3>
          <p>
            Summerlin West's proximity to medical facilities and corporate headquarters provides residents 
            with convenient access to healthcare and employment opportunities. This accessibility enhances 
            quality of life and makes Summerlin West attractive to professionals and executives who need 
            convenient access to work and healthcare.
          </p>
          <p>
            The area's location provides easy access to major medical centers, hospitals, and healthcare 
            facilities, ensuring residents have convenient access to quality healthcare. This accessibility 
            is particularly valuable for families and older adults who may need regular healthcare services.
          </p>

          <h2>Real Estate in Summerlin West</h2>
          <p>
            Summerlin West offers diverse housing options from luxury estates to move-up homes, with prices 
            ranging from $400K to $10M+. The area features new construction, custom homes, and established 
            neighborhoods with mature landscaping. This diversity ensures that Summerlin West has options 
            for various budgets, preferences, and needs.
          </p>

          <h3>Property Types and Price Ranges</h3>
          <p>
            Summerlin West's real estate market includes luxury estates, move-up homes, and new construction 
            that accommodate various needs and budgets. Luxury estates in communities like The Ridges and 
            Red Rock Country Club typically range from $1M to over $10M, attracting high-net-worth 
            individuals and executives seeking the ultimate in Las Vegas living.
          </p>
          <p>
            Move-up homes in Summerlin West typically range from $400K to $1M, providing options for 
            professionals and families seeking quality homes in prestigious communities. These homes offer 
            luxury features, excellent locations, and access to Summerlin West's amenities at more 
            accessible price points.
          </p>
          <p>
            New construction in Summerlin West provides opportunities to purchase new homes with warranties, 
            modern features, and current design trends. These homes typically feature contemporary floor 
            plans, energy-efficient features, and quality construction that appeals to today's buyers.
          </p>

          <h3>Market Performance</h3>
          <p>
            Summerlin West's real estate market has shown consistent appreciation over time, reflecting the 
            area's desirability and strong fundamentals. Properties in Summerlin West typically maintain 
            their value well and show appreciation even during broader market corrections, making Summerlin 
            West an attractive investment as well as a great place to live.
          </p>
          <p>
            The area's luxury market remains strong, with steady demand from high-net-worth individuals, 
            executives, and California equity buyers seeking the tax benefits and lifestyle that Nevada 
            offers. The community's reputation for quality, amenities, and natural beauty makes it a 
            sought-after destination for luxury homebuyers.
          </p>

          <h2>Why Choose Summerlin West</h2>
          <p>
            Summerlin West offers a unique combination of luxury, natural beauty, and lifestyle amenities 
            that's difficult to find in other Las Vegas communities. The area's prestigious neighborhoods, 
            world-class amenities, excellent schools, and proximity to Red Rock Canyon create a living 
            experience that's exceptional for a major metropolitan area.
          </p>

          <h3>Luxury Living at Its Finest</h3>
          <p>
            Summerlin West represents the pinnacle of luxury living in Las Vegas, offering residents 
            access to some of the city's most prestigious communities, world-class amenities, and 
            exceptional quality of life. The area's commitment to quality, from infrastructure to 
            landscaping to community services, is evident throughout Summerlin West and contributes to 
            residents' satisfaction and property values.
          </p>

          <h3>Investment Value</h3>
          <p>
            Properties in Summerlin West have demonstrated strong appreciation over time, making them 
            attractive investments as well as exceptional places to live. The area's exclusivity, 
            limited inventory in desirable areas, and strong fundamentals support property values and 
            make Summerlin West properties attractive for both primary residence buyers and real estate 
            investors.
          </p>

          <h3>Working with Dr. Jan Duffy</h3>
          <p>
            Dr. Jan Duffy specializes in Summerlin West real estate and other premier Las Vegas communities. 
            With 30+ years of research expertise and a Top 1% REALTOR® designation, Dr. Duffy provides 
            clients with comprehensive market knowledge, expert negotiation skills, and personalized service 
            that ensures successful transactions.
          </p>
          <p>
            Whether you're buying or selling in Summerlin West, Dr. Duffy's expertise in luxury properties, 
            California equity buyers, and corporate relocations makes her the ideal choice for your real 
            estate needs. Her understanding of Summerlin West's diverse neighborhoods, combined with her 
            commitment to client service, ensures that your experience in Summerlin West real estate will 
            be exceptional.
          </p>
        </div>
      </section>

      <section class="featured-properties-section bg-gray-50 py-16">
        <div class="container container-center">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">
              Summerlin West Homes for Sale
            </h2>
            <p class="text-lg text-gray-600 max-w-2xl mx-auto">
              Browse luxury homes in Summerlin West
            </p>
          </div>
          
          <RealScoutOfficeListings
            agentEncodedId="QWdlbnQtMjI1MDUw"
            sortOrder="NEWEST"
            listingStatus="For Sale"
            propertyTypes=",SFR"
            priceMin="400000"
            priceMax="10000000"
          />
        </div>
      </section>

      <FAQSection 
        faqs={realtorServiceFAQs}
        title="Frequently Asked Questions About Summerlin West Real Estate"
        className="bg-gray-50"
      />

      <section class="cta-section">
        <div class="container container-center">
          <h2>Interested in Summerlin West?</h2>
          <p>Contact Dr. Jan Duffy for expert guidance on Summerlin West real estate.</p>
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
  title: 'Summerlin West Las Vegas | Luxury Homes | Dr. Jan Duffy Real Estate',
  meta: [
    {
      name: 'description',
      content: 'Summerlin West luxury homes in Las Vegas. Premier master-planned community with excellent schools, golf courses, and Red Rock Canyon access. Dr. Jan Duffy specializes in Summerlin West real estate.',
    },
  ],
};

