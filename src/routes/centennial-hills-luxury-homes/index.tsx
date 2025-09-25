import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <>
      <div class="container container-center">
        <h1>Centennial Hills Luxury Homes - Premium Properties</h1>
        
        <h2>Exclusive Luxury Living in Centennial Hills</h2>
        <p>Discover the finest Centennial Hills luxury homes featuring custom architecture, premium finishes, and breathtaking mountain views. Our luxury portfolio includes estates from $500,000 to over $1.5 million, showcasing the pinnacle of Las Vegas northwest living with resort-style amenities and designer details.</p>

        <h2>Luxury Home Features</h2>
        <p>Centennial Hills luxury homes feature gourmet kitchens with high-end appliances, master suites with spa-like bathrooms, outdoor living spaces with pools and fire features, and smart home technology. Many properties include mountain views, golf course access, and premium finishes throughout.</p>

        <h2>Exclusive Communities</h2>
        <p>Our luxury homes are located in Centennial Hills' most prestigious communities including Providence with its custom estates, Sky Canyon with modern luxury designs, and established neighborhoods with mature landscaping and privacy. Each community offers unique amenities and architectural styles.</p>

        <h2>Luxury Market Insights</h2>
        <p>The Centennial Hills luxury market has shown strong appreciation with limited inventory driving premium pricing. Luxury buyers appreciate the area's privacy, proximity to Red Rock Canyon, and access to top-rated schools while maintaining easy access to Las Vegas Strip and downtown amenities.</p>

        <h2>Custom Home Options</h2>
        <p>For discerning buyers seeking ultimate customization, we offer access to Centennial Hills' finest custom home builders and architects. Create your dream luxury home with personalized design elements, premium materials, and cutting-edge technology in Las Vegas' most desirable northwest location.</p>

        <h2>Concierge-Level Service</h2>
        <p>Dr. Janet Duffy provides white-glove service for luxury home buyers, including private showings, market analysis, and connections to the area's finest contractors and service providers. Experience personalized attention and expertise that matches the luxury of Centennial Hills homes.</p>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Centennial Hills Luxury Homes - Premium Properties | Dr. Janet Duffy',
  meta: [
    {
      name: 'description',
      content: 'Explore Centennial Hills luxury homes with Dr. Janet Duffy. Custom estates, premium finishes, and mountain views in Las Vegas\' premier northwest luxury communities.',
    },
  ],
};







