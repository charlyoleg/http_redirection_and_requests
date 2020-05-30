// node_fetch_requests.js

const https = require('https');
const fetch = require('node-fetch');

const agent = new https.Agent({
  rejectUnauthorized: false
});


fetch('https://ZZZ.LocalHost:8443/aa', { agent: agent})
  .then(res => res.text()) // expecting a json response
  .then(text => {
    console.log('payload: ' + text);
  })
  .catch(err => {
    console.log(err);
  });

