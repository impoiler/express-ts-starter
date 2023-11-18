import express, { Application, Request, Response } from "express";
import * as dotenv from "dotenv";
import prisma from "./db/connect";
import userRoutes from "./routes/start";

const app: Application = express();
dotenv.config();
app.use(express.json());

prisma.$connect().then(() => {
  console.log("DB connection established");
});

app.use("/", userRoutes);

app.use("/", (_req: Request, res: Response) => {
  res
    .status(404)
    .json({ staus: "failed", message: "This URL is not found on this server" });
});

export default app;
