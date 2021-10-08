import { Ruluko_400Regular, useFonts } from "@expo-google-fonts/ruluko";
import AppLoading from "expo-app-loading";
import React from "react";
import Navigation from "./src/components/StackNavigator";
import UserProvider from "./src/context/user";

export default function App() {
  let [fontsLoaded] = useFonts({
    Ruluko_400Regular,
  });

  return fontsLoaded ? (
    <UserProvider>
      <Navigation />
    </UserProvider>
  ) : (
    <AppLoading />
  );
}
