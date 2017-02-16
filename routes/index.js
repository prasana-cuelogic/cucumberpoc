var express = require('express');
var router = express.Router();
var output = require('./email');
var nodemailer = require('./mailer');

/* GET home page. */
router.get('/', function(req, res, next) {
    output.cucumberOutPut(function (data) {
        var service = "Gmail";
        var auth = {email:'prasana.alawekar@cuelogic.co.in', password: ''};
        var attrs = {
            from: 'Prasana A',
            to: 'santosh.jagtap@cuelogic.co.in',
            subject: 'Cucumber Output ✔',
            text: 'Please check execution report',
            html: '<b>Hello world ?</b>'+data
        }
        var emailObj = nodemailer.getTransporter(service, auth);
        var message = nodemailer.setMailOptions(attrs);
        // send mail with defined transport object
        emailObj.sendMail(message, function(error, info) {
            if (error) {
                return console.log(error);
            }
            console.log('Message %s sent: %s', info.messageId, info.response);
        });
        console.log(data);
    });
    res.render('index', { title: 'Express' });
});

module.exports = router;
