import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { Provider } from "react-redux";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import {
  PlusJakartaSans_500Medium,
  PlusJakartaSans_600SemiBold,
} from "@expo-google-fonts/plus-jakarta-sans";

import "react-native-reanimated";
import { StatusBar } from "expo-status-bar";

import { useColorScheme } from "@/hooks/useColorScheme";
import store from "../store";
import { I18nManager } from "react-native";
import Splash from "../components/Splash";
import * as Updates from "expo-updates";

I18nManager.forceRTL(true);
I18nManager.allowRTL(true);

SplashScreen.preventAutoHideAsync();

async function toggleRTL() {
  I18nManager.allowRTL(true);
  I18nManager.forceRTL(true);
  await Updates.reloadAsync();
}
export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded, error] = useFonts({
    "ploni-ultra-light": require("../assets/fonts/ploni/ploniultralight.ttf"),
    "ploni-bold": require("../assets/fonts/ploni/PloniBold.ttf"),
    "ploni-semi-bold": require("../assets/fonts/ploni/PloniDBold.ttf"),
    "ploni-medium": require("../assets/fonts/ploni/PloniMedium.ttf"),
    "ploni-regular": require("../assets/fonts/ploni/PloniRegular.ttf"),
    "jakarta-medium": PlusJakartaSans_500Medium,
    "jakarta-semi-bold": PlusJakartaSans_600SemiBold,
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);
  useEffect(() => {
    if (!I18nManager.isRTL) {
      toggleRTL();
    }
  }, []);

  if (!loaded) {
    return <Splash />;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Provider store={store}>
        <GestureHandlerRootView>
          <StatusBar style="dark" />
          <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen
              name="(auth)/sign-in"
              options={{ headerShown: false }}
            />
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          </Stack>
        </GestureHandlerRootView>
      </Provider>
    </ThemeProvider>
  );
}
