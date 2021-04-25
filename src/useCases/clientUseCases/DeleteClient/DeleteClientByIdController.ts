import { Request, Response } from "express";
import { DeleteClientByIdUseCase } from "./DeleteClientByIdUseCase";

export class DeleteClientByIdController {
  constructor(
    private deleteClientByIdUseCase: DeleteClientByIdUseCase,
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      await this.deleteClientByIdUseCase.execute(request.params['id']);
      return response.status(201).send('Usuário deletado com sucesso.');
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      })
    }
  }
}