// got_requests.js

const got = require('got');

const one_get_request = async () => {
	try {
		const resp = await got('https://ZZZ.LocalHost:8443/aa', {rejectUnauthorized: false});
		console.log('statusCode:', resp.statusCode);
    console.log('payload: ' + resp.body);
	} catch (err) {
		console.log('Error:', err);
	}
}

one_get_request();

