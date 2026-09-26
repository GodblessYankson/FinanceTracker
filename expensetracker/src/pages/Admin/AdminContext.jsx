import { onAuthStateChanged } from "firebase/auth"
import { createContext,useContext,useState,useEffect } from "react"
import { auth,db } from "../../config/firebaseconfig"
import { doc, getDoc } from "firebase/firestore"


const AdminContext = createContext()
export const AdminProvider = ({children}) => {
    const [adminLoading, setAdminLoading] = useState(true)
    const [adminInfo, setAdminInfo] = useState(null)

   useEffect(() => {
    const userLoggedIn = onAuthStateChanged(auth, async (user) => {
        if(!user) {
                setAdminInfo(null)
                setAdminLoading(false)
                return
            }
        try {
            
            const adminDoc = await getDoc(
                doc(db, "Users", user.uid)
            )
            if(adminDoc.exists()) {
                setAdminInfo(adminDoc.data())
                setAdminLoading(false)
            }
        }
        catch(error) {
            console.log("Error getting user info:", error)
        }
        finally {
            setAdminLoading(false)
        }
    })

    //stopping user auth watch
    return () => userLoggedIn()
   }, [])

   return (
    <AdminContext.Provider value={{adminInfo, adminLoading}}>
        {children}
    </AdminContext.Provider>
   )

}

export const useAdmin = () => {
    return (
        useContext(AdminContext)
    )
}