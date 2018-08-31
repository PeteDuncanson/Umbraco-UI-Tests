# Umbraco-UI-Tests

A test suite for the back office of Umbraco CMS, some help make it stronger :)

## Prerequisites

You have Node installed, if not go get it here https://nodejs.org/en/

You can open a command line in admin mode. Pro-tip in windows explorer with his folder open go up to "File > Open New Powershell" (it might be called "Command Prompt" instead of Powershell) and that will open you on in that folder.

You can write Javascript (ideally with some knowledge of [ES6 sytax](http://es6-features.org/)).

## Getting setup

Let me know what the issues with this. Sadly I've got everything installed on my machine already and not sure what I need to add to the packages.json to make it all work on your machine so let me know via the issues tracker and we can fix it for all :)

We need to manually install some goodies I'm afraid as they should ideally be globally available on your machine. To do that follow along with the few steps of the install for Protractor in the [Setup guide for Protractor](http://www.protractortest.org/#/tutorial#setup). While your there feel free to have a quick read as its an awesome quick start.

Decide if you want to run V7 or V8 tests (pro-tip, there aren't any V8 tests as yet so go with V7) these are split into folders for ease. Then we need to go edit some settings for that version.

Find the config.js file in the root of the version folder you want to run. Change the baseUrl, username and password fields to match those of an Umbraco instance you want to test against and save them (don't check these changes in though if you do). For now I've got it pointing to the Offroadcode website when I test but ideally we will soon be having a local site that is the same for all of use to test on that will be checked in some how.

Back to that command propmt, change directory into the folder of your choice (thats "cd V7" or "cd V8" if you've forgotten you commands) then type:

    protractor config.js

This will kick off the full test suite! Warning, as the number of tests grows this could take some time.

I'd highly recommend having a read of the [offical style guide](http://www.protractortest.org/#/style-guide) too, its a great heads up on how we have structured everything far better than I could and explains our use of Page Objects real well too.

## Test suites

We have a separate suite of tests per section in the back office (so one for content, users, media etc.) These are all managed via folders inside the specs folder for each version of Umbraco we support. You can run just one suite by including its name on the end of the command:

    protractor config.js --suite=media
