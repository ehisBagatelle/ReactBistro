import { LogBox } from "react-native";
import { config } from "./config";

module.exports = config.USE_COSMOS
  ? require('./App.cosmos')
  : require('./App.main');

LogBox.ignoreLogs(["Sending `onAnimatedValueUpdate` with no listeners registered."]);