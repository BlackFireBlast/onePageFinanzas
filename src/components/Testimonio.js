import React from 'react'

function Testimonio({imagen,ocupacion,descripcion}) {
  return (
    <div className='tarjeta col-12 col-sm-6 col-lg-3'>
                <img className='ImagenTestimonio' src={`../../assets/${imagen}`} />               
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