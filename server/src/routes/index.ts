import { Application } from "express";
import lawashRouter from './api/lawash.route'

class AppRouter {
  constructor(private app: Application) {}
  init() {
      this.app.get("/", (_req, res) => {
          res.send("API Running");
      });
      this.app.use("/api/lawash", lawashRouter);
  }
}

export default AppRouter;