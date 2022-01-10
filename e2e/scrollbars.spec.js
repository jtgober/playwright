const { test } = require('@playwright/test');
const { ScrollbarsPage } = require('../models/scrollbars-model');


test('Clicking the Hidden Button', async ({ page }) => {
    const scrollbarPage = new ScrollbarsPage(page)
    await scrollbarPage.navigateToScrollbars()
    await scrollbarPage.clickHidingButton()
})