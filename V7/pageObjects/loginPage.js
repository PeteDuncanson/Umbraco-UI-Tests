var LoginPage = function() {
  // This stops Protractor trying to work out when AngularJS is ready, caused by the back office's use of $timeout sadly
  // See: https://github.com/angular/protractor/issues/169
  browser.ignoreSynchronization = true;

  // Define our elements in one place
  var usernameElem = element(by.model("login"));
  var passwordElem = element(by.model("password"));
  var submitButtonElem = element(by.css("button")); // TODO: we need an ID adding to this template to make this easier to get
  var errorMessageElem = element(by.css("div.text-error.ng-binding"));
  var forgottenPasswordLinkElem = element(
    by.css("a[ng-click*=showRequestPasswordReset]")
  );
  var forgottenPasswordEmailElem = element(by.name("email"));
  this.loginPageTitle = "^Umbraco.*";
  this.loggedInPageTitle = "^Content.*";
  this.loginPageUrl = browser.baseUrl + "#/";
  this.loggedInPageUrl = browser.baseUrl + "#/content";

  // Define our common actions in one place
  this.get = () => browser.get(browser.baseUrl + "#/login");

  this.setUsername = (username = browser.params.login.username) =>
    usernameElem.sendKeys(username);

  this.setPassword = (password = browser.params.login.password) =>
    passwordElem.sendKeys(password);

  this.submitForm = () => submitButtonElem.click();

  this.loginIfNeeded = () => {
    this.get();
    // If we are already logged in then we will get auto directed to the content section
    // this saves us a little time on our tests if we are already logged in by skipping the
    // log step if not needed
    if (!browser.titleContains("Content")) {
      this.login();
    }
  };

  this.login = (username, password) => {
    this.get(); // We have to load a real url up before we can logout (no cookies available on the default start url of data:)
    this.logout();
    this.get();
    this.setUsername(username);
    this.setPassword(password);
    this.submitForm();
    waitUntilLoggedIn();
  };

  this.logout = () => {
    // Delete the cookie
    browser.executeScript(
      "document.cookie = 'UMB_UCONTEXT=;expires=Thu, 01 Jan 1970 00:00:01 GMT;'"
    );
    this.get();
    // waitUntilLoggedOut();
  };

  // We have to wait until we are actually logged into the back office, handy helper to make this simple
  // See: https://www.protractortest.org/#/api?view=ProtractorExpectedConditions.prototype.titleContains
  var waitUntilLoggedIn = function() {
    return browser.wait(
      protractor.ExpectedConditions.titleContains("Content"),
      5000
    );
  };

  var waitUntilLoggedOut = function() {
    return browser.wait(
      protractor.ExpectedConditions.titleContains("Umbraco"),
      10000
    );
  };

  // Getters for the various elements
  this.getUsername = () => usernameElem;
  this.getPassword = () => passwordElem;
  this.getErrorMessage = () => errorMessageElem;
  this.getForgottenPasswordLink = () => forgottenPasswordLinkElem;
  this.getForgottenPasswordEmail = () => forgottenPasswordEmailElem;
  this.getSubmitButton = () => submitButtonElem;
};

module.exports = LoginPage;
