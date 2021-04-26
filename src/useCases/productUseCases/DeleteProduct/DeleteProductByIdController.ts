import { Request, Response } from "express";
import { DeleteProductByIdUseCase } from "./DeleteProductByIdUseCase";

export class DeleteProductByIdController {
  constructor(
    private deleteProductByIdUseCase: DeleteProductByIdUseCase,
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      await this.deleteProductByIdUseCase.execute(request.params['id']);
      return response.status(200).send({message: 'Produto deletado com sucesso.'});
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      })
    }
  }
}