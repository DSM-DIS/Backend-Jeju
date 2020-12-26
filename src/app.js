import express from "express";
import * as config from "./configs";
import initApp from "./loaders";

const app = express();
initApp(app);

app.listen(config.port, () => {
  console.log(`Server listing at ${config.port}`);
});