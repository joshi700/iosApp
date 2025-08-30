// const axios = require('axios');
// const crypto = require("crypto");
// require('dotenv').config();

// // Serverless function handler for Vercel
// module.exports = async (req, res) => {
//   // Enable CORS
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
//   res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
//   // Handle preflight OPTIONS request
//   if (req.method === 'OPTIONS') {
//     return res.status(200).end();
//   }

//   // Only allow POST method
//   if (req.method !== 'POST') {
//     return res.status(405).json({ error: 'Method not allowed' });
//   }

//   try {
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
//       data
//     };

//     const response1 = await axios.request(config);
//     console.log(JSON.stringify(response1.data.session.id));
//     res.status(200).send(response1.data.session.id);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Failed to initiate checkout session' });
//   }
// };

const axios = require('axios');
const crypto = require("crypto");
require('dotenv').config();

// Serverless function handler for Vercel
module.exports = async (req, res) => {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  // Handle preflight OPTIONS request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Only allow POST method
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
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
    const apiPassword = process.env.PASSWORD;
    
    const config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://mtf.gateway.mastercard.com/api/rest/version/llaatteesstt/merchant/TESTMIDtesting00/session',
      headers: { 
        'Content-Type': 'application/json', 
        'Authorization': `Basic ${apiPassword}`
      },
      data
    };

    const response1 = await axios.request(config);
    console.log(JSON.stringify(response1.data.session.id));
    res.status(200).send(response1.data.session.id);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to initiate checkout session' });
  }
};
