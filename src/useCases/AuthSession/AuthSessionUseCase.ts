import AuthService from "../../services/auth";

import { UserModel } from "../../models/user";
import { IAuthSessionDTO } from "./AuthSessionDTO";

export class AuthSessionUseCase {
  async execute(data: IAuthSessionDTO) {
    const { email, password } = data;

    const user = await UserModel.findOne({ email }).select("+password");
    if (!user) throw new Error("User not found!");
    if (!(await AuthService.comparePasswords(password, user.password)))
      throw new Error("Invalid password!");
    user.password = undefined;

    const token = AuthService.generateToken({ id: user._id });

    return { ...user.toJSON(), ...{ token } };
  }
}
