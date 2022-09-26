import { User } from "../../entities/User";
import { UserModel } from "../../models/user";
import { IUsersRepository } from "../IUsersRepository";

export class UsersRepository implements IUsersRepository {
  async findByEmail(email: string): Promise<User> {
    return UserModel.findOne({ email });
  }

  async save(user: User): Promise<void> {
    await UserModel.create(user);
  }
}
