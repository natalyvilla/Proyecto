import React from 'react'
import './NewsLetter.css'
const NewsLetter = () => {
  return (
    <div className='newsletter'>
      <h1>Obtenga ofertas exclusivas en su correo electrónico</h1>
      <p>Suscríbete a nuestro boletín y mantente actualizado</p>
      <div>
        <input type="email" placeholder='Escriba su correo:' />
        <button>Suscribete</button>
      </div>
    </div>
  )
}

export default NewsLetter
