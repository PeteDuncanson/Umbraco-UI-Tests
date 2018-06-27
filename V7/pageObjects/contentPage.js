const LoginPage = require("./loginPage");
const TreePage = require("./treePage");

var ContentPage = function() {
  var loginPage = new LoginPage();
  var tree = new TreePage();

  this.get = () => {
    loginPage.loginIfNeeded();
    browser.get("#/content");
  };

  this.CreateContent = () => {};
};
