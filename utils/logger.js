// logger
import { createLogger, format, transports } from "winston";
const { combine, timestamp, printf, colorize } = format;

// custom log format
const customFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp} [${level}]: ${message}`;
});

// logger instance
export const logger = createLogger({
  level: "info",
  format: combine(timestamp(), customFormat),
  transports: [
    new transports.Console({
      format: combine(colorize(), customFormat),
    }),
    new transports.File({ filename: "logs/app.log" }),
  ],
});
