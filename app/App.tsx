import { config } from "./config";

module.exports = config.USE_COSMOS
  ? require('./App.cosmos')
  : require('./App.main');