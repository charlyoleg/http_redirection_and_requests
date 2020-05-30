// axios_requests.js

const https = require('https');
const axios = require('axios');

const agent = new https.Agent({
  rejectUnauthorized: false
});

const one_get_request = async () => {
  try {
    const res = await axios.get('https://ZZZ.LocalHost:8443/aa', { httpsAgent: agent});
    console.log('payload: ' + res.data);
  } catch (err) {
    console.error(err);
  }
};


one_get_request();

