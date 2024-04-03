import './styles/App.css'
import { Conversor } from './components/Conversor'
import { NavBar } from './components/NavBar'
import { useState } from 'react'
import { Historial } from './components/Historial'


export const App = () => {

  const [verMas, setVerMas] = useState(false);
  const handler = () => {
    if (verMas) {
      setVerMas(false);
    }
    else {
      setVerMas(true);
    }
  }

  return (
    <>
      <NavBar />
      <div className='body'>
        <Conversor />
        <button className='verHistorial' onClick={handler}>Ver historial</button>
        {verMas && <Historial />}
      </div>
    </>
  )
}