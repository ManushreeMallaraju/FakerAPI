const express = require('express');
const bodyParser = require('body-parser');
const {randomBytes} = require('crypto');
const cors = require('cors');
const axios = require('axios');


const app = express();
app.use(bodyParser.json());
app.use(cors());

//const addressByID = {};
const addresses = {};

app.get('/addresses', (req, res) => {
    res.send(addresses);
});


app.post('/addresses', async(req, res) => {
    const id = randomBytes(4).toString('hex');
    const location = 'Canada';

    //const addresses = address[req.params.id] || [] //entire array of addresses
    
    // addresses.push({id: addressId, location});

    // addressByID[req.params.id] = addresses
    addresses[id] = {
        id,
        location
    }
    
    await axios.post('http://localhost:4001/addresses', {
       data: {
           id,
           location
       }
    });

    res.status(201).send(addresses);

})
app.listen(4000, () => {
   console.log('Listening on 4000'); 
});

//post something, this will be sent to vue in created hook
//addition to address: array of json objects