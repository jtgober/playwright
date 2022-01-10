exports.DynamicTablePage = class DynamicTablePage {
    constructor(page) {
        this.page = page;
        this.dynamicTableUrl = page.goto("/dynamictable")
        this.getCells = page.locator('css=[role="cell"]')
        this.getHeaders = page.locator('css=[role="columnheader"]')
        this.getValidationMessage = page.locator(".bg-warning")

    }
    //Navigate to Dynamic Table Page
    async navigateToDynamicTablePage() {
        await this.dynamicTableUrl
    }

    async getChromeCellContent(i) {
        let queryCellContent = await this.getCells.evaluateAll((elements) => elements.map((el) => el.textContent))
        let chromeCpuIndex = queryCellContent.slice(queryCellContent.indexOf("Chrome"), queryCellContent.indexOf("Chrome") + 5)
        return chromeCpuIndex[i]
    }

    async getHeaderCPUIndex() {
        let tableHeaders = await this.getHeaders.evaluateAll((elements) => elements.map((el) => el.textContent))
        return tableHeaders.indexOf("CPU")
    }

    async getChromeCpuPercentage() {
        let chromeCpuPercentage = await this.getChromeCellContent(await this.getHeaderCPUIndex())
        return `Chrome CPU: ${chromeCpuPercentage}`
    }

    async getChromeValidationMessage() {
        let validationMessage = this.getValidationMessage.innerText()
        return validationMessage
    }

}