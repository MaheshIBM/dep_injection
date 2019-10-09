import express from "express";
import { Logger } from "log4js";
import { AddressInfo } from "net";
import { AppRouter } from "./Router";

export class Server {
    private express = express();
    private config: any;
    private logger: Logger;
    private router: AppRouter;

  constructor({ config, logger, appRouter}) {
    this.config = config;
    this.logger = logger;
    this.express.disable("x-powered-by");
    this.express.use(appRouter.getRouter());
  }

  public start() {
    return new Promise((resolve) => {
      const http = this.express
        .listen(this.config.web.port, () => {

          if ( http.address() as AddressInfo) {
            const { port } = http.address() as AddressInfo;
            this.logger.info(port);
            this.logger.info(`[p ${process.pid}] Listening at port \
            ${port} http://localhost:${ port }`);
            resolve();
          }
        });
    });
  }
}
