import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Tasky API v1");
});

app.listen(port, () => {
  console.log(`Server running at ${process.env.PORT}`);
});
