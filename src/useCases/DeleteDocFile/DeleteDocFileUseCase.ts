import { Repository } from "typeorm";
import { DocFile } from "../../entities/DocFile";
import { IDeleteDocFileDTO } from "./DeleteDocFileDTO";
import aws from "aws-sdk";

export class DeleteDocFileUseCase {
  constructor(private docFileRepository: Repository<DocFile>) {}

  async execute(data: IDeleteDocFileDTO): Promise<void> {
    const { docFileId } = data;

    const docFileExists = await this.docFileRepository.findOneBy({
      docFileId,
    });

    if (!docFileExists) throw new Error("DocFile not found!");

    if (docFileExists.bucketUrl.includes("https://")) {
      const s3 = new aws.S3();

      s3.deleteObject(
        {
          Bucket: process.env.BUCKET_NAME,
          Key: docFileExists.bucketUrl.split("/")[3],
        },
        function (err, data) {
          if (err) {
            console.log(err);
            throw new Error("Error delete S3 Object");
          } else {
            console.log(data);
          }
        }
      );
    }

    await this.docFileRepository
      .createQueryBuilder()
      .delete()
      .from(DocFile)
      .where("docFileId = :docFileId", { docFileId })
      .execute();
  }
}
