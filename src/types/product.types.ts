import { ProductCategory } from "@prisma/client";

export interface CreateProductInput {
    product_name: string;
    product_category: ProductCategory;
    product_quantity: number;
    product_price: number;
    input_date: string;
}

export interface UpdateProductInput {
    product_id: string;
    product_name?: string;
    product_category?: ProductCategory;
    product_quantity?: number;
    product_price?: number;
    input_date?: string;
}