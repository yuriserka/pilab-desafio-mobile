import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { TransactionKind } from "../../models/transaction";
import { RootStackParamList } from "../stack-navigator";

type homeScreenProp = NativeStackNavigationProp<RootStackParamList, "Home">;

type Props = {
  type: TransactionKind;
};

export default function NewTransactionButton({ type }: Props) {
  const navigation = useNavigation<homeScreenProp>();

  return (
    <Pressable
      style={styles.action_box}
      onPress={() => navigation.navigate("Actions", { type })}
    >
      <View style={{ alignSelf: "flex-start", marginLeft: 10 }}>
        <FontAwesome5
          name={`${type === "in" ? "plus" : "minus"}-circle`}
          size={22}
          color="#fff"
        />
      </View>
      <Text style={styles.text}>
        Nova {type === "in" ? "Entrada" : "Saída"}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  action_box: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    borderRadius: 5,
    backgroundColor: "#A328D6",
    height: 100,
    margin: 8,
    width: "45%",
  },
  text: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 17,
  },
});
