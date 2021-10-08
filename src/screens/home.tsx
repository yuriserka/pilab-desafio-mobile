import React from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import NewTransactionButton from "../components/Home/new-transaction-button";
import TransactionList from "../components/Home/transaction-list";
import UserBalance from "../components/Home/user-balance";
import UserHeader from "../components/Home/user-header";

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <UserHeader />
      <View style={styles.entries}>
        <View style={styles.entry_list}>
          <TransactionList />
        </View>
      </View>
      <UserBalance />
      <View style={styles.bottom}>
        <NewTransactionButton type="in" />
        <NewTransactionButton type="out" />
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
  entries: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    height: "75%",
    width: "90%",
    backgroundColor: "#fff",
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
  bottom: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: "90%",
  },
});
