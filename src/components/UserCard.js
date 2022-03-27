import React from 'react'
import './UserCard.css'
function UserCard({username, email}) {
  return (
    <div className='usercard'>
      <h3>{username}</h3>
      <p>{email}</p>
    </div>
  )
}

export default UserCard
