import React from 'react'
import { useGetInfoUser } from '../../hooks/useGetUserInfo'
import { getUserInfo } from '../../context/UserContext'

const UserDashboard = () => {
  const { loading, userInfo  } = useGetInfoUser()
  const { isLoading, UserInfo } = getUserInfo() 
    if(loading) {
      return (
        <p>This is loading</p>
      )
    }
    if(isLoading) {
      <p>Is loading</p>
    }
    const firstName = userInfo?.firstName || "User"
    const lastName = userInfo?.lastName
    const fullName = UserInfo?.firstName || "JesusChrist"

    console.log("Users info", userInfo)
  return (
    <div>
      <p>Hello, {firstName} {lastName}</p>
      <p>Hi, {fullName}</p>
    </div>
  )
}

export default UserDashboard
