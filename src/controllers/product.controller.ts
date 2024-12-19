import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client"
import { createProductDetail, deleteProductByIdDetail, updateProductDetailById } from "@/services/product.service";


export class ProductController {
    public async getProduct(req: Request, res: Response) {
        const prisma = new PrismaClient();
        try {
            const findProduct = await prisma.product.findMany();

            res.status(200).send({
                status: "Success",
                msg: "Success accesing findProduct API",
                findProduct
            })
        } catch (error) {
            res.status(400).send({
                status: "Error",
                msg: error,
                res: 400
            })
        }
    }

    public async createProduct(req: Request, res: Response) {
        try {
            const { product_name, product_category, product_quantity, product_price, input_date } = req.body

            const createProduct = await createProductDetail({ product_name, product_price, product_quantity, product_category, input_date })

            res.status(201).send({
                status: "Succes",
                msg: "Success accessing createProductAPI",
                createProduct
            })
        } catch (error) {
            res.status(400).send({
                status: "Error",
                msg: error,
                res: 400
            })
        }
    }

    public async deleteProductById(req: Request, res: Response) {
        try {
            const { product_id } = req.params
            const deleteProduct = await deleteProductByIdDetail({ product_id })

            res.status(200).send({
                status: "Success",
                msg: "Success accesing deleteProductById API",
                deleteProduct
            })
        } catch (error) {
            res.status(400).send({
                status: "Error",
                msg: error,
                res: 400
            })
        }
    }

    public async updateProductById(req: Request, res: Response) {
        try {
            const { product_id } = req.params
            const { product_name, product_category, product_quantity, product_price, input_date } = req.body

            const updateProduct = await updateProductDetailById({
                product_id,
                product_name,
                product_category,
                product_quantity,
                product_price,
                input_date
            })

            if(!updateProduct) throw `Product with id ${product_id} not found`

            res.status(200).send({
                status : "Success",
                msg : "Success accessing updateProductById API",
                updateProduct
            })
        } catch (error) {
            res.status(400).send({
                status: "Error",
                msg: error,
                res: 400
            })
        }
    }
}