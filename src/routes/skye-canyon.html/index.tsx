import type { RequestHandler } from '@builder.io/qwik-city';

export const onGet: RequestHandler = ({ response }) => {
  return response.redirect('/sky-canyon', 301);
};
