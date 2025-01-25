import { Page } from '@playwright/test';

export class BasePage {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateTo(url: string) {
    await this.page.goto(url);
  }

  async getTitle(): Promise<string> {
    return this.page.title();
  }

  async waitForSelector(selector: string, timeout: number = 30000) {
    await this.page.waitForSelector(selector, { timeout });
  }
}