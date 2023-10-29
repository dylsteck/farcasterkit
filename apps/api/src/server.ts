import { json, urlencoded } from "body-parser";
import express from "express";
import morgan from "morgan";
import cors from "cors";

import { CastsRouter } from "./modules/casts/controller";
import { UsersRouter } from "modules/users/controller";

export const createServer = () => {
  const app = express();
  app
    .disable("x-powered-by")
    .use(morgan("dev"))
    .use(urlencoded({ extended: true }))
    .use(json())
    .use(cors())
    // .get("/message/:name", (req, res) => {
    //   return res.json({ message: `hello ${req.params.name}` });
    // })
    .use(CastsRouter)
    .use(UsersRouter);

  return app;
};
