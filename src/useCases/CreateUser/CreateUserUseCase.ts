import { User } from "../../entities/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { ICreateUserDTO } from "./CreateUserDTO";

export class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}
  async execute(data: ICreateUserDTO) {
    const { email } = data;
    const emailAlreadyExists = await this.usersRepository.findByEmail(email);

    if (emailAlreadyExists) {
      throw Error("Email already exists.");
    }

    const user = new User(data);

    await this.usersRepository.save(user);
  }
}
