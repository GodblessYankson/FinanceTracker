import { db, auth } from "../config/firebaseconfig";
import { doc, getDoc } from "firebase/firestore"

export const useGetUserInfo = () => {
    const getUserInfo = async () => {
        try {
             const user = await auth.currentUser;
            if (user) {
                const userDoc = await getDoc(doc(db, "Users", user.uid));
                return userDoc.data();
            }
        } catch (error) {
            console.error("Error fetching user info:", error);
        }
    }

    return { getUserInfo };
}