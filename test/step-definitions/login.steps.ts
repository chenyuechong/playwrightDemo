import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { page } from '../../src/hocks/hocks';
import { LoginPage } from '../../src/pages/loginPage';
import * as config from '../testDate.json';
import { ProductsPage } from '../../src/pages/productsPage';

let loginPage: LoginPage;
let productsPage: ProductsPage;

Given('user open the login page', async function () {
  loginPage = new LoginPage(page);
  await loginPage.navigateTo(config.url);

});

When('user enter valid credentials', async function () {
  await loginPage.login(config.username, config.password);
});

Then('user should be redirected to the product page', async function () {
  productsPage = new ProductsPage(page);
  const isSuccess = await productsPage.isOnProductsPage();
  expect(isSuccess).toBeTruthy();
});


When('user enter {string} and {string}', async function (username: string, password: string) {
  await loginPage.login(username, password);
});

Then('user should see an error message', async function () {
  const errorMessage = await loginPage.getErrorMessage();
  expect(errorMessage).toBeTruthy();
});