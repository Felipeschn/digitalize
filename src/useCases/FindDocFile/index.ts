import { FindDocFileController } from "./FindDocFileController";
import { FindDocFileUseCase } from "./FindDocFileUseCase";
import { docFileRepository } from "../../repositories/implementations/DocFileRepository";
import { userRepository } from "../../repositories/implementations/UserRepository";

const findDocFileUseCase = new FindDocFileUseCase(
  docFileRepository,
  userRepository
);
const findDocFileController = new FindDocFileController(findDocFileUseCase);

export { findDocFileUseCase, findDocFileController };
