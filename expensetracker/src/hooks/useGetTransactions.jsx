import { auth, db } from "../config/firebaseconfig";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export const getUserTransaction = () => {
  const [transactions, setTransactions] = useState([]);
  //let [querySnapshotdata, setQuerySnapshot] = useState([]);
  let [transactionTotals, setTransactionTotals] = useState({
    balance: 0.0,
    income: 0.0,
    expenses: 0.0,
  });

  const fetchTransactions = async () => {
    let unsubscribe;
    try {
      const user = auth.currentUser;

      if (!user) {
        toast.error("Please login to view your transactions");
        return;
      }

      /* Creating reference to user's transactions */
      const transactionsRef = collection(db, "Users", user.uid, "transactions");

      /* Querying through transactions */
      const queryTransactions = query(transactionsRef, orderBy("createdAt", "desc"));

      unsubscribe = onSnapshot(queryTransactions,(snapshot) => {
        let docs = [];
        let totalIncome = 0;
        let totalExpenses = 0;

        /* Querying through each transaction */
        snapshot.forEach((doc) => {
          const data = doc.data();
          const transactionId = doc.id;
          docs.push({ ...data, transactionId });

          if (data.transactionType === "expense") {
            totalExpenses += Number(data.transactionAmount);
          } else {
            totalIncome += Number(data.transactionAmount);
          }
        });

        setTransactions(docs);

        /* Getting balance */
        let balance = totalIncome - totalExpenses;

        /* setting balance, income, expenses */
        setTransactionTotals({
          balance,
          expenses: totalExpenses,
          income: totalIncome,
        });
      });
      //Get all transactions for the user
      /*  querySnapshotdata = await getDocs(transactionsRef)

            const unsubscribe = onSnapshot(transactionsRef, (querySnapshotdata) => {

            setQuerySnapshot(querySnapshotdata)
           
            const transactionData = querySnapshotdata.docs.map((doc) => ({
                ...doc.data(),
                transactionId: doc.id
            }))

            setTransactions(transactionData);
            }) */
    } catch (error) {
      console.error("Error fetching transactions:", error);
      toast.error("Error fetching transactions");
    }

    return () => unsubscribe();
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  return { transactions, transactionTotals };
};
