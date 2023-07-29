import { useEffect, useState } from 'react'
import useFetch from './assets/hooks/useFetch'
import Order from './assets/components/Order'
import FormularioDatosEnvio from './assets/components/FormularioDatosEnvio'
import Swal from 'sweetalert2'

function App() {
  const baseUrl = 'https://everchic-service.onrender.com/api/v1'
  const [infoApi, getApi, createRegister, deleteRegister, updateRegister, autenticOrder] = useFetch(baseUrl)

  useEffect(() => {
    getApi('/customers')
  }, [])

  console.log(infoApi);

  return (
    <>
      {infoApi === true ? (        
          <FormularioDatosEnvio />
      ) : (
        <Order getApi={getApi} autenticOrder={autenticOrder} />
        
      )}
    </>
  )
}

export default App
