import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-3xl font-bold mb-8">RealScout Simple Test</h1>
      
      <div class="mb-8">
        <h2 class="text-2xl font-semibold mb-4">Office Listings Widget</h2>
        <div class="border border-gray-300 p-4 rounded-lg min-h-96">
          {/* Direct RealScout Office Listings Widget */}
          <script src="https://em.realscout.com/widgets/realscout-web-components.umd.js" type="module"></script>
          <style dangerouslySetInnerHTML={`
            realscout-office-listings {
              --rs-listing-divider-color: #0e64c8;
              width: 100%;
            }
          `}></style>
          <realscout-office-listings 
            agent-encoded-id="QWdlbnQtMjI1MDUw" 
            sort-order="NEWEST" 
            listing-status="For Sale" 
            property-types=",SFR" 
            price-min="500000" 
            price-max="600000">
          </realscout-office-listings>
        </div>
      </div>
      
      <div class="mb-8">
        <h2 class="text-2xl font-semibold mb-4">Advanced Search Widget</h2>
        <div class="border border-gray-300 p-4 rounded-lg min-h-96">
          {/* Direct RealScout Advanced Search Widget */}
          <realscout-advanced-search agent-encoded-id="QWdlbnQtMjI1MDUw"></realscout-advanced-search>
        </div>
      </div>
      
      <div class="text-center">
        <a href="/" class="btn btn-primary">Back to Homepage</a>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'RealScout Simple Test - Centennial Hills Real Estate',
  meta: [
    {
      name: 'description',
      content: 'Test page for RealScout widgets integration',
    },
  ],
};
