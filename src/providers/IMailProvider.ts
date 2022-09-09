interface IAddress {
  name: string;
  email: string;
}

export interface Imessage{
  to: IAddress;
  from: IAddress;
  subject: string;
  body: string;
}
export interface IMailProvider {
  sendMail(message: Imessage): Promise<void>;
}