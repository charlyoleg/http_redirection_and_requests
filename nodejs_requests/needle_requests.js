// needle_requests.js

const needle = require('needle');

needle.get('https://ZZZ.LocalHost:8443/aa', {rejectUnauthorized: false, follow_max: 5}, (err, res) => {
  if (err) {
    return console.log(err);
  }

  let payload = res.body;
  console.log('payload: ' + payload);
});

