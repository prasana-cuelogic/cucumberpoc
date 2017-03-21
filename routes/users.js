var express = require('express');
var router = express.Router();

/* GET user page. */
router.get('/', function(req, res, next) {

    res.render('user', { title: 'User Login', message: "" });

}).get('/user',function (req, res, next) {
    res.render('user_list', { title: 'User List'});
}).get('/report', function (req, res, next){
    var reporter = require('cucumber-html-reporter');
    var options = {
        theme: 'bootstrap',
        jsonFile: 'features/report/cucumber_report.json',
        output: 'features/report/cucumber_report.html',
        reportSuiteAsScenarios: true,
        launchReport: false,
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

});

router.post('/', function(req, res, next) {

    var usernm = req.body.uname;
    var password = req.body.password;
    //console.log( usernm + " " +password);
    if(usernm === "prasana" && password === "123456"){
        res.redirect('http://localhost:3000/users/user')
    } else {
        res.render('user', { title: 'User Login', message:"Enter correct user name and password"});
    }
});

module.exports = router;