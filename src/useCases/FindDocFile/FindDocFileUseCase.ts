import { Repository } from "typeorm";
import { DocFile } from "../../entities/DocFile";
import { User } from "../../entities/User";
import { IFindDocFileDTO } from "./FindDocFileDTO";

export class FindDocFileUseCase {
  constructor(
    private docFileRepository: Repository<DocFile>,
    private userRepository: Repository<User>
  ) {}
  async execute(data: IFindDocFileDTO): Promise<DocFile[]> {
    const { userId } = data;

    const userExists = await this.userRepository.findOneBy({ userId });
    if (!userExists) throw new Error("User not found");

    return await this.docFileRepository.find({
      relations: { user: true },
      where: {
        user: {
          userId,
        },
      },
    });
  }
}
