import LoggedInNavbar from "../../components/LoggedInNavbar"
import { useAdmin } from "./AdminContext"


const AdminDashboard = () => {
  const { adminLoading, adminInfo} = useAdmin()
 if(adminLoading){
  return <p>Loading...</p>
 }
  return (
    <div>
      
      {/* <h1>FirstName: {fullName}</h1>
      <h1>FirstName: {adminInfo?.role}</h1>
      <p>This is the admin dashboard</p> */}
      <LoggedInNavbar />
      <div>
        <div className='flex items-center gap-1 bg-violet-500 py-2 px-4 text-white rounded-xl text-base'>
            <GoPlus size={30}/>
            <p>Add Transaction</p>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard
