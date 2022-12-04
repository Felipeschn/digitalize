import { Request, Response } from "express";
import { CreateDocFileUseCase } from "../CreateDocFile/CreateDocFileUseCase";

export class CreateDocFileUploadController {
  constructor(private createDocFileUseCase: CreateDocFileUseCase) {}

  async handle(req: Request, resp: Response): Promise<Response> {
    const { userId } = req.params;
    const { title, description = "", docType, expiresAt = null } = req.body;
    const { location: bucketUrl } = req.file as any;

    if (!userId || !title || !docType)
      return resp.status(422).send({ error: "There is properties missing!" });

    if (!bucketUrl)
      return resp.status(422).send({ error: "Error on creating bucketUrl!" });

    try {
      await this.createDocFileUseCase.execute({
        userId,
        title,
        description,
        docType,
        bucketUrl,
        expiresAt,
      });
      return resp.status(201).send({ message: "created successfully!" });
    } catch (err) {
      return resp.status(401).json({
        error: err.message || "Unexpected error.",
      });
    }
  }
}
