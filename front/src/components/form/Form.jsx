import React, { useState } from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { validation } from './validation';
import './Form.css'

const Form_login = ({login}) => {
    
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
      <div className='divForm' >
        <div className='div-conteiner'>
          <form onSubmit={handleSubmit}>
          <FloatingLabel
        controlId="floatingInput"
        className="mb-3"
        
      >Username 
        <Form.Control className='form_control' type="text"             
          placeholder="username" name='username'
            value={userData.username} onChange={handleInputChange}/>
        </FloatingLabel>
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
              <br/>
              <button>Login</button>
          </form>
          </div>
    </div>
  )
}

export default Form_login

    // <FloatingLabel
    //     controlId="floatingInput"
    //     label="Email address"
    //     className="mb-3"
    //   >
    //     <Form.Control type="text" placeholder="username" name='username'
    //     value={userDate.username} onChange={handleInputChange}/>
    //   </FloatingLabel>