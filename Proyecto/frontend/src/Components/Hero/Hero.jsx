import React from 'react'
import './Hero.css'
import hero_image from '../Assets/hero_image.png'

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>Bienvenidos a sneaker</h2>
        <div>
            <div className="hero-hand-icon">
                <p>Estilo que marca el paso</p>
            </div>
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_image} alt="" />
      </div>
    </div>
  )
}

export default Hero
