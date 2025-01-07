import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Saludar from './components/Saludar';

function App() {

  const [stateCar, setStateCar] = useState(false);
  const [contar, setContar] = useState(0);

  useEffect(() => {
    console.log(`Total: ${contar}`)
  }, [contar])

  const encenderApagar = () => {
    setStateCar(!stateCar);
    setContar(contar + 1);
  }

  const userInfo = {
    name: 'Ethan Arredondo',
    age: 25,
    color: 'white'
  }

  const saludar = (name) => {
    console.log(`Hola ${name}`);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Saludar userInfo={userInfo} saludar={saludar} />

        <h3>El coche esta: {stateCar ? "Encendido" : "Apagado"}</h3>
        <h4>Click: {contar}</h4>
        <button onClick={encenderApagar}> Encender</button>
      </header>
    </div >
  );
}

export default App;
