import { component$ } from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';
import { useStyles$ } from '@builder.io/qwik';
import styles from './breadcrumbs.css?inline';

interface BreadcrumbItem {
  label: string;
  href: string;
}

export default component$(() => {
  useStyles$(styles);
  
  const location = useLocation();
  const pathname = location.pathname || '';
  
  // Generate breadcrumbs based on current path
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    const segments = pathname.split('/').filter(segment => segment !== '');
    const breadcrumbs: BreadcrumbItem[] = [
      { label: 'Home', href: '/' }
    ];
    
    let currentPath = '';
    
    segments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      
      // Convert segment to readable label
      const label = segment
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      
      // Special cases for specific pages
      const specialLabels: Record<string, string> = {
        'luxury-home-sales': 'Luxury Home Sales',
        'california-equity-buyers': 'California Equity Buyers',
        'corporate-relocations': 'Corporate Relocations',
        'market-analysis': 'Market Analysis',
        'same-day-showings': 'Same-Day Showings',
        'investment-properties': 'Investment Properties',
        'red-rock-country-club': 'Red Rock Country Club',
        'summerlin-west': 'Summerlin West',
        'centennial-hills': 'Centennial Hills',
        'lone-mountain': 'Lone Mountain',
        'north-las-vegas': 'North Las Vegas',
        'commute-calculator': 'Commute Calculator',
        'the-ridges': 'The Ridges'
      };
      
      const finalLabel = specialLabels[segment] || label;
      
      // Don't add current page as breadcrumb (it's not clickable)
      if (index === segments.length - 1) {
        return;
      }
      
      breadcrumbs.push({
        label: finalLabel,
        href: currentPath
      });
    });
    
    return breadcrumbs;
  };
  
  const breadcrumbs = generateBreadcrumbs();
  
  // Don't show breadcrumbs on home page
  if (pathname === '/') {
    return null;
  }
  
  return (
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <ol class="breadcrumb-list">
        {breadcrumbs.map((breadcrumb, index) => (
          <li class="breadcrumb-item" key={breadcrumb.href}>
            <a href={breadcrumb.href} class="breadcrumb-link">
              {breadcrumb.label}
            </a>
            {index < breadcrumbs.length - 1 && (
              <svg class="breadcrumb-separator" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path d="M6.22 4.22a.75.75 0 0 1 1.06 0L10.94 8a.75.75 0 0 1 0 1.06L7.28 12.72a.75.75 0 0 1-1.06-1.06L9.38 8.5 6.22 5.34a.75.75 0 0 1 0-1.06z"/>
              </svg>
            )}
          </li>
        ))}
        {/* Current page */}
        <li class="breadcrumb-item current">
          <span class="breadcrumb-current">
            {pathname.split('/').pop()?.split('-').map(word => 
              word.charAt(0).toUpperCase() + word.slice(1)
            ).join(' ') || 'Page'}
          </span>
        </li>
      </ol>
    </nav>
  );
});
