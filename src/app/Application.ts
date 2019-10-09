import { Logger } from "log4js";
import { Server } from "../http/Server";

export class Application {
    public logger: Logger;
    public server: Server;
    constructor({server, logger}) {
        this.logger = logger;
        this.server = server;
    }

    public async start() {
        this.logger.info("Start has been called.");
        await this.server.start();
    }
}
