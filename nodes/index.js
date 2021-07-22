import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import ubicquiaNodeByIDApi4001 from './api/ubicquiaNodeByIDApi4001.js';

const app = express();
app.use(bodyParser());
app.use(cors());

let nodeByID = [];

app.get('/nodes/:id', (req, res) => { /* this endpoint should be '/nodes/3' --> 'id' from client side*/
    // console.log('Inside app.get()', req.params.id);

    fetchNodeByID(req.params.id).then(() => {
        res.send(nodeByID);
    }
    );

});

async function fetchNodeByID(id) {
    try {
        // console.log('fetchNodeByID() ',id);
        nodeByID = [];

        await ubicquiaNodeByIDApi4001.get('/nodes/' + id).then(res => {
            // console.log(res.data.data);
            nodeByID.push(res.data.data);
            // console.log("Array" ,nodeByID);
        });
    }
    catch (err) {
        console.log(err.message);
    }
}

app.listen(4001, () => {
    console.log('Listening on 4001');
});

