import { Given, When, Then } from '@cucumber/cucumber';
import { expect, Page } from '@playwright/test';
import { BrowserHelper } from '../../src/support/browserHelper';
import { LoginPage } from '../../src/pages/loginPage';
import { ProductsPage } from '../../src/pages/productsPage';
import * as config from '../../src/config.json';

let browserHelper: BrowserHelper;
let page: Page;
let loginPage: LoginPage;
let productsPage: ProductsPage;

Given('user login system', async function() {
    browserHelper = new BrowserHelper();
    page = await browserHelper.launchBrowser(false);
    await page.goto(config.url);
    loginPage = new LoginPage(page);
    await loginPage.login(config.username, config.password);
});

When('user add product to cart', async function() {
    productsPage = new ProductsPage(page);
    await productsPage.addToCart('Sauce Labs Backpack');
});

Then('product should be added to cart', async function() {
   
    await browserHelper.closeBrowser();
});
