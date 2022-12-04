import { FindDocFileUseCase } from "./FindDocFileUseCase";
import { Request, Response } from "express";
import { DocType } from "../../entities/DocFile";

export class FindDocFileController {
  constructor(private findDocFileUseCase: FindDocFileUseCase) {}

  async handle(req: Request, resp: Response): Promise<Response> {
    const { userId } = req.params;
    const docType = req.query.docType as DocType;

    try {
      const response = await this.findDocFileUseCase.execute({
        userId,
        docType,
      });
      //gambi exclude response user relation
      response.map((e) => {
        delete e.user;
        return e;
      });
      //
      return resp.status(200).json(response);
    } catch (err) {
      return resp.status(401).json({
        error: err.message || "Unexpected error.",
      });
    }
  }
}
