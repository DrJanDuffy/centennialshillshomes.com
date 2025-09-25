import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import RealScoutOfficeListings from '../../components/realscout-office-listings';

export default component$(() => {
  return (
    <>
      {/* Hero Section */}
      <section class="hero-section">
        <div class="container container-center">
          <h1 class="hero-title">
            New Construction Homes - <span class="highlight">Las Vegas Real Estate</span>
          </h1>
          <p class="hero-subtitle">
            Discover the latest new construction homes throughout Las Vegas featuring modern designs, energy-efficient features, 
            and the latest home technology with warranties and move-in ready convenience.
          </p>
          <div class="hero-buttons">
            <a href="/contact" class="btn btn-primary">New Construction Consultation</a>
            <a href="/properties" class="btn btn-secondary">View New Homes</a>
          </div>
        </div>
      </section>

      {/* Featured New Construction Properties - Lead Generator */}
      <section class="featured-properties-section bg-gray-50 py-16">
        <div class="container container-center">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">
              New Construction Opportunities
            </h2>
            <p class="text-lg text-gray-600 max-w-2xl mx-auto">
              Browse current new construction homes and development opportunities in Las Vegas
            </p>
          </div>
          
          {/* RealScout Office Listings - Primary Lead Generator */}
          <RealScoutOfficeListings
            agentEncodedId="QWdlbnQtMjI1MDUw"
            sortOrder="NEWEST"
            listingStatus="For Sale"
            propertyTypes=",SFR"
            priceMin="400000"
            priceMax="1200000"
          />
          
          <div class="text-center mt-8">
            <a href="/contact" class="btn btn-primary btn-lg">
              Get New Construction Guidance
            </a>
          </div>
        </div>
      </section>

      <div class="container container-center">
        <h2>Brand New Homes Across Las Vegas</h2>
        <p>Discover the latest new construction homes throughout Las Vegas featuring modern designs, energy-efficient features, and the latest home technology. From starter homes to luxury estates, explore new construction opportunities in Centennial Hills, Summerlin, Henderson, and other premier Las Vegas communities with warranties and move-in ready convenience.</p>

        <h2>Featured New Home Communities</h2>
        <p>Explore exciting new construction developments across Las Vegas including master-planned communities, infill developments, and custom home opportunities. Each community offers unique amenities, floor plans, and builder incentives, providing options for every lifestyle and budget from first-time buyers to luxury home seekers.</p>

        <h2>Top-Rated Builders and Developers</h2>
        <p>Work with Las Vegas' most reputable builders including national companies like Lennar, KB Home, and Richmond American, plus local custom builders and luxury developers. Our builder partnerships provide access to pre-construction pricing, preferred lot selection, and exclusive buyer incentives not available to the general public.</p>

        <h2>New Home Advantages and Benefits</h2>
        <p>Enjoy the benefits of new construction including modern amenities, energy efficiency, warranty protection, and customization options. New homes offer the latest in home design with open floor plans, smart home features, and low-maintenance materials, plus the ability to personalize finishes and upgrades to match your preferences.</p>

        <h2>Construction Timeline and Process</h2>
        <p>Understand the new construction process from initial selection through final walkthrough, with typical timelines ranging from 6-12 months depending on the builder and customization level. We guide you through every step including design selections, construction monitoring, and final inspections to ensure your new home meets all expectations.</p>

        <h2>Expert New Construction Guidance</h2>
        <p>Dr. Janet Duffy provides comprehensive assistance for new construction buyers, including builder negotiations, upgrade selections, and construction monitoring. Our expertise ensures you make informed decisions, avoid common pitfalls, and maximize the value of your investment when building your dream home in Las Vegas.</p>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: 'New Construction Homes - Las Vegas Real Estate | Dr. Janet Duffy',
  meta: [
    {
      name: 'description',
      content: 'Explore Las Vegas new construction homes with Dr. Janet Duffy. Brand new homes, modern designs, and builder partnerships across premier communities.',
    },
  ],
};







