import { Request, Response } from "express";
import { FindUserUseCase } from "./FindUserUseCase";

export class FindUserController {
  constructor(private findUserUseCase: FindUserUseCase) {}

  async handle(req: Request, resp: Response): Promise<Response> {
    const { userId } = req.params;
    if (!userId)
      return resp.status(422).send({ error: "There is properties missing!" });

    try {
      const response = await this.findUserUseCase.execute({
        userId,
      });

      return resp.status(200).send(response);
    } catch (err) {
      return resp.status(401).json({
        error: err.message || "Unexpected error.",
      });
    }
  }
}
