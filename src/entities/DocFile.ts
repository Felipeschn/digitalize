import { Column, ObjectID, ObjectIdColumn } from "typeorm";

export enum docType {
  ADMIN = "admin",
  EDITOR = "editor",
  GHOST = "ghost",
}

export class DocFile {
  @ObjectIdColumn()
  documentId: ObjectID;

  @Column()
  title: string;

  @Column({ type: "enum", enum: docType, default: 1 })
  docType: number;

  @Column()
  bucketUrl: string;

  @Column()
  expiresAt?: Date;

  @Column()
  createdAt: Date;

  constructor(props: DocFile) {
    Object.assign(this, props);
  }
}
