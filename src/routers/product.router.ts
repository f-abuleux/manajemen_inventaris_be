import { Router } from "express";
import { ProductController } from "../controllers/product.controller";

export class ProductRouter{
    private router : Router;
    private productController : ProductController;

    constructor (){
        this.productController = new ProductController();
        this.router = Router()
        this.initializeRoutes();
    }

    private initializeRoutes(): void {
        this.router.get("/", this.productController.getProduct)
        this.router.post("/create", this.productController.createProduct)
        this.router.patch(`/update/:product_id`, this.productController.updateProductById)
        this.router.delete(`/delete/:product_id`, this.productController.deleteProductById)
    }

    getRouter(): Router {
        return this.router;
    }
}