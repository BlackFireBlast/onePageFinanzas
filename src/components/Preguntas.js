function Preguntas (){

    return (
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
                <button class="accordion-button collapsed titulo-acordeon" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                ¿Cuál es la diferencia entre Asesor Financiero vs. Coach Financiero?
                </button>
              </h2>
              <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div class="accordion-body contenido-acordeon">Aunque los 2 tienen algunas similitudes, también hay varias diferencias entre ellos. Aquí te compartimos
              un PDF donde podrás conocer el alcance de cada uno de ellos: ver PDF</div>
              </div>
            </div>

        </div>
        </section>
    )
}

export default Preguntas;