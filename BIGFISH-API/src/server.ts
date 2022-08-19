import express from 'express';
import http from 'http';
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import morgan from 'morgan';

import router from './routes'
// connectDB();

dayjs.extend(utc);
dayjs.extend(timezone);

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', router);

export default app;

const server = http.createServer(app);
const port: number | string = '8000';
server.listen(port, () => {
    console.log('Node server started on: ', port);
});
