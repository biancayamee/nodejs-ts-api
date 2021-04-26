

import { Product } from "../../entities/Product";
import { IProductsRepository } from "../IProductsRepository";

export class PostgresProductsRepository implements IProductsRepository {
  private static Products: Product[] = [];

  async save(product: Product): Promise<void> {
    PostgresProductsRepository.Products.push(product);
  }

  async get(): Promise<Product[]> {
    return PostgresProductsRepository.Products;
  }
  async getById(productId: string): Promise<Product> {
    let productById: Product = PostgresProductsRepository.Products.find((product) => product.id === productId);
    return productById;
  }

  async updateById(productId: string, newProductValue: Product): Promise<void> {
    let productIndex: number = PostgresProductsRepository.Products.findIndex((product) => product.id === productId);
    Object.assign(PostgresProductsRepository.Products[productIndex], newProductValue)
  }

  async deleteById(productId: string) {
    let productIndex: number = PostgresProductsRepository.Products.findIndex((product) => product.id === productId);
    PostgresProductsRepository.Products.splice(productIndex, 1);
  }
}