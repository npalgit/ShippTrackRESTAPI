var express = require('express');
var app = express();

var tracking = require('./TrackApi.js');

//USPS: tracking.trackUSPS(username, trackingNumber, callback);

//UPS: tracking.trackUPS(usernane, password, accessKey, trackingNumber, callback);

//Fedex: tracking.trackFedex(username, password, accountNumber, meterNumber, trackingNumber, callback);


app.get('/usps/track', function (req, res) 
{

	res.send("Please enter a tracking numebr");
});

app.listen(3000, function () {
 console.log('listening on port');
});
