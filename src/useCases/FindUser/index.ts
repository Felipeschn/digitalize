import { PostgresUsersRepository } from "../../repositories/implementations/PostgresUsersRepository";
import { FindUserController } from "./findUserController";
import { FindUserUseCase } from "./findUserUseCase";

const postgresUsersRepository = new PostgresUsersRepository()

const findUserUseCase = new FindUserUseCase(postgresUsersRepository)

const findUserController = new FindUserController(findUserUseCase)

export { findUserController }