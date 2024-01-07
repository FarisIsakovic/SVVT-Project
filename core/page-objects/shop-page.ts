import { By, WebDriver, until } from "selenium-webdriver";
import BasePage from "./base-page";

import { readFileSync } from "fs";
import * as path from "path";
const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));


export class ShopPage extends BasePage {
   
    private duks = By.xpath("//a[@href='https://shop.fkzeljeznicar.ba/proizvod/dukserica-teget-krila-1921/' and @class='button product_type_variable add_to_cart_button' and @data-product_id='15203' and @rel='nofollow']");
    private velicina = By.xpath("//select[@id='pa_velicina']/option[@value!='xl']");
    private racun = By.id("menu-item-60");
    private email = By.xpath("//input[@id='username']");
    private password = By.xpath("//input[@id='password']");
    private login_btn = By.xpath("//button[@type='submit' and @value='Prijava']");
    private novostibtn = By.id("menu-item-201");
    private novostih1 = By.xpath("//header[@class='page-header']/h1[@class='page-title']");

    constructor(driver: WebDriver) {
        super(driver);
    }

    async provideEmail(){
        await this.fillInputField(this.email, testData.dataShop.email);
    }

    async providePassword(){
        await this.fillInputField(this.password, testData.dataShop.password);
    }

    async clickRacunButton(){
        await this.waitAndClick(this.racun,5000);
    }

    async clickNovostiButton(){
        await this.waitAndClick(this.novostibtn,5000);
    }

    async checkNovosti(){
        await this.waitForElement(this.novostih1, 5000);
        await this.checkMatchingElements(this.novostih1, testData.shopnovosti.novosti);
    }

    async clickSizeButton(){
        await this.waitAndClick(this.velicina,5000);
    }

    async clickLoginButton(){
        await this.waitAndClick(this.login_btn,5000);
    }
   
    async clickDuksButton(){
        await this.waitAndClick(this.duks,5000);
    }
    

   
    
}