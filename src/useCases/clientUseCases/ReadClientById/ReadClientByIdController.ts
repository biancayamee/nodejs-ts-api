import { Request, Response } from "express";
import { ReadClientByIdUseCase } from "./ReadClientByIdUseCase";

export class ReadClientByIdController {
  constructor(
    private readClientByIdUseCase: ReadClientByIdUseCase,
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      let client = await this.readClientByIdUseCase.execute(request.params['id']);
      return response.status(201).send(client);
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      })
    }
  }
}