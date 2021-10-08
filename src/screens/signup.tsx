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

export default function Signup({ navigation }: any) {
  const [name, onNameChange] = useState<string>("");
  const [email, onEmailChange] = useState<string>("");
  const [password, onPasswordChange] = useState<string>("");
  const [passwordConfirm, onPasswordConfirmChange] = useState<string>("");

  const { signup } = useUserContext();

  function onSubmit() {
    console.log("cadastrado");
    signup({
      name,
      email,
      password,
      transactions: [],
    });
    navigation.goBack();
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.logo}>Meu Balanço</Text>
      <TextInput
        style={styles.input}
        textContentType="name"
        keyboardType="name-phone-pad"
        onChangeText={onNameChange}
        value={name}
        placeholder="Nome"
      />
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
      <TextInput
        secureTextEntry={true}
        textContentType="password"
        style={styles.input}
        onChangeText={onPasswordConfirmChange}
        value={passwordConfirm}
        placeholder="Confirme a Senha"
      />
      <View style={styles.btn}>
        <Button title="Cadastrar" onPress={onSubmit} color="#A328D6" />
      </View>
      <Pressable onPress={() => navigation.goBack()}>
        <Text style={styles.goto_login}>Já tem uma conta? Entre agora!</Text>
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
  goto_login: {
    marginTop: 20,
    color: "#fff",
  },
});
