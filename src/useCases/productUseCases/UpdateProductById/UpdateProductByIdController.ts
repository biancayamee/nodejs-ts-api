import { Request, Response } from "express";
import { updateProductByIdUseCase } from ".";
import { UpdateProductByIdUseCase } from "./UpdateProductByIdUseCase";

export class UpdateProductByIdController {
  constructor(
    private updateProductByIdUseCase: UpdateProductByIdUseCase,
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { name, manufacturing, size, price } = request.body;
      const id = request.params['id'];
      updateProductByIdUseCase.execute(id, { name, manufacturing, size, price });
      return response.status(200).send({message: 'Produto atualizado com sucesso.'});
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      })
    }
  }
}