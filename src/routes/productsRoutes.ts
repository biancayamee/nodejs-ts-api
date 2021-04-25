import { Router } from "express";
import { createProductController } from "../useCases/productUseCases/CreateProduct";
import { deleteProductByIdController } from "../useCases/productUseCases/DeleteProduct";
import { readProductByIdController } from "../useCases/productUseCases/ReadProductById";
import { readProductController } from "../useCases/productUseCases/ReadProduct";
import { updateProductByIdController } from "../useCases/productUseCases/UpdateProductById";

const productsRouter = Router(
)

productsRouter.get('/products', (request, response) => {
    return readProductController.handle(request, response);
});
productsRouter.get('/products/:id', (request, response) => {
    return readProductByIdController.handle(request, response);
});

productsRouter.post('/products', (request, response) => {
    return createProductController.handle(request, response);
})

productsRouter.put('/products/:id', (request, response) => {
    return updateProductByIdController.handle(request, response);
})

productsRouter.delete('/products/:id', (request, response) => {
    return deleteProductByIdController.handle(request, response);
})

export { productsRouter }