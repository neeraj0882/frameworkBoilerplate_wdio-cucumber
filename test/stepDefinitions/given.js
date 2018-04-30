import { defineSupportCode } from 'cucumber';
import landingPage from '../pageobjects/landing-page';
//var expect = require('chai').expect;
//var landingPage = require('../pageobjects/landing-page');
//var defineSupportCode = require('cucumber').defineSupportCode;

defineSupportCode(function({ Given }) {
    Given('I launch the php travels signup page', function () {
        // Write code here that turns the phrase above into concrete actions
        browser.url("http://www.phptravels.net/register");
        browser.pause(1000);
      });
    Given('I am on the landing page', function () {
        // Write code here that turns the phrase above into concrete actions
        landingPage.getGreetingText().should.not.be.null;
      });
});

