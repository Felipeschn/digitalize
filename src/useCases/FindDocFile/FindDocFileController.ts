import { FindDocFileUseCase } from "./FindDocFileUseCase";
import { Request, Response } from "express";

export class FindDocFileController {
  constructor(private findDocFileUseCase: FindDocFileUseCase) {}

  async handle(req: Request, resp: Response): Promise<Response> {
    const { userId } = req.params;

    try {
      const response = await this.findDocFileUseCase.execute({ userId });
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
