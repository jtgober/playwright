exports.HomePage = class HomePage {
    constructor(page) {
        this.page = page
        this.homePageUrl = page.goto("/home")
        this.quote = page.locator(".mb-0")
        this.linkTags = page.locator('a')
    }

    async navigateToHomePage() {
        await this.homePageUrl
    }

    async getQuote() {
        return await this.quote.innerText()
    }

    async getAllLinkTags() {
        return await this.linkTags.evaluateAll((elements) => elements.map((el) => el.innerText));
    }

}