import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const a=15;
  const great = ( ) => {return "hi hello"};
  return (
    <>
      <h1>welcome to react</h1>
      <h2>{4+4}</h2>
      <h3>{great()}</h3>
      <h4>{a}</h4>
    </>
  );
}

export default App;
