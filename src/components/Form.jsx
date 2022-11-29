import React from 'react'
import styles from '../modules/Bienvenido.module.css';
//import styles from '/src/components/FormForm.module.css'; 
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';

export function validate (inputs){
    let errors={};
    if(!inputs.username) errors.username = "Se requiere un usuario";
    //if(!regexEmail.test(inputs.email)) errors.email = "Debe ser un correo electrónico"
    if(!inputs.password) errors.password = "Se requiere una password valida";
    return errors;
  }

export default function Form(){
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    username: "",
    password: ""
  });
  const [errors, setErrors] = useState({
    username: "",
    password: ""
  });

  function handleChange(evento){
    setErrors(
      validate({      
        ...inputs,
        [evento.target.name]:evento.target.value,
      })
    );
    // de esta manera puedo agregar propiedades al objeto sin pisar las anteriores, asi no
    // tenemos que crear un handlechange por casa input, lo mismo con los errores.
    setInputs({
      ...inputs,
      [evento.target.name]:evento.target.value,
    });
  }
  function handleSubmit(evento){
    evento.preventDefault() // evita la recarga de la pagina y asi no se pierden datos.

    if(Object.keys(errors).length > 0)// paso las keys a un arreglo, si hay valores es que tengo algun error
    {
      alert("Debes corregir los errores");
    }
    else{
      alert("Datos completos");
      setInputs({
        username: "",
        password: "",
      });
      setErrors({
        username: "",
        password: "",
      });
    }
  }
    
    return( 
    <div >
        <form onSubmit={handleSubmit}>
        <span > 
            <label htmlFor="username">Username:</label> 
            <input 
                key="username"
                name="username"
                type="text" 
                placeholder="Escriba su usuario..."
                value={inputs.username}
                onChange={handleChange}
                className={errors.username && "warning"} />
            <p className='danger'> {errors.username}</p>

            <label htmlFor="password">Password:</label> 
            <input 
                key="password"
                name="password"
                type="text" 
                placeholder="Escriba su usuario..."
                value={inputs.password}
                onChange={handleChange}
                className={errors.password && "warning"} />
            <p className='danger'> {errors.password}</p>

            <button type="submit" >Enviar</button>
        </span>

            <div>
                {/* <button onClick={()=>navigate("/home")} className={styles.button}
                style={{marginTop: "2%", marginBottom: "2%"}}>Volver</button> */}
            </div>
        </form>
    </div>
    );
}