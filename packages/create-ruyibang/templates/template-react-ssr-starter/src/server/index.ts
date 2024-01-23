import express from 'express';

import { loadEnv } from './configs/index.js';
import controller from './controller/index.js';

const config = loadEnv();

const app = express();
const port = config?.PORT || 3000;

app.get('/hello', (req, res) => {
  res.send('Hello World!');
});

app.use(controller);

app.listen(port, () => {
  console.log(`[SERVER] listening on port ${port}`);
});
