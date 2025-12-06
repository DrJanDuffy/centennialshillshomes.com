import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import CommuteWidget from '../../components/commute-widget';

export default component$(() => {
  return (
    <>
      {/* Hero Section */}
      <section class="hero-section">
        <div class="container container-center">
          <h1>Commute Calculator</h1>
          <p>Plan your daily commute from potential Las Vegas homes to your workplace, school, or other important destinations.</p>
        </div>
      </section>

      {/* Commute Widget Section */}
      <section class="commute-calculator-section">
        <div class="container container-center">
          <CommuteWidget 
            center={{ lat: 36.1898207, lng: -115.3130859 }}
            title="Plan Your Commute"
            description="Add your workplace, school, or other destinations to see travel times from Las Vegas neighborhoods"
            class="full-width"
          />
        </div>
      </section>

      {/* Tips Section */}
      <section class="commute-tips-section">
        <div class="container container-center">
          <h2>Commute Planning Tips</h2>
          <div class="tips-grid">
            <div class="tip-card">
              <h3>Peak Hours</h3>
              <p>Las Vegas traffic is typically heaviest during 7-9 AM and 5-7 PM on weekdays. Consider flexible work hours if possible.</p>
            </div>
            <div class="tip-card">
              <h3>Alternative Routes</h3>
              <p>Las Vegas has multiple freeway options (I-15, I-215, US-95) and surface streets. Always have backup routes planned.</p>
            </div>
            <div class="tip-card">
              <h3>Public Transit</h3>
              <p>The RTC bus system serves most areas, and the Las Vegas Monorail connects the Strip to downtown areas.</p>
            </div>
            <div class="tip-card">
              <h3>Weather Considerations</h3>
              <p>While rare, rain can significantly impact traffic. Plan extra time during monsoon season (July-September).</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Destinations Section */}
      <section class="popular-destinations-section">
        <div class="container container-center">
          <h2>Popular Las Vegas Destinations</h2>
          <div class="destinations-grid">
            <div class="destination-card">
              <h3>Las Vegas Strip</h3>
              <p>Entertainment, dining, and casinos</p>
              <span class="distance">15-30 min from most neighborhoods</span>
            </div>
            <div class="destination-card">
              <h3>Downtown Las Vegas</h3>
              <p>Fremont Street, casinos, and historic district</p>
              <span class="distance">20-35 min from most neighborhoods</span>
            </div>
            <div class="destination-card">
              <h3>McCarran International Airport</h3>
              <p>Las Vegas main airport</p>
              <span class="distance">25-45 min from most neighborhoods</span>
            </div>
            <div class="destination-card">
              <h3>University of Nevada, Las Vegas</h3>
              <p>Major university campus</p>
              <span class="distance">20-40 min from most neighborhoods</span>
            </div>
            <div class="destination-card">
              <h3>Red Rock Canyon</h3>
              <p>National Conservation Area</p>
              <span class="distance">15-25 min from Summerlin area</span>
            </div>
            <div class="destination-card">
              <h3>Lake Mead</h3>
              <p>Recreation and water activities</p>
              <span class="distance">30-60 min from most neighborhoods</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section class="cta-section">
        <div class="container container-center">
          <h2>Ready to Find Your Perfect Home?</h2>
          <p>Use our commute calculator to find the ideal Las Vegas neighborhood for your lifestyle and work needs.</p>
          <div class="cta-buttons">
            <a href="/properties" class="btn btn-primary">View Properties</a>
            <a href="/contact" class="btn btn-secondary">Contact Dr. Duffy</a>
          </div>
        </div>
      </section>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Commute Calculator | Las Vegas Real Estate | Dr. Jan Duffy',
  meta: [
    {
      name: 'description',
      content: 'Plan your daily commute from Las Vegas homes to work, school, or entertainment. Interactive commute calculator with real-time travel times and multiple transportation options.',
    },
  ],
};
