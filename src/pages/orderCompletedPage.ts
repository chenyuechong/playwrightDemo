import { Page, Locator } from 'playwright';
import { BasePage } from './basePage';

export class OrderCompletedPage extends BasePage {
    readonly backHomeButton: Locator;
    readonly completedMessage: Locator;
  
    constructor(page: Page) {
      super(page);
      this.backHomeButton = page.locator('#back-to-products');
      this.completedMessage = page.locator('.complete-header');
    }
  
    async clickBackHome() {
      await this.backHomeButton.click();
    }
    async isSuccessed() {
        const headerText = await this.completedMessage.waitFor({ state: 'visible' }).then(() => this.completedMessage.textContent());
        return headerText === 'Thank you for your order!';
    }
}