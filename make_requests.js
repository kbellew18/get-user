var request = require('request');

// let url = 'https://hooks.slack.com/services/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';
// var userFirstName = 'Testing';
// var userLastName = 'Function';

exports.send = function (url, userFirstName, userLastName){
	request.post(url,
		{ json: {text: "Welcome to Slack " + userFirstName + " " + userLastName}},
		function (err, res, body) {
			if (!err){
				console.log('body', body);
				console.log(url);
			}
		}
	);
};

//console.log(send(url, userFirstName, userLastName));
