export const useGetUserInfo = () => {
    const getUserInfo = async () => {
        try {
            const user = auth.currentUser;
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