import { CreateDocFileController } from "./CreateDocFileController";
import { CreateDocFileUseCase } from "./CreateDocFileUseCase";

const createDocFileUseCase = new CreateDocFileUseCase();
const createDocFileController = new CreateDocFileController(
  createDocFileUseCase
);

export { createDocFileUseCase, createDocFileController };
