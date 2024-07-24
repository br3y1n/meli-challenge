import "dotenv/config";
import startApi from "./shared/infrastructure/ExpressStarter";
import { logger } from "./shared/infrastructure/WinstonLogger";

const startServer = () => {
  const port = process.env.PORT;
  const app = startApi();

  return app.listen(port, () => {
    logger.info(`Port server: ${port}`);
  });
};

const server = startServer();

export { server };
