import { chromium, Browser, Page } from 'playwright';

export class BrowserHelper {
    private browser!: Browser;
    private page!: Page;
  
    async launchBrowser(headless: boolean = false): Promise<Page> {
      this.browser = await chromium.launch({ headless });
      this.page = await this.browser.newPage();
      return this.page;
    }
  
    async closeBrowser(): Promise<void> {
      await this.browser.close();
    }
  }