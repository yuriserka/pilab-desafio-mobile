import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useUserContext } from "../../context/user";
import { RootStackParamList } from "../stack-navigator";

type homeScreenProp = NativeStackNavigationProp<RootStackParamList, "Home">;

export default function UserHeader() {
  const { user, logout } = useUserContext();
  const navigation = useNavigation<homeScreenProp>();

  function onLogout() {
    console.log("leave");
    logout();
    navigation.navigate("Login");
  }

  return (
    <View style={styles.header}>
      <Text style={[styles.text]}>Olá, {user?.name}</Text>
      <Pressable onPress={onLogout}>
        <FontAwesome5 name="sign-out-alt" size={24} color="#fff" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    margin: 8,
    width: "80%",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  text: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 26,
  },
});
