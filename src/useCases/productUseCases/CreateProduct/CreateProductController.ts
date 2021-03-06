import { Request, Response } from "express";
import { CreateProductUseCase } from "./CreateProductUseCase";

export class CreateProductController {
  constructor(
    private createProductUseCase: CreateProductUseCase,
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, manufacturing, size, price } = request.body;

    try {
      await this.createProductUseCase.execute({
        name,
        manufacturing,
        size,
        price
      })

      return response.status(200).send({message: 'Produto criado com sucesso'});
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      })
    }
  }
}