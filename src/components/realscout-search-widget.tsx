import { component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';

interface RealScoutSearchWidgetProps {
  agentEncodedId?: string;
  height?: string;
  width?: string;
}

export default component$<RealScoutSearchWidgetProps>((props) => {
  const widgetRef = useSignal<HTMLDivElement>();
  const isLoaded = useSignal(false);
  const hasError = useSignal(false);

  const {
    agentEncodedId = 'QWdlbnQtMjI1MDUw', // Dr. Jan Duffy's RealScout agent ID
    height = '600px',
    width = '100%'
  } = props;

  useVisibleTask$(async ({ track }) => {
    track(() => widgetRef.value);
    
    if (!widgetRef.value || isLoaded.value) return;

    // Check if we're in the browser
    if (typeof window === 'undefined') return;

    try {
      // Load RealScout Web Components
      const script = document.createElement('script');
      script.type = 'module';
      script.src = 'https://em.realscout.com/widgets/realscout-web-components.umd.js';
      script.async = true;

      script.onload = () => {
        console.log('RealScout search script loaded successfully');
        
        // Add custom styles for RealScout widget
        const style = document.createElement('style');
        style.textContent = `
          realscout-advanced-search {
            --rs-as-button-text-color: #ffffff;
            --rs-as-background-color: #ffffff;
            --rs-as-button-color: #1e40af;
            --rs-as-widget-width: ${width} !important;
            width: ${width} !important;
            height: ${height} !important;
            min-height: 600px;
          }
          
          realscout-advanced-search img {
            max-width: 100%;
            height: auto;
          }
        `;
        document.head.appendChild(style);

        // Create the widget immediately after script loads
        if (widgetRef.value) {
          widgetRef.value.innerHTML = `
            <realscout-advanced-search agent-encoded-id="${agentEncodedId}"></realscout-advanced-search>
          `;
          isLoaded.value = true;
        }
      };

      script.onerror = () => {
        hasError.value = true;
        isLoaded.value = true;
        
        // Show fallback content
        if (widgetRef.value) {
          widgetRef.value.innerHTML = `
            <div class="realscout-fallback bg-white rounded-lg p-8 text-center">
              <div class="mb-4">
                <svg class="w-16 h-16 text-blue-600 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"/>
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-2">Advanced MLS Search</h3>
              <p class="text-gray-600 mb-6">
                Search thousands of Las Vegas properties with our advanced MLS integration
              </p>
              <div class="space-y-3">
                <a href="/mls-search" class="btn btn-primary w-full">
                  Browse All Listings
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
    } catch (error) {
      console.error('Error loading RealScout widget:', error);
      hasError.value = true;
      isLoaded.value = true;
      
      // Show fallback content
      if (widgetRef.value) {
        widgetRef.value.innerHTML = `
          <div class="realscout-fallback bg-white rounded-lg p-8 text-center">
            <div class="mb-4">
              <svg class="w-16 h-16 text-blue-600 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">Property Search</h3>
            <p class="text-gray-600 mb-6">
              Find your perfect home in Centennial Hills and surrounding areas
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a href="/centennial-hills-homes-for-sale" class="btn btn-primary">
                Centennial Hills Homes
              </a>
              <a href="/mls-search" class="btn btn-outline">
                Full MLS Search
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
      style={{ height: height, width: width }}
      class="realscout-widget-container"
    >
      {!isLoaded.value && !hasError.value && (
        <div class="flex items-center justify-center h-full bg-gray-50 rounded-lg">
          <div class="text-center">
            <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p class="text-gray-600">Loading RealScout MLS search...</p>
            <p class="text-sm text-gray-500 mt-2">Connecting to live property data</p>
          </div>
        </div>
      )}
    </div>
  );
});
