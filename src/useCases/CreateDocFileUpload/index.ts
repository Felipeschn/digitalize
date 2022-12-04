import { docFileRepository } from "../../repositories/implementations/DocFileRepository";
import { CreateDocFileUseCase } from "../CreateDocFile/CreateDocFileUseCase";
import { CreateDocFileUploadController } from "./CreateDocFileUploadController";

const createDocFileUploadUseCase = new CreateDocFileUseCase(docFileRepository);
const createDocFileUploadController = new CreateDocFileUploadController(
  createDocFileUploadUseCase
);

export { createDocFileUploadController };
