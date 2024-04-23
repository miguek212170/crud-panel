import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import "./styles/usuarioFormulario.css"

const UsuarioFormulario = ({postApi, updateApi, editarUsuario, setEditarUsuario, estaAbierto, setEstaAbierto}) => {
    /** first_name, last_name, email, password, birthday */
    const {handleSubmit, register, reset} = useForm();

    useEffect(() => {
        if(editarUsuario){
            reset(editarUsuario);
            setEstaAbierto(true);
        }
        
    }, [editarUsuario])
    

    const enviar = data => {
        if(editarUsuario){
            updateApi("users", data, editarUsuario.id);
            setEditarUsuario();
        }else{
            postApi("users", data)
        }
        setEstaAbierto(false);
        postApi("users", data)
        reset({
            first_name: "",
            last_name: "",
            email: "",
            password: "",
            birthday:""
        })

    }

    const manejarCierre = () => {
        setEstaAbierto(false);
        setEditarUsuario();
        reset({
            first_name: "",
            last_name: "",
            email: "",
            password: "",
            birthday:""
        })
    }
  return (
    <div className={`formulario__back ${estaAbierto && "active"}`}>
        <form  className='formulario'onSubmit={handleSubmit(enviar)} >

            <button className='formulario__cerrar' onClick={manejarCierre}>x</button>
            <h2 className='formulario__titulo'>Crear o editar</h2>
            <div className='formulario__item'>
                <label htmlFor="first_name">Nombre: </label>
                <input {...register("first_name")} id='first_name' type="text" />
            </div>
            <div className='formulario__item'>
                <label htmlFor="last_name">Apellido: </label>
                <input {...register("last_name")} id='last_name' type="text" />
            </div>
            <div className='formulario__item'>
                <label htmlFor="email">Email: </label>
                <input {...register("email")} id='email' type="text" />
            </div>
            <div className='formulario__item'>
                <label htmlFor="password">Contraseña: </label>
                <input {...register("password")} id='password' type="password" />
            </div>
            <div className='formulario__item'>
                <label htmlFor="birthday">Cumpleaños: </label>
                <input {...register("birthday")} id='birthday' type="date" />
            </div>
            <button className='formulario__boton'>Enviar</button>
        </form>
    </div>
  )
}

export default UsuarioFormulario ;