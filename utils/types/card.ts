export interface CardType {
   id?: string;
   nickname: string;
   number: string;
   expiration: string;
   cvv: string;
   issuerId: string;
   debit: boolean;
   balance?: number;
   credit: boolean;
   limit?: number;
   usedLimit?: number;
}
