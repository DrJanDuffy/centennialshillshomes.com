# V0 Prompt: Modern Centered Header & Navigation

## Design Requirements

Create a modern, centered header and navigation for a real estate website using Qwik framework with TypeScript.

### Brand Colors
- Primary: #1e3a8a (Deep Blue)
- Secondary: #6b7280 (Gray)
- Background: White with glassmorphism effect
- Accent: #1e40af (Hover states)

### Layout Requirements
- **Centered Navigation**: Navigation links must be perfectly centered on the page
- **Logo**: Left-aligned with logo image and text
- **CTA Button**: Right-aligned phone number button
- **Responsive**: Mobile hamburger menu for screens < 768px
- **Sticky Header**: Fixed at top with scroll effect (background becomes more opaque on scroll)

### Navigation Structure
1. Home
2. Centennial Hills (dropdown)
   - Centennial Hills Homes
   - Homes for Sale
   - Luxury Homes
   - New Construction
   - ZIP 89135, 89138, 89144
3. Buy & Sell (dropdown)
   - Buy a Home
   - Sell a Home
   - MLS Search
   - Home Valuation
   - Market Analysis
   - First-Time Buyers
   - Luxury Buyers
4. Our Listings (dropdown)
   - Luxury Listings
   - Active Listings
   - Investment Properties
   - Luxury Estates
   - New Construction
   - Virtual Tours
   - Recent Sales
5. Communities (dropdown)
   - North Las Vegas
   - Aliante
   - Sky Canyon
   - Providence
   - Tule Springs
   - Northwest Las Vegas
6. About (dropdown)
   - About Us
   - Dr. Janet Duffy
   - Testimonials
   - Market Insights
   - Press & Media
7. Commute Calculator
8. Contact

### Technical Requirements
- Framework: Qwik with TypeScript
- Styling: Tailwind CSS + CSS Modules
- Logo: `/images/logo.png`
- Phone: (702) 903-1952
- Active state detection based on current URL
- Smooth dropdown animations
- Keyboard accessible
- ARIA labels for screen readers

### Design Features
- Glassmorphism header (backdrop blur)
- Smooth hover transitions
- Active link highlighting
- Dropdown menus with descriptions
- Mobile slide-in menu from right
- Scroll effect (header becomes more opaque)

### Code Style
- Use Qwik's `component$()` pattern
- Use `useSignal` for state management
- Use `useLocation` from `@builder.io/qwik-city` for active states
- Use `useVisibleTask$` for scroll detection
- CSS Modules for styling

Generate a complete, production-ready header component with centered navigation.

