var LoginPage = require("../../pageObjects/loginPage");

describe("Can we login?", () => {
  it("should have some config details set for username/password or we can't login", () => {
    LoginPage.get();
    expect(browser.baseUrl).toEqual("https://offroadcode.com/umbraco/");
    expect(browser.params.login).toBeTruthy();
    expect(browser.params.login.username).toBeTruthy();
    expect(browser.params.login.password).toBeTruthy();
  });

  it("should respond with a login page", () => {
    LoginPage.get();

    // Can we hit Umbraco's login page?
    expect(browser.getTitle()).toMatch("^Umbraco.*");
  });

  it("should have the fields needed to login", () => {
    LoginPage.get();
    expect(LoginPage.getUsername().isPresent()).toBeTruthy();
    expect(LoginPage.getPassword().isPresent()).toBeTruthy();
    expect(LoginPage.getSubmitButton().isPresent()).toBeTruthy();
  });

  it("should be able to log me in and take to me the content section", () => {
    LoginPage.login();

    // Check we logged in
    expect(browser.getTitle()).toMatch("^Content.*");
  });
});
