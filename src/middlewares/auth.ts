import { NextFunction, Request, Response } from "express";
import AuthService from "../services/auth";

export function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
): Response {
  const authHeader = req.headers.authorization;
  const parts = authHeader.split(" ");

  if (!authHeader) return res.status(401).send({ error: "No token provided" });
  if (!(parts.length === 2))
    return res.status(401).send({ error: "Token error" });

  const [schema, token] = parts;

  if (!/^Bearer$/i.test(schema))
    return res.status(401).send({ error: "Token malformatted" });
  try {
    AuthService.decodeToken(token);
  } catch (error) {
    return res.status(401).send({ error: error.message });
  }
  next();
}
