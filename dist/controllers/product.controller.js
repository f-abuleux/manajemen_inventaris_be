"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const client_1 = require("@prisma/client");
const product_service_1 = require("@/services/product.service");
class ProductController {
    getProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const prisma = new client_1.PrismaClient();
            try {
                const findProduct = yield prisma.product.findMany();
                res.status(200).send({
                    status: "Success",
                    msg: "Success accesing findProduct API",
                    findProduct
                });
            }
            catch (error) {
                res.status(400).send({
                    status: "Error",
                    msg: error,
                    res: 400
                });
            }
        });
    }
    createProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { product_name, product_category, product_quantity, product_price, input_date } = req.body;
                const createProduct = yield (0, product_service_1.createProductDetail)({ product_name, product_price, product_quantity, product_category, input_date });
                res.status(201).send({
                    status: "Succes",
                    msg: "Success accessing createProductAPI",
                    createProduct
                });
            }
            catch (error) {
                res.status(400).send({
                    status: "Error",
                    msg: error,
                    res: 400
                });
            }
        });
    }
    deleteProductById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { product_id } = req.params;
                const deleteProduct = yield (0, product_service_1.deleteProductByIdDetail)({ product_id });
                res.status(200).send({
                    status: "Success",
                    msg: "Success accesing deleteProductById API",
                    deleteProduct
                });
            }
            catch (error) {
                res.status(400).send({
                    status: "Error",
                    msg: error,
                    res: 400
                });
            }
        });
    }
    updateProductById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { product_id } = req.params;
                const { product_name, product_category, product_quantity, product_price, input_date } = req.body;
                const updateProduct = yield (0, product_service_1.updateProductDetailById)({
                    product_id,
                    product_name,
                    product_category,
                    product_quantity,
                    product_price,
                    input_date
                });
                if (!updateProduct)
                    throw `Product with id ${product_id} not found`;
                res.status(200).send({
                    status: "Success",
                    msg: "Success accessing updateProductById API",
                    updateProduct
                });
            }
            catch (error) {
                res.status(400).send({
                    status: "Error",
                    msg: error,
                    res: 400
                });
            }
        });
    }
}
exports.ProductController = ProductController;
