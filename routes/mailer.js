'use strict';
var smtpTransport = require('nodemailer-smtp-transport');
const nodemailer = require('nodemailer');
var mailer = {};
mailer.getTransporter = function (service, auth) {
    var transporter = nodemailer.createTransport(smtpTransport({
        service: service,
        auth: {
            user: auth.email,
            pass: auth.password
        }
    }));
    return transporter;
};
// create reusable transporter object using the default SMTP transport

mailer.setMailOptions = function (attrs) {
    var mailOptions = {
        from: attrs.from,//'"Prasana A👻"<prasana.alawekar@cuelogic.co.in>', // sender address
        to: attrs.to, //'santosh.jagtap@cuelogic.co.in', // list of receivers
        subject: attrs.subject, //'Cucumber Output ✔', // Subject line
        text: attrs.text, //'Please check execution report'+, // plain text body
        html: attrs.html//'<b>Hello world ?</b>' // html body
    };
    return mailOptions;
}
module.exports = mailer;
