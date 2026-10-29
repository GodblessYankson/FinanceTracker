import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { auth, db } from "../config/firebaseconfig"
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const useAddTransaction = () => {
    const navigate = useNavigate()

    const addTransaction = async ({
        description,
        transactionType,
        transactionAmount,
        category,
        //createdAt: serverTimestamp

    }) => {
        try {
    /* Getting current user */
    const user = auth.currentUser;
        
    /* Checking if user is logged in */
    if(!user) {
        toast.info("Login to perform transactions")
        navigate("/login")
        return;
    }

    /* Adding user transaction */
    const transactionRef = collection(
        db,
        "Users",
        user.uid,
        "transactions"
    )

    await addDoc(transactionRef, {
        userId: user.uid,
        description,
        transactionType,
        transactionAmount: Number(transactionAmount),
        category,
        createdAt: serverTimestamp(),

    })
    toast.success("Transaction added successfully!")
    return true
}   catch(error) {
    console.log("Error adding transaction",error)
    toast.error(error.message || "Failed adding transaction");
    return false
}
    }  
   /*  if(!user) {
        toast.error("Please log in before adding a transactiion.")
        return
    }

    const userId = auth.currentUser.uid

    const transactionRef = collection(db, "Users", user.uid, "transactions");

    const addTransaction = async ({
        description,
        transactionAmount,
        transactionType,
        category
    }) => {
        await addDoc(transactionRef, {
            userId,
            description,
            transactionAmount,
            transactionType,
            //createdAt: serverTimestamp(),
            category
        })
    } */
    return { addTransaction }
}