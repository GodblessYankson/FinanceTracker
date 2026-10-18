import React from 'react'
import { useUser } from '../context/UserContext'

const ViewUserInfo = () => {
    const { userInfo, loading } = useUser()

    if(loading) {
        return <p>Loading</p>
    }
  return (
    <div>
      <div>
        <p>Welcome, {userInfo?.firstName}</p>
        <p>E</p>
      </div>
    </div>
  )
}

export default ViewUserInfo
