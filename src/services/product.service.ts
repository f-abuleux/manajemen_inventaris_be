import prisma from "@/prisma"
import { CreateProductInput, UpdateProductInput } from "@/types/product.types";

export const createProductDetail = async ({ product_name, product_category, product_quantity, product_price, input_date,
}: CreateProductInput) => {
    try {
        const findProduct = await prisma.product.findFirst({
            where: {
                product_name
            }
        })

        if (findProduct) throw "Product already on list"

        const createProduct = await prisma.product.create({
            data: {
                product_name,
                product_category,
                product_quantity,
                product_price,
                input_date,
            }
        })
        return { createProduct }
    } catch (error) {
        throw error
    }
}

export const deleteProductByIdDetail = async ({ product_id }: { product_id: string }) => {
    try {
        const deleteProductId = await prisma.product.delete({
            where: {
                product_id: product_id
            }
        })
        return { deleteProductId }
    } catch (error) {
        throw error
    }
}

export const updateProductDetailById = async ({
    product_id,
    product_name,
    product_category,
    product_quantity,
    product_price,
    input_date,
}: UpdateProductInput) => {
    try {
        const updatedProduct = await prisma.product.update({
            where: { product_id },
            data: {
                ...(product_name && { product_name }),
                ...(product_category && { product_category }),
                ...(product_quantity && { product_quantity }),
                ...(product_price && { product_price }),
                ...(input_date && { input_date }),
            },
        });

        return updatedProduct;
    } catch (error) {
        throw error
    }
}