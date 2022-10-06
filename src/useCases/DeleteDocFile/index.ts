import { DeleteDocFileController } from "./DeleteDocFileController";
import { DeleteDocFileUseCase } from "./DeleteDocFileUseCase";
import { docFileRepository } from "../../repositories/implementations/DocFileRepository";

const deleteDocFileUseCase = new DeleteDocFileUseCase(docFileRepository);
const deleteDocFileController = new DeleteDocFileController(
  deleteDocFileUseCase
);

export { deleteDocFileUseCase, deleteDocFileController };
