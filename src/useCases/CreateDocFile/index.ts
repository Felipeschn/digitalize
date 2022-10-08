import { docFileRepository } from "../../repositories/implementations/DocFileRepository";
import { CreateDocFileController } from "./CreateDocFileController";
import { CreateDocFileUseCase } from "./CreateDocFileUseCase";

const createDocFileUseCase = new CreateDocFileUseCase(docFileRepository);
const createDocFileController = new CreateDocFileController(
  createDocFileUseCase
);

export { createDocFileUseCase, createDocFileController };
