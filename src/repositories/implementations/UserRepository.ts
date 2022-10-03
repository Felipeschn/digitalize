import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";
import { AppDataSource } from "../../server";

export class UsersRepository implements IUsersRepository {
  async findByEmail(email: string): Promise<User> {
    return AppDataSource.manager.findOneBy(User, { email });
  }

  async save(user: User): Promise<void> {
    await AppDataSource.manager.save(user);
  }
}
