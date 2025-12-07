import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import CommuteWidget from '../../components/commute-widget';
import RealScoutOfficeListings from '../../components/realscout-office-listings';
import SEOStructuredData from '../../components/seo-structured-data';
import { pageSchemas } from '../../components/seo-structured-data';
import FAQSection, { realtorServiceFAQs } from '../../components/faq-section';

export default component$(() => {
  const redRockSchema = pageSchemas.servicePage({
    name: "Red Rock Country Club Real Estate - Luxury Living with Championship Golf",
    description: "Discover Red Rock Country Club, Las Vegas' premier gated golf community with championship golf, luxury amenities, and custom homes.",
    slug: "red-rock-country-club",
    serviceType: "Luxury Golf Community Services"
  });

  return (
    <>
      <SEOStructuredData type="Service" data={redRockSchema} />

      {/* Hero Section */}
      <section class="hero-section">
        <div class="container container-center">
          <h1 class="hero-title">
            <span class="highlight">Red Rock Country Club</span>
            <br />
            Luxury Living with Championship Golf
          </h1>
          <p class="hero-subtitle">
            Experience exclusive gated community living with world-class golf, stunning mountain views, and resort-style amenities. 
            Red Rock Country Club represents the pinnacle of Las Vegas luxury living, combining championship golf, custom homes, 
            and an exclusive lifestyle that appeals to discerning buyers seeking the ultimate in privacy and sophistication.
          </p>
          <div class="hero-buttons">
            <a href="/contact" class="btn btn-primary">Find Red Rock Homes</a>
            <a href="/luxury-estates" class="btn btn-secondary">Luxury Estates</a>
          </div>
        </div>
      </section>

      {/* Featured Red Rock Properties - Lead Generator */}
      <section class="featured-properties-section bg-gray-50 py-16">
        <div class="container container-center">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">
              Available Red Rock Country Club Homes
            </h2>
            <p class="text-lg text-gray-600 max-w-2xl mx-auto">
              Browse current Red Rock Country Club properties for sale in this exclusive golf community
            </p>
          </div>
          
          {/* RealScout Office Listings - Primary Lead Generator */}
          <RealScoutOfficeListings
            agentEncodedId="QWdlbnQtMjI1MDUw"
            sortOrder="NEWEST"
            listingStatus="For Sale"
            propertyTypes=",SFR"
            priceMin="800000"
            priceMax="3000000"
          />
          
          <div class="text-center mt-8">
            <a href="/contact" class="btn btn-primary btn-lg">
              Schedule Private Red Rock Tour
            </a>
          </div>
        </div>
      </section>

      {/* Community Overview */}
      <section class="community-overview py-16">
        <div class="container container-center">
          <h2>About Red Rock Country Club</h2>
          <p>
            Red Rock Country Club is Las Vegas' premier gated golf community, offering residents an exclusive lifestyle 
            with championship golf, luxury amenities, and breathtaking mountain views. This prestigious community features 
            custom homes and resort-style living that creates a distinctive residential experience. The community's 
            commitment to luxury, privacy, and quality ensures that properties maintain their value and appeal to 
            discerning buyers seeking the ultimate in Las Vegas living.
          </p>
          <p>
            The community's gated entrance and private security provide residents with enhanced privacy and peace of mind 
            that's essential for luxury living. Red Rock Country Club's controlled access ensures that only residents and 
            authorized visitors enter the community, creating a secure environment that supports privacy and exclusivity. 
            This security feature is particularly valuable for high-profile residents and those seeking maximum privacy.
          </p>
          <p>
            Red Rock Country Club's location in Summerlin West provides residents with stunning views of Red Rock Canyon 
            and the Spring Mountains, creating a sense of connection to Las Vegas' natural beauty. The community's 
            proximity to Red Rock Canyon National Conservation Area offers residents direct access to one of Las Vegas' 
            premier natural attractions, enhancing the luxury living experience with opportunities for outdoor recreation 
            and natural beauty.
          </p>

          <h3>Exclusive Features</h3>
          <p>
            Red Rock Country Club offers exclusive features that set it apart from other Las Vegas communities. The 
            community's championship golf course, designed by Arnold Palmer, provides residents with world-class golfing 
            opportunities and stunning course views. The gated community with 24/7 security ensures privacy and peace of 
            mind, while luxury custom homes with mountain and golf course views create distinctive living environments.
          </p>
          <p>
            Resort-style amenities including spa and fitness center, fine dining restaurants, and social events create 
            opportunities for recreation, relaxation, and community interaction. The community's close proximity to Red Rock 
            Canyon National Conservation Area provides residents with access to hiking, rock climbing, and natural beauty 
            that enhances quality of life. These exclusive features combine to create a luxury living experience that's 
            exceptional for a major metropolitan area.
          </p>

          <h3>Community Character and Lifestyle</h3>
          <p>
            Red Rock Country Club's community character reflects its commitment to luxury living, privacy, and 
            sophisticated lifestyle. The community attracts discerning buyers who value exclusivity, quality, and attention 
            to detail that sets luxury communities apart. This exclusive character creates a distinctive residential 
            experience that appeals to buyers seeking homes that reflect their success and lifestyle.
          </p>
          <p>
            The community's lifestyle amenities including golf, spa, fitness, and dining create opportunities for 
            recreation, relaxation, and social interaction. These amenities support active, luxury lifestyles and create 
            connections among residents who share similar values and interests. This community character enhances quality of 
            life and creates value for residents.
          </p>

          <h3>Natural Setting and Views</h3>
          <p>
            Red Rock Country Club's natural setting provides residents with stunning views of Red Rock Canyon and the 
            Spring Mountains that enhance the luxury living experience. Many properties feature views of the conservation 
            area, creating a sense of connection to Las Vegas' natural beauty. These views enhance property values and 
            provide residents with daily reminders of the area's spectacular natural setting.
          </p>
          <p>
            The community's proximity to Red Rock Canyon National Conservation Area provides residents with direct access 
            to hiking, rock climbing, scenic drives, and opportunities to experience the natural beauty of the Mojave Desert. 
            This access to natural recreation enhances quality of life and makes Red Rock Country Club attractive to outdoor 
            enthusiasts and nature lovers seeking luxury living with natural beauty.
          </p>

          <h2>Championship Golf and Golf Course Living</h2>
          <p>
            Red Rock Country Club features a championship 18-hole golf course designed by Arnold Palmer, providing residents 
            with world-class golfing opportunities and stunning course views. Golf course living in Red Rock Country Club 
            offers residents private access to championship golf, preferred tee times, and resort-style amenities that 
            enhance quality of life. This golf course access significantly enhances property values and makes Red Rock 
            Country Club particularly attractive to golf enthusiasts and those seeking active, luxury lifestyles.
          </p>
          <p>
            The Arnold Palmer-designed golf course features challenging holes, stunning mountain views, and course conditions 
            that rival the best courses in the country. Golf course properties in Red Rock Country Club provide residents 
            with direct access to fairways, creating opportunities to enjoy golf from their homes. This golf course access 
            creates a distinctive living experience that appeals to golf enthusiasts and luxury buyers seeking resort-style 
            living.
          </p>
          <p>
            Golf course living in Red Rock Country Club includes access to clubhouse facilities, dining, social events, 
            and golf instruction that enhance the luxury living experience. The community's golf amenities create 
            opportunities for recreation, social interaction, and lifestyle enhancement that are rare in residential 
            communities. This comprehensive golf experience makes Red Rock Country Club attractive to golf enthusiasts and 
            those seeking active, luxury lifestyles.
          </p>

          <h3>Arnold Palmer Championship Course</h3>
          <p>
            The Arnold Palmer-designed championship course at Red Rock Country Club features challenging holes, stunning 
            mountain views, and course conditions that rival the best courses in the country. The course design 
            incorporates natural desert landscapes, elevation changes, and strategic challenges that create an exceptional 
            golfing experience. This championship course provides residents with world-class golfing opportunities that 
            enhance quality of life and property values.
          </p>
          <p>
            Course features include well-maintained fairways, challenging greens, and stunning views of Red Rock Canyon 
            that create a distinctive golfing experience. The course's design and maintenance ensure that residents enjoy 
            exceptional golfing conditions year-round. This championship course quality makes Red Rock Country Club 
            attractive to golf enthusiasts seeking world-class golfing opportunities.
          </p>

          <h3>Golf Course Property Benefits</h3>
          <p>
            Golf course properties in Red Rock Country Club provide residents with direct access to fairways, creating 
            opportunities to enjoy golf from their homes. These properties typically command premium prices due to their 
            golf course locations and views. Golf course living offers residents private access to championship golf, 
            preferred tee times, and resort-style amenities that enhance quality of life.
          </p>
          <p>
            Property benefits include stunning course views, direct golf course access, and enhanced privacy that create 
            distinctive living environments. Golf course properties typically maintain their value well and show appreciation 
            due to their unique locations and access. This golf course property benefit makes Red Rock Country Club 
            attractive to buyers seeking properties with strong investment fundamentals.
          </p>

          <h3>Golf Community Lifestyle</h3>
          <p>
            Golf community lifestyle in Red Rock Country Club includes access to clubhouse facilities, dining, social 
            events, and golf instruction that enhance the luxury living experience. The community's golf amenities create 
            opportunities for recreation, social interaction, and lifestyle enhancement that are rare in residential 
            communities. This comprehensive golf experience makes Red Rock Country Club attractive to golf enthusiasts and 
            those seeking active, luxury lifestyles.
          </p>
          <p>
            Lifestyle benefits include golf course access, clubhouse amenities, and social opportunities that create 
            connections among residents who share similar interests. The community's golf amenities support active, luxury 
            lifestyles and create value for residents. This golf community lifestyle makes Red Rock Country Club attractive 
            to buyers seeking resort-style living with golf course access.
          </p>

          <h2>Luxury Amenities</h2>
          <p>
            Red Rock Country Club features comprehensive luxury amenities including championship golf, clubhouse facilities, 
            spa and fitness center, tennis courts, swimming pool, and 24/7 security. These amenities create a resort-style 
            living experience that enhances quality of life and property values. The community's commitment to luxury 
            amenities ensures that residents enjoy exceptional facilities and services that support active, sophisticated 
            lifestyles.
          </p>
          <p>
            The clubhouse serves as the social hub of the community, featuring fine dining restaurants, event spaces, and 
            gathering areas that create opportunities for social interaction and community engagement. The spa and fitness 
            center provide residents with opportunities for relaxation, wellness, and fitness that enhance quality of life. 
            These comprehensive amenities create a luxury living experience that's exceptional for a residential community.
          </p>
          <p>
            Tennis courts, swimming pool, and other recreational facilities provide residents with opportunities for active 
            recreation and family activities. The community's 24/7 security ensures privacy and peace of mind, while 
            concierge services provide residents with convenient access to various services and amenities. These luxury 
            amenities combine to create a comprehensive living experience that appeals to discerning buyers.
          </p>

          <h3>Championship Golf</h3>
          <p>
            Championship golf at Red Rock Country Club features an Arnold Palmer-designed 18-hole course with stunning 
            mountain views and challenging play. The course provides residents with world-class golfing opportunities that 
            enhance quality of life and property values. Golf course access significantly enhances property values and makes 
            Red Rock Country Club particularly attractive to golf enthusiasts.
          </p>
          <p>
            Golf amenities include preferred tee times, golf instruction, and clubhouse facilities that support active golf 
            lifestyles. The course's championship quality and stunning views create a distinctive golfing experience that 
            appeals to golf enthusiasts. This championship golf amenity creates value for residents and supports property 
            values.
          </p>

          <h3>Clubhouse</h3>
          <p>
            The luxurious clubhouse at Red Rock Country Club serves as the social hub of the community, featuring fine 
            dining restaurants, event spaces, and gathering areas. The clubhouse creates opportunities for social 
            interaction, community engagement, and sophisticated entertaining. This clubhouse amenity enhances quality of life 
            and creates value for residents.
          </p>
          <p>
            Clubhouse features include fine dining restaurants, event spaces, and gathering areas that support social 
            interaction and community engagement. The clubhouse's luxurious facilities create opportunities for 
            sophisticated entertaining and social connections. This clubhouse amenity makes Red Rock Country Club attractive 
            to buyers seeking resort-style living with comprehensive amenities.
          </p>

          <h3>Spa & Fitness</h3>
          <p>
            The full-service spa and state-of-the-art fitness center at Red Rock Country Club provide residents with 
            opportunities for relaxation, wellness, and fitness. The spa offers various treatments and services that enhance 
            wellness and quality of life. The fitness center features modern equipment and facilities that support active, 
            healthy lifestyles.
          </p>
          <p>
            Spa and fitness amenities include various treatments, modern equipment, and professional services that enhance 
            wellness and quality of life. These amenities create opportunities for relaxation, fitness, and wellness that 
            support active, luxury lifestyles. This spa and fitness amenity creates value for residents and enhances quality 
            of life.
          </p>

          <h3>Tennis Courts</h3>
          <p>
            Professional tennis courts at Red Rock Country Club provide residents with opportunities for active recreation 
            and competitive play. The courts feature professional surfaces and facilities that support tennis enthusiasts. 
            Tennis instruction is available for residents seeking to improve their game or learn the sport.
          </p>
          <p>
            Tennis amenities include professional courts, instruction, and facilities that support active tennis lifestyles. 
            The courts create opportunities for recreation, competition, and social interaction. This tennis amenity enhances 
            quality of life and creates value for residents who enjoy tennis and active recreation.
          </p>

          <h3>Swimming Pool</h3>
          <p>
            The resort-style pool at Red Rock Country Club features cabanas and poolside service that create a luxury pool 
            experience. The pool provides residents with opportunities for relaxation, recreation, and family activities. 
            Poolside service and cabanas enhance the luxury pool experience and create value for residents.
          </p>
          <p>
            Pool amenities include resort-style facilities, cabanas, and poolside service that create a luxury pool 
            experience. The pool creates opportunities for relaxation, recreation, and family activities. This swimming pool 
            amenity enhances quality of life and creates value for residents seeking resort-style living.
          </p>

          <h3>Security</h3>
          <p>
            24/7 gated security and concierge services at Red Rock Country Club ensure privacy and peace of mind for 
            residents. The community's controlled access and security measures create a secure environment that supports 
            privacy and exclusivity. Concierge services provide residents with convenient access to various services and 
            amenities.
          </p>
          <p>
            Security features include gated access, 24/7 security, and concierge services that ensure privacy and 
            convenience. The community's security measures create a secure environment that supports luxury living. This 
            security amenity creates value for residents and enhances quality of life.
          </p>

          <h2>Luxury Custom Homes</h2>
          <p>
            Red Rock Country Club features luxury custom homes with mountain and golf course views that create distinctive 
            living environments. Properties in the community typically range from $800,000 to over $3 million, reflecting 
            the community's exclusive character, luxury features, and premium location. Custom architecture and premium 
            finishes ensure that each property is unique and reflects its owner's lifestyle and preferences.
          </p>
          <p>
            Custom homes in Red Rock Country Club feature unique floor plans, premium finishes, and architectural details 
            that reflect luxury living and attention to detail. Many homes include gourmet kitchens, spa-like bathrooms, 
            outdoor living spaces, and smart home technology that create sophisticated living environments. This custom 
            approach ensures that each property is unique and appeals to discerning buyers.
          </p>
          <p>
            Property features include mountain views, golf course views, and natural landscaping that enhance the luxury 
            living experience. Many properties feature outdoor living spaces with pools, fire features, and entertainment 
            areas that create resort-style environments. These property features combine to create distinctive living 
            experiences that appeal to luxury buyers.
          </p>

          <h3>Custom Architecture and Design</h3>
          <p>
            Custom architecture and design in Red Rock Country Club homes reflect individual buyer preferences and 
            sophisticated design that creates distinctive properties. Many homes feature unique floor plans, custom finishes, 
            and architectural details that reflect luxury living and attention to detail. This custom approach ensures that 
            each property is unique and reflects its owner's lifestyle and preferences.
          </p>
          <p>
            Architectural features include custom designs, premium materials, and attention to detail that create 
            sophisticated living environments. The community's custom architecture ensures that properties maintain their 
            appeal and value. This custom architecture creates value for buyers seeking unique properties that reflect their 
            preferences.
          </p>

          <h3>Premium Finishes and Features</h3>
          <p>
            Premium finishes and features in Red Rock Country Club homes include high-end materials, designer fixtures, 
            and luxury details that create sophisticated living environments. Many homes feature gourmet kitchens, spa-like 
            bathrooms, outdoor living spaces, and smart home technology that support luxury lifestyles. This attention to 
            detail ensures that every aspect of the home reflects quality and sophistication.
          </p>
          <p>
            Home features include gourmet kitchens, spa-like bathrooms, outdoor living spaces, and smart home technology 
            that create sophisticated living environments. These premium features appeal to buyers seeking luxury homes with 
            modern amenities. This premium finish approach creates value for buyers and supports property values.
          </p>

          <h3>Mountain and Golf Course Views</h3>
          <p>
            Mountain and golf course views in Red Rock Country Club properties enhance the luxury living experience and 
            create distinctive living environments. Many properties feature views of Red Rock Canyon, the Spring Mountains, 
            and golf course fairways that create a sense of connection to natural beauty. These views enhance property 
            values and provide residents with daily reminders of the area's spectacular setting.
          </p>
          <p>
            View features include mountain views, golf course views, and natural landscapes that enhance property values and 
            quality of life. Properties with premium views typically command higher prices and maintain their value well. 
            This view benefit creates value for buyers and supports property appreciation.
          </p>

          <h2>Investment and Property Values</h2>
          <p>
            Red Rock Country Club properties have demonstrated strong appreciation and resale values due to the community's 
            exclusive location, luxury features, and limited inventory. The gated community's reputation for quality and 
            privacy makes it attractive to both owner-occupants and investors seeking stable returns in Las Vegas' luxury 
            real estate market. This investment potential, combined with lifestyle benefits, makes Red Rock Country Club 
            attractive to diverse buyer segments.
          </p>
          <p>
            Property appreciation in Red Rock Country Club reflects the community's exclusive character, luxury features, 
            and desirable location that create strong demand for properties. The limited inventory of custom estates ensures 
            that properties remain in demand, supporting property values and appreciation potential. This combination of 
            exclusivity and demand creates investment opportunities for buyers seeking luxury properties with strong 
            appreciation potential.
          </p>
          <p>
            Resale values in Red Rock Country Club benefit from the community's reputation for quality, privacy, and luxury 
            living that attracts discerning buyers. Properties in the community typically maintain their value and appeal due 
            to the community's exclusive character and premium amenities. This resale value potential makes Red Rock Country 
            Club attractive to buyers seeking luxury properties that maintain their investment value.
          </p>

          <h3>Property Appreciation Trends</h3>
          <p>
            Property appreciation trends in Red Rock Country Club reflect the community's exclusive character, luxury 
            features, and desirable location that create strong demand. Properties in the community have demonstrated 
            consistent appreciation due to limited inventory, quality construction, and exclusive amenities that attract 
            luxury buyers. This appreciation trend supports investment potential and makes Red Rock Country Club attractive 
            to buyers seeking properties with strong value growth.
          </p>
          <p>
            The community's limited inventory of custom estates ensures that properties remain in demand, supporting 
            appreciation potential. The combination of exclusivity, quality, and desirable location creates conditions that 
            support property values and appreciation. Understanding these appreciation trends helps buyers evaluate investment 
            potential and long-term value.
          </p>

          <h3>Resale Market Performance</h3>
          <p>
            Resale market performance in Red Rock Country Club benefits from the community's reputation for quality, 
            privacy, and luxury living that attracts discerning buyers. Properties in the community typically sell quickly 
            and at premium prices due to the community's exclusive character and premium amenities. This resale performance 
            supports property values and makes Red Rock Country Club attractive to buyers seeking luxury properties with 
            strong resale potential.
          </p>
          <p>
            The community's gated security, custom homes, and resort-style amenities create properties that appeal to luxury 
            buyers seeking exclusive living. This appeal supports resale values and ensures that properties maintain their 
            investment value. Understanding resale market performance helps buyers evaluate properties and make informed 
            investment decisions.
          </p>

          <h3>Investment Fundamentals</h3>
          <p>
            Investment fundamentals in Red Rock Country Club reflect the community's exclusive character, luxury features, 
            and strong demand that support property values. The community's limited inventory, quality construction, and 
            premium amenities create properties that appeal to luxury buyers and support investment returns. This investment 
            potential makes Red Rock Country Club attractive to buyers seeking luxury properties with strong fundamentals.
          </p>
          <p>
            The combination of exclusivity, quality, and desirable location creates investment opportunities for buyers 
            seeking luxury properties with strong fundamentals. Properties in Red Rock Country Club offer lifestyle benefits 
            and investment potential that appeal to both owner-occupants and investors. Understanding investment fundamentals 
            helps buyers evaluate properties and make informed investment decisions.
          </p>

          <h2>Commute from Red Rock Country Club</h2>
          <p>
            Red Rock Country Club's location in Summerlin West provides convenient access to Las Vegas attractions while 
            maintaining privacy and exclusivity. The community's proximity to major highways enables easy commuting to 
            employment centers throughout the Las Vegas valley. Commute times to popular destinations are reasonable, making 
            Red Rock Country Club attractive to professionals and executives who need convenient access to work while 
            enjoying luxury living.
          </p>
          <p>
            The community's location provides access to downtown Las Vegas, the Strip, and major employment centers while 
            maintaining a private, residential atmosphere. This balanced location creates value for residents seeking luxury 
            living with urban accessibility. The combination of privacy and accessibility makes Red Rock Country Club 
            attractive to buyers seeking exclusive living without isolation.
          </p>
          <p>
            Proximity to Red Rock Canyon National Conservation Area provides residents with direct access to hiking, rock 
            climbing, and natural beauty that enhances quality of life. The community's location enables residents to enjoy 
            luxury living while accessing natural recreation and urban amenities. This balanced location creates value for 
            residents and supports quality of life.
          </p>

          <h3>Popular Destinations from Red Rock Country Club</h3>
          <p>
            Popular destinations from Red Rock Country Club include the Las Vegas Strip (15-25 minutes), downtown Las Vegas 
            (20-30 minutes), McCarran Airport (25-40 minutes), Red Rock Canyon (5-10 minutes), Summerlin (10-15 minutes), 
            and Centennial Hills (20-30 minutes). These commute times make Red Rock Country Club attractive to professionals 
            and executives who need convenient access to employment and entertainment while enjoying luxury living.
          </p>
          <p>
            Commute advantages include reasonable travel times to major destinations that enable residents to enjoy luxury 
            living while accessing employment, entertainment, and natural recreation. The community's location provides 
            convenient access to various destinations while maintaining privacy and exclusivity. This commute advantage 
            creates value for residents and supports quality of life.
          </p>

          <h3>Highway Access and Transportation</h3>
          <p>
            Highway access from Red Rock Country Club enables easy commuting to employment centers throughout the Las Vegas 
            valley while maintaining a luxury living environment. The community's location provides convenient access to 
            major highways that reduce commute times and provide convenient access to employment centers. This highway 
            access makes Red Rock Country Club attractive to professionals who need convenient commuting while enjoying 
            luxury living.
          </p>
          <p>
            Transportation advantages include direct highway access that reduces commute times and provides convenient access 
            to employment centers. The community's location enables residents to enjoy luxury living while accessing urban 
            employment and amenities. This transportation advantage creates value for professionals and supports quality of 
            life.
          </p>

          <h3>Proximity to Natural Attractions</h3>
          <p>
            Proximity to Red Rock Canyon National Conservation Area provides residents with direct access to hiking, rock 
            climbing, and natural beauty that enhances quality of life. The community's location enables residents to enjoy 
            luxury living while accessing natural recreation. This proximity advantage creates value for residents and 
            supports quality of life.
          </p>
          <p>
            Natural attraction access includes convenient proximity to Red Rock Canyon that enables residents to access hiking, 
            rock climbing, and natural beauty. The community's location provides convenient access to natural recreation while 
            maintaining luxury living. This natural attraction access creates value for residents and supports quality of life.
          </p>
        </div>
      </section>

      {/* Featured Properties */}
      <section class="featured-properties py-16 bg-gray-50">
        <div class="container container-center">
          <h2>Featured Properties in Red Rock Country Club</h2>
          <p class="text-lg text-gray-600 mb-8">
            Explore luxury homes in Red Rock Country Club featuring golf course views, mountain vistas, and custom designs
          </p>
          <div class="properties-grid">
            <div class="property-card">
              <div class="property-image">
                <img 
                  src="/images/modern-home-exterior.jpg" 
                  alt="Golf course estate home in Red Rock Country Club"
                  class="w-full h-64 object-cover"
                  loading="lazy"
                />
                <div class="property-status">For Sale</div>
              </div>
              <div class="property-info">
                <h3>Golf Course Estate</h3>
                <p class="property-price">$1,450,000</p>
                <p class="property-details">5 Bedrooms • 4.5 Bathrooms • 4,200 sq ft</p>
                <p class="property-description">
                  Stunning custom home with panoramic golf course and mountain views.
                </p>
                <a href="/contact" class="btn btn-secondary">Schedule Showing</a>
              </div>
            </div>

            <div class="property-card">
              <div class="property-image">
                <img 
                  src="/images/clubhouse-exterior.jpg" 
                  alt="Mountain view villa with modern architecture in Red Rock"
                  class="w-full h-64 object-cover"
                  loading="lazy"
                />
                <div class="property-status">For Sale</div>
              </div>
              <div class="property-info">
                <h3>Mountain View Villa</h3>
                <p class="property-price">$1,850,000</p>
                <p class="property-details">6 Bedrooms • 5 Bathrooms • 5,100 sq ft</p>
                <p class="property-description">
                  Luxury custom home with breathtaking Red Rock Canyon views.
                </p>
                <a href="/contact" class="btn btn-secondary">Schedule Showing</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commute Planning Section */}
      <section class="commute-planning-section py-16">
        <div class="container container-center">
          <h2>Commute from Red Rock Country Club</h2>
          <p>Experience convenient access to Las Vegas attractions while enjoying the privacy of this exclusive gated community.</p>
          <CommuteWidget 
            center={{ lat: 36.1081, lng: -115.3301 }}
            title="Red Rock Country Club Commute Times"
            description="Add destinations to see travel times from Red Rock Country Club"
            class="community-widget"
          />
          <div class="commute-highlights">
            <h3>Popular Destinations from Red Rock Country Club:</h3>
            <ul>
              <li><strong>Las Vegas Strip:</strong> 15-25 minutes</li>
              <li><strong>Downtown Las Vegas:</strong> 20-30 minutes</li>
              <li><strong>McCarran Airport:</strong> 25-40 minutes</li>
              <li><strong>Red Rock Canyon:</strong> 5-10 minutes</li>
              <li><strong>Summerlin:</strong> 10-15 minutes</li>
              <li><strong>Centennial Hills:</strong> 20-30 minutes</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection 
        faqs={realtorServiceFAQs}
        title="Frequently Asked Questions About Red Rock Country Club Real Estate"
        className="bg-gray-50"
      />

      {/* CTA Section */}
      <section class="cta-section py-16">
        <div class="container container-center">
          <h2>Ready for Luxury Living?</h2>
          <p>Dr. Janet Duffy specializes in Red Rock Country Club properties and can help you find your dream home.</p>
          <div class="cta-buttons">
            <a href="/contact" class="btn btn-primary">Contact Dr. Duffy</a>
            <a href="/luxury-home-sales" class="btn btn-secondary">Luxury Home Sales</a>
          </div>
        </div>
      </section>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Red Rock Country Club Homes | Luxury Golf Community Las Vegas',
  meta: [
    {
      name: 'description',
      content: 'Discover Red Rock Country Club, Las Vegas\' premier gated golf community with championship golf, luxury amenities, and custom homes.',
    },
  ],
};
