import { View } from "react-native";
import { Fragment, useCallback } from "react";

import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import RootApp from "./app/RootApp";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnBoarding1 from "./pages/OnBoarding1";
import GetStarted from "./pages/GetStarted";
import OnboardingSlider from "./pages/OnboardingSlider";
const Stack = createNativeStackNavigator();
// SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    molgen: require("./assets/fonts/Brightania.otf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <Fragment>
      {/* <View onLayout={onLayoutRootView}> */}
      <RootApp />
      {/* </View> */}
    </Fragment>
  );
}
