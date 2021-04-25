import { Product } from "../entities/Product";

export interface IProductsRepository {
    save(client: Product): Promise<void>
    get(): Promise<Product[]>
    getById(id: string): Promise<Product>
    updateById(clientId: string, newValue: Product): Promise<void>
}