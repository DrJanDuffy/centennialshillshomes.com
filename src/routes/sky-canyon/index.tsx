import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <>
      <div class="container container-center">
        <h1>Sky Canyon Real Estate - Modern New Development</h1>
        
        <h2>Contemporary Living in Sky Canyon</h2>
        <p>Discover Sky Canyon, North Las Vegas' newest master-planned community featuring modern homes, contemporary designs, and innovative amenities. Sky Canyon represents the future of Las Vegas living with energy-efficient homes, smart home technology, and community features designed for modern lifestyles and environmental sustainability.</p>

        <h2>New Construction Opportunities</h2>
        <p>Sky Canyon offers brand new homes from leading builders including Lennar, KB Home, and Richmond American, featuring the latest in home design and technology. The community provides various floor plans, customization options, and modern finishes to create your ideal home in Las Vegas' premier new development.</p>

        <h2>Innovative Community Design</h2>
        <p>Sky Canyon's master-planned design includes innovative features such as smart home technology, energy-efficient construction, and sustainable landscaping. The community emphasizes connectivity, walkability, and environmental responsibility while providing modern amenities and recreational opportunities for residents of all ages.</p>

        <h2>Recreational and Lifestyle Amenities</h2>
        <p>Sky Canyon residents enjoy access to community parks, walking trails, and recreational facilities designed to promote healthy living and community interaction. The development includes planned amenities such as community centers, playgrounds, and outdoor gathering spaces to enhance the resident experience and quality of life.</p>

        <h2>Future Growth and Development</h2>
        <p>Sky Canyon is positioned for continued growth and development with planned phases, commercial centers, and infrastructure improvements. The community's strategic location and master-planned design ensure long-term value appreciation and continued enhancement of amenities and services for residents.</p>

        <h2>Investment Potential</h2>
        <p>Sky Canyon presents excellent investment opportunities with new construction, modern amenities, and growing demand for contemporary housing in North Las Vegas. The community's innovative design, energy efficiency, and location make it attractive to both owner-occupants and investors seeking properties with strong appreciation potential.</p>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Sky Canyon Real Estate - Modern New Development | Dr. Janet Duffy',
  meta: [
    {
      name: 'description',
      content: 'Explore Sky Canyon real estate with Dr. Janet Duffy. New construction homes, modern amenities, and innovative community design in North Las Vegas.',
    },
  ],
};







