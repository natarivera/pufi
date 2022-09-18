import './App.css';
import Header from './Header/Header';
import Slider from './Slider/Slider';
import Pufinfo from './Pufinfo/Pufinfo';
import Pufimage from './Pufimage/Pufimage';
import Subscriber from './Subscriber/Subscriber';
import Footer from './Footer/Footer';
import umbrella from './Pufimage/umbrella.png';
import umbrellaicon from './Pufinfo/umbrellaicon.png';
import puff from './Pufinfo/puff.png';
import bolsasecologicas from './Pufinfo/bolsasecologicas.png';
import infonap from './Pufinfo/infonap.png';
import Espufi from './Espufi/Espufi'



function App() {
  return (
    <div className='App'>
     <Header/>   
     <Slider/> 
     <div className='pufimg'>
        <Pufimage src={umbrella}/>
        <Pufinfo src={umbrellaicon} title= "Pufi RAIN" descripcion="Descripcion del producto. Este es un texto simulado" vermas ="VER MAS"/>  
        <Pufinfo src={puff} title= "Pufi PUFF" descripcion="Descripcion del producto. Este es un texto simulado" vermas ="VER MAS"/>  
        <Pufimage src={umbrella}/>
        <Pufimage src={umbrella}/>
        <Pufinfo src={bolsasecologicas} title= "Pufi CART" descripcion="Descripcion del producto. Este es un texto simulado" vermas ="VER MAS"/>  
        <Pufinfo src={infonap} title= "Pufi NAP" descripcion="Descripcion del producto. Este es un texto simulado" vermas ="VER MAS"/>  
        <Pufimage src={umbrella}/>
     </div>  
        <Espufi />
        <Subscriber/>
    </div>

  );
  /*
  
     
     
     <Footer/>
  */
}

export default App;
