import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <>
      <div class="container container-center">
        <h1>Aliante Real Estate - Master-Planned Community</h1>
        
        <h2>Premier Master-Planned Living</h2>
        <p>Experience the best of master-planned community living in Aliante, North Las Vegas' premier residential development. Aliante features carefully designed neighborhoods, extensive amenities, and a strong sense of community, making it one of Las Vegas' most desirable places to live with homes ranging from starter properties to luxury estates.</p>

        <h2>Community Amenities and Features</h2>
        <p>Aliante residents enjoy access to world-class amenities including Aliante Golf Club, Aliante Nature Discovery Park, and Aliante Library. The community features walking trails, playgrounds, and recreational facilities designed to enhance quality of life and provide opportunities for outdoor activities and family recreation.</p>

        <h2>Diverse Housing Options</h2>
        <p>Aliante offers diverse housing options including single-family homes, townhouses, and luxury estates across multiple neighborhoods. The community features homes from various builders with different architectural styles, floor plans, and price points to accommodate buyers at different stages of life and budget levels.</p>

        <h2>Excellent Schools and Education</h2>
        <p>Aliante is served by the Clark County School District with highly-rated schools including Aliante Elementary, Del Webb Middle School, and Shadow Ridge High School. The area also provides access to private school options and is within reasonable distance to higher education institutions including UNLV and Nevada State College.</p>

        <h2>Convenient Location and Access</h2>
        <p>Aliante's location in North Las Vegas provides convenient access to major highways including I-15 and US-95, making commuting throughout the Las Vegas valley efficient. The community is well-positioned for access to downtown Las Vegas, the Strip, and major employment centers while maintaining a suburban atmosphere.</p>

        <h2>Investment and Resale Value</h2>
        <p>Aliante properties have shown consistent appreciation and strong resale values due to the community's master-planned design, quality amenities, and desirable location. The community's reputation for quality living and excellent schools makes it attractive to both owner-occupants and real estate investors seeking stable returns.</p>
      </div>
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






