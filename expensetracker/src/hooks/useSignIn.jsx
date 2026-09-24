import React from 'react'
import { db, auth } from "../config/firebaseconfig"
import { signInWithEmailAndPassword } from "firebase/auth"
import { doc, getDoc } from "firebase/firestore"
import {useNavigate} from "react-router-dom"
import { toast } from "react-toastify"

export const useSignIn = () => {
    const navigate = useNavigate()
    const signIn = async ({email, password}) => {

    try{
         //SIGN IN WIHT EMAIL AND PASWWORD
         
        await signInWithEmailAndPassword(auth, email, password)

        const userCredential = await signInWithEmailAndPassword(auth, email, password)

         //Getting user firestore data
         const user = userCredential.user

         //Getting user firestore data
         const userDoc = await getDoc(
            doc(db, "Users", user.uid)
         )

         if(userDoc.exists()) {
            //User data exists
            const userData = userDoc.data()
            console.log("User data:", userData)

            //check the user's role
            if(userData.role === "SuperAdmin") {
                navigate("/admindashboard")
                toast.success(`Welcome ${userData.firstName}`)
            } else if (userData.role === "Admin") {
                navigate("/admindashboard")
                toast.success(`Welcome ${userData.firstName}`)
            } else if (userData.role === "User") {
                navigate("/userdashboard")
                toast.success(`Welcome ${userData.firstName}`)
            } else {
                console.log("Unknown role")
            }
         } 
    }
    catch(error) {
        console.log("Account not found", error)
        toast.error("Account not found")
    }
}
    return {
    signIn
}
}
