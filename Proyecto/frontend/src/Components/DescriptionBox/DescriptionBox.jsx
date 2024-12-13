import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Descripcion</div>
      </div>
      <div className="descriptionbox-description">
        <p>Un sitio web de comercio electrónico es una plataforma en 
          línea que facilita la compra y venta de productos o servicios 
          a través de Internet. Sirve como un mercado virtual donde empresas 
          e individuos pueden exhibir sus productos, interactuar con clientes 
          y realizar transacciones sin necesidad de presencia física. Los sitios 
          web de comercio electrónico han ganado una inmensa popularidad debido a 
          su conveniencia, accesibilidad y alcance global que ofrecen.</p>
          <p>
          Los sitios web de comercio electrónico suelen mostrar productos 
          o servicios junto con descripciones detalladas, imágenes, precios 
          y cualquier variación disponible (por ejemplo, tamaños, colores). 
          Cada producto suele tener su propia página dedicada con información relevante.

          </p>
      </div>
    </div>
  )
}

export default DescriptionBox
