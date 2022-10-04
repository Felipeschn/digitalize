import { Request, Response } from "express";
import { CreateDocFileUseCase } from "./CreateDocFileUseCase";

export class CreateDocFileController {
  constructor(private createDocFileUseCase: CreateDocFileUseCase) {}

  async handle(req: Request, resp: Response): Promise<Response> {
    const { title, docType, expiresAt = null } = req.body;
    const { userId } = req.params;
    try {
      const response = await this.createDocFileUseCase.execute({
        userId,
        title,
        docType,
        expiresAt,
      });

      return resp.status(201).send(response);
    } catch (err) {
      return resp.status(401).json({
        error: err.message || "Unexpected error.",
      });
    }
  }
}
