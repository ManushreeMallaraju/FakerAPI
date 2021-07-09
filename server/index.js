import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
//const {randomBytes} = require('crypto');
//const cors = require('cors');
import axios from 'axios';

import ubicqiaEnergyUsageApi4000 from './api/ubicqiaEnergyUsageApi4000.js';
import ubicquiaCurrentNodeState4000 from './api/ubicquiaCurrentNodeState4000.js';
//const axios = require('axios');


const app = express();
app.use(bodyParser.json());
app.use(cors());

//const addressByID = {};
const addresses = [];
const energyusageArray = [];
const customNodeStateArray = [];

app.get('/addresses', async (req, res) => {
    res.send(addresses);
});

//Step:3
app.get('/energyusage', async (req, res) => {
    console.log('in /energyusage console');
    res.send(energyusageArray);

})

app.get('/currentnodestate', async (req, res) => {
    console.log('in /currentnodestate console');
    res.send(customNodeStateArray);
})

//Step 1: Making call to one of a ubicquia api endpoint
async function fetchEnergyUsage() {
    try {
        const res = await ubicqiaEnergyUsageApi4000.get('/energyusage', {
            params: {
                report_type: "day"
            },
        });
        //console.log(res.data);
        const fetchedData = res.data; 
        //Step:2
        energyusageArray.push(fetchedData);
      //  console.log(energyusageArray);
    }
    catch (err) {
        console.log(err.message);
    }
}

//fetch data from Node:/currentnodestate endpoint
async function fetchCurrentNodeState() {
    console.log("inside fetchCurrentNodeState() ")
    const res = await ubicquiaCurrentNodeState4000.get('/currentnodestate', {
        params: {
            isActive: 1
        }
    });
    // console.log(res.data);
   customNodeStateArray.push(res.data);
    // console.log(customNodeStateArray);

   /* need to provide only these data
      id: {val}
      CState: 0.03,
      C1State: 0.01,
      VState: 118.5,
      V1State: 0.3,
      */
      let formattedArray = customNodeStateArray.map(obj => {
          console.log('inside map()');
          try{
        //     for (var key in obj) {
        //         if(obj.hasOwnProperty(key)) {
        //             console.log( key + "-->" + obj[key]);
        //         }
        //     }

          const jsonArray = JSON.stringify(obj);
          const jsonParsedArray = JSON.parse(jsonArray);
        // //  console.log(parsedData);
        // console.log('id : 2 CState value: ', parsedData.data[2].CState);
        //   if(parsedData.hasOwnProperty('id')){
        //     console.log('yeah');
        // }

            
        // for(var id in jsonParsedArray) {
        //     if(jsonParsedArray.hasOwnProperty(id)) {
        //         console.log('ID = ', + id + jsonParsedArray[id]);
        //     }
        // }
          }
          catch(err)
          {
              console.log(err.message);
          }

      }) 
}

fetchEnergyUsage();
fetchCurrentNodeState();
// Step 1: make a function that make a call/get request from one of the ubicquia api endpoint 

// Step 2:store the fetched data in a array

// Step 3:in the app.post method below set the req.body to the data array and serve it using res.send(array)

app.post('/addresses', async (req, res) => {

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