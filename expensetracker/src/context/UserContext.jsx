import { onAuthStateChanged } from "firebase/auth"
import { useContext,createContext,useState,useEffect } from "react"
import { db,auth } from "../config/firebaseconfig"
import { getDoc,doc  } from "firebase/firestore"

const UserContext = createContext();

export const UserProvider  = ({children}) => {
    const [isLoading, setIsLoading] = useState(true)
    const [userInfo, setUserInfo] = useState(null)

    useEffect(() => {
        //checking if user is logged in or not 
        const isUserLoggedIn = onAuthStateChanged(auth, async (user) => {
            if(!user) {
                setUserInfo(null)
                setIsLoading(false)
                return
            }
            try {
                const userDoc = await getDoc(
                    doc(db, "Users", user.uid)
                )
                if(userDoc.exists()) {
                    setUserInfo(userDoc.data())
                    setIsLoading(false)
                }
            }
            catch(error) {
                console.log("Error getting user info", error)
            }
            finally {
                setIsLoading(false)
            }
        })
        //Stop watching of th firebase
        return () => isUserLoggedIn();
    }, [])

    return (
        <UserContext.Provider value={{userInfo, isLoading}}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => {
    return useContext(UserContext)
}