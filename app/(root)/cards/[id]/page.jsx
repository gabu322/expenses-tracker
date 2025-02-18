'use client';

import { use, useEffect, useState } from "react";
import axios from "axios";

import IDollar from "@/public/icons/dynamic/dollar";
import CountUp from "react-countup";

export default function Page({ params }) {
   const { id } = use(params);
   const [card, setCard] = useState();
   const [transactions, setTransactions] = useState([]);

   useEffect(() => {
      const fetchCardData = async () => {
         try {
            const cardResponse = await axios.get(`/api/cards/${id}`);
            setCard(cardResponse.data);
            console.log(cardResponse.data);
         } catch (error) {
            console.error(error);
         }
      };

      const fetchTransactions = async () => {
         try {
            const transactionsResponse = await axios.get(`/api/transactions`);
            setTransactions(transactionsResponse.data);
            console.log(transactionsResponse.data);
         } catch (error) {
            console.error(error);
         }
      };

      fetchCardData();
      fetchTransactions();
   }, [id]);

   return <div className="flex flex-col gap-4">
      <h2>{card?.nickname}</h2>

      <div className="w-full grid grid-cols-2 gap-4">
         {/* Debit card info */}
         {card?.debit && <>
            <div className="card h-16 flex-row-4">
               <IDollar className="h-10 w-10 p-1 bg-lime-200 rounded-md" color="darkgreen" />
               <div className="flex flex-col justify-around">
                  <span className="font-light">Balance</span>

                  <CountUp className="font-bold" prefix="$" end={card?.debitCard.balance} decimals={2} />
               </div>
            </div>
            <div className="card h-16 flex-row-4" style={{ backgroundColor: card?.debitCard.balance < 0 ? 'rgba(255, 0, 0, 0.1)' : 'rgba(0, 255, 0, ll0.1)' }}>
               <IDollar className="h-10 w-10 p-1 bg-gray-300 rounded-md" color="gray" />

               {/* <div className="flex flex-col justify-around">
                  <span>Spent credit</span>

                  <span>${parseFloat(card?.creditCard.currentCredit).toFixed(2)}</span>
               </div> */}
            </div>
         </>}

         {/* Credit card info */}
         {card?.credit && <>
            <div className="card h-16 flex-row-4">
               <IDollar className="h-10 w-10 p-1 bg-lime-200 rounded-md" color="darkgreen" />
               <div className="flex flex-col justify-around">
                  <span className="font-light">Credit Limit</span>

                  <CountUp className="font-bold" prefix="$" end={card?.creditCard.creditLimit} decimals={2} />
               </div>
            </div>
            <div className="card h-16 flex-row-4">
               <IDollar className="h-10 w-10 p-1 bg-red-200 rounded-md" color="red" />

               <div className="flex flex-col justify-around">
                  <span>Spent credit</span>


                  <CountUp className="font-bold" prefix="$" end={card?.creditCard.currentCredit} decimals={2} /> </div>
            </div>
         </>}
      </div>
   </div>;
};
