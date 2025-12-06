import type { RequestHandler } from '@builder.io/qwik-city';

export const onGet: RequestHandler = (ev) => {
  ev.redirect(301, '/tule-springs');
};
