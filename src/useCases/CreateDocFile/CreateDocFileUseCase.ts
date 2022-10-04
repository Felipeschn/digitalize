import { DocFile } from "../../entities/DocFile";
import { docFileRepository } from "../../repositories/implementations/DocFileRepository";
import { userRepository } from "../../repositories/implementations/UserRepository";
import { ICreateDocFileDTO } from "./CreateDocFileDTO";

export class CreateDocFileUseCase {
  constructor() {}

  async execute(data: ICreateDocFileDTO) {
    const { userId, title, docType, expiresAt } = data;

    const user = await userRepository.findOneBy({ userId });
    if (!user) throw new Error("User not found!");

    const docFile = new DocFile();
    docFile.title = title;
    docFile.docType = docType;
    docFile.bucketUrl = "TO DO";
    docFile.user = user;
    docFile.expiresAt = expiresAt;
    docFile.createdAt = new Date();

    await docFileRepository.save(docFile);
    return docFile;
  }
}
