
import { PostgresProductsRepository } from "../../../repositories/implementations/PostgresProductsRepository";
import { ReadProductByIdController } from "./ReadProductByIdController";
import { ReadProductByIdUseCase } from "./ReadProductByIdUseCase";

const postgresProductsRepository = new PostgresProductsRepository();

const readProductByIdUseCase = new ReadProductByIdUseCase(
    postgresProductsRepository
);

const readProductByIdController = new ReadProductByIdController(
    readProductByIdUseCase
);

export { readProductByIdUseCase, readProductByIdController }