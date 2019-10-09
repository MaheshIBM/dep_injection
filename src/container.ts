import { asClass, asFunction, asValue, createContainer } from "awilix";
import {AppRouter} from "./http/Router";
import {Server} from "./http/Server";

import { config } from "./config";
const getLogger =  require("./infra/logging/logger").default;
import { Application } from "./app/Application";
const container = createContainer();

container.register({config: asValue(config)});
container
    .register({logger: asFunction(getLogger).singleton()});
container.register({appRouter: asClass(AppRouter).singleton()});
container.register({app: asClass(Application).singleton()});
container.register({server: asClass(Server).singleton()});
module.exports = container;
