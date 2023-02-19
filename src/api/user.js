import axios from "axios"




export const getRole = async email => {
    const response = await axios.get(
      `https://coderstackbox-server-codersstackbox-gmailcom.vercel.app/${email}`,
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
      `https://coderstackbox-server-codersstackbox-gmailcom.vercel.app/u/admin/${user?._id}`,
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
    const response = await fetch(`https://coderstackbox-server-codersstackbox-gmailcom.vercel.app/u?email=${user?.email}`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('CodersStackBox')}`,
      },
    })
    const users = await response.json()
  
    return users
  }

  export const getAllUsers = async () => {
    const response = await fetch(`https://coderstackbox-server-codersstackbox-gmailcom.vercel.app/users`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('CodersStackBox')}`,
      },
    })
    const users = await response.json()
  
    return users
  }