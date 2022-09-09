import { User } from "../../entities/User";
import { IMailProvider } from "../../providers/IMailProvider";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { ICreateUserRequestDTO } from "./createUserDTO";

export class CreateUserUseCase {
  constructor(
    private userRepository: IUsersRepository,
    private mailProvider: IMailProvider
    ) {}

  async execute(data: ICreateUserRequestDTO) {
    const userAltereadyExists = await this.userRepository.findByEmail(
      data.email
    );

    if (userAltereadyExists) {
      throw new Error("User already exists.");
    }

    const user = new User(data);
    await this.userRepository.save(user);

    await this.mailProvider.sendMail({
      to: {
        name: data.name,
        email: data.email
      },
      from: {
        name: 'user.name',
        email: 'user.email'
      },
      subject: 'subject',
      body: 'body',
    })
  }
}
