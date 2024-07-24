import { NativeModules, Platform, Dimensions } from "react-native";
const { StatusBarManager } = NativeModules;
import Constants from "expo-constants";
const statusBarHeight = Constants.statusBarHeight;

const STATUSBAR_HEIGHT =
  Platform.OS === "ios" ? statusBarHeight : StatusBarManager.HEIGHT;
const SCREENHEIGHT = Dimensions.get("window").height;
const WINDOWWIDTH = Dimensions.get("window").width;
const SCREENWIDTH = Dimensions.get("screen").width;

export { STATUSBAR_HEIGHT, SCREENHEIGHT, WINDOWWIDTH, SCREENWIDTH };
