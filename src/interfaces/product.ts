import { ProductType } from "../types/types.js"

export interface Product {
    name: string,
    price: number,
    type: ProductType,
    category: string
}