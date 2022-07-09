const { default: $ } = require("webdriverio/build/commands/browser/$");

describe('Learning API', () => {

    const MAX_WAIT_TIME = 5000;
    let loginURL = "https://www.facebook.com/";
    let emailTextbox = "#email";
    let passTextbox = "#pass";
    let loginButton = "button[name='login']";

    it('waitForDisplayed', () => {
        // [1] Open URL
        browser.url(loginURL);

        // [2] Wait for the email textbox displayed
        await $(emailTextbox).waitForDisplayed(MAX_WAIT_TIME);

        // [3] Input into email textbox and password textbox
        $(emailTextbox).setValue("yuna@yopmail.com");

        // [4] Wait for the password textbox displayed
        await $(passTextbox).waitForDisplayed(MAX_WAIT_TIME);

        // [5] Input into password textbox and password textbox
        $(passTextbox).setValue("Abc@1234");

        // [6] Pause to see the result
        browser.pause(MAX_WAIT_TIME);

        // [7] Click on Login button
        $(loginButton).click();
        
    });
    
});