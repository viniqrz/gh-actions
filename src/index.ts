import Express, { NextFunction, Request, Response } from "express";
import "dotenv/config";

const app = Express();

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({ message: "hello world" });
});

app.listen(process.env.PORT, () =>
  console.log("Server running at PORT " + process.env.PORT)
);
