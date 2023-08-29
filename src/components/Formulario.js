function Formulario (){

    return (
        <section className='formSection' id='idContactanos'>
        <img className='formImg'
              src='../../assets/F.png'
              alt='Imagen Men'/>
        <h2>Mejoremos tus finanzas</h2>
        <form  className='form'>
          <input type='text' placeholder='Nombre Completo' />
          <input type='email' placeholder='Correo Eléctronico'/>
          <input type='' placeholder='WhatsApp' />
          <button className='boton botonFormulario'>Enviar</button>
        </form>
      </section>
    )
}

export default Formulario;