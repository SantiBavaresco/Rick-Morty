import React from 'react'
import styles from '../modules/Bienvenido.module.css';
//import styles from '/src/components/FormForm.module.css'; 
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import validation from "./validation.js";


export default function Form(props){
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
     username: "",
     password: "" 
  });
  const [errors, setErrors] = useState({
    username: "",
    password: ""
  });

  function handleChange(evento){
    setErrors(
      validation({      
        ...userData,
        [evento.target.name]:evento.target.value,
      })
    );
    // de esta manera puedo agregar propiedades al objeto sin pisar las anteriores, asi no
    // tenemos que crear un handlechange por casa input, lo mismo con los errores.
    setUserData({
      ...userData,
      [evento.target.name]:evento.target.value,
    });
  }

  function handleSubmit(evento){
    evento.preventDefault();
    if(Object.keys(errors).length > 0)// paso las keys a un arreglo, si hay valores es que tengo algun error
    {
      alert("Debes corregir los errores");
    }
    else{
      //alert("Datos completos");
      // console.log(props.Login(userData));
      props.Login(userData); 
      setUserData({
        username: "",
        password: ""
      });
      setErrors({
        username: "",
        password: ""
      });
     // evita la recarga de la pagina y asi no se pierden datos.
    }
  }
    
    return( 
    <div className={styles.about}>
        <form onSubmit={handleSubmit}>
        <span > 
            <label htmlFor="username" className={styles.title}>Username: </label> 
            <input 
                key="username"
                name="username"
                type="text" 
                placeholder="Escriba su usuario..."
                value={userData.username}
                onChange={handleChange}
                className={errors.username && "warning"} />
            <p className={styles.danger}> {errors.username && errors.username}</p>

            <label htmlFor="password" className={styles.title}>Password: </label> 
            <input 
                key="password"
                name="password"
                type="text" 
                placeholder="Escriba su contraseña..."
                value={userData.password}
                onChange={handleChange}
                className={errors.password && "warning"} />
            <p className={styles.danger}> {errors.password && errors.password}</p>

            <button type="submit" className={styles.button}>Enviar</button>
        </span>

            <div>
                {/* <button onClick={()=>navigate("/home")} className={styles.button}
                style={{marginTop: "2%", marginBottom: "2%"}}>Volver</button> */}
            </div>
        </form>
    </div>
    );
}