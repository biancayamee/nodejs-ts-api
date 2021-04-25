import { Product } from "../../../entities/Product";
import { PostgresProductsRepository } from "../../../repositories/implementations/PostgresProductsRepository";
import { IUpdateProductByIdRequestDTO } from "./UpdateProductByIdDTO";

export class UpdateProductByIdUseCase {
    constructor(private postgresProductsRepository: PostgresProductsRepository) {

    }
    async execute(id: string, data: IUpdateProductByIdRequestDTO) {
        let newProductValue = new Product(data);
        return await this.postgresProductsRepository.updateById(id, newProductValue);
    }
}