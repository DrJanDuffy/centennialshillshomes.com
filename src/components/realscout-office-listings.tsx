import { component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';

interface RealScoutOfficeListingsProps {
  agentEncodedId?: string;
  sortOrder?: 'NEWEST' | 'OLDEST' | 'PRICE_HIGH_TO_LOW' | 'PRICE_LOW_TO_HIGH';
  listingStatus?: 'For Sale' | 'Sold' | 'Pending';
  propertyTypes?: string;
  priceMin?: string;
  priceMax?: string;
  height?: string;
}

export default component$<RealScoutOfficeListingsProps>((props) => {
  const widgetRef = useSignal<HTMLDivElement>();
  const isLoaded = useSignal(false);
  const hasError = useSignal(false);

  const {
    agentEncodedId = 'QWdlbnQtMjI1MDUw', // Dr. Jan Duffy's RealScout agent ID
    sortOrder = 'NEWEST',
    listingStatus = 'For Sale',
    propertyTypes = ',SFR', // Single Family Residential
    priceMin = '500000',
    priceMax = '600000',
    height = 'auto'
  } = props;

  useVisibleTask$(async ({ track }) => {
    track(() => widgetRef.value);
    
    if (!widgetRef.value || isLoaded.value) return;

    // Check if we're in the browser
    if (typeof window === 'undefined') return;

    try {
      console.log('Loading RealScout office listings widget...');
      
      // Add the RealScout script and styles exactly as provided
      const script = document.createElement('script');
      script.src = 'https://em.realscout.com/widgets/realscout-web-components.umd.js';
      script.type = 'module';
      script.async = true;
      
      const style = document.createElement('style');
      style.textContent = `
        realscout-office-listings {
          --rs-listing-divider-color: #1e40af;
          width: 100%;
        }
      `;
      document.head.appendChild(style);

      script.onload = () => {
        console.log('RealScout script loaded successfully');
        
        // Create the widget immediately
        if (widgetRef.value) {
          widgetRef.value.innerHTML = `
            <realscout-office-listings 
              agent-encoded-id="${agentEncodedId}" 
              sort-order="${sortOrder}" 
              listing-status="${listingStatus}" 
              property-types="${propertyTypes}" 
              price-min="${priceMin}" 
              price-max="${priceMax}"
            ></realscout-office-listings>
          `;
          isLoaded.value = true;
        }
      };

      script.onerror = (error) => {
        console.error('Failed to load RealScout script:', error);
        hasError.value = true;
        isLoaded.value = true;
        
        // Show fallback content
        if (widgetRef.value) {
          widgetRef.value.innerHTML = `
            <div class="realscout-fallback bg-white rounded-lg p-8 text-center">
              <div class="mb-4">
                <svg class="w-16 h-16 text-blue-600 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-2">Featured Properties</h3>
              <p class="text-gray-600 mb-6">
                Browse our latest Centennial Hills listings
              </p>
              <div class="space-y-3">
                <a href="/centennial-hills-homes-for-sale" class="btn btn-primary w-full">
                  View All Properties
                </a>
                <a href="/contact" class="btn btn-outline w-full">
                  Get Personal Assistance
                </a>
              </div>
            </div>
          `;
        }
      };

      document.head.appendChild(script);
      
      // Also append script to document head immediately for better loading
      if (!document.querySelector('script[src="https://em.realscout.com/widgets/realscout-web-components.umd.js"]')) {
        document.head.appendChild(script);
      }
    } catch (error) {
      console.error('Error loading RealScout office listings:', error);
      hasError.value = true;
      isLoaded.value = true;
      
      // Show fallback content
      if (widgetRef.value) {
        widgetRef.value.innerHTML = `
          <div class="realscout-fallback bg-white rounded-lg p-8 text-center">
            <div class="mb-4">
              <svg class="w-16 h-16 text-blue-600 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">Featured Properties</h3>
            <p class="text-gray-600 mb-6">
              Find your perfect home in Centennial Hills
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a href="/centennial-hills-homes-for-sale" class="btn btn-primary">
                Centennial Hills Homes
              </a>
              <a href="/contact" class="btn btn-outline">
                Contact Dr. Janet Duffy
              </a>
            </div>
          </div>
        `;
      }
    }
  });

  return (
    <div 
      ref={widgetRef}
      style={{ height: height }}
      class="realscout-office-listings-container"
    >
      {!isLoaded.value && !hasError.value && (
        <div class="flex items-center justify-center h-32 bg-gray-50 rounded-lg">
          <div class="text-center">
            <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-2"></div>
            <p class="text-gray-600 text-sm">Loading featured properties...</p>
          </div>
        </div>
      )}
    </div>
  );
});
