// request_requests.js

const request = require('request');

// to avoid 'Error: self signed certificate'
//process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const options = {
  rejectUnauthorized: false
}

request.get('https://ZZZ.LocalHost:8443/aa', options, (err, res, body) => {
  if (err) {
    return console.log(err);
  }

  console.log('payload: ' + body);

});

