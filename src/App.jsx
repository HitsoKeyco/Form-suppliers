import { useEffect, useState } from 'react'
import './App.css'
import FormularioDatosEnvio from './assets/components/FormularioDatosEnvio'
import useFetch from './assets/hooks/useFetch'

function App() {

  const [count, setCount] = useState(0)    
  const baseUrl = 'https://everchic-service.onrender.com/api/v1'
  const [infoApi, getApi, createRegister, deleteRegister, updateRegister] = useFetch(baseUrl)

  useEffect(() => {
    getApi('/customers')
}, [])

    console.log(infoApi)
  return (
    <>
    <FormularioDatosEnvio createRegister={ createRegister }/>

    </>
  )
}

export default App
