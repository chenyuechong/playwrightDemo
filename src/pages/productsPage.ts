
import { BasePage } from './basePage';


export class ProductsPage extends BasePage {
 

    // Method to log in using credentials
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
}
