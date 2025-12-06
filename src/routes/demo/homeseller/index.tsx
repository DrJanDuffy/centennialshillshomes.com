import { component$, useSignal, $ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { HiHomeMini, HiMapPinMini, HiPhoneMini, HiStarMini, HiCalculatorMini } from '@qwikest/icons/heroicons';
import { LuTrendingUp, LuCalendar, LuDollarSign, LuBarChart3, LuTarget } from '@qwikest/icons/lucide';

export default component$(() => {
  const propertyType = useSignal('single-family');
  const bedrooms = useSignal('3');
  const bathrooms = useSignal('2');
  const squareFeet = useSignal(2000);
  const lotSize = useSignal(0.25);
  const yearBuilt = useSignal(2015);
  const condition = useSignal('good');
  const upgrades = useSignal<string[]>([]);
  const marketValue = useSignal(0);
  const recommendedPrice = useSignal(0);
  const daysOnMarket = useSignal(0);

  const upgradeOptions = [
    'Updated Kitchen', 'New Roof', 'HVAC System', 'Flooring', 
    'Bathroom Remodel', 'Pool', 'Landscaping', 'Smart Home Features'
  ];

  const toggleUpgrade = $((upgrade: string) => {
    if (upgrades.value.includes(upgrade)) {
      upgrades.value = upgrades.value.filter(u => u !== upgrade);
    } else {
      upgrades.value = [...upgrades.value, upgrade];
    }
  });

  const calculateMarketValue = $(() => {
    // Base calculation (simplified)
    let basePrice = squareFeet.value * 200; // $200 per sq ft base
    
    // Adjust for bedrooms/bathrooms
    basePrice += parseInt(bedrooms.value) * 10000;
    basePrice += parseInt(bathrooms.value) * 15000;
    
    // Adjust for lot size
    basePrice += lotSize.value * 50000;
    
    // Adjust for condition
    const conditionMultipliers = {
      'excellent': 1.15,
      'good': 1.05,
      'fair': 0.95,
      'needs-work': 0.85
    };
    basePrice *= conditionMultipliers[condition.value as keyof typeof conditionMultipliers];
    
    // Adjust for upgrades
    const upgradeValue = upgrades.value.length * 5000;
    basePrice += upgradeValue;
    
    // Adjust for age
    const ageAdjustment = (2024 - yearBuilt.value) * -1000;
    basePrice += ageAdjustment;
    
    marketValue.value = Math.max(300000, basePrice);
    recommendedPrice.value = marketValue.value * 1.02; // 2% above market for negotiation
    daysOnMarket.value = Math.max(15, Math.floor(Math.random() * 60) + 10);
  });

  const requestValuation = $(() => {
    alert(`Professional valuation requested!\n\nProperty Details:\nType: ${propertyType.value}\nBedrooms: ${bedrooms.value}\nBathrooms: ${bathrooms.value}\nSquare Feet: ${squareFeet.value}\n\nDr. Janet Duffy will contact you within 24 hours for a detailed market analysis.`);
  });

  const scheduleListing = $(() => {
    alert('Listing consultation scheduled!\n\nNext steps:\n1. Professional photography\n2. Marketing strategy\n3. Pricing strategy\n4. Showings coordination\n\nDr. Janet Duffy will contact you to schedule your listing consultation.');
  });

  return (
    <>
      <div class="interactive-header">
        <div class="container container-center">
          <h1>Homeseller Interactive Tools</h1>
          <p>Maximize your home's value with our comprehensive seller tools</p>
        </div>
      </div>

      <div class="interactive-content">
        <div class="container container-center">
          
          {/* Property Valuation Tool */}
          <section class="tool-section">
            <div class="tool-header">
              <HiCalculatorMini class="tool-icon" />
              <h2>Property Valuation Calculator</h2>
              <p>Get an instant estimate of your home's market value</p>
            </div>
            
            <div class="valuation-form">
              <div class="form-row">
                <div class="form-group">
                  <label>Property Type</label>
                  <select bind:value={propertyType} class="form-input">
                    <option value="single-family">Single Family Home</option>
                    <option value="townhouse">Townhouse</option>
                    <option value="condo">Condominium</option>
                    <option value="luxury">Luxury Home</option>
                  </select>
                </div>

                <div class="form-group">
                  <label>Bedrooms</label>
                  <select bind:value={bedrooms} class="form-input">
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5+</option>
                  </select>
                </div>

                <div class="form-group">
                  <label>Bathrooms</label>
                  <select bind:value={bathrooms} class="form-input">
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5+</option>
                  </select>
                </div>
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label>Square Feet</label>
                  <input 
                    type="number" 
                    bind:value={squareFeet}
                    class="form-input"
                    placeholder="2000"
                  />
                </div>

                <div class="form-group">
                  <label>Lot Size (acres)</label>
                  <input 
                    type="number" 
                    bind:value={lotSize}
                    step="0.01"
                    class="form-input"
                    placeholder="0.25"
                  />
                </div>

                <div class="form-group">
                  <label>Year Built</label>
                  <input 
                    type="number" 
                    bind:value={yearBuilt}
                    class="form-input"
                    placeholder="2015"
                  />
                </div>
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label>Property Condition</label>
                  <select bind:value={condition} class="form-input">
                    <option value="excellent">Excellent</option>
                    <option value="good">Good</option>
                    <option value="fair">Fair</option>
                    <option value="needs-work">Needs Work</option>
                  </select>
                </div>
              </div>

              <div class="upgrades-section">
                <label>Recent Upgrades & Features</label>
                <div class="upgrades-grid">
                  {upgradeOptions.map((upgrade) => (
                    <label key={upgrade} class="upgrade-option">
                      <input 
                        type="checkbox"
                        checked={upgrades.value.includes(upgrade)}
                        onChange$={() => toggleUpgrade(upgrade)}
                      />
                      <span>{upgrade}</span>
                    </label>
                  ))}
                </div>
              </div>

              <button onClick$={calculateMarketValue} class="btn btn-primary btn-large">
                <LuDollarSign class="btn-icon" />
                Calculate Market Value
              </button>

              {marketValue.value > 0 && (
                <div class="valuation-results">
                  <div class="result-card primary">
                    <h3>Estimated Market Value</h3>
                    <p class="result-value">${marketValue.value.toLocaleString()}</p>
                  </div>
                  <div class="result-card secondary">
                    <h3>Recommended Listing Price</h3>
                    <p class="result-value">${recommendedPrice.value.toLocaleString()}</p>
                  </div>
                  <div class="result-card info">
                    <h3>Expected Days on Market</h3>
                    <p class="result-value">{daysOnMarket.value} days</p>
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* Market Analysis */}
          <section class="tool-section">
            <div class="tool-header">
              <LuBarChart3 class="tool-icon" />
              <h2>Market Analysis</h2>
              <p>Understand your local market conditions</p>
            </div>
            
            <div class="market-stats">
              <div class="stat-card">
                <LuTrendingUp class="stat-icon" />
                <h3>Market Trend</h3>
                <p class="stat-value">+8.5%</p>
                <p class="stat-label">Year over Year</p>
              </div>
              <div class="stat-card">
                <HiHomeMini class="stat-icon" />
                <h3>Inventory Level</h3>
                <p class="stat-value">2.1 months</p>
                <p class="stat-label">Supply</p>
              </div>
              <div class="stat-card">
                <LuTarget class="stat-icon" />
                <h3>Average Days</h3>
                <p class="stat-value">28 days</p>
                <p class="stat-label">On Market</p>
              </div>
              <div class="stat-card">
                <LuDollarSign class="stat-icon" />
                <h3>Average Price</h3>
                <p class="stat-value">$485K</p>
                <p class="stat-label">Sale Price</p>
              </div>
            </div>
          </section>

          {/* Quick Actions */}
          <section class="tool-section">
            <div class="tool-header">
              <HiStarMini class="tool-icon" />
              <h2>Seller Services</h2>
              <p>Professional services to maximize your sale</p>
            </div>
            
            <div class="services-grid">
              <div class="service-card">
                <LuBarChart3 class="service-icon" />
                <h3>Professional Valuation</h3>
                <p>Comprehensive market analysis with CMA</p>
                <button onClick$={requestValuation} class="btn btn-outline">Request Valuation</button>
              </div>

              <div class="service-card">
                <LuCalendar class="service-icon" />
                <h3>Listing Consultation</h3>
                <p>Strategic planning for your home sale</p>
                <button onClick$={scheduleListing} class="btn btn-outline">Schedule Consultation</button>
              </div>

              <div class="service-card">
                <HiPhoneMini class="service-icon" />
                <h3>Pre-Sale Preparation</h3>
                <p>Expert advice on staging and improvements</p>
                <a href="/contact" class="btn btn-outline">Get Advice</a>
              </div>

              <div class="service-card">
                <HiMapPinMini class="service-icon" />
                <h3>Marketing Strategy</h3>
                <p>Professional marketing and advertising</p>
                <a href="/contact" class="btn btn-outline">Learn More</a>
              </div>
            </div>
          </section>

          {/* Selling Timeline */}
          <section class="tool-section">
            <div class="tool-header">
              <LuCalendar class="tool-icon" />
              <h2>Typical Selling Timeline</h2>
              <p>What to expect when selling your home</p>
            </div>
            
            <div class="timeline">
              <div class="timeline-item">
                <div class="timeline-marker">1</div>
                <div class="timeline-content">
                  <h3>Initial Consultation</h3>
                  <p>Market analysis, pricing strategy, and preparation plan</p>
                  <span class="timeline-duration">Week 1</span>
                </div>
              </div>
              <div class="timeline-item">
                <div class="timeline-marker">2</div>
                <div class="timeline-content">
                  <h3>Home Preparation</h3>
                  <p>Staging, repairs, and professional photography</p>
                  <span class="timeline-duration">Weeks 2-3</span>
                </div>
              </div>
              <div class="timeline-item">
                <div class="timeline-marker">3</div>
                <div class="timeline-content">
                  <h3>Marketing Launch</h3>
                  <p>MLS listing, advertising, and showings begin</p>
                  <span class="timeline-duration">Week 4</span>
                </div>
              </div>
              <div class="timeline-item">
                <div class="timeline-marker">4</div>
                <div class="timeline-content">
                  <h3>Offers & Negotiation</h3>
                  <p>Review offers and negotiate terms</p>
                  <span class="timeline-duration">Weeks 5-6</span>
                </div>
              </div>
              <div class="timeline-item">
                <div class="timeline-marker">5</div>
                <div class="timeline-content">
                  <h3>Closing Process</h3>
                  <p>Inspection, appraisal, and final paperwork</p>
                  <span class="timeline-duration">Weeks 7-8</span>
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>

      <style>{`
        .interactive-header {
          background: linear-gradient(135deg, var(--secondary-color) 0%, #ef4444 100%);
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
          color: var(--secondary-color);
          margin: 0 auto 1rem auto;
          display: block;
        }

        .tool-header h2 {
          font-size: 1.75rem;
          margin-bottom: 0.5rem;
          color: var(--text-dark);
        }

        .valuation-form {
          max-width: 900px;
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
          border-color: var(--secondary-color);
        }

        .upgrades-section {
          margin: 2rem 0;
        }

        .upgrades-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 0.75rem;
          margin-top: 1rem;
        }

        .upgrade-option {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem;
          border: 2px solid var(--border-color);
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .upgrade-option:hover {
          border-color: var(--secondary-color);
          background: rgba(220, 38, 38, 0.05);
        }

        .upgrade-option input[type="checkbox"] {
          width: 1.25rem;
          height: 1.25rem;
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

        .valuation-results {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
          margin-top: 2rem;
        }

        .result-card {
          padding: 1.5rem;
          border-radius: 12px;
          text-align: center;
          border: 2px solid;
        }

        .result-card.primary {
          background: rgba(59, 130, 246, 0.1);
          border-color: #3b82f6;
        }

        .result-card.secondary {
          background: rgba(220, 38, 38, 0.1);
          border-color: var(--secondary-color);
        }

        .result-card.info {
          background: rgba(107, 114, 128, 0.1);
          border-color: #6b7280;
        }

        .result-card h3 {
          margin-bottom: 0.5rem;
          color: var(--text-dark);
        }

        .result-value {
          font-size: 1.75rem;
          font-weight: 700;
        }

        .result-card.primary .result-value {
          color: #3b82f6;
        }

        .result-card.secondary .result-value {
          color: var(--secondary-color);
        }

        .result-card.info .result-value {
          color: #6b7280;
        }

        .market-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1.5rem;
        }

        .stat-card {
          text-align: center;
          padding: 2rem 1rem;
          border: 2px solid var(--border-color);
          border-radius: 12px;
          transition: all 0.3s ease;
        }

        .stat-card:hover {
          border-color: var(--secondary-color);
          box-shadow: 0 4px 12px rgba(220, 38, 38, 0.15);
        }

        .stat-icon {
          width: 2.5rem;
          height: 2.5rem;
          color: var(--secondary-color);
          margin: 0 auto 1rem auto;
          display: block;
        }

        .stat-card h3 {
          margin-bottom: 0.5rem;
          color: var(--text-dark);
        }

        .stat-value {
          font-size: 2rem;
          font-weight: 700;
          color: var(--secondary-color);
          margin-bottom: 0.25rem;
        }

        .stat-label {
          color: var(--text-light);
          font-size: 0.875rem;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
        }

        .service-card {
          text-align: center;
          padding: 2rem 1rem;
          border: 2px solid var(--border-color);
          border-radius: 12px;
          transition: all 0.3s ease;
        }

        .service-card:hover {
          border-color: var(--secondary-color);
          box-shadow: 0 4px 12px rgba(220, 38, 38, 0.15);
        }

        .service-icon {
          width: 2.5rem;
          height: 2.5rem;
          color: var(--secondary-color);
          margin: 0 auto 1rem auto;
          display: block;
        }

        .service-card h3 {
          margin-bottom: 1rem;
          color: var(--text-dark);
        }

        .service-card p {
          margin-bottom: 1.5rem;
          color: var(--text-light);
        }

        .timeline {
          position: relative;
          max-width: 800px;
          margin: 0 auto;
        }

        .timeline::before {
          content: '';
          position: absolute;
          left: 2rem;
          top: 0;
          bottom: 0;
          width: 2px;
          background: var(--border-color);
        }

        .timeline-item {
          position: relative;
          margin-bottom: 2rem;
          padding-left: 4rem;
        }

        .timeline-marker {
          position: absolute;
          left: 1rem;
          top: 0.5rem;
          width: 2rem;
          height: 2rem;
          background: var(--secondary-color);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          z-index: 1;
        }

        .timeline-content {
          background: white;
          padding: 1.5rem;
          border-radius: 8px;
          border: 2px solid var(--border-color);
        }

        .timeline-content h3 {
          margin-bottom: 0.5rem;
          color: var(--text-dark);
        }

        .timeline-content p {
          margin-bottom: 1rem;
          color: var(--text-light);
        }

        .timeline-duration {
          display: inline-block;
          background: var(--secondary-color);
          color: white;
          padding: 0.25rem 0.75rem;
          border-radius: 12px;
          font-size: 0.875rem;
          font-weight: 600;
        }

        .btn-outline {
          border: 2px solid var(--secondary-color);
          color: var(--secondary-color);
          background: transparent;
        }

        .btn-outline:hover {
          background: var(--secondary-color);
          color: white;
        }

        @media (max-width: 768px) {
          .form-row {
            grid-template-columns: 1fr;
          }
          
          .upgrades-grid,
          .services-grid {
            grid-template-columns: 1fr;
          }

          .timeline::before {
            left: 1rem;
          }

          .timeline-item {
            padding-left: 3rem;
          }

          .timeline-marker {
            left: 0.5rem;
          }
        }
      `}</style>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Homeseller Interactive Tools - Dr. Janet Duffy',
  meta: [
    {
      name: 'description',
      content: 'Interactive tools for homesellers including property valuation, market analysis, and selling timeline.',
    },
  ],
};

