import { Request, Response, Router } from "express";
import utilResponse from "../utils/Response";
import Error from "../utils/Error";
const router = Router();

router.get("/", async (req: Request, res: Response) => {
  try {
    utilResponse(res, "Hey :)", 200);
  } catch (error) {
    Error(res, error, 400);
  }
});

export default router;
