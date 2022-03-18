import express from "express"
import morgan from "morgan"
import helmet from 'helmet'

import cepRouter from "./routes/routerGetCep"

export default (() => {
  const app = express();

  app.use(helmet())
  app.use(morgan("dev"));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));


  app.use("/getCep", cepRouter);


  return app;
})();
