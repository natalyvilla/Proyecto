import React from 'react'
import './CSS/LoginSignup.css'

const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Iniciar Sesion</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Tu nombre' />
          <input type="email" placeholder='Correo electronico' />
          <input type="password" placeholder='Contraseña' />
        </div>
        <button>Continuar</button>
        <p className="loginsignup-login">Already have an account? <span>Inicia sesión aquí</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id='' />
          <p>Al continuar, acepto los términos de uso y la política de privacidad..</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup
