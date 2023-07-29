import React, { useState } from 'react'
import axios from 'axios'

const useFetch = (baseUrl) => {

    const [infoApi, setinfoApi] = useState()

    //READ

    const getApi = ( path ) => {
        const url = `${baseUrl}${path}/`
        axios.get(url)
        .then(res => setinfoApi(res.data))
        .catch(err => console.log(err))
    }    

    //CREATE
    //No olvidar de data son los datos q vamos a enviar
    const createRegister = (path, data) => {
        const url = `${baseUrl}${path}/`
        axios.post(url, data)
        .then(res => {
            console.log(res.data)
            //aqui agregamos a infoApi res.data
            setinfoApi([...infoApi, res.data])
        })
        .catch(err => console.log(err))
    }

    //DELETE

    const deleteRegister = (path, id) => {
        const url = `${baseUrl}${path}/${id}/`
        axios.delete(url)
        .then(res => {
            console.log(res.data)
            //filtramos los elementos para q retornen menos el elemento que eliminamos por id
            const infoApiFiltered = infoApi.filter(element => element.id !== id)
            setinfoApi(infoApiFiltered)
        })
        .catch(err => console.log(err))
        
    }

    //UPDATE

    const updateRegister = (path, id, data) => {
        const url = `${baseUrl}${path}/${id}/`
        axios.path(url, data)
        .then(res => {
            console.log(res.data)
            const infoApiUpdate = infoApi.map(element => {
                if(id === element.id){
                    return data
                }else{
                    return element
                }
            })
            //retornamos los datos actualizados
            setinfoApi(infoApiUpdate)
        })
        .catch(err => console.log(err))


    }

    return [ infoApi, getApi, createRegister, deleteRegister, updateRegister ]
}

export default useFetch