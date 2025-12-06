# V0 Navigation Improvement Prompt

Copy this prompt to v0.dev to generate an improved navigation component:

---

Create a modern, professional navigation header for a real estate website using Qwik framework and Tailwind CSS. The navigation should be:

**Requirements:**
- Fixed header with glassmorphism effect (semi-transparent white background with blur)
- Logo on the left (image + text: "Centennial Hills Real Estate" with subtitle "Homes by Dr. Jan Duffy")
- Desktop navigation: Horizontal menu with dropdowns that appear on hover
- Mobile navigation: Hamburger menu that slides in from right with smooth animations
- CTA button: "Call (702) 903-1952" prominently displayed on desktop
- Smooth transitions and hover effects throughout

**Navigation Items:**
1. Home (simple link)
2. Centennial Hills (dropdown with: Homes, Homes for Sale, Luxury Homes, New Construction, ZIP 89135, ZIP 89138, ZIP 89144)
3. Buy & Sell (dropdown with: Buy a Home, Sell a Home, MLS Search, Home Valuation, Market Analysis, First-Time Buyers, Luxury Buyers)
4. Our Listings (dropdown with: Luxury Listings, Active Listings, Investment Properties, Luxury Estates, New Construction, Virtual Tours, Recent Sales)
5. Communities (dropdown with: North Las Vegas, Aliante, Sky Canyon, Providence, Tule Springs, Northwest Las Vegas)
6. About (dropdown with: About Us, Dr. Janet Duffy, Testimonials, Market Insights, Press & Media)
7. Commute Calculator (simple link)
8. Contact (simple link)

**Design Specifications:**
- Color scheme: Primary blue (#1e3a8a), gray text (#374151), white background
- Dropdown menus: White cards with subtle shadow, rounded corners, hover states
- Mobile menu: Full-height slide-in panel from right, dark overlay backdrop
- Typography: Clean, modern sans-serif font
- Icons: SVG icons for dropdown arrows, phone, hamburger menu
- Responsive: Mobile-first design, breakpoint at 768px
- Accessibility: Proper ARIA labels, keyboard navigation support, focus states

**Qwik Framework Specifics:**
- Use `component$()` for the component
- Use `useSignal()` for state management (menu open/closed, dropdown states)
- Use `onMouseEnter$` and `onMouseLeave$` for dropdown hover
- Use `onClick$` for mobile menu toggle
- Use Tailwind CSS classes for styling (no custom CSS files)

**Special Features:**
- Header should shrink slightly on scroll (optional enhancement)
- Dropdown menus should have smooth fade-in animations
- Mobile menu should have backdrop blur effect
- Logo should be clickable and link to homepage
- All links should have hover states with color transitions

**Code Style:**
- TypeScript with proper types
- Clean, semantic HTML structure
- Tailwind utility classes only
- Qwik-specific event handlers ($ suffix)
- Proper accessibility attributes

Generate a complete, production-ready navigation component that I can directly integrate into my Qwik application.

---

## Usage Instructions

1. Copy the prompt above
2. Go to v0.dev
3. Paste the prompt
4. Review the generated component
5. Share the output for refinements

