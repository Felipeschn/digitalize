import { Repository } from "typeorm";
import { DocFile } from "../../entities/DocFile";
import { IUpdateDocFileDTO } from "./UpdateDocFileDTO";

export class UpdateDocFileUseCase {
  constructor(private docFileRepository: Repository<DocFile>) {}

  async execute(data: IUpdateDocFileDTO): Promise<void> {
    const { docFileId, title, docType, expiresAt } = data;
    const docFileExists = await this.docFileRepository.findOneBy({
      docFileId,
    });

    if (!docFileExists) throw new Error("DocFile not found!");
    await this.docFileRepository
      .createQueryBuilder()
      .update(DocFile)
      .set({ title, docType, expiresAt })
      .where("docFileId = :docFileId", { docFileId })
      .execute();
  }
}
