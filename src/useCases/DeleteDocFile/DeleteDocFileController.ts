import { Request, Response } from "express";
import { DeleteDocFileUseCase } from "./DeleteDocFileUseCase";

export class DeleteDocFileController {
  constructor(private deleteDocFileUseCase: DeleteDocFileUseCase) {}

  async handle(req: Request, resp: Response) {
    const { docFileId } = req.params;

    try {
      await this.deleteDocFileUseCase.execute({ docFileId });
      return resp.status(200).json({ message: "successfully deleted" });
    } catch (err) {
      return resp.status(401).json({
        error: err.message || "Unexpected error.",
      });
    }
  }
}
