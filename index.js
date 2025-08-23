const express = require('express');
const cors = require('cors');
const axios = require('axios');
const crypto = require("crypto");
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json()); // Add this line to parse JSON request bodies
const port = 3001;

app.post('/', async (req, res) => {
    const id = crypto.randomBytes(16).toString("hex");
    const data = JSON.stringify({
      "apiOperation": "INITIATE_CHECKOUT",
      "checkoutMode": "WEBSITE",
      "interaction": {
        "operation": "PURCHASE",
        "merchant": {
          "name": "JK Enterprises LLC",
          "url": "https://apitest.free.beeceptor.com"
        },
        "returnUrl": "myapp://receipt",
        "displayControl": {
          "billingAddress": "READ_ONLY",
          "customerEmail": "READ_ONLY",
          "shipping": "READ_ONLY"
        }
      },
      "order": {
        "currency": "USD",
        "amount": "250.00",
        "id": id,
        "description": "Goods and Services"
      }
    });
  
    const config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://mtf.gateway.mastercard.com/api/rest/version/llaatteesstt/merchant/TESTMIDtesting00/session',
      headers: { 
        'Content-Type': 'application/json', 
        'Authorization': process.env.PASSWORD  // Add actual credentials/token here if needed
      },
       data
    };
  
    try {
      const response1 = await axios.request(config);
      console.log(JSON.stringify(response1.data.session.id));
      res.send(response1.data.session.id); // This sends only the session id string
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to initiate checkout session' });
    }
  });

  app.get('/checkorder', async (req, res) => {
    const orderId = req.query.orderid; // Get orderid from query string
  
    if (!orderId) {
      return res.status(400).json({ error: 'Missing orderid parameter' });
    }
  
    const config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `https://mtf.gateway.mastercard.com/api/rest/version/llaatteesstt/merchant/TESTMIDtesting00/order/${orderId}`,
      headers: { 
        'Authorization': process.env.PASSWORD // Replace with your actual authorization
      }
    };
  
    try {
      const response = await axios.request(config);
      console.log(JSON.stringify(response.data));
      return res.json(response.data); // Return the JSON response from the API
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Failed to fetch order information' });
    }
  });


app.post('/', (req, res) => {
  console.log(req.headers);
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});