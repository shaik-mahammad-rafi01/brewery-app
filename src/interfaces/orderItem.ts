import { Product } from "./product.js"
import { cupSize } from "../types/types.js"
export interface SelectedItem {
    product: Product,
    quantity: number,
    cupsize?: cupSize
}