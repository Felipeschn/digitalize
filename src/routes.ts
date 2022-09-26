import { Router } from "express";
import { createUserController } from "./useCases/CreateUser";

const router = Router();

router.post(
  "/register",
  async (req, resp) => await createUserController.handle(req, resp)
);

export { router };
