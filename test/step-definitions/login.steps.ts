import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { page } from '../../src/hocks/hocks';
import { LoginPage } from '../../src/pages/loginPage';
import * as config from '../testDate.json';
import { ProductsPage } from '../../src/pages/productsPage';

let loginPage: LoginPage;
let productsPage: ProductsPage;

Given('I open the login page', async function () {
  loginPage = new LoginPage(page);
  await loginPage.navigateTo(config.url);

});

When('I enter valid credentials', async function () {
  await loginPage.login(config.username, config.password);
});

Then('I should be redirected to the dashboard', async function () {
  productsPage = new ProductsPage(page);
  const isSuccess = await productsPage.isOnProductsPage();
  expect(isSuccess).toBeTruthy();
});
