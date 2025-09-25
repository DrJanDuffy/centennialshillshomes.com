import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import RealScoutOfficeListings from '../../components/realscout-office-listings';

export default component$(() => {
  return (
    <>
      <div class="container container-center">
        <h1>Centennial Hills Homes for Sale - Active Listings</h1>
        
        <h2>Discover Your Dream Home in Centennial Hills</h2>
        <p>Explore our comprehensive selection of Centennial Hills homes for sale, featuring luxury properties, new construction, and established neighborhoods. Dr. Janet Duffy brings 30+ years of real estate expertise to help you find the perfect home in Las Vegas' premier northwest community.</p>

        {/* Featured Properties - Lead Generator */}
        <section class="featured-listings-section py-16">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">
              Current Centennial Hills Homes for Sale
            </h2>
            <p class="text-lg text-gray-600 max-w-2xl mx-auto">
              Browse our latest active listings in Centennial Hills and surrounding areas
            </p>
          </div>
          
          {/* RealScout Office Listings - Primary Lead Generator */}
          <RealScoutOfficeListings
            agentEncodedId="QWdlbnQtMjI1MDUw"
            sortOrder="NEWEST"
            listingStatus="For Sale"
            propertyTypes=",SFR"
            priceMin="300000"
            priceMax="1000000"
          />
        </section>

        <h2>Current Market Overview</h2>
        <p>Centennial Hills offers exceptional value with homes ranging from $300,000 to over $1 million. The area has seen consistent growth with new developments like Sky Canyon and Providence adding modern amenities and luxury features. Our active listings include single-family homes, townhouses, and luxury estates with mountain views and resort-style living.</p>

        <h2>Featured Property Types</h2>
        <p>Browse our curated selection of Centennial Hills homes for sale including move-in ready properties, new construction homes from top builders, and luxury estates with premium finishes. Each listing includes detailed photos, virtual tours, and comprehensive neighborhood information to help you make an informed decision.</p>

        <h2>Neighborhood Highlights</h2>
        <p>Centennial Hills encompasses several distinct areas including the established communities around Alexander Road, the newer Sky Canyon development, and the luxury Providence community. Each area offers unique amenities from golf course access to hiking trails and top-rated schools.</p>

        <h2>Why Choose Centennial Hills</h2>
        <p>Centennial Hills combines suburban tranquility with urban convenience, offering easy access to Las Vegas attractions while maintaining a family-friendly atmosphere. The area features excellent schools, shopping centers, and recreational facilities, making it ideal for families, professionals, and retirees.</p>

        <h2>Expert Guidance Available</h2>
        <p>Dr. Janet Duffy provides personalized service for all Centennial Hills home buyers, offering market insights, neighborhood tours, and negotiation expertise. Contact us today to schedule a private showing or discuss your specific requirements for Centennial Hills homes for sale.</p>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Centennial Hills Homes for Sale - Active Listings | Dr. Janet Duffy',
  meta: [
    {
      name: 'description',
      content: 'Browse active Centennial Hills homes for sale with Dr. Janet Duffy. Luxury properties, new construction, and established neighborhoods in Las Vegas\' premier northwest community.',
    },
  ],
};






