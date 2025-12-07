import type { RequestHandler } from '@builder.io/qwik-city';

/**
 * Redirect /index.html to / (homepage)
 * Canonical URL should be / not /index.html
 */
export const onGet: RequestHandler = (ev) => {
  ev.redirect(301, '/');
};

