# @qwikest/icons Integration Guide

## Overview
`@qwikest/icons` is a comprehensive icon library specifically designed for Qwik applications. It provides access to multiple popular icon libraries in a Qwik-optimized format.

## Installation
```bash
pnpm add @qwikest/icons
```

## Available Icon Libraries

### 1. Heroicons (Tailwind Style) - `@qwikest/icons/heroicons`
Modern, minimal icons perfect for clean UI designs.

```typescript
import { HiHomeMini, HiMapPinMini, HiPhoneMini, HiEnvelopeMini } from '@qwikest/icons/heroicons';
```

**Best for:** Modern, minimal designs, Tailwind-based projects

### 2. Lucide Icons - `@qwikest/icons/lucide`
Clean, consistent icons with great variety.

```typescript
import { LuSearch, LuHeart, LuStar, LuCalendar, LuTrendingUp, LuUsers, LuClock } from '@qwikest/icons/lucide';
```

**Best for:** General purpose, consistent design language

### 3. Font Awesome - `@qwikest/icons/font-awesome`
Traditional, detailed icons with extensive coverage.

```typescript
import { FaHouseSolid, FaLocationDotSolid, FaPhoneSolid } from '@qwikest/icons/font-awesome';
```

**Best for:** Traditional designs, detailed icons

### 4. Material Icons - `@qwikest/icons/material`
Google's design language icons.

```typescript
import { MatHomeSharp, MatLocationOnSharp, MatPhoneSharp } from '@qwikest/icons/material';
```

**Best for:** Material Design applications

### 5. Ionicons - `@qwikest/icons/ionicons`
iOS/Android style icons.

```typescript
import { IoHomeOutline, IoLocationOutline, IoCallOutline } from '@qwikest/icons/ionicons';
```

**Best for:** Mobile-first applications

### 6. Bootstrap Icons - `@qwikest/icons/bootstrap`
```typescript
import { Bs1Circle, BsHouseDoor } from '@qwikest/icons/bootstrap';
```

### 7. Simple Icons - `@qwikest/icons/simpleicons`
Brand and technology icons.

```typescript
import { SiGoogle, SiFacebook, SiTwitter } from '@qwikest/icons/simpleicons';
```

## Real Estate Website Usage Examples

### Homepage Service Cards
```typescript
import { HiHomeMini, HiStarMini, HiMapPinMini } from '@qwikest/icons/heroicons';
import { LuTrendingUp, LuUsers, LuClock } from '@qwikest/icons/lucide';

// In your component:
<div class="service-card">
  <HiHomeMini class="service-icon" />
  <h3>Luxury Home Sales</h3>
  <p>Expert guidance for luxury homes...</p>
</div>
```

### Search Box Enhancement
```typescript
import { LuSearch } from '@qwikest/icons/lucide';

// In your component:
<div class="search-box">
  <LuSearch class="search-icon" />
  <input type="text" placeholder="Search properties..." />
</div>
```

### Contact Information
```typescript
import { HiPhoneMini, HiEnvelopeMini, HiMapPinMini } from '@qwikest/icons/heroicons';

// In your component:
<div class="contact-method">
  <HiPhoneMini class="contact-icon" />
  <span>(702) 555-0123</span>
</div>
```

## CSS Styling

### Basic Icon Styles
```css
.service-icon {
  width: 2rem;
  height: 2rem;
  color: var(--primary-color);
  margin-bottom: 1rem;
  display: block;
}

.search-icon {
  width: 1.25rem;
  height: 1.25rem;
  color: var(--text-light);
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}
```

### Responsive Icon Sizing
```css
@media (max-width: 768px) {
  .service-icon {
    width: 1.5rem;
    height: 1.5rem;
  }
}
```

## Best Practices

1. **Consistency**: Stick to one icon library per section for visual consistency
2. **Accessibility**: Always provide appropriate `aria-label` attributes
3. **Performance**: Icons are tree-shakeable - only import what you use
4. **Sizing**: Use consistent sizing across your application
5. **Color**: Icons inherit color from their parent element

## Real Estate Specific Icon Recommendations

### Property Types
- `HiHomeMini` - General homes
- `HiBuildingOfficeMini` - Commercial properties
- `HiBuildingStorefrontMini` - Retail spaces

### Services
- `LuTrendingUp` - Market analysis
- `LuUsers` - Corporate relocations
- `LuClock` - Same-day showings
- `HiStarMini` - Featured properties

### Contact & Location
- `HiPhoneMini` - Phone calls
- `HiEnvelopeMini` - Email
- `HiMapPinMini` - Location/address
- `HiGlobeAltMini` - Website

### Navigation & Actions
- `LuSearch` - Search functionality
- `LuHeart` - Favorites
- `LuCalendar` - Schedule viewing
- `LuShare2` - Share property

## Demo
Visit `/demo/icons` to see all available icons in action.

## Performance Notes
- Icons are optimized for Qwik's lazy loading
- Tree-shakeable - unused icons won't be bundled
- SVG-based for crisp rendering at any size
- Minimal bundle impact when used correctly

