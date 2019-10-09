export const config = {
    logging: {
      appenders:
        { cheese: { type: "console" } },
        categories:
        { default: { appenders: ["cheese"], level: "debug" } }
    },
    web: {
        port: 3000
      }
  };
