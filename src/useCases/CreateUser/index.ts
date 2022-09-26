import { CreateUserUseCase } from "./CreateUserUseCase";
import { CreateUserController } from "./CreateUserController";
import { UsersRepository } from "../../repositories/implementations/UserRepository";

const usersRepository = new UsersRepository();

const createUserUseCase = new CreateUserUseCase(usersRepository);
const createUserController = new CreateUserController(createUserUseCase);

export { createUserUseCase, createUserController };
