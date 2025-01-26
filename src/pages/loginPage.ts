// src/pages/LoginPage.ts
import { Page } from 'playwright';
import { BasePage } from './basePage';



export class LoginPage extends BasePage {
  private usernameField = this.page.locator('input[name="user-name"]');
  private passwordField = this.page.locator('input[name="password"]');
  private submitButton = this.page.locator('input[name="login-button"]');
 

  constructor(page: Page) {
    super(page); // Pass the `page` instance to the base class
  }
  // Method to log in using credentials
  async login(username: string, password: string) : Promise<void>{
    await this.usernameField.fill(username);
    await this.passwordField.fill(password);
    await this.submitButton.click();
  }

  
}
