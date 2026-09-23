import { useGetUserInfo } from "../../hooks/useGetUserInfo"

const UserDashboard = () => {
  const { getUserInfo} = useGetUserInfo();
  const userInfo = getUserInfo();
  
  const firstName = userInfo?.firstName || "User";
  console.log("User Info:", firstName);
  console.log(userInfo.firstName);
  return (
    <div>
      <p>Welcome, {firstName}</p>
    </div>
  )
}

export default UserDashboard
