import { Given, When, Then } from '@cucumber/cucumber';
import { page } from '../../src/hocks/hocks';
import { LoginPage } from '../../src/pages/loginPage';
import { ProductsPage } from '../../src/pages/productsPage';
import * as config from '../testDate.json';
import { expect } from '@playwright/test';

let loginPage: LoginPage;
let productsPage: ProductsPage;
let initialCartCount: number;

Given('user login system', async function () {
    loginPage = new LoginPage(page);
    await loginPage.navigateTo(config.url);
    await loginPage.login(config.username, config.password);
    
    productsPage = new ProductsPage(page);
    const isLoginSuccess = await productsPage.isOnProductsPage();
    expect(isLoginSuccess).toBeTruthy();
});

When('user add product to cart', async function () {

    //initialCartCount = await productsPage.getCartCount();
    await productsPage.addToCart('Sauce Labs Backpack');
});

Then('product should be added to cart', async function () {
    const newCartCount = await productsPage.getCartCount();
   // expect(newCartCount).toBe(initialCartCount + 1);
});
