import LoggedInNavbar from "../../components/LoggedInNavbar"
import { useAdmin } from "./AdminContext"
import SideNav from "../../components/SideNav"
import { useState } from "react"
import AddTransactionForm from "../../components/AddTransactionForm"


const AdminDashboard = () => {
/* Setting nav toggle */
  const [sideNavToggle, setSideNavToggle] = useState(false)

/* Add the modal state */
const [addTransactionModal, setaddTransactionModal] = useState(false)
console.log(addTransactionModal)

/* Getting admin info */
  const { adminLoading, adminInfo} = useAdmin()
 if(adminLoading){
  return <p>Loading...</p>
 }

  return (
    <div className="">
      <LoggedInNavbar setaddTransactionModal={setaddTransactionModal} sideNavToogle={sideNavToggle} setSideNavToggle={setSideNavToggle}/>
      {/* <SideNav sideNavToggle={sideNavToggle} setSideNavToggle={setSideNavToggle} />
      <AddTransactionForm /> */}
      <div className="md:grid grid-cols-4">
        <div className="col-span-1">
          <SideNav sideNavToggle={sideNavToggle} setSideNavToggle={setSideNavToggle} />
        </div>
        <div className={`${addTransactionModal ? "block" : "hidden"} col-span-3 w-full md:w-[500px] blackdrop-blur-md absolute md:top-30 md:left-[40%] transition-all duration-300`}>
            <AddTransactionForm addTransactionModal={addTransactionModal} setaddTransactionModal={setaddTransactionModal} />
        </div>
      </div> 
      
      
    </div>
  )
}

export default AdminDashboard
