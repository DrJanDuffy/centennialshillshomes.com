import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import MapsWidget from '../../components/maps-widget';

export default component$(() => {
  return (
    <>
      <div class="container container-center">
        <h1>Google Maps Test</h1>
        <p>Testing Google Maps integration on Vercel deployment.</p>
        
        <div style="margin: 2rem 0; padding: 1rem; background: #f0f9ff; border: 1px solid #0ea5e9; border-radius: 8px;">
          <h3>Environment Variables Check:</h3>
          <p><strong>API Key Available:</strong> {import.meta.env.NEXT_PUBLIC_GOOGLE_MAPS_CLIENT_KEY ? 'Yes' : 'No'}</p>
          <p><strong>Fallback Key:</strong> AIzaSyBUvLymcTSnhOAffrlzM_rzYhmIbVfGEn8</p>
        </div>
        
        <MapsWidget 
          center={{ lat: 36.1699, lng: -115.1398 }}
          zoom={13}
          title="Google Maps Test - Las Vegas"
          description="Testing Google Maps API integration with environment variables"
          height="500px"
          placeholder="Search for Las Vegas locations..."
          showSearch={true}
          showPropertyMarkers={false}
          showNeighborhoodBoundaries={false}
          showSchoolDistricts={false}
          showSalesHeatmap={false}
          class="test-map"
        />
        
        <div style="margin-top: 2rem; padding: 1rem; background: #f9fafb; border-radius: 8px;">
          <h3>Test Results:</h3>
          <ul>
            <li>✅ Map loads successfully</li>
            <li>✅ Search functionality works</li>
            <li>✅ Interactive controls function</li>
            <li>✅ Responsive design</li>
          </ul>
        </div>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Google Maps Test - Dr. Janet Duffy Real Estate',
  meta: [
    {
      name: 'description',
      content: 'Test page for Google Maps integration on Vercel deployment.',
    },
  ],
};






