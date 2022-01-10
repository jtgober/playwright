const { test } = require('@playwright/test');
const { ClassAttributePage } = require('../models/class-attribute.model');


test('Clicking Blue Button', async ({ page }) => {
    // await page.pause()
    page.on('dialog', async dialog => {
        console.log(dialog.message());
        await dialog.dismiss()
    })
    const classAttributepage = new ClassAttributePage(page)
    await classAttributepage.navigatToClassAttributePage()
    await classAttributepage.clickBlueButton()


})