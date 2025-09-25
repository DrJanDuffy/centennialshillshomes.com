import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import MapsWidget from '../../components/maps-widget';

export default component$(() => {
  return (
    <>
      <div class="container container-center">
        <h1>Contact Dr. Janet Duffy - Las Vegas Real Estate Expert</h1>
        
        <h2>Get In Touch Today</h2>
        <p>Ready to buy or sell real estate in Centennial Hills or Las Vegas? Contact Dr. Janet Duffy for personalized service and expert guidance. With 30+ years of research expertise and Top 1% REALTOR® status, Dr. Duffy provides the knowledge and dedication needed for successful real estate transactions.</p>

        <h2>Phone and Email</h2>
        <p>Call Dr. Janet Duffy directly at (702) 903-1952 for immediate assistance with your real estate needs. Available 24/7 for executive clients and urgent inquiries. Email for detailed questions, property information, or to schedule consultations. Dr. Duffy personally responds to all inquiries to ensure you receive the attention and expertise you deserve.</p>

        <h2>Office Location and Hours</h2>
        <p>Dr. Janet Duffy serves clients throughout Las Vegas with special focus on Centennial Hills, Summerlin, and northwest Las Vegas communities. Flexible scheduling accommodates busy professionals, executives, and families. Evening and weekend appointments available by request to meet your schedule and timeline requirements.</p>
        
        {/* Interactive Map Section */}
        <MapsWidget 
          center={{ lat: 36.1699, lng: -115.1398 }}
          zoom={11}
          title="Las Vegas Service Area"
          description="Dr. Janet Duffy serves clients throughout Las Vegas with expertise in Centennial Hills, Summerlin, and northwest Las Vegas communities"
          height="400px"
          placeholder="Search for your neighborhood or address..."
          showSearch={true}
          class="contact-map"
        />

        <h2>Specialized Services Available</h2>
        <p>Contact Dr. Duffy for specialized services including luxury home sales, California equity buyer assistance, corporate relocations, investment property guidance, and first-time homebuyer support. Each consultation includes market analysis, neighborhood insights, and personalized recommendations based on your specific needs and goals.</p>

        <h2>Free Consultation Process</h2>
        <p>Schedule a complimentary consultation to discuss your real estate goals, market questions, or property needs. Dr. Duffy provides free market analysis, home valuations, and strategic guidance to help you make informed decisions about buying or selling Las Vegas real estate.</p>

        <h2>Client Testimonials and References</h2>
        <p>Dr. Janet Duffy's clients consistently rate her service as exceptional, citing her market expertise, attention to detail, and commitment to client success. Request references from recent clients to learn about their experience working with Dr. Duffy for their Las Vegas real estate transactions.</p>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Contact Dr. Janet Duffy - Las Vegas Real Estate Expert',
  meta: [
    {
      name: 'description',
      content: 'Contact Dr. Janet Duffy for Las Vegas real estate expertise. Call (702) 903-1952 for luxury homes, Centennial Hills properties, and personalized service.',
    },
  ],
};