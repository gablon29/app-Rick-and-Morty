import React, { useState } from 'react'
import { validation } from './validation';

const Form = ({login}) => {
    
    const [userData, setUserData] = React.useState({ username: '', password: '' });

    const handleInputChange = (evento) => {
        const prop = evento.target.name
        const value = evento.target.value
        setUserData({
            ...userData,
            [prop]: value
        })
        setErrors(validation({
            ...userData,
            [prop]: value
        }, errors))
    }

    const [errors, setErrors] = useState({
        username: '', password: '' 
    })

    const handleSubmit = (evento) => {
        evento.preventDefault()
        login(userData)
    }

  return (
      <div>
          <form onSubmit={handleSubmit}>
              <label htmlFor='username'>Username</label>
              <input type='text' name='username' value={userData.username} onChange={handleInputChange} />
              <span>
                  
                  {
                  errors.username && <h3>{ errors.username }</h3>
                }
              </span>
              
              <label htmlFor='password'>Password</label>
              <input type='password' name='password' value={userData.password} onChange={handleInputChange} />
              <span>
                  {
                  errors.username && <h3>{ errors.password }</h3>
                }
              </span>
                  

              <button>Login</button>
          </form>
    </div>
  )
}

export default Form