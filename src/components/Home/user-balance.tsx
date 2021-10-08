import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { useUserContext } from "../../context/user";

const currencyFormatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export default function UserBalance() {
  const { computeBalance, user } = useUserContext();
  const [balance, setBalance] = useState<number>(() => computeBalance());

  useEffect(() => {
    setBalance(computeBalance);
  }, [user?.transactions]);

  return (
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
        {currencyFormatter.format(balance)}
      </Text>
    </View>
  );
}
