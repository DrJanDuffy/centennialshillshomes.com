import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import SimpleMapsWidget from '../components/simple-maps-widget';
import RealScoutSearchWidget from '../components/realscout-search-widget';
import RealScoutOfficeListings from '../components/realscout-office-listings';
import SEOStructuredData from '../components/seo-structured-data';
import { centennialHillsProperties } from '../data/sample-properties';
import { janetDuffyStructuredData } from '../components/seo-structured-data';

export default component$(() => {

  return (
    <>
      {/* SEO Structured Data */}
      <SEOStructuredData 
        type="RealEstateAgent" 
        data={janetDuffyStructuredData} 
      />

      {/* Hero Section */}
      <section class="hero-section">
        <div class="hero-background">
          <div class="hero-overlay"></div>
        </div>
        <div class="hero-content">
          <div class="hero-text">
            <h1 class="hero-title">
              Find Your Dream Home in <span class="text-blue-600">Centennial Hills</span>
            </h1>
            <p class="hero-subtitle">
              Top 1% Las Vegas REALTOR® with 30+ years of research expertise. 
              Specializing in luxury homes and new construction in Northwest Las Vegas.
            </p>
            <div class="hero-stats">
              <div class="stat">
                <div class="stat-number">$2.4M+</div>
                <div class="stat-label">Total Sales Volume</div>
              </div>
              <div class="stat">
                <div class="stat-number">150+</div>
                <div class="stat-label">Homes Sold</div>
              </div>
              <div class="stat">
                <div class="stat-number">30+</div>
                <div class="stat-label">Years Experience</div>
              </div>
            </div>
            <div class="hero-cta">
              <a href="/contact" class="btn btn-primary">
                Get Free Home Valuation
              </a>
              <a href="tel:+17029031952" class="btn btn-secondary">
                <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
                (702) 903-1952
              </a>
            </div>
          </div>
          <div class="hero-image">
            <div class="property-showcase">
              <div class="featured-property">
                <img 
                  src="/images/centennial-hills-home.jpg" 
                  alt="Luxury home in Centennial Hills, Las Vegas"
                  class="property-image"
                />
                <div class="property-overlay">
                  <div class="property-info">
                    <div class="property-price">$675,000</div>
                    <div class="property-details">4 bed • 3 bath • 2,800 sq ft</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties - #1 Lead Generator */}
      <section class="featured-listings-section bg-gray-50">
        <div class="container mx-auto px-4 py-16">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">
              Featured Centennial Hills Properties
            </h2>
            <p class="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our latest luxury homes in Las Vegas' premier Northwest community
            </p>
          </div>
          
          {/* RealScout Office Listings - Primary Lead Generator */}
          <RealScoutOfficeListings
            agentEncodedId="QWdlbnQtMjI1MDUw"
            sortOrder="NEWEST"
            listingStatus="For Sale"
            propertyTypes=",SFR"
            priceMin="500000"
            priceMax="6000000"
          />
          
          <div class="text-center mt-8">
            <a href="/mls-search" class="btn btn-primary btn-lg">
              View All Available Properties
            </a>
          </div>
        </div>
      </section>

      {/* RealScout Advanced Search Section */}
      <section class="search-section">
        <div class="container mx-auto px-4 py-16">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">
              Search Centennial Hills Properties
            </h2>
            <p class="text-lg text-gray-600 max-w-2xl mx-auto">
              Find your perfect home in Las Vegas' premier Northwest community with our advanced MLS search
            </p>
          </div>
          
          {/* RealScout Advanced Search Widget */}
          <div class="realscout-search-container bg-white rounded-lg shadow-lg p-6 max-w-6xl mx-auto">
            <div class="text-center mb-6">
              <div class="inline-flex items-center gap-2 text-sm text-gray-600 mb-4">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"/>
                </svg>
                <span>Powered by RealScout MLS Search</span>
              </div>
            </div>
            
            {/* RealScout Search Widget Integration */}
            <RealScoutSearchWidget
              agentEncodedId="QWdlbnQtMjI1MDUw"
              height="600px"
              width="100%"
            />
            
            {/* Alternative Search Options */}
            <div class="mt-8 border-t pt-6">
              <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <a href="/mls-search" class="flex items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                  <div class="flex-shrink-0">
                    <svg class="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"/>
                    </svg>
                  </div>
                  <div class="ml-3">
                    <h3 class="text-sm font-medium text-gray-900">MLS Search</h3>
                    <p class="text-sm text-gray-500">Browse all available listings</p>
                  </div>
                </a>
                
                <a href="/centennial-hills-homes-for-sale" class="flex items-center p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
                  <div class="flex-shrink-0">
                    <svg class="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
                    </svg>
                  </div>
                  <div class="ml-3">
                    <h3 class="text-sm font-medium text-gray-900">Centennial Hills</h3>
                    <p class="text-sm text-gray-500">Featured community homes</p>
                  </div>
                </a>
                
                <a href="/contact" class="flex items-center p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
                  <div class="flex-shrink-0">
                    <svg class="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                    </svg>
                  </div>
                  <div class="ml-3">
                    <h3 class="text-sm font-medium text-gray-900">Get Help</h3>
                    <p class="text-sm text-gray-500">Contact Dr. Janet Duffy</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section class="featured-properties bg-gray-50">
        <div class="container mx-auto px-4 py-16">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">
              Featured Centennial Hills Properties
            </h2>
            <p class="text-lg text-gray-600">
              Handpicked luxury homes in Las Vegas' most desirable neighborhoods
            </p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {centennialHillsProperties.slice(0, 3).map((property) => (
              <div key={property.id} class="property-card bg-white rounded-lg shadow-lg overflow-hidden">
                <div class="property-image-container">
                  <div class="property-status-badge">
                    <span class={`status-badge ${property.status}`}>
                      {property.status.replace('-', ' ')}
                    </span>
                  </div>
                  <div class="property-image-placeholder">
                    <svg class="w-full h-48 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd"/>
                    </svg>
                  </div>
                </div>
                <div class="property-content p-6">
                  <div class="property-price text-2xl font-bold text-gray-900 mb-2">
                    ${Number(property.price).toLocaleString()}
                  </div>
                  <div class="property-address text-gray-600 mb-3">
                    {property.address}
                  </div>
                  <div class="property-details flex gap-4 text-sm text-gray-500 mb-4">
                    <span>{property.beds} bed</span>
                    <span>{property.baths} bath</span>
                    <span>{property.sqft.toLocaleString()} sq ft</span>
                  </div>
                  <a href="/contact" class="btn btn-outline w-full">
                    Schedule Showing
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          <div class="text-center mt-12">
            <a href="/centennial-hills-homes-for-sale" class="btn btn-primary btn-lg">
              View All Properties
            </a>
          </div>
        </div>
      </section>

      {/* Market Statistics */}
      <section class="market-stats">
        <div class="container mx-auto px-4 py-16">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">
              Centennial Hills Market Overview
            </h2>
            <p class="text-lg text-gray-600">
              Current market trends and statistics for Northwest Las Vegas
            </p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div class="stat-card text-center">
              <div class="stat-icon mb-4">
                <svg class="w-12 h-12 text-blue-600 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4zM18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"/>
                </svg>
              </div>
              <div class="stat-number text-3xl font-bold text-gray-900 mb-2">$625,000</div>
              <div class="stat-label text-gray-600">Median Home Price</div>
              <div class="stat-change text-green-600 text-sm">+8.5% vs last year</div>
            </div>
            
            <div class="stat-card text-center">
              <div class="stat-icon mb-4">
                <svg class="w-12 h-12 text-blue-600 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"/>
                </svg>
              </div>
              <div class="stat-number text-3xl font-bold text-gray-900 mb-2">23</div>
              <div class="stat-label text-gray-600">Days on Market</div>
              <div class="stat-change text-red-600 text-sm">-12% vs last year</div>
            </div>
            
            <div class="stat-card text-center">
              <div class="stat-icon mb-4">
                <svg class="w-12 h-12 text-blue-600 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"/>
                </svg>
              </div>
              <div class="stat-number text-3xl font-bold text-gray-900 mb-2">142</div>
              <div class="stat-label text-gray-600">Active Listings</div>
              <div class="stat-change text-green-600 text-sm">+15% vs last month</div>
            </div>
            
            <div class="stat-card text-center">
              <div class="stat-icon mb-4">
                <svg class="w-12 h-12 text-blue-600 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
              </div>
              <div class="stat-number text-3xl font-bold text-gray-900 mb-2">98.2%</div>
              <div class="stat-label text-gray-600">List to Sale Ratio</div>
              <div class="stat-change text-green-600 text-sm">+2.1% vs last year</div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Map */}
      <section class="map-section">
        <div class="container mx-auto px-4 py-16">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">
              Explore Centennial Hills Properties
            </h2>
            <p class="text-lg text-gray-600">
              Interactive map showing available homes in Northwest Las Vegas
            </p>
          </div>
          
          <div class="map-container">
        <SimpleMapsWidget
          center={{ lat: 36.3080, lng: -115.2980 }}
          zoom={13}
          title="Centennial Hills Properties Map"
          height="500px"
          properties={centennialHillsProperties}
        />
      </div>
    </div>
      </section>

      {/* Services Section */}
      <section class="services-section bg-gray-50">
        <div class="container mx-auto px-4 py-16">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Dr. Janet Duffy?
            </h2>
            <p class="text-lg text-gray-600 max-w-2xl mx-auto">
              Top 1% REALTOR® with unmatched expertise in Las Vegas luxury real estate
            </p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="service-card text-center">
              <div class="service-icon mb-6">
                <svg class="w-16 h-16 text-blue-600 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-4">30+ Years Experience</h3>
              <p class="text-gray-600">
                Decades of research expertise and local market knowledge in Las Vegas real estate
              </p>
            </div>
            
            <div class="service-card text-center">
              <div class="service-icon mb-6">
                <svg class="w-16 h-16 text-blue-600 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd"/>
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-4">Top 1% REALTOR®</h3>
              <p class="text-gray-600">
                Consistently ranked among the highest-performing real estate professionals in Las Vegas
              </p>
            </div>
            
            <div class="service-card text-center">
              <div class="service-icon mb-6">
                <svg class="w-16 h-16 text-blue-600 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-4">Local Expertise</h3>
              <p class="text-gray-600">
                Deep knowledge of Centennial Hills, Summerlin, and Northwest Las Vegas communities
              </p>
            </div>
            
            <div class="service-card text-center">
              <div class="service-icon mb-6">
                <svg class="w-16 h-16 text-blue-600 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clip-rule="evenodd"/>
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-4">24/7 Service</h3>
              <p class="text-gray-600">
                Same-day showings and executive-level service available around the clock
              </p>
            </div>
            
            <div class="service-card text-center">
              <div class="service-icon mb-6">
                <svg class="w-16 h-16 text-blue-600 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-4">Market Analysis</h3>
              <p class="text-gray-600">
                Comprehensive market insights and data-driven pricing strategies for maximum value
              </p>
            </div>
            
            <div class="service-card text-center">
              <div class="service-icon mb-6">
                <svg class="w-16 h-16 text-blue-600 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 000 2h2a1 1 0 100-2H9z" clip-rule="evenodd"/>
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-4">Luxury Specialists</h3>
              <p class="text-gray-600">
                Expertise in high-end properties and California equity buyer relocations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section class="cta-section">
        <div class="container mx-auto px-4 py-16">
          <div class="bg-blue-600 rounded-2xl p-12 text-center text-white">
            <h2 class="text-3xl font-bold mb-4">
              Ready to Find Your Dream Home?
            </h2>
            <p class="text-xl mb-8 opacity-90">
              Get personalized guidance from Las Vegas' top real estate expert
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" class="btn btn-white">
                Schedule Consultation
              </a>
              <a href="tel:+17029031952" class="btn btn-outline-white">
                Call (702) 903-1952
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Centennial Hills Real Estate | Dr. Janet Duffy - Top 1% Las Vegas REALTOR®',
  meta: [
    {
      name: 'description',
      content: 'Find your dream home in Centennial Hills, Las Vegas with Dr. Janet Duffy, Top 1% REALTOR®. 30+ years expertise in luxury homes, new construction, and California equity buyer relocations.',
    },
    {
      name: 'keywords',
      content: 'Centennial Hills real estate, Las Vegas homes for sale, luxury homes Las Vegas, new construction Las Vegas, Dr Janet Duffy, Northwest Las Vegas real estate, California equity buyers',
    },
    {
      property: 'og:title',
      content: 'Centennial Hills Real Estate | Dr. Janet Duffy - Top 1% Las Vegas REALTOR®',
    },
    {
      property: 'og:description',
      content: 'Find your dream home in Centennial Hills, Las Vegas with Dr. Janet Duffy, Top 1% REALTOR®. 30+ years expertise in luxury homes, new construction, and California equity buyer relocations.',
    },
    {
      property: 'og:image',
      content: 'https://www.centennialhillshomes.com/images/dr-janet-duffy-og.jpg',
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      name: 'twitter:title',
      content: 'Centennial Hills Real Estate | Dr. Janet Duffy - Top 1% Las Vegas REALTOR®',
    },
    {
      name: 'twitter:description',
      content: 'Find your dream home in Centennial Hills, Las Vegas with Dr. Janet Duffy, Top 1% REALTOR®. 30+ years expertise in luxury homes, new construction, and California equity buyer relocations.',
    },
    {
      name: 'twitter:image',
      content: 'https://www.centennialhillshomes.com/images/dr-janet-duffy-twitter.jpg',
    },
  ],
};