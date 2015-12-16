var express = require('express');
var app = express();

var tracking = require('./TrackApi.js');

//USPS: tracking.trackUSPS(username, trackingNumber, callback);

//UPS: tracking.trackUPS(usernane, password, accessKey, trackingNumber, callback);

//Fedex: tracking.trackFedex(username, password, accountNumber, meterNumber, trackingNumber, callback);

app.set('port', (process.env.PORT || 5000));
app.get('/', function (req, res) 
{

				res.send("Tracking Api");

});

app.listen(app.get('port'), function () {
 console.log('listening on port');
});
