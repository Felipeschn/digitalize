import { DocType } from "../../entities/DocFile";

export interface ICreateDocFileDTO {
  userId: string;
  title: string;
  description: string;
  docType: DocType;
  bucketUrl: string | null;
  expiresAt: Date;
}
