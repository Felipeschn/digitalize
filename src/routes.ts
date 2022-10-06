import { Router } from "express";
import { authMiddleware } from "./middlewares/auth";
import { authSessionController } from "./useCases/AuthSession";
import { createDocFileController } from "./useCases/CreateDocFile";
import { createUserController } from "./useCases/CreateUser";
import { deleteDocFileController } from "./useCases/DeleteDocFile";
import { findDocFileController } from "./useCases/FindDocFile";
import { updateDocFileController } from "./useCases/UpdateDocFile";

const router = Router();

router.post(
  "/user/register",
  async (req, resp) => await createUserController.handle(req, resp)
);

// router.get(
//   "/user/:userId",
//   authMiddleware,
//   async (req, resp) => await createUserController.handle(req, resp)
// );

router.post(
  "/authenticate-session",
  async (req, resp) => await authSessionController.handle(req, resp)
);

router.get(
  "/user-docfile/:userId",
  authMiddleware,
  async (req, resp) => await findDocFileController.handle(req, resp)
);
router.post(
  "/docfile/:userId/create",
  authMiddleware,
  async (req, resp) => await createDocFileController.handle(req, resp)
);
router.put(
  "/docfile/:docFileId/update",
  authMiddleware,
  async (req, resp) => await updateDocFileController.handle(req, resp)
);
router.delete(
  "/docfile/:docFileId/delete",
  authMiddleware,
  async (req, resp) => await deleteDocFileController.handle(req, resp)
);

export { router };
