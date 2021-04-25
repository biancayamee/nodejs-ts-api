

import { Product } from "../../entities/Product";
import { IProductsRepository } from "../IProductsRepository";

export class PostgresProductsRepository implements IProductsRepository {
  private static Products: Product[] = [];

  async save(client: Product): Promise<void> {
    PostgresProductsRepository.Products.push(client);
  }

  async get(): Promise<Product[]> {
    return PostgresProductsRepository.Products;
  }
  async getById(clientId: string): Promise<Product> {
    let clientById: Product = PostgresProductsRepository.Products.find((client) => client.id === clientId);
    return clientById;
  }

  async updateById(clientId: string, newProductValue: Product): Promise<void> {
    let clientIndex: number = PostgresProductsRepository.Products.findIndex((client) => client.id === clientId);
    Object.assign(PostgresProductsRepository.Products[clientIndex], newProductValue)
  }

  async deleteById(clientId: string) {
    let clientIndex: number = PostgresProductsRepository.Products.findIndex((client) => client.id === clientId);
    PostgresProductsRepository.Products.splice(clientIndex, 1);
  }
}