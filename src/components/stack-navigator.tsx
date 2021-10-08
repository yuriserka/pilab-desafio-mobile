import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Action from "../screens/new-transaction";
import Home from "../screens/home";
import Login from "../screens/login";
import Signup from "../screens/signup";
import { TransactionKind } from "../models/transaction";

export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  Actions: { type: TransactionKind };
  Signup: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          options={{
            headerShown: false,
          }}
          component={Login}
        />
        <Stack.Screen
          name="Signup"
          options={{
            headerShown: false,
          }}
          component={Signup}
        />
        <Stack.Screen
          name="Home"
          options={{
            headerShown: false,
          }}
          component={Home}
        />
        <Stack.Screen
          name="Actions"
          options={{
            headerShown: false,
          }}
          component={Action}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
