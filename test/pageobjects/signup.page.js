class SignUp{

    get fName (){
        return browser.element('//*[@id="headersignupform"]/div[3]/input');
    }
    get lName(){
        return browser.element('//*[@id="headersignupform"]/div[4]/input');
    }
    get mobile(){
        return browser.element('//*[@id="headersignupform"]/div[5]/input');
    }
    get email(){
        return browser.element('//*[@id="headersignupform"]/div[6]/input');
    }
    get password(){
        return browser.element('//*[@id="headersignupform"]/div[7]/input');
    }
    get confirmPassword(){
        return browser.element('//*[@id="headersignupform"]/div[8]/input');
    }
    get signButton(){
        return browser.element('//*[@id="headersignupform"]/div[9]/button');
    }
    launch(){
        browser.url("http://www.phptravels.net/register");
    }
    
    waitForPageLoad(){
        if(!this.signButton.isVisible){
            this.signButton.waitForVisible(5000);
        }
    }

    enterDetails(name1,name2,mobileNum,emailid,pass){
        this.waitForPageLoad();
        this.fName.setValue(name1);
        this.lName.setValue(name2);
        this.mobile.setValue(mobileNum);
        this.email.setValue(emailid);
        this.password.setValue(pass);
        this.confirmPassword.setValue(pass);
    }
    clickSignUp(){
        this.signButton.click();
        browser.pause(5000);
    }

}

export default new SignUp()
//module.exports = SignUp;