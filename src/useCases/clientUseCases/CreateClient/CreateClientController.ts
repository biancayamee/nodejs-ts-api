import { Request, Response } from "express";
import { CreateClientUseCase } from "./CreateClientUseCase";

export class CreateClientController {
  constructor(
    private createClientUseCase: CreateClientUseCase,
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, cpf, email, gender } = request.body;

    try {
      await this.createClientUseCase.execute({
        name,
        cpf,
        email,
        gender
      })
  
      return response.status(200).send({message: 'Cliente criado com sucesso'});  
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      })
    }
  }
}