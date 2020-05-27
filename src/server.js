import render from 'preact-render-to-string';
import { h } from 'preact';
import { createServer } from 'http';

import { App } from './components/App.js';

const server = createServer((req, res) => {
  const html = render(h(App), { pretty: true });

  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(`<!DOCTYPE html><html lang="en"><meta charset="UTF-8"><body>${html}</body></html>`);
});

server.listen(1337, '127.0.0.1', () => console.log('Listening on 1337...'));