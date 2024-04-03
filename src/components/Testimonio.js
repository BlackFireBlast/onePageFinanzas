import React from 'react'

function Testimonio({imagen,ocupacion,descripcion}) {
  return (
    <div className='tarjeta col-12 col-sm-6 col-lg-3'>
      
                <div className='contenedorImagen'>
                  <img className='ImagenTestimonio' src={`../../assets/${imagen}`} />               
                  <div className='cuadroImagen'></div>
                </div>

                <p className='ocupacion'>{ocupacion}</p>
                <div className='subTarjeta'>
                    <img className='estrellas' src='../../assets/Estrellas.png'/>
                    <p >
                    {descripcion}
                    </p>
                </div>
    </div>
  )
}

export default Testimonio