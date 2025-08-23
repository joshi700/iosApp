// const express = require('express');
// const cors = require('cors');
// const axios = require('axios');
// const crypto = require("crypto");
// require('dotenv').config();

// const app = express();
// app.use(cors());
// app.use(express.json()); // Add this line to parse JSON request bodies
// const port = 3001;

// app.post('/', async (req, res) => {
//     const id = crypto.randomBytes(16).toString("hex");
//     const data = JSON.stringify({
//       "apiOperation": "INITIATE_CHECKOUT",
//       "checkoutMode": "WEBSITE",
//       "interaction": {
//         "operation": "PURCHASE",
//         "merchant": {
//           "name": "JK Enterprises LLC",
//           "url": "https://apitest.free.beeceptor.com"
//         },
//         "returnUrl": "myapp://receipt",
//         "displayControl": {
//           "billingAddress": "READ_ONLY",
//           "customerEmail": "READ_ONLY",
//           "shipping": "READ_ONLY"
//         }
//       },
//       "order": {
//         "currency": "USD",
//         "amount": "250.00",
//         "id": id,
//         "description": "Goods and Services"
//       }
//     });
  
//     const config = {
//       method: 'post',
//       maxBodyLength: Infinity,
//       url: 'https://mtf.gateway.mastercard.com/api/rest/version/llaatteesstt/merchant/TESTMIDtesting00/session',
//       headers: { 
//         'Content-Type': 'application/json', 
//         'Authorization': process.env.PASSWORD  // Add actual credentials/token here if needed
//       },
//        data
//     };
  
//     try {
//       const response1 = await axios.request(config);
//       console.log(JSON.stringify(response1.data.session.id));
//       res.send(response1.data.session.id); // This sends only the session id string
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: 'Failed to initiate checkout session' });
//     }
//   });

//   app.get('/checkorder', async (req, res) => {
//     const orderId = req.query.orderid; // Get orderid from query string
  
//     if (!orderId) {
//       return res.status(400).json({ error: 'Missing orderid parameter' });
//     }
  
//     const config = {
//       method: 'get',
//       maxBodyLength: Infinity,
//       url: `https://mtf.gateway.mastercard.com/api/rest/version/llaatteesstt/merchant/TESTMIDtesting00/order/${orderId}`,
//       headers: { 
//         'Authorization': process.env.PASSWORD // Replace with your actual authorization
//       }
//     };
  
//     try {
//       const response = await axios.request(config);
//       console.log(JSON.stringify(response.data));
//       return res.json(response.data); // Return the JSON response from the API
//     } catch (error) {
//       console.error(error);
//       return res.status(500).json({ error: 'Failed to fetch order information' });
//     }
//   });


// app.post('/', (req, res) => {
//   console.log(req.headers);
//   res.sendStatus(200);
// });

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`);
// });

// const cors = require('cors');
// const axios = require('axios');
// const crypto = require('crypto');

// // Initialize CORS middleware with default settings
// const corsMiddleware = cors({
//   origin: '*', // Adjust this for your frontend URL or limit as needed
//   methods: ['POST', 'OPTIONS'],
// });

// function runCors(req, res) {
//   return new Promise((resolve, reject) => {
//     corsMiddleware(req, res, (result) => {
//       if (result instanceof Error) {
//         return reject(result);
//       }
//       resolve(result);
//     });
//   });
// }

// module.exports = async function handler(req, res) {
//   // Handle pre-flight OPTIONS request for CORS
//   if (req.method === 'OPTIONS') {
//     res.status(200).end();
//     return;
//   }

//   if (req.method !== 'POST') {
//     res.status(405).json({ error: 'Method not allowed' });
//     return;
//   }

//   await runCors(req, res);

//   const id = crypto.randomBytes(16).toString('hex');
//   const data = JSON.stringify({
//     apiOperation: 'INITIATE_CHECKOUT',
//     checkoutMode: 'WEBSITE',
//     interaction: {
//       operation: 'PURCHASE',
//       merchant: {
//         name: 'JK Enterprises LLC',
//         url: 'https://apitest.free.beeceptor.com',
//       },
//       returnUrl: 'myapp://receipt',
//       displayControl: {
//         billingAddress: 'READ_ONLY',
//         customerEmail: 'READ_ONLY',
//         shipping: 'READ_ONLY',
//       },
//     },
//     order: {
//       currency: 'USD',
//       amount: '250.00',
//       id: id,
//       description: 'Goods and Services',
//     },
//   });

//   const config = {
//     method: 'post',
//     maxBodyLength: Infinity,
//     url: 'https://mtf.gateway.mastercard.com/api/rest/version/llaatteesstt/merchant/TESTMIDtesting00/session',
//     headers: {
//       'Content-Type': 'application/json',
//       Authorization: process.env.PASSWORD, // Set your password/token in Vercel environment variables
//     },
//     data,
//   };

//   try {
//     const response = await axios.request(config);
//     // Sending a JSON response with session id
//     res.status(200).json({ sessionId: response.data.session.id });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Failed to initiate checkout session' });
//   }
// };


// const express = require('express');
// const cors = require('cors');
// const axios = require('axios');
// const crypto = require("crypto");
// require('dotenv').config();

// const app = express();
// app.use(cors());
// app.use(express.json());

// // Remove duplicate route - you had two app.post('/')
// app.post('/', async (req, res) => {
//     const id = crypto.randomBytes(16).toString("hex");
//     const data = JSON.stringify({
//       "apiOperation": "INITIATE_CHECKOUT",
//       "checkoutMode": "WEBSITE",
//       "interaction": {
//         "operation": "PURCHASE",
//         "merchant": {
//           "name": "JK Enterprises LLC",
//           "url": "https://apitest.free.beeceptor.com"
//         },
//         "returnUrl": "myapp://receipt",
//         "displayControl": {
//           "billingAddress": "READ_ONLY",
//           "customerEmail": "READ_ONLY",
//           "shipping": "READ_ONLY"
//         }
//       },
//       "order": {
//         "currency": "USD",
//         "amount": "250.00",
//         "id": id,
//         "description": "Goods and Services"
//       }
//     });
  
//     const config = {
//       method: 'post',
//       maxBodyLength: Infinity,
//       url: 'https://mtf.gateway.mastercard.com/api/rest/version/llaatteesstt/merchant/TESTMIDtesting00/session',
//       headers: { 
//         'Content-Type': 'application/json', 
//         'Authorization': process.env.PASSWORD
//       },
//        data
//     };
  
//     try {
//       const response1 = await axios.request(config);
//       console.log(JSON.stringify(response1.data.session.id));
//       res.send(response1.data.session.id);
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: 'Failed to initiate checkout session' });
//     }
// });

// app.get('/checkorder', async (req, res) => {
//     const orderId = req.query.orderid;
  
//     if (!orderId) {
//       return res.status(400).json({ error: 'Missing orderid parameter' });
//     }
  
//     const config = {
//       method: 'get',
//       maxBodyLength: Infinity,
//       url: `https://mtf.gateway.mastercard.com/api/rest/version/llaatteesstt/merchant/TESTMIDtesting00/order/${orderId}`,
//       headers: { 
//         'Authorization': process.env.PASSWORD
//       }
//     };
  
//     try {
//       const response = await axios.request(config);
//       console.log(JSON.stringify(response.data));
//       return res.json(response.data);
//     } catch (error) {
//       console.error(error);
//       return res.status(500).json({ error: 'Failed to fetch order information' });
//     }
// });

// // Export the Express app for Vercel
// module.exports = app;

// const express = require('express');
// const cors = require('cors');
// const axios = require('axios');
// const crypto = require("crypto");
// require('dotenv').config();

// const app = express();
// app.use(cors());
// app.use(express.json());

// // Handle root /api route for POST requests
// app.post('/', async (req, res) => {
//     const id = crypto.randomBytes(16).toString("hex");
//     const data = JSON.stringify({
//       "apiOperation": "INITIATE_CHECKOUT",
//       "checkoutMode": "WEBSITE",
//       "interaction": {
//         "operation": "PURCHASE",
//         "merchant": {
//           "name": "JK Enterprises LLC",
//           "url": "https://apitest.free.beeceptor.com"
//         },
//         "returnUrl": "myapp://receipt",
//         "displayControl": {
//           "billingAddress": "READ_ONLY",
//           "customerEmail": "READ_ONLY",
//           "shipping": "READ_ONLY"
//         }
//       },
//       "order": {
//         "currency": "USD",
//         "amount": "250.00",
//         "id": id,
//         "description": "Goods and Services"
//       }
//     });
  
//     const config = {
//       method: 'post',
//       maxBodyLength: Infinity,
//       url: 'https://mtf.gateway.mastercard.com/api/rest/version/llaatteesstt/merchant/TESTMIDtesting00/session',
//       headers: { 
//         'Content-Type': 'application/json', 
//         'Authorization': process.env.PASSWORD
//       },
//        data
//     };
  
//     try {
//       const response1 = await axios.request(config);
//       console.log(JSON.stringify(response1.data.session.id));
//       res.send(response1.data.session.id);
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: 'Failed to initiate checkout session' });
//     }
// });

// // Handle /checkorder route  
// app.get('/checkorder', async (req, res) => {
//     const orderId = req.query.orderid;
  
//     if (!orderId) {
//       return res.status(400).json({ error: 'Missing orderid parameter' });
//     }
  
//     const config = {
//       method: 'get',
//       maxBodyLength: Infinity,
//       url: `https://mtf.gateway.mastercard.com/api/rest/version/llaatteesstt/merchant/TESTMIDtesting00/order/${orderId}`,
//       headers: { 
//         'Authorization': process.env.PASSWORD
//       }
//     };
  
//     try {
//       const response = await axios.request(config);
//       console.log(JSON.stringify(response.data));
//       return res.json(response.data);
//     } catch (error) {
//       console.error(error);
//       return res.status(500).json({ error: 'Failed to fetch order information' });
//     }
// });

// // Export the Express app for Vercel
// module.exports = app;


const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Simple health check endpoint
app.get('/', (req, res) => {
  res.json({ 
    message: 'iOS App API is running',
    endpoints: {
      'POST /api/checkout': 'Initialize checkout session',
      'GET /api/checkorder': 'Check order status'
    }
  });
});

// Export the Express app for Vercel
module.exports = app;