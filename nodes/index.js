const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser());
app.use(cors());

const nodesByID = {};

app.get('/nodes/{id}', (req, res) => {

});

app.listen(4001, () => {
    console.log('Listening on 4001');
});

