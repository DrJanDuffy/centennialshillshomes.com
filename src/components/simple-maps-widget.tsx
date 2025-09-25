import { component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';

// Declare Google Maps types
declare global {
  interface Window {
    google: any;
  }
}

interface PropertyMarker {
  id: string;
  lat: number;
  lng: number;
  price: string;
  address: string;
  beds: number;
  baths: number;
  sqft: number;
  status: 'for-sale' | 'sold' | 'pending';
}

interface SimpleMapsWidgetProps {
  center?: { lat: number; lng: number };
  zoom?: number;
  title?: string;
  height?: string;
  properties?: PropertyMarker[];
}

// Helper functions for marker styling
const getMarkerIcon = (status: string) => {
  const colors = {
    'for-sale': '#22c55e',
    'sold': '#6b7280', 
    'pending': '#f59e0b'
  };
  
  const color = colors[status as keyof typeof colors] || '#3b82f6';
  
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`
    <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 2C10.48 2 6 6.48 6 12c0 8 10 18 10 18s10-10 10-18c0-5.52-4.48-10-10-10z" fill="${color}" stroke="white" stroke-width="2"/>
      <circle cx="16" cy="12" r="4" fill="white"/>
    </svg>
  `)}`;
};

const getStatusColor = (status: string) => {
  const colors = {
    'for-sale': '#22c55e',
    'sold': '#6b7280',
    'pending': '#f59e0b'
  };
  
  return colors[status as keyof typeof colors] || '#3b82f6';
};

export default component$<SimpleMapsWidgetProps>((props) => {
  const mapRef = useSignal<HTMLDivElement>();
  const mapLoaded = useSignal(false);

  const {
    center = { lat: 36.1699, lng: -115.1398 },
    zoom = 12,
    title = "Map",
    height = "400px",
    properties = [],
  } = props;

  useVisibleTask$(async ({ track }) => {
    track(() => mapRef.value);
    
    if (!mapRef.value || mapLoaded.value) return;

    // Check if we're in the browser
    if (typeof window === 'undefined') return;

    try {
      // Load Google Maps API dynamically
      if (!window.google || !window.google.maps) {
        const script = document.createElement('script');
        // Use environment variable for API key
        const apiKey = import.meta.env.PUBLIC_GOOGLE_MAPS_API_KEY || 'AIzaSyBUvLymcTSnhOAffrlzM_rzYhmIbVfGEn8';
        script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`;
        script.async = true;
        script.defer = true;
        document.head.appendChild(script);
        
        await new Promise((resolve, reject) => {
          script.onload = resolve;
          script.onerror = reject;
        });
      }

      // Initialize map
      const map = new (window as any).google.maps.Map(mapRef.value, {
        center: center,
        zoom: zoom,
        styles: [
          {
            featureType: "poi",
            elementType: "labels",
            stylers: [{ visibility: "off" }]
          }
        ]
      });

      // Add property markers if provided
      if (properties.length > 0) {
        properties.forEach((property) => {
          const marker = new (window as any).google.maps.Marker({
            position: { lat: property.lat, lng: property.lng },
            map: map,
            title: `${property.address} - $${property.price}`,
            icon: {
              url: getMarkerIcon(property.status),
              scaledSize: new (window as any).google.maps.Size(32, 32),
            }
          });

          // Add info window
          const infoWindow = new (window as any).google.maps.InfoWindow({
            content: `
              <div style="padding: 8px; min-width: 200px;">
                <h3 style="margin: 0 0 8px 0; color: #1f2937; font-size: 16px;">$${property.price}</h3>
                <p style="margin: 0 0 8px 0; color: #6b7280; font-size: 14px;">${property.address}</p>
                <div style="display: flex; gap: 12px; margin: 0 0 8px 0; font-size: 12px; color: #6b7280;">
                  <span>${property.beds} bed</span>
                  <span>${property.baths} bath</span>
                  <span>${property.sqft.toLocaleString()} sq ft</span>
                </div>
                <span style="display: inline-block; padding: 2px 8px; border-radius: 12px; font-size: 10px; font-weight: 600; text-transform: uppercase; background: ${getStatusColor(property.status)}; color: white;">
                  ${property.status.replace('-', ' ')}
                </span>
              </div>
            `
          });

          marker.addListener('click', () => {
            infoWindow.open(map, marker);
          });
        });
      } else {
        // Add a simple marker if no properties
        new (window as any).google.maps.Marker({
          position: center,
          map: map,
          title: title,
        });
      }

      mapLoaded.value = true;
    } catch (error) {
      console.error('Error loading map:', error);
    }
  });

  return (
    <div style={{ width: '100%', height: height, border: '1px solid #ccc', borderRadius: '8px' }}>
      <div ref={mapRef} style={{ width: '100%', height: '100%' }}>
        {!mapLoaded.value && (
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            height: '100%', 
            backgroundColor: '#f3f4f6',
            color: '#6b7280'
          }}>
            Loading map...
          </div>
        )}
      </div>
    </div>
  );
});

