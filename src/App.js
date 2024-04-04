import './App.css';
// import "./fonts/fonts.css";
import { useEffect,useState } from "react"
import Boton from './components/Boton';
import Testimonio from './components/Testimonio';
import {useForm} from 'react-hook-form'
const apiKey = process.env.REACT_APP_API_KEY

function App() {
    const [gifUrl,setGifUrl] = useState();
    const {register,formState:{errors},handleSubmit,reset} =useForm()

    useEffect(()=>{
        // setGifUrl( "https://imgs.search.brave.com/O1jWj5GDnSgw7PWDzvorLh51H26BVNnxb8f-G9bOlpU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQ2/Mzg3MTA3OS92ZWN0/b3IvcGFuZGEtbG9n/by1pc29sYXRlZC1w/YW5kYS1vbi13aGl0/ZS1iYWNrZ3JvdW5k/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1nb1VHY0lTUHFS/UUpnR3JhLVVBcF9v/RFo0S2NqMjJic2hl/aFZSNEFfdEVFPQ")
        // fetch("https://api.giphy.com/v1/gifs/random?api_key=Rpepy3DtQhnSFPT7Cb2GtbLJLRHIreHr")
        fetch(`https://api.giphy.com/v1/gifs/search?q=saving%20money&&lang=sp&&api_key=${apiKey}`)
        .then(res => res.json())
        .then(data => {
            //Num de gifs
            let status = data.pagination.count;
            let random = Math.floor(Math.random()*status);
            let gif=data.data[random].images.downsized.url;
            setGifUrl(gif)
        })
    },[])

    function insertar(data){
      console.log(data)
      reset()
    }

  return (
    <div >
      <header>
            <div className="topHero">
                <img className="megafono" 
                src='../assets/megafono.png'
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

            <div className="line-hero"> </div>            
      </header>

      {/* Gif */}
      <section className="video" id='somos'>
            <p className="videoTexto">
                En Coach planeamos, diseñamos y te acompañamos en tu recorrido
                hacia la Libertad Financiera
            </p>
            <div >
                <img className="gif" src={gifUrl} alt="Gif" />
            </div>
      </section>
      
      <section className="garantizado" >
            <p className="p1Garantizado">100% GARANTIZADO</p>
            <p className="p2Garantizado">Si no mejoramos tus finanzas, te devolvemos tu dinero</p>
            <Boton texto='Me interesa' />
      </section>

      <section className='preguntas container'id="preguntas" >
            <h2 className='preguntas-frecuentes'>Preguntas Frecuentes</h2>
            <div class=" accordion accordion-flush" id="accordionFlushExample">

                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button class="accordion-button collapsed titulo-acordeon" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    ¿Qué es COACH?
                    </button>
                  </h2>
                  <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body contenido-acordeon">COACH es un Programa de Asesoría Financiera + Coaching Financiero donde tienes acceso a Economistas, Coaches Financieros, Certified Financial Planners® y Asesores Financieros certificados por la AMIB (Asociación Mexicana de Instituciones Bursátiles). Todos ellos trabajan de la mano contigo para optimizar tus finanzas, llevarlas al siguiente nivel y sentar las bases para lograr tu Libertad Financiera.</div>
                  </div>
                </div>

                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button class="accordion-button collapsed titulo-acordeon" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                    ¿Cómo funciona COACH?
                    </button>
                  </h2>
                  <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body contenido-acordeon">Primero analizamos la salud de tus finanzas para saber en qué etapa te encuentras en tu recorrido hacia la Libertad Financiera. Dependiendo de los resultados, podemos empezar a trabajar con objetivos básicos como ayudarte a salir de deudas, hasta metas mucho más avanzadas como crear un portafolio de inversión diversificado. </div>
                  </div>
                </div>

                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button class="accordion-button collapsed titulo-acordeon" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                    ¿Cuál es el costo y duración?
                    </button>
                  </h2>
                  <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body contenido-acordeon">El Programa tiene una duración de 6 meses. En este tiempo tendrás 12 videollamadas y mensajes ilimitados con nuestro equipo de expertos, los cuales van a trabajar todos en conjunto para optimizar tus finanzas y encaminarte hacia la Libertad Financiera. El costo es de $999/mes durante 6 meses.</div>
                  </div>
                </div>

                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button class="accordion-button collapsed titulo-acordeon" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                    ¿Cuál es la diferencia entre Asesor Financiero vs. Coach Financiero?
                    </button>
                  </h2>
                  <div id="flush-collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                  <div class="accordion-body contenido-acordeon">Aunque los 2 tienen algunas similitudes, también hay varias diferencias entre ellos. Aquí te compartimos
                  un PDF donde podrás conocer el alcance de cada uno de ellos: ver PDF</div>
                  </div>
                </div>
            </div>
      </section>                      

      {/* Formulario  */}
      <section className='formSection' id='idContactanos'>
            <img className='formImg'
                  src='../../assets/F.png'
                  alt='Imagen Men'/>
            <h2>Mejoremos tus finanzas</h2>
            <form  className='form' onSubmit={handleSubmit(insertar)}>

                <div className='contenedorInputError'>
                    <input 
                    type='text' 
                    placeholder='Nombre Completo'
                    {...register("Nombre",
                    {required:true,minLength:3,maxLength:20})
                    }
                    />
                    {
                    errors.Nombre?.type ==="required" && (                   
                    <p className='mensajeError'>Ingresa tu nombre</p>
                    )
                    }
                    {
                    errors.Nombre?.type ==="minLength" && (                   
                    <p className='mensajeError'>Ingresa mínimo 3 caracteres</p>
                    )
                    }
                    {
                    errors.Nombre?.type ==="maxLength" && (
                      <p className="mensajeError">Ingresa máximo 20 caracteres</p>
                    )
                    }
                </div>

                <div className='contenedorInputError'>
                    <input type='email' 
                    placeholder='Correo Eléctronico'
                    {
                      ...register("correo",{
                        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
                        required:true
                      })
                    }
                    />
                    {
                      errors.correo?.type === "required" && (
                        <p className="mensajeError">Este campo es requerido</p>
                      )
                    }
                    {
                      errors.correo?.type === "pattern" && (
                        <p className="mensajeError">El formato del correo no es válido</p>
                      )
                    }

                </div>

                <div className='contenedorInputError'>
                    <input type='tel' placeholder='WhatsApp' 
                    {...register("numero",
                    {required:true,minLength:8})
                    }
                    />
                    {
                      errors.numero?.type === "required" && (
                        <p className="mensajeError">Este campo es requerido</p>
                      )
                    }
                    {
                      errors.numero?.type === "minLength" && (
                        <p className="mensajeError">Ingresa mínimo 8 caracteres</p>
                      )
                    }

                </div>

                
                <button className='boton botonFormulario'>Enviar</button>
            </form>
      </section>

      <section className='testimonios d-flex justify-content-center '>
        <div className='row testimonios-row '>

            <Testimonio 
              imagen='A.png'
              ocupacion='Médico'
              descripcion='Sentía que trabajaba mucho y me preocupaba el hecho de que no estaba ahorrando lo suficiente para mi jubilación. En COACH me ayudaron a crear un plan para priorizar el ahorro para mi retiro, en conjunto de un portafolio de inversión. '
            />
            <Testimonio 
              imagen='B.png'
              ocupacion='CEO'
              descripcion='Estaba constantemente preocupada por mis finanzas y mi salud empezó a verse afectada por el estrés. Gracias a COACH tengo mucha más claridad sobre mis finanzas e inclusive ha mejorado mi calidad de sueño al tener menos estrés.'
            />
            <Testimonio 
              imagen='C.png'
              ocupacion='Contador'
              descripcion='A pesar de ser contador, no tenía un plan financiero claro y sentía que no estaba aprovechando bien mis recursos. En COACH hicieron un análisis completo de mis finanzas para identificar dónde podía ser más eficiente con mi dinero.  '
            />
            <Testimonio 
              imagen='D.png'
              ocupacion='Pensionada'
              descripcion='Gracias a los excelentes servicios de COACH, puedo decir que he conseguido un plan financiero seguro y estable que me permite gozar de una vida más plena en mi retiro. Además mis conocimientos financieros han mejorado muchísimo.'
            />
        </div>
      </section>
     
      <a href='' ><img className='whats' src='../../assets/W.png' /></a> 
      
      <footer className="footer" id="test">
            <p className="p1Footer">¿Cómo andan tus finanzas?</p>
            <Boton texto='Test'/>
            <div className="lineaFooter"></div>
            <p className="terminos">Términos y Condiciones | Aviso de Privacidad | 
            Capitalex Group SAPI de CV © 2023</p>
      </footer>
    </div>
  );
}

export default App;
