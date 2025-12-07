import type { RequestHandler } from '@builder.io/qwik-city';

/**
 * Redirect /about-us to /about for consistency
 * Both URLs should work, but /about is the canonical URL
 */
export const onGet: RequestHandler = (ev) => {
  ev.redirect(301, '/about');
};

