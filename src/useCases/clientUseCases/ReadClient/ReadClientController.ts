import { Request, Response } from "express";
import { ReadClientUseCase } from "./ReadClientUseCase";

export class ReadClientController {
  constructor(
    private readClientUseCase: ReadClientUseCase,
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      let clientsList = await this.readClientUseCase.execute();
      return response.status(201).send(clientsList);
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      })
    }
  }
}