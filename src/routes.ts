import { Router, Request, Response } from "express";

const router = Router();

router.get("/route/:params", (req: Request, resp: Response) => {
  const {} = req.body;
});

export { router };
