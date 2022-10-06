import { Request, Response } from "express";
import { CreateUserUseCase } from "../CreateUser/CreateUserUseCase";

export class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  async handle(req: Request, resp: Response): Promise<Response> {
    const { firstName, lastName, email, password } = req.body;

    if (!firstName || !lastName || !email || !password) {
      return resp.status(422).send({ error: "There is properties missing!" });
    }
    try {
      await this.createUserUseCase.execute({
        firstName,
        lastName,
        email,
        password,
      });
      return resp.status(201).send({ message: "User successfully created" });
    } catch (err) {
      return resp.status(400).json({
        error: err.message || "Unexpected error.",
      });
    }
  }
}
