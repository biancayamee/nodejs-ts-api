import { IProductsRepository } from "../../../repositories/IProductsRepository";
import { ICreateProductRequestDTO } from "./CreateProductDTO";
import { Product } from '../../../entities/Product';

export class CreateProductUseCase {
    constructor(private productsRepository: IProductsRepository) {
    }
    async execute(data: ICreateProductRequestDTO) {
        const product = new Product(data);
        await this.productsRepository.save(product);
    }
}