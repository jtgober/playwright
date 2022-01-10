const { expect } = require('@playwright/test');
exports.SampleAppPage = class SampleAppPage {
    constructor(page) {
        this.page = page
        this.sampleAppUrl = page.goto("/sampleapp")
        this.userNameField = page.locator('css=[type="text"]')
        this.passwordField = page.locator('css=[type="password"]')
        this.loginAndLogoutButton = page.locator("#login")
        this.loginText = page.locator("#loginstatus")
    }

    async navigateToSampleApp() {
        await this.sampleAppUrl
    }

    async fillUsernameField(username) {
        await this.userNameField.fill(username)
    }

    async fillPasswordField(password) {
        await this.passwordField.fill(password)
    }

    async clickLoginOrLogoutButton() {
        await this.loginAndLogoutButton.click()
    }

    async expectedLoginTextToBe(text) {
        await expect(this.loginText).toHaveText(text)
    }
}
