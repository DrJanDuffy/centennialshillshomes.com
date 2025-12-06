import { component$, useSignal, $ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { HiHomeMini, HiMapPinMini, HiPhoneMini, HiStarMini, HiCalculatorMini } from '@qwikest/icons/heroicons';
import { LuTrendingUp, LuSearch, LuHeart, LuCalendar, LuDollarSign } from '@qwikest/icons/lucide';
import { centennialHillsProperties } from '../../../data/sample-properties';

export default component$(() => {
  const searchQuery = useSignal('');
  const priceMin = useSignal('300000');
  const priceMax = useSignal('750000');
  const bedrooms = useSignal('3');
  const bathrooms = useSignal('2');
  const squareFeet = useSignal(2000);
  const downPayment = useSignal(20);
  const interestRate = useSignal(6.5);
  const loanTerm = useSignal('30');
  const monthlyPayment = useSignal(0);
  const affordabilityScore = useSignal(0);

  const calculateAffordability = $(() => {
    const loanAmount = (parseInt(priceMax.value) * (100 - downPayment.value)) / 100;
    const monthlyRate = interestRate.value / 100 / 12;
    const numPayments = parseInt(loanTerm.value) * 12;
    
    if (monthlyRate === 0) {
      monthlyPayment.value = loanAmount / numPayments;
    } else {
      monthlyPayment.value = loanAmount * 
        (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / 
        (Math.pow(1 + monthlyRate, numPayments) - 1);
    }

    // Simple affordability calculation (30% of income rule)
    const maxMonthlyPayment = 3000; // Assuming $10k monthly income
    affordabilityScore.value = Math.min(100, (maxMonthlyPayment / monthlyPayment.value) * 100);
  });

  const searchResults = useSignal<any[]>([]);
  const isSearching = useSignal(false);

  const searchProperties = $(() => {
    isSearching.value = true;
    
    // Simulate API call delay
    setTimeout(() => {
      // Filter sample properties based on search criteria
      const filteredProperties = centennialHillsProperties.filter(property => {
        const price = parseInt(property.price.replace(/,/g, ''));
        return price >= parseInt(priceMin.value) && 
               price <= parseInt(priceMax.value) &&
               property.beds >= parseInt(bedrooms.value) &&
               property.baths >= parseInt(bathrooms.value) &&
               property.sqft >= squareFeet.value;
      });
      
      searchResults.value = filteredProperties;
      isSearching.value = false;
    }, 1000);
  });

  return (
    <>
      <div class="interactive-header">
        <div class="container container-center">
          <h1>Homebuyer Interactive Tools</h1>
          <p>Find your dream home with our comprehensive buyer tools</p>
        </div>
      </div>

      <div class="interactive-content">
        <div class="container container-center">
          
          {/* Property Search Tool */}
          <section class="tool-section">
            <div class="tool-header">
              <LuSearch class="tool-icon" />
              <h2>Property Search</h2>
              <p>Find homes that match your exact criteria</p>
            </div>
            
            <div class="search-form">
              <div class="form-group">
                <label>Location Preference</label>
                <select bind:value={searchQuery} class="form-input">
                  <option value="">Select Community</option>
                  <option value="centennial-hills">Centennial Hills</option>
                  <option value="red-rock">Red Rock Country Club</option>
                  <option value="summerlin">Summerlin West</option>
                  <option value="the-ridges">The Ridges</option>
                  <option value="lone-mountain">Lone Mountain</option>
                  <option value="north-las-vegas">North Las Vegas</option>
                </select>
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label>Price Range</label>
                  <div class="range-inputs">
                    <input 
                      type="number" 
                      bind:value={priceMin}
                      class="form-input"
                      placeholder="Min Price"
                    />
                    <span>to</span>
                    <input 
                      type="number" 
                      bind:value={priceMax}
                      class="form-input"
                      placeholder="Max Price"
                    />
                  </div>
                </div>
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label>Bedrooms</label>
                  <select bind:value={bedrooms} class="form-input">
                    <option value={1}>1+</option>
                    <option value={2}>2+</option>
                    <option value={3}>3+</option>
                    <option value={4}>4+</option>
                    <option value={5}>5+</option>
                  </select>
                </div>

                <div class="form-group">
                  <label>Bathrooms</label>
                  <select bind:value={bathrooms} class="form-input">
                    <option value={1}>1+</option>
                    <option value={2}>2+</option>
                    <option value={3}>3+</option>
                    <option value={4}>4+</option>
                    <option value={5}>5+</option>
                  </select>
                </div>

                <div class="form-group">
                  <label>Min Square Feet</label>
                  <input 
                    type="number" 
                    bind:value={squareFeet}
                    class="form-input"
                    placeholder="2000"
                  />
                </div>
              </div>

              <button onClick$={searchProperties} class="btn btn-primary btn-large" disabled={isSearching.value}>
                <LuSearch class="btn-icon" />
                {isSearching.value ? 'Searching...' : 'Search Properties'}
              </button>
            </div>

            {/* Search Results */}
            {searchResults.value.length > 0 && (
              <div class="search-results">
                <h3>Found {searchResults.value.length} Properties</h3>
                <div class="properties-grid">
                  {searchResults.value.map((property) => (
                    <div key={property.id} class="property-card">
                      <div class="property-image">
                        <HiHomeMini class="property-icon" />
                      </div>
                      <div class="property-details">
                        <h4 class="property-price">${property.price}</h4>
                        <p class="property-address">{property.address}</p>
                        <div class="property-specs">
                          <span><HiHomeMini class="spec-icon" /> {property.beds} bed</span>
                          <span><HiHomeMini class="spec-icon" /> {property.baths} bath</span>
                          <span><HiHomeMini class="spec-icon" /> {property.sqft.toLocaleString()} sq ft</span>
                        </div>
                        <div class="property-status">
                          <span class={`status-badge ${property.status}`}>
                            {property.status.replace('-', ' ').toUpperCase()}
                          </span>
                        </div>
                        <button class="btn btn-outline btn-small">View Details</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {searchResults.value.length === 0 && !isSearching.value && (
              <div class="no-results">
                <p>No properties found matching your criteria. Try adjusting your search filters.</p>
              </div>
            )}
          </section>

          {/* Affordability Calculator */}
          <section class="tool-section">
            <div class="tool-header">
              <HiCalculatorMini class="tool-icon" />
              <h2>Affordability Calculator</h2>
              <p>Calculate your monthly payment and affordability</p>
            </div>
            
            <div class="calculator-form">
              <div class="form-row">
                <div class="form-group">
                  <label>Home Price</label>
                  <input 
                    type="number" 
                    bind:value={priceMax}
                    class="form-input"
                    placeholder="750000"
                  />
                </div>

                <div class="form-group">
                  <label>Down Payment (%)</label>
                  <input 
                    type="number" 
                    bind:value={downPayment}
                    class="form-input"
                    placeholder="20"
                  />
                </div>

                <div class="form-group">
                  <label>Interest Rate (%)</label>
                  <input 
                    type="number" 
                    bind:value={interestRate}
                    step="0.1"
                    class="form-input"
                    placeholder="6.5"
                  />
                </div>

                <div class="form-group">
                  <label>Loan Term (years)</label>
                  <select bind:value={loanTerm} class="form-input">
                    <option value={15}>15 years</option>
                    <option value={20}>20 years</option>
                    <option value={30}>30 years</option>
                  </select>
                </div>
              </div>

              <button onClick$={calculateAffordability} class="btn btn-secondary">
                <LuDollarSign class="btn-icon" />
                Calculate Payment
              </button>

              {monthlyPayment.value > 0 && (
                <div class="calculation-results">
                  <div class="result-card">
                    <h3>Monthly Payment</h3>
                    <p class="result-value">${monthlyPayment.value.toFixed(2)}</p>
                  </div>
                  <div class="result-card">
                    <h3>Affordability Score</h3>
                    <p class="result-value">{affordabilityScore.value.toFixed(0)}%</p>
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* Quick Actions */}
          <section class="tool-section">
            <div class="tool-header">
              <HiStarMini class="tool-icon" />
              <h2>Quick Actions</h2>
              <p>Get started with your home buying journey</p>
            </div>
            
            <div class="quick-actions-grid">
              <div class="action-card">
                <LuCalendar class="action-icon" />
                <h3>Schedule Viewing</h3>
                <p>Book a same-day property viewing with Dr. Janet Duffy</p>
                <a href="/contact" class="btn btn-outline">Schedule Now</a>
              </div>

              <div class="action-card">
                <LuTrendingUp class="action-icon" />
                <h3>Market Analysis</h3>
                <p>Get a free market analysis for your target area</p>
                <a href="/contact" class="btn btn-outline">Request Analysis</a>
              </div>

              <div class="action-card">
                <HiPhoneMini class="action-icon" />
                <h3>Speak with Agent</h3>
                <p>Get expert advice from a top 1% Las Vegas REALTOR®</p>
                <a href="/contact" class="btn btn-outline">Call Now</a>
              </div>

              <div class="action-card">
                <LuHeart class="action-icon" />
                <h3>Save Favorites</h3>
                <p>Create a wishlist of your favorite properties</p>
                <button class="btn btn-outline">Start List</button>
              </div>
            </div>
          </section>

          {/* Community Information */}
          <section class="tool-section">
            <div class="tool-header">
              <HiMapPinMini class="tool-icon" />
              <h2>Featured Communities</h2>
              <p>Explore Las Vegas' premier neighborhoods</p>
            </div>
            
            <div class="communities-grid">
              <div class="community-card">
                <h3>Centennial Hills</h3>
                <p>Master-planned community with modern amenities</p>
                <ul>
                  <li>ZIP: 89138, 89144, 89135</li>
                  <li>Price Range: $400K - $650K</li>
                  <li>New Construction Available</li>
                </ul>
                <a href="/centennial-hills" class="btn btn-outline">Explore</a>
              </div>

              <div class="community-card">
                <h3>Red Rock Country Club</h3>
                <p>Luxury living with golf course views</p>
                <ul>
                  <li>Gated Community</li>
                  <li>Price Range: $500K - $750K</li>
                  <li>Resort-Style Amenities</li>
                </ul>
                <a href="/red-rock-country-club" class="btn btn-outline">Explore</a>
              </div>

              <div class="community-card">
                <h3>Summerlin West</h3>
                <p>Established neighborhood with mature landscaping</p>
                <ul>
                  <li>Tree-Lined Streets</li>
                  <li>Price Range: $450K - $700K</li>
                  <li>Top-Rated Schools</li>
                </ul>
                <a href="/summerlin-west" class="btn btn-outline">Explore</a>
              </div>
            </div>
          </section>

        </div>
      </div>

      <style>{`
        .interactive-header {
          background: linear-gradient(135deg, var(--primary-color) 0%, #3b82f6 100%);
          color: white;
          padding: 3rem 0;
          text-align: center;
        }

        .interactive-header h1 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        .interactive-content {
          padding: 3rem 0;
        }

        .tool-section {
          margin-bottom: 4rem;
          background: white;
          border-radius: 12px;
          padding: 2rem;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .tool-header {
          text-align: center;
          margin-bottom: 2rem;
        }

        .tool-icon {
          width: 3rem;
          height: 3rem;
          color: var(--primary-color);
          margin: 0 auto 1rem auto;
          display: block;
        }

        .tool-header h2 {
          font-size: 1.75rem;
          margin-bottom: 0.5rem;
          color: var(--text-dark);
        }

        .search-form, .calculator-form {
          max-width: 800px;
          margin: 0 auto;
        }

        .form-row {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
        }

        .form-group label {
          font-weight: 600;
          margin-bottom: 0.5rem;
          color: var(--text-dark);
        }

        .form-input {
          padding: 0.75rem;
          border: 2px solid var(--border-color);
          border-radius: 6px;
          font-size: 1rem;
          transition: border-color 0.3s ease;
        }

        .form-input:focus {
          outline: none;
          border-color: var(--primary-color);
        }

        .range-inputs {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .range-inputs span {
          color: var(--text-light);
          font-weight: 500;
        }

        .btn-large {
          padding: 1rem 2rem;
          font-size: 1.1rem;
          width: 100%;
          margin-top: 1rem;
        }

        .btn-icon {
          width: 1.25rem;
          height: 1.25rem;
          margin-right: 0.5rem;
        }

        .calculation-results {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1rem;
          margin-top: 2rem;
        }

        .result-card {
          background: var(--bg-light);
          padding: 1.5rem;
          border-radius: 8px;
          text-align: center;
        }

        .result-card h3 {
          margin-bottom: 0.5rem;
          color: var(--text-dark);
        }

        .result-value {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--primary-color);
        }

        .quick-actions-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
        }

        .action-card {
          text-align: center;
          padding: 2rem 1rem;
          border: 2px solid var(--border-color);
          border-radius: 12px;
          transition: all 0.3s ease;
        }

        .action-card:hover {
          border-color: var(--primary-color);
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.15);
        }

        .action-icon {
          width: 2.5rem;
          height: 2.5rem;
          color: var(--primary-color);
          margin: 0 auto 1rem auto;
          display: block;
        }

        .action-card h3 {
          margin-bottom: 1rem;
          color: var(--text-dark);
        }

        .action-card p {
          margin-bottom: 1.5rem;
          color: var(--text-light);
        }

        .communities-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
        }

        .community-card {
          border: 2px solid var(--border-color);
          border-radius: 12px;
          padding: 1.5rem;
          transition: all 0.3s ease;
        }

        .community-card:hover {
          border-color: var(--primary-color);
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.15);
        }

        .community-card h3 {
          margin-bottom: 1rem;
          color: var(--primary-color);
        }

        .community-card ul {
          margin: 1rem 0;
          padding-left: 1.5rem;
        }

        .community-card li {
          margin-bottom: 0.5rem;
          color: var(--text-light);
        }

        .btn-outline {
          border: 2px solid var(--primary-color);
          color: var(--primary-color);
          background: transparent;
        }

        .btn-outline:hover {
          background: var(--primary-color);
          color: white;
        }

        .search-results {
          margin-top: 2rem;
          padding-top: 2rem;
          border-top: 2px solid var(--border-color);
        }

        .search-results h3 {
          margin-bottom: 1.5rem;
          color: var(--text-dark);
          text-align: center;
        }

        .properties-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
        }

        .property-card {
          border: 2px solid var(--border-color);
          border-radius: 12px;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .property-card:hover {
          border-color: var(--primary-color);
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.15);
        }

        .property-image {
          height: 150px;
          background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .property-icon {
          width: 3rem;
          height: 3rem;
          color: var(--primary-color);
        }

        .property-details {
          padding: 1.5rem;
        }

        .property-price {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--primary-color);
          margin-bottom: 0.5rem;
        }

        .property-address {
          color: var(--text-light);
          margin-bottom: 1rem;
        }

        .property-specs {
          display: flex;
          gap: 1rem;
          margin-bottom: 1rem;
          flex-wrap: wrap;
        }

        .property-specs span {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          color: var(--text-light);
          font-size: 0.875rem;
        }

        .spec-icon {
          width: 1rem;
          height: 1rem;
        }

        .property-status {
          margin-bottom: 1rem;
        }

        .status-badge {
          display: inline-block;
          padding: 0.25rem 0.75rem;
          border-radius: 12px;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
        }

        .status-badge.for-sale {
          background: rgba(34, 197, 94, 0.1);
          color: #16a34a;
        }

        .status-badge.sold {
          background: rgba(107, 114, 128, 0.1);
          color: #6b7280;
        }

        .status-badge.pending {
          background: rgba(245, 158, 11, 0.1);
          color: #d97706;
        }

        .btn-small {
          padding: 0.5rem 1rem;
          font-size: 0.875rem;
        }

        .no-results {
          text-align: center;
          padding: 2rem;
          color: var(--text-light);
        }

        @media (max-width: 768px) {
          .form-row {
            grid-template-columns: 1fr;
          }
          
          .quick-actions-grid,
          .communities-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Homebuyer Interactive Tools - Dr. Janet Duffy',
  meta: [
    {
      name: 'description',
      content: 'Interactive tools for homebuyers including property search, affordability calculator, and market analysis.',
    },
  ],
};

