import { component$ } from '@builder.io/qwik';
import { useDocumentHead, useLocation } from '@builder.io/qwik-city';

/**
 * The RouterHead component is placed inside of the document `<head>` element.
 */
export const RouterHead = component$(() => {
  const head = useDocumentHead();
  const loc = useLocation();

  // Google Search Console verification
  const googleVerification = import.meta.env.PUBLIC_GOOGLE_VERIFICATION;
  
  // Google Analytics 4
  const gaTrackingId = import.meta.env.PUBLIC_GA_TRACKING_ID;

  // Ensure HTTPS canonical URL (2025 best practice)
  const canonicalUrl = loc.url.href.replace(/^http:/, 'https:');

  return (
    <>
      <title>{head.title}</title>

      {/* Canonical URL - 2025: Always use HTTPS */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Mobile-first viewport - 2025 best practice */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
      
      {/* Favicon and app icons */}
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      
      {/* Language and region - 2025 SEO */}
      <meta httpEquiv="content-language" content="en-US" />
      <meta name="geo.region" content="US-NV" />
      <meta name="geo.placename" content="Las Vegas" />
      <meta name="geo.position" content="36.1699;-115.1398" />
      <meta name="ICBM" content="36.1699, -115.1398" />

      {/* Google Search Console Verification */}
      {googleVerification && (
        <meta name="google-site-verification" content={googleVerification} />
      )}
      
      {/* 2025: Enhanced robots meta (if not set in page head) */}
      {!head.meta.find(m => m.name === 'robots') && (
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      )}
      
      {/* 2025: Security and performance headers */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="SAMEORIGIN" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      <meta name="referrer" content="strict-origin-when-cross-origin" />

      {head.meta.map((m) => (
        <meta key={m.key} {...m} />
      ))}

      {head.links.map((l) => (
        <link key={l.key} {...l} />
      ))}

      {head.styles.map((s) => {
        // Remove dangerouslySetInnerHTML from props if it exists to avoid duplicate key
        const props = s.props || {};
        const { dangerouslySetInnerHTML: _, ...otherProps } = props;
        return (
          <style key={s.key} {...otherProps} dangerouslySetInnerHTML={s.style} />
        );
      })}

      {/* Google Analytics 4 - 2025: Enhanced with Core Web Vitals */}
      {gaTrackingId && (
        <>
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${gaTrackingId}`}
          ></script>
          <script
            dangerouslySetInnerHTML={`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gaTrackingId}', {
                page_path: window.location.pathname,
                send_page_view: true,
                // 2025: Track Core Web Vitals
                custom_map: {
                  'metric_1': 'LCP',
                  'metric_2': 'INP',
                  'metric_3': 'CLS'
                }
              });
              
              // 2025: Report Core Web Vitals to GA4
              if ('web-vital' in window) {
                import('web-vitals').then(({ onCLS, onINP, onLCP }) => {
                  onCLS(({ value, id }) => {
                    gtag('event', 'web_vitals', {
                      event_category: 'Web Vitals',
                      event_label: 'CLS',
                      value: Math.round(value * 1000),
                      non_interaction: true,
                      metric_id: id
                    });
                  });
                  
                  onINP(({ value, id }) => {
                    gtag('event', 'web_vitals', {
                      event_category: 'Web Vitals',
                      event_label: 'INP',
                      value: Math.round(value),
                      non_interaction: true,
                      metric_id: id
                    });
                  });
                  
                  onLCP(({ value, id }) => {
                    gtag('event', 'web_vitals', {
                      event_category: 'Web Vitals',
                      event_label: 'LCP',
                      value: Math.round(value),
                      non_interaction: true,
                      metric_id: id
                    });
                  });
                });
              }
            `}
          ></script>
        </>
      )}

      {/* RealScout Web Components Script - Load globally only once */}
      <script dangerouslySetInnerHTML={`
        if (!document.querySelector('script[src="https://em.realscout.com/widgets/realscout-web-components.umd.js"]')) {
          const script = document.createElement('script');
          script.src = 'https://em.realscout.com/widgets/realscout-web-components.umd.js';
          script.type = 'module';
          script.async = true;
          document.head.appendChild(script);
        }
      `}></script>
    </>
  );
});
