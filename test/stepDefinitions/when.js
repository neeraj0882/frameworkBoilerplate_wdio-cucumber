import { defineSupportCode } from 'cucumber';
import signupPage from '../pageobjects/signup.page';
//var expect = require('chai').expect;
//var signupPage = require('../pageobjects/signup.page');
//var defineSupportCode = require('cucumber').defineSupportCode;

defineSupportCode(function({ When }) {
    When('I enter firtname and lastname <fname> <lname> on the page', function (dataTable) {
        // Write code here that turns the phrase above into concrete actions
        var data = dataTable.raw();
        var data1 = dataTable.hashes();
        console.log('value in the datatable '+data1[0].fname);
        console.log('value in the datatable '+data1[0].lname);
        //browser.debug();
        //signupPage.enterDetails(data1[0].fname,data1[0].lname,data1[0].mobile,data1[0].email,data1[0].password)
        signupPage.enterDetails(data1[0].fname,data1[0].lname,data1[0].mobile,data1[0].email,data1[0].password);
        browser.pause(1000);
      });
    When('I click signup', function () {
        // Write code here that turns the phrase above into concrete actions
        signupPage.clickSignUp();
      });
});