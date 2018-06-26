var LoginPage = function() {
  // This stops Protractor trying to work out when AngularJS is ready, caused by the back office's use of $timeout sadly
  // See: https://github.com/angular/protractor/issues/169
  browser.ignoreSynchronization = true;

  // Define our elements in one place
  var usernameElem = element(by.model("login"));
  var passwordElem = element(by.model("password"));
  var submitButtonElem = element(by.css("button")); // TODO: we need an ID adding to this template to make this easier to get

  // Define our common actions in one place
  this.get = () => browser.get(browser.baseUrl + "#/login");

  this.setUsername = (username = browser.params.login.username) =>
    usernameElem.sendKeys(username);

  this.setPassword = (password = browser.params.login.password) =>
    passwordElem.sendKeys(password);

  this.submitForm = () => submitButtonElem.click();

  this.login = (username, password) => {
    this.get();
    this.setUsername(username);
    this.setPassword(password);
    this.submitForm();
    waitUntilLoggedIn();
  };

  // We have to wait until we are actually logged into the back office, handy helper to make this simple
  var waitUntilLoggedIn = function() {
    return browser.wait(
      protractor.ExpectedConditions.titleContains("Content"),
      5000
    );
  };

  // Getters for the various elements
  this.getUsername = () => usernameElem;
  this.getPassword = () => passwordElem;
  this.getSubmitButton = () => submitButtonElem;
};

module.exports = new LoginPage(); // Important we send back a concrete implementation here, not just the function!
