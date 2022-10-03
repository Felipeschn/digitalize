import { User } from "../../entities/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import AuthService from "../../services/auth";
import { ICreateUserDTO } from "./CreateUserDTO";

export class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}
  async execute(data: ICreateUserDTO) {
    const { firstName, lastName, email, password } = data;
    const emailAlreadyExists = await this.usersRepository.findByEmail(email);
    console.log(emailAlreadyExists);

    if (emailAlreadyExists) throw new Error("Email already exists.");

    const user = new User();
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email.toLowerCase();
    user.password = await AuthService.hashPassword(password);

    await this.usersRepository.save(user);
  }
}
