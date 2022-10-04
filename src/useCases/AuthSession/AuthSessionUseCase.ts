import { userRepository } from "../../repositories/implementations/UserRepository";
import AuthService from "../../services/auth";
import { IAuthSessionDTO } from "./AuthSessionDTO";

export class AuthSessionUseCase {
  constructor() {}
  async execute(data: IAuthSessionDTO) {
    const { email, password } = data;

    const user = await userRepository.findOneBy({ email });
    if (!user) throw new Error("User not found!");
    if (!(await AuthService.comparePasswords(password, user.password)))
      throw new Error("Invalid password!");
    user.password = undefined;

    const token = AuthService.generateToken({ id: user.userId });

    return { ...user, ...{ token } };
  }
}
