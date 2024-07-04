import express, { Express } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import cvRouter from './routes/cvRouter.js';

const app: Express = express();

app.use(cors({origin: '*'}))
  .use(bodyParser.urlencoded({ extended: false }))
  .use(bodyParser.json())

app.use('/api/cv', cvRouter)

app.listen(3310);