import type { RequestHandler } from '@builder.io/qwik-city';

export const onGet: RequestHandler = ({ response }) => {
  return response.redirect('/tule-springs', 301);
};
