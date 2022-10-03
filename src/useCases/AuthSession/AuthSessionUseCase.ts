import { IAuthRepository } from "../../repositories/IAuthRepository";
import AuthService from "../../services/auth";
import { IAuthSessionDTO } from "./AuthSessionDTO";

export class AuthSessionUseCase {
  constructor(private authRepository: IAuthRepository) {}
  async execute(data: IAuthSessionDTO) {
    const { email, password } = data;

    const user = await this.authRepository.findUserByEmail(email);
    if (!user) throw new Error("User not found!");
    if (!(await AuthService.comparePasswords(password, user.password)))
      throw new Error("Invalid password!");
    user.password = undefined;

    const token = AuthService.generateToken({ id: user.userId });

    return { ...user, ...{ token } };
  }
}
