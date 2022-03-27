import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import UserCard from './components/UserCard';

function Users() {
  const URL = 'https://kernelbackend.herokuapp.com/api/admin/auth/users/';
  const [users, setUsers]=useState([]);
  useEffect(async()=>{
    const options = {
      headers: {
        'auth-token': localStorage.token,
        'X-uid': localStorage.uid
      }
    }
    const resp = await fetch(URL, options);
    const respData = await resp.json();

    setUsers(respData)
  },[])
  console.log(users);
  return (
    <div className='users'>
      <div className="usersTop">
        <Header/>
      </div>
      <div className="usersBody">
        {
          users.map(user => (
            <UserCard username={user.username} email={user.email}/>
          ))
        }
      </div>
    </div>
  )
}

export default Users
