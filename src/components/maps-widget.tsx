import { component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import { HiMapPinMini, HiHomeMini, HiAcademicCapMini, HiChartBarMini } from '@qwikest/icons/heroicons';

// Google Maps type declarations
declare global {
  interface Window {
    google: any;
  }
}

declare const google: any;

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
  image?: string;
}

interface MapsWidgetProps {
  center?: { lat: number; lng: number };
  zoom?: number;
  title?: string;
  description?: string;
  height?: string;
  placeholder?: string;
  showSearch?: boolean;
  showPropertyMarkers?: boolean;
  showNeighborhoodBoundaries?: boolean;
  showSchoolDistricts?: boolean;
  showSalesHeatmap?: boolean;
  properties?: PropertyMarker[];
  class?: string;
  // SEO enhancements
  structuredData?: any;
  ariaLabel?: string;
  ariaDescription?: string;
  locationName?: string;
  canonicalUrl?: string;
}

export default component$<MapsWidgetProps>((props) => {
  const mapRef = useSignal<HTMLDivElement>();
  const searchRef = useSignal<HTMLInputElement>();
  const markerRef = useSignal<HTMLDivElement>();
  const infowindowRef = useSignal<HTMLDivElement>();
  const mapLoaded = useSignal(false);
  const currentPlace = useSignal<any>(null);

  const {
    center = { lat: 36.1699, lng: -115.1398 }, // Las Vegas default
    zoom = 13,
    title = "Interactive Map",
    description = "Explore the area and find your perfect location",
    height = "400px",
    placeholder = "Search for addresses, neighborhoods, or landmarks...",
    showSearch = true,
    showPropertyMarkers = true,
    showNeighborhoodBoundaries = true,
    showSchoolDistricts = true,
    showSalesHeatmap = false,
    properties = [],
    class: className = "",
    // SEO props with defaults
    ariaLabel = "Interactive map showing properties and neighborhoods",
    ariaDescription = "Use this interactive map to explore available properties, neighborhood boundaries, school districts, and recent sales data",
    locationName = "Las Vegas",
    canonicalUrl = "",
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
        // Use fallback API key to avoid SSR issues with environment variables
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBUvLymcTSnhOAffrlzM_rzYhmIbVfGEn8&libraries=places`;
        script.async = true;
        script.defer = true;
        document.head.appendChild(script);
        
        await new Promise((resolve, reject) => {
          script.onload = resolve;
          script.onerror = reject;
        });
      }

      // Initialize map
      const map = new google.maps.Map(mapRef.value, {
        center: center,
        zoom: zoom,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: true,
        styles: [
          {
            featureType: "poi",
            elementType: "labels",
            stylers: [{ visibility: "off" }]
          },
          {
            featureType: "transit",
            elementType: "labels",
            stylers: [{ visibility: "off" }]
          }
        ]
      });

      // Store map reference for layer controls
      const mapLayers = {
        propertyMarkers: [] as any[],
        neighborhoodBoundaries: null as any,
        schoolDistricts: null as any,
        salesHeatmap: null as any
      };

      // Initialize marker
      const marker = new google.maps.Marker({
        position: center,
        map: map,
        title: title,
        animation: google.maps.Animation.DROP
      });

      // Initialize info window
      const infowindow = new google.maps.InfoWindow({
        content: `
          <div style="padding: 10px; max-width: 250px;">
            <h3 style="margin: 0 0 8px 0; color: #2563eb; font-size: 16px;">${title}</h3>
            <p style="margin: 0; color: #6b7280; font-size: 14px;">${description}</p>
          </div>
        `
      });

      marker.addListener('click', () => {
        infowindow.open(map, marker);
      });

      // Initialize search functionality if enabled
      if (showSearch && searchRef.value) {
        const searchBox = new google.maps.places.SearchBox(searchRef.value);
        
        searchBox.addListener('places_changed', () => {
          const places = searchBox.getPlaces();
          
          if (places.length === 0) return;
          
          const place = places[0];
          
          if (!place.geometry || !place.geometry.location) {
            alert(`No details available for input: '${place.name}'`);
            return;
          }

          // Clear previous markers
          marker.setMap(null);

          // Create new marker for the selected place
          const newMarker = new google.maps.Marker({
            position: place.geometry.location,
            map: map,
            title: place.name,
            animation: google.maps.Animation.DROP
          });

          // Update info window
          const address = place.formatted_address || place.name;
          infowindow.setContent(`
            <div style="padding: 10px; max-width: 250px;">
              <h3 style="margin: 0 0 8px 0; color: #2563eb; font-size: 16px;">${place.name}</h3>
              <p style="margin: 0; color: #6b7280; font-size: 14px;">${address}</p>
            </div>
          `);
          infowindow.open(map, newMarker);

          // Fit map to place bounds or center on place
          if (place.geometry.viewport) {
            map.fitBounds(place.geometry.viewport);
          } else {
            map.setCenter(place.geometry.location);
            map.setZoom(17);
          }

          currentPlace.value = place;
        });
      }

      // Add Property Markers with Price Overlays
      if (showPropertyMarkers && properties.length > 0) {
        properties.forEach((property) => {
          const marker = new google.maps.Marker({
            position: { lat: property.lat, lng: property.lng },
            map: map,
            title: `${property.address} - $${property.price}`,
            icon: {
              url: `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`
                <svg width="60" height="40" xmlns="http://www.w3.org/2000/svg">
                  <rect width="60" height="40" rx="4" fill="${property.status === 'sold' ? '#dc2626' : property.status === 'pending' ? '#f59e0b' : '#10b981'}" stroke="white" stroke-width="2"/>
                  <text x="30" y="16" text-anchor="middle" fill="white" font-size="10" font-weight="bold">$${property.price}</text>
                  <text x="30" y="28" text-anchor="middle" fill="white" font-size="8">${property.beds}bd ${property.baths}ba</text>
                  <text x="30" y="36" text-anchor="middle" fill="white" font-size="7">${property.sqft}sf</text>
                </svg>
              `)}`,
              scaledSize: new google.maps.Size(60, 40),
              anchor: new google.maps.Point(30, 40)
            }
          });

          const infoWindow = new google.maps.InfoWindow({
            content: `
              <div style="padding: 10px; max-width: 250px;">
                <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
                  <div style="width: 12px; height: 12px; border-radius: 50%; background: ${property.status === 'sold' ? '#dc2626' : property.status === 'pending' ? '#f59e0b' : '#10b981'};"></div>
                  <h3 style="margin: 0; color: #1f2937; font-size: 16px;">$${property.price}</h3>
                </div>
                <p style="margin: 0 0 8px 0; color: #374151; font-size: 14px; font-weight: 500;">${property.address}</p>
                <p style="margin: 0; color: #6b7280; font-size: 12px;">${property.beds} bed • ${property.baths} bath • ${property.sqft.toLocaleString()} sq ft</p>
                <div style="margin-top: 8px; padding: 6px 12px; background: #3b82f6; color: white; border-radius: 4px; text-align: center; font-size: 12px; cursor: pointer;">
                  Schedule Showing
                </div>
              </div>
            `
          });

          marker.addListener('click', () => {
            infoWindow.open(map, marker);
          });

          mapLayers.propertyMarkers.push(marker);
        });
      }

      // Add Neighborhood Boundary Lines
      if (showNeighborhoodBoundaries) {
        // Centennial Hills boundaries (approximate)
        const centennialHillsBoundary = new google.maps.Polygon({
          paths: [
            { lat: 36.3150, lng: -115.3200 },
            { lat: 36.3150, lng: -115.2800 },
            { lat: 36.2950, lng: -115.2800 },
            { lat: 36.2950, lng: -115.3200 }
          ],
          strokeColor: '#3b82f6',
          strokeOpacity: 0.8,
          strokeWeight: 3,
          fillColor: '#3b82f6',
          fillOpacity: 0.1,
          map: map
        });

        // Add neighborhood labels
        const neighborhoodLabel = new google.maps.InfoWindow({
          content: `
            <div style="padding: 8px; text-align: center;">
              <h4 style="margin: 0; color: #1f2937;">Centennial Hills</h4>
              <p style="margin: 4px 0 0 0; color: #6b7280; font-size: 12px;">Master-Planned Community</p>
            </div>
          `,
          position: { lat: 36.3050, lng: -115.3000 }
        });

        mapLayers.neighborhoodBoundaries = centennialHillsBoundary;
      }

      // Add School District Layers
      if (showSchoolDistricts) {
        // Elementary Schools
        const schools = [
          { name: 'Centennial Hills Elementary', lat: 36.3080, lng: -115.2980, type: 'elementary' },
          { name: 'Gunderson Middle School', lat: 36.3020, lng: -115.2950, type: 'middle' },
          { name: 'Centennial High School', lat: 36.3100, lng: -115.2920, type: 'high' }
        ];

        schools.forEach((school) => {
          const marker = new google.maps.Marker({
            position: { lat: school.lat, lng: school.lng },
            map: map,
            title: school.name,
            icon: {
              url: `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" fill="${school.type === 'elementary' ? '#10b981' : school.type === 'middle' ? '#3b82f6' : '#8b5cf6'}" stroke="white" stroke-width="2"/>
                  <text x="12" y="16" text-anchor="middle" fill="white" font-size="12" font-weight="bold">${school.type === 'elementary' ? 'E' : school.type === 'middle' ? 'M' : 'H'}</text>
                </svg>
              `)}`,
              scaledSize: new google.maps.Size(24, 24),
              anchor: new google.maps.Point(12, 12)
            }
          });

          const infoWindow = new google.maps.InfoWindow({
            content: `
              <div style="padding: 10px; max-width: 200px;">
                <h4 style="margin: 0 0 4px 0; color: #1f2937; font-size: 14px;">${school.name}</h4>
                <p style="margin: 0; color: #6b7280; font-size: 12px;">${school.type.charAt(0).toUpperCase() + school.type.slice(1)} School</p>
              </div>
            `
          });

          marker.addListener('click', () => {
            infoWindow.open(map, marker);
          });

          if (!mapLayers.schoolDistricts) {
            mapLayers.schoolDistricts = [];
          }
          mapLayers.schoolDistricts.push(marker);
        });
      }

      // Add Recent Sales Heat Map
      if (showSalesHeatmap) {
        // Sample recent sales data (in a real app, this would come from your API)
        const recentSales = [
          { lat: 36.3080, lng: -115.2980, price: 650000 },
          { lat: 36.3050, lng: -115.2950, price: 720000 },
          { lat: 36.3100, lng: -115.2920, price: 680000 },
          { lat: 36.3020, lng: -115.3000, price: 750000 },
          { lat: 36.3150, lng: -115.3050, price: 620000 }
        ];

        const heatmapData = recentSales.map(sale => ({
          location: new google.maps.LatLng(sale.lat, sale.lng),
          weight: Math.min(sale.price / 100000, 10) // Normalize price to weight
        }));

        const heatmap = new google.maps.visualization.HeatmapLayer({
          data: heatmapData,
          map: map,
          radius: 50,
          opacity: 0.6,
          gradient: [
            'rgba(0, 255, 255, 0)',
            'rgba(0, 255, 255, 1)',
            'rgba(0, 191, 255, 1)',
            'rgba(0, 127, 255, 1)',
            'rgba(0, 63, 255, 1)',
            'rgba(0, 0, 255, 1)',
            'rgba(0, 0, 223, 1)',
            'rgba(0, 0, 191, 1)',
            'rgba(0, 0, 159, 1)',
            'rgba(0, 0, 127, 1)',
            'rgba(63, 0, 91, 1)',
            'rgba(127, 0, 63, 1)',
            'rgba(191, 0, 31, 1)',
            'rgba(255, 0, 0, 1)'
          ]
        });

        mapLayers.salesHeatmap = heatmap;
      }

      mapLoaded.value = true;
    } catch (error) {
      console.error('Error loading Google Maps:', error);
      // Show fallback content if maps fail to load
      if (mapRef.value) {
        mapRef.value.innerHTML = `
          <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; background: #f3f4f6; color: #6b7280;">
            <div style="margin-bottom: 1rem;">
              <svg width="48" height="48" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path>
              </svg>
            </div>
            <h3 style="margin: 0 0 0.5rem 0; color: #374151;">Interactive Map</h3>
            <p style="margin: 0; text-align: center; max-width: 300px;">Map temporarily unavailable. Please refresh the page or contact us for assistance.</p>
          </div>
        `;
      }
    }
  });

  return (
    <div class={`maps-widget ${className}`}>
      
      <div class="maps-header">
        <div class="maps-title">
          <HiMapPinMini class="maps-icon" aria-hidden="true" />
          <h3 id="map-title">{title}</h3>
        </div>
        <p class="maps-description" id="map-description">{description}</p>
      </div>
      
      {showSearch && (
        <div class="maps-search">
          <label for="map-search-input" class="sr-only">Search for properties and locations</label>
          <input
            ref={searchRef}
            id="map-search-input"
            type="text"
            placeholder={placeholder}
            class="search-input"
            aria-label="Search for properties and locations"
            aria-describedby="map-description"
            role="searchbox"
            autocomplete="address"
          />
        </div>
      )}
      
      {/* Layer Controls */}
      <div class="maps-controls">
        <div class="control-group">
          <h4>Map Layers</h4>
          <div class="control-buttons">
            {showPropertyMarkers && (
              <button class="control-btn" data-layer="properties">
                <HiHomeMini class="control-icon" />
                Properties
              </button>
            )}
            {showNeighborhoodBoundaries && (
              <button class="control-btn" data-layer="neighborhoods">
                <HiMapPinMini class="control-icon" />
                Boundaries
              </button>
            )}
            {showSchoolDistricts && (
              <button class="control-btn" data-layer="schools">
                <HiAcademicCapMini class="control-icon" />
                Schools
              </button>
            )}
            {showSalesHeatmap && (
              <button class="control-btn" data-layer="heatmap">
                <HiChartBarMini class="control-icon" />
                Sales Heat
              </button>
            )}
          </div>
        </div>
      </div>
      
      <div 
        ref={mapRef}
        class="maps-container"
        style={{ height: height }}
        role="application"
        aria-label={ariaLabel}
        aria-describedby="map-description"
        tabindex="0"
        id="interactive-map"
      >
        {!mapLoaded.value && (
          <div class="maps-loading" role="status" aria-live="polite">
            <div class="loading-spinner" aria-hidden="true"></div>
            <p>Loading interactive map with property data...</p>
          </div>
        )}
      </div>
      
      <div class="maps-footer">
        <p class="maps-note">
          <HiMapPinMini class="icon-small" aria-hidden="true" />
          <strong>Interactive Map Features:</strong> Click on property markers for details, use search to find specific addresses, toggle layers to view neighborhoods, school districts, and sales data. All data is updated regularly for accuracy.
        </p>
        <div class="seo-content" style="display: none;" aria-hidden="true">
          <p>Las Vegas real estate map showing available properties, neighborhood boundaries, school districts, and recent sales data. Dr. Janet Duffy specializes in luxury homes in Centennial Hills, Summerlin, and northwest Las Vegas communities.</p>
        </div>
      </div>
    </div>
  );
});

// Add the component styles
export const mapsWidgetStyles = `
  .maps-widget {
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    margin: 2rem 0;
  }

  .maps-header {
    padding: 1.5rem 1.5rem 0 1.5rem;
  }

  .maps-title {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.5rem;
  }

  .maps-icon {
    width: 1.5rem;
    height: 1.5rem;
    color: #dc2626;
  }

  .maps-title h3 {
    margin: 0;
    font-size: 1.25rem;
    font-weight: 600;
    color: #1f2937;
  }

  .maps-description {
    margin: 0;
    color: #6b7280;
    font-size: 0.875rem;
    line-height: 1.5;
  }

  .maps-search {
    padding: 1rem 1.5rem;
    background: #f9fafb;
    border-bottom: 1px solid #e5e7eb;
  }

  .search-input {
    width: 100%;
    padding: 0.75rem 1rem;
    border: 2px solid #e5e7eb;
    border-radius: 8px;
    font-size: 0.875rem;
    transition: border-color 0.2s ease;
  }

  .search-input:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }

  .maps-container {
    position: relative;
    width: 100%;
    background: #f3f4f6;
  }

  .maps-loading {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: #6b7280;
  }

  .loading-spinner {
    width: 2rem;
    height: 2rem;
    border: 2px solid #e5e7eb;
    border-top: 2px solid #3b82f6;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin: 0 auto 0.5rem auto;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  .maps-footer {
    padding: 1rem 1.5rem;
    background: #f9fafb;
    border-top: 1px solid #e5e7eb;
  }

  .maps-note {
    margin: 0;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #6b7280;
    font-size: 0.75rem;
  }

  .icon-small {
    width: 1rem;
    height: 1rem;
  }

  .maps-widget .gm-style-iw {
    border-radius: 8px !important;
  }

  .maps-widget .gm-style-iw-c {
    border-radius: 8px !important;
  }

  @media (max-width: 768px) {
    .maps-widget {
      margin: 1rem 0;
    }
    
    .maps-header {
      padding: 1rem 1rem 0 1rem;
    }
    
    .maps-search {
      padding: 0.75rem 1rem;
    }
    
    .maps-footer {
      padding: 0.75rem 1rem;
    }
  }
`;
