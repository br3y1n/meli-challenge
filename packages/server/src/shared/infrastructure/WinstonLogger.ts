import { createLogger, format, transports } from "winston";

const logger = createLogger({
  level: "info",
  format: format.combine(
    format.timestamp(),
    format.simple(),
    format.printf(
      (info) =>
        `[${info.timestamp}] [${info.level}] ${info.message}${info.data ? `\n ${JSON.stringify(info.data, undefined, 2)}` : ""}`
    )
  ),
  transports: [
    new transports.Console(),
    new transports.File({ filename: "app.log" }),
  ],
});

export { logger };
