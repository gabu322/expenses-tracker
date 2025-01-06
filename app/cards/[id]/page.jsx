'use client';

import { use, useEffect, useState } from "react";
import axios from "axios";

import IDollar from "@/public/icons/dynamic/dollar";
import CountUp from "react-countup";

export default function Page({ params }) {
   const { id } = use(params);
   const [card, setCard] = useState();

   useEffect(() => {
      axios.get(`/api/cards/${id}`)
         .then((response) => {
            setCard(response.data)
            console.log(response.data)
         })
         .catch(console.error);
   }, []);

   return <main className="flex flex-col gap-4">
      <h2>{card?.name}</h2>

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

                  <span className="font-bold">${parseFloat(card?.creditCard.creditLimit).toFixed(2)}</span>
               </div>
            </div>
            <div className="card h-16 flex-row-4">
               <IDollar className="h-10 w-10 p-1 bg-red-200 rounded-md" color="red" />

               <div className="flex flex-col justify-around">
                  <span>Spent credit</span>

                  <span className="font-bold">${parseFloat(card?.creditCard.currentCredit).toFixed(2)}</span>
               </div>
            </div>
         </>}
      </div>
   </main>;
};
