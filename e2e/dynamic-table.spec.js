const { test, expect } = require("@playwright/test");
const { DynamicTablePage } = require("../models/dynamic-table.model");

test("Testing Dynamic Table Page", async ({ page }) => {
    const dynamicTablePage = new DynamicTablePage(page)
    await dynamicTablePage.navigateToDynamicTablePage()
    let chromeCpuPercentage = await dynamicTablePage.getChromeCpuPercentage()
    let validationMessage = await dynamicTablePage.getChromeValidationMessage()
    expect(chromeCpuPercentage).toMatch(validationMessage)
});