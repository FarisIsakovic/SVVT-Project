import { Builder, By, WebDriver } from "selenium-webdriver";
import { createDriver, quitDriver } from "../core/config/driver-setup";


import { readFileSync } from "fs";
import * as path from "path";
import { ShopPage } from "../core/page-objects/shop-page";


const dataFilePath = path.resolve(__dirname, "../core/data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

let driver: WebDriver;
let shopPage : ShopPage;

beforeAll(async () => {
    driver = await createDriver(testData.url.shop);
    shopPage = new ShopPage(driver);
},10000);

/*test("zeljo shop", async () => {
    await shopPage.clickDuksButton();
    await shopPage.clickSizeButton();
},20000);
  
test("login", async () => {
    await shopPage.clickRacunButton();
    await shopPage.provideEmail();
    await shopPage.providePassword();
    await shopPage.clickLoginButton();
},20000);*/

test("shop novosti", async () => {
    await shopPage.clickNovostiButton();
    await shopPage.checkNovosti();
   
},20000);

afterAll(async () => {
    await quitDriver(driver);
},10000);
