import render from 'preact-render-to-string';
import { h } from 'preact';
import express from 'express';

import { App } from './components/App.js';

const port = 1337;

express()
  .get('/', (req, res) => {
    const html = render(h(App), { pretty: true });

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`<!DOCTYPE html><html lang="en"><meta charset="UTF-8"><body>${html}</body></html>`);
  })
  .use(express.static('public'))
  .listen(port, () => console.log(`Listening at http://localhost:${port}`))