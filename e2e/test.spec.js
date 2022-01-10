const { test } = require('@playwright/test');

test('Navigate to Home Page', async ({ page }) => {
    await page.goto("/progressbar")
    await page.click("#startButton")
    let ham = await page.locator("#progressBar").innerText()
    console.log(ham);
    while (await page.locator("#progressBar").innerText() !== "75%") {
        console.log(await page.locator("#progressBar").innerText());
        await page.locator("#progressBar").innerText()
    }
    await page.click("#stopButton")
})    