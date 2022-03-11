import express from 'express';
import { urlencoded, json } from 'body-parser';
import routes from './routes';

const app = express();

app.use(urlencoded({extended: false}));
app.use(json());
app.use(routes)

app.listen(8080, () => {
    console.log('Server ON!');
});
