import { useEffect } from "react"
import { useState } from "react"
import { auth,db } from "../config/firebaseconfig"
import { doc,getDoc } from "firebase/firestore"

export const getUserInfo = () => {
    const [isLoading, setisLoading] = useState(true)
    const [UserInfo, setUserInfo] = useState(null)

    useEffect(() => {
        const getUserInfo = async() => {
            try {
                const user =  auth.currentUser
                const userDoc = await getDoc(
                    doc(db,"Users", user.uid)
                )
                if(userDoc.exists()) {
                    setUserInfo(userDoc.data())
                    setisLoading(false)
                } else {
                    console.log("User does not exists")
                }
               
            } catch (error) {
                console.log("Error:", error)
            } finally {
                setisLoading(false)
            }
        }
        getUserInfo()
    }, [])

    return { isLoading, UserInfo }
}