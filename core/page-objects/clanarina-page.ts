import { By, WebDriver, until } from "selenium-webdriver";
import BasePage from "./base-page";
import { readFileSync } from "fs";
import * as path from "path";

const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

export class LoginPage extends BasePage {
    private name = By.xpath('//input[@name="first_name"]');
    private surname = By.xpath('//input[@name="last_name"]');
    private number = By.xpath('//input[@name="user_number"]');
    private submit_button = By.id('first-step');

    constructor(driver: WebDriver) {
        super(driver);
    }
    async provideName(){
        await this.fillInputField(this.name, testData.data.name);
    }

    async provideSurname(){
        await this.fillInputField(this.surname, testData.data.surname);
    }

    async provideNumber(){
        await this.fillInputField(this.number, testData.data.number);
    }
    async clickSubmitbutton(){
        await this.findElementAndClick(this.submit_button);
    }
   
}