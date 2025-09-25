# Centennial Hills Homes - Agent Instructions

## Project Overview
This is a real estate website focused on Centennial Hills, Las Vegas area. The site showcases properties, provides market insights, and helps buyers and sellers navigate the local real estate market.

## Technology Stack
- Qwik with TypeScript
- Tailwind CSS for styling
- Vite for build tooling
- Vercel Edge Runtime for deployment

## Key Areas of Focus

### Real Estate Domain
- Properties in Centennial Hills (zip codes: 89135, 89138, 89144)
- Las Vegas area real estate market
- Luxury homes and new construction
- Property search and filtering
- Market analysis and insights

### Technical Standards
- Use TypeScript for all new code
- Follow Qwik component patterns with `component$()`
- Implement proper error handling
- Optimize for Core Web Vitals
- Ensure accessibility compliance

### SEO Requirements
- Location-based keyword optimization
- Structured data for properties
- Proper meta tags and descriptions
- Mobile-first responsive design
- Fast loading times

## Common Tasks

### Adding New Properties
1. Use the Property interface from `src/data/sample-properties.ts`
2. Include proper images with alt text
3. Add structured data for SEO
4. Validate all property information

### Creating New Pages
1. Follow the existing route structure in `src/routes/`
2. Include proper meta tags
3. Implement responsive design
4. Add location-specific content

### Component Development
1. Use TypeScript interfaces for props
2. Implement proper error boundaries
3. Follow accessibility guidelines
4. Optimize for performance

## Code Style
- Use camelCase for variables and functions
- Use PascalCase for components
- Use kebab-case for file names
- Use descriptive names for all identifiers
- Include proper JSDoc comments for complex functions

## Performance Guidelines
- Optimize images (WebP format preferred)
- Implement lazy loading
- Use proper caching strategies
- Minimize JavaScript bundle size
- Follow Core Web Vitals guidelines

## Accessibility Requirements
- Use semantic HTML elements
- Include proper ARIA labels
- Ensure keyboard navigation
- Maintain color contrast ratios
- Provide alt text for images
