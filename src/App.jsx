import { useEffect, useState } from 'react';
import './App.css'
import usarCrud from './hooks/usarCrud'
import UsuarioFormulario from './components/UsuarioFormulario';
import UsuarioCard from './components/UsuarioCard';


function App() {
  const urlBase = "https://users-crud.academlo.tech/"

  const [estaAbierto, setEstaAbierto] = useState(false)

  const [editarUsuario, setEditarUsuario] = useState();

  const [apiData, obtenerApi, postApi, deleteApi, updateApi]  = usarCrud(urlBase);

  useEffect(() => {
    const ruta = "users";
    obtenerApi(ruta);
  }, [])
  
  //console.log(apiData)

  const manejarApertura = () =>{
    setEstaAbierto(true)
  }

  return (
    <>
      <div className='app'>
        <header className='app__header'> 
          <h1 className='app__titulo'>Usuarios CRUD</h1>
          <button onClick={setEstaAbierto}>Crear Usuario</button>
        </header>
        
        <UsuarioFormulario
          postApi={postApi}
          apiData={apiData}
          updateApi={updateApi}
          editarUsuario={editarUsuario}
          setEditarUsuario={setEditarUsuario}
          estaAbierto={estaAbierto}
          setEstaAbierto={setEstaAbierto}
        />
        <div className='app__contenedor'>
          {
            apiData?.map((usuario)=>(
              <UsuarioCard
                key={usuario.id}
                usuario={usuario}
                deleteApi={deleteApi}
                setEditarUsuario={setEditarUsuario}
              />
            ))
          }
        </div>
        
      </div>
    </>
  )
}

export default App
