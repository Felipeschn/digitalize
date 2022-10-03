import { AuthSessionController } from "./AuthSessionController";
import { AuthSessionUseCase } from "./AuthSessionUseCase";
import { AuthRepository } from "../../repositories/implementations/AuthRepository";

const authRepository = new AuthRepository();

const authSessionUseCase = new AuthSessionUseCase(authRepository);
const authSessionController = new AuthSessionController(authSessionUseCase);

export { authSessionUseCase, authSessionController };
