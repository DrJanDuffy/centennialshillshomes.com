import { component$, useVisibleTask$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { useSignal } from '@builder.io/qwik';

export default component$(() => {
  const viteApiKey = useSignal<string | undefined>(undefined);
  const isClient = useSignal(false);

  useVisibleTask$(() => {
    isClient.value = true;
    viteApiKey.value = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
  });

  return (
    <>
      <div class="container container-center">
        <h1>Google Maps API Key Test</h1>
        <p>Testing both Google Maps API keys to determine which one works.</p>
        
        <div style="margin: 2rem 0; padding: 1rem; background: #f0f9ff; border: 1px solid #0ea5e9; border-radius: 8px;">
          <h3>Environment Variables Status:</h3>
          <div style="margin: 1rem 0;">
          {!isClient.value ? (
            <p>Loading environment variable status...</p>
          ) : (
            <>
              <p><strong>VITE_GOOGLE_MAPS_API_KEY:</strong> 
                <span style="color: {viteApiKey.value ? 'green' : 'red'};">
                  {viteApiKey.value ? '✅ Available' : '❌ Not Available'}
                </span>
              </p>
              <p><strong>Fallback Key:</strong> AIzaSyBUvLymcTSnhOAffrlzM_rzYhmIbVfGEn8 ✅ Available</p>
            </>
          )}
          </div>
        </div>

        <div style="margin: 2rem 0; padding: 1rem; background: #fef3c7; border: 1px solid #f59e0b; border-radius: 8px;">
          <h3>Test Instructions:</h3>
          <ol>
            <li>Visit the map test page: <a href="/map-test" style="color: #0ea5e9;">/map-test</a></li>
            <li>Check if the map loads successfully</li>
            <li>Try searching for a location</li>
            <li>Check browser console for any API key errors</li>
          </ol>
        </div>

        <div style="margin: 2rem 0; padding: 1rem; background: #f9fafb; border-radius: 8px;">
          <h3>API Key Recommendations:</h3>
          <div style="margin: 1rem 0;">
            <h4>For Qwik/Vite Applications:</h4>
            <p>Use environment variables with <code>VITE_</code> prefix:</p>
            <ul>
              <li><code>VITE_GOOGLE_MAPS_API_KEY</code> - Server-side API key</li>
              <li><code>VITE_GOOGLE_MAPS_CLIENT_KEY</code> - Client-side API key</li>
            </ul>
          </div>
          
          <div style="margin: 1rem 0;">
            <h4>For Next.js Applications:</h4>
            <p>Use environment variables with <code>NEXT_PUBLIC_</code> prefix:</p>
            <ul>
              <li><code>NEXT_PUBLIC_GOOGLE_MAPS_API_KEY</code> - Server-side API key</li>
              <li><code>NEXT_PUBLIC_GOOGLE_MAPS_CLIENT_KEY</code> - Client-side API key</li>
            </ul>
          </div>
        </div>

        <div style="margin: 2rem 0; padding: 1rem; background: #ecfdf5; border: 1px solid #10b981; border-radius: 8px;">
          <h3>Next Steps:</h3>
          <ol>
            <li>Test the current configuration at <a href="/map-test" style="color: #0ea5e9;">/map-test</a></li>
            <li>If maps don't load, check browser console for errors</li>
            <li>Update environment variables in Vercel dashboard</li>
            <li>Redeploy after making changes</li>
          </ol>
        </div>

        <div style="margin: 2rem 0; text-align: center;">
          <a href="/map-test" style="display: inline-block; padding: 1rem 2rem; background: #3b82f6; color: white; text-decoration: none; border-radius: 8px; font-weight: bold;">
            Test Google Maps Now
          </a>
        </div>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Google Maps API Test - Dr. Janet Duffy Real Estate',
  meta: [
    {
      name: 'description',
      content: 'Test page for Google Maps API key configuration.',
    },
  ],
};
