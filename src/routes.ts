import { Router } from "express";
import { createUserController } from "./useCases/CreateUser";
import { findUserController } from "./useCases/FindUser";

const router = Router();

router.post("/users", (req, resp) => {
  return createUserController.handle(req, resp);
});

router.get("/users/:email", (req, resp) => {
  return findUserController.handle(req, resp);
});

router.get("/abc", (req, res) => res.send("test"));

export { router };
