import { By, WebDriver, until } from "selenium-webdriver";
import BasePage from "./base-page";

import { readFileSync } from "fs";
import * as path from "path";
const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));


export class ZeljoHome extends BasePage {
    /*private stit_btn = By.id("menu-item-74879");
    private shop_btn = By.id("menu-item-74061");
    private duks = By.xpath("//a[@href='https://shop.fkzeljeznicar.ba/proizvod/dukserica-teget-krila-1921/' and @class='button product_type_variable add_to_cart_button' and @data-product_id='15203' and @rel='nofollow']");
    private header = By.xpath("//div[@class='post-title']/h1");
    private historija_btn = By.id("menu-item-74091");
    private osnivanje_btn = By.xpath("//div[@class='uk-flex-middle uk-overlay uk-overlay-fkz  uk-position-cover uk-light']/div[@class='uk-position-center uk-panel uk-light']/h4[@class='title']");*/

    private team_btn = By.id("menu-item-74071");
    private fteam_btn = By.id("menu-item-74179");
    private mula = By.xpath("//div[@class='uk-card player-card uk-box-shadow-hover-small']//h3[@class='title']");
    private newsbtn = By.id("menu-item-74064");
    private news = By.xpath("//div[@class='fkz-box uk-margin-top uk-margin-bottom']/h2[@class='uk-text-center ']");
    private fb_btn = By.xpath("//a[contains(@class, 'twitter')]");
    private hambtn = By.xpath("//a[contains(@class, 'uk-navbar-toggle') and @title='Meni']");
    private tv1921btn = By.id("menu-item-74062");
    private tv19219title = By.xpath("//div[@class='post-meta']/h3/a");
    private postion = By.xpath("//tr[@class='team-5240']/td");
    private manijaciBtn = By.xpath("//img[@src='https://fkzeljeznicar.ba/wp-content/themes/wp-fkz-2023/media/the-maniacs.png']")


    page: { getTitle: () => Promise<string> };

    constructor(driver: WebDriver) {
        super(driver);
    }

    async checkTitleOfPage() {
        // Pass the driver as an object with the getTitle method
        await this.checkTitle({ getTitle: async () => await this.driver.getTitle() }, testData.page.title);
    }

    async checkRezultat(){
        await this.waitForElement(this.postion, 5000);
        await this.containsString(this.postion, testData.position.pozicija);
    }

    async checkMula(){
        await this.waitForElement(this.mula, 5000);
        await this.containsString(this.mula, testData.team.name);
    }

    async checkUrl(){
        await this.checkCurrentUrl("https://themaniacs.org");
    }

    async checkNews(){
        await this.waitForElement(this.news, 5000);
        await this.checkMatchingElements(this.news, testData.news.new);
    }

    async check1921(){
        await this.waitForElement(this.tv19219title, 5000);
        await this.checkMatchingElements(this.tv19219title, testData.tv1921.title);
    }

    async click1921title(){
        await this.waitAndClick(this.tv19219title,5000);
    }

    async click1921Button(){
        await this.waitAndClick(this.tv1921btn,5000);
    }

    async clickTeamButton(){
        await this.waitAndClick(this.team_btn,5000);
    }

    async clickManijaci(){
        await this.waitAndClick(this.manijaciBtn, 5000);
    }

    async clickHamMenu(){
        await this.waitAndClick(this.hambtn, 5000);
    }

    async clickfbButton(){
        await this.waitAndClick(this.fb_btn,5000);
    }

    async clickFTeamButton(){
        await this.waitAndClick(this.fteam_btn,5000);
    }

    async clickNewsButton(){
        await this.waitAndClick(this.newsbtn,5000);
    }


    /*async clickShopButton(){
        await this.waitAndClick(this.shop,5000);
    }

    async clickLoginButton(){
        await this.waitAndClick(this.login_btn,5000);
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

    async clickMembershipButton(){
        await this.waitAndClick(this.membership_btn,5000);
    }

    async clickUclaniButton(){
        await this.waitAndClick(this.uclani_btn,5000);
    }*/
    
}