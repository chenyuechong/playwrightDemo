import { Page, Locator } from 'playwright';
import { BasePage } from './basePage';
import { Customer } from '../models/customer';

export class CustomerInfoPage extends BasePage {
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly zipCodeInput: Locator;
  readonly continueButton: Locator;
  readonly cancelButton: Locator;

  constructor(page: Page) {
    super(page);
    this.firstNameInput = page.locator('input[name="firstName"]');
    this.lastNameInput = page.locator('input[name="lastName"]');
    this.zipCodeInput = page.locator('input[name="postalCode"]');
    this.continueButton = page.locator('input[name="continue"]');
    this.cancelButton = page.locator('button[name="cancel"]');
  }

  async fillCustomerInfo(customer: Customer) {
    await this.firstNameInput.waitFor({ state: 'visible' });
    await this.firstNameInput.fill(customer.firstName);
    await this.lastNameInput.waitFor({ state: 'visible' });
    await this.lastNameInput.fill(customer.lastName);
    await this.zipCodeInput.waitFor({ state: 'visible' });
    await this.zipCodeInput.fill(customer.zipCode);
  }

  async clickContinue() {
    await this.continueButton.waitFor({ state: 'visible' });
    await this.continueButton.click();
  }

  async clickCancel() {
    await this.cancelButton.click();
  }
}