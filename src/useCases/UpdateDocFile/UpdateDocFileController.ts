import { Request, Response } from "express";
import { UpdateDocFileUseCase } from "./UpdateDocFileUseCase";

export class UpdateDocFileController {
  constructor(private updateDocFileUseCase: UpdateDocFileUseCase) {}
  async handle(req: Request, resp: Response): Promise<Response> {
    const { docFileId } = req.params;
    const { title, description = "", expiresAt = null } = req.body;

    if (!title)
      return resp.status(422).send({ error: "There is properties missing!" });

    try {
      await this.updateDocFileUseCase.execute({
        docFileId,
        title,
        description,
        expiresAt,
      });
      return resp.status(200).send({ message: "Successfully updated!" });
    } catch (err) {
      return resp.status(401).json({
        error: err.message || "Unexpected error.",
      });
    }
  }
}
