import React from 'react'
import { Outlet, Navigate } from "react-router-dom"
import { useSelector } from "react-redux"
function PrivateRouter() {
  // const userLogin = useSelector((state) => state.userLogin);
  // const { userInfo } = userLogin;
  const userLogin = useSelector((state) => state.userLogin )
  const {userInfo} = userLogin
  return userInfo && userInfo.isAdmin ? <Outlet /> : <Navigate to="/login" />
}

export default PrivateRouter