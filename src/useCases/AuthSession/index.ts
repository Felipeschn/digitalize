import { AuthSessionController } from "./AuthSessionController";
import { AuthSessionUseCase } from "./AuthSessionUseCase";
import { userRepository } from "../../repositories/implementations/UserRepository";

const authSessionUseCase = new AuthSessionUseCase(userRepository);
const authSessionController = new AuthSessionController(authSessionUseCase);

export { authSessionUseCase, authSessionController };
