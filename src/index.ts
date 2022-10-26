import express from "express";
import routerApi from "./routes";

// import diaries from "./routes/diaries";

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());

app.get("/", (_req: express.Request, res: express.Response) => {
  res.status(200).send("API con Express y TypeScript 😎");
});

// app.use("/api/diaries", diaries);

routerApi(app);

app.listen(port, () => {
  /* eslint-disable */
  console.log(`Server listening on Port: ${port}`);
  /* eslint-enable */
});
