import { PostgresProductsRepository } from "../../../repositories/implementations/PostgresProductsRepository";

export class ReadProductByIdUseCase {
    constructor(private postgresProductsRepository: PostgresProductsRepository) {

    }
    async execute(id: string) {
        return await this.postgresProductsRepository.getById(id);
    }
}