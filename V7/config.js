// The config file for the Protractor test frame work
// See http://www.protractortest.org/#/tutorial#step-0-write-a-test
// Or for a full config you can scare yourself here https://github.com/angular/protractor/blob/master/lib/config.ts

exports.config = {
  /* 
        Custom parameters if we need them
        https://moduscreate.com/blog/protractor_parameters_adding_flexibility_automation_tests/
    */
  baseUrl: "https://offroadcode.com/umbraco/",
  params: {
    login: {
      username: "[Your umbraco username]",
      password: "[You password here]"
    }
  },

  // Where can we find tests?
  suites: {
    login: "./specs/login/**/*Spec.js",
    content: "./specs/content/**/*Spec.js",
    media: "./specs/media/**/*Spec.js",
    settings: "./specs/settings/**/*Spec.js",
    developer: "./specs/developers/**/*Spec.js",
    users: "./specs/users/**/*Spec.js",
    members: "./specs/members/**/*Spec.js",
    translations: "./specs/translations/**/*Spec.js"
  },

  // Stock config, you can ignore these
  framework: "jasmine",
  seleniumAddress: "http://localhost:4444/wd/hub",

  /* Enable ES6 support via Babel, https://github.com/angular/protractor/issues/2049#issuecomment-393966036 */
  onPrepare: function() {
    require("@babel/register");
  }
};
