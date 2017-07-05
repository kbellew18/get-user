var express = require('express');
var router = express.Router();
var request = require('request');

var make_requests = require('../make_requests');
var create_user = require('../create_user');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET Userlist page. */
router.get('/userlist', function(req, res) {
    var db = req.db;
    var collection = db.get('usercollection');
    collection.find({},{},function(e,docs){
        res.render('userlist', {
            "userlist" : docs
        });
    });
});

/* GET New User page. */
router.get('/newuser', function(req, res) {
    res.render('newuser', { title: 'Add New User' });
});

let slackURL = 'https://hooks.slack.com/services/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';

/* POST to Add User Service */
router.post('/adduser', function(req, res) {
  create_user.create(req, res);
  make_requests.send(slackURL, req.body.firstname, req.body.lastname);
});

module.exports = router;
