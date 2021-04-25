
import { PostgresProductsRepository } from "../../../repositories/implementations/PostgresProductsRepository";
import { DeleteProductByIdController } from "./DeleteProductByIdController";
import { DeleteProductByIdUseCase } from "./DeleteProductByIdUseCase";

const postgresProductsRepository = new PostgresProductsRepository();

const deleteProductByIdUseCase = new DeleteProductByIdUseCase(
    postgresProductsRepository
);

const deleteProductByIdController = new DeleteProductByIdController(
    deleteProductByIdUseCase
);

export { deleteProductByIdUseCase, deleteProductByIdController }