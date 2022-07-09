const { default: $ } = require("webdriverio/build/commands/browser/$");

describe('API Learning', () => {
    it('Sendkeys into a textbox', () => {
        browser.url("https://www.facebook.com/");
        browser.pause(2000);

        let emailTextbox = "input[name='email']";
        $(emailTextbox).setValue("yuna@yopmail.com");
        browser.pause(3000);

        let passwordTextbox = "input[name='pass']";
        $(passwordTextbox).setValue("Abc@1234");
        browser.pause(3000);
    });
});