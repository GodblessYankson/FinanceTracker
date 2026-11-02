import { collection, getDocs, onSnapshot, orderBy, query, where } from "firebase/firestore"
import { useState } from "react"
import { db,auth } from "../config/firebaseconfig"
import { useEffect } from "react";
import { toast } from "react-toastify";

export const useGetTransaction = () => {
 /* Gettting current user */
const user = auth.currentUser;
const userID = user.uid
const usertransactions = userID.transactions
//const usertransactionsID = usertransactions.uid

/* States for transactionlist, income,expenses, balance etc. */
const [transactionLists, setTransactionList] = useState([])
const [transactionsTotals, setTransactionTotals] = useState({total: 0.0 , income: 0.0, expense: 0.0, balance: 0.0})

/* const transactionCollectionRef = collection(
    db,
    "Users",
    userID,
    "transactions",
    usertransactionsID
)

const getTransaction = async () => {
    let unsubscribe;
    try {
        const queryTransactions = query(
            transactionCollectionRef,
            where("userTransactionID", "==", usertransactionsID),
            orderBy("createdAt")
        )
        unsubscribe = onSnapshot(queryTransactions,(snapshot) => {
            let docs = [];
            let totalIncome = 0;
            let totalExpenses = 0;

            snapshot.forEach((doc) => {
                const data = doc.data();
                const id = doc.id

                if(data.transactionType === "expense") {
                    totalExpenses += Number(data.transactionAmount);
                } else {
                    totalIncome +=Number(data.transactionAmount)
                }
            })
            setTransactionList(docs)
               
            let balance = totalIncome - totalExpenses;
            setTransactionTotals({
                balance,
                expense: totalExpenses,
                income: totalIncome
            })
        })
    } catch (err) {
        console.error(err)
    }
    return () => unsubscribe()
}

useEffect(() => {
    getTransaction()
}, [])
return { transactionLists, transactionsTotals} */


    
    //GET ALL TRANSACTIONS
    const getTransactions = async () => {
        const user = auth.currentUser

    if(!user) {
        toast.error("Log in to view transactions")
        return;
    }

    //REFERENCE TO USERS TRANSACTIONS COLLECTION
    const transactionRef = collection(db, "Users", user.uid, "transaction");

        let unsubscribe;
        try{
            const queryTransasctions = query(
                transactionRef,
                where("usertransactions", "==", usertransactions),
                orderBy(createdAt)
            )
            unsubscribe = onSnapshot(queryTransasctions,(snapshot) => {
                let docs = [];
                let totalIncome = 0;
                let totalExpenses = 0;

                snapshot.forEach((doc) => {
                    const data = doc.data();
                    const id = doc.id

                    if(data.transactionType === "expense") {
                        totalExpenses += Number(data.transactionAmount)
                    } else {
                        totalIncome += Number(data.transactionAmount)
                    }
                    
                })
                setTransactionList(docs)

                let balance = totalIncome - totalExpenses;
                setTransactionTotals({
                    balance,
                    expense: totalExpenses,
                    income: totalIncome
                })
            })
        } catch(err) {
            toast.error(err.message)
        }
        return () => unsubscribe()
    }
   useEffect(() => {
    getTransactions()
   }, [])

   return { transactionLists, transactionsTotals }

}

