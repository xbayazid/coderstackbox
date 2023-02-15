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
    delete user._id
    const response = await fetch(
      `http://localhost:5000/user/${user?.email}`,
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