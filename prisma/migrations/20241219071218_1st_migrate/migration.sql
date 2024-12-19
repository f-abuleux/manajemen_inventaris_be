-- CreateEnum
CREATE TYPE "ProductCategory" AS ENUM ('Elektronik', 'Pakaian', 'Makanan', 'Lainnya');

-- CreateTable
CREATE TABLE "Product" (
    "product_id" TEXT NOT NULL,
    "product_name" TEXT NOT NULL,
    "product_category" "ProductCategory" NOT NULL,
    "product_quantity" INTEGER NOT NULL,
    "product_price" INTEGER NOT NULL,
    "input_date" TIMESTAMP(3) NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Product_product_id_key" ON "Product"("product_id");
