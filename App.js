import * as React from "react";
import { MovieDetail } from "./screens";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Tabs from "./navigation/tabs";
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={"HomeScreen"}
      >
        <Stack.Screen
          name="HomeScreen"
          component={Tabs}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="MovieDetail"
          options={{ headerShown: false }}
          component={MovieDetail}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
