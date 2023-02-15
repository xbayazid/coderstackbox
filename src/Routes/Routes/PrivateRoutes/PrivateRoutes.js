import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import PreLoaderSpinner from '../../../components/PreLoaderSpinner/PreLoaderSpinner'
import { AuthContext } from '../../../context/AuthProvider'

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext)
  const location = useLocation()
  if (loading) {
    return (
      <PreLoaderSpinner/>
    )
  }

  if (user && user.uid) {
    return children
  }
  return <Navigate to='/login' state={{ from: location }} replace />
}

export default PrivateRoute