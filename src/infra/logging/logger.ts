import { Configuration, configure, getLogger } from "log4js";

export default ({ config }: any) => {
  console.log(config);
  configure(config.logging);

  return getLogger();
};
