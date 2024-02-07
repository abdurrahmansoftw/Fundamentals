import React, { useReducer } from 'react'
import authReducer from './reducers/authReducer'

const LoginStatus = () => {
  const [user, dispatch] = useReducer(authReducer, '')

  if (user)
    return (
      <React.Fragment>
        <div>
          <span className='mx-2'>{user}</span>
          <a onClick={() => dispatch({ type: 'LOGOUT' })} href='#'>
            Logout
          </a>
        </div>
      </React.Fragment>
    )
  return (
    <div>
      <a
        onClick={() => dispatch({ type: 'LOGIN', username: 'AbdurRahman' })}
        href='#'
      >
        Login
      </a>
    </div>
  )
}

export default LoginStatus
