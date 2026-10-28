import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { auth, db } from "../config/firebaseconfig"
import { toast } from "react-toastify";

export const useAddTransaction = () => {
    /* Getting current user */
    const user = auth.currentUser;
    
    if(!user) {
        toast.error("Please log in before adding a transactiion.")
    }
    const transactionRef = collection(db, "Users", user.uid, "transactions");

    const addTransaction = async ({
        description,
        transactionAmount,
        transactionType,
        category
    }) => {
        await addDoc(transactionRef, {
            description,
            transactionAmount,
            transactionType,
            //createdAt: serverTimestamp(),
            category
        })
    }
    return { addTransaction }
}