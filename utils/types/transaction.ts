export interface TransactionType {
   id?: string;
   cardId: string;
   date: string;
   amount: number;
   method: "DEBIT" | "CREDIT";
   type: "EXPENSE" | "INCOME";
   currency?: string;
   description?: string;
}
