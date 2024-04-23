import axios from 'axios'
import React, { useState } from 'react'

const usarCrud = (urlBase) => {
    const [apiData, setApiData] = useState()
    const [estaCargando, setEstaCargando] = useState(true)
    const [tenemosError, setTenemosError] = useState(false)
    //leer
    const obtenerApi = (ruta="users") => {
        const url = `${urlBase}${ruta}/`
        axios.get(url)
            .then(respuesta => setApiData(respuesta.data))
            .catch(falla => console.log(falla))
    }
    //crear
    const postApi = (ruta, data) => {
        const url = `${urlBase}${ruta}/`
        axios.post(url, data)
            .then(respuesta => {
                setApiData([...apiData, respuesta.data]);
                console.log(respuesta)
            })
            .catch(falla => console.log(falla))
    }  
    //eliminar
    const deleteApi = (ruta, id)=>{
        const url = `${urlBase}${ruta}/${id}/`
        axios.delete(url)
            .then(()=>{
                setApiData(apiData.filter((usuario)=>usuario.id!==id));
                console.log("Eliminación exitosa")
            })
            .catch(falla => console.log(falla))
    }
    //actualizar
    const updateApi = (ruta, data, id) => {
        const url = `${urlBase}${ruta}/${id}/`;
        axios.patch(url, data)
            .then(respuesta => {
                setApiData(apiData.map((usuario)=> usuario.id === id? respuesta.data : usuario));
                console.log(respuesta.data)})
            .catch(fallo => console.log(fallo));
    }

    return [apiData, obtenerApi, postApi, deleteApi, updateApi]
}

export default usarCrud