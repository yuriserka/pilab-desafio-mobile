import React, { useState } from "react";
import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useUserContext } from "../context/user";

export default function Login({ navigation }: any) {
  const [email, onEmailChange] = useState<string>("");
  const [password, onPasswordChange] = useState<string>("");

  const { login } = useUserContext();

  function onSubmit() {
    console.log("entrando");
    navigation.navigate("Home");
    login(email, password);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.logo}>Meu Balanço</Text>
      <TextInput
        style={styles.input}
        textContentType="emailAddress"
        keyboardType="email-address"
        onChangeText={onEmailChange}
        value={email}
        placeholder="E-mail"
      />
      <TextInput
        secureTextEntry={true}
        textContentType="password"
        style={styles.input}
        onChangeText={onPasswordChange}
        value={password}
        placeholder="Senha"
      />
      <View style={styles.btn}>
        <Button title="Entrar" onPress={onSubmit} color="#A328D6" />
      </View>
      <Pressable onPress={() => navigation.navigate("Signup")}>
        <Text style={styles.goto_signup}>Primeira vez? Cadastre-se!</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    fontSize: 50,
    fontWeight: "400",
    fontFamily: "Ruluko_400Regular",
    color: "#fff",
    marginBottom: 50,
  },
  input: {
    padding: 16,
    width: "90%",
    marginVertical: 12,
    backgroundColor: "#fff",
    borderRadius: 5,
    paddingLeft: 20,
  },
  btn: {
    marginTop: 12,
    width: "90%",
    borderRadius: 5,
  },
  goto_signup: {
    marginTop: 20,
    color: "#fff",
  },
});
