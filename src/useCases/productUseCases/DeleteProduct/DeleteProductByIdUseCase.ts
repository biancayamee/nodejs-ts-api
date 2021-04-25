import { PostgresProductsRepository } from "../../../repositories/implementations/PostgresProductsRepository";

export class DeleteProductByIdUseCase {
    constructor(private postgresProductsRepository: PostgresProductsRepository) {

    }
    async execute(id: string) {
        return await this.postgresProductsRepository.deleteById(id);
    }
}