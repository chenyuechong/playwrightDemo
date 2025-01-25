import { Page } from 'playwright';

export class BasePage {
  protected page: Page;

  constructor(page: Page) {
    this.page = page; // Inject the Playwright `page` instance
  }

  async navigateTo(url: string): Promise<void> {
    await this.page.goto(url);
    console.log(`Navigated to ${url}`);
  }

  async getTitle(): Promise<string> {
    return await this.page.title();
  }

  async click(selector: string): Promise<void> {
    await this.page.locator(selector).click();
    console.log(`Clicked element: ${selector}`);
  }

  async type(selector: string, text: string): Promise<void> {
    await this.page.locator(selector).fill(text);
    console.log(`Typed "${text}" into: ${selector}`);
  }

  async isVisible(selector: string): Promise<boolean> {
    return await this.page.locator(selector).isVisible();
  }
}
