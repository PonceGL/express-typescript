import express from "express";

//Routes
import diaries from "./diaries";

function routerApi(app: express.Application) {
  const router = express.Router();
  app.use("/api/v1", router);

  router.use("/diaries", diaries);
}

export default routerApi;
