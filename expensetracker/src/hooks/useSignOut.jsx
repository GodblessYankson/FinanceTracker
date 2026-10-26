import { signOut } from "firebase/auth"
import { auth } from "../config/firebaseconfig"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"

export const useSignOut =  () => {
    const navigate = useNavigate()
    const SignOut = async () => {
         try {
        await signOut(auth)
        navigate('/')
        console.log("Sucessfully login")
    } catch (err) {
        toast.error("Error signing out")
        console.log("Error login in")
    }
    }
    return {
        SignOut
    }
}