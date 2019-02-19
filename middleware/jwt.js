var jwt    = require('jsonwebtoken');
//const config = require('../config/components/config.json');

module.exports = validateToken;

function validateToken(req,res,next){

	// check header or url parameters or post parameters for token
	var token = req.body.token || req.param('token') || req.headers['x-access-token'];
	console.log('Token ',token);
	// decode token
	if (token) {
		jwt.verify(token, "secret", function(err, decoded) {			
			if (err) {
				return res.json({ success: false, message: 'Failed to authenticate token.' });		
			} else {
				// if everything is good, save to request for use in other routes
				req.decoded = decoded;	
				next();
			}
		});

	} else {

		// if there is no token
		// return an error
		return res.status(403).send({ 
			success: false, 
			message: 'No token provided.'
		});
		
	}
}
