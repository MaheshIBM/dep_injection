import { asClass, asFunction, asValue, createContainer } from "awilix";
import {AppRouter} from "./http/Router";
import {Server} from "./http/Server";

import { Application } from "./app/Application";
import { config } from "./config";
import getAppLogger from "./infra/logging/logger";
const container = createContainer();

container.register({config: asValue(config)});
container
    .register({logger: asFunction(getAppLogger).singleton()});
container.register({appRouter: asClass(AppRouter).singleton()});
container.register({app: asClass(Application).singleton()});
container.register({server: asClass(Server).singleton()});
export default container;
