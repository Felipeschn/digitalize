import { docFileRepository } from "../../repositories/implementations/DocFileRepository";
import { UpdateDocFileController } from "./UpdateDocFileController";
import { UpdateDocFileUseCase } from "./UpdateDocFileUseCase";

const updateDocFileUseCase = new UpdateDocFileUseCase(docFileRepository);
const updateDocFileController = new UpdateDocFileController(
  updateDocFileUseCase
);

export { updateDocFileUseCase, updateDocFileController };
