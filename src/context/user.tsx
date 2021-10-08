import React, { createContext, useContext, useState } from "react";
import { Transaction } from "../models/transaction";
import { User } from "../models/user";

type UserContextProps = {
  user?: User;
  login: (email: string, pwd: string) => void;
  logout: () => void;
  signup: (user: User) => void;
  doTransaction: (trx: Transaction) => void;
  computeBalance: () => number;
};

const UserContext = createContext<UserContextProps>(undefined!);

export default function UserProvider({ children }: any) {
  const [users, setUsers] = useState<User[]>([]);
  const [user, setUser] = useState<User | undefined>();

  function login(email: string, _password: string) {
    const [u] = users.filter((u) => u.email === email);
    setUser(
      u ?? {
        id: users.length,
        email: "default@gmail.com",
        name: "Tester",
        password: "123",
        transactions: [
          {
            id: 0,
            date: new Date(2021, 10, 30),
            description: "Almoço mãe",
            value: 39.9,
            type: "out",
          },
          {
            id: 1,
            date: new Date(2021, 10, 27),
            description: "Mercado",
            value: 542.54,
            type: "out",
          },
          {
            id: 2,
            date: new Date(2021, 10, 26),
            description: "Compras churrasco",
            value: 67.6,
            type: "out",
          },
          {
            id: 3,
            date: new Date(2021, 10, 20),
            description: "Empréstimo Maria",
            value: 500,
            type: "in",
          },
          {
            id: 4,
            date: new Date(2021, 10, 15),
            description: "Salário",
            value: 3000,
            type: "in",
          },
          ...Array(20)
            .fill(0)
            .map((_, i) => ({
              id: i + 5,
              date: new Date(2021, 10, i),
              description: `transação ${i}`,
              value: i * 100,
              type: i % 2 ? "out" : "in",
            })),
        ],
      }
    );
  }

  function logout() {
    setUser(undefined);
  }

  function signup(user: User) {
    setUsers([...users, { ...user, id: users.length }]);
  }

  function doTransaction(trx: Transaction) {
    setUser({
      ...user!,
      transactions: [
        ...user!.transactions,
        {
          ...trx,
          id: user!.transactions.length,
        },
      ],
    });
  }

  function computeBalance() {
    return (
      user?.transactions?.reduce((acc, curr) => {
        return curr.type === "in" ? acc + curr.value : acc - curr.value;
      }, 0) ?? 0
    );
  }

  return (
    <UserContext.Provider
      value={{
        user,
        login,
        logout,
        signup,
        doTransaction,
        computeBalance,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export const useUserContext = () => useContext(UserContext);
