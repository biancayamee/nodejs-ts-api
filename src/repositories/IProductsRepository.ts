import { Product } from "../entities/Product";

export interface IProductsRepository {
    save(product: Product): Promise<void>
    get(): Promise<Product[]>
    getById(id: string): Promise<Product>
    updateById(productId: string, newValue: Product): Promise<void>
}