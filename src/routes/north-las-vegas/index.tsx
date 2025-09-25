import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <>
      <div class="container container-center">
        <h1>North Las Vegas Real Estate - Growing Community</h1>
        
        <h2>Discover North Las Vegas Living</h2>
        <p>Explore the dynamic North Las Vegas real estate market featuring new developments, established neighborhoods, and growing communities. North Las Vegas offers excellent value with newer construction, planned communities, and convenient access to major employment centers, making it ideal for families, professionals, and investors.</p>

        <h2>New Development Opportunities</h2>
        <p>North Las Vegas continues to experience significant growth with new master-planned communities, shopping centers, and infrastructure improvements. The area features modern homes with contemporary designs, energy-efficient features, and community amenities including parks, schools, and recreational facilities.</p>

        <h2>Neighborhood Highlights</h2>
        <p>North Las Vegas encompasses diverse neighborhoods including Aliante, Sky Canyon, and Providence, each offering unique characteristics and amenities. The area features excellent schools, medical facilities, and shopping centers while maintaining easy access to downtown Las Vegas and the Las Vegas Strip.</p>

        <h2>Investment and Growth Potential</h2>
        <p>North Las Vegas presents strong investment opportunities with new construction, planned development, and growing demand for housing. The area's proximity to major employers, transportation infrastructure, and recreational amenities makes it attractive for both owner-occupants and real estate investors.</p>

        <h2>Transportation and Accessibility</h2>
        <p>North Las Vegas offers excellent transportation options with direct access to I-15, US-95, and I-215 for easy commuting throughout the Las Vegas valley. The area is well-positioned for commuters to downtown Las Vegas, the Strip, and major employment centers with typical commute times of 20-40 minutes.</p>

        <h2>Quality of Life and Amenities</h2>
        <p>Residents enjoy a high quality of life with access to parks, recreational facilities, shopping centers, and entertainment venues. North Las Vegas offers a suburban lifestyle with urban conveniences, excellent schools, and family-friendly communities perfect for raising children and building long-term roots.</p>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: 'North Las Vegas Real Estate - Growing Community | Dr. Janet Duffy',
  meta: [
    {
      name: 'description',
      content: 'Explore North Las Vegas real estate with Dr. Janet Duffy. New developments, established neighborhoods, and investment opportunities in growing Las Vegas community.',
    },
  ],
};






