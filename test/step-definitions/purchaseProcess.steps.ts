import { Given, When, Then } from '@cucumber/cucumber';
import { ProductsPage } from '../../src/pages/productsPage';
import { page } from '../../src/hocks/hocks';
import { CartPage } from '../../src/pages/cartPage';
import { CustomerInfoPage } from '../../src/pages/customerInfoPage';
import { OrderConfirmationPage } from '../../src/pages/orderConfirmationPage';
import { OrderCompletedPage } from '../../src/pages/orderCompletedPage';
import { Customer } from '../../src/models/customer';
import { ProductDetailsPage } from '../../src/pages/productDetailsPage';
import { expect } from '@playwright/test';
import * as config from '../testDate.json';
import { LoginPage } from '../../src/pages/loginPage';

let productsPage: ProductsPage;
let cartPage: CartPage;
let customerInfoPage : CustomerInfoPage;
let orderConfirmationPage : OrderConfirmationPage;
let orderCompletedPage : OrderCompletedPage;
let productDetailsPage: ProductDetailsPage;
let loginPage: LoginPage;



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


When('user clicks {string} in the products list', async function(productName: string) {
    productsPage = new ProductsPage(page);
    await productsPage.viewProductDetails(productName);
  });
  
  Then('user should be redirected to the product details page', async function() {
    productDetailsPage = new ProductDetailsPage(page);
    const isOnProductDetailsPage = await productDetailsPage.isOnProductDetailsPage();
    expect(isOnProductDetailsPage).toBeTruthy();
  });

  When('user clicks the "Add to Cart" button', async function() {
    const isAdded = await productDetailsPage.isAddToCartButtonVisible();
    expect(isAdded).toBeTruthy();

    await productDetailsPage.clickAddToCart();
  });
  
  Then('the "Add to Cart" button changes to "Remove"', async function() {
    const isAdded = await productDetailsPage.isRemoveButtonVisible();
    expect(isAdded).toBeTruthy();
  });

  When('user click the "Remove" button', async function() {
    const isRemoveButton = await productDetailsPage.isRemoveButtonVisible();
    expect(isRemoveButton).toBeTruthy();

    await productDetailsPage.clickRemove();
  });

  Then('the "Remove" button changes to "Add to Cart"', async function() {
    const isAdded = await productDetailsPage.isAddToCartButtonVisible();
    expect(isAdded).toBeTruthy();
  });

When('user click cart icon', async function() {
    productDetailsPage = new ProductDetailsPage(page);
    await productDetailsPage.clickCartIcon();
});

When('user click checkout', async function() {
    cartPage = new CartPage(page);
    await cartPage.clickCheckout();
});


When('user fill in your information witht the following details', async function(dataTable ) {
    const data = dataTable.hashes()[0];
    const customer: Customer = {
      firstName: data.firstname,
      lastName: data.lastname,
      zipCode: data.zipcode
    };
    
    customerInfoPage = new CustomerInfoPage(page);
    await customerInfoPage.fillCustomerInfo(customer);
    customerInfoPage.clickContinue();
});

Then ('user should be redirected to the order confirmation page', async function() {    
    orderConfirmationPage = new OrderConfirmationPage(page);
    const isOnOrderConfirmationPage = await orderConfirmationPage.isOnOrderConfirmationPage();
    expect(isOnOrderConfirmationPage).toBeTruthy();
});

When('user click finish in order confirmation page', async function() {
    await orderConfirmationPage.clickFinish();
});


Then('user should be redirected to the order completed page', async function() {
    orderCompletedPage = new OrderCompletedPage(page);
    const isOnOrderCompletedPage = await orderCompletedPage.isOnOrderCompletedPage();
    expect(isOnOrderCompletedPage).toBeTruthy();
});

Then('user should see the message {string}', async function(message: string) {
    const messageText = await orderCompletedPage.getOrderCompletedMessage();
    expect(messageText?.toLowerCase()).toContain(message.toLowerCase());
});