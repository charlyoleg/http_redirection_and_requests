// superagent_requests.js

const superagent = require('superagent');

// to avoid 'Error: self signed certificate'
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"; // Unfortunatelly no option for ignoring self signed certificate :(

superagent.get('https://ZZZ.LocalHost:8443/aa')
.end((err, res) => {
  if (err) {
      return console.log(err);
  }

  console.log('payload: ' + res.text);

});

