import { Repository } from "typeorm/repository/Repository";
import { DocFile } from "../../entities/DocFile";
import { userRepository } from "../../repositories/implementations/UserRepository";
import { ICreateDocFileDTO } from "./CreateDocFileDTO";

export class CreateDocFileUseCase {
  constructor(private docFileRepository: Repository<DocFile>) {}

  async execute(data: ICreateDocFileDTO): Promise<void> {
    const {
      userId,
      title,
      description,
      docType,
      bucketUrl = null,
      expiresAt,
    } = data;

    const user = await userRepository.findOneBy({ userId });
    if (!user) throw new Error("User not found!");

    if (expiresAt) {
      const dateExpiresAt = new Date(expiresAt).getTime();
      if (dateExpiresAt > new Date().getTime())
        throw new Error("expiresAt cannot be less than the current date!");
    }

    const docFile = new DocFile();
    docFile.title = title;
    docFile.description = description;
    docFile.docType = docType;
    docFile.bucketUrl = bucketUrl;
    docFile.user = user;
    docFile.expiresAt = expiresAt ? new Date(expiresAt) : null;
    docFile.createdAt = new Date();

    await this.docFileRepository.save(docFile);
  }
}
