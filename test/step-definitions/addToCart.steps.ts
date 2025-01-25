import { Given, When, Then } from '@cucumber/cucumber';
import {page } from '../../src/hocks/hocks';
import { LoginPage } from '../../src/pages/loginPage';
import { ProductsPage } from '../../src/pages/productsPage';
import * as config from '../../src/config.json';

let loginPage : LoginPage;
let productsPage : ProductsPage;


Given('user login system', async function() {
    loginPage = new LoginPage(page);
    await loginPage.navigateTo(config.url);
    await loginPage.login(config.username, config.password);
});

When('user add product to cart', async function() {
    productsPage = new ProductsPage(page);
    await productsPage.addToCart('Sauce Labs Backpack');
});

Then('product should be added to cart', async function() {
   
 
});
