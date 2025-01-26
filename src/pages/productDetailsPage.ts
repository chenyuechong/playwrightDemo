import { Page, Locator } from 'playwright';
import { BasePage } from './basePage';


export class ProductDetailsPage extends BasePage {
    private cartIcon: Locator;
    private backButton: Locator;
    private removeButton: Locator;
    private addToCartButton: Locator;
    constructor(page: Page) {
        super(page);
        this.cartIcon = page.locator('.shopping_cart_link');
        this.backButton = page.locator('button[name="back-to-products"]');
        this.removeButton = page.locator('button[name="remove"]');
        this.addToCartButton = page.locator('button[name="add-to-cart"]');
    }

    async isOnProductDetailsPage(): Promise<boolean> {
        await this.backButton.waitFor({ state: 'visible' }); 
        return this.backButton.isVisible();
    }

    async isRemoveButtonVisible(): Promise<boolean> {
        await this.removeButton.waitFor({ state: 'visible' });
        return this.removeButton.isVisible();
    }

    async isAddToCartButtonVisible(): Promise<boolean> {
        await this.addToCartButton.waitFor({ state: 'visible' });
        return this.addToCartButton.isVisible();
    }

    async clickAddToCart() {
        await this.addToCartButton.click();
    }   

    async clickRemove() {
        await this.removeButton.click();
    }
    async clickCartIcon() {
        await this.cartIcon.click();
      }
}

