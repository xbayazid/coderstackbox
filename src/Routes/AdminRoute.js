import React, { useContext, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { getRole } from '../api/user';
import PreLoaderSpinner from '../components/PreLoaderSpinner/PreLoaderSpinner';
import { AuthContext } from '../context/AuthProvider';

const AdminRoute = ({children}) => {
  const { user, loading} = useContext(AuthContext);
  const [roleLoading, setRoleLoading] = useState(true);
  const [role, setRole] = useState(null)

  useEffect(() => {
      setRoleLoading(true)
      getRole(user?.email).then(data => {
        setRole(data)
        setRoleLoading(false)
      })
    }, [user])


    if (loading || roleLoading) {
      return (
        <div className='min-h-screen'>
          <PreLoaderSpinner />
        </div>
      )
    }
    if (user && user.uid && role === 'admin') {
      console.log(role)
      return children
    }
    return <Navigate to='/' />
};
export default AdminRoute;