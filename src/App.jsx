import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FormularioDatosEnvio from './assets/components/FormularioDatosEnvio'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <FormularioDatosEnvio />

    </>
  )
}

export default App
