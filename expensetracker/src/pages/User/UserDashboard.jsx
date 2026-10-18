import React from 'react'
import { useUser } from '../../context/UserContext'
import LoggedInNavbar from '../../components/LoggedInNavbar'
import { GoPlus } from 'react-icons/go'

const UserDashboard = () => {
  const { userInfo, loading } = useUser()

  if(loading) {
    return <p>Loading...</p>
  }
  return (
    <div className=''>
      
      <LoggedInNavbar />
      <div className='max-w-285 mx-auto flex justify-between items-center text-4xl'>
        <h1 className='font-2xl font-light'>Welcome,  
          <span className='font-bold text-violet-500'> {userInfo?.firstName}</span></h1>
        <div className='flex items-center gap-1 bg-violet-500 py-2 px-4 text-white rounded-xl text-base'>
          <GoPlus size={30}/>
          <p>Add Transaction</p>
        </div>

      </div>
      {/* 
      <h1>Email: {userInfo?.email}</h1>
      <h1>Role: {userInfo?.role}</h1> */}
    </div>
  )
}

export default UserDashboard
