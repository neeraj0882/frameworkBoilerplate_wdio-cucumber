import { defineSupportCode } from 'cucumber';
import landingPage from '../pageobjects/landing-page';

//var expect = require('chai').expect;
//var landingPage = require('../pageobjects/landing-page');
//var defineSupportCode = require('cucumber').defineSupportCode;

defineSupportCode(function({ Then }) {
    Then('I should get to the landing page', function () {
        // Write code here that turns the phrase above into concrete actions
        landingPage
        var greetingText = landingPage.getGreetingText();
        console.log(greetingText);
        landingPage.getGreetingText().should.not.be.null;
        
      });
    Then('the name displayed should be correct', function () {
        // Write code here that turns the phrase above into concrete actions
        landingPage.getGreetingText().should.contain("testfirst");
    });
});

