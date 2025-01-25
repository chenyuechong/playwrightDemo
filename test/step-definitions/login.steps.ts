import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import {page} from '../../src/hocks/hocks';
import { LoginPage } from '../../src/pages/loginPage';
import * as config from '../../src/config.json';

let loginPage : LoginPage;

Given('I open the login page', async function() {
    loginPage = new LoginPage(page);
  await loginPage.navigateTo(config.url);

});

When('I enter valid credentials', async function() {
    await loginPage.login(config.username, config.password);
});

Then('I should be redirected to the dashboard', async function() {
    await loginPage.waitForSuccessMessage(config.waitTime);
    const isSuccessVisible = await loginPage.successMessage.isVisible();
    expect(isSuccessVisible).toBeTruthy();
});
