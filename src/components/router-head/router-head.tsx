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

  return (
    <>
      <title>{head.title}</title>

      <link rel="canonical" href={loc.url.href} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />

      {/* Google Search Console Verification */}
      {googleVerification && (
        <meta name="google-site-verification" content={googleVerification} />
      )}

      {head.meta.map((m) => (
        <meta key={m.key} {...m} />
      ))}

      {head.links.map((l) => (
        <link key={l.key} {...l} />
      ))}

      {head.styles.map((s) => (
        <style key={s.key} {...s.props} dangerouslySetInnerHTML={s.style} />
      ))}

      {/* Google Analytics 4 */}
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
              });
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
