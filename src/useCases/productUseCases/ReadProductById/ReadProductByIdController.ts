import { Request, Response } from "express";
import { ReadProductByIdUseCase } from "./ReadProductByIdUseCase";

export class ReadProductByIdController {
  constructor(
    private readProductByIdUseCase: ReadProductByIdUseCase,
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      let product = await this.readProductByIdUseCase.execute(request.params['id']);
      return response.status(200).send(product);
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      })
    }
  }
}