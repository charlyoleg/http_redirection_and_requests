// standard_https_requests.js

//const https = require('https');
const { https } = require('follow-redirects');

// for following redirection: it doesn't work :(
const options = {
  //followAllRedirects: true,
  //followOriginalHttpMethod: true,
  rejectUnauthorized: false,
}


https.get('https://ZZZ.LocalHost:8443/aa', options, (resp) => {
  let payload = '';

  // called when a data chunk is received.
  resp.on('data', (chunk) => {
    payload += chunk;
  });

  // called when the complete response is received.
  resp.on('end', () => {
    console.log('payload: ' + payload);
  });

}).on("error", (error) => {
  console.log("Error: " + error.message);
});

