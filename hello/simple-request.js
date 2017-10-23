var request = require('request');

var url = 'http://odata-devci.smartdrivesystems.com/CoreOLTP_CommonEntities/Camera(122517)';

request(url, function (error, response, body) {
	if (error) {
     	console.log(error);
     	return;
     }
    if (response.statusCode >= 400) {
     	console.log('error ' + response.statusCode);
     	return;
     }
     console.log(body)
 
})

