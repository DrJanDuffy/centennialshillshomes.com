import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <>
      <div class="container container-center">
        <h1>Active Listings - Current Las Vegas Properties for Sale</h1>
        
        <h2>Live Property Inventory</h2>
        <p>Browse our current active listings featuring the latest Las Vegas properties for sale, including luxury homes, new construction, and investment opportunities. Our active inventory includes properties across Centennial Hills, Summerlin, Henderson, and other premier Las Vegas neighborhoods with real-time availability and pricing.</p>

        <h2>Centennial Hills Active Listings</h2>
        <p>Explore current Centennial Hills active listings including single-family homes, luxury estates, townhouses, and new construction opportunities. Our Centennial Hills inventory features properties across ZIP codes 89135, 89138, and 89144, showcasing the diversity and quality of homes available in northwest Las Vegas' premier community.</p>

        <h2>Property Categories and Types</h2>
        <p>Search active listings by property type including single-family homes, condominiums, townhouses, luxury estates, and investment properties. Each listing includes detailed descriptions, high-quality photos, virtual tours, and comprehensive neighborhood information to help you make informed decisions about your Las Vegas property purchase.</p>

        <h2>Market Status and Pricing</h2>
        <p>Stay updated with current market pricing, days on market, and price adjustments for all active listings. Our market analysis helps you understand pricing trends, competition levels, and negotiation opportunities for properties in your desired Las Vegas neighborhoods and price ranges.</p>

        <h2>Featured and New Listings</h2>
        <p>Discover our featured properties and newest listings, including luxury homes with premium features, new construction opportunities, and unique properties with special characteristics. Our featured listings showcase the best available properties in Las Vegas with detailed analysis of their investment potential and lifestyle benefits.</p>

        <h2>Schedule Property Tours</h2>
        <p>Arrange private showings for any active listing with Dr. Janet Duffy's personalized tour service. We provide detailed property analysis, neighborhood insights, and market comparisons during your property visits, ensuring you have all the information needed to make confident decisions about your Las Vegas home purchase.</p>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Active Listings - Current Las Vegas Properties for Sale | Dr. Janet Duffy',
  meta: [
    {
      name: 'description',
      content: 'Browse active Las Vegas property listings with Dr. Janet Duffy. Current homes for sale in Centennial Hills, luxury properties, and investment opportunities.',
    },
  ],
};






