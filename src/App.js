import './App.css';
import reward from './img/reward.png';
import Btn from './componentes/btn';
import Cont from './componentes/cont';
/*hooks - useState es el + comun*/
import { useState } from 'react';

function App() {

  const [numC, setNum] = useState(0);

/*recibe () - retorna => */
  const manClic = () => {
    setNum(numC + 1);
  }; /*tiene que terminar ; */

  const renCont = () => {
    setNum(0);
  }; 

  return (
    <><div className='App'>
      <div className='logo-cont'>
        <img className='logo'
          src={reward}
          alt='logo' />
      </div>
    </div>
    <div className='cont-princ'>
      <Cont num={numC}/>
      <Btn
      texto= 'Clic'
      isBtnClic={true} 
      manClic={manClic} />
      <Btn 
       texto= 'Ren'
       isBtnClic={false} 
       manClic={renCont} />
    </div></>
  );
}

export default App;
