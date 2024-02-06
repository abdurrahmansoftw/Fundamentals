import React, { useState } from 'react'

const LoginStatus = () => {
  const [user, setUser] = useState('')

  if (user)
    return (
      <React.Fragment>
        <div>
          <span className='mx-2'>{user}</span>
          <a onClick={() => setUser('')} href='#'>
            Logout
          </a>
        </div>
      </React.Fragment>
    )
  return (
    <div>
      <a onClick={() => setUser('mosh.hamedani')} href='#'>
        Login
      </a>
    </div>
  )
}

export default LoginStatus
