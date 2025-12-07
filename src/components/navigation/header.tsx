import { component$, useSignal, useVisibleTask$, useStyles$ } from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';
import styles from './header.css?inline';

export default component$(() => {
  useStyles$(styles);
  const loc = useLocation();
  
  const isMenuOpen = useSignal(false);
  const isScrolled = useSignal(false);
  const isCentennialHillsOpen = useSignal(false);
  const isBuySellOpen = useSignal(false);
  const isListingsOpen = useSignal(false);
  const isCommunitiesOpen = useSignal(false);
  const isAboutOpen = useSignal(false);

  // Handle scroll detection for header styling
  useVisibleTask$(() => {
    if (typeof window === 'undefined') return;
    
    const handleScroll = () => {
      isScrolled.value = window.scrollY > 20;
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check initial state
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  // Handle mobile menu body scroll lock
  useVisibleTask$(({ track }) => {
    track(() => isMenuOpen.value);
    
    if (typeof document === 'undefined') return;
    
    if (isMenuOpen.value) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  });

  // Helper function to check if a path is active
  const isActive = (path: string) => {
    return loc.url.pathname === path || loc.url.pathname.startsWith(path + '/');
  };

  return (
    <header class={`main-header ${isScrolled.value ? 'scrolled' : ''}`}>
      <div class="header-container">
        {/* Logo Section */}
        <div class="logo-section">
          <a href="/" class="logo-link">
            <img 
              src="/images/logo.png" 
              alt="Centennial Hills Real Estate - Homes by Dr. Jan Duffy"
              class="logo-image"
              loading="eager"
            />
            <div class="logo-text">
              <span class="logo-main">Dr. Jan Duffy</span>
              <span class="logo-subtitle">Centennial Hills Real Estate</span>
            </div>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav class="desktop-nav">
          <ul class="nav-list">
	            <li class="nav-item">
	              <a href="/" class={`nav-link ${isActive('/') && loc.url.pathname === '/' ? 'active' : ''}`}>
	                Home
	              </a>
	            </li>
	            
	            <li class="nav-item dropdown">
	              <button 
	                class={`nav-link dropdown-toggle ${isActive('/buy') || isActive('/sell') || isActive('/mls') || isActive('/home-valuation') || isActive('/market-analysis') ? 'active' : ''}`}
	                onMouseEnter$={() => isBuySellOpen.value = true}
	                onMouseLeave$={() => isBuySellOpen.value = false}
	
	                aria-expanded={isBuySellOpen.value}
	                aria-haspopup="true"
	              >
	                Buy & Sell
	                <svg class={`dropdown-icon ${isBuySellOpen.value ? 'open' : ''}`} width="12" height="12" viewBox="0 0 12 12">
	                  <path d="M6 8L2 4h8L6 8z" fill="currentColor"/>
	                </svg>
	              </button>
	              <div 
	                class={`dropdown-menu ${isBuySellOpen.value ? 'show' : ''}`}
	                onMouseEnter$={() => isBuySellOpen.value = true}
	                onMouseLeave$={() => isBuySellOpen.value = false}
	              >
	                <a href="/buy-a-home" class="dropdown-link">
	                  <div class="dropdown-item">
	                    <h4>Buy a Home</h4>
	                    <p>Expert guidance for home buyers</p>
	                  </div>
	                </a>
	                <a href="/sell-a-home" class="dropdown-link">
	                  <div class="dropdown-item">
	                    <h4>Sell a Home</h4>
	                    <p>Maximize your home's value</p>
	                  </div>
	                </a>
	                <a href="/mls-search" class="dropdown-link">
	                  <div class="dropdown-item">
	                    <h4>MLS Search</h4>
	                    <p>Search all available properties</p>
	                  </div>
	                </a>
	                <a href="/home-valuation" class="dropdown-link">
	                  <div class="dropdown-item">
	                    <h4>Home Valuation</h4>
	                    <p>Get your free property estimate</p>
	                  </div>
	                </a>
	                <a href="/market-analysis" class="dropdown-link">
	                  <div class="dropdown-item">
	                    <h4>Market Analysis</h4>
	                    <p>Comprehensive market insights</p>
	                  </div>
	                </a>
	                <a href="/first-time-homebuyers" class="dropdown-link">
	                  <div class="dropdown-item">
	                    <h4>First-Time Buyers</h4>
	                    <p>Complete buyer guidance</p>
	                  </div>
	                </a>
	                <a href="/luxury-home-buyers" class="dropdown-link">
	                  <div class="dropdown-item">
	                    <h4>Luxury Buyers</h4>
	                    <p>Premium property specialists</p>
	                  </div>
	                </a>
	              </div>
	            </li>
	            
	            <li class="nav-item dropdown">
	              <button 
	                class={`nav-link dropdown-toggle ${isActive('/centennial-hills') ? 'active' : ''}`}
	                onMouseEnter$={() => isCentennialHillsOpen.value = true}
	                onMouseLeave$={() => isCentennialHillsOpen.value = false}
	
	                aria-expanded={isCentennialHillsOpen.value}
	                aria-haspopup="true"
	              >
	                Centennial Hills
	                <svg class={`dropdown-icon ${isCentennialHillsOpen.value ? 'open' : ''}`} width="12" height="12" viewBox="0 0 12 12">
	                  <path d="M6 8L2 4h8L6 8z" fill="currentColor"/>
	                </svg>
	              </button>
	              <div 
	                class={`dropdown-menu ${isCentennialHillsOpen.value ? 'show' : ''}`}
	                onMouseEnter$={() => isCentennialHillsOpen.value = true}
	                onMouseLeave$={() => isCentennialHillsOpen.value = false}
	              >
	                <a href="/centennial-hills-homes" class="dropdown-link">
	                  <div class="dropdown-item">
	                    <h4>Centennial Hills Homes</h4>
	                    <p>Find your dream home in Northwest Las Vegas</p>
	                  </div>
	                </a>
	                <a href="/centennial-hills-homes-for-sale" class="dropdown-link">
	                  <div class="dropdown-item">
	                    <h4>Homes for Sale</h4>
	                    <p>Active listings in Centennial Hills</p>
	                  </div>
	                </a>
	                <a href="/centennial-hills-luxury-homes" class="dropdown-link">
	                  <div class="dropdown-item">
	                    <h4>Luxury Homes</h4>
	                    <p>Premium properties $400K-$750K</p>
	                  </div>
	                </a>
	                <a href="/centennial-hills-new-construction" class="dropdown-link">
	                  <div class="dropdown-item">
	                    <h4>New Construction</h4>
	                    <p>Brand new homes and developments</p>
	                  </div>
	                </a>
	                <a href="/centennial-hills-89135" class="dropdown-link">
	                  <div class="dropdown-item">
	                    <h4>ZIP 89135</h4>
	                    <p>Central Centennial Hills</p>
	                  </div>
	                </a>
	                <a href="/centennial-hills-89138" class="dropdown-link">
	                  <div class="dropdown-item">
	                    <h4>ZIP 89138</h4>
	                    <p>North Centennial Hills</p>
	                  </div>
	                </a>
	                <a href="/centennial-hills-89144" class="dropdown-link">
	                  <div class="dropdown-item">
	                    <h4>ZIP 89144</h4>
	                    <p>West Centennial Hills</p>
	                  </div>
	                </a>
	              </div>
	            </li>

            <li class="nav-item dropdown">
              <button 
                class={`nav-link dropdown-toggle ${isActive('/our-luxury-listings') || isActive('/active-listings') || isActive('/investment-properties') || isActive('/luxury-estates') || isActive('/new-construction') || isActive('/virtual-tours') || isActive('/recent-sales') ? 'active' : ''}`}
                onMouseEnter$={() => isListingsOpen.value = true}
                onMouseLeave$={() => isListingsOpen.value = false}

                aria-expanded={isListingsOpen.value}
                aria-haspopup="true"
              >
                Our Listings
                <svg class={`dropdown-icon ${isListingsOpen.value ? 'open' : ''}`} width="12" height="12" viewBox="0 0 12 12">
                  <path d="M6 8L2 4h8L6 8z" fill="currentColor"/>
                </svg>
              </button>
              <div 
                class={`dropdown-menu ${isListingsOpen.value ? 'show' : ''}`}
                onMouseEnter$={() => isListingsOpen.value = true}
                onMouseLeave$={() => isListingsOpen.value = false}
              >
                <a href="/our-luxury-listings" class="dropdown-link">
                  <div class="dropdown-item">
                    <h4>Luxury Listings</h4>
                    <p>Exclusive premium properties</p>
                  </div>
                </a>
                <a href="/active-listings" class="dropdown-link">
                  <div class="dropdown-item">
                    <h4>Active Listings</h4>
                    <p>Currently available homes</p>
                  </div>
                </a>
                <a href="/investment-properties" class="dropdown-link">
                  <div class="dropdown-item">
                    <h4>Investment Properties</h4>
                    <p>Strategic investment opportunities</p>
                  </div>
                </a>
                <a href="/luxury-estates" class="dropdown-link">
                  <div class="dropdown-item">
                    <h4>Luxury Estates</h4>
                    <p>High-end custom homes</p>
                  </div>
                </a>
                <a href="/new-construction" class="dropdown-link">
                  <div class="dropdown-item">
                    <h4>New Construction</h4>
                    <p>Brand new homes available</p>
                  </div>
                </a>
                <a href="/virtual-tours" class="dropdown-link">
                  <div class="dropdown-item">
                    <h4>Virtual Tours</h4>
                    <p>360° property walkthroughs</p>
                  </div>
                </a>
                <a href="/recent-sales" class="dropdown-link">
                  <div class="dropdown-item">
                    <h4>Recent Sales</h4>
                    <p>Recently sold properties</p>
                  </div>
                </a>
              </div>
            </li>

            <li class="nav-item dropdown">
              <button 
                class={`nav-link dropdown-toggle ${isActive('/north-las-vegas') || isActive('/aliante') || isActive('/sky-canyon') || isActive('/providence') || isActive('/tule-springs') || isActive('/northwest-las-vegas') ? 'active' : ''}`}
                onMouseEnter$={() => isCommunitiesOpen.value = true}
                onMouseLeave$={() => isCommunitiesOpen.value = false}

                aria-expanded={isCommunitiesOpen.value}
                aria-haspopup="true"
              >
                Communities
                <svg class={`dropdown-icon ${isCommunitiesOpen.value ? 'open' : ''}`} width="12" height="12" viewBox="0 0 12 12">
                  <path d="M6 8L2 4h8L6 8z" fill="currentColor"/>
                </svg>
              </button>
              <div 
                class={`dropdown-menu ${isCommunitiesOpen.value ? 'show' : ''}`}
                onMouseEnter$={() => isCommunitiesOpen.value = true}
                onMouseLeave$={() => isCommunitiesOpen.value = false}
              >
                <a href="/north-las-vegas" class="dropdown-link">
                  <div class="dropdown-item">
                    <h4>North Las Vegas</h4>
                    <p>Growing area with new developments</p>
                  </div>
                </a>
                <a href="/aliante" class="dropdown-link">
                  <div class="dropdown-item">
                    <h4>Aliante</h4>
                    <p>Master-planned community with amenities</p>
                  </div>
                </a>
                <a href="/sky-canyon" class="dropdown-link">
                  <div class="dropdown-item">
                    <h4>Sky Canyon</h4>
                    <p>New development with modern homes</p>
                  </div>
                </a>
                <a href="/providence" class="dropdown-link">
                  <div class="dropdown-item">
                    <h4>Providence</h4>
                    <p>Family-friendly community</p>
                  </div>
                </a>
                <a href="/tule-springs" class="dropdown-link">
                  <div class="dropdown-item">
                    <h4>Tule Springs</h4>
                    <p>Natural beauty and recreation</p>
                  </div>
                </a>
                <a href="/northwest-las-vegas" class="dropdown-link">
                  <div class="dropdown-item">
                    <h4>Northwest Las Vegas</h4>
                    <p>Regional overview and opportunities</p>
                  </div>
                </a>
              </div>
            </li>

            <li class="nav-item dropdown">
              <button 
                class={`nav-link dropdown-toggle ${isActive('/about') || isActive('/janet-duffy') || isActive('/testimonials') || isActive('/market-insights') || isActive('/press-media') ? 'active' : ''}`}
                onMouseEnter$={() => isAboutOpen.value = true}
                onMouseLeave$={() => isAboutOpen.value = false}

                aria-expanded={isAboutOpen.value}
                aria-haspopup="true"
              >
                About
                <svg class={`dropdown-icon ${isAboutOpen.value ? 'open' : ''}`} width="12" height="12" viewBox="0 0 12 12">
                  <path d="M6 8L2 4h8L6 8z" fill="currentColor"/>
                </svg>
              </button>
              <div 
                class={`dropdown-menu ${isAboutOpen.value ? 'show' : ''}`}
                onMouseEnter$={() => isAboutOpen.value = true}
                onMouseLeave$={() => isAboutOpen.value = false}
              >
                <a href="/about-us" class="dropdown-link">
                  <div class="dropdown-item">
                    <h4>About Us</h4>
                    <p>Dr. Janet Duffy's expertise</p>
                  </div>
                </a>
                <a href="/janet-duffy" class="dropdown-link">
                  <div class="dropdown-item">
                    <h4>Dr. Janet Duffy</h4>
                    <p>Meet your real estate expert</p>
                  </div>
                </a>
                <a href="/testimonials" class="dropdown-link">
                  <div class="dropdown-item">
                    <h4>Testimonials</h4>
                    <p>Client success stories</p>
                  </div>
                </a>
                <a href="/market-insights" class="dropdown-link">
                  <div class="dropdown-item">
                    <h4>Market Insights</h4>
                    <p>Real estate market analysis</p>
                  </div>
                </a>
                <a href="/press-media" class="dropdown-link">
                  <div class="dropdown-item">
                    <h4>Press & Media</h4>
                    <p>News and recognition</p>
                  </div>
                </a>
              </div>
            </li>
            
            <li class="nav-item">
              <a href="/commute-calculator" class={`nav-link ${isActive('/commute-calculator') ? 'active' : ''}`}>
                Commute Calculator
              </a>
            </li>
            
            <li class="nav-item">
              <a href="/contact" class={`nav-link ${isActive('/contact') ? 'active' : ''}`}>
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* CTA Button */}
        <div class="header-cta">
	          <a href="/home-valuation" class="cta-button">
	            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
	              <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
	              <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
	            </svg>
	            Sell Your Home
	          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          class={`mobile-menu-button ${isMenuOpen.value ? 'open' : ''}`}
          onClick$={() => isMenuOpen.value = !isMenuOpen.value}
          aria-label="Toggle mobile menu"
        >
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div class={`mobile-nav ${isMenuOpen.value ? 'open' : ''}`}>
        <div class="mobile-nav-content">
          <div class="mobile-nav-header">
            <a href="/" class="mobile-logo-link" onClick$={() => isMenuOpen.value = false}>
              <img 
                src="/images/logo.png" 
                alt="Centennial Hills Real Estate - Homes by Dr. Jan Duffy"
                class="mobile-logo-image"
                loading="eager"
              />
              <div class="mobile-logo">
              <span class="logo-main">Dr. Jan Duffy</span>
              <span class="logo-subtitle">Centennial Hills Real Estate</span>
              </div>
            </a>
            <button 
              class="mobile-close"
              onClick$={() => isMenuOpen.value = false}
              aria-label="Close mobile menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
              </svg>
            </button>
          </div>

          <nav class="mobile-nav-menu">
            <ul class="mobile-nav-list">
              <li class="mobile-nav-item">
                <a href="/" class="mobile-nav-link" onClick$={() => isMenuOpen.value = false}>
                  Home
                </a>
              </li>
              
	              <li class="mobile-nav-item">
	                <div class="mobile-nav-section">
	                  <h3 class="mobile-nav-section-title">Buy & Sell</h3>
	                  <ul class="mobile-nav-sublist">
	                    <li><a href="/buy-a-home" class="mobile-nav-sublink" onClick$={() => isMenuOpen.value = false}>Buy a Home</a></li>
	                    <li><a href="/sell-a-home" class="mobile-nav-sublink" onClick$={() => isMenuOpen.value = false}>Sell a Home</a></li>
	                    <li><a href="/mls-search" class="mobile-nav-sublink" onClick$={() => isMenuOpen.value = false}>MLS Search</a></li>
	                    <li><a href="/home-valuation" class="mobile-nav-sublink" onClick$={() => isMenuOpen.value = false}>Home Valuation</a></li>
	                    <li><a href="/market-analysis" class="mobile-nav-sublink" onClick$={() => isMenuOpen.value = false}>Market Analysis</a></li>
	                    <li><a href="/first-time-homebuyers" class="mobile-nav-sublink" onClick$={() => isMenuOpen.value = false}>First-Time Buyers</a></li>
	                    <li><a href="/luxury-home-buyers" class="mobile-nav-sublink" onClick$={() => isMenuOpen.value = false}>Luxury Buyers</a></li>
	                  </ul>
	                </div>
	              </li>
	
	              <li class="mobile-nav-item">
	                <div class="mobile-nav-section">
	                  <h3 class="mobile-nav-section-title">Centennial Hills</h3>
	                  <ul class="mobile-nav-sublist">
	                    <li><a href="/centennial-hills-homes" class="mobile-nav-sublink" onClick$={() => isMenuOpen.value = false}>Centennial Hills Homes</a></li>
	                    <li><a href="/centennial-hills-homes-for-sale" class="mobile-nav-sublink" onClick$={() => isMenuOpen.value = false}>Homes for Sale</a></li>
	                    <li><a href="/centennial-hills-luxury-homes" class="mobile-nav-sublink" onClick$={() => isMenuOpen.value = false}>Luxury Homes</a></li>
	                    <li><a href="/centennial-hills-new-construction" class="mobile-nav-sublink" onClick$={() => isMenuOpen.value = false}>New Construction</a></li>
	                    <li><a href="/centennial-hills-89135" class="mobile-nav-sublink" onClick$={() => isMenuOpen.value = false}>ZIP 89135</a></li>
	                    <li><a href="/centennial-hills-89138" class="mobile-nav-sublink" onClick$={() => isMenuOpen.value = false}>ZIP 89138</a></li>
	                    <li><a href="/centennial-hills-89144" class="mobile-nav-sublink" onClick$={() => isMenuOpen.value = false}>ZIP 89144</a></li>
	                  </ul>
	                </div>
	              </li>

              <li class="mobile-nav-item">
                <div class="mobile-nav-section">
                  <h3 class="mobile-nav-section-title">Our Listings</h3>
                  <ul class="mobile-nav-sublist">
                    <li><a href="/our-luxury-listings" class="mobile-nav-sublink" onClick$={() => isMenuOpen.value = false}>Luxury Listings</a></li>
                    <li><a href="/active-listings" class="mobile-nav-sublink" onClick$={() => isMenuOpen.value = false}>Active Listings</a></li>
                    <li><a href="/investment-properties" class="mobile-nav-sublink" onClick$={() => isMenuOpen.value = false}>Investment Properties</a></li>
                    <li><a href="/luxury-estates" class="mobile-nav-sublink" onClick$={() => isMenuOpen.value = false}>Luxury Estates</a></li>
                    <li><a href="/virtual-tours" class="mobile-nav-sublink" onClick$={() => isMenuOpen.value = false}>Virtual Tours</a></li>
                    <li><a href="/recent-sales" class="mobile-nav-sublink" onClick$={() => isMenuOpen.value = false}>Recent Sales</a></li>
                  </ul>
                </div>
              </li>

              <li class="mobile-nav-item">
                <div class="mobile-nav-section">
                  <h3 class="mobile-nav-section-title">Communities</h3>
                  <ul class="mobile-nav-sublist">
                    <li><a href="/north-las-vegas" class="mobile-nav-sublink" onClick$={() => isMenuOpen.value = false}>North Las Vegas</a></li>
                    <li><a href="/aliante" class="mobile-nav-sublink" onClick$={() => isMenuOpen.value = false}>Aliante</a></li>
                    <li><a href="/sky-canyon" class="mobile-nav-sublink" onClick$={() => isMenuOpen.value = false}>Sky Canyon</a></li>
                    <li><a href="/providence" class="mobile-nav-sublink" onClick$={() => isMenuOpen.value = false}>Providence</a></li>
                    <li><a href="/tule-springs" class="mobile-nav-sublink" onClick$={() => isMenuOpen.value = false}>Tule Springs</a></li>
                    <li><a href="/northwest-las-vegas" class="mobile-nav-sublink" onClick$={() => isMenuOpen.value = false}>Northwest Las Vegas</a></li>
                  </ul>
                </div>
              </li>

              <li class="mobile-nav-item">
                <div class="mobile-nav-section">
                  <h3 class="mobile-nav-section-title">About</h3>
                  <ul class="mobile-nav-sublist">
                    <li><a href="/about-us" class="mobile-nav-sublink" onClick$={() => isMenuOpen.value = false}>About Us</a></li>
                    <li><a href="/janet-duffy" class="mobile-nav-sublink" onClick$={() => isMenuOpen.value = false}>Dr. Janet Duffy</a></li>
                    <li><a href="/testimonials" class="mobile-nav-sublink" onClick$={() => isMenuOpen.value = false}>Testimonials</a></li>
                    <li><a href="/market-insights" class="mobile-nav-sublink" onClick$={() => isMenuOpen.value = false}>Market Insights</a></li>
                    <li><a href="/press-media" class="mobile-nav-sublink" onClick$={() => isMenuOpen.value = false}>Press & Media</a></li>
                  </ul>
                </div>
              </li>
              
              <li class="mobile-nav-item">
                <a href="/commute-calculator" class="mobile-nav-link" onClick$={() => isMenuOpen.value = false}>
                  Commute Calculator
                </a>
              </li>
              
              <li class="mobile-nav-item">
                <a href="/contact" class="mobile-nav-link" onClick$={() => isMenuOpen.value = false}>
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          <div class="mobile-nav-footer">
	            <a href="/home-valuation" class="mobile-cta-button">
	              <svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor">
	                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
	                <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
	              </svg>
	              Sell Your Home
	            </a>
          </div>
        </div>
      </div>
    </header>
  );
});
