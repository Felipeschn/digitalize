import { Router } from "express";

const router = Router();

router.get("/register", (req, resp) => {
  const { email, password } = req.body;
});

export { router };
