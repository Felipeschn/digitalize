import { Request, Response } from "express";
import { CreateDocFileUseCase } from "./CreateDocFileUseCase";

export class CreateDocFileController {
  constructor(private createDocFileUseCase: CreateDocFileUseCase) {}

  async handle(req: Request, resp: Response): Promise<Response> {
    const { title, docType, expiresAt = null } = req.body;
    const { userId } = req.params;

    if (!title || !docType)
      return resp.status(422).send({ error: "There is properties missing!" });

    try {
      await this.createDocFileUseCase.execute({
        userId,
        title,
        docType,
        expiresAt,
      });
      return resp
        .status(201)
        .send({ message: "DocFile created successfully!" });
    } catch (err) {
      return resp.status(401).json({
        error: err.message || "Unexpected error.",
      });
    }
  }
}
