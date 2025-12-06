import type { RequestHandler } from '@builder.io/qwik-city';

/**
 * Google Search Console verification handler
 * Supports both HTML file and meta tag verification methods
 * 
 * Usage:
 * 1. HTML file method: Place verification code in PUBLIC_GOOGLE_VERIFICATION env var
 *    Then access: /google[verification].html
 * 
 * 2. Meta tag method: Add to router-head.tsx (already supported via env var)
 */
export const onGet: RequestHandler = async (ev) => {
  // Get verification code from environment variable
  const verificationCode = ev.env.get('PUBLIC_GOOGLE_VERIFICATION') || 
                          import.meta.env.PUBLIC_GOOGLE_VERIFICATION;

  if (!verificationCode) {
    ev.html(404, 'Verification file not found');
    return;
  }

  // Return HTML file with verification meta tag
  const html = `<!DOCTYPE html>
<html>
<head>
  <meta name="google-site-verification" content="${verificationCode}" />
  <title>Google Site Verification</title>
</head>
<body>
  <p>Google Search Console verification file</p>
  <p>If you see this page, verification is configured correctly.</p>
</body>
</html>`;

  ev.html(200, html);
};

