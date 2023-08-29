import React from "react"
// import Megafono from 
function Hero (){

    return(
        <header>
             <div className="topHero">
                <img className="megafono" 
                src='../../assets/megafono.png'
                alt='Imagen megafono'/>
                <h5 className="tituloTopHero">Primera asesoría sin costo +1 mes gratis!</h5>
            </div>
        

            <div className='imagenPrincipal'>
                    <nav class="navbar navbar-expand-md ">
                    <div class="container-fluid">
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <a class="navbar-brand" href="#">
                        <img src="../../assets/GBM.png" width="300" alt="Logo de la página web" />
                        </a>
                        {/* Quitar las clases de ul no necesarias para que no haya 
                        problemas al usar flex en el nav */}
                        <ul class="navbar-nav d-flex justify-content-center align-items-center ">
                            <li class="nav-item">
                            <a class="nav-link " aria-current="page" href="#somos">Somos</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="#preguntas">Preguntas</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="#test">Test</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link boton b-contactar" href="#idContactanos" >Contáctanos</a>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </nav>

            {/* <p style={{fontFamily:'mv-boli',fontSize:'60px'}} >Asesoría Financiera </p> */}
            <p className='simbolo1'>Asesoría Financiera </p>
            <p className='simbolo2'> Coaching Financiero </p>
            <p className='simbolo3'>   Libertad Financiera </p>
            </div>

            <div className="line-hero"> 
            </div> 
            
      </header>
    )
}
export default Hero