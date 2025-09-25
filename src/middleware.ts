import type { RequestHandler } from '@builder.io/qwik-city';

export const onRequest: RequestHandler = ({ request, response }) => {
  const url = new URL(request.url);
  
  // Force HTTPS
  if (url.protocol === 'http:') {
    url.protocol = 'https:';
    response.headers.set('Location', url.toString());
    response.headers.set('Status', '301');
    return response.redirect(url.toString(), 301);
  }
  
  // Force www subdomain (canonical domain)
  if (!url.hostname.startsWith('www.')) {
    url.hostname = 'www.' + url.hostname;
    response.headers.set('Location', url.toString());
    response.headers.set('Status', '301');
    return response.redirect(url.toString(), 301);
  }
};
