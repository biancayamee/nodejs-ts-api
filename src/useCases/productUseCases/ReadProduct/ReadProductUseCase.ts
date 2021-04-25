import { PostgresProductsRepository } from "../../../repositories/implementations/PostgresProductsRepository";

export class ReadProductUseCase {
    constructor(private postgresProductsRepository: PostgresProductsRepository) {

    }
    async execute() {
        return await this.postgresProductsRepository.get();
    }
}