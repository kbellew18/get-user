var express = require('express');
var router = express.Router();
var request = require('request');

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

    // Set our internal DB variable
    var db = req.db;

    // Get our form values. These rely on the "name" attributes
    var userFirstName = req.body.firstname;
    var userLastName = req.body.lastname;

    // Set our collection
    var collection = db.get('usercollection');

    // Submit to the DB
    collection.insert({
        "firstname" : userFirstName,
        "lastname" : userLastName
    }, 

    function (err, doc) {
        if (err) {
            // If it failed, return error
            res.send("There was a problem adding the information to the database.");
        }
        else {
            // And forward to success page
            res.redirect("userlist");
        }
    });

    request.post(slackURL, 
    	{ json: {text: "Welcome to Slack " + userFirstName + " " + userLastName}}, 
    	function (err, res, body) {
    		if (!err){
    			console.log('body', body);
    		}
    	}
	);

    // request.post(slackURL, 
    // 	{ json: { key: 'value' } },
    // 	function (err, res, body) {
    // 		if (!err){
    // 			console.log('body', body);
    // 		}
    // 	}
    // );

 //    request({
 //  		json: true,
 //  		method: 'POST',
 //  		body: {
 //    		text: "Welcome to Slack " + userFirstName + " " + userLastName
 //  		},
 //  		url: slackURL
	// }, function (err, res, body) {
 //  		console.log('body', body);
	// })

});



module.exports = router;
