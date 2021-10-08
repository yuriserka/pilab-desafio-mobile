import { format, isAfter, isBefore } from "date-fns";
import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { useUserContext } from "../../context/user";

const currencyFormatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export default function TransactionList() {
  const { user } = useUserContext();

  if (!user?.transactions.length)
    return (
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
    );

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={user?.transactions.sort((a, b) =>
        isAfter(a.date, b.date) ? -1 : isBefore(a.date, b.date) ? 1 : 0
      )}
      keyExtractor={(item) => `${item.id}`}
      renderItem={({ item }) => (
        <View style={styles.item} key={item.id}>
          <Text style={styles.date}>{format(item.date, "dd/MM")}</Text>
          <Text style={styles.descr} ellipsizeMode="tail" numberOfLines={1}>
            {item.description}
          </Text>
          <Text
            style={[
              styles.val,
              { color: item.type === "in" ? "#03AC00" : "#C70000" },
            ]}
          >
            {currencyFormatter.format(item.value)}
          </Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  item: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
    padding: 8,
  },
  date: { color: "#C6C6C6" },
  descr: { flex: 5, paddingLeft: 10, flexShrink: 1 },
  val: {
    flex: 2,
    textAlign: "left",
  },
});
