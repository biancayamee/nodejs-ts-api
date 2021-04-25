
import { PostgresProductsRepository } from "../../../repositories/implementations/PostgresProductsRepository";
import { ReadProductController } from "./ReadProductController";
import { ReadProductUseCase } from "./ReadProductUseCase";

const postgresProductsRepository = new PostgresProductsRepository();

const readProductUseCase = new ReadProductUseCase(
    postgresProductsRepository
);

const readProductController = new ReadProductController(
    readProductUseCase
);

export { readProductUseCase, readProductController }