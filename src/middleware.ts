import type { RequestHandler } from '@builder.io/qwik-city';

export const onRequest: RequestHandler = (ev) => {
  const url = new URL(ev.request.url);
  
  // Force HTTPS
  if (url.protocol === 'http:') {
    url.protocol = 'https:';
    ev.redirect(301, url.toString());
    return;
  }
  
  // Force www subdomain (canonical domain)
  if (!url.hostname.startsWith('www.')) {
    url.hostname = 'www.' + url.hostname;
    ev.redirect(301, url.toString());
    return;
  }
};
