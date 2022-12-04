import { Repository } from "typeorm";
import { DocFile } from "../../entities/DocFile";
import { IUpdateDocFileDTO } from "./UpdateDocFileDTO";

export class UpdateDocFileUseCase {
  constructor(private docFileRepository: Repository<DocFile>) {}

  async execute(data: IUpdateDocFileDTO): Promise<void> {
    const { docFileId, title, description, expiresAt } = data;
    const docFileExists = await this.docFileRepository.findOneBy({
      docFileId,
    });
    if (!docFileExists) throw new Error("DocFile not found!");

    if (expiresAt) {
      const dateExpiresAt = new Date(expiresAt).getTime();
      if (dateExpiresAt > new Date().getTime())
        throw new Error("expiresAt cannot be less than the current date!");
    }

    await this.docFileRepository
      .createQueryBuilder()
      .update(DocFile)
      .set({ title, description, expiresAt })
      .where("docFileId = :docFileId", { docFileId })
      .execute();
  }
}
