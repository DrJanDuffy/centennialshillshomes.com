import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import RealScoutOfficeListings from '../../components/realscout-office-listings';
import SEOStructuredData from '../../components/seo-structured-data';
import { pageSchemas } from '../../components/seo-structured-data';
import FAQSection, { buyerServiceFAQs } from '../../components/faq-section';

export default component$(() => {
  const luxurySchema = pageSchemas.servicePage({
    name: "Luxury Homes Over $1M Las Vegas",
    description: "Luxury homes for sale over $1M in Las Vegas. Premium estates in The Ridges, Red Rock Country Club, and Summerlin's most exclusive communities.",
    slug: "homes-over-1m",
    serviceType: "Luxury Property Services"
  });

  return (
    <>
      <SEOStructuredData type="Service" data={luxurySchema} />

      <section class="hero-section">
        <div class="container container-center">
          <h1 class="hero-title">
            <span class="highlight">Luxury Homes Over $1M</span>
            <br />
            Premium Las Vegas Estates
          </h1>
          <p class="hero-subtitle">
            Discover luxury homes for sale over $1M in Las Vegas. Premium estates in The Ridges, Red Rock 
            Country Club, and Summerlin's most exclusive communities.
          </p>
        </div>
      </section>

      <section class="service-content py-16">
        <div class="container container-center">
          <h2>Luxury Real Estate Over $1M</h2>
          <p>
            The $1M+ luxury segment represents Las Vegas' most prestigious properties, featuring custom estates, 
            golf course homes, and gated community residences. These properties offer exceptional quality, 
            privacy, and resort-style amenities. Luxury homes in this price range represent the pinnacle of 
            Las Vegas residential living, attracting high-net-worth individuals, executives, and those seeking 
            the ultimate in luxury, privacy, and lifestyle amenities.
          </p>
          <p>
            Las Vegas' luxury real estate market has grown significantly, with properties over $1M offering 
            world-class amenities, stunning views, and exceptional quality that rivals luxury markets 
            worldwide. The area's combination of luxury homes, natural beauty, tax benefits, and lifestyle 
            amenities makes it particularly attractive to luxury homebuyers seeking exceptional value and 
            quality of life.
          </p>
          <p>
            Properties in the $1M+ range typically feature custom architecture, premium finishes, expansive 
            lots, and resort-style amenities that create living experiences that are exceptional for a major 
            metropolitan area. These properties provide residents with privacy, security, and luxury amenities 
            that enhance quality of life and reflect success and achievement.
          </p>

          <h2>Luxury Features and Amenities</h2>
          <p>
            Luxury homes over $1M feature comprehensive amenities and features that create exceptional living 
            experiences. Understanding these features helps buyers identify properties that match their 
            preferences for luxury living, privacy, and lifestyle amenities.
          </p>

          <h3>Custom Architecture and Premium Finishes</h3>
          <p>
            Luxury homes in this price range typically feature custom architecture designed by renowned 
            architects and builders who create unique, stunning homes that reflect owners' individual styles 
            and preferences. These custom designs often incorporate elements of desert contemporary, 
            Mediterranean, or modern architectural styles that blend harmoniously with Las Vegas' natural 
            environment.
          </p>
          <p>
            Premium finishes in luxury homes include high-end materials, custom millwork, imported fixtures, 
            and luxury appliances that create upscale living environments. These finishes reflect the quality 
            and attention to detail that define luxury homes and enhance daily living experiences.
          </p>
          <p>
            The custom nature of luxury homes allows owners to create living spaces that perfectly match their 
            lifestyles, preferences, and needs. This customization creates unique homes that are both 
            functional and beautiful, providing residents with living experiences that are tailored to their 
            specific requirements.
          </p>

          <h3>Expansive Lots and Outdoor Living Spaces</h3>
          <p>
            Luxury homes over $1M typically feature expansive lots that provide privacy, space for outdoor 
            amenities, and opportunities to create resort-like outdoor environments. These lots often range 
            from half an acre to several acres, providing ample space for pools, outdoor kitchens, sports 
            courts, and extensive landscaping.
          </p>
          <p>
            Outdoor living spaces in luxury homes are designed to take advantage of Las Vegas' mild climate 
            and stunning natural beauty. These spaces often include covered patios, outdoor kitchens, fire 
            features, water features, and extensive landscaping that create resort-like environments for 
            relaxation and entertaining.
          </p>
          <p>
            The expansive nature of luxury home lots provides privacy and seclusion that's rare in urban 
            environments. This privacy, combined with outdoor amenities, creates living experiences that 
            combine the convenience of urban living with the privacy and space typically associated with 
            rural or estate properties.
          </p>

          <h3>Private Pools and Resort-Style Amenities</h3>
          <p>
            Most luxury homes over $1M feature private pools and spas that create resort-like environments 
            for relaxation and recreation. These pools often include features like infinity edges, water 
            features, built-in spas, and pool houses that enhance the luxury pool experience.
          </p>
          <p>
            Resort-style amenities in luxury homes often include home theaters, wine cellars, game rooms, 
            fitness centers, and other features that create comprehensive entertainment and recreation 
            opportunities. These amenities allow residents to enjoy resort-like experiences without leaving 
            their homes.
          </p>
          <p>
            The resort-style nature of luxury home amenities reflects the lifestyle that luxury homebuyers 
            seek and expect. These amenities enhance quality of life and create living experiences that are 
            exceptional for residential properties.
          </p>

          <h3>Stunning Views</h3>
          <p>
            Luxury homes over $1M often feature stunning views of golf courses, mountains, city lights, or 
            natural landscapes that enhance property values and provide daily enjoyment. These views are 
            particularly valuable in Las Vegas, where natural beauty and golf course landscaping create 
            exceptional visual experiences.
          </p>
          <p>
            Golf course views in luxury homes provide residents with daily enjoyment of manicured fairways, 
            water features, and natural landscaping that create visually appealing environments. Mountain 
            views provide connections to Las Vegas' natural beauty and create stunning backdrops for luxury 
            living.
          </p>
          <p>
            The value of views in luxury homes is reflected in property prices, with homes featuring 
            exceptional views commanding premium prices compared to similar properties without views. These 
            views enhance property values and provide residents with daily enjoyment of beautiful, 
            well-maintained landscapes.
          </p>

          <h3>Gated Communities with Security</h3>
          <p>
            Many luxury homes over $1M are located in gated communities that provide security, privacy, and 
            peace of mind. These communities typically feature controlled access, security patrols, and 
            surveillance systems that enhance security and provide residents with confidence in their safety.
          </p>
          <p>
            Gated communities in luxury markets often feature additional amenities like private golf courses, 
            clubhouses, and recreational facilities that enhance quality of life. These amenities, combined 
            with security and privacy, create living experiences that are exceptional for residential 
            communities.
          </p>
          <p>
            The security and privacy provided by gated communities are particularly valuable for luxury 
            homeowners who value privacy and want to ensure their homes and families are protected. This 
            security is a significant factor in the appeal of luxury gated communities.
          </p>

          <h3>Smart Home Technology</h3>
          <p>
            Luxury homes over $1M typically feature comprehensive smart home technology that provides 
            convenience, security, and energy efficiency. These systems often include automated lighting, 
            climate control, security, entertainment, and other features that enhance quality of life and 
            provide modern conveniences.
          </p>
          <p>
            Smart home technology in luxury homes allows residents to control various home systems remotely, 
            creating convenience and efficiency that enhances daily living. These systems often include 
            integration with mobile devices, voice control, and automation that simplifies home management.
          </p>

          <h2>Luxury Communities Over $1M</h2>
          <p>
            Las Vegas features several premier communities that offer luxury homes over $1M, each providing 
            unique characteristics, amenities, and lifestyle benefits. Understanding these communities helps 
            buyers identify properties that match their preferences for luxury living, privacy, and lifestyle.
          </p>

          <h3>The Ridges</h3>
          <p>
            The Ridges is one of Las Vegas' most exclusive gated communities, featuring luxury estates from 
            $1M to over $10M. The community offers private golf course access, stunning mountain views, and 
            exceptional privacy that attracts high-net-worth individuals and executives seeking the ultimate 
            in Las Vegas luxury living.
          </p>

          <h3>Red Rock Country Club</h3>
          <p>
            Red Rock Country Club offers luxury golf course homes over $1M with championship golf access, 
            resort-style amenities, and stunning course views. The community's luxury homes, golf course 
            access, and amenities create living experiences that combine luxury living with active recreation.
          </p>

          <h3>Summerlin West Luxury Communities</h3>
          <p>
            Summerlin West features several luxury communities with homes over $1M, including established 
            neighborhoods and new construction that offer diverse options for luxury homebuyers. These 
            communities provide access to Summerlin's extensive amenities, excellent schools, and natural 
            beauty that enhance luxury living experiences.
          </p>

          <h2>Luxury Real Estate Investment</h2>
          <p>
            Luxury homes over $1M have demonstrated strong appreciation over time, making them attractive 
            investments as well as exceptional places to live. The combination of luxury amenities, 
            desirable locations, and limited inventory supports property values and makes luxury properties 
            attractive for both primary residence buyers and real estate investors.
          </p>

          <h3>Property Value Appreciation</h3>
          <p>
            Luxury properties over $1M typically show consistent appreciation over time, reflecting the value 
            that buyers place on luxury amenities, privacy, and desirable locations. This appreciation makes 
            luxury properties attractive investments that provide both lifestyle benefits and financial returns.
          </p>

          <h3>Limited Inventory</h3>
          <p>
            The limited inventory of luxury homes over $1M, combined with strong demand from high-net-worth 
            individuals and luxury homebuyers, creates competitive markets that support property values. This 
            market dynamic makes luxury properties attractive investments that maintain their value and show 
            appreciation over time.
          </p>

          <h2>Working with Dr. Jan Duffy for Luxury Homes</h2>
          <p>
            Dr. Jan Duffy specializes in luxury real estate over $1M in Las Vegas' premier communities. With 
            30+ years of research expertise and a Top 1% REALTOR® designation, Dr. Duffy provides clients 
            with comprehensive market knowledge, expert negotiation skills, and personalized service that 
            ensures successful transactions.
          </p>
          <p>
            Whether you're buying or selling luxury properties, Dr. Duffy's expertise in luxury markets, 
            California equity buyers, and corporate relocations makes her the ideal choice for your real 
            estate needs. Her understanding of luxury properties, combined with her commitment to client 
            service, ensures that your experience in luxury real estate will be exceptional.
          </p>
        </div>
      </section>

      <section class="featured-properties-section bg-gray-50 py-16">
        <div class="container container-center">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">
              Luxury Homes Over $1M for Sale
            </h2>
            <p class="text-lg text-gray-600 max-w-2xl mx-auto">
              Browse premium estates in Las Vegas
            </p>
          </div>
          
          <RealScoutOfficeListings
            agentEncodedId="QWdlbnQtMjI1MDUw"
            sortOrder="NEWEST"
            listingStatus="For Sale"
            propertyTypes=",SFR"
            priceMin="1000000"
            priceMax="20000000"
          />
        </div>
      </section>

      <FAQSection 
        faqs={buyerServiceFAQs}
        title="Frequently Asked Questions About Luxury Homes"
        className="bg-gray-50"
      />

      <section class="cta-section">
        <div class="container container-center">
          <h2>Interested in Luxury Real Estate?</h2>
          <p>Contact Dr. Jan Duffy for expert guidance on luxury properties.</p>
          <div class="cta-buttons">
            <a href="/contact" class="btn btn-primary">Contact Dr. Duffy</a>
            <a href="/luxury-estates" class="btn btn-secondary">View Luxury Collection</a>
          </div>
        </div>
      </section>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Luxury Homes Over $1M Las Vegas | Premium Estates | Dr. Jan Duffy',
  meta: [
    {
      name: 'description',
      content: 'Luxury homes for sale over $1M in Las Vegas. Premium estates in The Ridges, Red Rock Country Club, and Summerlin\'s most exclusive communities.',
    },
  ],
};

