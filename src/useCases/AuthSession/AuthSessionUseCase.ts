import { Repository } from "typeorm";
import { User } from "../../entities/User";

import AuthService from "../../services/auth";
import { IAuthSessionDTO } from "./AuthSessionDTO";

export class AuthSessionUseCase {
  constructor(private userRepository: Repository<User>) {}
  async execute(data: IAuthSessionDTO) {
    const { email, password } = data;

    const user = await this.userRepository.findOneBy({ email });
    if (!user) throw new Error("User not found!");
    if (!(await AuthService.comparePasswords(password, user.password)))
      throw new Error("Invalid password!");
    user.password = undefined;

    return {
      userId: user.userId,
      token: AuthService.generateToken({ id: user.userId }),
    };
  }
}
