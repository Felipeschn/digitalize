import bcrypt from "bcrypt";
import jwt, { JwtPayload } from "jsonwebtoken";

import authConfig from "../config/auth.json";

export default class AuthService {
  public static async hashPassword(
    password: string,
    salt = 10
  ): Promise<string> {
    return await bcrypt.hash(password, salt);
  }

  public static async comparePasswords(
    password: string,
    hashedPassword: string
  ): Promise<boolean> {
    return await bcrypt.compare(password, hashedPassword);
  }

  public static generateToken(payload: object): string {
    return jwt.sign(payload, authConfig.secret, {
      expiresIn: authConfig.expiresIn,
    });
  }

  public static decodeToken(token: string) {
    return jwt.verify(token, authConfig.secret, (err, decoded) => {
      if (err) throw new Error("Token invalid");
      const decode = decoded as JwtPayload;
      return decode.id;
    });
  }
}
