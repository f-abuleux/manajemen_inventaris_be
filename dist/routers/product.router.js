"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRouter = void 0;
const express_1 = require("express");
const product_controller_1 = require("../controllers/product.controller");
class ProductRouter {
    constructor() {
        this.productController = new product_controller_1.ProductController();
        this.router = (0, express_1.Router)();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get("/", this.productController.getProduct);
        this.router.post("/create", this.productController.createProduct);
        this.router.patch(`/update/:product_id`, this.productController.updateProductById);
        this.router.delete(`/delete/:product_id`, this.productController.deleteProductById);
    }
    getRouter() {
        return this.router;
    }
}
exports.ProductRouter = ProductRouter;
