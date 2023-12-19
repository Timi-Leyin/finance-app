import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
import OnBoarding1 from "../pages/OnBoarding1";
import OnBoarding2 from "../pages/OnBoarding2";
import GetStarted from "../pages/GetStarted";
import Login from "../pages/Login";

const RootApp = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Onboarding-1"
      >
        <Stack.Screen name="Onboarding-1" component={OnBoarding1} />
        <Stack.Screen name="Onboarding-2" component={OnBoarding2} />
        <Stack.Screen name="Get Started" component={GetStarted} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootApp;
