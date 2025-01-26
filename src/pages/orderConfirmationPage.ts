import { Page, Locator } from 'playwright';
import { BasePage } from './basePage';

export class OrderConfirmationPage extends BasePage {
 
  readonly finishButton: Locator;
  readonly cancelButton: Locator;

  constructor(page: Page) {
    super(page);
    this.cancelButton = page.locator('#cancel');
    this.finishButton = page.locator('#finish');
  }

  async clickFinish() {
    await this.finishButton.click();
  }
  async clickCancel() {
    await this.cancelButton.click();
  }
}