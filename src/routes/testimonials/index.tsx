import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <>
      <div class="container container-center">
        <h1>Client Testimonials - Dr. Janet Duffy Real Estate Success Stories</h1>
        
        <h2>Trusted by Las Vegas Homebuyers and Sellers</h2>
        <p>Read authentic testimonials from satisfied clients who have worked with Dr. Janet Duffy for their Las Vegas real estate transactions. Our clients consistently praise Dr. Duffy's expertise, professionalism, and dedication to achieving their real estate goals in Centennial Hills and throughout the Las Vegas area.</p>

        <h2>Luxury Home Buyer Testimonials</h2>
        <p>Discover how Dr. Janet Duffy has helped luxury home buyers find their dream properties in Las Vegas' most exclusive communities. Our luxury clients appreciate Dr. Duffy's attention to detail, market expertise, and personalized service that exceeds expectations for high-end real estate transactions.</p>

        <h2>First-Time Homebuyer Success Stories</h2>
        <p>Learn from first-time homebuyers who successfully navigated the Las Vegas real estate market with Dr. Janet Duffy's guidance. These testimonials highlight Dr. Duffy's patient approach, educational support, and commitment to ensuring first-time buyers understand every aspect of the homebuying process.</p>

        <h2>Investment Property Client Reviews</h2>
        <p>Read testimonials from real estate investors who have built successful portfolios with Dr. Janet Duffy's expertise. Our investment clients value Dr. Duffy's market analysis, property evaluation skills, and strategic guidance that helps maximize returns on Las Vegas real estate investments.</p>

        <h2>Corporate Relocation Experiences</h2>
        <p>Explore testimonials from corporate executives and professionals who relocated to Las Vegas with Dr. Janet Duffy's assistance. These clients appreciate Dr. Duffy's understanding of relocation challenges, market knowledge, and personalized service that makes transitioning to Las Vegas seamless and successful.</p>

        <h2>Seller Success Stories</h2>
        <p>Hear from home sellers who achieved optimal results with Dr. Janet Duffy's marketing expertise and negotiation skills. Our seller testimonials demonstrate Dr. Duffy's ability to maximize property values, minimize time on market, and ensure smooth transactions for Las Vegas home sellers.</p>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Client Testimonials - Dr. Janet Duffy Real Estate Success Stories',
  meta: [
    {
      name: 'description',
      content: 'Read client testimonials for Dr. Janet Duffy real estate services. Success stories from Las Vegas homebuyers, sellers, and investors in Centennial Hills.',
    },
  ],
};







