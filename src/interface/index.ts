import express, { Request, Response } from "express"
import morgan from "morgan"
import helmet from 'helmet'
import cors from 'cors'
import cepRouter from "./routes/routerGetCep"

export default (() => {
  const app = express();
  app.use(cors())
  app.use(helmet())
  app.use(morgan("dev"));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  app.use("/getCep", cepRouter);
  app.use((req: Partial<Request>, res: Response) => {
    res.redirect('/getCep')
  })
  return app;
})();
