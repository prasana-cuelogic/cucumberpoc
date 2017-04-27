var express = require('express');
var router = express.Router();
var output = require('./email');
var nodemailer = require('./mailer');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
}).get('/cucumber', function () {
    output.cucumberOutPut(function (data) {

        var reporter = require('cucumber-html-reporter');
        var options = {
            theme: 'bootstrap',
            jsonFile: 'features/report/cucumber_report.json',
            output: 'features/report/cucumber_report.html',
            reportSuiteAsScenarios: true,
            launchReport: true,
            metadata: {
                "App Version":"0.3.2",
                "Test Environment": "dev",
                "Browser": "Chrome  54.0.2840.98",
                "Platform": "Windows 10",
                "Parallel": "Scenarios",
                "Executed": "Remote"
            }
        };
        reporter.generate(options);
        fs.readFile(__dirname + '/views/user.html', 'utf8', function(err, html){

        });

        var service = "Gmail";
        var auth = {email:'cucumberpoc@gmail.com', password: ''};
        var attrs = {
            from: 'Prasana A',
            to: 'santosh.jagtap@cuelogic.co.in, prasana.alawekar@cuelogic.co.in',
            subject: 'Cucumber Output ✔',
            text: 'Please check execution report',
            html: ''
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
    });
});

module.exports = router;
