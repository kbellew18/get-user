var request = require('request');
var assert = require('assert');

var slackURL = 'https://hooks.slack.com/services/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';

describe('New User API', function(){
	describe('Slack request confirmation',function(){
		it ('Slack responds in an expected way', function(done){
			assert.ok(1);
			request({
				url : slackURL,
				method : 'POST',
				body : {text: "Welcome to Slack "},
				json : true

			}, function(err, res){
				console.log(res.body);
				assert.equal(res.body, 'ok');
				done();
			})
		})

		});
	});

	//write server side functions and tests
	//rewrite the supertest stuff into assert/mocha
