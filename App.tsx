import { Ruluko_400Regular, useFonts } from "@expo-google-fonts/ruluko";
import AppLoading from "expo-app-loading";
import { StatusBar } from "expo-status-bar";
import "intl";
import "intl/locale-data/jsonp/en";
import React from "react";
import Navigation from "./src/components/stack-navigator";
import UserProvider from "./src/context/user";

export default function App() {
  let [fontsLoaded] = useFonts({
    Ruluko_400Regular,
  });

  return fontsLoaded ? (
    <UserProvider>
      <Navigation />
      <StatusBar style="light" translucent={true} />
    </UserProvider>
  ) : (
    <AppLoading />
  );
}
