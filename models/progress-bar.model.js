exports.ProgressBarPage = class ProgressBarPage {
    constructor(page) {
        this.page = page
        this.progressBarUrl = page.goto("/progressbar")
        this.startButton = page.locator("#startButton")
        this.stopButton = page.locator("#stopButton")
        this.progressBar = page.locator("#progressBar")
    }

    async navigateToProgressBarPage() {
        await this.progressBarUrl
    }

    async clickStartButton() {
        await this.startButton.click()
    }

    async clickStopButton() {
        await this.stopButton.click()
    }

    async progressBarPercent() {
        return await this.progressBar.innerHTML()
    }
}