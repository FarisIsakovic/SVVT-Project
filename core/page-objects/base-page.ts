import { By, WebDriver, WebElement, until } from "selenium-webdriver";
export default class BasePage {
    protected driver: WebDriver;

    constructor(driver: WebDriver) {
        this.driver = driver;
    }
    async getTitle(){
        return await this.driver.getTitle();
    }

    async scrollDown() {
        await this.driver.executeScript("window.scrollBy(0, 3800);");
        // Adjust the value (3800 in this case) based on your scroll requirements
    }

    async scrollIntoView(selector: By) {
        const element = await this.findElement(selector);
        await this.driver.executeScript("arguments[0].scrollIntoView();", element);
    }

    async checkMatchingElements(selector: By, matchingItem: string){
        const element = await this.findElement(selector);
        const elementText = await element.getText();
        expect(elementText).toMatch(matchingItem);
    }
    async containsString(selector: By, expectedSubstring: string) {
        const element = await this.findElement(selector);
        const elementText = await element.getText();

        if (!elementText.includes(expectedSubstring)) {
            throw new Error(`Expected substring "${expectedSubstring}" not found in element text: "${elementText}"`);
        }
    }
    
    async findElement(selector: By) {
        return await this.driver.findElement(selector);
    }
    async checkTitle(page: { getTitle: () => Promise<string>}, page_title: string){
        let title = await page.getTitle();
        expect(title).toMatch(page_title);
    }  
    async findElementAndClick(selector: By){
        await this.driver.wait(
 					   until.elementLocated(selector),10000)
 					   .click();
    }
    async waitAndClick(elementLocator, timeout) {
        await this.driver.wait(
 			until.elementLocated(elementLocator), timeout).click();
    }

    async waitForInvisibilityOfElementLocated(locator: By, timeout: number): Promise<void> {
        const element = await this.driver.wait(
            until.elementLocated(locator), timeout
        );
        await this.driver.wait(
            until.stalenessOf(element), timeout
        );
    }
   
    async waitForElement(elementLocator, timeout) {
        return this.driver.wait(until.elementLocated(elementLocator), timeout);
    }
    async hoverElement(element: WebElement) {
        const actions = this.driver.actions({ bridge: true });
        await actions
                    .move({ duration: 2000, origin: element, x: 0, y: 0 })
                    .perform();
    }
    async fillInputField(inputField: By, text: string) {
        await (await this.findElement(inputField)).sendKeys(text);
    }

    async checkCurrentUrl(expectedUrl: string) {
        const currentUrl = await this.driver.getCurrentUrl();
        expect(currentUrl).toBe(expectedUrl);
    }

    
}