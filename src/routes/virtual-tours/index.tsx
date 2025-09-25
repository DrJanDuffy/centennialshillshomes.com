import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <>
      <div class="container container-center">
        <h1>Virtual Tours - Las Vegas Property Walkthroughs</h1>
        
        <h2>Immersive Property Experiences</h2>
        <p>Explore Las Vegas properties through our comprehensive virtual tour collection featuring 360-degree walkthroughs, detailed property photography, and interactive floor plans. Our virtual tours allow you to experience Centennial Hills homes, luxury estates, and investment properties from anywhere in the world with professional-quality presentations.</p>

        <h2>Centennial Hills Virtual Tours</h2>
        <p>Take virtual tours of Centennial Hills properties including luxury homes, new construction, and established neighborhoods. Our Centennial Hills virtual tours showcase the area's natural beauty, mountain views, and community amenities while highlighting each property's unique features and architectural details.</p>

        <h2>Luxury Property Showcases</h2>
        <p>Experience Las Vegas luxury properties through high-definition virtual tours featuring custom estates, premium finishes, and resort-style amenities. Our luxury virtual tours provide detailed views of gourmet kitchens, master suites, outdoor living spaces, and special features that make each property unique.</p>

        <h2>Investment Property Presentations</h2>
        <p>Review investment properties through virtual tours designed to highlight rental potential, renovation opportunities, and market positioning. Our investment property tours include detailed analysis of property condition, layout efficiency, and income potential to help investors make informed decisions.</p>

        <h2>New Construction Virtual Tours</h2>
        <p>Explore new construction homes through virtual tours showcasing modern floor plans, contemporary designs, and builder upgrades. Our new construction tours help you visualize finished homes, understand layout options, and make informed decisions about customization and upgrades.</p>

        <h2>Interactive Property Features</h2>
        <p>Our virtual tours include interactive features such as clickable hotspots, detailed property information, neighborhood maps, and market data. Experience properties in detail with the ability to explore specific rooms, view property specifications, and access additional resources for informed decision-making.</p>
      </div>
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







