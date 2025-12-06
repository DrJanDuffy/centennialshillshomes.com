# V0 Prompt: Modern Contact Form for Real Estate Website

Create a beautiful, user-friendly contact form component for a Las Vegas real estate website. The form should be modern, accessible, and optimized for lead generation.

## Requirements:

**Framework**: Qwik with TypeScript
**Styling**: Tailwind CSS
**Design**: Modern, clean, professional real estate aesthetic

## Form Fields:

1. **Full Name** (required) - Text input with placeholder
2. **Email** (required) - Email input with validation
3. **Phone** (required) - Tel input with formatting
4. **Service Interest** (required) - Dropdown/Select with options:
   - Buying a Home
   - Selling a Home
   - Home Valuation
   - Investment Properties
   - California Equity Buyer
   - Corporate Relocation
   - General Inquiry
5. **Budget/Price Range** (optional) - Select dropdown:
   - Under $400K
   - $400K - $600K
   - $600K - $1M
   - Over $1M
6. **Preferred Neighborhood** (optional) - Select dropdown:
   - Centennial Hills
   - Summerlin
   - Red Rock Country Club
   - The Ridges
   - Other
7. **Message** (required) - Textarea with placeholder "Tell us about your real estate needs..."
8. **Submit Button** - Primary CTA button

## Design Specifications:

- **Layout**: Two-column grid on desktop, single column on mobile
- **Colors**: 
  - Primary: Blue (#2563eb or similar)
  - Background: White with subtle shadow
  - Text: Dark gray (#1f2937)
- **Spacing**: Generous padding, clear visual hierarchy
- **Typography**: Clean, readable fonts
- **Inputs**: 
  - Rounded corners (0.5rem)
  - Focus states with blue border
  - Clear labels above inputs
  - Helpful placeholder text
- **Validation**: 
  - Real-time validation feedback
  - Error messages below fields
  - Success state after submission
- **Accessibility**: 
  - Proper ARIA labels
  - Keyboard navigation
  - Screen reader friendly
- **Mobile**: Fully responsive, touch-friendly

## Additional Features:

- Loading state on submit button
- Success message after submission
- Error handling display
- Optional: Phone number formatting as user types
- Optional: Email validation with visual feedback

## Component Structure:

```tsx
// Use Qwik component$() pattern
// Use useSignal for form state
// Use Tailwind classes for styling
// Include proper TypeScript types
```

## Visual Style:

- Card-based design with subtle shadow
- Clean, professional appearance
- Trust-building elements (optional: "We respect your privacy" note)
- Clear call-to-action button
- Spacing that feels premium, not cramped

Generate a complete, production-ready contact form component that matches these specifications.

