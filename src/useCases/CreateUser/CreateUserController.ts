import { Request, Response } from "express";
import { CreateUserUseCase } from "../CreateUser/CreateUserUseCase";

export class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  async handle(req: Request, resp: Response): Promise<Response> {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return resp.status(422).send({ error: "There is properties missing!" });
    }
    try {
      this.createUserUseCase.execute({ name, email, password });
      return resp.status(201).send();
    } catch (err) {
      return resp.status(400).json({
        error: err.message || "Unexpected error.",
      });
    }
  }
}
