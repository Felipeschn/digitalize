import { DocType } from "../../entities/DocFile";

export interface ICreateDocFileDTO {
  userId: string;
  title: string;
  docType: DocType;
  expiresAt: Date;
}
