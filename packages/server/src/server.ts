import "dotenv/config";
import startApi from "./shared/infrastructure/ExpressStarter";

const startServer = () => {
  const port = process.env.PORT;
  const app = startApi();

  return app.listen(port, () => console.log("Port server:", port));
};

const server = startServer();

export { server };
