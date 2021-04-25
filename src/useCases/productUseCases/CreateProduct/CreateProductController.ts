import { Request, Response } from "express";
import { CreateProductUseCase } from "./CreateProductUseCase";

export class CreateProductController {
  constructor(
    private createProductUseCase: CreateProductUseCase,
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, cpf, email, gender } = request.body;

    try {
      await this.createProductUseCase.execute({
        name,
        cpf,
        email,
        gender
      })

      return response.status(201).send('Produto criado com sucesso');
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      })
    }
  }
}