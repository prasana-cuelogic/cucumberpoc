var exec = require('child_process').exec;

function execute(command, callback){
    exec(command, function(error, stdout, stderr){ callback(stdout); });
};

module.exports.cucumberOutPut = function(callback){
    execute("./node_modules/.bin/cucumber.js -f json:features/report/cucumber_report.json", callback);
};
