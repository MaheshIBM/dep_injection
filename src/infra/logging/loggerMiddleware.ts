import morgan from "morgan";
import { LoggerStreamAdapter } from "./LoggerStreamAdapter";

const loggerMiddleware = ({ logger }) => {
  return morgan("dev", {
    stream: LoggerStreamAdapter.toStream(logger)
  });
};

export default loggerMiddleware;
