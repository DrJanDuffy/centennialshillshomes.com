import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import MapsWidget from '../../components/maps-widget';
import { centennialHillsProperties } from '../../data/sample-properties';

export default component$(() => {
  return (
    <>
      <div class="container container-center">
        <h1>Maps Integration Test</h1>
        <p>This page tests the enhanced maps widget functionality.</p>
        
        <MapsWidget 
          center={{ lat: 36.3047, lng: -115.3019 }}
          zoom={14}
          title="Test Map - Centennial Hills"
          description="Testing all maps features including property markers, boundaries, and schools"
          height="600px"
          placeholder="Search for test locations..."
          showSearch={true}
          showPropertyMarkers={true}
          showNeighborhoodBoundaries={true}
          showSchoolDistricts={true}
          showSalesHeatmap={true}
          properties={centennialHillsProperties}
          class="test-map"
        />
        
        <div style="margin-top: 2rem; padding: 1rem; background: #f9fafb; border-radius: 8px;">
          <h3>Test Features:</h3>
          <ul>
            <li>✅ Interactive property markers with prices</li>
            <li>✅ Neighborhood boundary lines</li>
            <li>✅ School district markers</li>
            <li>✅ Sales heat map overlay</li>
            <li>✅ Search functionality</li>
            <li>✅ Layer toggle controls</li>
            <li>✅ Mobile responsive design</li>
          </ul>
        </div>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Maps Test - Dr. Janet Duffy Real Estate',
  meta: [
    {
      name: 'description',
      content: 'Test page for enhanced maps integration with property markers, boundaries, and interactive features.',
    },
  ],
};





