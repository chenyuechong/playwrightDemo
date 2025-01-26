import { Page, Locator } from 'playwright';
import { BasePage } from './basePage';

export class CartPage extends BasePage {
  
  private checkoutButton: Locator;
  private headerLocator: Locator;
  private continueShoppingButton: Locator;

  constructor(page: Page) {
    super(page);
   
    this.checkoutButton = page.locator('#checkout');
    this.continueShoppingButton = page.locator('#continue-shopping');
    this.headerLocator = page.locator('.title');
  }

  async isOnCartPage(): Promise<boolean> {
    const headerText = await this.headerLocator.waitFor({ state: 'visible' }).then(() => this.headerLocator.textContent());
    return headerText === 'Your Cart';
  }

  async clickCheckout() {
    await this.checkoutButton.click();
  }

  async clickContinueShopping() {
    await this.continueShoppingButton.click();
  }
}