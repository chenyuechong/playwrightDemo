import { Page, Locator } from 'playwright';
import { BasePage } from './basePage';

export class CartPage extends BasePage {
  
  private checkoutButton: Locator;
  private productLocator: Locator;
  private continueShoppingButton: Locator;

  constructor(page: Page) {
    super(page);
   
    this.checkoutButton = page.locator('#checkout');
    this.continueShoppingButton = page.locator('#continue-shopping');
    this.productLocator = page.locator('.product');
  }

 

  async isProductInCart(product: string): Promise<boolean> {
    return this.page.locator(`text=${product}`).isVisible();
  }

  async clickCheckout() {
    await this.checkoutButton.click();
  }

  async clickContinueShopping() {
    await this.continueShoppingButton.click();
  }
}