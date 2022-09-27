import { Router } from "express";
import { authMiddleware } from "./middlewares/auth";
import { authSessionController } from "./useCases/AuthSession";
import { createUserController } from "./useCases/CreateUser";

const router = Router();

router.post(
  "/register",
  async (req, resp) => await createUserController.handle(req, resp)
);

router.post(
  "/authenticate",
  async (req, resp) => await authSessionController.handle(req, resp)
);

router.get("/test", authMiddleware, async (req, res) => {
  res.send({
    ok: true,
  });
});

export { router };
