import { Repository } from "typeorm";
import { User } from "../../entities/User";

import AuthService from "../../services/auth";
import { IFindUserDTO } from "./FindUserDTO";

export class FindUserUseCase {
  constructor(private userRepository: Repository<User>) {}
  async execute(data: IFindUserDTO) {
    const { email, password } = data;

    const user = await this.userRepository.findOne({
      relations: {
        documents: true,
      },
      where: [{ email }],
    });
    if (!user) throw new Error("User not found!");
    if (!(await AuthService.comparePasswords(password, user.password)))
      throw new Error("Invalid password!");
    user.password = undefined;

    return { ...user };
  }
}
