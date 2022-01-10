const { test } = require('@playwright/test')
const { TextInputPage } = require('../models/text-input.model')
const myButton = "The Best Button"
test('test updating button', async ({ page }) => {
    const textInputPage = new TextInputPage(page)
    await textInputPage.navigateToTextInputPage()
    await textInputPage.fillInputBox(myButton)
    await textInputPage.clickUpdatingButton()
    await textInputPage.expectTextInputToBe(myButton)
})