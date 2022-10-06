import { Repository } from "typeorm";
import { DocFile } from "../../entities/DocFile";
import { IDeleteDocFileDTO } from "./DeleteDocFileDTO";

export class DeleteDocFileUseCase {
  constructor(private docFileRepository: Repository<DocFile>) {}

  async execute(data: IDeleteDocFileDTO): Promise<void> {
    const { docFileId } = data;

    const docFileExists = await this.docFileRepository.findOneBy({
      docFileId,
    });

    if (!docFileExists) throw new Error("DocFile not found!");

    await this.docFileRepository
      .createQueryBuilder()
      .delete()
      .from(DocFile)
      .where("docFileId = :docFileId", { docFileId })
      .execute();
  }
}
