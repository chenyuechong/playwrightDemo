import { Given, When, Then } from '@cucumber/cucumber';
import { ProductsPage } from '../../src/pages/productsPage';
import { page } from '../../src/hocks/hocks';
import { CartPage } from '../../src/pages/cartPage';
import { CustomerInfoPage } from '../../src/pages/customerInfoPage';
import { OrderConfirmationPage } from '../../src/pages/orderConfirmationPage';
import { OrderCompletedPage } from '../../src/pages/orderCompletedPage';
import { Customer } from '../../src/models/customer';


let productsPage: ProductsPage;
let cartPage: CartPage;
let customerInfoPage : CustomerInfoPage;
let orderConfirmationPage : OrderConfirmationPage;
let orderCompletedPage : OrderCompletedPage;

When('user click cart icon', async function() {
    productsPage = new ProductsPage(page);
    await productsPage.clickCartIcon();
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


When('user click finish in order confirmation page', async function() {
    orderConfirmationPage = new OrderConfirmationPage(page);
    await orderConfirmationPage.clickFinish();
});


When('user click back home in order complete page', async function() {
    orderCompletedPage = new OrderCompletedPage(page);
    await orderCompletedPage.clickBackHome();
});

