const axios = require('axios');
require('dotenv').config();

// Serverless function handler for Vercel
module.exports = async (req, res) => {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  // Handle preflight OPTIONS request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Only allow GET method
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const orderId = req.query.orderid;

  if (!orderId) {
    return res.status(400).json({ error: 'Missing orderid parameter' });
  }

  try {
    const config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `https://mtf.gateway.mastercard.com/api/rest/version/llaatteesstt/merchant/TESTMIDtesting00/order/${orderId}`,
      headers: { 
        'Authorization': process.env.PASSWORD
      }
    };

    const response = await axios.request(config);
    console.log(JSON.stringify(response.data));
    return res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Failed to fetch order information' });
  }
};