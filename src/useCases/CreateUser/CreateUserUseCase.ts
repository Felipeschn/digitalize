import { User } from "../../entities/User";
import { userRepository } from "../../repositories/implementations/UserRepository";
import AuthService from "../../services/auth";
import { ICreateUserDTO } from "./CreateUserDTO";

export class CreateUserUseCase {
  constructor() {}
  async execute(data: ICreateUserDTO) {
    const { firstName, lastName, email, password } = data;
    const emailAlreadyExists = await userRepository.findOneBy({ email });
    if (emailAlreadyExists) throw new Error("Email already exists.");

    const user = new User();
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email.toLowerCase();
    user.password = await AuthService.hashPassword(password);
    user.createdAt = new Date();

    await userRepository.save(user);
  }
}
