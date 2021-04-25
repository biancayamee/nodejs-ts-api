
import { PostgresProductsRepository } from "../../../repositories/implementations/PostgresProductsRepository";
import { UpdateProductByIdController } from "./UpdateProductByIdController";
import { UpdateProductByIdUseCase } from "./UpdateProductByIdUseCase";

const postgresProductsRepository = new PostgresProductsRepository();

const updateProductByIdUseCase = new UpdateProductByIdUseCase(
    postgresProductsRepository
);

const updateProductByIdController = new UpdateProductByIdController(
    updateProductByIdUseCase
);

export { updateProductByIdUseCase, updateProductByIdController }