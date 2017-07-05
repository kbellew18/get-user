var request = require('request');
var make_requests = require('../make_requests');
var expect = require('chai').expect;
var app = require('../app');

var slackURL = 'https://hooks.slack.com/services/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';

describe('New User API', function(){
	describe('Slack request confirmation',function(){
		it("sends a request with a new user's first and last name", function(done){
			//make_requests.send(slackURL, 'test', 'name');
			//request.post(slackURL)

			done();

			});
		});
	});
