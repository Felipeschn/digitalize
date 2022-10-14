import { userRepository } from "../../repositories/implementations/UserRepository";
import { FindUserController } from "./FindUserController";
import { FindUserUseCase } from "./FindUserUseCase";

const findUserUseCase = new FindUserUseCase(userRepository);
const findUserController = new FindUserController(findUserUseCase);

export { findUserUseCase, findUserController };
