import { displayProducts } from "./utils/displayProducts";
import { orderProduct, selectedItems } from "./utils/orderProduct";
import { billing } from "./utils/billing.js";
import { SelectedItem } from "./interfaces/orderItem";
export async function startBilling():Promise<SelectedItem[]> {
    console.log("Welcome to Brewery!\n");
    console.log('Available Products in our Restarant :\n\n');

    displayProducts();
    orderProduct();
    billing()
return selectedItems;
}
startBilling();