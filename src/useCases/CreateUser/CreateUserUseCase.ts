import { Repository } from "typeorm";
import { User } from "../../entities/User";
import AuthService from "../../services/auth";
import { ICreateUserDTO } from "./CreateUserDTO";

export class CreateUserUseCase {
  constructor(private userRepository: Repository<User>) {}
  async execute(data: ICreateUserDTO): Promise<void> {
    const { firstName, lastName, email, password } = data;
    const emailAlreadyExists = await this.userRepository.findOneBy({ email });
    if (emailAlreadyExists) throw new Error("Email already exists.");

    const user = new User();
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email.toLowerCase();
    user.password = await AuthService.hashPassword(password);
    user.createdAt = new Date();

    await this.userRepository.save(user);
  }
}
