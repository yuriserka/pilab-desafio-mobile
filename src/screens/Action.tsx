import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { useUserContext } from "../context/user";

export default function Action({ route, navigation }: any) {
  const { type } = route.params;
  const [description, onDescription] = useState<string>("");
  const [value, onValue] = useState<string>("");

  const { doTransaction } = useUserContext();

  function onSubmit() {
    console.log("transação feita");
    navigation.goBack();
    doTransaction({
      description,
      value: Number(value),
      date: new Date(),
      type,
    });
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 26, color: "#fff" }}>
        Nova {type === "in" ? "Entrada" : "Saída"}
      </Text>
      <TextInput
        style={styles.input}
        keyboardType="number-pad"
        onChangeText={onValue}
        value={value}
        placeholder="Valor"
      />
      <TextInput
        style={styles.input}
        textContentType="emailAddress"
        keyboardType="email-address"
        onChangeText={onDescription}
        value={description}
        placeholder="Descrição"
      />
      <View style={styles.btn}>
        <Button title="Entrar" onPress={onSubmit} color="#A328D6" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
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
});
