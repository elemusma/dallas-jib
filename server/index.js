import path from 'path';
import fs from 'fs';

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import express from 'express';
import { Helmet } from 'react-helmet';
import Helmet, { HelmetProvider } from 'react-helmet-async';

import App from '../src/App';

const PORT = process.env.PORT || 3006;
const app = express();

app.get('/*', (req, res) => {
  const appString = ReactDOMServer.renderToString(
    <HelmetProvider>
  <App />
  </HelmetProvider>
  );
  const helmet = Helmet.renderStatic();

  const html = `<!DOCTYPE html>
    <html lang="en">
      <head>
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
      </head>
      <body>
        <div id="root">
          ${ appString }
        </div>
      </body>
    </html>
  `

  res.send(html);
});

app.listen(PORT);
