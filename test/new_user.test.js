var request = require('request');
var make_requests = require('../make_requests');
var app = require('../app');
var assert = require('assert');

const newUser = {
  url : 'http://localhost:3000/newuser',
  method : 'GET'
}

const addUser = {
  url : 'http://localhost:3000/adduser',
  method : 'POST',
  body : {firstname: 'test', lastname: 'user'},
  json : true
}

const userList = {
  url : 'http://localhost:3000/userlist',
  method : 'GET'
}

describe('New User confirmation', function(){
  it ('returns status 200', function(done){
    assert.ok(1);
    request(newUser, function(err, res){
        console.log(res.statusCode);
        assert.equal(res.statusCode, 200);
        done();
      });
    });

  it ('redirects to a new page after submitting', function(done){
    assert.ok(1);
    request(addUser, function(err,res){
      console.log(res.statusCode);
      assert.equal(res.statusCode, 302);
      // if (res.body.firstname !== 'test') throw new Error("not the right name");
      // assert.equal(res.body, 'test user');
      done();
    });
  })

  it ('returns status 200 after redirecting', function(done){
    assert.ok(1);
    request(userList, function(err, res){
      console.log(res.statusCode);
      assert.equal(res.statusCode, 200);
      done();
    });

  });
});
