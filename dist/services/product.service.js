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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProductDetailById = exports.deleteProductByIdDetail = exports.createProductDetail = void 0;
const prisma_1 = __importDefault(require("@/prisma"));
const createProductDetail = (_a) => __awaiter(void 0, [_a], void 0, function* ({ product_name, product_category, product_quantity, product_price, input_date, }) {
    try {
        const findProduct = yield prisma_1.default.product.findFirst({
            where: {
                product_name
            }
        });
        if (findProduct)
            throw "Product already on list";
        const createProduct = yield prisma_1.default.product.create({
            data: {
                product_name,
                product_category,
                product_quantity,
                product_price,
                input_date: `${input_date}T00:00:00.000Z`,
            }
        });
        return { createProduct };
    }
    catch (error) {
        throw error;
    }
});
exports.createProductDetail = createProductDetail;
const deleteProductByIdDetail = (_a) => __awaiter(void 0, [_a], void 0, function* ({ product_id }) {
    try {
        const deleteProductId = yield prisma_1.default.product.delete({
            where: {
                product_id: product_id
            }
        });
        return { deleteProductId };
    }
    catch (error) {
        throw error;
    }
});
exports.deleteProductByIdDetail = deleteProductByIdDetail;
const updateProductDetailById = (_a) => __awaiter(void 0, [_a], void 0, function* ({ product_id, product_name, product_category, product_quantity, product_price, input_date, }) {
    try {
        const updatedProduct = yield prisma_1.default.product.update({
            where: { product_id },
            data: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, (product_name && { product_name })), (product_category && { product_category })), (product_quantity && { product_quantity })), (product_price && { product_price })), (input_date && { input_date: `${input_date}T00:00:00.000Z` })),
        });
        return updatedProduct;
    }
    catch (error) {
        throw error;
    }
});
exports.updateProductDetailById = updateProductDetailById;
