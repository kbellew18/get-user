var request = require('request');
var assert = require('assert');

var mongo = require('mongodb');
var monk = require('monk');
var db = monk('127.0.0.1:27017/getUser');

var app = require('../app');

var collection = db.get('usercollection');

describe('Database Test', function(){
  it.skip('adds the correct item into the db', function(done){
    collection.insert({
      'firstname' : 'database',
      'lastname' : 'test'
    })

    assert.equal('database', function(collection){
      collection.find({})
    });

  });

  it.skip('removes an item from the db', function(done){


  });

});
