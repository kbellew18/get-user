
request = require('request')

let slackURL = 'https://hooks.slack.com/services/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';

function send(){
	request({
	  json: true,
	  method: 'POST',
	  body: {
	    text: "This is posted to #random."
	  },
	  url: slackURL
	}, function (err, res, body) {
	  console.log('body', body);
	})
}

send();