// standard_https_requests.js

//const https = require('https');
const { https } = require('follow-redirects');

// to avoid 'Error: self signed certificate'
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

// for following redirection: it doesn't work :(
//const options = {
//  followAllRedirects: true,
//  followOriginalHttpMethod: true
//}


//https.get('https://ZZZ.LocalHost:8443/aa', options, (resp) => {
https.get('https://ZZZ.LocalHost:8443/aa', (resp) => {
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

