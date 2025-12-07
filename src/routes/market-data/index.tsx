import type { RequestHandler } from '@builder.io/qwik-city';

/**
 * Redirect to market reports page
 */
export const onGet: RequestHandler = (ev) => {
  ev.redirect(301, '/market-reports');
};

