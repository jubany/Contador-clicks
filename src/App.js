import React from 'react';
import './App.css';
import Button from './components/Button'
import Counter from './components/Counter';
import FreeCodeCampLogo from './images/Freecodecamp-logo.png'
import { useState } from 'react';


function App() {
  
const [numClicks, setnumClicks] = useState(0);

const manejarClick = () => {
  setnumClicks(numClicks + 1)
};

const restartClick = () => {
  setnumClicks(0)

};


  return (
    <div className="App">
      <div className='logo-container'>
      <img className='logo'src={FreeCodeCampLogo} alt='El logo'/>
      </div>
      <div className='container-main'>
        <Counter
        numClick={numClicks}/>
      <Button
      texto='clic'
      buttonClick={true}
      manejarClick={manejarClick}/>
      <Button
      texto='restart'
      buttonClick={false}
      manejarClick={restartClick}/>
      </div>
    </div>
  );
}

export default App;
