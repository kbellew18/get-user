var express = require('express');
var router = express.Router();
var request = require('request');

exports.create = function (req, res){

    // console.log('create_user function');

    var db = req.db;

    var userFirstName = req.body.firstname;
    var userLastName = req.body.lastname;

    var collection = db.get('usercollection');

    collection.insert({
      'firstname' : userFirstName,
      'lastname' : userLastName
    }, function(err, doc) {
      if (err){
        res.send('There was a problem adding the information to the database.');
      }
      else {
        res.redirect('userlist');
      }
    });
    // console.log(userFirstName);
    // console.log(userLastName);
};
