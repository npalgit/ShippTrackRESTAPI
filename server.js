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
app.get('/ups/track/:tracking_number', function (req, res) 
{
				tracking.trackUPS
				( 
				"eshipglobal", 
				"e$h1pStudXm", 
				"FCCDA6BAB35B7FB2",
				req.params.tracking_number, function (err, data)
				{
					if (err) {
						console.error(err);
						res.send(err);
					}

					if (data) {
						console.log(req.params.tracking_number);
						 res.send(data);
					} 

				});
  
});
app.get('/ups/track', function (req, res) 
{

	res.send("Please enter a tracking numebr");
});
app.get('/fedex/track/:tracking_number', function (req, res) 
{
				tracking.trackFedex
				( 
				"9SX2fuvq5EuwSujI", 
				"1limvzjV3X1OpS584XjnAknPP", 
				"212081140",
				"5291363",
				req.params.tracking_number, function (err, data)
				{
					if (err) {
						console.error(err);
						res.send(err);
					}

					if (data) {
						console.log(req.params.tracking_number);
						 res.send(data);
					} 

				});
  
});
app.get('/fedex/track', function (req, res) 
{

	res.send("Please enter a tracking numebr");
});

app.get('/usps/track/:tracking_number', function (req, res) 
{
				tracking.trackUSPS
				( 
				"241ESHIP3455", 
				req.params.tracking_number, function (err, data)
				{
					if (err) {
						console.error(err);
						res.send(err);
					}

					if (data) {
						console.log(req.params.tracking_number);
						 res.send(data);
					} 

				});
  
});
app.get('/usps/track', function (req, res) 
{

	res.send("Please enter a tracking numebr");
});
app.listen(app.get('port'), function () {
 console.log('listening on port');
});
