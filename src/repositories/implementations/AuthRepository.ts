import { User } from "../../entities/User";

import { AppDataSource } from "../../server";
import { IAuthRepository } from "../IAuthRepository";

export class AuthRepository implements IAuthRepository {
  async findUserByEmail(email: string): Promise<User> {
    return await AppDataSource.manager.findOneBy(User, { email });
  }
}
