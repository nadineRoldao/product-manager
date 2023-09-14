import { ProductCategory } from "./product-category.model"

// interface que representa a estrutura do projeto
export interface Product {
    id: number
    name: string
    category: ProductCategory
    price: number
    link: string
}