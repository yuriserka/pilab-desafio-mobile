export type Transaction = {
  value: number;
  description: string;
  date: Date;
  id?: number;
  type: "in" | "out";
};
