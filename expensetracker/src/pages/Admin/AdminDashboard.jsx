import LoggedInNavbar from "../../components/LoggedInNavbar"
/* import SideBar, { SidebarItem } from "../../components/SideBar"
 */
/* import SideNav, {SidebarItem} from "../../components/SideNav"
 */import { useAdmin } from "./AdminContext"
//import { GoPlus } from "react-icons/go"
//import { LifeBuoy, Receipt, Boxes, Package, UserCircle, BarChart3, LayoutDashboard, Settings } from "lucide-react"
import SideNav from "../../components/SideNav"
import { useState } from "react"


const AdminDashboard = () => {
/* Setting nav toggle */
  const [sideNavToggle, setSideNavToggle] = useState(false)

/* Getting admin info */
  const { adminLoading, adminInfo} = useAdmin()
 if(adminLoading){
  return <p>Loading...</p>
 }
  return (
    <div className="">
      <SideNav sideNavToggle={sideNavToggle} setSideNavToggle={setSideNavToggle} />
      <LoggedInNavbar sideNavToogle={sideNavToggle} setSideNavToggle={setSideNavToggle}/>
      
      {/* <SideNav>
      <SidebarItem
      icon={<LayoutDashboard size={20} />}
      text="Dashboard"
      alert
      />

      <SidebarItem icon={<BarChart3 size={20} />} text="Statistics" active/>
      <SidebarItem icon={<UserCircle size={20} />} text="Users" />
      <SidebarItem icon={<Boxes size={20} />} text="Inventory" />
      <SidebarItem icon={<Package size={20} />} text="Orders" alert/>
      <SidebarItem icon={<Receipt size={20} />} text="Billings" />

      <hr className="my-3"/>
      <SidebarItem icon={<Settings size={20} />} text="Settings" />
      <SidebarItem icon={<LifeBuoy size={20} />} text="Help" />

      </SideNav> */}

      {/* <h1>FirstName: {fullName}</h1>
      <h1>FirstName: {adminInfo?.role}</h1>
      <p>This is the admin dashboard</p> */}
      {/* <LoggedInNavbar />
      <div className="flex items-center justify-between max-w-285 mx-auto pt-6">
        <div className="text-3xl md:text-5xl">
          <h1 className="italic font-light">
            Welcome,{" "}  
            <span className="font-bold">
              {adminInfo.firstName}
            </span>
          </h1>
        </div>
        <div className='flex items-center gap-1 bg-violet-500 py-2 px-4 text-white rounded-xl text-base'>
            <GoPlus size={30}/>
            <p>Add Transaction</p>
        </div>
      </div> */}
    </div>
  )
}

export default AdminDashboard
