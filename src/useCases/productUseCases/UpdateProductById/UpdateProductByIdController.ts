import { Request, Response } from "express";
import { updateProductByIdUseCase } from ".";
import { Product } from "../../../entities/Product";
import { UpdateProductByIdUseCase } from "./UpdateProductByIdUseCase";

export class UpdateProductByIdController {
  constructor(
    private updateProductByIdUseCase: UpdateProductByIdUseCase,
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { name, cpf, email, gender } = request.body;
      const id = request.params['id'];
      updateProductByIdUseCase.execute(id, { name, cpf, email, gender });
      return response.status(201).send('Produto atualizado com sucesso.');
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      })
    }
  }
}