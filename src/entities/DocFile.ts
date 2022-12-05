import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./User";

export enum DocType {
  DUPLICATE = "duplicate",
  RECEIPT = "receipt",
  CONTRACT = "contract",
  NOTATION = "notation",
  GENERIC = "generic",
  PASSPORT = "passport",
  DRIVER_LICENSE = "driver_license",
}

@Entity("docFiles")
export class DocFile {
  @PrimaryGeneratedColumn("uuid")
  docFileId: string;

  @Column()
  title: string;

  @Column({ length: "4090" })
  description: string;

  @Column({
    type: "enum",
    enum: DocType,
  })
  docType: DocType;

  @Column({ nullable: true })
  bucketUrl: string;

  @ManyToOne(() => User, (user) => user.documents)
  @JoinColumn({ name: "users_userId" })
  user: User;

  @CreateDateColumn({ nullable: true })
  expiresAt: Date;

  @CreateDateColumn()
  createdAt: Date;
}
