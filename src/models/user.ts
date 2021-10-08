import { Transaction } from "./transaction";

export type User = {
  id?: number;
  name: string;
  email: string;
  password: string;
  transactions: Transaction[];
};
