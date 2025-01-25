import { Given, When, Then } from '@cucumber/cucumber';
import { expect, Page } from '@playwright/test';
import { LoginPage } from '../../src/pages/loginPage';
import { BrowserHelper } from '../../src/support/browserHelper';
import * as config from '../../src/config.json';


let browserHelper: BrowserHelper;
let page: Page;
let loginPage: LoginPage;

Given('I open the login page', async function() {
  browserHelper = new BrowserHelper();
  page = await browserHelper.launchBrowser(false);
  await page.goto(config.url);
  loginPage = new LoginPage(page);
});

When('I enter valid credentials', async function() {
    await loginPage.login(config.username, config.password);
});

Then('I should be redirected to the dashboard', async function() {
    await loginPage.waitForSuccessMessage(config.waitTime);
    const isSuccessVisible = await loginPage.successMessage.isVisible();
    expect(isSuccessVisible).toBeTruthy();
    await browserHelper.closeBrowser();
});
