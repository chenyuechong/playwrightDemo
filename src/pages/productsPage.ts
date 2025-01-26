
import { Page, Locator } from 'playwright';
import { BasePage } from './basePage';


export class ProductsPage extends BasePage {
    private cartIcon: Locator;
    readonly cartBadge: Locator;
    private pageHeader: Locator;
    constructor(page: Page) {
        super(page);
        this.cartBadge = page.locator('.shopping_cart_badge');
        this.pageHeader = page.locator('.title');
        this.cartIcon = page.locator('.shopping_cart_link');
    }

    async isOnProductsPage(): Promise<boolean> {
        const headerText = await this.pageHeader.waitFor({ state: 'visible' }).then(() => this.pageHeader.textContent());
        return headerText === 'Products';
    }

    async viewProductDetails(productName: string) {
        const items = await this.page.locator('.inventory_item').elementHandles();
        for (const item of items) {
            const title = await item.$('.inventory_item_name ');
            if (title) {
                const textContent = await title.textContent();
                if (textContent?.trim() === productName) {
                    await title.click();
                    break;

                }
            }
        }
    }


    async addToCart(productName: string): Promise<void> {

        // Find all elements with the class 'item'
        const items = await this.page.locator('.inventory_item').elementHandles();

        for (const item of items) {

            const title = await item.$('.inventory_item_name');


            if (title) {
                const textContent = await title.textContent();
                if (textContent?.trim() === productName) {

                    const button = await item.$('#add-to-cart-sauce-labs-backpack');
                    if (button) {
                        // Click the button
                        await button.click();
                        console.log('Clicked the button inside the item!');
                    }
                }
            }
        }
    }

    async removeFromCart(product: string) {
        const button = await this.getRemoveButton(product);
        if (button) {
            await button.click();
        }
    }

    async getRemoveButton(productName: string): Promise<Locator | null> {

        // Find all elements with the class 'item'
        const items = await this.page.locator('.inventory_item').elementHandles();

        for (const item of items) {

            const title = await item.$('.inventory_item_name');


            if (title) {
                const textContent = await title.textContent();
                if (textContent?.trim() === productName) {

                    const button = await item.$('button:has-text("Remove")');
                    if (button) {
                        return this.page.locator(`#${await button.getAttribute('id')}`);
                    }
                }
            }
        }
        return null;
    }


    async getCartCount(): Promise<number> {
        const cartCountText = await this.cartBadge.textContent();
        return cartCountText ? parseInt(cartCountText) : 0;
    }

    async clickCartIcon() {
        await this.cartIcon.click();
    }
}
