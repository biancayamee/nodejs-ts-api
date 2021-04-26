import { Request, Response } from "express";
import { ReadProductUseCase } from "./ReadProductUseCase";

export class ReadProductController {
  constructor(
    private readProductUseCase: ReadProductUseCase,
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      let productsList = await this.readProductUseCase.execute();
      return response.status(200).send(productsList);
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      })
    }
  }
}