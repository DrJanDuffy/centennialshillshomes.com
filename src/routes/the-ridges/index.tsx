import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import RealScoutOfficeListings from '../../components/realscout-office-listings';
import SEOStructuredData from '../../components/seo-structured-data';
import { pageSchemas } from '../../components/seo-structured-data';
import FAQSection, { realtorServiceFAQs } from '../../components/faq-section';

export default component$(() => {
  const ridgesSchema = pageSchemas.neighborhoodPage({
    name: "The Ridges",
    slug: "the-ridges",
    geo: {
      "@type": "GeoCoordinates",
      "latitude": 36.1699,
      "longitude": -115.1398
    }
  });

  return (
    <>
      <SEOStructuredData type="LocalBusiness" data={ridgesSchema} />

      <section class="hero-section">
        <div class="container container-center">
          <h1 class="hero-title">
            <span class="highlight">The Ridges</span>
            <br />
            Luxury Living in Summerlin West
          </h1>
          <p class="hero-subtitle">
            Discover The Ridges, one of Las Vegas' most prestigious gated communities featuring luxury homes, 
            world-class amenities, and stunning mountain views. Dr. Jan Duffy specializes in The Ridges real estate 
            with expertise in luxury home sales and California equity buyer relocations.
          </p>
        </div>
      </section>

      <section class="community-overview py-16">
        <div class="container container-center">
          <h2>About The Ridges</h2>
          <p>
            The Ridges is an exclusive gated community in Summerlin West, Las Vegas, known for its luxury estates, 
            private golf course access, and breathtaking Red Rock Canyon views. This master-planned community offers 
            residents a sophisticated lifestyle with world-class amenities and privacy. Developed as one of Las Vegas' 
            most prestigious residential communities, The Ridges represents the pinnacle of luxury living in the 
            Las Vegas Valley.
          </p>
          <p>
            Established in the early 2000s, The Ridges was designed to provide an unparalleled living experience 
            for discerning homeowners seeking privacy, security, and natural beauty. The community's strategic location 
            in Summerlin West places it within minutes of world-class golf courses, upscale shopping, fine dining, and 
            the natural splendor of Red Rock Canyon National Conservation Area.
          </p>
          <p>
            What sets The Ridges apart from other luxury communities is its commitment to preserving the natural 
            desert landscape while providing residents with every modern convenience. The community's architecture 
            guidelines ensure that homes blend harmoniously with the surrounding environment, creating a cohesive 
            and visually stunning neighborhood that respects the area's natural beauty.
          </p>

          <h2>Community Features and Amenities</h2>
          <p>
            The Ridges offers an exceptional array of amenities and features that cater to the most discerning 
            homeowners. From security to recreation, every aspect of community living has been carefully planned 
            and executed to provide residents with an unparalleled lifestyle experience.
          </p>

          <h3>Security and Privacy</h3>
          <p>
            The Ridges is a fully gated community with 24-hour security, providing residents with peace of mind 
            and privacy. The community's security measures include controlled access gates, security patrols, and 
            advanced surveillance systems. This level of security ensures that residents can enjoy their homes and 
            community amenities without concerns about safety or unwanted visitors.
          </p>
          <p>
            Privacy is a hallmark of The Ridges lifestyle. Large lot sizes, strategic home placement, and natural 
            desert landscaping create a sense of seclusion and tranquility. Many properties feature private gated 
            driveways and extensive landscaping that further enhances privacy while maintaining the community's 
            aesthetic appeal.
          </p>

          <h3>Golf Course Access</h3>
          <p>
            One of The Ridges' most coveted features is private access to Bear's Best Las Vegas, a world-class 
            golf course designed by renowned golf course architect Jack Nicklaus. This exclusive golf course features 
            18 holes inspired by Nicklaus' favorite designs from around the world, creating a unique and challenging 
            golfing experience.
          </p>
          <p>
            Residents of The Ridges enjoy preferred tee times, reduced green fees, and access to the club's 
            premium facilities including the clubhouse, pro shop, and dining establishments. The golf course's 
            stunning desert landscape and mountain views make every round a memorable experience, whether you're 
            a serious golfer or enjoy the sport recreationally.
          </p>
          <p>
            The proximity to Red Rock Country Club provides additional golfing opportunities, with multiple courses 
            available to residents. This golf course access significantly enhances property values and makes The 
            Ridges particularly attractive to golf enthusiasts and those seeking an active, resort-style lifestyle.
          </p>

          <h3>Natural Beauty and Views</h3>
          <p>
            The Ridges is renowned for its spectacular views of Red Rock Canyon, the Spring Mountains, and the 
            Las Vegas Valley. Many homes in the community feature floor-to-ceiling windows, expansive patios, and 
            outdoor living spaces designed to maximize these breathtaking views. The natural desert landscape, 
            combined with carefully planned community landscaping, creates a visually stunning environment that 
            changes with the seasons and time of day.
          </p>
          <div class="my-8">
            <img 
              src="/images/outdoor-patio.jpg" 
              alt="Luxury outdoor patio in The Ridges with fire pit and mountain views"
              class="w-full h-auto rounded-lg shadow-lg"
              loading="lazy"
            />
          </div>
          <p>
            The community's location on elevated terrain provides panoramic views that are simply unmatched in 
            the Las Vegas area. Sunrise and sunset views are particularly spectacular, with the changing light 
            creating dramatic displays across the desert landscape and mountain ranges. These views are not just 
            beautiful; they're a significant factor in property values and desirability.
          </p>
          <div class="my-8">
            <img 
              src="/images/community-lounge-2.jpg" 
              alt="Elegant community lounge in The Ridges with fireplace and modern design"
              class="w-full h-auto rounded-lg shadow-lg"
              loading="lazy"
            />
          </div>

          <h2>Real Estate in The Ridges</h2>
          <p>
            The Ridges features luxury single-family homes with custom architecture, premium finishes, and 
            expansive lots. Properties range from 3,000 to 10,000+ square feet, with many featuring private 
            pools, outdoor living spaces, and mountain views. The community's architectural diversity, combined 
            with strict design guidelines, creates a cohesive yet varied streetscape that appeals to buyers 
            seeking both individuality and community harmony.
          </p>

          <h3>Property Types and Sizes</h3>
          <p>
            Homes in The Ridges typically range from 3,000 to over 10,000 square feet, with lot sizes ranging 
            from approximately 0.25 acres to over an acre. This variety ensures that buyers can find properties 
            that match their specific needs, whether they're seeking a manageable luxury home or an expansive 
            estate property.
          </p>
          <p>
            Most homes feature single-story or two-story designs, with many incorporating elements of desert 
            contemporary, Mediterranean, or modern architectural styles. The community's architectural review 
            process ensures that all homes meet high standards for design, quality, and compatibility with the 
            community's overall aesthetic.
          </p>
          <p>
            Custom home opportunities are available in The Ridges, allowing buyers to work with approved builders 
            to create their dream home. These custom homes must meet the community's architectural guidelines 
            while allowing for personal expression and unique design elements that reflect the homeowner's 
            individual style and preferences.
          </p>

          <h3>Luxury Features and Finishes</h3>
          <p>
            Homes in The Ridges feature premium finishes and luxury amenities that are expected in high-end 
            properties. Common features include gourmet kitchens with high-end appliances, wine cellars, home 
            theaters, game rooms, and extensive outdoor living spaces. Many properties feature smart home 
            technology, whole-house audio systems, and advanced security systems.
          </p>
          <p>
            Master suites are typically expansive, featuring spa-like bathrooms, walk-in closets, and private 
            patios or balconies with views. Secondary bedrooms are generously sized, often with en-suite bathrooms, 
            making The Ridges ideal for families or those who frequently host guests.
          </p>
          <p>
            Outdoor living is a priority in The Ridges, with most homes featuring extensive patios, outdoor 
            kitchens, fire features, and private pools and spas. These outdoor spaces are designed to take 
            advantage of the mild Las Vegas climate and stunning views, creating resort-like environments that 
            extend the living space beyond the home's interior.
          </p>

          <h3>Price Range and Market Trends</h3>
          <p>
            Properties in The Ridges typically range from $1 million to over $10 million, with the average home 
            price in the $2-4 million range. The community's exclusivity, amenities, and location contribute to 
            strong property values and consistent appreciation over time.
          </p>
          <p>
            The luxury real estate market in The Ridges remains strong, with steady demand from high-net-worth 
            individuals, executives, and California equity buyers seeking the tax benefits and lifestyle that 
            Nevada offers. The community's reputation for quality, security, and natural beauty makes it a 
            sought-after destination for luxury homebuyers.
          </p>
          <p>
            Market trends in The Ridges reflect the broader Las Vegas luxury market, with properties typically 
            selling within 60-90 days when properly priced. The community's limited inventory and high desirability 
            create a competitive market environment that benefits sellers while still providing opportunities for 
            buyers who are prepared to act quickly.
          </p>

          <h2>Lifestyle and Community</h2>
          <p>
            Living in The Ridges offers a lifestyle that combines luxury, privacy, and natural beauty in a way 
            that's unique to Las Vegas. The community's location provides easy access to world-class amenities 
            while maintaining a sense of seclusion and tranquility that's rare in a major metropolitan area.
          </p>

          <h3>Recreation and Activities</h3>
          <p>
            Beyond golf, The Ridges residents enjoy access to numerous recreational opportunities. Red Rock Canyon 
            National Conservation Area is just minutes away, offering hiking, rock climbing, and scenic drives. 
            The area's extensive trail system provides opportunities for walking, jogging, and mountain biking 
            in a stunning natural setting.
          </p>
          <p>
            The community's proximity to Summerlin provides access to numerous parks, community centers, and 
            recreational facilities. Downtown Summerlin, with its shopping, dining, and entertainment options, 
            is just a short drive away, offering residents the convenience of urban amenities without sacrificing 
            the peaceful atmosphere of The Ridges.
          </p>

          <h3>Schools and Education</h3>
          <p>
            Families in The Ridges have access to excellent educational options. The area is served by top-rated 
            schools in the Clark County School District, including highly rated elementary, middle, and high schools. 
            Private school options are also available, including prestigious institutions that serve the Summerlin 
            and northwest Las Vegas areas.
          </p>
          <p>
            The community's location within Summerlin ensures access to some of Las Vegas' best educational 
            institutions, making it attractive to families who prioritize education alongside luxury living. 
            School quality is a significant factor in property values and community desirability, and The Ridges 
            benefits from its location in an area known for educational excellence.
          </p>

          <h3>Dining and Shopping</h3>
          <p>
            The Ridges' location provides easy access to some of Las Vegas' finest dining and shopping experiences. 
            Downtown Summerlin features upscale retailers, fine dining restaurants, and entertainment venues. 
            The area's dining scene includes everything from casual family restaurants to fine dining establishments 
            featuring world-renowned chefs.
          </p>
          <p>
            For everyday shopping, residents have access to premium grocery stores, specialty shops, and services 
            that cater to an upscale clientele. The convenience of having these amenities nearby, combined with 
            the community's peaceful atmosphere, creates an ideal balance between accessibility and tranquility.
          </p>

          <h2>Why Choose The Ridges</h2>
          <p>
            The Ridges represents the pinnacle of luxury living in Las Vegas, offering residents an unparalleled 
            combination of privacy, security, natural beauty, and world-class amenities. For buyers seeking the 
            ultimate in luxury real estate, The Ridges provides an opportunity to own a home in one of Las Vegas' 
            most prestigious and desirable communities.
          </p>

          <h3>Investment Value</h3>
          <p>
            Properties in The Ridges have demonstrated strong appreciation over time, making them attractive 
            investments as well as exceptional places to live. The community's exclusivity, limited inventory, 
            and high desirability contribute to property values that have consistently outperformed the broader 
            Las Vegas real estate market.
          </p>
          <p>
            The combination of luxury amenities, natural beauty, and strategic location makes The Ridges properties 
            particularly attractive to high-net-worth individuals and investors seeking both lifestyle and financial 
            returns. The community's reputation and prestige ensure that properties maintain their value and appeal 
            over the long term.
          </p>

          <h3>Working with Dr. Jan Duffy</h3>
          <p>
            Dr. Jan Duffy specializes in luxury real estate in The Ridges and other premier Las Vegas communities. 
            With 30+ years of research expertise and a Top 1% REALTOR® designation, Dr. Duffy provides clients 
            with comprehensive market knowledge, expert negotiation skills, and personalized service that ensures 
            successful transactions.
          </p>
          <p>
            Whether you're buying or selling in The Ridges, Dr. Duffy's expertise in luxury properties, California 
            equity buyers, and corporate relocations makes her the ideal choice for your real estate needs. Her 
            understanding of the luxury market, combined with her commitment to client service, ensures that your 
            experience in The Ridges real estate market will be exceptional.
          </p>
        </div>
      </section>

      <section class="featured-properties-section bg-gray-50 py-16">
        <div class="container container-center">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">
              The Ridges Homes for Sale
            </h2>
            <p class="text-lg text-gray-600 max-w-2xl mx-auto">
              Browse luxury homes in The Ridges community
            </p>
          </div>
          
          <RealScoutOfficeListings
            agentEncodedId="QWdlbnQtMjI1MDUw"
            sortOrder="NEWEST"
            listingStatus="For Sale"
            propertyTypes=",SFR"
            priceMin="1000000"
            priceMax="15000000"
          />
        </div>
      </section>

      <FAQSection 
        faqs={realtorServiceFAQs}
        title="Frequently Asked Questions About The Ridges Real Estate"
        className="bg-gray-50"
      />

      <section class="cta-section">
        <div class="container container-center">
          <h2>Interested in The Ridges?</h2>
          <p>Contact Dr. Jan Duffy for expert guidance on The Ridges luxury real estate.</p>
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
  title: 'The Ridges Las Vegas | Luxury Homes | Dr. Jan Duffy Real Estate',
  meta: [
    {
      name: 'description',
      content: 'The Ridges luxury homes in Summerlin West, Las Vegas. Gated community with golf course access and Red Rock Canyon views. Dr. Jan Duffy specializes in The Ridges real estate.',
    },
  ],
};

