import { Request, Response } from "express";
import { updateClientByIdUseCase } from ".";
import { Client } from "../../../entities/Client";
import { UpdateClientByIdUseCase } from "./UpdateClientByIdUseCase";

export class UpdateClientByIdController {
  constructor(
    private updateClientByIdUseCase: UpdateClientByIdUseCase,
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { name, cpf, email, gender } = request.body;
      const id = request.params['id'];
      updateClientByIdUseCase.execute(id, { name, cpf, email, gender });
      return response.status(201).send('Cliente atualizado com sucesso.');
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      })
    }
  }
}