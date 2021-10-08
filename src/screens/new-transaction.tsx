import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useState } from "react";
import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { RootStackParamList } from "../components/stack-navigator";
import { useUserContext } from "../context/user";

type newTrxScreenProp = NativeStackNavigationProp<
  RootStackParamList,
  "Actions"
>;

export default function Action({ route }: any) {
  const { type } = route.params;
  const [description, onDescription] = useState<string>("");
  const [value, onValue] = useState<string>("");

  const navigation = useNavigation<newTrxScreenProp>();

  const { doTransaction } = useUserContext();

  function onSubmit() {
    console.log("transação feita");
    doTransaction({
      description,
      value: Number(value),
      date: new Date(),
      type,
    });
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <View
        style={{
          top: 50,
          left: 30,
          position: "absolute",
        }}
      >
        <Pressable onPress={() => navigation.goBack()}>
          <FontAwesome5 name="arrow-left" size={32} color="#fff" />
        </Pressable>
      </View>
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
        <Button
          title={`Salvar ${type === "in" ? "Entrada" : "Saída"}`}
          onPress={onSubmit}
          color="#A328D6"
        />
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
