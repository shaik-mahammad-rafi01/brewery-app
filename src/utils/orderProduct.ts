import { products } from "../data/products.js";
import { SelectedItem } from "../interfaces/orderItem.js";
import { cupSize } from "../types/types.js";
import { billing } from "./billing";
import { ask } from "./readline.js";
export let selectedItems: SelectedItem[] = [];
export async function orderProduct(): Promise<SelectedItem[]> {
  

  while (true) {
    const name = (await ask("\nEnter the product name: ")).trim();
    if (name.toLowerCase() === "done") break;

    const product = products.find(p => p.name.toLowerCase() === name.toLowerCase());
    if (!product) {
      console.log("❌ Product not found. Try again.");
      continue;
    }

    const enteredQuantity = await ask("Enter the quantity: ");
    const quantity = parseInt(enteredQuantity);
    if (isNaN(quantity) || quantity <= 0) {
      console.log("❌ Please enter a valid quantity.");
      continue;
    }

    let cupsize: cupSize | undefined;
    if (product.category === "Beverages") {
      const size = (await ask("Enter cup size (small, medium, large): ")).trim().toLowerCase();
      if (!["small", "medium", "large"].includes(size)) {
        console.log("⚠️ Invalid cup size. Defaulting to 'small'.");
        cupsize = "small";
      } else {
        cupsize = size as cupSize;
      }
    }

    selectedItems.push({ product, quantity, cupsize });

    const moreItems = (await ask("Want to add another product? (yes/no): ")).trim().toLowerCase();
    if (moreItems === "no"){
        return billing ();
    }
  }

  return selectedItems;
}
