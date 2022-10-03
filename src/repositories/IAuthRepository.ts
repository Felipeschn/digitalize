import { User } from "../entities/User";

export interface IAuthRepository {
  findUserByEmail(email: string): Promise<User>;
}
