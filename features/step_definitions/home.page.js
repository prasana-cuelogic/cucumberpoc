var wd = require('selenium-webdriver'), By = wd.By;
var driver = require('selenium-webdriver/lib/webdriver');

var HomePage =  {
    title: "Home Page",

    url: 'http://test1.3blmedia.com',

    elements: {
        latest_news: By.linkText('Latest News')
    },
    LatestNews: function (drivers) {
        return drivers.findElement(this.elements.latest_news).click();
    }
};
module.exports = HomePage;