import { useEffect, useState } from "react"
import { auth, db } from "../config/firebaseconfig"
import { doc, getDoc } from "firebase/firestore"

export const useGetInfoUser = () => {
    const [loading, setLoading] = useState(true)
    const [userInfo, setUserInfo] = useState(null)

    useEffect(() => {
       const getUserInfo = async() => {
        try {
         //declaring the user
        const user = auth.currentUser
        if(!user) {
            setLoading(false)
            setUserInfo(null)
            return
        }
        //Getting users data from firestore
        const userDoc = await getDoc(
            doc(db, "Users", user.uid)
        )
        //Checking if user exists
        if(userDoc.exists()) {
            setUserInfo(userDoc.data())
            setLoading(false)
        } else {
            setUserInfo(null)
            console.log("User does not exists")
        }
       } catch(error) {
            console.log("User not found", error)
       } finally {
          setLoading(false)
       }

       }
       getUserInfo()
    }, [])

    return {
        loading,userInfo
    }
}