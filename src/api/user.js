import axios from "axios"

export const getRole = async email => {
    const response = await axios.get(
      `http://localhost:5000/${email}`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem('CodersStackBox')}`,
        },
      }
    )
    const user = await response.data
    return user?.role
  }

  export const makeAdmin = async user => {
    const response = await fetch(
      `http://localhost:5000/u/admin/${user?._id}`,
      {
        method: 'PUT',
        headers: {
          'content-type': 'application/json',
          authorization: `Bearer ${localStorage.getItem('CodersStackBox')}`,
        },
        body: JSON.stringify({ ...user, role: 'admin' }),
      }
    )
    const users = await response.json()
  
    return users
  }

  export const getUser = async user => {
    const response = await fetch(`http://localhost:5000/u?email=${user?.email}`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('CodersStackBox')}`,
      },
    })
    const users = await response.json()
  
    return users
  }

  export const getAllUsers = async (email) => {
    const response = await fetch(`http://localhost:5000/users?email=${email}`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('CodersStackBox')}`,
      },
    })
    const users = await response.json()
  
    return users
  }