import { component$ } from '@builder.io/qwik';
import SEOStructuredData from './seo-structured-data';
import { pageSchemas } from './seo-structured-data';

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

/**
 * Breadcrumb Navigation Component
 * 2025: Google Search Console best practice for navigation and SEO
 * Includes structured data for better search visibility
 */
export default component$<BreadcrumbsProps>(({ items, className = '' }) => {
  // Generate breadcrumb schema
  const breadcrumbSchema = pageSchemas.breadcrumbList(items);

  return (
    <>
      <SEOStructuredData type="BreadcrumbList" data={breadcrumbSchema} />
      
      <nav 
        class={`breadcrumbs ${className}`}
        aria-label="Breadcrumb navigation"
      >
        <ol class="flex flex-wrap items-center gap-2 text-sm text-gray-600">
          {items.map((item, index) => (
            <li key={index} class="flex items-center">
              {index > 0 && (
                <span class="mx-2 text-gray-400" aria-hidden="true">
                  /
                </span>
              )}
              {index === items.length - 1 ? (
                <span 
                  class="text-gray-900 font-medium"
                  aria-current="page"
                >
                  {item.name}
                </span>
              ) : (
                <a 
                  href={item.url}
                  class="hover:text-blue-600 transition-colors"
                >
                  {item.name}
                </a>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
});

