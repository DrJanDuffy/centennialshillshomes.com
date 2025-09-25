import { component$, useVisibleTask$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <>
      <div class="container mx-auto px-4 py-8">
        <h1 class="text-3xl font-bold mb-8">RealScout Widget Test</h1>
        
        <div class="mb-8">
          <h2 class="text-2xl font-semibold mb-4">Office Listings Widget</h2>
          <div id="realscout-office-listings" class="border border-gray-300 p-4 rounded-lg min-h-96">
            <div class="text-center py-8">
              <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
              <p>Loading RealScout office listings widget...</p>
            </div>
          </div>
        </div>
        
        <div class="mb-8">
          <h2 class="text-2xl font-semibold mb-4">Advanced Search Widget</h2>
          <div id="realscout-advanced-search" class="border border-gray-300 p-4 rounded-lg min-h-96">
            <div class="text-center py-8">
              <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
              <p>Loading RealScout advanced search widget...</p>
            </div>
          </div>
        </div>
        
        <div class="text-center">
          <a href="/" class="btn btn-primary">Back to Homepage</a>
        </div>
      </div>
      
      <script dangerouslySetInnerHTML={`
        // Load RealScout script
        const script = document.createElement('script');
        script.src = 'https://em.realscout.com/widgets/realscout-web-components.umd.js';
        script.type = 'module';
        script.async = true;
        document.head.appendChild(script);
        
        // Add styles
        const style = document.createElement('style');
        style.textContent = \`
          realscout-office-listings {
            --rs-listing-divider-color: #0e64c8;
            width: 100%;
          }
          realscout-advanced-search {
            --rs-as-button-color: #1e40af;
            width: 100%;
          }
        \`;
        document.head.appendChild(style);
        
        // Wait for script to load then create widgets
        script.onload = function() {
          console.log('RealScout script loaded');
          
          // Office listings widget
          const officeContainer = document.getElementById('realscout-office-listings');
          if (officeContainer) {
            officeContainer.innerHTML = \`
              <realscout-office-listings 
                agent-encoded-id="QWdlbnQtMjI1MDUw" 
                sort-order="NEWEST" 
                listing-status="For Sale" 
                property-types=",SFR" 
                price-min="500000" 
                price-max="600000">
              </realscout-office-listings>
            \`;
          }
          
          // Advanced search widget
          const searchContainer = document.getElementById('realscout-advanced-search');
          if (searchContainer) {
            searchContainer.innerHTML = \`
              <realscout-advanced-search agent-encoded-id="QWdlbnQtMjI1MDUw"></realscout-advanced-search>
            \`;
          }
        };
        
        script.onerror = function() {
          console.error('Failed to load RealScout script');
          document.getElementById('realscout-office-listings').innerHTML = '<p class="text-red-600">Failed to load RealScout widget</p>';
          document.getElementById('realscout-advanced-search').innerHTML = '<p class="text-red-600">Failed to load RealScout widget</p>';
        };
      `} />
    </>
  );
});

export const head: DocumentHead = {
  title: 'RealScout Widget Test | Centennial Hills Homes',
  meta: [
    {
      name: 'description',
      content: 'Test page for RealScout widgets integration',
    },
  ],
};
