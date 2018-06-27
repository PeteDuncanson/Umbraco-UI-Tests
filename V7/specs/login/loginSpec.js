var LoginPage = require("../../pageObjects/loginPage");

/* 
  
  This is the login tests. This is often referred to as an example of how to do "stuff"
  Its looking quite neat in here at the minute, please don't let that intimidate you. It 
  took me a full day to get it looking this sensible with lots of refactoring. The hardest 
  part is to start so please have a go at writing a test, we can always polish it later ;)

  */

describe("Login functionality: ", () => {
  var loginPage = new LoginPage();
  /*
  beforeEach = () => {
    loginPage.logout();
  };

  it("should have some config details set for username/password or we can't login", () => {
    loginPage.get();
    expect(browser.params.login).toBeTruthy();
    expect(browser.params.login.username).toBeTruthy();
    expect(browser.params.login.password).toBeTruthy();
  });

  it("should respond with a login page", () => {
    loginPage.get();

    // Can we hit Umbraco's login page?
    expect(browser.getTitle()).toMatch(loginPage.loginPageTitle);
  });

  it("should have the fields needed to login", () => {
    loginPage.get();
    expect(loginPage.getUsername().isPresent()).toBeTruthy();
    expect(loginPage.getPassword().isPresent()).toBeTruthy();
    expect(loginPage.getSubmitButton().isPresent()).toBeTruthy();
  });

  it("should be able to log me in and take to me the content section", () => {
    loginPage.login();

    // Check we logged in
    expect(browser.getTitle()).toMatch(loginPage.loggedInPageTitle);
  });

  it("shouldn't allow me to enter blank credentials", () => {
    loginPage.get();
    expect(loginPage.getErrorMessage().isDisplayed()).toBeFalsy();
    loginPage.login("", "");
    expect(loginPage.getErrorMessage().isDisplayed()).toBeTruthy();
  });

  it("shouldn't let me login with a wrong username/password", () => {
    loginPage.get();
    // No error message visible initially
    expect(loginPage.getErrorMessage().isDisplayed()).toBeFalsy();

    loginPage.login("nonExistantUser", "notAPassword");
    // Error now visible
    expect(loginPage.getErrorMessage().isDisplayed()).toBeTruthy();
  });

  it("should show the forgotten password form when requested", () => {
    loginPage.get();
    expect(loginPage.getForgottenPasswordEmail().isDisplayed()).toBeFalsy();
    loginPage.getForgottenPasswordLink().click();
    expect(loginPage.getForgottenPasswordEmail().isDisplayed()).toBeTruthy();
  });
*/
  it("should redirect me to the Content section if I'm already logged in", () => {
    loginPage.get();
    loginPage.logout();

    browser.getCurrentUrl().then(function(url) {
      expect(url).toMatch(loginPage.loginPageUrl);
    });

    loginPage.login();
    browser.getCurrentUrl().then(function(url) {
      expect(url).toMatch(loginPage.loggedInPageUrl);
    });

    loginPage.get();
    browser.getCurrentUrl().then(function(url) {
      //    expect(url).toMatch(loginPage.loggedInPageUrl);
    });

    loginPage.logout();
    browser.getCurrentUrl().then(function(url) {
      expect(url).toMatch(loginPage.loginPageUrl);
    });
  });
});
