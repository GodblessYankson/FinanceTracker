import { db,auth } from "../config/firebaseconfig" 
import { createUserWithEmailAndPassword } from "firebase/auth"
import { doc, setDoc, serverTimestamp } from "firebase/firestore"
import {  toast } from 'react-toastify';
import { useNavigate} from "react-router-dom";


export const useAddUserInfo = () => {
    //const userinfo = collection(db, "Users")
    const navigate = useNavigate()

    const addUserInfo = async ({
        firstName, 
        lastName, 
        email,
        password,
        phone, 
        age, 
        role, 
        income, 
        hometown, 
        nextOfKin, 
        nextOfKinPhone
    }) => {
        try {
    
            //Create firebase authentication account
            const userCredential = await createUserWithEmailAndPassword(auth, email, password)

            //Getting user's firebase UID
            const user = userCredential.user

            //Adding user information to firebase firestore
            await setDoc(doc(db, "Users", user.uid), {
            userID: user.uid, 
            firstName, 
            lastName,
            email,
            phone,
            age,
            role,
            income,
            hometown,
            nextOfKin,
            nextOfKinPhone,
            createdAt: serverTimestamp ()

        })
        toast.success("Account created successfully")
        console.log("User information added successfully")
        navigate(role === "Admin" ? "/admindashboard" : "/userdashboard")

        } catch (err) {
            toast.error("Error creating account. Please try again.")
            console.error(err)
        }
    }
    return {addUserInfo}
}