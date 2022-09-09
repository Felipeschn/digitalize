import { IUsersRepository } from '../../repositories/IUsersRepository'
import { IFindUserRequestDTO } from './findUserDTO';

export class FindUserUseCase {
  constructor(
    private userRepository: IUsersRepository
  ) {}

  async execute(data: IFindUserRequestDTO) {
   return await this.userRepository.findByEmail(data.email);
  }
}