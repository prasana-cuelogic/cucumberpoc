var wd = require('selenium-webdriver'),
    elements = require('selenium-pageobject').elements;

var HomePage = function(object) {
    /**
     * define elements
     */
    function latest_news() {
        return elements.element("#block-menu-menu-hamburger-menu div.content ul.menu li:nth-of-type(2) a.menu__link");
    }
    function open() {
        return object.visit('http://test1.3blmedia.com/');
    }
};
module.exports = HomePage