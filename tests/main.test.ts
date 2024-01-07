import { Builder, By, WebDriver } from "selenium-webdriver";
import { createDriver, quitDriver } from "../core/config/driver-setup";

import { readFileSync } from "fs";
import * as path from "path";
import { ZeljoHome } from "../core/page-objects/zeljo-home";


const dataFilePath = path.resolve(__dirname, "../core/data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

let driver: WebDriver;
let homePage : ZeljoHome;


beforeAll(async () => {
    const startTime = performance.now();
    driver = await createDriver(testData.url.home_page);
    const endTime = performance.now();
    const elapsedMilliseconds = endTime - startTime;
    console.log('Elapsed Time:', elapsedMilliseconds);
    //driver = await createDriver(testData.url.home_page);
    homePage = new ZeljoHome(driver);
},10000);

test("website name", async () => {
    await homePage.checkTitleOfPage();
  },20000);

test("players", async () => {
  await homePage.clickTeamButton();
  await homePage.clickFTeamButton();
  await homePage.checkMula();
},20000);

test("news", async () => {
  await homePage.clickNewsButton();
  await homePage.clickNewsButton();
  await homePage.checkNews();
},20000);*/


test("social page", async () => {
  await homePage.clickHamMenu();
  await homePage.clickfbButton();
},20000);

test("rezultati", async () => {
  await homePage.checkRezultat();
},20000);

test("manijaci", async () => {
  await homePage.clickManijaci();
  await homePage.checkUrl();
},20000);

afterAll(async () => {
    await quitDriver(driver);
},10000);
