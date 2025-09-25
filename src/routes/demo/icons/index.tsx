import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import IconsDemo from '../../../components/icons-demo';
import { HiHomeMini, HiMapPinMini } from '@qwikest/icons/heroicons';
import { LuSearch, LuTrendingUp } from '@qwikest/icons/lucide';

export default component$(() => {
  return (
    <>
      <div class="demo-header">
        <div class="container container-center">
          <h1>Interactive Real Estate Tools</h1>
          <p>Comprehensive tools for homebuyers, sellers, and developers</p>
        </div>
      </div>
      
      {/* Interactive Tools Navigation */}
      <section class="tools-navigation">
        <div class="container container-center">
          <h2>Choose Your Tool</h2>
          <div class="tools-grid">
            <div class="tool-card homebuyer">
              <HiHomeMini class="tool-icon" />
              <h3>Homebuyer Tools</h3>
              <p>Property search, affordability calculator, and buyer resources</p>
              <ul>
                <li>Interactive property search</li>
                <li>Affordability calculator</li>
                <li>Market analysis</li>
                <li>Community information</li>
              </ul>
              <a href="/demo/homebuyer" class="btn btn-primary">Start Buying</a>
            </div>

            <div class="tool-card homeseller">
              <LuTrendingUp class="tool-icon" />
              <h3>Homeseller Tools</h3>
              <p>Property valuation, market analysis, and selling timeline</p>
              <ul>
                <li>Property valuation calculator</li>
                <li>Market trend analysis</li>
                <li>Selling timeline</li>
                <li>Professional services</li>
              </ul>
              <a href="/demo/homeseller" class="btn btn-secondary">Start Selling</a>
            </div>

            <div class="tool-card developer">
              <LuSearch class="tool-icon" />
              <h3>Icons Library Demo</h3>
              <p>Comprehensive @qwikest/icons library showcase</p>
              <ul>
                <li>12+ icon libraries</li>
                <li>Real estate icons</li>
                <li>Usage examples</li>
                <li>Code snippets</li>
              </ul>
              <button onClick$={() => document.getElementById('icons-demo')?.scrollIntoView({ behavior: 'smooth' })} class="btn btn-outline">View Icons</button>
            </div>
          </div>
        </div>
      </section>

      {/* Icons Demo Section */}
      <div id="icons-demo">
        <IconsDemo />
      </div>

      <style>{`
        .demo-header {
          background: linear-gradient(135deg, var(--primary-color) 0%, #3b82f6 100%);
          color: white;
          padding: 3rem 0;
          text-align: center;
        }

        .demo-header h1 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        .tools-navigation {
          padding: 3rem 0;
          background: var(--bg-light);
        }

        .tools-navigation h2 {
          text-align: center;
          margin-bottom: 2rem;
          color: var(--text-dark);
        }

        .tools-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .tool-card {
          background: white;
          border-radius: 12px;
          padding: 2rem;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          border: 3px solid transparent;
        }

        .tool-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
        }

        .tool-card.homebuyer {
          border-color: var(--primary-color);
        }

        .tool-card.homebuyer:hover {
          border-color: #1d4ed8;
        }

        .tool-card.homeseller {
          border-color: var(--secondary-color);
        }

        .tool-card.homeseller:hover {
          border-color: #dc2626;
        }

        .tool-card.developer {
          border-color: var(--accent-color);
        }

        .tool-card.developer:hover {
          border-color: #d97706;
        }

        .tool-icon {
          width: 3rem;
          height: 3rem;
          margin-bottom: 1rem;
          display: block;
        }

        .tool-card.homebuyer .tool-icon {
          color: var(--primary-color);
        }

        .tool-card.homeseller .tool-icon {
          color: var(--secondary-color);
        }

        .tool-card.developer .tool-icon {
          color: var(--accent-color);
        }

        .tool-card h3 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          color: var(--text-dark);
        }

        .tool-card p {
          margin-bottom: 1.5rem;
          color: var(--text-light);
          line-height: 1.6;
        }

        .tool-card ul {
          margin-bottom: 2rem;
          padding-left: 1.5rem;
        }

        .tool-card li {
          margin-bottom: 0.5rem;
          color: var(--text-dark);
        }

        .btn {
          display: inline-block;
          padding: 0.75rem 1.5rem;
          border-radius: 6px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
          border: 2px solid;
          cursor: pointer;
        }

        .btn-primary {
          background: var(--primary-color);
          color: white;
          border-color: var(--primary-color);
        }

        .btn-primary:hover {
          background: #1d4ed8;
          border-color: #1d4ed8;
          color: white;
        }

        .btn-secondary {
          background: var(--secondary-color);
          color: white;
          border-color: var(--secondary-color);
        }

        .btn-secondary:hover {
          background: #dc2626;
          border-color: #dc2626;
          color: white;
        }

        .btn-outline {
          background: transparent;
          color: var(--accent-color);
          border-color: var(--accent-color);
        }

        .btn-outline:hover {
          background: var(--accent-color);
          color: white;
          border-color: var(--accent-color);
        }

        @media (max-width: 768px) {
          .tools-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .tool-card {
            padding: 1.5rem;
          }
        }
      `}</style>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Icons Demo - @qwikest/icons',
  meta: [
    {
      name: 'description',
      content: 'Demonstration of @qwikest/icons library integration in Qwik',
    },
  ],
};
