const { Builder, By, Key, until } = require('selenium-webdriver');
let driver;
let url = 'https://fkzeljeznicar.ba/';


beforeAll(async () => {
  driver = await new Builder().forBrowser("chrome").build();
  await driver.get(url);
  await driver.manage().window().maximize();
},15000);


test("webpage of the football club and the shop", async () => {
    let shopButton = await driver.findElement(By.xpath("/html/body/header/div[1]/div/div[3]/nav/div/ul/li[1]/a"));
    await shopButton.click();
    
    const header = await driver.findElement(By.xpath("/html/body/div[1]/div[2]/div/div[2]/main/section[1]/h2"));
    await driver.wait(until.elementLocated(By.xpath("/html/body/div[1]/div[2]/div/div[2]/main/section[1]/h2")), 10000);
    await driver.wait(until.elementIsVisible(header), 10000);

    let najnovije = await header.getText();
    
    expect(najnovije).toBe("Najnovije");
  }, 20000);

afterAll(async () => {
  await driver.quit();
},5000);