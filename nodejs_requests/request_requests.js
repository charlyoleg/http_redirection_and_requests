// request_requests.js

const request = require('request');

const options = {
  rejectUnauthorized: false
}

request.get('https://ZZZ.LocalHost:8443/aa', options, (err, res, body) => {
  if (err) {
    return console.log(err);
  }

  console.log('payload: ' + body);

});

