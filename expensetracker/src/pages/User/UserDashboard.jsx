import React from 'react'
import { useUser } from '../../context/UserContext'

const UserDashboard = () => {
  const { userInfo, loading } = useUser()

  if(loading) {
    return <p>Loading...</p>
  }
  return (
    <div>
      <h1>Welcome, {userInfo?.firstName}</h1>
      <h1>Email: {userInfo?.email}</h1>
      <h1>Role: {userInfo?.role}</h1>
    </div>
  )
}

export default UserDashboard
