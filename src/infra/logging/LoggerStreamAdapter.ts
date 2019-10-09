const LoggerStreamAdapter = {
    toStream(logger: any) {
      return {
        write(message: any) {
          logger.info(message.slice(0, -1));
        }
      };
    }
  };

module.exports = LoggerStreamAdapter;
