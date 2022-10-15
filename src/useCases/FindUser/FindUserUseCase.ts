import { Repository } from "typeorm";
import { User } from "../../entities/User";

import AuthService from "../../services/auth";
import { IFindUserDTO } from "./FindUserDTO";

export class FindUserUseCase {
  constructor(private userRepository: Repository<User>) {}
  async execute(data: IFindUserDTO) {
    const { userId } = data;

    const user = await this.userRepository.findOne({
      relations: {
        documents: true,
      },
      where: { userId },
    });
    if (!user) throw new Error("User not found!");
    user.password = undefined;

    return { ...user };
  }
}
