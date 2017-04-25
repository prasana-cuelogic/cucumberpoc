var tmp = require('tmp');
var {defineSupportCode} = require('cucumber');

defineSupportCode(function({After, Before}) {
    // Synchronous
    Before(function () {
        this.count = 0;
    });
    
    // Asynchronous Callback
    Before(function (scenarioResult, callback) {
        var world = this;
        tmp.dir({unsafeCleanup: true}, function(error, dir) {
            if (error) {
                callback(error);
            } else {
                world.tmpDir = dir;
                callback();
            }
        });
    });
    
    // Asynchronous Promise
    After(function () {
        // Assuming this.driver is a selenium webdriver
        return this.driver.quit();
    });
});