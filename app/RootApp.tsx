import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
import OnBoarding1 from '../pages/OnBoarding1';


const RootApp = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen options={{title: 'Welcome'}} name="Home" component={OnBoarding1} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default RootApp