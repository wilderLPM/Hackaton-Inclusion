import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import cvRouter from './routes/cvRouter.js';
const app = express();
app.use(cors({ origin: '*' }))
    .use(bodyParser.urlencoded({ extended: false }))
    .use(bodyParser.json());
app.use('/api/cv', cvRouter);
app.listen(3310);
//# sourceMappingURL=app.js.map