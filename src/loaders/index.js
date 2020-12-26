import connectDatabase from "./database";
import loadExpressApp from "./express";

export default async (app) => {
  await connectDatabase();
  loadExpressApp(app);
};