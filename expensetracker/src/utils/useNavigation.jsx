 import { useNavigate } from "react-router-dom"

 export const useGoBack = () => {
    const navigate = useNavigate()

    const goBack = () => {
        navigate(-1)
    }
    
    const goLogin = () => {
        navigate("/loginAuth")
    }

    return {
        goBack
    }
 }