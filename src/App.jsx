import { useEffect, useState } from 'react'
import useFetch from './assets/hooks/useFetch'
import Order from './assets/components/Order'
import FormularioDatosEnvio from './assets/components/FormularioDatosEnvio'

function App() {
  const baseUrl = 'https://everchic-service.onrender.com/api/v1'
  const [infoApi, getApi, createRegister, deleteRegister, updateRegister, autenticOrder] = useFetch(baseUrl)

  useEffect(() => {
    getApi('/customers')
  }, [])

  console.log(infoApi);

  return (
    <>
      {infoApi && infoApi.length > 0 ? (
        <>
          
          <FormularioDatosEnvio />
        </>
      ) : (
        <Order getApi={getApi} autenticOrder={autenticOrder} />
      )}
    </>
  )
}

export default App
