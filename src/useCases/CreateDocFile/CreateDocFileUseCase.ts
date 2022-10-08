import { Repository } from "typeorm/repository/Repository";
import { DocFile } from "../../entities/DocFile";
import { userRepository } from "../../repositories/implementations/UserRepository";
import { ICreateDocFileDTO } from "./CreateDocFileDTO";

export class CreateDocFileUseCase {
  constructor(private docFileRepository: Repository<DocFile>) {}

  async execute(data: ICreateDocFileDTO): Promise<void> {
    const { userId, title, docType, expiresAt } = data;

    const user = await userRepository.findOneBy({ userId });
    if (!user) throw new Error("User not found!");

    const dateExpiresAt = new Date(expiresAt).getTime();
    if (dateExpiresAt > new Date().getTime())
      throw new Error("expiresAt cannot be less than the current date!");

    const docFile = new DocFile();
    docFile.title = title;
    docFile.docType = docType;
    docFile.bucketUrl = "TO DO";
    docFile.user = user;
    docFile.expiresAt = new Date(expiresAt);
    docFile.createdAt = new Date();

    await this.docFileRepository.save(docFile);
  }
}
