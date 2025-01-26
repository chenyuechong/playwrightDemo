import { Page, Locator } from 'playwright';
import { BasePage } from './basePage';

export class OrderCompletedPage extends BasePage {
    readonly backHomeButton: Locator;
    readonly headerLocator: Locator;
    readonly completedMessage: Locator;
  
    constructor(page: Page) {
      super(page);
      this.backHomeButton = page.locator('#back-to-products');
      this.completedMessage = page.locator('.complete-header');
      this.headerLocator = page.locator('.title');
    }
  
    async isOnOrderCompletedPage(): Promise<boolean> {
        await this.headerLocator.waitFor({ state: 'visible' }); 
        return this.headerLocator.isVisible();
    }

    async clickBackHome() {
      await this.backHomeButton.click();
    }
    async getOrderCompletedMessage() {
        return await this.completedMessage.waitFor({ state: 'visible' }).then(() => this.completedMessage.textContent());
    }
}