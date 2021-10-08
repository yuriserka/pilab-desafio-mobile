import { FontAwesome5 } from "@expo/vector-icons";
import { format, isAfter, isBefore } from "date-fns";
import React, { useEffect, useState } from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useUserContext } from "../context/user";

export default function Home({ navigation }: any) {
  const { user, logout, computeBalance } = useUserContext();
  const [balance, setBalance] = useState<number>(() => computeBalance());

  function onLogout() {
    console.log("leave");
    logout();
    navigation.navigate("Login");
  }

  useEffect(() => {
    setBalance(computeBalance);
  }, [user?.transactions]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={{ ...styles.text, fontSize: 26 }}>Olá, {user!.name}</Text>
        <Pressable onPress={onLogout}>
          <FontAwesome5 name="sign-out-alt" size={24} color="#fff" />
        </Pressable>
      </View>
      <View style={styles.entries}>
        {!user!.transactions.length && (
          <View
            style={{
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
            }}
          >
            <Text
              style={{
                color: "#868686",
              }}
            >
              Não há registros de entrada ou saída
            </Text>
          </View>
        )}
        <View style={styles.entry_list}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={user?.transactions.sort((a, b) =>
              isAfter(a.date, b.date) ? -1 : isBefore(a.date, b.date) ? 1 : 0
            )}
            keyExtractor={(item) => `${item.id}`}
            renderItem={({ item }) => (
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  width: "100%",
                  padding: 8,
                }}
                key={item.id}
              >
                <Text style={{ color: "#C6C6C6" }}>
                  {format(item.date, "dd/MM")}
                </Text>
                <Text
                  style={{ flex: 3, paddingLeft: 10, flexShrink: 1 }}
                  ellipsizeMode="tail"
                  numberOfLines={1}
                >
                  {item.description}
                </Text>
                <Text
                  style={{ color: item.type === "in" ? "#03AC00" : "#C70000" }}
                >
                  R$ {item.value}
                </Text>
              </View>
            )}
          />
        </View>
      </View>
      <View
        style={{
          width: "90%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          backgroundColor: "#fff",
          borderBottomLeftRadius: 8,
          borderBottomRightRadius: 8,
          paddingHorizontal: 16,
          paddingBottom: 8,
        }}
      >
        <Text style={{ fontSize: 19 }}>Saldo</Text>
        <Text
          style={{
            color: balance >= 0 ? "#03AC00" : "#C70000",
          }}
        >
          R$ {balance}
        </Text>
      </View>
      <View style={styles.bottom}>
        <Pressable
          style={styles.action_box}
          onPress={() => navigation.navigate("Actions", { type: "in" })}
        >
          <View style={{ alignSelf: "flex-start", marginLeft: 10 }}>
            <FontAwesome5 name="plus-circle" size={24} color="#fff" />
          </View>
          <Text style={{ ...styles.text, fontSize: 17 }}>Nova Entrada</Text>
        </Pressable>

        <Pressable
          style={styles.action_box}
          onPress={() => navigation.navigate("Actions", { type: "out" })}
        >
          <View style={{ alignSelf: "flex-start", marginLeft: 10 }}>
            <FontAwesome5 name="minus-circle" size={24} color="#fff" />
          </View>
          <Text style={{ ...styles.text, fontSize: 17 }}>Nova Saída</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    margin: 8,
    width: "80%",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  entries: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    height: "75%",
    width: "90%",
    backgroundColor: "#fff",
    flex: 1,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  entry_list: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    height: "100%",
    padding: 16,
  },
  text: {
    color: "#fff",
    fontWeight: "700",
  },
  bottom: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: "90%",
  },
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
});
