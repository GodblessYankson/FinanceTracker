import { auth, db} from "../config/firebaseconfig"
import { collection, getDocs } from "firebase/firestore";
import { useEffect,useState } from "react";
import { toast } from "react-toastify";

export const getUserTransaction = () => {
    const [transactions, setTransactions] = useState([]);
    let [querySnapshotdata, setQuerySnapshot] = useState([])

        const fetchTransactions = async () => {
            try {
                const user = auth.currentUser;

            if(!user) {
                toast.error("Please login to view your transactions")
                return;
            }

            /* Creating reference to user's transactions */
            const transactionsRef = collection(
                db,
                "Users",
                user.uid,
                "transactions"
            )

            //Get all transactions for the user
            querySnapshotdata = await getDocs(transactionsRef)
            setQuerySnapshot(querySnapshotdata)
            let transactionSize = querySnapshotdata.size
            let transactionempty = querySnapshotdata.transactionempty
            let transactionMetaData = querySnapshotdata.metadata

            const transactionData = querySnapshotdata.docs.map((doc) => ({
                ...doc.data(),
                transactionId: doc.id
            }))

            setTransactions(transactionData);
            console.log("First transactions:", transactionData[0].transactionAmount + transactionData[1].transactionAmount )
            console.log("Transactions fetched successfully:", transactionData);
            console.log("Transactions state:", transactions);
            console.log("Transactions size:", transactionSize)
            console.log("Transactions empty:", transactionempty)
            console.log("Transactions metadata:", transactionMetaData)

        } catch (error) {
            console.error("Error fetching transactions:", error);
            toast.error("Error fetching transactions")
        }
    }

        useEffect(() => {
            fetchTransactions()
        },[])

        return{ transactions, querySnapshotdata}
}
