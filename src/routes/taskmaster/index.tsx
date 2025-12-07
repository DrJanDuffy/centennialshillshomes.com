import type { RequestHandler } from '@builder.io/qwik-city';

/**
 * Redirect invalid page to homepage
 */
export const onGet: RequestHandler = (ev) => {
  ev.redirect(301, '/');
};

