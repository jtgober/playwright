const { test } = require('@playwright/test');
const { SampleAppPage } = require('../models/sample-app.model');

test.describe.parallel('suite', () => {


    test('log in success', async ({ page }) => {
        const sampleAppPage = new SampleAppPage(page)
        await sampleAppPage.navigateToSampleApp()
        await sampleAppPage.fillUsernameField("Gojo")
        await sampleAppPage.fillPasswordField("pwd")
        await sampleAppPage.clickLoginOrLogoutButton()
        await sampleAppPage.expectedLoginTextToBe("Welcome, Gojo!")
    });

    test('Wrong password test', async ({ page }) => {
        const sampleAppPage = new SampleAppPage(page)
        await sampleAppPage.navigateToSampleApp()
        await sampleAppPage.fillUsernameField("Gojo")
        await sampleAppPage.fillPasswordField("WrongPass")
        await sampleAppPage.clickLoginOrLogoutButton()
        await sampleAppPage.expectedLoginTextToBe("Invalid username/password")
    });

    test('no username test', async ({ page }) => {
        const sampleAppPage = new SampleAppPage(page)
        await sampleAppPage.navigateToSampleApp()
        await sampleAppPage.fillUsernameField("")
        await sampleAppPage.fillPasswordField("pwd")
        await sampleAppPage.clickLoginOrLogoutButton()
        await sampleAppPage.expectedLoginTextToBe("Invalid username/password")
    });

    test('log out test', async ({ page }) => {
        const sampleAppPage = new SampleAppPage(page)
        await sampleAppPage.navigateToSampleApp()
        await sampleAppPage.fillUsernameField("Gojo")
        await sampleAppPage.fillPasswordField("pwd")
        await sampleAppPage.clickLoginOrLogoutButton()
        await sampleAppPage.expectedLoginTextToBe("Welcome, Gojo!")
        await sampleAppPage.clickLoginOrLogoutButton()
        await sampleAppPage.expectedLoginTextToBe("User logged out.")
    });
})