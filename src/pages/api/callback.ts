import type { APIRoute } from 'astro';

export const prerender = false;

export const GET: APIRoute = async ({ url }) => {
  const code = url.searchParams.get('code');

  if (!code) {
    return new Response('Code manquant', { status: 400 });
  }

  const clientId = import.meta.env.OAUTH_CLIENT_ID;
  const clientSecret = import.meta.env.OAUTH_CLIENT_SECRET;

  const response = await fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({ client_id: clientId, client_secret: clientSecret, code }),
  });

  const data = await response.json() as { access_token?: string; error?: string };

  if (!data.access_token) {
    const html = `<!doctype html><html><body><script>
      window.opener.postMessage('authorization:github:error:${data.error ?? 'unknown'}', '*');
      window.close();
    </script></body></html>`;
    return new Response(html, { headers: { 'Content-Type': 'text/html' } });
  }

  const content = JSON.stringify({ token: data.access_token, provider: 'github' });
  const message = `authorization:github:success:${content}`;

  const html = `<!doctype html><html><body><script>
    (function() {
      var msg = ${JSON.stringify(message)};
      function receiveMessage(e) {
        window.opener.postMessage(msg, e.origin);
      }
      window.addEventListener("message", receiveMessage, false);
      window.opener.postMessage("authorizing:github", "*");
    })()
  </script></body></html>`;

  return new Response(html, { headers: { 'Content-Type': 'text/html' } });
};
