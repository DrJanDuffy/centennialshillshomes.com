import type { RequestHandler } from '@builder.io/qwik-city';

/**
 * Redirect to our luxury listings page
 */
export const onGet: RequestHandler = (ev) => {
  ev.redirect(301, '/our-luxury-listings');
};

