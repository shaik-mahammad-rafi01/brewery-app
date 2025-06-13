import { products } from "../data/products";
export function displayProducts() {
    products.forEach(p => {
        console.log(`- ${p.name} | ₹${p.price} | ${p.type} | ${p.category}`);

    });
}