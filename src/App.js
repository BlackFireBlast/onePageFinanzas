import Hero from './components/hero.js'
import Footer from './components/Footer';
import Video from './components/Video';
import './App.css';
import Testimonios from './components/Testimonios.js';
import Formulario from './components/Formulario.js'
import Preguntas from './components/Preguntas.js';
import Garantizado from './components/Garantizado.js';
// import "./fonts/fonts.css";

function App() {
  return (
    <div >
      <Hero />
      <Video />
       <Garantizado/>  
      <Preguntas/>
      <Formulario/>
      <Testimonios/> 
     <a href='' ><img className='whats' src='../../assets/W.png' /></a> 
      <Footer />
    </div>
  );
}

export default App;
