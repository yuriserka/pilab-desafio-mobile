export type TransactionKind = "in" | "out";

export type Transaction = {
  value: number;
  description: string;
  date: Date;
  id?: number;
  type: TransactionKind;
};
