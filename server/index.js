import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
//const {randomBytes} = require('crypto');
//const cors = require('cors');
import axios from 'axios';

import ubicqiaEnergyUsageApi4000 from './api/ubicqiaEnergyUsageApi4000.js';
//const axios = require('axios');


const app = express();
app.use(bodyParser.json());
app.use(cors());

//const addressByID = {};
const addresses = [];
const energyusageArray = [];

app.get('/addresses', async(req, res) => {
     res.send(addresses);
});

app.get('/energyusage', async(req, res) => {
    console.log('in /energyusage console');
    res.send(req.body);
})

//Step 1: Making call to one of a ubicquia api endpoint
async function fetchEnergyUsage() {
    const res = await ubicqiaEnergyUsageApi4000.get('/energyusage', { 
        params:{
            report_type: "day"
        },
    });
    console.log(res.data);
}

fetchEnergyUsage();

// Step 1: make a function that make a call/get request from one of the ubicquia api endpoint 

// Step 2:store the fetched data in a array

// Step 3:in the app.post method below set the req.body to the data array and serve it using res.send(array)

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