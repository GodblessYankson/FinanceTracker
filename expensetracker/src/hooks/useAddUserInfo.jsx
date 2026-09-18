import { db,auth } from "../config/firebaseconfig" 
import { createUserWithEmailAndPassword } from "firebase/auth"
import { addDoc, doc,collection, setDoc, serverTimestamp } from "firebase/firestore"


export const useAddUserInfo = () => {
    const userinfo = collection(db, "Users")

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
            createdAt: serverTimestamp()

        })

        console.log("User information added successfully")

        } catch (err) {
            console.error(err)
        }
    }
    return {addUserInfo}
}