import { useAdmin } from "./AdminContext"


const AdminDashboard = () => {
 const { adminLoading, adminInfo} = useAdmin()
 if(adminLoading){
  return <p>Loading...</p>
 }
 const fullName = adminInfo?.firstName + " " + adminInfo.lastName;
  return (
    <div>
      <h1>FirstName: {fullName}</h1>
      <h1>FirstName: {adminInfo?.role}</h1>
      <p>This is the admin dashboard</p>
    </div>
  )
}

export default AdminDashboard
