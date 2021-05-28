import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import path from 'path';
import pino from 'pino';
require('dotenv').config({ path: path.resolve(__dirname, '../env/.env') });

import { router as memberRouter } from './routes/members';
import { router as projectRouter } from './routes/projects';

const app = express();
const port = process.env.PORT || 3001;
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const logger = pino({
  level: 'info',
  prettyPrint: process.env.ENV === 'DEV'
});

app.use('/api/member', memberRouter);
app.use('/api/project', projectRouter);

app.get('/', (req: any, res: any) => {
  res.send('Hi');
});

app.listen(port, () => {
  logger.info(`Connected successfully at port ${port}`);
});
