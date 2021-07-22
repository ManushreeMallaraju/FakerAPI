import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import ubicquiaNodeByIDApi4001 from './api/ubicquiaNodeByIDApi4001.js';

const app = express();
app.use(bodyParser());
app.use(cors());

var nodeByID = {};
// const nodeByID = [];
//const nodeID = 4;

app.get('/nodes/:id', (req, res) => { /* this endpoint should be '/nodes/3' --> 'id' from client side*/
    // console.log('Inside app.get()', req.params.id);
    fetchNodeByID(req.params.id);
    res.send(nodeByID);
});

async function fetchNodeByID(id) {
    try {
        // console.log('fetchNodeByID() ',id);
        const res = await ubicquiaNodeByIDApi4001.get('/nodes/' + id); //('/nodes' +'/' +':id'); 
        console.log(res.data.data);
        nodeByID = res.data.data;
        // nodeByID = [];
        // nodeByID.push(res.data.data);
        //    console.log(nodesByID);
    }
    catch (err) {
        console.log(err.message);
    }
}

app.listen(4001, () => {
    console.log('Listening on 4001');
});

