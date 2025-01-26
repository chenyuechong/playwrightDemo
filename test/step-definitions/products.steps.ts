import { Given, When, Then } from '@cucumber/cucumber';
import { page } from '../../src/hocks/hocks';
import { ProductsPage } from '../../src/pages/productsPage';
import { ProductDetailsPage } from '../../src/pages/productDetailsPage';
import { expect } from '@playwright/test';


let productsPage: ProductsPage;
let initialCartCount: number;
let productDetailsPage: ProductDetailsPage;



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

//   Then('the cart icon displays the updated number of items', async function() {
//     const newCartCount = await productsPage.getCartCount();
//     expect(newCartCount).toBeGreaterThan(0);
//   });
  
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