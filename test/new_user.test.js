var request = require('supertest');
var make_requests = require('../make_requests');
// var expect = require('chai').expect;
var app = require('../app');

describe('New User confirmation', function(){
  it ('allows a user to enter their first and last name', function(done){
    request(app).get('/newuser')
      .expect(200)
      .expect(/Add New User/, done)
      });

  it ('it redirects to a new page', function(done){
    request(app).post('/adduser')
      .send({firstname: 'first', lastname: 'last'})
      .expect(302)
      .expect('Location', /userlist/, function(){
        request(app).get('/userlist')
          .expect(200)
          .expect(/User List/, done)
          .expect(function(res){
            res.body.firstname = 'first';
            res.body.lastname = 'last';
          })
        })
      });
});
