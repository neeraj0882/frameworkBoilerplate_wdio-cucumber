class Landing{

    get textGreeting (){
        return browser.element('//*[@id="body-section"]/div/div[1]/div/div[1]/h3');
    }

    getGreetingText(){
        return this.textGreeting.getText();
    }
    waitForPageLoad(){
        if(!this.textGreeting.isVisible){
            this.textGreeting.waitForVisible(5000);
        }
    }


}

export default new Landing()
//module.exports = Landing;