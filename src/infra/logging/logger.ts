import { Configuration, configure, getLogger } from "log4js";

const getAppLogger = ({ config }: any) => {
  console.log(config);
  configure(config.logging);

  return getLogger();
};

export default getAppLogger
