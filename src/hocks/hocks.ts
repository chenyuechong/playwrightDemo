import { Before, After, BeforeAll, AfterAll } from '@cucumber/cucumber';
import { chromium, Browser, Page, firefox, webkit } from 'playwright';
import * as fs from 'fs';


// Load config.json
const config = JSON.parse(fs.readFileSync('src/config.json', 'utf-8'));

let browser: Browser;
let page: Page;

// Select the browser type based on config
const getBrowserType = (browserName: string) => {
  switch (browserName.toLowerCase()) {
    case 'firefox':
      return firefox;
    case 'webkit':
      return webkit;
    case 'chromium':
    default:
      return chromium;
  }
};

// Runs once before all tests
BeforeAll(async () => {
  const browserType = getBrowserType(config.browser);
  browser = await browserType.launch({ headless: config.headless });
  console.log(`Browser launched: ${config.browser}, Headless: ${config.headless}`);
});

// Runs once after all tests
AfterAll(async () => {
  if (browser) {
    await browser.close();
  }
});

// Runs before each scenario
Before(async () => {
  if (!browser) {
    throw new Error('Browser is not initialized.');
  }
  page = await browser.newPage();
});

// Runs after each scenario
After(async () => {
  if (page) {
    await page.close();
  }
});

export { page };
