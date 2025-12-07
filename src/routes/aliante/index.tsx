import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import RealScoutOfficeListings from '../../components/realscout-office-listings';
import SEOStructuredData from '../../components/seo-structured-data';
import { pageSchemas } from '../../components/seo-structured-data';
import FAQSection, { realtorServiceFAQs } from '../../components/faq-section';

export default component$(() => {
  const alianteSchema = pageSchemas.servicePage({
    name: "Aliante Real Estate - Master-Planned Community",
    description: "Explore Aliante real estate with Dr. Janet Duffy. Master-planned community homes, amenities, and investment opportunities in North Las Vegas.",
    slug: "aliante",
    serviceType: "Master-Planned Community Services"
  });

  return (
    <>
      <SEOStructuredData type="Service" data={alianteSchema} />

      {/* Hero Section */}
      <section class="hero-section">
        <div class="container container-center">
          <h1 class="hero-title">
            Aliante Real Estate - <span class="highlight">Master-Planned Community</span>
          </h1>
          <p class="hero-subtitle">
            Experience the best of master-planned community living in Aliante, North Las Vegas' premier residential development. 
            Carefully designed neighborhoods, extensive amenities, and a strong sense of community.
          </p>
          <div class="hero-buttons">
            <a href="/contact" class="btn btn-primary">Find Aliante Homes</a>
            <a href="/properties" class="btn btn-secondary">View All Properties</a>
          </div>
        </div>
      </section>

      <section class="service-content py-16">
        <div class="container container-center">
          <h2>Premier Master-Planned Living</h2>
          <p>
            Experience the best of master-planned community living in Aliante, North Las Vegas' premier residential 
            development. Aliante features carefully designed neighborhoods, extensive amenities, and a strong sense of 
            community, making it one of Las Vegas' most desirable places to live with homes ranging from starter 
            properties to luxury estates. The community's master-planned design ensures that every aspect of living 
            has been thoughtfully considered and integrated.
          </p>
          <p>
            Aliante's master-planned approach creates a cohesive community where neighborhoods, amenities, and 
            infrastructure work together to enhance quality of life. The community's careful planning ensures that 
            residents have access to parks, schools, shopping, and recreational facilities within convenient distances. 
            This comprehensive planning creates a living environment that supports active lifestyles and community 
            interaction.
          </p>
          <p>
            The community's strong sense of community is fostered through shared amenities, community events, and 
            well-designed neighborhoods that encourage interaction among residents. This community character makes 
            Aliante attractive to families, professionals, and retirees seeking neighborhoods where they can build 
            lasting relationships and participate in community life. The combination of master planning and community 
            focus creates a distinctive living experience.
          </p>

          <h3>Thoughtful Neighborhood Design</h3>
          <p>
            Thoughtful neighborhood design in Aliante creates cohesive communities where homes, parks, and amenities 
            work together to enhance quality of life. The community's careful planning ensures that neighborhoods 
            are well-connected, safe, and designed to support active lifestyles. This thoughtful design approach 
            creates living environments that appeal to diverse buyer segments.
          </p>
          <p>
            Neighborhood features in Aliante include well-maintained streets, attractive landscaping, and convenient 
            access to community amenities. The community's design emphasizes walkability, safety, and aesthetic 
            appeal that creates attractive living environments. This thoughtful design approach supports property 
            values and quality of life.
          </p>

          <h3>Comprehensive Community Planning</h3>
          <p>
            Comprehensive community planning in Aliante ensures that all aspects of living have been thoughtfully 
            considered and integrated. The community's master plan includes parks, schools, shopping, and 
            recreational facilities that enhance quality of life. This comprehensive planning creates a living 
            environment that supports diverse lifestyle needs and preferences.
          </p>
          <p>
            Community planning in Aliante extends beyond individual neighborhoods to include infrastructure, 
            transportation, and services that support long-term growth and quality of life. The community's 
            commitment to comprehensive planning ensures that Aliante remains an attractive place to live as it 
            continues to develop and mature.
          </p>

          <h3>Strong Community Character</h3>
          <p>
            Strong community character in Aliante is fostered through shared amenities, community events, and 
            well-designed neighborhoods that encourage interaction among residents. The community's character reflects 
            its commitment to quality living, family-friendly environments, and active lifestyles. This community 
            character makes Aliante attractive to buyers seeking neighborhoods with a strong sense of community.
          </p>
          <p>
            Community events and activities in Aliante create opportunities for residents to connect with neighbors 
            and participate in community life. The community's commitment to fostering connections among residents 
            enhances quality of life and creates a distinctive living experience. This community character supports 
            property values and makes Aliante attractive to diverse buyer segments.
          </p>

          <h2>Community Amenities and Features</h2>
          <p>
            Aliante residents enjoy access to world-class amenities including Aliante Golf Club, Aliante Nature 
            Discovery Park, and Aliante Library. The community features walking trails, playgrounds, and recreational 
            facilities designed to enhance quality of life and provide opportunities for outdoor activities and family 
            recreation. These amenities create a comprehensive living environment that supports active lifestyles and 
            community interaction.
          </p>
          <p>
            Aliante Golf Club provides residents with access to championship golf, clubhouse facilities, and social 
            opportunities that enhance quality of life. The golf club's facilities include dining, events, and 
            recreational activities that create opportunities for social interaction and community engagement. This 
            golf amenity adds significant value to the community and appeals to golf enthusiasts and those seeking 
            resort-style living.
          </p>
          <p>
            Aliante Nature Discovery Park offers residents access to natural areas, walking trails, and educational 
            opportunities that enhance quality of life. The park's natural setting provides opportunities for outdoor 
            recreation, wildlife viewing, and environmental education. This natural amenity creates value for residents 
            and appeals to those seeking access to natural areas within the community.
          </p>

          <h3>Aliante Golf Club</h3>
          <p>
            Aliante Golf Club provides residents with access to championship golf, clubhouse facilities, and social 
            opportunities that enhance quality of life. The golf club's facilities include dining, events, and 
            recreational activities that create opportunities for social interaction and community engagement. This 
            golf amenity adds significant value to the community and appeals to golf enthusiasts and those seeking 
            resort-style living.
          </p>
          <p>
            Golf club membership in Aliante provides residents with access to championship golf, practice facilities, 
            and clubhouse amenities that enhance quality of life. The golf club's social opportunities create 
            connections among residents and enhance community character. This golf amenity creates value for residents 
            and supports property values.
          </p>

          <h3>Aliante Nature Discovery Park</h3>
          <p>
            Aliante Nature Discovery Park offers residents access to natural areas, walking trails, and educational 
            opportunities that enhance quality of life. The park's natural setting provides opportunities for outdoor 
            recreation, wildlife viewing, and environmental education. This natural amenity creates value for residents 
            and appeals to those seeking access to natural areas within the community.
          </p>
          <p>
            Nature park features in Aliante include walking trails, natural areas, and educational facilities that 
            provide opportunities for outdoor recreation and learning. The park's natural setting creates opportunities 
            for residents to connect with nature and enjoy outdoor activities. This natural amenity enhances quality 
            of life and creates value for residents.
          </p>

          <h3>Aliante Library and Community Services</h3>
          <p>
            Aliante Library provides residents with access to educational resources, community programs, and meeting 
            spaces that enhance quality of life. The library's facilities include reading areas, computer access, and 
            community programs that serve residents of all ages. This community service creates value for residents and 
            supports educational and recreational needs.
          </p>
          <p>
            Community services in Aliante include library facilities, community centers, and programs that enhance 
            quality of life and support community interaction. These services create opportunities for residents to 
            engage with their community and access resources that support diverse needs. This comprehensive service 
            approach enhances quality of life and creates value for residents.
          </p>

          <h3>Walking Trails and Recreational Facilities</h3>
          <p>
            Walking trails throughout Aliante connect neighborhoods and provide residents with opportunities for 
            exercise and outdoor recreation. These trails create safe, well-maintained paths for walking, jogging, 
            and enjoying the community's natural setting. The trail system enhances quality of life and provides 
            residents with convenient access to outdoor recreation.
          </p>
          <p>
            Recreational facilities in Aliante include playgrounds, sports courts, and open spaces that support active 
            lifestyles and family recreation. These facilities create opportunities for residents to engage in physical 
            activity, socialize with neighbors, and enjoy outdoor recreation. The combination of walking trails and 
            recreational facilities enhances quality of life and creates value for residents.
          </p>

          <h2>Diverse Housing Options</h2>
          <p>
            Aliante offers diverse housing options including single-family homes, townhouses, and luxury estates across 
            multiple neighborhoods. The community features homes from various builders with different architectural 
            styles, floor plans, and price points to accommodate buyers at different stages of life and budget levels. 
            This diversity ensures that buyers can find properties that match their preferences, needs, and budgets.
          </p>
          <p>
            Single-family homes in Aliante range from starter homes to luxury estates, providing options for first-time 
            buyers, growing families, and luxury buyers. The variety of architectural styles and floor plans ensures that 
            buyers can find homes that match their preferences and lifestyle needs. This diversity makes Aliante 
            attractive to diverse buyer segments.
          </p>
          <p>
            Townhouses in Aliante offer buyers lower-maintenance options with community amenities and potentially lower 
            prices. These properties appeal to busy professionals, first-time buyers, and those seeking attached housing 
            with community benefits. The townhouse option adds diversity to Aliante's housing mix and accommodates 
            different buyer preferences.
          </p>

          <h3>Single-Family Home Options</h3>
          <p>
            Single-family homes in Aliante range from starter homes to luxury estates, providing options for first-time 
            buyers, growing families, and luxury buyers. The variety of architectural styles and floor plans ensures that 
            buyers can find homes that match their preferences and lifestyle needs. This diversity makes Aliante 
            attractive to diverse buyer segments.
          </p>
          <p>
            Home features in Aliante single-family homes include modern floor plans, quality construction, and 
            community amenities that enhance quality of life. The variety of builders ensures diverse architectural 
            styles and features that accommodate different preferences. This diversity creates opportunities for buyers 
            to find homes that match their specific needs and preferences.
          </p>

          <h3>Townhouse and Attached Housing</h3>
          <p>
            Townhouses in Aliante offer buyers lower-maintenance options with community amenities and potentially lower 
            prices. These properties appeal to busy professionals, first-time buyers, and those seeking attached housing 
            with community benefits. The townhouse option adds diversity to Aliante's housing mix and accommodates 
            different buyer preferences.
          </p>
          <p>
            Townhouse features in Aliante include modern designs, community amenities, and lower maintenance requirements 
            that appeal to busy professionals and first-time buyers. The attached housing option provides buyers with 
            homeownership benefits while reducing maintenance responsibilities. This option creates value for buyers 
            seeking homeownership with convenience.
          </p>

          <h3>Luxury Estate Properties</h3>
          <p>
            Luxury estate properties in Aliante offer buyers premium homes with high-end finishes, larger lot sizes, 
            and exclusive features. These properties appeal to luxury buyers seeking quality homes in a master-planned 
            community. The luxury estate option adds diversity to Aliante's housing mix and accommodates high-end buyer 
            preferences.
          </p>
          <p>
            Luxury estate features in Aliante include premium finishes, custom designs, and exclusive amenities that 
            create distinctive living experiences. These properties provide luxury buyers with quality homes in a 
            master-planned community setting. This luxury option creates value for buyers seeking premium homes with 
            community benefits.
          </p>

          <h2>Excellent Schools and Education</h2>
          <p>
            Aliante is served by the Clark County School District with highly-rated schools including Aliante Elementary, 
            Del Webb Middle School, and Shadow Ridge High School. The area also provides access to private school 
            options and is within reasonable distance to higher education institutions including UNLV and Nevada State 
            College. This educational infrastructure makes Aliante attractive to families with children and those 
            pursuing higher education.
          </p>
          <p>
            Highly-rated schools in Aliante provide families with access to quality education that supports children's 
            academic success. The community's schools are known for strong academic programs, dedicated teachers, and 
            supportive learning environments. This educational quality makes Aliante attractive to families seeking 
            excellent schools for their children.
          </p>
          <p>
            Access to higher education institutions including UNLV and Nevada State College provides residents with 
            opportunities for continuing education and professional development. The proximity to these institutions 
            creates value for students, professionals, and those pursuing higher education. This educational access 
            enhances quality of life and creates value for residents.
          </p>

          <h3>Elementary and Middle Schools</h3>
          <p>
            Elementary and middle schools in Aliante provide families with access to quality education that supports 
            children's academic success. The community's schools are known for strong academic programs, dedicated 
            teachers, and supportive learning environments. This educational quality makes Aliante attractive to families 
            seeking excellent schools for their children.
          </p>
          <p>
            School features in Aliante include modern facilities, strong academic programs, and supportive learning 
            environments that enhance educational quality. The community's commitment to education ensures that schools 
            remain well-maintained and provide quality learning experiences. This educational quality creates value for 
            families and supports property values.
          </p>

          <h3>High School Education</h3>
          <p>
            Shadow Ridge High School serves Aliante students with quality high school education that prepares students 
            for college and careers. The school's strong academic programs, extracurricular activities, and college 
            preparation support student success. This educational quality makes Aliante attractive to families seeking 
            excellent high school education for their children.
          </p>
          <p>
            High school features in Aliante include strong academic programs, college preparation, and extracurricular 
            activities that enhance educational quality. The school's commitment to student success ensures that students 
            receive quality education that prepares them for future opportunities. This educational quality creates value 
            for families and supports property values.
          </p>

          <h3>Higher Education Access</h3>
          <p>
            Access to higher education institutions including UNLV and Nevada State College provides residents with 
            opportunities for continuing education and professional development. The proximity to these institutions 
            creates value for students, professionals, and those pursuing higher education. This educational access 
            enhances quality of life and creates value for residents.
          </p>
          <p>
            Higher education access in Aliante includes convenient proximity to UNLV and Nevada State College that 
            enables residents to pursue continuing education and professional development. The access to these 
            institutions creates opportunities for residents to advance their education and careers. This educational 
            access enhances quality of life and creates value for residents.
          </p>

          <h2>Convenient Location and Access</h2>
          <p>
            Aliante's location in North Las Vegas provides convenient access to major highways including I-15 and US-95, 
            making commuting throughout the Las Vegas valley efficient. The community is well-positioned for access to 
            downtown Las Vegas, the Strip, and major employment centers while maintaining a suburban atmosphere. This 
            location advantage makes Aliante attractive to professionals, families, and those seeking convenient access 
            to employment and entertainment.
          </p>
          <p>
            Highway access from Aliante enables easy commuting to employment centers throughout the Las Vegas valley 
            while maintaining a suburban living environment. The community's location provides convenient access to 
            downtown Las Vegas, the Strip, and major employment centers. This accessibility makes Aliante attractive to 
            professionals who need convenient commuting while enjoying suburban living.
          </p>
          <p>
            Proximity to shopping, dining, and entertainment provides residents with convenient access to essential 
            services and recreational opportunities. The community's location within North Las Vegas ensures that 
            residents can enjoy area amenities while maintaining a suburban atmosphere. This location advantage enhances 
            quality of life and creates value for residents.
          </p>

          <h3>Highway Access and Commuting</h3>
          <p>
            Highway access from Aliante enables easy commuting to employment centers throughout the Las Vegas valley 
            while maintaining a suburban living environment. The community's location provides convenient access to 
            downtown Las Vegas, the Strip, and major employment centers. This accessibility makes Aliante attractive to 
            professionals who need convenient commuting while enjoying suburban living.
          </p>
          <p>
            Commuting advantages in Aliante include direct highway access that reduces commute times and provides 
            convenient access to employment centers. The community's location enables residents to enjoy suburban living 
            while accessing urban employment and amenities. This commuting advantage creates value for professionals and 
            supports quality of life.
          </p>

          <h3>Proximity to Employment Centers</h3>
          <p>
            Proximity to employment centers throughout the Las Vegas valley makes Aliante attractive to professionals 
            seeking convenient access to work. The community's location provides access to downtown Las Vegas, the Strip, 
            and major employment centers while maintaining a suburban atmosphere. This proximity advantage creates value 
            for professionals and supports quality of life.
          </p>
          <p>
            Employment center access in Aliante includes convenient proximity to major employers throughout the Las Vegas 
            valley that enables residents to access employment opportunities. The community's location provides 
            convenient commuting to various employment centers. This employment access creates value for professionals 
            and supports quality of life.
          </p>

          <h3>Shopping and Entertainment Access</h3>
          <p>
            Shopping and entertainment access in Aliante provides residents with convenient access to essential services 
            and recreational opportunities. The community's location within North Las Vegas ensures that residents can 
            enjoy area shopping, dining, and entertainment while maintaining a suburban atmosphere. This access enhances 
            quality of life and creates value for residents.
          </p>
          <p>
            Retail and entertainment access in Aliante includes convenient proximity to shopping centers, restaurants, and 
            entertainment venues that enhance quality of life. The community's location provides residents with access to 
            essential services and recreational opportunities. This access creates value for residents and supports quality 
            of life.
          </p>

          <h2>Investment and Resale Value</h2>
          <p>
            Aliante properties have shown consistent appreciation and strong resale values due to the community's 
            master-planned design, quality amenities, and desirable location. The community's reputation for quality 
            living and excellent schools makes it attractive to both owner-occupants and real estate investors seeking 
            stable returns. This investment potential, combined with lifestyle benefits, makes Aliante attractive to 
            diverse buyer segments.
          </p>
          <p>
            Property appreciation in Aliante reflects the community's master-planned design, quality amenities, and 
            desirable location that create strong demand for properties. The community's reputation for quality living 
            ensures that properties maintain their value and appeal. This appreciation potential makes Aliante attractive 
            to buyers seeking properties with strong investment fundamentals.
          </p>
          <p>
            Resale values in Aliante benefit from the community's reputation for quality, amenities, and excellent schools 
            that attract buyers. Properties in the community typically maintain their value and appeal due to the 
            community's master-planned design and quality amenities. This resale value potential makes Aliante attractive 
            to buyers seeking properties with strong investment fundamentals.
          </p>

          <h3>Property Appreciation Trends</h3>
          <p>
            Property appreciation in Aliante reflects the community's master-planned design, quality amenities, and 
            desirable location that create strong demand. Properties in the community have demonstrated consistent 
            appreciation due to the community's reputation for quality living and excellent schools. This appreciation 
            trend supports investment potential and makes Aliante attractive to buyers seeking properties with strong 
            value growth.
          </p>
          <p>
            The community's master-planned design and quality amenities ensure that properties maintain their appeal and 
            value. The combination of quality living, excellent schools, and desirable location creates conditions that 
            support property values and appreciation. Understanding these appreciation trends helps buyers evaluate 
            investment potential and long-term value.
          </p>

          <h3>Resale Market Performance</h3>
          <p>
            Resale market performance in Aliante benefits from the community's reputation for quality, amenities, and 
            excellent schools that attract buyers. Properties in the community typically sell quickly and at competitive 
            prices due to the community's master-planned design and quality amenities. This resale performance supports 
            property values and makes Aliante attractive to buyers seeking properties with strong resale potential.
          </p>
          <p>
            The community's master-planned design and quality amenities create properties that appeal to diverse buyer 
            segments. This appeal supports resale values and ensures that properties maintain their investment value. 
            Understanding resale market performance helps buyers evaluate properties and make informed investment 
            decisions.
          </p>

          <h3>Investment Fundamentals</h3>
          <p>
            Investment fundamentals in Aliante reflect the community's master-planned design, quality amenities, and 
            desirable location that support property values. The community's reputation for quality living ensures that 
            properties maintain their appeal and value. This investment potential makes Aliante attractive to buyers 
            seeking properties with strong fundamentals.
          </p>
          <p>
            The combination of master-planned design, quality amenities, and desirable location creates investment 
            opportunities for buyers seeking properties with strong fundamentals. Properties in Aliante offer lifestyle 
            benefits and investment potential that appeal to both owner-occupants and investors. Understanding investment 
            fundamentals helps buyers evaluate properties and make informed investment decisions.
          </p>
        </div>
      </section>

      {/* Featured Aliante Properties - Lead Generator */}
      <section class="featured-properties-section bg-gray-50 py-16">
        <div class="container container-center">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">
              Available Aliante Homes
            </h2>
            <p class="text-lg text-gray-600 max-w-2xl mx-auto">
              Browse current Aliante properties for sale in this premier master-planned community
            </p>
          </div>
          
          {/* RealScout Office Listings - Primary Lead Generator */}
          <RealScoutOfficeListings
            agentEncodedId="QWdlbnQtMjI1MDUw"
            sortOrder="NEWEST"
            listingStatus="For Sale"
            propertyTypes=",SFR"
            priceMin="400000"
            priceMax="800000"
          />
          
          <div class="text-center mt-8">
            <a href="/contact" class="btn btn-primary btn-lg">
              Schedule Aliante Community Tour
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection 
        faqs={realtorServiceFAQs}
        title="Frequently Asked Questions About Aliante Real Estate"
        className="bg-gray-50"
      />
    </>
  );
});

export const head: DocumentHead = {
  title: 'Aliante Real Estate - Master-Planned Community | Dr. Janet Duffy',
  meta: [
    {
      name: 'description',
      content: 'Explore Aliante real estate with Dr. Janet Duffy. Master-planned community homes, amenities, and investment opportunities in North Las Vegas.',
    },
  ],
};
