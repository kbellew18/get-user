var request = require('supertest');
var make_requests = require('../make_requests');
// var expect = require('chai').expect;
var app = require('../app');
var create_user = require('../create_user');
var express = require('express');

var router = express.Router();

var slackURL = 'https://hooks.slack.com/services/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';

describe('New User API', function(){
	describe('Slack request confirmation',function(){
		it("sends a request with a new user's first and last name to slack", function(done){
			request(app).post('/adduser')
				make_requests.send(slackURL, 'first', 'test');

			// request(make_requests)
			// 	.post(slackURL, 'slack', 'test')
				// .send({firstname: 'slack', lastname: 'test'})
				// .expect(302)
			console.log('here');
			done();
			console.log('here2');

			});
		});
	});
