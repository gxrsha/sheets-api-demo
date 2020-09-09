import Express from 'express';
import data from './data/pageviews.js';
import { getSheetData, insertRow } from './services/sheets.js';
import axios from 'axios';
import cors from 'cors';


const app = Express();
const port = 3000;

app.use(cors());
app.use(Express.urlencoded({ extended: true }));
app.use(Express.json());
app.options('*', cors());


app.get('/', (req, res) => {
    res.send('Test call');
});

app.get('/sheet', (req, res) => {
    getSheetData().then((response) => {
        console.log('response in index: ', response);
        res.send(response);
    });
});

app.post('/sheet', (req, res) => {
    insertRow(req.body).then(() => {
        res.status(201).send('Row successfully submitted to sheet');
    })
    .catch(() => {
        res.status(500).send('There was a problem sending data to the sheet');
    });
});

app.listen(port, () => console.log(`Listening on port ${port}`))
