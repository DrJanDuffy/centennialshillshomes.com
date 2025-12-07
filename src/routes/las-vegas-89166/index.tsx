import type { RequestHandler } from '@builder.io/qwik-city';

/**
 * Redirect invalid ZIP code to main Centennial Hills page
 * 89166 is not in our service area
 */
export const onGet: RequestHandler = (ev) => {
  ev.redirect(301, '/centennial-hills');
};

