var express = require('express');
var router = express.Router();

/* GET user page. */
router.get('/', function(req, res, next) {

    res.render('user', { title: 'User Login', message: "" });

}).get('/user',function (req, res, next) {
    res.render('user_list', { title: 'User List'});
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