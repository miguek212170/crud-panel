import React from 'react'
import "./styles/usuarioCard.css"

const UsuarioCard = ({usuario, deleteApi,  setEditarUsuario}) => {

    //console.log(usuario)

    const manejarEliminacion =() =>{
        deleteApi("users", usuario.id);
    }

    const manejarEdicion = () =>{
        setEditarUsuario(usuario)
    }

  return (
    <section className='usuario'>
        <h2 className='usuario__nombre'>{usuario.first_name} {usuario.last_name}</h2>
        <hr className='usuario__linea'/>
        <ul className='usuario__lista'>
            <li className='usuario__item'><span>Email: </span><span>{usuario.email}</span></li>
            <li className="usuario__item"><span>Cumpleaños: </span><span><ion-icon name="gift-outline"></ion-icon>{usuario.birthday}</span></li>
        </ul>
        <hr className='usuario__linea'/>
        <div className='usuario__boton'>
            <button  onClick={manejarEliminacion}>Borrar</button>
            <button  onClick={manejarEdicion}>Editar</button>
        </div>
    </section>
  )
}

export default UsuarioCard