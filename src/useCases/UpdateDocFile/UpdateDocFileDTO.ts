import { DocType } from "../../entities/DocFile";

export interface IUpdateDocFileDTO {
  docFileId: string;
  title: string;
  docType: DocType;
  expiresAt: Date;
}
