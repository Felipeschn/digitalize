import { Request, Response } from "express";
import { CreateUserUseCase } from "./createUserUseCase";

export class CreateUserController {
  constructor(
    private createUserUseCase: CreateUserUseCase
  ) {}

  async handle(req: Request, resp: Response): Promise<Response> {
    const { name, email, password } = req.body;
    
    try {
      await this.createUserUseCase.execute({
        name, email, password
      })
      return resp.status(201).send();
    } catch (err) {
      return resp.status(400).json({
        message: err.message || 'Unexpected error.'
      })
    }
  }
}