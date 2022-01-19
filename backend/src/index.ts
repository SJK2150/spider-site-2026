import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import path from 'path';
import pino from 'pino';
require('dotenv').config({ path: path.resolve(__dirname, '../env/.env') });

import { table_sync } from './database/database';
import { router as memberRouter } from './routes/members';
import { router as projectRouter } from './routes/projects';
import { router as eventRouter } from './routes/event';
import { router as achievementRouter } from './routes/achievements';
import { router as loginRouter } from './routes/login';
import { router as blogRouter } from './routes/blogs';
import { jwt_verify } from './utils/middleware';

const app = express();
const port = process.env.PORT || 3001;
app.use(cors());
app.use(helmet());
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const logger = pino({
  level: 'info',
  prettyPrint: process.env.ENV === 'DEV'
});

app.use('/api/blog', blogRouter);
app.use('/api/member', memberRouter);
app.use('/api/achievement', achievementRouter);
app.use('/api/project', projectRouter);
app.use('/login', loginRouter);
// app.use('/', jwt_verify);
app.use('/api/event', eventRouter);
app.use('/api/blog', blogRouter);  

app.get('/', (req: any, res: any) => {
  res.send('Hi');
});

app.listen(port, () => {
  // table_sync();   //comment this line when tables are created
  logger.info(`Connected successfully at port ${port}`);
});
