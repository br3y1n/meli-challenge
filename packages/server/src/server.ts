import "dotenv/config";
import express from "express";

const startServer = () => {
  const app = express();
  const port = process.env.PORT;

  app.use(express.json());

  // defineRoutes(app);

  const server = app.listen(port, () => console.log("Port server:", port));

  return { app, server };
};

const { app, server } = startServer();

export { app, server };
