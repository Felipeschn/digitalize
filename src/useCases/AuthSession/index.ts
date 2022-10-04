import { AuthSessionController } from "./AuthSessionController";
import { AuthSessionUseCase } from "./AuthSessionUseCase";

const authSessionUseCase = new AuthSessionUseCase();
const authSessionController = new AuthSessionController(authSessionUseCase);

export { authSessionUseCase, authSessionController };
