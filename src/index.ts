import { Application } from "./app/Application";
import container from "./container";
const app: Application = container.resolve("app");

app
  .start()
  .catch((error) => {
    app.logger.error(error.stack);
    process.exit();
  });
