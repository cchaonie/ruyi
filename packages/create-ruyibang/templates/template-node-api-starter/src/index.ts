import express from 'express';
import cors from 'cors';

import './configs/index.js';
import router from './router.js';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.use(express.json());

app.use(router());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`[SERVER] listening on port ${port}`);
});
