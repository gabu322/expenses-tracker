export interface TransactionType {
   id?: string;
   cardId: string | null;
   date: string;
   amount: number;
   method: "DEBIT" | "CREDIT" | null;
   type: "EXPENSE" | "INCOME" | null;
   currency?: string;
   description?: string;
}
