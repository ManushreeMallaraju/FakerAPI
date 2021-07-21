import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import ubicquiaNodeByIDApi4001 from './api/ubicquiaNodeByIDApi4001.js';

const app = express();
app.use(bodyParser());
app.use(cors());


const nodesByID = {};

app.get('/nodes/{id}', (req, res) => {

});

async function fetchNodeByID() {
    try{
       const res = await ubicquiaNodeByIDApi4001.get('/nodes/1');
       console.log(res.data);
    }
    catch(err) {
        console.log(err.message);
    }
}

fetchNodeByID();

app.listen(4001, () => {
    console.log('Listening on 4001');
});

