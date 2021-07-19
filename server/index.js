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
const formattedNodeStateArray = [];

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
    res.send(formattedNodeStateArray);
})

//Step 1: Making call to one of a ubicquia api endpoint
async function fetchEnergyUsage() {
    try {
        const res = await ubicqiaEnergyUsageApi4000.get('/energyusage', {
            params: {
                report_type: "day"
            },
        });
        const fetchedData = res.data.data.total;
        const jsonObj = {total: fetchedData};
        // console.log(jsonObj);
        energyusageArray.push(jsonObj);         
    }
    catch (err) {
        console.log(err.message);
    }
}

//fetch data from Node:/currentnodestate endpoint
async function fetchCurrentNodeState() {
    // console.log("inside fetchCurrentNodeState() ")
    const res = await ubicquiaCurrentNodeState4000.get('/currentnodestate', {
        params: {
            isActive: 1
        }
    });
   // const data = res.data.data;
    customNodeStateArray.push(res.data.data);
    // console.log(customNodeStateArray);

   /* need to provide only these data
      id: {val}
      CState: 0.03,
      C1State: 0.01,
      VState: 118.5,
      V1State: 0.3,
      */
      
    //   for (var i = 0; i < customNodeStateArray.length; i++) {
    //     if(customNodeStateArray[i].hasOwnProperty('CState')){
    //         console.log('The CState value : ', customNodeStateArray[i].CState);
    //     }
    //     //Do something
    // }

      customNodeStateArray.map(obj => {
          console.log('inside map()');
         // console.log('object id: ',obj[1]);
          try{
            for (var i=0;i<customNodeStateArray[0].length;i++){
               // console.log('object id: ',obj[i].CState);
               if(obj[i].hasOwnProperty('id' && 'CState' && 'C1State' && 'VState' && 'V1State'))
               {
                // console.log('object id: ',obj[i].id);
                const jsonObj = {id: obj[i].id, CState: obj[i].CState, C1State: obj[i].C1State, VState: obj[i].VState, V1State: obj[i].V1State};
                // console.log(jsonObj);
                formattedNodeStateArray.push(jsonObj);
               }
            }
          }
          catch(err) {
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