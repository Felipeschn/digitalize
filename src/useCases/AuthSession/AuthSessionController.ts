import { Request, Response } from "express";
import { AuthSessionUseCase } from "./AuthSessionUseCase";

export class AuthSessionController {
  constructor(private authSessionUseCase: AuthSessionUseCase) {}

  async handle(req: Request, resp: Response): Promise<Response> {
    const { email, password } = req.body;
    try {
      const response = await this.authSessionUseCase.execute({
        email,
        password,
      });

      return resp.status(200).send(response);
    } catch (err) {
      return resp.status(401).json({
        error: err.message || "Unexpected error.",
      });
    }
  }
}
