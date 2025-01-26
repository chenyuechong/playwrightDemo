import { Page, Locator } from 'playwright';
import { BasePage } from './basePage';

export class OrderConfirmationPage extends BasePage {
 
  readonly finishButton: Locator;
  readonly cancelButton: Locator;
  readonly headerLocator: Locator;

  constructor(page: Page) {
    super(page);
    this.cancelButton = page.locator('#cancel');
    this.finishButton = page.locator('#finish');
    this.headerLocator = page.locator('.title');
  }

    async isOnOrderConfirmationPage(): Promise<boolean> {
        await this.headerLocator.waitFor({ state: 'visible' }); 
        return this.headerLocator.isVisible();
    }
  async clickFinish() {
    await this.finishButton.click();
  }
  async clickCancel() {
    await this.cancelButton.click();
  }
}