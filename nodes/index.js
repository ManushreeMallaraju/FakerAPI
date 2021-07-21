import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import ubicquiaNodeByIDApi4001 from './api/ubicquiaNodeByIDApi4001.js';

const app = express();
app.use(bodyParser());
app.use(cors());


const nodesByID = [];
//const nodeID = 4;

app.get('/nodes', (req, res) => { /* this endpoint should be '/nodes/{id}' --> 'id' from client side*/
   res.send(nodesByID);
});

async function fetchNodeByID() {
    try{
       const res = await ubicquiaNodeByIDApi4001.get('/nodes/4');
       // console.log(res.data.data);
       nodesByID.push(res.data.data);
       console.log(nodesByID);
    }
    catch(err) {
        console.log(err.message);
    }
}

fetchNodeByID();

app.listen(4001, () => {
    console.log('Listening on 4001');
});

