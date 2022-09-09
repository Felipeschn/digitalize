import { Request, Response } from "express";
import { FindUserUseCase } from "./findUserUseCase";

export class FindUserController {
  constructor (
    private findUserUseCase: FindUserUseCase
  ) {}

  async handle(req: Request, resp: Response): Promise<Response> {
    const { email } = req.params;
    console.log(email);
    

    const response = await this.findUserUseCase.execute({email});
    console.log(response);
    
    return resp.json(response)
  }
}