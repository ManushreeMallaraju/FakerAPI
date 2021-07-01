const express = require('express');
const bodyParser = require('body-parser');
const {randomBytes} = require('crypto');
const cors = require('cors');
//const axios = require('axios');
//const { default: fakerApi4000 } = require('../client/src/api/fakerApi4000');


const app = express();
app.use(bodyParser.json());
app.use(cors());

//const addressByID = {};
const addresses = [];

app.get('/addresses', async(req, res) => {
     res.send(addresses);
});

app.get('/energyusage', async(req, res) => {
    console.log('in /energyusage console');
    res.send('sending something');
})

// make a function that make a call/get request from one of the ubicquia api endpoint

// store the fetched data in a array

// in the app.post method below set the req.body to the data array and serve it using res.send(array)

app.post('/addresses', async(req, res) => {

    // var location = req.body;

    // addresses.push(req.body);  //third-party thing
    // console.log(location);

    // res.status(201).send(addresses);

})

app.listen(4000, () => {
   console.log('Listening on 4000'); 
});

//post something, this will be sent to vue in created hook
//addition to address: array of json objects